// ViewTodo.tsx
import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { formatDate } from "../../Utils/DateUtils";
import {
  Spinner,
  Button,
  Intent,
  DialogBody,
  DialogFooter,
  Text,
  Tag,
  Section,
  SectionCard,
  Card,
} from "@blueprintjs/core";
import { Flex } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

interface ViewTodoProps {
  todoId: string;
  onClose: () => void; // Function to close the dialog
}

const ViewTodo: React.FC<ViewTodoProps> = ({ todoId, onClose }) => {
  const [todo, setTodo] = useState<Schema["Todo"] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data } = await client.models.Todo.get({
          id: todoId,
        });
        setTodo(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchTodo();
  }, [todoId]);

  const handleUpdateTodo = () => {
    // Update logic...
  };

  const handleDeleteTodo = async () => {
    // Delete logic...
    const { data } = await client.models.Todo.delete({
      id: todoId,
    });
    onClose(); // Close the dialog after deleting
  };

  if (error) return <div>Error: {error}</div>;
  if (!todo) return <Spinner />;

  return (
    <>
      <DialogBody>
        <Section
          style={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
          }}
          title={todo.title}
          rightElement={<Tag>{todo.status}</Tag>}
        >
          <SectionCard>
          <Text>
            <b>Description:</b> <Card>{todo.description}</Card>
          </Text>
          <Text>
            <b>Due Date:</b> {formatDate(todo.dueDate)}
          </Text>
          <Text>
            <b>Reminder Date:</b> {formatDate(todo.reminderDate)}
          </Text>
          <Text>
            <b>Created:</b> {formatDate(todo.createdAt)}
          </Text>
          <Text>
            <b>Updated:</b> {formatDate(todo.updatedAt)}
          </Text>
          </SectionCard>
        </Section>
      </DialogBody>
      <DialogFooter>
        <Flex justifyContent="space-between" style={{ width: "100%" }}>
          <Flex>
            <Button intent={Intent.PRIMARY} onClick={handleUpdateTodo}>
              Update Todo
            </Button>
          </Flex>
          <Flex>
            <Button intent={Intent.DANGER} onClick={handleDeleteTodo}>
              Delete Todo
            </Button>
          </Flex>
        </Flex>
      </DialogFooter>
    </>
  );
};

export default ViewTodo;
