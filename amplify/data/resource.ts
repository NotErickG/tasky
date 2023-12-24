import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { describe } from "node:test";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rules below
specify that owners, authenticated via your Auth resource can "create",
"read", "update", and "delete" their own records. Public users,
authenticated via an API key, can only "read" records.
=========================================================================*/
const schema = a.schema({

  StatusEnum: a.enum(["awaiting", "inprogress", "done"]),
  
  Todo: a
    .model({
      title: a.string().required(),
      description: a.string().required(),
      dueDate: a.datetime().required(),
      reminderDate: a.datetime().required(),
      status: a.ref("StatusEnum").required(),
      classID: a.hasOne("Class").required(),
    })
    .authorization([a.allow.owner()]),

  Class: a
    .model({
      teacher: a.string().required(),
      subject: a.string().required(),
      startTime: a.time().required(),
      meetsSunday: a.boolean().required(),
      meetsMonday: a.boolean().required(),
      meetsTuesday: a.boolean().required(),
      meetsWednesday: a.boolean().required(),
      meetsThursday: a.boolean().required(),
      meetsFriday: a.boolean().required(),
      meetsSaturday: a.boolean().required(),
      location: a.string(),
      description: a.string(),
    })
    .authorization([a.allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
