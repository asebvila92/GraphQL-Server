// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  entry: (where?: EntryWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  entry: (where: EntryWhereUniqueInput) => EntryNullablePromise;
  entries: (args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Entry>;
  entriesConnection: (args?: {
    where?: EntryWhereInput;
    orderBy?: EntryOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => EntryConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createEntry: (data: EntryCreateInput) => EntryPromise;
  updateEntry: (args: {
    data: EntryUpdateInput;
    where: EntryWhereUniqueInput;
  }) => EntryPromise;
  updateManyEntries: (args: {
    data: EntryUpdateManyMutationInput;
    where?: EntryWhereInput;
  }) => BatchPayloadPromise;
  upsertEntry: (args: {
    where: EntryWhereUniqueInput;
    create: EntryCreateInput;
    update: EntryUpdateInput;
  }) => EntryPromise;
  deleteEntry: (where: EntryWhereUniqueInput) => EntryPromise;
  deleteManyEntries: (where?: EntryWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  entry: (
    where?: EntrySubscriptionWhereInput
  ) => EntrySubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type EntryOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "from_ASC"
  | "from_DESC"
  | "until_ASC"
  | "until_DESC"
  | "description_ASC"
  | "description_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface EntryUpdateManyMutationInput {
  from?: Maybe<DateTimeInput>;
  until?: Maybe<DateTimeInput>;
  description?: Maybe<String>;
}

export interface EntryCreateInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneInput;
  from: DateTimeInput;
  until: DateTimeInput;
  description?: Maybe<String>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type EntryWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface EntryUpdateInput {
  user?: Maybe<UserUpdateOneRequiredInput>;
  from?: Maybe<DateTimeInput>;
  until?: Maybe<DateTimeInput>;
  description?: Maybe<String>;
}

export interface EntryWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  user?: Maybe<UserWhereInput>;
  from?: Maybe<DateTimeInput>;
  from_not?: Maybe<DateTimeInput>;
  from_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  from_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  from_lt?: Maybe<DateTimeInput>;
  from_lte?: Maybe<DateTimeInput>;
  from_gt?: Maybe<DateTimeInput>;
  from_gte?: Maybe<DateTimeInput>;
  until?: Maybe<DateTimeInput>;
  until_not?: Maybe<DateTimeInput>;
  until_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  until_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  until_lt?: Maybe<DateTimeInput>;
  until_lte?: Maybe<DateTimeInput>;
  until_gt?: Maybe<DateTimeInput>;
  until_gte?: Maybe<DateTimeInput>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  AND?: Maybe<EntryWhereInput[] | EntryWhereInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  email: String;
  password: String;
}

export interface EntrySubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<EntryWhereInput>;
  AND?: Maybe<EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserUpdateInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserUpdateDataInput {
  name?: Maybe<String>;
  email?: Maybe<String>;
  password?: Maybe<String>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface EntryConnection {
  pageInfo: PageInfo;
  edges: EntryEdge[];
}

export interface EntryConnectionPromise
  extends Promise<EntryConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<EntryEdge>>() => T;
  aggregate: <T = AggregateEntryPromise>() => T;
}

export interface EntryConnectionSubscription
  extends Promise<AsyncIterator<EntryConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<EntryEdgeSubscription>>>() => T;
  aggregate: <T = AggregateEntrySubscription>() => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface EntrySubscriptionPayload {
  mutation: MutationType;
  node: Entry;
  updatedFields: String[];
  previousValues: EntryPreviousValues;
}

export interface EntrySubscriptionPayloadPromise
  extends Promise<EntrySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = EntryPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = EntryPreviousValuesPromise>() => T;
}

export interface EntrySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<EntrySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = EntrySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = EntryPreviousValuesSubscription>() => T;
}

export interface EntryPreviousValues {
  id: ID_Output;
  from: DateTimeOutput;
  until: DateTimeOutput;
  description?: String;
}

export interface EntryPreviousValuesPromise
  extends Promise<EntryPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  from: () => Promise<DateTimeOutput>;
  until: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
}

export interface EntryPreviousValuesSubscription
  extends Promise<AsyncIterator<EntryPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  from: () => Promise<AsyncIterator<DateTimeOutput>>;
  until: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface Entry {
  id: ID_Output;
  from: DateTimeOutput;
  until: DateTimeOutput;
  description?: String;
}

export interface EntryPromise extends Promise<Entry>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  from: () => Promise<DateTimeOutput>;
  until: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
}

export interface EntrySubscription
  extends Promise<AsyncIterator<Entry>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  from: () => Promise<AsyncIterator<DateTimeOutput>>;
  until: () => Promise<AsyncIterator<DateTimeOutput>>;
  description: () => Promise<AsyncIterator<String>>;
}

export interface EntryNullablePromise
  extends Promise<Entry | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  from: () => Promise<DateTimeOutput>;
  until: () => Promise<DateTimeOutput>;
  description: () => Promise<String>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateEntry {
  count: Int;
}

export interface AggregateEntryPromise
  extends Promise<AggregateEntry>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateEntrySubscription
  extends Promise<AsyncIterator<AggregateEntry>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface EntryEdge {
  node: Entry;
  cursor: String;
}

export interface EntryEdgePromise extends Promise<EntryEdge>, Fragmentable {
  node: <T = EntryPromise>() => T;
  cursor: () => Promise<String>;
}

export interface EntryEdgeSubscription
  extends Promise<AsyncIterator<EntryEdge>>,
    Fragmentable {
  node: <T = EntrySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Entry",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
