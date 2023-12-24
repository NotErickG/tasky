/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createClass = /* GraphQL */ `mutation CreateClass(
  $condition: ModelClassConditionInput
  $input: CreateClassInput!
) {
  createClass(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateClassMutationVariables,
  APITypes.CreateClassMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const deleteClass = /* GraphQL */ `mutation DeleteClass(
  $condition: ModelClassConditionInput
  $input: DeleteClassInput!
) {
  deleteClass(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteClassMutationVariables,
  APITypes.DeleteClassMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const updateClass = /* GraphQL */ `mutation UpdateClass(
  $condition: ModelClassConditionInput
  $input: UpdateClassInput!
) {
  updateClass(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateClassMutationVariables,
  APITypes.UpdateClassMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
