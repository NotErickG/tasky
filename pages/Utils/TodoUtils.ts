// TodoUtils.js
import { generateClient } from "aws-amplify/data";
import { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

export const deleteTodo = async (todoId: any, callback: (arg0: unknown) => void) => {
  try {
    await client.models.Todo.delete({ id: todoId });
    callback(null); // No error
  } catch (error) {
    callback(error); // Pass the error to the callback
  }
};

export const makeTime = (isoTimeString: any) => {
  // Parse the time string
  const [hours, minutes, seconds] = isoTimeString.split(':');

  // Convert hours to 12-hour format and determine AM/PM
  const hours12 = parseInt(hours, 10) % 12 || 12;
  const amPm = hours >= 12 ? 'PM' : 'AM';

  // Assemble the human-readable time string
  return `${hours12}:${minutes} ${amPm}`;
};


// Additional utilities can be added here
