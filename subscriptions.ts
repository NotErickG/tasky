/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateClass = /* GraphQL */ `subscription OnCreateClass(
  $filter: ModelSubscriptionClassFilterInput
  $owner: String
) {
  onCreateClass(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateClassSubscriptionVariables,
  APITypes.OnCreateClassSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onCreateTodo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onDeleteClass = /* GraphQL */ `subscription OnDeleteClass(
  $filter: ModelSubscriptionClassFilterInput
  $owner: String
) {
  onDeleteClass(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteClassSubscriptionVariables,
  APITypes.OnDeleteClassSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onDeleteTodo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onUpdateClass = /* GraphQL */ `subscription OnUpdateClass(
  $filter: ModelSubscriptionClassFilterInput
  $owner: String
) {
  onUpdateClass(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateClassSubscriptionVariables,
  APITypes.OnUpdateClassSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onUpdateTodo(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
