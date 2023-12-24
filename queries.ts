/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getClass = /* GraphQL */ `query GetClass($id: ID!) {
  getClass(id: $id) {
    createdAt
    description
    id
    location
    meetsFriday
    meetsMonday
    meetsSaturday
    meetsSunday
    meetsThursday
    meetsTuesday
    meetsWednesday
    owner
    startTime
    subject
    teacher
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClassQueryVariables, APITypes.GetClassQuery>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    classID {
      createdAt
      description
      id
      location
      meetsFriday
      meetsMonday
      meetsSaturday
      meetsSunday
      meetsThursday
      meetsTuesday
      meetsWednesday
      owner
      startTime
      subject
      teacher
      updatedAt
      __typename
    }
    createdAt
    description
    dueDate
    id
    owner
    reminderDate
    status
    title
    todoClassIDId
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listClasses = /* GraphQL */ `query ListClasses(
  $filter: ModelClassFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listClasses(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      location
      meetsFriday
      meetsMonday
      meetsSaturday
      meetsSunday
      meetsThursday
      meetsTuesday
      meetsWednesday
      owner
      startTime
      subject
      teacher
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClassesQueryVariables,
  APITypes.ListClassesQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTodos(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      dueDate
      id
      owner
      reminderDate
      status
      title
      todoClassIDId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
