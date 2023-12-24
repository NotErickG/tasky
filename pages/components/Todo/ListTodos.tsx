import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { formatDate } from "../../Utils/DateUtils";
import {
  HTMLTable,
  Spinner,
  Button,
  Alert,
  Dialog,
  MenuItem,
  ButtonGroup,
} from "@blueprintjs/core";
import { Suggest } from "@blueprintjs/select";
import PopUpButton from "../../Utils/PopUpButton";
import ViewTodo from "./ViewTodo";

const client = generateClient<Schema>();

export default function Todos() {
  const [todos, setTodos] = useState<Schema["Todo"][]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const [selectedTodo, setSelectedTodo] = useState<Schema["Todo"] | null>(null);

  async function listTodos() {
    setIsLoading(true);
    const { data } = await client.models.Todo.list();
    setTodos(data);
    setIsLoading(false);
  }

  // Existing deleteTodo function...

  const handleViewTodo = (todo: Schema["Todo"]) => {
    setSelectedTodo(todo);
    setIsViewDialogOpen(true);
  };

  const renderTodoItem = (
    todo: Schema["Todo"],
    { handleClick, modifiers }: any
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        key={todo.id}
        text={todo.title}
        onClick={() => handleViewTodo(todo)}
        active={modifiers.active}
      />
    );
  };

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe(({ items }) =>
      listTodos()
    );

    return () => sub.unsubscribe();
  }, []);

  // Existing useEffect for subscription...

  if (isLoading) {
    return <Spinner />;
  }

  async function deleteTodo() {
    if (selectedTodoId) {
      setIsLoading(true);
      await client.models.Todo.delete({ id: selectedTodoId });
      setTodos(todos.filter((todo) => todo.id !== selectedTodoId));
      setIsLoading(false);
      setIsAlertOpen(false); // Close the alert after deletion
    }
  }

  const confirmDelete = (todoId: string) => {
    setSelectedTodoId(todoId);
    setIsAlertOpen(true); // Open the alert for confirmation
  };

  return (
    <>
      <Suggest
        items={todos}
        itemRenderer={renderTodoItem}
        onItemSelect={handleViewTodo}
        inputValueRenderer={(todo) => todo.title}
        noResults={<MenuItem disabled={true} text="No results." />}
        popoverProps={{ minimal: true }}
      />

      <Dialog
        isOpen={isViewDialogOpen}
        onClose={() => setIsViewDialogOpen(false)}
        title="View Todo"
      >
        {selectedTodo && (
          <ViewTodo
            todoId={selectedTodo.id}
            onClose={() => setIsViewDialogOpen(false)}
          />
        )}
      </Dialog>
      <HTMLTable striped={true} interactive={true} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{formatDate(todo.dueDate)}</td>
              <td>
                <ButtonGroup>
                  <PopUpButton
                    component={ViewTodo}
                    additionalProps={{ todoId: todo.id }}
                    buttonString="View"
                  />
                  <Button
                    onClick={() => confirmDelete(todo.id)}
                    intent="danger"
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </HTMLTable>

      <Alert
        isOpen={isAlertOpen}
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        icon="trash"
        intent="danger"
        onCancel={() => setIsAlertOpen(false)}
        onConfirm={deleteTodo}
        canEscapeKeyCancel={true}
        canOutsideClickCancel={true}
      >
        <p>Are you sure you want to delete this todo?</p>
      </Alert>
    </>
  );
}
