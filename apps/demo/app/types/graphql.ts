import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: unknown; output: unknown };
};

export type AffectedRowsOutput = {
  readonly count: Scalars['Int']['output'];
};

export type AggregateColor = {
  readonly _count?: Maybe<ColorCountAggregate>;
  readonly _max?: Maybe<ColorMaxAggregate>;
  readonly _min?: Maybe<ColorMinAggregate>;
};

export type AggregateCustomer = {
  readonly _count?: Maybe<CustomerCountAggregate>;
  readonly _max?: Maybe<CustomerMaxAggregate>;
  readonly _min?: Maybe<CustomerMinAggregate>;
};

export type AggregateCustomerContact = {
  readonly _count?: Maybe<CustomerContactCountAggregate>;
  readonly _max?: Maybe<CustomerContactMaxAggregate>;
  readonly _min?: Maybe<CustomerContactMinAggregate>;
};

export type AggregateProduct = {
  readonly _count?: Maybe<ProductCountAggregate>;
  readonly _max?: Maybe<ProductMaxAggregate>;
  readonly _min?: Maybe<ProductMinAggregate>;
};

export type AggregateProductColor = {
  readonly _count?: Maybe<ProductColorCountAggregate>;
  readonly _max?: Maybe<ProductColorMaxAggregate>;
  readonly _min?: Maybe<ProductColorMinAggregate>;
};

export type AggregateProductInventory = {
  readonly _avg?: Maybe<ProductInventoryAvgAggregate>;
  readonly _count?: Maybe<ProductInventoryCountAggregate>;
  readonly _max?: Maybe<ProductInventoryMaxAggregate>;
  readonly _min?: Maybe<ProductInventoryMinAggregate>;
  readonly _sum?: Maybe<ProductInventorySumAggregate>;
};

export type AggregateProductSales = {
  readonly _avg?: Maybe<ProductSalesAvgAggregate>;
  readonly _count?: Maybe<ProductSalesCountAggregate>;
  readonly _max?: Maybe<ProductSalesMaxAggregate>;
  readonly _min?: Maybe<ProductSalesMinAggregate>;
  readonly _sum?: Maybe<ProductSalesSumAggregate>;
};

export type AggregateProductType = {
  readonly _count?: Maybe<ProductTypeCountAggregate>;
  readonly _max?: Maybe<ProductTypeMaxAggregate>;
  readonly _min?: Maybe<ProductTypeMinAggregate>;
};

export type AggregateState = {
  readonly _count?: Maybe<StateCountAggregate>;
  readonly _max?: Maybe<StateMaxAggregate>;
  readonly _min?: Maybe<StateMinAggregate>;
};

export type AggregateUser = {
  readonly _count?: Maybe<UserCountAggregate>;
  readonly _max?: Maybe<UserMaxAggregate>;
  readonly _min?: Maybe<UserMinAggregate>;
};

export type Color = {
  readonly _count?: Maybe<ColorCount>;
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly productColor: ReadonlyArray<ProductColor>;
};

export type ColorProductColorArgs = {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type ColorCount = {
  readonly productColor: Scalars['Int']['output'];
};

export type ColorCountProductColorArgs = {
  where?: InputMaybe<ProductColorWhereInput>;
};

export type ColorCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
};

export type ColorCountOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ColorCreateInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly productColor?: InputMaybe<ProductColorCreateNestedManyWithoutColorInput>;
};

export type ColorCreateManyInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type ColorCreateNestedOneWithoutProductColorInput = {
  readonly connect?: InputMaybe<ColorWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ColorCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ColorCreateWithoutProductColorInput>;
};

export type ColorCreateOrConnectWithoutProductColorInput = {
  readonly create: ColorCreateWithoutProductColorInput;
  readonly where: ColorWhereUniqueInput;
};

export type ColorCreateWithoutProductColorInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type ColorGroupBy = {
  readonly _count?: Maybe<ColorCountAggregate>;
  readonly _max?: Maybe<ColorMaxAggregate>;
  readonly _min?: Maybe<ColorMinAggregate>;
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ColorMaxAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type ColorMaxOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ColorMinAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type ColorMinOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ColorOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<ColorCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ColorMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ColorMinOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ColorOrderByWithRelationInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly productColor?: InputMaybe<ProductColorOrderByRelationAggregateInput>;
};

export type ColorRelationFilter = {
  readonly is?: InputMaybe<ColorWhereInput>;
  readonly isNot?: InputMaybe<ColorWhereInput>;
};

export enum ColorScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export type ColorScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ColorScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ColorScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ColorScalarWhereWithAggregatesInput>>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
};

export type ColorUpdateInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly productColor?: InputMaybe<ProductColorUpdateManyWithoutColorNestedInput>;
};

export type ColorUpdateManyMutationInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type ColorUpdateOneRequiredWithoutProductColorNestedInput = {
  readonly connect?: InputMaybe<ColorWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ColorCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ColorCreateWithoutProductColorInput>;
  readonly update?: InputMaybe<ColorUpdateToOneWithWhereWithoutProductColorInput>;
  readonly upsert?: InputMaybe<ColorUpsertWithoutProductColorInput>;
};

export type ColorUpdateToOneWithWhereWithoutProductColorInput = {
  readonly data: ColorUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ColorWhereInput>;
};

export type ColorUpdateWithoutProductColorInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type ColorUpsertWithoutProductColorInput = {
  readonly create: ColorCreateWithoutProductColorInput;
  readonly update: ColorUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ColorWhereInput>;
};

export type ColorWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly productColor?: InputMaybe<ProductColorListRelationFilter>;
};

export type ColorWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<StringFilter>;
  readonly productColor?: InputMaybe<ProductColorListRelationFilter>;
};

export type CreateManyAndReturnColor = {
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type CreateManyAndReturnCustomer = {
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type CreateManyAndReturnCustomerContact = {
  readonly city: Scalars['String']['output'];
  readonly customer: Customer;
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type CreateManyAndReturnProduct = {
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly description: Scalars['String']['output'];
  readonly genderId: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly price: Scalars['String']['output'];
  readonly productType?: Maybe<ProductType>;
  readonly productTypeId: Scalars['String']['output'];
};

export type CreateManyAndReturnProductProductTypeArgs = {
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type CreateManyAndReturnProductColor = {
  readonly color: Color;
  readonly colorId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
};

export type CreateManyAndReturnProductInventory = {
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly size: Scalars['String']['output'];
};

export type CreateManyAndReturnProductSales = {
  readonly customer: Customer;
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly price: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly user: User;
  readonly userId: Scalars['String']['output'];
};

export type CreateManyAndReturnProductType = {
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type CreateManyAndReturnState = {
  readonly code: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type CreateManyAndReturnUser = {
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type Customer = {
  readonly CustomerContact: ReadonlyArray<CustomerContact>;
  readonly _count?: Maybe<CustomerCount>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly productSales: ReadonlyArray<ProductSales>;
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type CustomerCustomerContactArgs = {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type CustomerProductSalesArgs = {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type CustomerContact = {
  readonly city: Scalars['String']['output'];
  readonly customer: Customer;
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type CustomerContactCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly customerId: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly streetAddress2: Scalars['Int']['output'];
  readonly zip: Scalars['Int']['output'];
};

export type CustomerContactCountOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerContactCreateInput = {
  readonly city: Scalars['String']['input'];
  readonly customer: CustomerCreateNestedOneWithoutCustomerContactInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: StateCreateNestedOneWithoutCustomerContactInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerContactCreateManyCustomerInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerContactCreateManyCustomerInputEnvelope = {
  readonly data: ReadonlyArray<CustomerContactCreateManyCustomerInput>;
};

export type CustomerContactCreateManyInput = {
  readonly city: Scalars['String']['input'];
  readonly customerId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerContactCreateManyStateInput = {
  readonly city: Scalars['String']['input'];
  readonly customerId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerContactCreateManyStateInputEnvelope = {
  readonly data: ReadonlyArray<CustomerContactCreateManyStateInput>;
};

export type CustomerContactCreateNestedManyWithoutCustomerInput = {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutCustomerInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyCustomerInputEnvelope>;
};

export type CustomerContactCreateNestedManyWithoutStateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutStateInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyStateInputEnvelope>;
};

export type CustomerContactCreateOrConnectWithoutCustomerInput = {
  readonly create: CustomerContactCreateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
};

export type CustomerContactCreateOrConnectWithoutStateInput = {
  readonly create: CustomerContactCreateWithoutStateInput;
  readonly where: CustomerContactWhereUniqueInput;
};

export type CustomerContactCreateWithoutCustomerInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: StateCreateNestedOneWithoutCustomerContactInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerContactCreateWithoutStateInput = {
  readonly city: Scalars['String']['input'];
  readonly customer: CustomerCreateNestedOneWithoutCustomerContactInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerContactGroupBy = {
  readonly _count?: Maybe<CustomerContactCountAggregate>;
  readonly _max?: Maybe<CustomerContactMaxAggregate>;
  readonly _min?: Maybe<CustomerContactMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type CustomerContactListRelationFilter = {
  readonly every?: InputMaybe<CustomerContactWhereInput>;
  readonly none?: InputMaybe<CustomerContactWhereInput>;
  readonly some?: InputMaybe<CustomerContactWhereInput>;
};

export type CustomerContactMaxAggregate = {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly customerId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type CustomerContactMaxOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerContactMinAggregate = {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly customerId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type CustomerContactMinOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerContactOrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type CustomerContactOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<CustomerContactCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<CustomerContactMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<CustomerContactMinOrderByAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerContactOrderByWithRelationInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<StateOrderByWithRelationInput>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
};

export enum CustomerContactScalarFieldEnum {
  City = 0,
  CustomerId = 1,
  DateCreated = 2,
  DateUpdated = 3,
  Email = 4,
  FirstName = 5,
  Id = 6,
  LastName = 7,
  Phone = 8,
  StateId = 9,
  StreetAddress = 10,
  StreetAddress2 = 11,
  Zip = 12,
}

export type CustomerContactScalarWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type CustomerContactScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>>;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly customerId?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableWithAggregatesFilter>;
  readonly zip?: InputMaybe<StringWithAggregatesFilter>;
};

export type CustomerContactUpdateInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerContactUpdateManyMutationInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerContactUpdateManyWithWhereWithoutCustomerInput = {
  readonly data: CustomerContactUpdateManyMutationInput;
  readonly where: CustomerContactScalarWhereInput;
};

export type CustomerContactUpdateManyWithWhereWithoutStateInput = {
  readonly data: CustomerContactUpdateManyMutationInput;
  readonly where: CustomerContactScalarWhereInput;
};

export type CustomerContactUpdateManyWithoutCustomerNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutCustomerInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyCustomerInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateWithWhereUniqueWithoutCustomerInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateManyWithWhereWithoutCustomerInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<CustomerContactUpsertWithWhereUniqueWithoutCustomerInput>
  >;
};

export type CustomerContactUpdateManyWithoutStateNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutStateInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyStateInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateWithWhereUniqueWithoutStateInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateManyWithWhereWithoutStateInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<CustomerContactUpsertWithWhereUniqueWithoutStateInput>
  >;
};

export type CustomerContactUpdateWithWhereUniqueWithoutCustomerInput = {
  readonly data: CustomerContactUpdateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
};

export type CustomerContactUpdateWithWhereUniqueWithoutStateInput = {
  readonly data: CustomerContactUpdateWithoutStateInput;
  readonly where: CustomerContactWhereUniqueInput;
};

export type CustomerContactUpdateWithoutCustomerInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerContactUpdateWithoutStateInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerContactUpsertWithWhereUniqueWithoutCustomerInput = {
  readonly create: CustomerContactCreateWithoutCustomerInput;
  readonly update: CustomerContactUpdateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
};

export type CustomerContactUpsertWithWhereUniqueWithoutStateInput = {
  readonly create: CustomerContactCreateWithoutStateInput;
  readonly update: CustomerContactUpdateWithoutStateInput;
  readonly where: CustomerContactWhereUniqueInput;
};

export type CustomerContactWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type CustomerContactWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type CustomerCount = {
  readonly CustomerContact: Scalars['Int']['output'];
  readonly productSales: Scalars['Int']['output'];
};

export type CustomerCountCustomerContactArgs = {
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type CustomerCountProductSalesArgs = {
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type CustomerCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly streetAddress2: Scalars['Int']['output'];
  readonly zip: Scalars['Int']['output'];
};

export type CustomerCountOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerCreateInput = {
  readonly CustomerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutCustomerInput>;
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutCustomerInput>;
  readonly state: StateCreateNestedOneWithoutCustomerInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerCreateManyInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerCreateManyStateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerCreateManyStateInputEnvelope = {
  readonly data: ReadonlyArray<CustomerCreateManyStateInput>;
};

export type CustomerCreateNestedManyWithoutStateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<CustomerCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<CustomerCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerCreateManyStateInputEnvelope>;
};

export type CustomerCreateNestedOneWithoutCustomerContactInput = {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutCustomerContactInput>;
};

export type CustomerCreateNestedOneWithoutProductSalesInput = {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutProductSalesInput>;
};

export type CustomerCreateOrConnectWithoutCustomerContactInput = {
  readonly create: CustomerCreateWithoutCustomerContactInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutProductSalesInput = {
  readonly create: CustomerCreateWithoutProductSalesInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutStateInput = {
  readonly create: CustomerCreateWithoutStateInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerCreateWithoutCustomerContactInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutCustomerInput>;
  readonly state: StateCreateNestedOneWithoutCustomerInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerCreateWithoutProductSalesInput = {
  readonly CustomerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutCustomerInput>;
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: StateCreateNestedOneWithoutCustomerInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerCreateWithoutStateInput = {
  readonly CustomerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutCustomerInput>;
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutCustomerInput>;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type CustomerGroupBy = {
  readonly _count?: Maybe<CustomerCountAggregate>;
  readonly _max?: Maybe<CustomerMaxAggregate>;
  readonly _min?: Maybe<CustomerMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type CustomerListRelationFilter = {
  readonly every?: InputMaybe<CustomerWhereInput>;
  readonly none?: InputMaybe<CustomerWhereInput>;
  readonly some?: InputMaybe<CustomerWhereInput>;
};

export type CustomerMaxAggregate = {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type CustomerMaxOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerMinAggregate = {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type CustomerMinOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerOrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type CustomerOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerOrderByWithRelationInput = {
  readonly CustomerContact?: InputMaybe<CustomerContactOrderByRelationAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly productSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
  readonly state?: InputMaybe<StateOrderByWithRelationInput>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type CustomerRelationFilter = {
  readonly is?: InputMaybe<CustomerWhereInput>;
  readonly isNot?: InputMaybe<CustomerWhereInput>;
};

export enum CustomerScalarFieldEnum {
  City = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  Name = 4,
  Phone = 5,
  StateId = 6,
  StreetAddress = 7,
  StreetAddress2 = 8,
  Zip = 9,
}

export type CustomerScalarWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type CustomerScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableWithAggregatesFilter>;
  readonly zip?: InputMaybe<StringWithAggregatesFilter>;
};

export type CustomerUpdateInput = {
  readonly CustomerContact?: InputMaybe<CustomerContactUpdateManyWithoutCustomerNestedInput>;
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutCustomerNestedInput>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdateManyMutationInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdateManyWithWhereWithoutStateInput = {
  readonly data: CustomerUpdateManyMutationInput;
  readonly where: CustomerScalarWhereInput;
};

export type CustomerUpdateManyWithoutStateNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<CustomerCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<CustomerCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerCreateManyStateInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<CustomerUpdateWithWhereUniqueWithoutStateInput>>;
  readonly updateMany?: InputMaybe<ReadonlyArray<CustomerUpdateManyWithWhereWithoutStateInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<CustomerUpsertWithWhereUniqueWithoutStateInput>>;
};

export type CustomerUpdateOneRequiredWithoutCustomerContactNestedInput = {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutCustomerContactInput>;
  readonly update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutCustomerContactInput>;
  readonly upsert?: InputMaybe<CustomerUpsertWithoutCustomerContactInput>;
};

export type CustomerUpdateOneRequiredWithoutProductSalesNestedInput = {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutProductSalesInput>;
  readonly update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutProductSalesInput>;
  readonly upsert?: InputMaybe<CustomerUpsertWithoutProductSalesInput>;
};

export type CustomerUpdateToOneWithWhereWithoutCustomerContactInput = {
  readonly data: CustomerUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateToOneWithWhereWithoutProductSalesInput = {
  readonly data: CustomerUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateWithWhereUniqueWithoutStateInput = {
  readonly data: CustomerUpdateWithoutStateInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithoutCustomerContactInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutCustomerNestedInput>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdateWithoutProductSalesInput = {
  readonly CustomerContact?: InputMaybe<CustomerContactUpdateManyWithoutCustomerNestedInput>;
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpdateWithoutStateInput = {
  readonly CustomerContact?: InputMaybe<CustomerContactUpdateManyWithoutCustomerNestedInput>;
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutCustomerNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerUpsertWithWhereUniqueWithoutStateInput = {
  readonly create: CustomerCreateWithoutStateInput;
  readonly update: CustomerUpdateWithoutStateInput;
  readonly where: CustomerWhereUniqueInput;
};

export type CustomerUpsertWithoutCustomerContactInput = {
  readonly create: CustomerCreateWithoutCustomerContactInput;
  readonly update: CustomerUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpsertWithoutProductSalesInput = {
  readonly create: CustomerCreateWithoutProductSalesInput;
  readonly update: CustomerUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly CustomerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type CustomerWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly CustomerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type DateTimeFilter = {
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedDateTimeFilter>;
  readonly _min?: InputMaybe<NestedDateTimeFilter>;
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
};

export type IntFilter = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<NestedIntFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  readonly _avg?: InputMaybe<NestedFloatFilter>;
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedIntFilter>;
  readonly _min?: InputMaybe<NestedIntFilter>;
  readonly _sum?: InputMaybe<NestedIntFilter>;
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<NestedIntWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type Mutation = {
  readonly createManyAndReturnColor: ReadonlyArray<CreateManyAndReturnColor>;
  readonly createManyAndReturnCustomer: ReadonlyArray<CreateManyAndReturnCustomer>;
  readonly createManyAndReturnCustomerContact: ReadonlyArray<CreateManyAndReturnCustomerContact>;
  readonly createManyAndReturnProduct: ReadonlyArray<CreateManyAndReturnProduct>;
  readonly createManyAndReturnProductColor: ReadonlyArray<CreateManyAndReturnProductColor>;
  readonly createManyAndReturnProductInventory: ReadonlyArray<CreateManyAndReturnProductInventory>;
  readonly createManyAndReturnProductSales: ReadonlyArray<CreateManyAndReturnProductSales>;
  readonly createManyAndReturnProductType: ReadonlyArray<CreateManyAndReturnProductType>;
  readonly createManyAndReturnState: ReadonlyArray<CreateManyAndReturnState>;
  readonly createManyAndReturnUser: ReadonlyArray<CreateManyAndReturnUser>;
  readonly createManyColor: AffectedRowsOutput;
  readonly createManyCustomer: AffectedRowsOutput;
  readonly createManyCustomerContact: AffectedRowsOutput;
  readonly createManyProduct: AffectedRowsOutput;
  readonly createManyProductColor: AffectedRowsOutput;
  readonly createManyProductInventory: AffectedRowsOutput;
  readonly createManyProductSales: AffectedRowsOutput;
  readonly createManyProductType: AffectedRowsOutput;
  readonly createManyState: AffectedRowsOutput;
  readonly createManyUser: AffectedRowsOutput;
  readonly createOneColor: Color;
  readonly createOneCustomer: Customer;
  readonly createOneCustomerContact: CustomerContact;
  readonly createOneProduct: Product;
  readonly createOneProductColor: ProductColor;
  readonly createOneProductInventory: ProductInventory;
  readonly createOneProductSales: ProductSales;
  readonly createOneProductType: ProductType;
  readonly createOneState: State;
  readonly createOneUser: User;
  readonly deleteManyColor: AffectedRowsOutput;
  readonly deleteManyCustomer: AffectedRowsOutput;
  readonly deleteManyCustomerContact: AffectedRowsOutput;
  readonly deleteManyProduct: AffectedRowsOutput;
  readonly deleteManyProductColor: AffectedRowsOutput;
  readonly deleteManyProductInventory: AffectedRowsOutput;
  readonly deleteManyProductSales: AffectedRowsOutput;
  readonly deleteManyProductType: AffectedRowsOutput;
  readonly deleteManyState: AffectedRowsOutput;
  readonly deleteManyUser: AffectedRowsOutput;
  readonly deleteOneColor?: Maybe<Color>;
  readonly deleteOneCustomer?: Maybe<Customer>;
  readonly deleteOneCustomerContact?: Maybe<CustomerContact>;
  readonly deleteOneProduct?: Maybe<Product>;
  readonly deleteOneProductColor?: Maybe<ProductColor>;
  readonly deleteOneProductInventory?: Maybe<ProductInventory>;
  readonly deleteOneProductSales?: Maybe<ProductSales>;
  readonly deleteOneProductType?: Maybe<ProductType>;
  readonly deleteOneState?: Maybe<State>;
  readonly deleteOneUser?: Maybe<User>;
  readonly updateManyColor: AffectedRowsOutput;
  readonly updateManyCustomer: AffectedRowsOutput;
  readonly updateManyCustomerContact: AffectedRowsOutput;
  readonly updateManyProduct: AffectedRowsOutput;
  readonly updateManyProductColor: AffectedRowsOutput;
  readonly updateManyProductInventory: AffectedRowsOutput;
  readonly updateManyProductSales: AffectedRowsOutput;
  readonly updateManyProductType: AffectedRowsOutput;
  readonly updateManyState: AffectedRowsOutput;
  readonly updateManyUser: AffectedRowsOutput;
  readonly updateOneColor?: Maybe<Color>;
  readonly updateOneCustomer?: Maybe<Customer>;
  readonly updateOneCustomerContact?: Maybe<CustomerContact>;
  readonly updateOneProduct?: Maybe<Product>;
  readonly updateOneProductColor?: Maybe<ProductColor>;
  readonly updateOneProductInventory?: Maybe<ProductInventory>;
  readonly updateOneProductSales?: Maybe<ProductSales>;
  readonly updateOneProductType?: Maybe<ProductType>;
  readonly updateOneState?: Maybe<State>;
  readonly updateOneUser?: Maybe<User>;
  readonly upsertOneColor: Color;
  readonly upsertOneCustomer: Customer;
  readonly upsertOneCustomerContact: CustomerContact;
  readonly upsertOneProduct: Product;
  readonly upsertOneProductColor: ProductColor;
  readonly upsertOneProductInventory: ProductInventory;
  readonly upsertOneProductSales: ProductSales;
  readonly upsertOneProductType: ProductType;
  readonly upsertOneState: State;
  readonly upsertOneUser: User;
};

export type MutationCreateManyAndReturnColorArgs = {
  data: ReadonlyArray<ColorCreateManyInput>;
};

export type MutationCreateManyAndReturnCustomerArgs = {
  data: ReadonlyArray<CustomerCreateManyInput>;
};

export type MutationCreateManyAndReturnCustomerContactArgs = {
  data: ReadonlyArray<CustomerContactCreateManyInput>;
};

export type MutationCreateManyAndReturnProductArgs = {
  data: ReadonlyArray<ProductCreateManyInput>;
};

export type MutationCreateManyAndReturnProductColorArgs = {
  data: ReadonlyArray<ProductColorCreateManyInput>;
};

export type MutationCreateManyAndReturnProductInventoryArgs = {
  data: ReadonlyArray<ProductInventoryCreateManyInput>;
};

export type MutationCreateManyAndReturnProductSalesArgs = {
  data: ReadonlyArray<ProductSalesCreateManyInput>;
};

export type MutationCreateManyAndReturnProductTypeArgs = {
  data: ReadonlyArray<ProductTypeCreateManyInput>;
};

export type MutationCreateManyAndReturnStateArgs = {
  data: ReadonlyArray<StateCreateManyInput>;
};

export type MutationCreateManyAndReturnUserArgs = {
  data: ReadonlyArray<UserCreateManyInput>;
};

export type MutationCreateManyColorArgs = {
  data: ReadonlyArray<ColorCreateManyInput>;
};

export type MutationCreateManyCustomerArgs = {
  data: ReadonlyArray<CustomerCreateManyInput>;
};

export type MutationCreateManyCustomerContactArgs = {
  data: ReadonlyArray<CustomerContactCreateManyInput>;
};

export type MutationCreateManyProductArgs = {
  data: ReadonlyArray<ProductCreateManyInput>;
};

export type MutationCreateManyProductColorArgs = {
  data: ReadonlyArray<ProductColorCreateManyInput>;
};

export type MutationCreateManyProductInventoryArgs = {
  data: ReadonlyArray<ProductInventoryCreateManyInput>;
};

export type MutationCreateManyProductSalesArgs = {
  data: ReadonlyArray<ProductSalesCreateManyInput>;
};

export type MutationCreateManyProductTypeArgs = {
  data: ReadonlyArray<ProductTypeCreateManyInput>;
};

export type MutationCreateManyStateArgs = {
  data: ReadonlyArray<StateCreateManyInput>;
};

export type MutationCreateManyUserArgs = {
  data: ReadonlyArray<UserCreateManyInput>;
};

export type MutationCreateOneColorArgs = {
  data: ColorCreateInput;
};

export type MutationCreateOneCustomerArgs = {
  data: CustomerCreateInput;
};

export type MutationCreateOneCustomerContactArgs = {
  data: CustomerContactCreateInput;
};

export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateOneProductColorArgs = {
  data: ProductColorCreateInput;
};

export type MutationCreateOneProductInventoryArgs = {
  data: ProductInventoryCreateInput;
};

export type MutationCreateOneProductSalesArgs = {
  data: ProductSalesCreateInput;
};

export type MutationCreateOneProductTypeArgs = {
  data: ProductTypeCreateInput;
};

export type MutationCreateOneStateArgs = {
  data: StateCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteManyColorArgs = {
  where?: InputMaybe<ColorWhereInput>;
};

export type MutationDeleteManyCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};

export type MutationDeleteManyCustomerContactArgs = {
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type MutationDeleteManyProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type MutationDeleteManyProductColorArgs = {
  where?: InputMaybe<ProductColorWhereInput>;
};

export type MutationDeleteManyProductInventoryArgs = {
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type MutationDeleteManyProductSalesArgs = {
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type MutationDeleteManyProductTypeArgs = {
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type MutationDeleteManyStateArgs = {
  where?: InputMaybe<StateWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type MutationDeleteOneColorArgs = {
  where: ColorWhereUniqueInput;
};

export type MutationDeleteOneCustomerArgs = {
  where: CustomerWhereUniqueInput;
};

export type MutationDeleteOneCustomerContactArgs = {
  where: CustomerContactWhereUniqueInput;
};

export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteOneProductColorArgs = {
  where: ProductColorWhereUniqueInput;
};

export type MutationDeleteOneProductInventoryArgs = {
  where: ProductInventoryWhereUniqueInput;
};

export type MutationDeleteOneProductSalesArgs = {
  where: ProductSalesWhereUniqueInput;
};

export type MutationDeleteOneProductTypeArgs = {
  where: ProductTypeWhereUniqueInput;
};

export type MutationDeleteOneStateArgs = {
  where: StateWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyColorArgs = {
  data: ColorUpdateManyMutationInput;
  where?: InputMaybe<ColorWhereInput>;
};

export type MutationUpdateManyCustomerArgs = {
  data: CustomerUpdateManyMutationInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type MutationUpdateManyCustomerContactArgs = {
  data: CustomerContactUpdateManyMutationInput;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
};

export type MutationUpdateManyProductColorArgs = {
  data: ProductColorUpdateManyMutationInput;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type MutationUpdateManyProductInventoryArgs = {
  data: ProductInventoryUpdateManyMutationInput;
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type MutationUpdateManyProductSalesArgs = {
  data: ProductSalesUpdateManyMutationInput;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type MutationUpdateManyProductTypeArgs = {
  data: ProductTypeUpdateManyMutationInput;
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type MutationUpdateManyStateArgs = {
  data: StateUpdateManyMutationInput;
  where?: InputMaybe<StateWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type MutationUpdateOneColorArgs = {
  data: ColorUpdateInput;
  where: ColorWhereUniqueInput;
};

export type MutationUpdateOneCustomerArgs = {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};

export type MutationUpdateOneCustomerContactArgs = {
  data: CustomerContactUpdateInput;
  where: CustomerContactWhereUniqueInput;
};

export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateOneProductColorArgs = {
  data: ProductColorUpdateInput;
  where: ProductColorWhereUniqueInput;
};

export type MutationUpdateOneProductInventoryArgs = {
  data: ProductInventoryUpdateInput;
  where: ProductInventoryWhereUniqueInput;
};

export type MutationUpdateOneProductSalesArgs = {
  data: ProductSalesUpdateInput;
  where: ProductSalesWhereUniqueInput;
};

export type MutationUpdateOneProductTypeArgs = {
  data: ProductTypeUpdateInput;
  where: ProductTypeWhereUniqueInput;
};

export type MutationUpdateOneStateArgs = {
  data: StateUpdateInput;
  where: StateWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertOneColorArgs = {
  create: ColorCreateInput;
  update: ColorUpdateInput;
  where: ColorWhereUniqueInput;
};

export type MutationUpsertOneCustomerArgs = {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};

export type MutationUpsertOneCustomerContactArgs = {
  create: CustomerContactCreateInput;
  update: CustomerContactUpdateInput;
  where: CustomerContactWhereUniqueInput;
};

export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpsertOneProductColorArgs = {
  create: ProductColorCreateInput;
  update: ProductColorUpdateInput;
  where: ProductColorWhereUniqueInput;
};

export type MutationUpsertOneProductInventoryArgs = {
  create: ProductInventoryCreateInput;
  update: ProductInventoryUpdateInput;
  where: ProductInventoryWhereUniqueInput;
};

export type MutationUpsertOneProductSalesArgs = {
  create: ProductSalesCreateInput;
  update: ProductSalesUpdateInput;
  where: ProductSalesWhereUniqueInput;
};

export type MutationUpsertOneProductTypeArgs = {
  create: ProductTypeCreateInput;
  update: ProductTypeUpdateInput;
  where: ProductTypeWhereUniqueInput;
};

export type MutationUpsertOneStateArgs = {
  create: StateCreateInput;
  update: StateUpdateInput;
  where: StateWhereUniqueInput;
};

export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedDateTimeFilter>;
  readonly _min?: InputMaybe<NestedDateTimeFilter>;
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
};

export type NestedFloatFilter = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly gt?: InputMaybe<Scalars['Float']['input']>;
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
  readonly lt?: InputMaybe<Scalars['Float']['input']>;
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
  readonly not?: InputMaybe<NestedFloatFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<NestedIntFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<NestedIntNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  readonly _avg?: InputMaybe<NestedFloatFilter>;
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedIntFilter>;
  readonly _min?: InputMaybe<NestedIntFilter>;
  readonly _sum?: InputMaybe<NestedIntFilter>;
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<NestedIntWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  readonly _count?: InputMaybe<NestedIntNullableFilter>;
  readonly _max?: InputMaybe<NestedStringNullableFilter>;
  readonly _min?: InputMaybe<NestedStringNullableFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedStringFilter>;
  readonly _min?: InputMaybe<NestedStringFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 0,
  Last = 1,
}

export type Product = {
  readonly ProductColor: ReadonlyArray<ProductColor>;
  readonly _count?: Maybe<ProductCount>;
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly description: Scalars['String']['output'];
  readonly genderId: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly price: Scalars['String']['output'];
  readonly productInventory: ReadonlyArray<ProductInventory>;
  readonly productSales: ReadonlyArray<ProductSales>;
  readonly productType?: Maybe<ProductType>;
  readonly productTypeId: Scalars['String']['output'];
};

export type ProductProductColorArgs = {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type ProductProductInventoryArgs = {
  cursor?: InputMaybe<ProductInventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductInventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductInventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type ProductProductSalesArgs = {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type ProductProductTypeArgs = {
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type ProductColor = {
  readonly color: Color;
  readonly colorId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
};

export type ProductColorCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly colorId: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly productId: Scalars['Int']['output'];
};

export type ProductColorCountOrderByAggregateInput = {
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
};

export type ProductColorCreateInput = {
  readonly color: ColorCreateNestedOneWithoutProductColorInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product: ProductCreateNestedOneWithoutProductColorInput;
};

export type ProductColorCreateManyColorInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly productId: Scalars['String']['input'];
};

export type ProductColorCreateManyColorInputEnvelope = {
  readonly data: ReadonlyArray<ProductColorCreateManyColorInput>;
};

export type ProductColorCreateManyInput = {
  readonly colorId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly productId: Scalars['String']['input'];
};

export type ProductColorCreateManyProductInput = {
  readonly colorId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
};

export type ProductColorCreateManyProductInputEnvelope = {
  readonly data: ReadonlyArray<ProductColorCreateManyProductInput>;
};

export type ProductColorCreateNestedManyWithoutColorInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutColorInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductColorCreateWithoutColorInput>>;
  readonly createMany?: InputMaybe<ProductColorCreateManyColorInputEnvelope>;
};

export type ProductColorCreateNestedManyWithoutProductInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductColorCreateWithoutProductInput>>;
  readonly createMany?: InputMaybe<ProductColorCreateManyProductInputEnvelope>;
};

export type ProductColorCreateOrConnectWithoutColorInput = {
  readonly create: ProductColorCreateWithoutColorInput;
  readonly where: ProductColorWhereUniqueInput;
};

export type ProductColorCreateOrConnectWithoutProductInput = {
  readonly create: ProductColorCreateWithoutProductInput;
  readonly where: ProductColorWhereUniqueInput;
};

export type ProductColorCreateWithoutColorInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product: ProductCreateNestedOneWithoutProductColorInput;
};

export type ProductColorCreateWithoutProductInput = {
  readonly color: ColorCreateNestedOneWithoutProductColorInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
};

export type ProductColorGroupBy = {
  readonly _count?: Maybe<ProductColorCountAggregate>;
  readonly _max?: Maybe<ProductColorMaxAggregate>;
  readonly _min?: Maybe<ProductColorMinAggregate>;
  readonly colorId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly productId: Scalars['String']['output'];
};

export type ProductColorListRelationFilter = {
  readonly every?: InputMaybe<ProductColorWhereInput>;
  readonly none?: InputMaybe<ProductColorWhereInput>;
  readonly some?: InputMaybe<ProductColorWhereInput>;
};

export type ProductColorMaxAggregate = {
  readonly colorId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly productId?: Maybe<Scalars['String']['output']>;
};

export type ProductColorMaxOrderByAggregateInput = {
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
};

export type ProductColorMinAggregate = {
  readonly colorId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly productId?: Maybe<Scalars['String']['output']>;
};

export type ProductColorMinOrderByAggregateInput = {
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
};

export type ProductColorOrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type ProductColorOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<ProductColorCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductColorMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductColorMinOrderByAggregateInput>;
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
};

export type ProductColorOrderByWithRelationInput = {
  readonly color?: InputMaybe<ColorOrderByWithRelationInput>;
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId?: InputMaybe<SortOrder>;
};

export enum ProductColorScalarFieldEnum {
  ColorId = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  ProductId = 4,
}

export type ProductColorScalarWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly colorId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly productId?: InputMaybe<StringFilter>;
};

export type ProductColorScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductColorScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductColorScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductColorScalarWhereWithAggregatesInput>>;
  readonly colorId?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly productId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductColorUpdateInput = {
  readonly color?: InputMaybe<ColorUpdateOneRequiredWithoutProductColorNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductColorNestedInput>;
};

export type ProductColorUpdateManyMutationInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
};

export type ProductColorUpdateManyWithWhereWithoutColorInput = {
  readonly data: ProductColorUpdateManyMutationInput;
  readonly where: ProductColorScalarWhereInput;
};

export type ProductColorUpdateManyWithWhereWithoutProductInput = {
  readonly data: ProductColorUpdateManyMutationInput;
  readonly where: ProductColorScalarWhereInput;
};

export type ProductColorUpdateManyWithoutColorNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutColorInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductColorCreateWithoutColorInput>>;
  readonly createMany?: InputMaybe<ProductColorCreateManyColorInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<ProductColorUpdateWithWhereUniqueWithoutColorInput>>;
  readonly updateMany?: InputMaybe<ReadonlyArray<ProductColorUpdateManyWithWhereWithoutColorInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<ProductColorUpsertWithWhereUniqueWithoutColorInput>>;
};

export type ProductColorUpdateManyWithoutProductNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductColorCreateWithoutProductInput>>;
  readonly createMany?: InputMaybe<ProductColorCreateManyProductInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<ProductColorUpdateWithWhereUniqueWithoutProductInput>>;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductColorUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert?: InputMaybe<ReadonlyArray<ProductColorUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductColorUpdateWithWhereUniqueWithoutColorInput = {
  readonly data: ProductColorUpdateWithoutColorInput;
  readonly where: ProductColorWhereUniqueInput;
};

export type ProductColorUpdateWithWhereUniqueWithoutProductInput = {
  readonly data: ProductColorUpdateWithoutProductInput;
  readonly where: ProductColorWhereUniqueInput;
};

export type ProductColorUpdateWithoutColorInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductColorNestedInput>;
};

export type ProductColorUpdateWithoutProductInput = {
  readonly color?: InputMaybe<ColorUpdateOneRequiredWithoutProductColorNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
};

export type ProductColorUpsertWithWhereUniqueWithoutColorInput = {
  readonly create: ProductColorCreateWithoutColorInput;
  readonly update: ProductColorUpdateWithoutColorInput;
  readonly where: ProductColorWhereUniqueInput;
};

export type ProductColorUpsertWithWhereUniqueWithoutProductInput = {
  readonly create: ProductColorCreateWithoutProductInput;
  readonly update: ProductColorUpdateWithoutProductInput;
  readonly where: ProductColorWhereUniqueInput;
};

export type ProductColorWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly color?: InputMaybe<ColorRelationFilter>;
  readonly colorId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
};

export type ProductColorWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly color?: InputMaybe<ColorRelationFilter>;
  readonly colorId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
};

export type ProductCount = {
  readonly ProductColor: Scalars['Int']['output'];
  readonly productInventory: Scalars['Int']['output'];
  readonly productSales: Scalars['Int']['output'];
};

export type ProductCountProductColorArgs = {
  where?: InputMaybe<ProductColorWhereInput>;
};

export type ProductCountProductInventoryArgs = {
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type ProductCountProductSalesArgs = {
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type ProductCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly description: Scalars['Int']['output'];
  readonly genderId: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
  readonly price: Scalars['Int']['output'];
  readonly productTypeId: Scalars['Int']['output'];
};

export type ProductCountOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
};

export type ProductCreateInput = {
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description: Scalars['String']['input'];
  readonly genderId: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['String']['input'];
  readonly productInventory?: InputMaybe<ProductInventoryCreateNestedManyWithoutProductInput>;
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly productType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
};

export type ProductCreateManyInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description: Scalars['String']['input'];
  readonly genderId: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['String']['input'];
  readonly productTypeId: Scalars['String']['input'];
};

export type ProductCreateManyProductTypeInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description: Scalars['String']['input'];
  readonly genderId: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['String']['input'];
};

export type ProductCreateManyProductTypeInputEnvelope = {
  readonly data: ReadonlyArray<ProductCreateManyProductTypeInput>;
};

export type ProductCreateNestedManyWithoutProductTypeInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductCreateOrConnectWithoutProductTypeInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductCreateWithoutProductTypeInput>>;
  readonly createMany?: InputMaybe<ProductCreateManyProductTypeInputEnvelope>;
};

export type ProductCreateNestedOneWithoutProductColorInput = {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductColorInput>;
};

export type ProductCreateNestedOneWithoutProductInventoryInput = {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductInventoryInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductInventoryInput>;
};

export type ProductCreateNestedOneWithoutProductSalesInput = {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductSalesInput>;
};

export type ProductCreateOrConnectWithoutProductColorInput = {
  readonly create: ProductCreateWithoutProductColorInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductInventoryInput = {
  readonly create: ProductCreateWithoutProductInventoryInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductSalesInput = {
  readonly create: ProductCreateWithoutProductSalesInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductCreateOrConnectWithoutProductTypeInput = {
  readonly create: ProductCreateWithoutProductTypeInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductCreateWithoutProductColorInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description: Scalars['String']['input'];
  readonly genderId: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['String']['input'];
  readonly productInventory?: InputMaybe<ProductInventoryCreateNestedManyWithoutProductInput>;
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly productType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
};

export type ProductCreateWithoutProductInventoryInput = {
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description: Scalars['String']['input'];
  readonly genderId: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['String']['input'];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly productType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
};

export type ProductCreateWithoutProductSalesInput = {
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description: Scalars['String']['input'];
  readonly genderId: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['String']['input'];
  readonly productInventory?: InputMaybe<ProductInventoryCreateNestedManyWithoutProductInput>;
  readonly productType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
};

export type ProductCreateWithoutProductTypeInput = {
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description: Scalars['String']['input'];
  readonly genderId: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['String']['input'];
  readonly productInventory?: InputMaybe<ProductInventoryCreateNestedManyWithoutProductInput>;
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
};

export type ProductGroupBy = {
  readonly _count?: Maybe<ProductCountAggregate>;
  readonly _max?: Maybe<ProductMaxAggregate>;
  readonly _min?: Maybe<ProductMinAggregate>;
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly description: Scalars['String']['output'];
  readonly genderId: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly price: Scalars['String']['output'];
  readonly productTypeId: Scalars['String']['output'];
};

export type ProductInventory = {
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly size: Scalars['String']['output'];
};

export type ProductInventoryAvgAggregate = {
  readonly quantity?: Maybe<Scalars['Float']['output']>;
};

export type ProductInventoryAvgOrderByAggregateInput = {
  readonly quantity?: InputMaybe<SortOrder>;
};

export type ProductInventoryCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly productId: Scalars['Int']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly size: Scalars['Int']['output'];
};

export type ProductInventoryCountOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
};

export type ProductInventoryCreateInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product: ProductCreateNestedOneWithoutProductInventoryInput;
  readonly quantity: Scalars['Int']['input'];
  readonly size: Scalars['String']['input'];
};

export type ProductInventoryCreateManyInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly productId: Scalars['String']['input'];
  readonly quantity: Scalars['Int']['input'];
  readonly size: Scalars['String']['input'];
};

export type ProductInventoryCreateManyProductInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly quantity: Scalars['Int']['input'];
  readonly size: Scalars['String']['input'];
};

export type ProductInventoryCreateManyProductInputEnvelope = {
  readonly data: ReadonlyArray<ProductInventoryCreateManyProductInput>;
};

export type ProductInventoryCreateNestedManyWithoutProductInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductInventoryWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductInventoryCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductInventoryCreateWithoutProductInput>>;
  readonly createMany?: InputMaybe<ProductInventoryCreateManyProductInputEnvelope>;
};

export type ProductInventoryCreateOrConnectWithoutProductInput = {
  readonly create: ProductInventoryCreateWithoutProductInput;
  readonly where: ProductInventoryWhereUniqueInput;
};

export type ProductInventoryCreateWithoutProductInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly quantity: Scalars['Int']['input'];
  readonly size: Scalars['String']['input'];
};

export type ProductInventoryGroupBy = {
  readonly _avg?: Maybe<ProductInventoryAvgAggregate>;
  readonly _count?: Maybe<ProductInventoryCountAggregate>;
  readonly _max?: Maybe<ProductInventoryMaxAggregate>;
  readonly _min?: Maybe<ProductInventoryMinAggregate>;
  readonly _sum?: Maybe<ProductInventorySumAggregate>;
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly size: Scalars['String']['output'];
};

export type ProductInventoryListRelationFilter = {
  readonly every?: InputMaybe<ProductInventoryWhereInput>;
  readonly none?: InputMaybe<ProductInventoryWhereInput>;
  readonly some?: InputMaybe<ProductInventoryWhereInput>;
};

export type ProductInventoryMaxAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly productId?: Maybe<Scalars['String']['output']>;
  readonly quantity?: Maybe<Scalars['Int']['output']>;
  readonly size?: Maybe<Scalars['String']['output']>;
};

export type ProductInventoryMaxOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
};

export type ProductInventoryMinAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly productId?: Maybe<Scalars['String']['output']>;
  readonly quantity?: Maybe<Scalars['Int']['output']>;
  readonly size?: Maybe<Scalars['String']['output']>;
};

export type ProductInventoryMinOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
};

export type ProductInventoryOrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type ProductInventoryOrderByWithAggregationInput = {
  readonly _avg?: InputMaybe<ProductInventoryAvgOrderByAggregateInput>;
  readonly _count?: InputMaybe<ProductInventoryCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductInventoryMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductInventoryMinOrderByAggregateInput>;
  readonly _sum?: InputMaybe<ProductInventorySumOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
};

export type ProductInventoryOrderByWithRelationInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
};

export enum ProductInventoryScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  ProductId = 3,
  Quantity = 4,
  Size = 5,
}

export type ProductInventoryScalarWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductInventoryScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductInventoryScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductInventoryScalarWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly size?: InputMaybe<StringFilter>;
};

export type ProductInventoryScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductInventoryScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductInventoryScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductInventoryScalarWhereWithAggregatesInput>>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly productId?: InputMaybe<StringWithAggregatesFilter>;
  readonly quantity?: InputMaybe<IntWithAggregatesFilter>;
  readonly size?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductInventorySumAggregate = {
  readonly quantity?: Maybe<Scalars['Int']['output']>;
};

export type ProductInventorySumOrderByAggregateInput = {
  readonly quantity?: InputMaybe<SortOrder>;
};

export type ProductInventoryUpdateInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductInventoryNestedInput>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
  readonly size?: InputMaybe<Scalars['String']['input']>;
};

export type ProductInventoryUpdateManyMutationInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
  readonly size?: InputMaybe<Scalars['String']['input']>;
};

export type ProductInventoryUpdateManyWithWhereWithoutProductInput = {
  readonly data: ProductInventoryUpdateManyMutationInput;
  readonly where: ProductInventoryScalarWhereInput;
};

export type ProductInventoryUpdateManyWithoutProductNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductInventoryWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductInventoryCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductInventoryCreateWithoutProductInput>>;
  readonly createMany?: InputMaybe<ProductInventoryCreateManyProductInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductInventoryWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductInventoryScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductInventoryWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductInventoryWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductInventoryUpdateWithWhereUniqueWithoutProductInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductInventoryUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductInventoryUpsertWithWhereUniqueWithoutProductInput>
  >;
};

export type ProductInventoryUpdateWithWhereUniqueWithoutProductInput = {
  readonly data: ProductInventoryUpdateWithoutProductInput;
  readonly where: ProductInventoryWhereUniqueInput;
};

export type ProductInventoryUpdateWithoutProductInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
  readonly size?: InputMaybe<Scalars['String']['input']>;
};

export type ProductInventoryUpsertWithWhereUniqueWithoutProductInput = {
  readonly create: ProductInventoryCreateWithoutProductInput;
  readonly update: ProductInventoryUpdateWithoutProductInput;
  readonly where: ProductInventoryWhereUniqueInput;
};

export type ProductInventoryWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductInventoryWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductInventoryWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductInventoryWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly size?: InputMaybe<StringFilter>;
};

export type ProductInventoryWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductInventoryWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductInventoryWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductInventoryWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly size?: InputMaybe<StringFilter>;
};

export type ProductListRelationFilter = {
  readonly every?: InputMaybe<ProductWhereInput>;
  readonly none?: InputMaybe<ProductWhereInput>;
  readonly some?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly genderId?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly price?: Maybe<Scalars['String']['output']>;
  readonly productTypeId?: Maybe<Scalars['String']['output']>;
};

export type ProductMaxOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
};

export type ProductMinAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly genderId?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly price?: Maybe<Scalars['String']['output']>;
  readonly productTypeId?: Maybe<Scalars['String']['output']>;
};

export type ProductMinOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  readonly ProductColor?: InputMaybe<ProductColorOrderByRelationAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productInventory?: InputMaybe<ProductInventoryOrderByRelationAggregateInput>;
  readonly productSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
  readonly productType?: InputMaybe<ProductTypeOrderByWithRelationInput>;
  readonly productTypeId?: InputMaybe<SortOrder>;
};

export type ProductRelationFilter = {
  readonly is?: InputMaybe<ProductWhereInput>;
  readonly isNot?: InputMaybe<ProductWhereInput>;
};

export type ProductSales = {
  readonly customer: Customer;
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly price: Scalars['String']['output'];
  readonly product: Product;
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly user: User;
  readonly userId: Scalars['String']['output'];
};

export type ProductSalesAvgAggregate = {
  readonly quantity?: Maybe<Scalars['Float']['output']>;
};

export type ProductSalesAvgOrderByAggregateInput = {
  readonly quantity?: InputMaybe<SortOrder>;
};

export type ProductSalesCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly customerId: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly price: Scalars['Int']['output'];
  readonly productId: Scalars['Int']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly userId: Scalars['Int']['output'];
};

export type ProductSalesCountOrderByAggregateInput = {
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
};

export type ProductSalesCreateInput = {
  readonly customer: CustomerCreateNestedOneWithoutProductSalesInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars['Int']['input'];
  readonly user: UserCreateNestedOneWithoutProductSalesInput;
};

export type ProductSalesCreateManyCustomerInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly productId: Scalars['String']['input'];
  readonly quantity: Scalars['Int']['input'];
  readonly userId: Scalars['String']['input'];
};

export type ProductSalesCreateManyCustomerInputEnvelope = {
  readonly data: ReadonlyArray<ProductSalesCreateManyCustomerInput>;
};

export type ProductSalesCreateManyInput = {
  readonly customerId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly productId: Scalars['String']['input'];
  readonly quantity: Scalars['Int']['input'];
  readonly userId: Scalars['String']['input'];
};

export type ProductSalesCreateManyProductInput = {
  readonly customerId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly quantity: Scalars['Int']['input'];
  readonly userId: Scalars['String']['input'];
};

export type ProductSalesCreateManyProductInputEnvelope = {
  readonly data: ReadonlyArray<ProductSalesCreateManyProductInput>;
};

export type ProductSalesCreateManyUserInput = {
  readonly customerId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly productId: Scalars['String']['input'];
  readonly quantity: Scalars['Int']['input'];
};

export type ProductSalesCreateManyUserInputEnvelope = {
  readonly data: ReadonlyArray<ProductSalesCreateManyUserInput>;
};

export type ProductSalesCreateNestedManyWithoutCustomerInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductSalesCreateWithoutCustomerInput>>;
  readonly createMany?: InputMaybe<ProductSalesCreateManyCustomerInputEnvelope>;
};

export type ProductSalesCreateNestedManyWithoutProductInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductSalesCreateWithoutProductInput>>;
  readonly createMany?: InputMaybe<ProductSalesCreateManyProductInputEnvelope>;
};

export type ProductSalesCreateNestedManyWithoutUserInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<ProductSalesCreateOrConnectWithoutUserInput>>;
  readonly create?: InputMaybe<ReadonlyArray<ProductSalesCreateWithoutUserInput>>;
  readonly createMany?: InputMaybe<ProductSalesCreateManyUserInputEnvelope>;
};

export type ProductSalesCreateOrConnectWithoutCustomerInput = {
  readonly create: ProductSalesCreateWithoutCustomerInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesCreateOrConnectWithoutProductInput = {
  readonly create: ProductSalesCreateWithoutProductInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesCreateOrConnectWithoutUserInput = {
  readonly create: ProductSalesCreateWithoutUserInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesCreateWithoutCustomerInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars['Int']['input'];
  readonly user: UserCreateNestedOneWithoutProductSalesInput;
};

export type ProductSalesCreateWithoutProductInput = {
  readonly customer: CustomerCreateNestedOneWithoutProductSalesInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly quantity: Scalars['Int']['input'];
  readonly user: UserCreateNestedOneWithoutProductSalesInput;
};

export type ProductSalesCreateWithoutUserInput = {
  readonly customer: CustomerCreateNestedOneWithoutProductSalesInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price: Scalars['String']['input'];
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars['Int']['input'];
};

export type ProductSalesGroupBy = {
  readonly _avg?: Maybe<ProductSalesAvgAggregate>;
  readonly _count?: Maybe<ProductSalesCountAggregate>;
  readonly _max?: Maybe<ProductSalesMaxAggregate>;
  readonly _min?: Maybe<ProductSalesMinAggregate>;
  readonly _sum?: Maybe<ProductSalesSumAggregate>;
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly price: Scalars['String']['output'];
  readonly productId: Scalars['String']['output'];
  readonly quantity: Scalars['Int']['output'];
  readonly userId: Scalars['String']['output'];
};

export type ProductSalesListRelationFilter = {
  readonly every?: InputMaybe<ProductSalesWhereInput>;
  readonly none?: InputMaybe<ProductSalesWhereInput>;
  readonly some?: InputMaybe<ProductSalesWhereInput>;
};

export type ProductSalesMaxAggregate = {
  readonly customerId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly price?: Maybe<Scalars['String']['output']>;
  readonly productId?: Maybe<Scalars['String']['output']>;
  readonly quantity?: Maybe<Scalars['Int']['output']>;
  readonly userId?: Maybe<Scalars['String']['output']>;
};

export type ProductSalesMaxOrderByAggregateInput = {
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
};

export type ProductSalesMinAggregate = {
  readonly customerId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly price?: Maybe<Scalars['String']['output']>;
  readonly productId?: Maybe<Scalars['String']['output']>;
  readonly quantity?: Maybe<Scalars['Int']['output']>;
  readonly userId?: Maybe<Scalars['String']['output']>;
};

export type ProductSalesMinOrderByAggregateInput = {
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
};

export type ProductSalesOrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type ProductSalesOrderByWithAggregationInput = {
  readonly _avg?: InputMaybe<ProductSalesAvgOrderByAggregateInput>;
  readonly _count?: InputMaybe<ProductSalesCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductSalesMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductSalesMinOrderByAggregateInput>;
  readonly _sum?: InputMaybe<ProductSalesSumOrderByAggregateInput>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
};

export type ProductSalesOrderByWithRelationInput = {
  readonly customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly user?: InputMaybe<UserOrderByWithRelationInput>;
  readonly userId?: InputMaybe<SortOrder>;
};

export enum ProductSalesScalarFieldEnum {
  CustomerId = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  Price = 4,
  ProductId = 5,
  Quantity = 6,
  UserId = 7,
}

export type ProductSalesScalarWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly userId?: InputMaybe<StringFilter>;
};

export type ProductSalesScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereWithAggregatesInput>>;
  readonly customerId?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly price?: InputMaybe<StringWithAggregatesFilter>;
  readonly productId?: InputMaybe<StringWithAggregatesFilter>;
  readonly quantity?: InputMaybe<IntWithAggregatesFilter>;
  readonly userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductSalesSumAggregate = {
  readonly quantity?: Maybe<Scalars['Int']['output']>;
};

export type ProductSalesSumOrderByAggregateInput = {
  readonly quantity?: InputMaybe<SortOrder>;
};

export type ProductSalesUpdateInput = {
  readonly customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
  readonly user?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
};

export type ProductSalesUpdateManyMutationInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSalesUpdateManyWithWhereWithoutCustomerInput = {
  readonly data: ProductSalesUpdateManyMutationInput;
  readonly where: ProductSalesScalarWhereInput;
};

export type ProductSalesUpdateManyWithWhereWithoutProductInput = {
  readonly data: ProductSalesUpdateManyMutationInput;
  readonly where: ProductSalesScalarWhereInput;
};

export type ProductSalesUpdateManyWithWhereWithoutUserInput = {
  readonly data: ProductSalesUpdateManyMutationInput;
  readonly where: ProductSalesScalarWhereInput;
};

export type ProductSalesUpdateManyWithoutCustomerNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductSalesCreateWithoutCustomerInput>>;
  readonly createMany?: InputMaybe<ProductSalesCreateManyCustomerInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateWithWhereUniqueWithoutCustomerInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateManyWithWhereWithoutCustomerInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductSalesUpsertWithWhereUniqueWithoutCustomerInput>
  >;
};

export type ProductSalesUpdateManyWithoutProductNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductSalesCreateWithoutProductInput>>;
  readonly createMany?: InputMaybe<ProductSalesCreateManyProductInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<ProductSalesUpdateWithWhereUniqueWithoutProductInput>>;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert?: InputMaybe<ReadonlyArray<ProductSalesUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ProductSalesUpdateManyWithoutUserNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<ProductSalesCreateOrConnectWithoutUserInput>>;
  readonly create?: InputMaybe<ReadonlyArray<ProductSalesCreateWithoutUserInput>>;
  readonly createMany?: InputMaybe<ProductSalesCreateManyUserInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<ProductSalesUpdateWithWhereUniqueWithoutUserInput>>;
  readonly updateMany?: InputMaybe<ReadonlyArray<ProductSalesUpdateManyWithWhereWithoutUserInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<ProductSalesUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ProductSalesUpdateWithWhereUniqueWithoutCustomerInput = {
  readonly data: ProductSalesUpdateWithoutCustomerInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesUpdateWithWhereUniqueWithoutProductInput = {
  readonly data: ProductSalesUpdateWithoutProductInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesUpdateWithWhereUniqueWithoutUserInput = {
  readonly data: ProductSalesUpdateWithoutUserInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesUpdateWithoutCustomerInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
  readonly user?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
};

export type ProductSalesUpdateWithoutProductInput = {
  readonly customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
  readonly user?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
};

export type ProductSalesUpdateWithoutUserInput = {
  readonly customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSalesUpsertWithWhereUniqueWithoutCustomerInput = {
  readonly create: ProductSalesCreateWithoutCustomerInput;
  readonly update: ProductSalesUpdateWithoutCustomerInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesUpsertWithWhereUniqueWithoutProductInput = {
  readonly create: ProductSalesCreateWithoutProductInput;
  readonly update: ProductSalesUpdateWithoutProductInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesUpsertWithWhereUniqueWithoutUserInput = {
  readonly create: ProductSalesCreateWithoutUserInput;
  readonly update: ProductSalesUpdateWithoutUserInput;
  readonly where: ProductSalesWhereUniqueInput;
};

export type ProductSalesWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly customer?: InputMaybe<CustomerRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly user?: InputMaybe<UserRelationFilter>;
  readonly userId?: InputMaybe<StringFilter>;
};

export type ProductSalesWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly customer?: InputMaybe<CustomerRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly user?: InputMaybe<UserRelationFilter>;
  readonly userId?: InputMaybe<StringFilter>;
};

export enum ProductScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Description = 2,
  GenderId = 3,
  Id = 4,
  Name = 5,
  Price = 6,
  ProductTypeId = 7,
}

export type ProductScalarWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly genderId?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly productTypeId?: InputMaybe<StringFilter>;
};

export type ProductScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductScalarWhereWithAggregatesInput>>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly description?: InputMaybe<StringWithAggregatesFilter>;
  readonly genderId?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
  readonly price?: InputMaybe<StringWithAggregatesFilter>;
  readonly productTypeId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductType = {
  readonly _count?: Maybe<ProductTypeCount>;
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly product: ReadonlyArray<Product>;
};

export type ProductTypeProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductTypeCount = {
  readonly product: Scalars['Int']['output'];
};

export type ProductTypeCountProductArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type ProductTypeCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
};

export type ProductTypeCountOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ProductTypeCreateInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly product?: InputMaybe<ProductCreateNestedManyWithoutProductTypeInput>;
};

export type ProductTypeCreateManyInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type ProductTypeCreateNestedOneWithoutProductInput = {
  readonly connect?: InputMaybe<ProductTypeWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductTypeCreateOrConnectWithoutProductInput>;
  readonly create?: InputMaybe<ProductTypeCreateWithoutProductInput>;
};

export type ProductTypeCreateOrConnectWithoutProductInput = {
  readonly create: ProductTypeCreateWithoutProductInput;
  readonly where: ProductTypeWhereUniqueInput;
};

export type ProductTypeCreateWithoutProductInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type ProductTypeGroupBy = {
  readonly _count?: Maybe<ProductTypeCountAggregate>;
  readonly _max?: Maybe<ProductTypeMaxAggregate>;
  readonly _min?: Maybe<ProductTypeMinAggregate>;
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type ProductTypeMaxAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type ProductTypeMaxOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ProductTypeMinAggregate = {
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type ProductTypeMinOrderByAggregateInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ProductTypeNullableRelationFilter = {
  readonly is?: InputMaybe<ProductTypeWhereInput>;
  readonly isNot?: InputMaybe<ProductTypeWhereInput>;
};

export type ProductTypeOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<ProductTypeCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductTypeMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductTypeMinOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type ProductTypeOrderByWithRelationInput = {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByRelationAggregateInput>;
};

export enum ProductTypeScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export type ProductTypeScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductTypeScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductTypeScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductTypeScalarWhereWithAggregatesInput>>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProductTypeUpdateInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly product?: InputMaybe<ProductUpdateManyWithoutProductTypeNestedInput>;
};

export type ProductTypeUpdateManyMutationInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductTypeUpdateOneWithoutProductNestedInput = {
  readonly connect?: InputMaybe<ProductTypeWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductTypeCreateOrConnectWithoutProductInput>;
  readonly create?: InputMaybe<ProductTypeCreateWithoutProductInput>;
  readonly delete?: InputMaybe<ProductTypeWhereInput>;
  readonly disconnect?: InputMaybe<ProductTypeWhereInput>;
  readonly update?: InputMaybe<ProductTypeUpdateToOneWithWhereWithoutProductInput>;
  readonly upsert?: InputMaybe<ProductTypeUpsertWithoutProductInput>;
};

export type ProductTypeUpdateToOneWithWhereWithoutProductInput = {
  readonly data: ProductTypeUpdateWithoutProductInput;
  readonly where?: InputMaybe<ProductTypeWhereInput>;
};

export type ProductTypeUpdateWithoutProductInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductTypeUpsertWithoutProductInput = {
  readonly create: ProductTypeCreateWithoutProductInput;
  readonly update: ProductTypeUpdateWithoutProductInput;
  readonly where?: InputMaybe<ProductTypeWhereInput>;
};

export type ProductTypeWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductListRelationFilter>;
};

export type ProductTypeWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductListRelationFilter>;
};

export type ProductUpdateInput = {
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly genderId?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly productInventory?: InputMaybe<ProductInventoryUpdateManyWithoutProductNestedInput>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly productType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
};

export type ProductUpdateManyMutationInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly genderId?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUpdateManyWithWhereWithoutProductTypeInput = {
  readonly data: ProductUpdateManyMutationInput;
  readonly where: ProductScalarWhereInput;
};

export type ProductUpdateManyWithoutProductTypeNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductCreateOrConnectWithoutProductTypeInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<ProductCreateWithoutProductTypeInput>>;
  readonly createMany?: InputMaybe<ProductCreateManyProductTypeInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<ProductUpdateWithWhereUniqueWithoutProductTypeInput>>;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductUpdateManyWithWhereWithoutProductTypeInput>
  >;
  readonly upsert?: InputMaybe<ReadonlyArray<ProductUpsertWithWhereUniqueWithoutProductTypeInput>>;
};

export type ProductUpdateOneRequiredWithoutProductColorNestedInput = {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductColorInput>;
  readonly update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductColorInput>;
  readonly upsert?: InputMaybe<ProductUpsertWithoutProductColorInput>;
};

export type ProductUpdateOneRequiredWithoutProductInventoryNestedInput = {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductInventoryInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductInventoryInput>;
  readonly update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductInventoryInput>;
  readonly upsert?: InputMaybe<ProductUpsertWithoutProductInventoryInput>;
};

export type ProductUpdateOneRequiredWithoutProductSalesNestedInput = {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductSalesInput>;
  readonly update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductSalesInput>;
  readonly upsert?: InputMaybe<ProductUpsertWithoutProductSalesInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductColorInput = {
  readonly data: ProductUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductInventoryInput = {
  readonly data: ProductUpdateWithoutProductInventoryInput;
  readonly where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateToOneWithWhereWithoutProductSalesInput = {
  readonly data: ProductUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpdateWithWhereUniqueWithoutProductTypeInput = {
  readonly data: ProductUpdateWithoutProductTypeInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductUpdateWithoutProductColorInput = {
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly genderId?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly productInventory?: InputMaybe<ProductInventoryUpdateManyWithoutProductNestedInput>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly productType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProductInventoryInput = {
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly genderId?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly productType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProductSalesInput = {
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly genderId?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly productInventory?: InputMaybe<ProductInventoryUpdateManyWithoutProductNestedInput>;
  readonly productType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
};

export type ProductUpdateWithoutProductTypeInput = {
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly genderId?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly price?: InputMaybe<Scalars['String']['input']>;
  readonly productInventory?: InputMaybe<ProductInventoryUpdateManyWithoutProductNestedInput>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
};

export type ProductUpsertWithWhereUniqueWithoutProductTypeInput = {
  readonly create: ProductCreateWithoutProductTypeInput;
  readonly update: ProductUpdateWithoutProductTypeInput;
  readonly where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutProductColorInput = {
  readonly create: ProductCreateWithoutProductColorInput;
  readonly update: ProductUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutProductInventoryInput = {
  readonly create: ProductCreateWithoutProductInventoryInput;
  readonly update: ProductUpdateWithoutProductInventoryInput;
  readonly where?: InputMaybe<ProductWhereInput>;
};

export type ProductUpsertWithoutProductSalesInput = {
  readonly create: ProductCreateWithoutProductSalesInput;
  readonly update: ProductUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<ProductWhereInput>;
};

export type ProductWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly genderId?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly productInventory?: InputMaybe<ProductInventoryListRelationFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly productType?: InputMaybe<ProductTypeNullableRelationFilter>;
  readonly productTypeId?: InputMaybe<StringFilter>;
};

export type ProductWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly genderId?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly productInventory?: InputMaybe<ProductInventoryListRelationFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly productType?: InputMaybe<ProductTypeNullableRelationFilter>;
  readonly productTypeId?: InputMaybe<StringFilter>;
};

export type Query = {
  readonly aggregateColor: AggregateColor;
  readonly aggregateCustomer: AggregateCustomer;
  readonly aggregateCustomerContact: AggregateCustomerContact;
  readonly aggregateProduct: AggregateProduct;
  readonly aggregateProductColor: AggregateProductColor;
  readonly aggregateProductInventory: AggregateProductInventory;
  readonly aggregateProductSales: AggregateProductSales;
  readonly aggregateProductType: AggregateProductType;
  readonly aggregateState: AggregateState;
  readonly aggregateUser: AggregateUser;
  readonly color?: Maybe<Color>;
  readonly colors: ReadonlyArray<Color>;
  readonly customer?: Maybe<Customer>;
  readonly customerContact?: Maybe<CustomerContact>;
  readonly customerContacts: ReadonlyArray<CustomerContact>;
  readonly customers: ReadonlyArray<Customer>;
  readonly findFirstColor?: Maybe<Color>;
  readonly findFirstColorOrThrow?: Maybe<Color>;
  readonly findFirstCustomer?: Maybe<Customer>;
  readonly findFirstCustomerContact?: Maybe<CustomerContact>;
  readonly findFirstCustomerContactOrThrow?: Maybe<CustomerContact>;
  readonly findFirstCustomerOrThrow?: Maybe<Customer>;
  readonly findFirstProduct?: Maybe<Product>;
  readonly findFirstProductColor?: Maybe<ProductColor>;
  readonly findFirstProductColorOrThrow?: Maybe<ProductColor>;
  readonly findFirstProductInventory?: Maybe<ProductInventory>;
  readonly findFirstProductInventoryOrThrow?: Maybe<ProductInventory>;
  readonly findFirstProductOrThrow?: Maybe<Product>;
  readonly findFirstProductSales?: Maybe<ProductSales>;
  readonly findFirstProductSalesOrThrow?: Maybe<ProductSales>;
  readonly findFirstProductType?: Maybe<ProductType>;
  readonly findFirstProductTypeOrThrow?: Maybe<ProductType>;
  readonly findFirstState?: Maybe<State>;
  readonly findFirstStateOrThrow?: Maybe<State>;
  readonly findFirstUser?: Maybe<User>;
  readonly findFirstUserOrThrow?: Maybe<User>;
  readonly findManyProductSales: ReadonlyArray<ProductSales>;
  readonly findUniqueProductSales?: Maybe<ProductSales>;
  readonly findUniqueProductSalesOrThrow?: Maybe<ProductSales>;
  readonly getColor?: Maybe<Color>;
  readonly getCustomer?: Maybe<Customer>;
  readonly getCustomerContact?: Maybe<CustomerContact>;
  readonly getProduct?: Maybe<Product>;
  readonly getProductColor?: Maybe<ProductColor>;
  readonly getProductInventory?: Maybe<ProductInventory>;
  readonly getProductType?: Maybe<ProductType>;
  readonly getState?: Maybe<State>;
  readonly getUser?: Maybe<User>;
  readonly groupByColor: ReadonlyArray<ColorGroupBy>;
  readonly groupByCustomer: ReadonlyArray<CustomerGroupBy>;
  readonly groupByCustomerContact: ReadonlyArray<CustomerContactGroupBy>;
  readonly groupByProduct: ReadonlyArray<ProductGroupBy>;
  readonly groupByProductColor: ReadonlyArray<ProductColorGroupBy>;
  readonly groupByProductInventory: ReadonlyArray<ProductInventoryGroupBy>;
  readonly groupByProductSales: ReadonlyArray<ProductSalesGroupBy>;
  readonly groupByProductType: ReadonlyArray<ProductTypeGroupBy>;
  readonly groupByState: ReadonlyArray<StateGroupBy>;
  readonly groupByUser: ReadonlyArray<UserGroupBy>;
  readonly product?: Maybe<Product>;
  readonly productColor?: Maybe<ProductColor>;
  readonly productColors: ReadonlyArray<ProductColor>;
  readonly productInventories: ReadonlyArray<ProductInventory>;
  readonly productInventory?: Maybe<ProductInventory>;
  readonly productType?: Maybe<ProductType>;
  readonly productTypes: ReadonlyArray<ProductType>;
  readonly products: ReadonlyArray<Product>;
  readonly search?: Maybe<ReadonlyArray<SearchResult>>;
  readonly signin?: Maybe<SigninResponse>;
  readonly signout: Scalars['Boolean']['output'];
  readonly state?: Maybe<State>;
  readonly states: ReadonlyArray<State>;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
};

export type QueryAggregateColorArgs = {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColorWhereInput>;
};

export type QueryAggregateCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryAggregateCustomerContactArgs = {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type QueryAggregateProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryAggregateProductColorArgs = {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type QueryAggregateProductInventoryArgs = {
  cursor?: InputMaybe<ProductInventoryWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductInventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type QueryAggregateProductSalesArgs = {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type QueryAggregateProductTypeArgs = {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type QueryAggregateStateArgs = {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryColorArgs = {
  where: ColorWhereUniqueInput;
};

export type QueryColorsArgs = {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColorWhereInput>;
};

export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput;
};

export type QueryCustomerContactArgs = {
  where: CustomerContactWhereUniqueInput;
};

export type QueryCustomerContactsArgs = {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryFindFirstColorArgs = {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColorWhereInput>;
};

export type QueryFindFirstColorOrThrowArgs = {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColorWhereInput>;
};

export type QueryFindFirstCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryFindFirstCustomerContactArgs = {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type QueryFindFirstCustomerContactOrThrowArgs = {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type QueryFindFirstCustomerOrThrowArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryFindFirstProductArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryFindFirstProductColorArgs = {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type QueryFindFirstProductColorOrThrowArgs = {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type QueryFindFirstProductInventoryArgs = {
  cursor?: InputMaybe<ProductInventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductInventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductInventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type QueryFindFirstProductInventoryOrThrowArgs = {
  cursor?: InputMaybe<ProductInventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductInventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductInventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type QueryFindFirstProductOrThrowArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryFindFirstProductSalesArgs = {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type QueryFindFirstProductSalesOrThrowArgs = {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type QueryFindFirstProductTypeArgs = {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type QueryFindFirstProductTypeOrThrowArgs = {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type QueryFindFirstStateArgs = {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
};

export type QueryFindFirstStateOrThrowArgs = {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindManyProductSalesArgs = {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type QueryFindUniqueProductSalesArgs = {
  where: ProductSalesWhereUniqueInput;
};

export type QueryFindUniqueProductSalesOrThrowArgs = {
  where: ProductSalesWhereUniqueInput;
};

export type QueryGetColorArgs = {
  where: ColorWhereUniqueInput;
};

export type QueryGetCustomerArgs = {
  where: CustomerWhereUniqueInput;
};

export type QueryGetCustomerContactArgs = {
  where: CustomerContactWhereUniqueInput;
};

export type QueryGetProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryGetProductColorArgs = {
  where: ProductColorWhereUniqueInput;
};

export type QueryGetProductInventoryArgs = {
  where: ProductInventoryWhereUniqueInput;
};

export type QueryGetProductTypeArgs = {
  where: ProductTypeWhereUniqueInput;
};

export type QueryGetStateArgs = {
  where: StateWhereUniqueInput;
};

export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryGroupByColorArgs = {
  by: ReadonlyArray<ColorScalarFieldEnum>;
  having?: InputMaybe<ColorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColorWhereInput>;
};

export type QueryGroupByCustomerArgs = {
  by: ReadonlyArray<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryGroupByCustomerContactArgs = {
  by: ReadonlyArray<CustomerContactScalarFieldEnum>;
  having?: InputMaybe<CustomerContactScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type QueryGroupByProductArgs = {
  by: ReadonlyArray<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryGroupByProductColorArgs = {
  by: ReadonlyArray<ProductColorScalarFieldEnum>;
  having?: InputMaybe<ProductColorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type QueryGroupByProductInventoryArgs = {
  by: ReadonlyArray<ProductInventoryScalarFieldEnum>;
  having?: InputMaybe<ProductInventoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductInventoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type QueryGroupByProductSalesArgs = {
  by: ReadonlyArray<ProductSalesScalarFieldEnum>;
  having?: InputMaybe<ProductSalesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type QueryGroupByProductTypeArgs = {
  by: ReadonlyArray<ProductTypeScalarFieldEnum>;
  having?: InputMaybe<ProductTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type QueryGroupByStateArgs = {
  by: ReadonlyArray<StateScalarFieldEnum>;
  having?: InputMaybe<StateScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
};

export type QueryGroupByUserArgs = {
  by: ReadonlyArray<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type QueryProductColorArgs = {
  where: ProductColorWhereUniqueInput;
};

export type QueryProductColorsArgs = {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductColorWhereInput>;
};

export type QueryProductInventoriesArgs = {
  cursor?: InputMaybe<ProductInventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductInventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductInventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductInventoryWhereInput>;
};

export type QueryProductInventoryArgs = {
  where: ProductInventoryWhereUniqueInput;
};

export type QueryProductTypeArgs = {
  where: ProductTypeWhereUniqueInput;
};

export type QueryProductTypesArgs = {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductTypeWhereInput>;
};

export type QueryProductsArgs = {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};

export type QuerySearchArgs = {
  query: Scalars['String']['input'];
};

export type QuerySigninArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type QueryStateArgs = {
  where: StateWhereUniqueInput;
};

export type QueryStatesArgs = {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type SearchResult = {
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly type?: Maybe<Scalars['Float']['output']>;
};

export type SigninResponse = {
  readonly token: Scalars['String']['output'];
  readonly userId: Scalars['String']['output'];
};

export enum SortOrder {
  Asc = 0,
  Desc = 1,
}

export type SortOrderInput = {
  readonly nulls?: InputMaybe<NullsOrder>;
  readonly sort: SortOrder;
};

export type State = {
  readonly _count?: Maybe<StateCount>;
  readonly code: Scalars['String']['output'];
  readonly customer: ReadonlyArray<Customer>;
  readonly customerContact: ReadonlyArray<CustomerContact>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly user: ReadonlyArray<User>;
};

export type StateCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type StateCustomerContactArgs = {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type StateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type StateCount = {
  readonly customer: Scalars['Int']['output'];
  readonly customerContact: Scalars['Int']['output'];
  readonly user: Scalars['Int']['output'];
};

export type StateCountCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};

export type StateCountCustomerContactArgs = {
  where?: InputMaybe<CustomerContactWhereInput>;
};

export type StateCountUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type StateCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly code: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
};

export type StateCountOrderByAggregateInput = {
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type StateCreateInput = {
  readonly code: Scalars['String']['input'];
  readonly customer?: InputMaybe<CustomerCreateNestedManyWithoutStateInput>;
  readonly customerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly user?: InputMaybe<UserCreateNestedManyWithoutStateInput>;
};

export type StateCreateManyInput = {
  readonly code: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type StateCreateNestedOneWithoutCustomerContactInput = {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerContactInput>;
};

export type StateCreateNestedOneWithoutCustomerInput = {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerInput>;
};

export type StateCreateNestedOneWithoutUserInput = {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutUserInput>;
  readonly create?: InputMaybe<StateCreateWithoutUserInput>;
};

export type StateCreateOrConnectWithoutCustomerContactInput = {
  readonly create: StateCreateWithoutCustomerContactInput;
  readonly where: StateWhereUniqueInput;
};

export type StateCreateOrConnectWithoutCustomerInput = {
  readonly create: StateCreateWithoutCustomerInput;
  readonly where: StateWhereUniqueInput;
};

export type StateCreateOrConnectWithoutUserInput = {
  readonly create: StateCreateWithoutUserInput;
  readonly where: StateWhereUniqueInput;
};

export type StateCreateWithoutCustomerContactInput = {
  readonly code: Scalars['String']['input'];
  readonly customer?: InputMaybe<CustomerCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly user?: InputMaybe<UserCreateNestedManyWithoutStateInput>;
};

export type StateCreateWithoutCustomerInput = {
  readonly code: Scalars['String']['input'];
  readonly customerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly user?: InputMaybe<UserCreateNestedManyWithoutStateInput>;
};

export type StateCreateWithoutUserInput = {
  readonly code: Scalars['String']['input'];
  readonly customer?: InputMaybe<CustomerCreateNestedManyWithoutStateInput>;
  readonly customerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
};

export type StateGroupBy = {
  readonly _count?: Maybe<StateCountAggregate>;
  readonly _max?: Maybe<StateMaxAggregate>;
  readonly _min?: Maybe<StateMinAggregate>;
  readonly code: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
};

export type StateMaxAggregate = {
  readonly code?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type StateMaxOrderByAggregateInput = {
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type StateMinAggregate = {
  readonly code?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type StateMinOrderByAggregateInput = {
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type StateOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<StateCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<StateMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<StateMinOrderByAggregateInput>;
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
};

export type StateOrderByWithRelationInput = {
  readonly code?: InputMaybe<SortOrder>;
  readonly customer?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  readonly customerContact?: InputMaybe<CustomerContactOrderByRelationAggregateInput>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly user?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type StateRelationFilter = {
  readonly is?: InputMaybe<StateWhereInput>;
  readonly isNot?: InputMaybe<StateWhereInput>;
};

export enum StateScalarFieldEnum {
  Code = 0,
  Id = 1,
  Name = 2,
}

export type StateScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<StateScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<StateScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<StateScalarWhereWithAggregatesInput>>;
  readonly code?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
};

export type StateUpdateInput = {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateManyWithoutStateNestedInput>;
  readonly customerContact?: InputMaybe<CustomerContactUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<UserUpdateManyWithoutStateNestedInput>;
};

export type StateUpdateManyMutationInput = {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type StateUpdateOneRequiredWithoutCustomerContactNestedInput = {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerContactInput>;
  readonly update?: InputMaybe<StateUpdateToOneWithWhereWithoutCustomerContactInput>;
  readonly upsert?: InputMaybe<StateUpsertWithoutCustomerContactInput>;
};

export type StateUpdateOneRequiredWithoutCustomerNestedInput = {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerInput>;
  readonly update?: InputMaybe<StateUpdateToOneWithWhereWithoutCustomerInput>;
  readonly upsert?: InputMaybe<StateUpsertWithoutCustomerInput>;
};

export type StateUpdateOneRequiredWithoutUserNestedInput = {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutUserInput>;
  readonly create?: InputMaybe<StateCreateWithoutUserInput>;
  readonly update?: InputMaybe<StateUpdateToOneWithWhereWithoutUserInput>;
  readonly upsert?: InputMaybe<StateUpsertWithoutUserInput>;
};

export type StateUpdateToOneWithWhereWithoutCustomerContactInput = {
  readonly data: StateUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<StateWhereInput>;
};

export type StateUpdateToOneWithWhereWithoutCustomerInput = {
  readonly data: StateUpdateWithoutCustomerInput;
  readonly where?: InputMaybe<StateWhereInput>;
};

export type StateUpdateToOneWithWhereWithoutUserInput = {
  readonly data: StateUpdateWithoutUserInput;
  readonly where?: InputMaybe<StateWhereInput>;
};

export type StateUpdateWithoutCustomerContactInput = {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<UserUpdateManyWithoutStateNestedInput>;
};

export type StateUpdateWithoutCustomerInput = {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customerContact?: InputMaybe<CustomerContactUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<UserUpdateManyWithoutStateNestedInput>;
};

export type StateUpdateWithoutUserInput = {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateManyWithoutStateNestedInput>;
  readonly customerContact?: InputMaybe<CustomerContactUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type StateUpsertWithoutCustomerContactInput = {
  readonly create: StateCreateWithoutCustomerContactInput;
  readonly update: StateUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<StateWhereInput>;
};

export type StateUpsertWithoutCustomerInput = {
  readonly create: StateCreateWithoutCustomerInput;
  readonly update: StateUpdateWithoutCustomerInput;
  readonly where?: InputMaybe<StateWhereInput>;
};

export type StateUpsertWithoutUserInput = {
  readonly create: StateCreateWithoutUserInput;
  readonly update: StateUpdateWithoutUserInput;
  readonly where?: InputMaybe<StateWhereInput>;
};

export type StateWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly code?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerListRelationFilter>;
  readonly customerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly user?: InputMaybe<UserListRelationFilter>;
};

export type StateWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly code?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerListRelationFilter>;
  readonly customerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<StringFilter>;
  readonly user?: InputMaybe<UserListRelationFilter>;
};

export type StringFilter = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  readonly _count?: InputMaybe<NestedIntNullableFilter>;
  readonly _max?: InputMaybe<NestedStringNullableFilter>;
  readonly _min?: InputMaybe<NestedStringNullableFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedStringFilter>;
  readonly _min?: InputMaybe<NestedStringFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  readonly _count?: Maybe<UserCount>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly productSales: ReadonlyArray<ProductSales>;
  readonly role: Scalars['String']['output'];
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type UserProductSalesArgs = {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type UserCount = {
  readonly productSales: Scalars['Int']['output'];
};

export type UserCountProductSalesArgs = {
  where?: InputMaybe<ProductSalesWhereInput>;
};

export type UserCountAggregate = {
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly password: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly role: Scalars['Int']['output'];
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly streetAddress2: Scalars['Int']['output'];
  readonly zip: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutUserInput>;
  readonly role: Scalars['String']['input'];
  readonly state: StateCreateNestedOneWithoutUserInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type UserCreateManyInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type UserCreateManyStateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type UserCreateManyStateInputEnvelope = {
  readonly data: ReadonlyArray<UserCreateManyStateInput>;
};

export type UserCreateNestedManyWithoutStateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<UserCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<UserCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<UserCreateManyStateInputEnvelope>;
};

export type UserCreateNestedOneWithoutProductSalesInput = {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<UserCreateWithoutProductSalesInput>;
};

export type UserCreateOrConnectWithoutProductSalesInput = {
  readonly create: UserCreateWithoutProductSalesInput;
  readonly where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStateInput = {
  readonly create: UserCreateWithoutStateInput;
  readonly where: UserWhereUniqueInput;
};

export type UserCreateWithoutProductSalesInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
  readonly state: StateCreateNestedOneWithoutUserInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type UserCreateWithoutStateInput = {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutUserInput>;
  readonly role: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
};

export type UserGroupBy = {
  readonly _count?: Maybe<UserCountAggregate>;
  readonly _max?: Maybe<UserMaxAggregate>;
  readonly _min?: Maybe<UserMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
};

export type UserListRelationFilter = {
  readonly every?: InputMaybe<UserWhereInput>;
  readonly none?: InputMaybe<UserWhereInput>;
  readonly some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly password?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly password?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  readonly _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  readonly _count?: InputMaybe<UserCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<UserMinOrderByAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly productSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
  readonly role?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<StateOrderByWithRelationInput>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  readonly is?: InputMaybe<UserWhereInput>;
  readonly isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  City = 0,
  DateCreated = 1,
  Email = 2,
  FirstName = 3,
  Id = 4,
  LastName = 5,
  Password = 6,
  Phone = 7,
  Role = 8,
  StateId = 9,
  StreetAddress = 10,
  StreetAddress2 = 11,
  Zip = 12,
}

export type UserScalarWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly role?: InputMaybe<StringFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  readonly AND?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly password?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly role?: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableWithAggregatesFilter>;
  readonly zip?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutUserNestedInput>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutUserNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyMutationInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateManyWithWhereWithoutStateInput = {
  readonly data: UserUpdateManyMutationInput;
  readonly where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutStateNestedInput = {
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<UserCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<UserCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<UserCreateManyStateInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<UserUpdateWithWhereUniqueWithoutStateInput>>;
  readonly updateMany?: InputMaybe<ReadonlyArray<UserUpdateManyWithWhereWithoutStateInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<UserUpsertWithWhereUniqueWithoutStateInput>>;
};

export type UserUpdateOneRequiredWithoutProductSalesNestedInput = {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<UserCreateWithoutProductSalesInput>;
  readonly update?: InputMaybe<UserUpdateToOneWithWhereWithoutProductSalesInput>;
  readonly upsert?: InputMaybe<UserUpsertWithoutProductSalesInput>;
};

export type UserUpdateToOneWithWhereWithoutProductSalesInput = {
  readonly data: UserUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutStateInput = {
  readonly data: UserUpdateWithoutStateInput;
  readonly where: UserWhereUniqueInput;
};

export type UserUpdateWithoutProductSalesInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutUserNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateWithoutStateInput = {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutUserNestedInput>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpsertWithWhereUniqueWithoutStateInput = {
  readonly create: UserCreateWithoutStateInput;
  readonly update: UserUpdateWithoutStateInput;
  readonly where: UserWhereUniqueInput;
};

export type UserUpsertWithoutProductSalesInput = {
  readonly create: UserCreateWithoutProductSalesInput;
  readonly update: UserUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly role?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly role?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
};

export type SigninQueryVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type SigninQuery = {
  readonly signin?: { readonly token: string; readonly userId: string } | undefined;
};

export type SignoutQueryVariables = Exact<{ [key: string]: never }>;

export type SignoutQuery = { readonly signout: boolean };

export type GetCustomerContactsByCustomerIdQueryVariables = Exact<{
  customerId: Scalars['String']['input'];
}>;

export type GetCustomerContactsByCustomerIdQuery = {
  readonly customerContacts: ReadonlyArray<{
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly streetAddress: string;
    readonly city: string;
    readonly stateId: string;
    readonly zip: string;
    readonly phone: string;
    readonly email: string;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
    readonly state: { readonly id: string; readonly name: string };
  }>;
};

export type UpdateCustomerContactMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: CustomerContactUpdateInput;
}>;

export type UpdateCustomerContactMutation = {
  readonly updateOneCustomerContact?:
    | {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly streetAddress: string;
        readonly city: string;
        readonly stateId: string;
        readonly zip: string;
        readonly phone: string;
        readonly email: string;
        readonly dateCreated: unknown;
        readonly dateUpdated: unknown;
        readonly state: { readonly id: string; readonly name: string };
      }
    | undefined;
};

export type DeleteCustomerContactMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteCustomerContactMutation = {
  readonly deleteOneCustomerContact?: { readonly id: string } | undefined;
};

export type GetCustomersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCustomersQuery = {
  readonly customers: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly phone: string;
    readonly streetAddress: string;
    readonly streetAddress2?: string | undefined;
    readonly city: string;
    readonly stateId: string;
    readonly zip: string;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
    readonly state: { readonly id: string; readonly name: string };
  }>;
};

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetCustomerByIdQuery = {
  readonly customer?:
    | {
        readonly id: string;
        readonly name: string;
        readonly phone: string;
        readonly streetAddress: string;
        readonly streetAddress2?: string | undefined;
        readonly city: string;
        readonly stateId: string;
        readonly zip: string;
        readonly dateCreated: unknown;
        readonly dateUpdated: unknown;
        readonly state: { readonly id: string; readonly name: string };
      }
    | undefined;
};

export type UpdateCustomerMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  streetAddress: Scalars['String']['input'];
  streetAddress2: Scalars['String']['input'];
  city: Scalars['String']['input'];
  stateId: Scalars['String']['input'];
  zip: Scalars['String']['input'];
  phone: Scalars['String']['input'];
}>;

export type UpdateCustomerMutation = {
  readonly updateOneCustomer?:
    | {
        readonly id: string;
        readonly name: string;
        readonly phone: string;
        readonly streetAddress: string;
        readonly streetAddress2?: string | undefined;
        readonly city: string;
        readonly stateId: string;
        readonly zip: string;
        readonly dateCreated: unknown;
        readonly dateUpdated: unknown;
        readonly state: { readonly id: string; readonly name: string };
      }
    | undefined;
};

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type DeleteCustomerMutation = {
  readonly deleteOneCustomer?: { readonly id: string } | undefined;
};

export type CreateCustomerMutationVariables = Exact<{
  name: Scalars['String']['input'];
  streetAddress: Scalars['String']['input'];
  streetAddress2: Scalars['String']['input'];
  city: Scalars['String']['input'];
  stateId: Scalars['String']['input'];
  zip: Scalars['String']['input'];
  phone: Scalars['String']['input'];
}>;

export type CreateCustomerMutation = {
  readonly createOneCustomer: {
    readonly id: string;
    readonly name: string;
    readonly phone: string;
    readonly streetAddress: string;
    readonly streetAddress2?: string | undefined;
    readonly city: string;
    readonly stateId: string;
    readonly zip: string;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
    readonly state: { readonly id: string; readonly name: string };
  };
};

export type GetLocationStatesQueryVariables = Exact<{ [key: string]: never }>;

export type GetLocationStatesQuery = {
  readonly states: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly code: string;
  }>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  readonly products: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly price: string;
    readonly productTypeId: string;
  }>;
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetProductByIdQuery = {
  readonly product?:
    | {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly price: string;
        readonly productTypeId: string;
        readonly dateCreated: unknown;
        readonly dateUpdated: unknown;
      }
    | undefined;
};

export type GetProductsByProductTypeIdQueryVariables = Exact<{
  productTypeId: Scalars['String']['input'];
}>;

export type GetProductsByProductTypeIdQuery = {
  readonly products: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly price: string;
    readonly productTypeId: string;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
  }>;
};

export type GetProductTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductTypesQuery = {
  readonly productTypes: ReadonlyArray<{ readonly id: string; readonly name: string }>;
};

export type GetSearchResultsQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;

export type GetSearchResultsQuery = {
  readonly search?:
    | ReadonlyArray<{
        readonly id?: string | undefined;
        readonly name?: string | undefined;
        readonly description?: string | undefined;
        readonly type?: number | undefined;
      }>
    | undefined;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  readonly users: ReadonlyArray<{
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly streetAddress: string;
    readonly streetAddress2?: string | undefined;
    readonly city: string;
    readonly zip: string;
    readonly role: string;
    readonly dateCreated: unknown;
    readonly state: { readonly id: string; readonly name: string };
  }>;
};

export type GetUserByUserNameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;

export type GetUserByUserNameQuery = {
  readonly user?:
    | {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly phone: string;
        readonly streetAddress: string;
        readonly streetAddress2?: string | undefined;
        readonly city: string;
        readonly zip: string;
        readonly role: string;
        readonly dateCreated: unknown;
        readonly state: { readonly id: string; readonly name: string };
      }
    | undefined;
};

export type GetUserByUserIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetUserByUserIdQuery = {
  readonly user?:
    | {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly phone: string;
        readonly streetAddress: string;
        readonly streetAddress2?: string | undefined;
        readonly city: string;
        readonly zip: string;
        readonly role: string;
        readonly dateCreated: unknown;
        readonly state: { readonly id: string; readonly name: string };
      }
    | undefined;
};

export type CustomerContactPartsFragment = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly stateId: string;
  readonly zip: string;
  readonly phone: string;
  readonly email: string;
  readonly dateCreated: unknown;
  readonly dateUpdated: unknown;
  readonly state: { readonly id: string; readonly name: string };
};

export type CustomerPartsFragment = {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly streetAddress: string;
  readonly streetAddress2?: string | undefined;
  readonly city: string;
  readonly stateId: string;
  readonly zip: string;
  readonly dateCreated: unknown;
  readonly dateUpdated: unknown;
  readonly state: { readonly id: string; readonly name: string };
};

export type ProductPartsFragment = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly productTypeId: string;
  readonly dateCreated: unknown;
  readonly dateUpdated: unknown;
};

export type UserPartsFragment = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly streetAddress: string;
  readonly streetAddress2?: string | undefined;
  readonly city: string;
  readonly zip: string;
  readonly role: string;
  readonly dateCreated: unknown;
  readonly state: { readonly id: string; readonly name: string };
};

export const CustomerContactPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerContactParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerContact' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomerContactPartsFragment, unknown>;
export const CustomerPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomerPartsFragment, unknown>;
export const ProductPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productTypeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductPartsFragment, unknown>;
export const UserPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserPartsFragment, unknown>;
export const Signin = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'signin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'username' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SigninQuery, SigninQueryVariables>;
export const Signout = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'signout' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{ kind: 'Field', name: { kind: 'Name', value: 'signout' } }],
      },
    },
  ],
} as unknown as DocumentNode<SignoutQuery, SignoutQueryVariables>;
export const GetCustomerContactsByCustomerId = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCustomerContactsByCustomerId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'customerId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customerContacts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'customerId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'customerId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerContactParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerContactParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerContact' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCustomerContactsByCustomerIdQuery,
  GetCustomerContactsByCustomerIdQueryVariables
>;
export const UpdateCustomerContact = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateCustomerContact' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CustomerContactUpdateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateOneCustomerContact' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerContactParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerContactParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomerContact' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateCustomerContactMutation, UpdateCustomerContactMutationVariables>;
export const DeleteCustomerContact = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteCustomerContact' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteOneCustomerContact' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteCustomerContactMutation, DeleteCustomerContactMutationVariables>;
export const GetCustomers = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCustomers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetCustomerById = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCustomerById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
export const UpdateCustomer = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateCustomer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress2' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'stateId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateOneCustomer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streetAddress' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streetAddress2' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress2' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'city' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'zip' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'zip' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'phone' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'connect' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'stateId' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const DeleteCustomer = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteCustomer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteOneCustomer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export const CreateCustomer = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createCustomer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress2' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'stateId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'zip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createOneCustomer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streetAddress' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streetAddress2' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'streetAddress2' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'city' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'city' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'zip' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'zip' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'phone' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'phone' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'state' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'connect' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'id' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'stateId' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const GetLocationStates = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getLocationStates' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'states' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLocationStatesQuery, GetLocationStatesQueryVariables>;
export const GetProducts = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getProducts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'productTypeId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductById = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getProductById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productTypeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductsByProductTypeId = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getProductsByProductTypeId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'productTypeId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'productTypeId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'productTypeId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Product' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productTypeId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductsByProductTypeIdQuery,
  GetProductsByProductTypeIdQueryVariables
>;
export const GetProductTypes = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getProductTypes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productTypes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductTypesQuery, GetProductTypesQueryVariables>;
export const GetSearchResults = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSearchResults' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'search' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSearchResultsQuery, GetSearchResultsQueryVariables>;
export const GetUsers = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUsers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'users' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserParts' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserByUserName = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUserByUserName' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserParts' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByUserNameQuery, GetUserByUserNameQueryVariables>;
export const GetUserByUserId = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUserByUserId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'UserParts' } }],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress2' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByUserIdQuery, GetUserByUserIdQueryVariables>;
