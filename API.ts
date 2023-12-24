/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Class = {
  __typename: "Class",
  createdAt: string,
  description?: string | null,
  id: string,
  location?: string | null,
  meetsFriday: boolean,
  meetsMonday: boolean,
  meetsSaturday: boolean,
  meetsSunday: boolean,
  meetsThursday: boolean,
  meetsTuesday: boolean,
  meetsWednesday: boolean,
  owner?: string | null,
  startTime: string,
  subject: string,
  teacher: string,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  classID: Class,
  createdAt: string,
  description: string,
  dueDate: string,
  id: string,
  owner?: string | null,
  reminderDate: string,
  status: StatusEnum,
  title: string,
  todoClassIDId?: string | null,
  updatedAt: string,
};

export enum StatusEnum {
  awaiting = "awaiting",
  done = "done",
  inprogress = "inprogress",
}


export type ModelClassFilterInput = {
  and?: Array< ModelClassFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  location?: ModelStringInput | null,
  meetsFriday?: ModelBooleanInput | null,
  meetsMonday?: ModelBooleanInput | null,
  meetsSaturday?: ModelBooleanInput | null,
  meetsSunday?: ModelBooleanInput | null,
  meetsThursday?: ModelBooleanInput | null,
  meetsTuesday?: ModelBooleanInput | null,
  meetsWednesday?: ModelBooleanInput | null,
  not?: ModelClassFilterInput | null,
  or?: Array< ModelClassFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  teacher?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelClassConnection = {
  __typename: "ModelClassConnection",
  items:  Array<Class | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  reminderDate?: ModelStringInput | null,
  status?: ModelStatusEnumInput | null,
  title?: ModelStringInput | null,
  todoClassIDId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStatusEnumInput = {
  eq?: StatusEnum | null,
  ne?: StatusEnum | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelClassConditionInput = {
  and?: Array< ModelClassConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  meetsFriday?: ModelBooleanInput | null,
  meetsMonday?: ModelBooleanInput | null,
  meetsSaturday?: ModelBooleanInput | null,
  meetsSunday?: ModelBooleanInput | null,
  meetsThursday?: ModelBooleanInput | null,
  meetsTuesday?: ModelBooleanInput | null,
  meetsWednesday?: ModelBooleanInput | null,
  not?: ModelClassConditionInput | null,
  or?: Array< ModelClassConditionInput | null > | null,
  owner?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  subject?: ModelStringInput | null,
  teacher?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateClassInput = {
  createdAt?: string | null,
  description?: string | null,
  id?: string | null,
  location?: string | null,
  meetsFriday: boolean,
  meetsMonday: boolean,
  meetsSaturday: boolean,
  meetsSunday: boolean,
  meetsThursday: boolean,
  meetsTuesday: boolean,
  meetsWednesday: boolean,
  owner?: string | null,
  startTime: string,
  subject: string,
  teacher: string,
  updatedAt?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  reminderDate?: ModelStringInput | null,
  status?: ModelStatusEnumInput | null,
  title?: ModelStringInput | null,
  todoClassIDId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  createdAt?: string | null,
  description: string,
  dueDate: string,
  id?: string | null,
  owner?: string | null,
  reminderDate: string,
  status: StatusEnum,
  title: string,
  todoClassIDId?: string | null,
  updatedAt?: string | null,
};

export type DeleteClassInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type UpdateClassInput = {
  createdAt?: string | null,
  description?: string | null,
  id: string,
  location?: string | null,
  meetsFriday?: boolean | null,
  meetsMonday?: boolean | null,
  meetsSaturday?: boolean | null,
  meetsSunday?: boolean | null,
  meetsThursday?: boolean | null,
  meetsTuesday?: boolean | null,
  meetsWednesday?: boolean | null,
  owner?: string | null,
  startTime?: string | null,
  subject?: string | null,
  teacher?: string | null,
  updatedAt?: string | null,
};

export type UpdateTodoInput = {
  createdAt?: string | null,
  description?: string | null,
  dueDate?: string | null,
  id: string,
  owner?: string | null,
  reminderDate?: string | null,
  status?: StatusEnum | null,
  title?: string | null,
  todoClassIDId?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionClassFilterInput = {
  and?: Array< ModelSubscriptionClassFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  location?: ModelSubscriptionStringInput | null,
  meetsFriday?: ModelSubscriptionBooleanInput | null,
  meetsMonday?: ModelSubscriptionBooleanInput | null,
  meetsSaturday?: ModelSubscriptionBooleanInput | null,
  meetsSunday?: ModelSubscriptionBooleanInput | null,
  meetsThursday?: ModelSubscriptionBooleanInput | null,
  meetsTuesday?: ModelSubscriptionBooleanInput | null,
  meetsWednesday?: ModelSubscriptionBooleanInput | null,
  or?: Array< ModelSubscriptionClassFilterInput | null > | null,
  startTime?: ModelSubscriptionStringInput | null,
  subject?: ModelSubscriptionStringInput | null,
  teacher?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  reminderDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  todoClassIDId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetClassQueryVariables = {
  id: string,
};

export type GetClassQuery = {
  getClass?:  {
    __typename: "Class",
    createdAt: string,
    description?: string | null,
    id: string,
    location?: string | null,
    meetsFriday: boolean,
    meetsMonday: boolean,
    meetsSaturday: boolean,
    meetsSunday: boolean,
    meetsThursday: boolean,
    meetsTuesday: boolean,
    meetsWednesday: boolean,
    owner?: string | null,
    startTime: string,
    subject: string,
    teacher: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    classID:  {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    },
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    owner?: string | null,
    reminderDate: string,
    status: StatusEnum,
    title: string,
    todoClassIDId?: string | null,
    updatedAt: string,
  } | null,
};

export type ListClassesQueryVariables = {
  filter?: ModelClassFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListClassesQuery = {
  listClasses?:  {
    __typename: "ModelClassConnection",
    items:  Array< {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      createdAt: string,
      description: string,
      dueDate: string,
      id: string,
      owner?: string | null,
      reminderDate: string,
      status: StatusEnum,
      title: string,
      todoClassIDId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateClassMutationVariables = {
  condition?: ModelClassConditionInput | null,
  input: CreateClassInput,
};

export type CreateClassMutation = {
  createClass?:  {
    __typename: "Class",
    createdAt: string,
    description?: string | null,
    id: string,
    location?: string | null,
    meetsFriday: boolean,
    meetsMonday: boolean,
    meetsSaturday: boolean,
    meetsSunday: boolean,
    meetsThursday: boolean,
    meetsTuesday: boolean,
    meetsWednesday: boolean,
    owner?: string | null,
    startTime: string,
    subject: string,
    teacher: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    classID:  {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    },
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    owner?: string | null,
    reminderDate: string,
    status: StatusEnum,
    title: string,
    todoClassIDId?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteClassMutationVariables = {
  condition?: ModelClassConditionInput | null,
  input: DeleteClassInput,
};

export type DeleteClassMutation = {
  deleteClass?:  {
    __typename: "Class",
    createdAt: string,
    description?: string | null,
    id: string,
    location?: string | null,
    meetsFriday: boolean,
    meetsMonday: boolean,
    meetsSaturday: boolean,
    meetsSunday: boolean,
    meetsThursday: boolean,
    meetsTuesday: boolean,
    meetsWednesday: boolean,
    owner?: string | null,
    startTime: string,
    subject: string,
    teacher: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    classID:  {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    },
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    owner?: string | null,
    reminderDate: string,
    status: StatusEnum,
    title: string,
    todoClassIDId?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateClassMutationVariables = {
  condition?: ModelClassConditionInput | null,
  input: UpdateClassInput,
};

export type UpdateClassMutation = {
  updateClass?:  {
    __typename: "Class",
    createdAt: string,
    description?: string | null,
    id: string,
    location?: string | null,
    meetsFriday: boolean,
    meetsMonday: boolean,
    meetsSaturday: boolean,
    meetsSunday: boolean,
    meetsThursday: boolean,
    meetsTuesday: boolean,
    meetsWednesday: boolean,
    owner?: string | null,
    startTime: string,
    subject: string,
    teacher: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    classID:  {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    },
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    owner?: string | null,
    reminderDate: string,
    status: StatusEnum,
    title: string,
    todoClassIDId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
  owner?: string | null,
};

export type OnCreateClassSubscription = {
  onCreateClass?:  {
    __typename: "Class",
    createdAt: string,
    description?: string | null,
    id: string,
    location?: string | null,
    meetsFriday: boolean,
    meetsMonday: boolean,
    meetsSaturday: boolean,
    meetsSunday: boolean,
    meetsThursday: boolean,
    meetsTuesday: boolean,
    meetsWednesday: boolean,
    owner?: string | null,
    startTime: string,
    subject: string,
    teacher: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    classID:  {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    },
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    owner?: string | null,
    reminderDate: string,
    status: StatusEnum,
    title: string,
    todoClassIDId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
  owner?: string | null,
};

export type OnDeleteClassSubscription = {
  onDeleteClass?:  {
    __typename: "Class",
    createdAt: string,
    description?: string | null,
    id: string,
    location?: string | null,
    meetsFriday: boolean,
    meetsMonday: boolean,
    meetsSaturday: boolean,
    meetsSunday: boolean,
    meetsThursday: boolean,
    meetsTuesday: boolean,
    meetsWednesday: boolean,
    owner?: string | null,
    startTime: string,
    subject: string,
    teacher: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    classID:  {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    },
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    owner?: string | null,
    reminderDate: string,
    status: StatusEnum,
    title: string,
    todoClassIDId?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateClassSubscriptionVariables = {
  filter?: ModelSubscriptionClassFilterInput | null,
  owner?: string | null,
};

export type OnUpdateClassSubscription = {
  onUpdateClass?:  {
    __typename: "Class",
    createdAt: string,
    description?: string | null,
    id: string,
    location?: string | null,
    meetsFriday: boolean,
    meetsMonday: boolean,
    meetsSaturday: boolean,
    meetsSunday: boolean,
    meetsThursday: boolean,
    meetsTuesday: boolean,
    meetsWednesday: boolean,
    owner?: string | null,
    startTime: string,
    subject: string,
    teacher: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    classID:  {
      __typename: "Class",
      createdAt: string,
      description?: string | null,
      id: string,
      location?: string | null,
      meetsFriday: boolean,
      meetsMonday: boolean,
      meetsSaturday: boolean,
      meetsSunday: boolean,
      meetsThursday: boolean,
      meetsTuesday: boolean,
      meetsWednesday: boolean,
      owner?: string | null,
      startTime: string,
      subject: string,
      teacher: string,
      updatedAt: string,
    },
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    owner?: string | null,
    reminderDate: string,
    status: StatusEnum,
    title: string,
    todoClassIDId?: string | null,
    updatedAt: string,
  } | null,
};
