import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";
import { getCurrentDateTimeLocal, formatDateTime } from "../../Utils/DateUtils";
import {
  Button,
  InputGroup,
  FormGroup,
  TextArea,
  HTMLSelect,
  Checkbox,
  DialogBody,
  DialogFooter,
} from "@blueprintjs/core";
import { Flex } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

interface CreateTodoProps {
  onClose: () => void; // Function to close the dialog
}

const CreateTodo: React.FC<CreateTodoProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(getCurrentDateTimeLocal());
  const [reminderDate, setReminderDate] = useState(getCurrentDateTimeLocal());
  const [status, setStatus] = useState<"awaiting" | "inprogress" | "done">(
    "awaiting"
  );
  const [classID, setClassID] = useState<string>(""); // Updated state variable for classID
  const [classes, setClasses] = useState<Schema["Class"][]>([]);
  const [createMore, setCreateMore] = useState(false); // State to track checkbox

  useEffect(() => {
    async function fetchClasses() {
      const { data } = await client.models.Class.list();
      setClasses(data);
      if (data.length > 0) {
        setClassID(data[0].id); // Default to the first class
      }
    }
    fetchClasses();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formattedDueDate = formatDateTime(dueDate);
    const formattedReminderDate = formatDateTime(reminderDate);

    const newTodoData = {
      title,
      description,
      dueDate: formattedDueDate,
      reminderDate: formattedReminderDate,
      status,
      classID
    };

    console.log("Creating new todo:", newTodoData);

    const { errors } = await client.models.Todo.create(newTodoData);

    if (errors) {
      console.error("Error creating todo:", errors);
      return;
    }

    if (!createMore) {
      onClose(); // Close the dialog only if createMore is not checked
    } else {
      // Reset form for next entry
      setTitle("");
      setDescription("");
      setDueDate(getCurrentDateTimeLocal());
      setReminderDate(getCurrentDateTimeLocal());
      setStatus("awaiting");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogBody>
        <FormGroup label="Title:" labelFor="title-input">
          <InputGroup
            id="title-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>

        <FormGroup label="Description:" labelFor="description-input">
          <TextArea
            id="description-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fill
          />
        </FormGroup>

        <FormGroup label="Due Date:" labelFor="duedate-input">
          <InputGroup
            id="duedate-input"
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup label="Reminder Date:" labelFor="reminderdate-input">
          <InputGroup
            id="reminderdate-input"
            type="datetime-local"
            value={reminderDate}
            onChange={(e) => setReminderDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup label="Status:" labelFor="status-input">
          <HTMLSelect
            id="status-input"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "awaiting" | "inprogress" | "done")
            }
          >
            <option value="awaiting">Awaiting</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </HTMLSelect>
        </FormGroup>
        <FormGroup label="Class:" labelFor="class-input">
          <HTMLSelect
            id="class-input"
            value={classID}
            onChange={(e) => setClassID(e.target.value)}
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.subject} - {cls.teacher}
              </option>
            ))}
          </HTMLSelect>
        </FormGroup>
      </DialogBody>
      <DialogFooter>
        <Flex justifyContent="space-between" style={{ width: "100%" }}>
          <Flex>
            <Checkbox
              label="Create more tasks"
              checked={createMore}
              onChange={(e) => setCreateMore(e.currentTarget.checked)}
            />
          </Flex>
          <Flex>
            <Button type="submit" intent="primary">
              Create Todo
            </Button>
          </Flex>
        </Flex>
      </DialogFooter>
    </form>
  );
};

export default CreateTodo;
