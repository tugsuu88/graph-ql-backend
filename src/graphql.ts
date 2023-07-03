import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdvancedUserMaterialResult = {
  __typename?: 'AdvancedUserMaterialResult';
  listUserMaterialDetail?: Maybe<Array<Maybe<UserMaterialDetail>>>;
  userMaterial?: Maybe<UserMaterial>;
};

/**
 * -- =============================== TYPES =============================== --
 * -- ===================================================================== --
 */
export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: User;
};

export type Book = {
  __typename?: 'Book';
  _id?: Maybe<Scalars['ID']>;
  descr: Scalars['String'];
  name: Scalars['String'];
};

/**
 * -- =============================== TYPES =============================== --
 * -- ===================================================================== --
 */
export type Code = {
  __typename?: 'Code';
  code: Scalars['String'];
  code_id: Scalars['String'];
  code_name: Scalars['String'];
  code_type: Scalars['String'];
  del_yn: Scalars['String'];
  descr: Scalars['String'];
  order: Scalars['Int'];
  parent_yn: Scalars['String'];
  reserved1?: Maybe<Scalars['String']>;
  reserved2?: Maybe<Scalars['String']>;
  use_yn: Scalars['String'];
};

export type CodeDetailInput = {
  code: Scalars['String'];
  code_id: Scalars['String'];
  code_name: Scalars['String'];
  code_type: Scalars['String'];
  del_yn: Scalars['String'];
  descr: Scalars['String'];
  order: Scalars['Int'];
  reserved1?: InputMaybe<Scalars['String']>;
  reserved2?: InputMaybe<Scalars['String']>;
  rowStatus: Scalars['String'];
  use_yn: Scalars['String'];
};

export type CodeInput = {
  code: Scalars['String'];
  code_id?: InputMaybe<Scalars['String']>;
  code_name: Scalars['String'];
  code_type: Scalars['String'];
  del_yn: Scalars['String'];
  descr: Scalars['String'];
  order: Scalars['Int'];
  reserved1?: InputMaybe<Scalars['String']>;
  reserved2?: InputMaybe<Scalars['String']>;
  use_yn: Scalars['String'];
};

export type CodePageResult = {
  __typename?: 'CodePageResult';
  codes?: Maybe<Array<Code>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type GetBooksResult = {
  __typename?: 'GetBooksResult';
  books?: Maybe<Array<Book>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Manager = {
  __typename?: 'Manager';
  del_yn?: Maybe<Scalars['String']>;
  manager_id: Scalars['String'];
  manager_name?: Maybe<Scalars['String']>;
  manager_phone?: Maybe<Scalars['String']>;
  manager_type: Scalars['String'];
  pass_enc?: Maybe<Scalars['String']>;
  use_yn?: Maybe<Scalars['String']>;
};

/**
 * -- =============================== TYPES =============================== --
 * -- ===================================================================== --
 */
export type ManagerAuth = {
  __typename?: 'ManagerAuth';
  manager: Manager;
  token: Scalars['String'];
};

export type ManagerInput = {
  del_yn?: InputMaybe<Scalars['String']>;
  manager_id?: InputMaybe<Scalars['String']>;
  manager_name?: InputMaybe<Scalars['String']>;
  manager_pass?: InputMaybe<Scalars['String']>;
  manager_phone?: InputMaybe<Scalars['String']>;
  manager_type: Scalars['String'];
  pass_enc?: InputMaybe<Scalars['String']>;
  use_yn?: InputMaybe<Scalars['String']>;
};

/**
 * -- =============================== TYPES =============================== --
 * -- ===================================================================== --
 */
export type Material = {
  __typename?: 'Material';
  del_yn?: Maybe<Scalars['String']>;
  descr?: Maybe<Scalars['String']>;
  isParent?: Maybe<Scalars['String']>;
  material_code?: Maybe<Scalars['String']>;
  material_id: Scalars['String'];
  material_name?: Maybe<Scalars['String']>;
  parent_material_id?: Maybe<Scalars['String']>;
  use_yn?: Maybe<Scalars['String']>;
};

/**
 * -- =============================== TYPES =============================== --
 * -- ===================================================================== --
 */
export type MaterialDetail = {
  __typename?: 'MaterialDetail';
  allow_file_ext?: Maybe<Scalars['String']>;
  cond_descr?: Maybe<Scalars['String']>;
  cond_yn?: Maybe<Scalars['String']>;
  del_yn?: Maybe<Scalars['String']>;
  material_descr?: Maybe<Scalars['String']>;
  material_detail_id: Scalars['String'];
  material_id?: Maybe<Scalars['String']>;
  material_name?: Maybe<Scalars['String']>;
  material_source_id?: Maybe<Scalars['String']>;
  material_type?: Maybe<Scalars['String']>;
  use_yn?: Maybe<Scalars['String']>;
};

/**
 * -- =============================== INPUTS =============================== --
 * -- ====================================================================== --
 */
export type MaterialDetailInput = {
  allow_file_ext?: InputMaybe<Scalars['String']>;
  cond_descr?: InputMaybe<Scalars['String']>;
  cond_yn?: InputMaybe<Scalars['String']>;
  del_yn?: InputMaybe<Scalars['String']>;
  material_descr?: InputMaybe<Scalars['String']>;
  material_detail_id?: InputMaybe<Scalars['String']>;
  material_id?: InputMaybe<Scalars['String']>;
  material_name?: InputMaybe<Scalars['String']>;
  material_source_id?: InputMaybe<Scalars['String']>;
  material_type?: InputMaybe<Scalars['String']>;
  use_yn?: InputMaybe<Scalars['String']>;
};

export type MaterialDetailPageResult = {
  __typename?: 'MaterialDetailPageResult';
  listMaterialDetail?: Maybe<Array<Maybe<MaterialDetail>>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/**
 * -- =============================== INPUTS =============================== --
 * -- ====================================================================== --
 */
export type MaterialInput = {
  del_yn?: InputMaybe<Scalars['String']>;
  descr?: InputMaybe<Scalars['String']>;
  material_code?: InputMaybe<Scalars['String']>;
  material_id?: InputMaybe<Scalars['String']>;
  material_name?: InputMaybe<Scalars['String']>;
  parent_material_id?: InputMaybe<Scalars['String']>;
  use_yn?: InputMaybe<Scalars['String']>;
};

export type MaterialPageResult = {
  __typename?: 'MaterialPageResult';
  listMaterial?: Maybe<Array<Maybe<Material>>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type Mutation = {
  __typename?: 'Mutation';
  CancelUserMaterial: UserMaterial;
  ChangeApproveToDone: UserMaterial;
  ChangeCheckToApprove: UserMaterial;
  ChangeCheckToDeny: UserMaterial;
  ChangeCreateToCheck: UserMaterial;
  ChangeDenyToCheck: UserMaterial;
  CreateUserMaterial: UserMaterial;
  DeleteManager: Scalars['Boolean'];
  DeleteMaterial: Scalars['Boolean'];
  DeleteMaterialDetail: Scalars['Boolean'];
  DeleteParentCode: Scalars['Boolean'];
  Login: Auth;
  ManagerLogin: ManagerAuth;
  Register: User;
  SaveDetailCodes: Scalars['Boolean'];
  SaveManager?: Maybe<Manager>;
  SaveMaterial: Material;
  SaveMaterialDetail: MaterialDetail;
  SaveParentCode: Code;
  SaveUser: User;
  SetMaterialId: UserMaterial;
  UpdateUserMaterial: UserMaterial;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationCancelUserMaterialArgs = {
  user_material_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationChangeApproveToDoneArgs = {
  user_material_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationChangeCheckToApproveArgs = {
  manager_descr?: InputMaybe<Scalars['String']>;
  user_material_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationChangeCheckToDenyArgs = {
  paramUserMaterial?: InputMaybe<UserMaterialDenyInput>;
  paramUserMaterialDetail?: InputMaybe<Array<InputMaybe<UserMaterialDetailDenyInput>>>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationChangeCreateToCheckArgs = {
  user_material_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationChangeDenyToCheckArgs = {
  user_material_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationCreateUserMaterialArgs = {
  user_material: UserMaterialInput;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationDeleteManagerArgs = {
  manager_id: Scalars['String'];
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationDeleteMaterialArgs = {
  material_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationDeleteMaterialDetailArgs = {
  material_detail_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationDeleteParentCodeArgs = {
  code_id: Scalars['String'];
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationLoginArgs = {
  password: Scalars['String'];
  phone: Scalars['String'];
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationManagerLoginArgs = {
  password: Scalars['String'];
  phone: Scalars['String'];
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationRegisterArgs = {
  user: UserInput;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationSaveDetailCodesArgs = {
  listCode?: InputMaybe<Array<InputMaybe<CodeDetailInput>>>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationSaveManagerArgs = {
  manager?: InputMaybe<ManagerInput>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationSaveMaterialArgs = {
  material: MaterialInput;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationSaveMaterialDetailArgs = {
  material_detail: MaterialDetailInput;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationSaveParentCodeArgs = {
  code?: InputMaybe<CodeInput>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationSaveUserArgs = {
  user: UserInput;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationSetMaterialIdArgs = {
  material_id: Scalars['String'];
  user_material_id?: InputMaybe<Scalars['String']>;
};


/**
 * -- =============================== Mutation =============================== --
 * -- ======================================================================== --
 */
export type MutationUpdateUserMaterialArgs = {
  user_material?: InputMaybe<UserMaterialInput>;
};

/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type Query = {
  __typename?: 'Query';
  /** manager-iin medeelel awah */
  GetManager?: Maybe<Manager>;
  GetMaterial?: Maybe<Material>;
  GetMaterialDetail?: Maybe<MaterialDetail>;
  GetUser?: Maybe<User>;
  GetUserMaterial?: Maybe<AdvancedUserMaterialResult>;
  ListDetailCode?: Maybe<Array<Code>>;
  ListManager?: Maybe<Array<Maybe<Manager>>>;
  ListManagerPage: SearchManagerPageResult;
  ListMaterialDetailPage: MaterialDetailPageResult;
  ListMaterialDetails?: Maybe<Array<Maybe<MaterialDetail>>>;
  ListMaterialPage: MaterialPageResult;
  ListMaterials?: Maybe<Array<Maybe<Material>>>;
  ListParentCode: CodePageResult;
  ListSubMaterials?: Maybe<Array<Maybe<Material>>>;
  ListUserMaterials?: Maybe<Array<Maybe<UserMaterial>>>;
  ListUserMaterialsPage?: Maybe<Array<Maybe<UserMaterialPageResult>>>;
  ListUsers: SearchResult;
  ListUsersPage: SearchPageResult;
  getBooks: GetBooksResult;
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryGetManagerArgs = {
  manager_id: Scalars['String'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryGetMaterialArgs = {
  material_id: Scalars['String'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryGetMaterialDetailArgs = {
  material_detail_id: Scalars['String'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryGetUserArgs = {
  user_id: Scalars['String'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryGetUserMaterialArgs = {
  user_material_id: Scalars['String'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListDetailCodeArgs = {
  code_type: Scalars['String'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListManagerArgs = {
  condition: SearchManagerCondition;
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListManagerPageArgs = {
  advanced: SearchManagerCondition;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListMaterialDetailPageArgs = {
  advanced: SearchMaterialDetailCondition;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListMaterialDetailsArgs = {
  advanced: SearchMaterialDetailCondition;
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListMaterialPageArgs = {
  advanced: SearchMaterialCondition;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListMaterialsArgs = {
  advanced: SearchMaterialCondition;
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListParentCodeArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
  searchCondition: SearchCodeCondition;
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListSubMaterialsArgs = {
  material_id: Scalars['String'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListUserMaterialsArgs = {
  advanced?: InputMaybe<SearchUserMaterialCondition>;
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListUserMaterialsPageArgs = {
  advanced?: InputMaybe<SearchUserMaterialCondition>;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListUsersArgs = {
  condition: SearchCondition;
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryListUsersPageArgs = {
  advanced: SearchCondition;
  limit: Scalars['Int'];
  page: Scalars['Int'];
};


/**
 * -- =============================== Query =============================== --
 * -- ===================================================================== --
 */
export type QueryGetBooksArgs = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

/**
 * -- =============================== INPUTS =============================== --
 * -- ====================================================================== --
 */
export type SearchCodeCondition = {
  code?: InputMaybe<Scalars['String']>;
  code_name?: InputMaybe<Scalars['String']>;
  code_type?: InputMaybe<Scalars['String']>;
  parent_yn?: InputMaybe<Scalars['String']>;
};

/**
 * -- =============================== INPUTS =============================== --
 * -- ====================================================================== --
 */
export type SearchCondition = {
  cpny_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified_yn?: InputMaybe<Scalars['String']>;
  pass_num?: InputMaybe<Scalars['String']>;
  phone_verified_yn?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
  user_phone?: InputMaybe<Scalars['String']>;
};

/**
 * -- =============================== INPUTS =============================== --
 * -- ====================================================================== --
 */
export type SearchManagerCondition = {
  cpny_id?: InputMaybe<Scalars['String']>;
  manager_name?: InputMaybe<Scalars['String']>;
  manager_phone?: InputMaybe<Scalars['String']>;
  manager_type?: InputMaybe<Scalars['String']>;
  use_yn?: InputMaybe<Scalars['String']>;
};

export type SearchManagerPageResult = {
  __typename?: 'SearchManagerPageResult';
  listManager?: Maybe<Array<Manager>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SearchMaterialCondition = {
  descr?: InputMaybe<Scalars['String']>;
  material_code?: InputMaybe<Scalars['String']>;
  material_name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type SearchMaterialDetailCondition = {
  material_descr?: InputMaybe<Scalars['String']>;
  material_id?: InputMaybe<Scalars['String']>;
  material_name?: InputMaybe<Scalars['String']>;
  material_type?: InputMaybe<Scalars['String']>;
};

export type SearchPageResult = {
  __typename?: 'SearchPageResult';
  listUser?: Maybe<Array<User>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  listUser?: Maybe<Array<Maybe<User>>>;
};

export type SearchUserMaterialCondition = {
  material_id?: InputMaybe<Scalars['String']>;
  payment_yn?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  cpny_id?: Maybe<Scalars['String']>;
  del_yn?: Maybe<Scalars['String']>;
  email_verified_yn?: Maybe<Scalars['String']>;
  pass_enc?: Maybe<Scalars['String']>;
  pass_num?: Maybe<Scalars['String']>;
  phone_verified_yn?: Maybe<Scalars['String']>;
  use_yn?: Maybe<Scalars['String']>;
  user_email?: Maybe<Scalars['String']>;
  user_id: Scalars['String'];
  user_name?: Maybe<Scalars['String']>;
  user_phone: Scalars['String'];
  user_phone1?: Maybe<Scalars['String']>;
};

export type UserInput = {
  cpny_id?: InputMaybe<Scalars['String']>;
  email_verified_date?: InputMaybe<Scalars['String']>;
  email_verified_yn?: InputMaybe<Scalars['String']>;
  last_login_date?: InputMaybe<Scalars['String']>;
  pass_num?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_verified_date?: InputMaybe<Scalars['String']>;
  phone_verified_yn?: InputMaybe<Scalars['String']>;
  user_email?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_name?: InputMaybe<Scalars['String']>;
  user_phone?: InputMaybe<Scalars['String']>;
  user_phone1?: InputMaybe<Scalars['String']>;
};

/**
 * -- =============================== TYPES =============================== --
 * -- ===================================================================== --
 */
export type UserMaterial = {
  __typename?: 'UserMaterial';
  del_yn?: Maybe<Scalars['String']>;
  last_comment_id?: Maybe<Scalars['String']>;
  material_id?: Maybe<Scalars['String']>;
  payment_date?: Maybe<Scalars['String']>;
  payment_id?: Maybe<Scalars['String']>;
  payment_yn?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  use_date?: Maybe<Scalars['String']>;
  use_yn?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  user_material_id?: Maybe<Scalars['String']>;
};

export type UserMaterialDenyInput = {
  deny_descr?: InputMaybe<Scalars['String']>;
  user_material_id?: InputMaybe<Scalars['String']>;
};

/**
 * -- =============================== TYPES =============================== --
 * -- ===================================================================== --
 */
export type UserMaterialDetail = {
  __typename?: 'UserMaterialDetail';
  material_detail_id?: Maybe<Scalars['String']>;
  material_id?: Maybe<Scalars['String']>;
  source_id?: Maybe<Scalars['String']>;
  source_type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  user_material_detail_id?: Maybe<Scalars['String']>;
  user_material_id?: Maybe<Scalars['String']>;
};

/**
 * -- =============================== INPUTS =============================== --
 * -- ====================================================================== --
 */
export type UserMaterialDetailDenyInput = {
  deny_descr?: InputMaybe<Scalars['String']>;
  user_material_detail_id?: InputMaybe<Scalars['String']>;
};

/**
 * -- =============================== INPUTS =============================== --
 * -- ====================================================================== --
 */
export type UserMaterialInput = {
  del_yn?: InputMaybe<Scalars['String']>;
  last_comment_id?: InputMaybe<Scalars['String']>;
  material_id?: InputMaybe<Scalars['String']>;
  payment_date?: InputMaybe<Scalars['String']>;
  payment_id?: InputMaybe<Scalars['String']>;
  payment_yn?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  use_yn?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
  user_material_id?: InputMaybe<Scalars['String']>;
};

export type UserMaterialPageResult = {
  __typename?: 'UserMaterialPageResult';
  listUserMaterial?: Maybe<Array<Maybe<UserMaterial>>>;
  totalItems: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AdvancedUserMaterialResult: ResolverTypeWrapper<AdvancedUserMaterialResult>;
  Auth: ResolverTypeWrapper<Auth>;
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Code: ResolverTypeWrapper<Code>;
  CodeDetailInput: CodeDetailInput;
  CodeInput: CodeInput;
  CodePageResult: ResolverTypeWrapper<CodePageResult>;
  GetBooksResult: ResolverTypeWrapper<GetBooksResult>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Manager: ResolverTypeWrapper<Manager>;
  ManagerAuth: ResolverTypeWrapper<ManagerAuth>;
  ManagerInput: ManagerInput;
  Material: ResolverTypeWrapper<Material>;
  MaterialDetail: ResolverTypeWrapper<MaterialDetail>;
  MaterialDetailInput: MaterialDetailInput;
  MaterialDetailPageResult: ResolverTypeWrapper<MaterialDetailPageResult>;
  MaterialInput: MaterialInput;
  MaterialPageResult: ResolverTypeWrapper<MaterialPageResult>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SearchCodeCondition: SearchCodeCondition;
  SearchCondition: SearchCondition;
  SearchManagerCondition: SearchManagerCondition;
  SearchManagerPageResult: ResolverTypeWrapper<SearchManagerPageResult>;
  SearchMaterialCondition: SearchMaterialCondition;
  SearchMaterialDetailCondition: SearchMaterialDetailCondition;
  SearchPageResult: ResolverTypeWrapper<SearchPageResult>;
  SearchResult: ResolverTypeWrapper<SearchResult>;
  SearchUserMaterialCondition: SearchUserMaterialCondition;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
  UserMaterial: ResolverTypeWrapper<UserMaterial>;
  UserMaterialDenyInput: UserMaterialDenyInput;
  UserMaterialDetail: ResolverTypeWrapper<UserMaterialDetail>;
  UserMaterialDetailDenyInput: UserMaterialDetailDenyInput;
  UserMaterialInput: UserMaterialInput;
  UserMaterialPageResult: ResolverTypeWrapper<UserMaterialPageResult>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AdvancedUserMaterialResult: AdvancedUserMaterialResult;
  Auth: Auth;
  Book: Book;
  Boolean: Scalars['Boolean'];
  Code: Code;
  CodeDetailInput: CodeDetailInput;
  CodeInput: CodeInput;
  CodePageResult: CodePageResult;
  GetBooksResult: GetBooksResult;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Manager: Manager;
  ManagerAuth: ManagerAuth;
  ManagerInput: ManagerInput;
  Material: Material;
  MaterialDetail: MaterialDetail;
  MaterialDetailInput: MaterialDetailInput;
  MaterialDetailPageResult: MaterialDetailPageResult;
  MaterialInput: MaterialInput;
  MaterialPageResult: MaterialPageResult;
  Mutation: {};
  Query: {};
  SearchCodeCondition: SearchCodeCondition;
  SearchCondition: SearchCondition;
  SearchManagerCondition: SearchManagerCondition;
  SearchManagerPageResult: SearchManagerPageResult;
  SearchMaterialCondition: SearchMaterialCondition;
  SearchMaterialDetailCondition: SearchMaterialDetailCondition;
  SearchPageResult: SearchPageResult;
  SearchResult: SearchResult;
  SearchUserMaterialCondition: SearchUserMaterialCondition;
  String: Scalars['String'];
  User: User;
  UserInput: UserInput;
  UserMaterial: UserMaterial;
  UserMaterialDenyInput: UserMaterialDenyInput;
  UserMaterialDetail: UserMaterialDetail;
  UserMaterialDetailDenyInput: UserMaterialDetailDenyInput;
  UserMaterialInput: UserMaterialInput;
  UserMaterialPageResult: UserMaterialPageResult;
}>;

export type AdvancedUserMaterialResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvancedUserMaterialResult'] = ResolversParentTypes['AdvancedUserMaterialResult']> = ResolversObject<{
  listUserMaterialDetail?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserMaterialDetail']>>>, ParentType, ContextType>;
  userMaterial?: Resolver<Maybe<ResolversTypes['UserMaterial']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  descr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Code'] = ResolversParentTypes['Code']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  del_yn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  parent_yn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reserved1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reserved2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_yn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CodePageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CodePageResult'] = ResolversParentTypes['CodePageResult']> = ResolversObject<{
  codes?: Resolver<Maybe<Array<ResolversTypes['Code']>>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetBooksResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetBooksResult'] = ResolversParentTypes['GetBooksResult']> = ResolversObject<{
  books?: Resolver<Maybe<Array<ResolversTypes['Book']>>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManagerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manager'] = ResolversParentTypes['Manager']> = ResolversObject<{
  del_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manager_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager_phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pass_enc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ManagerAuthResolvers<ContextType = any, ParentType extends ResolversParentTypes['ManagerAuth'] = ResolversParentTypes['ManagerAuth']> = ResolversObject<{
  manager?: Resolver<ResolversTypes['Manager'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MaterialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Material'] = ResolversParentTypes['Material']> = ResolversObject<{
  del_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isParent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  material_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_material_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MaterialDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['MaterialDetail'] = ResolversParentTypes['MaterialDetail']> = ResolversObject<{
  allow_file_ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cond_descr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cond_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  del_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_descr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_detail_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  material_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_source_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MaterialDetailPageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MaterialDetailPageResult'] = ResolversParentTypes['MaterialDetailPageResult']> = ResolversObject<{
  listMaterialDetail?: Resolver<Maybe<Array<Maybe<ResolversTypes['MaterialDetail']>>>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MaterialPageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MaterialPageResult'] = ResolversParentTypes['MaterialPageResult']> = ResolversObject<{
  listMaterial?: Resolver<Maybe<Array<Maybe<ResolversTypes['Material']>>>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  CancelUserMaterial?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, Partial<MutationCancelUserMaterialArgs>>;
  ChangeApproveToDone?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, Partial<MutationChangeApproveToDoneArgs>>;
  ChangeCheckToApprove?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, Partial<MutationChangeCheckToApproveArgs>>;
  ChangeCheckToDeny?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, Partial<MutationChangeCheckToDenyArgs>>;
  ChangeCreateToCheck?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, Partial<MutationChangeCreateToCheckArgs>>;
  ChangeDenyToCheck?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, Partial<MutationChangeDenyToCheckArgs>>;
  CreateUserMaterial?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, RequireFields<MutationCreateUserMaterialArgs, 'user_material'>>;
  DeleteManager?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteManagerArgs, 'manager_id'>>;
  DeleteMaterial?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationDeleteMaterialArgs>>;
  DeleteMaterialDetail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationDeleteMaterialDetailArgs>>;
  DeleteParentCode?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteParentCodeArgs, 'code_id'>>;
  Login?: Resolver<ResolversTypes['Auth'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'phone'>>;
  ManagerLogin?: Resolver<ResolversTypes['ManagerAuth'], ParentType, ContextType, RequireFields<MutationManagerLoginArgs, 'password' | 'phone'>>;
  Register?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'user'>>;
  SaveDetailCodes?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationSaveDetailCodesArgs>>;
  SaveManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, Partial<MutationSaveManagerArgs>>;
  SaveMaterial?: Resolver<ResolversTypes['Material'], ParentType, ContextType, RequireFields<MutationSaveMaterialArgs, 'material'>>;
  SaveMaterialDetail?: Resolver<ResolversTypes['MaterialDetail'], ParentType, ContextType, RequireFields<MutationSaveMaterialDetailArgs, 'material_detail'>>;
  SaveParentCode?: Resolver<ResolversTypes['Code'], ParentType, ContextType, Partial<MutationSaveParentCodeArgs>>;
  SaveUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSaveUserArgs, 'user'>>;
  SetMaterialId?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, RequireFields<MutationSetMaterialIdArgs, 'material_id'>>;
  UpdateUserMaterial?: Resolver<ResolversTypes['UserMaterial'], ParentType, ContextType, Partial<MutationUpdateUserMaterialArgs>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GetManager?: Resolver<Maybe<ResolversTypes['Manager']>, ParentType, ContextType, RequireFields<QueryGetManagerArgs, 'manager_id'>>;
  GetMaterial?: Resolver<Maybe<ResolversTypes['Material']>, ParentType, ContextType, RequireFields<QueryGetMaterialArgs, 'material_id'>>;
  GetMaterialDetail?: Resolver<Maybe<ResolversTypes['MaterialDetail']>, ParentType, ContextType, RequireFields<QueryGetMaterialDetailArgs, 'material_detail_id'>>;
  GetUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'user_id'>>;
  GetUserMaterial?: Resolver<Maybe<ResolversTypes['AdvancedUserMaterialResult']>, ParentType, ContextType, RequireFields<QueryGetUserMaterialArgs, 'user_material_id'>>;
  ListDetailCode?: Resolver<Maybe<Array<ResolversTypes['Code']>>, ParentType, ContextType, RequireFields<QueryListDetailCodeArgs, 'code_type'>>;
  ListManager?: Resolver<Maybe<Array<Maybe<ResolversTypes['Manager']>>>, ParentType, ContextType, RequireFields<QueryListManagerArgs, 'condition'>>;
  ListManagerPage?: Resolver<ResolversTypes['SearchManagerPageResult'], ParentType, ContextType, RequireFields<QueryListManagerPageArgs, 'advanced' | 'limit' | 'page'>>;
  ListMaterialDetailPage?: Resolver<ResolversTypes['MaterialDetailPageResult'], ParentType, ContextType, RequireFields<QueryListMaterialDetailPageArgs, 'advanced' | 'limit' | 'page'>>;
  ListMaterialDetails?: Resolver<Maybe<Array<Maybe<ResolversTypes['MaterialDetail']>>>, ParentType, ContextType, RequireFields<QueryListMaterialDetailsArgs, 'advanced'>>;
  ListMaterialPage?: Resolver<ResolversTypes['MaterialPageResult'], ParentType, ContextType, RequireFields<QueryListMaterialPageArgs, 'advanced' | 'limit' | 'page'>>;
  ListMaterials?: Resolver<Maybe<Array<Maybe<ResolversTypes['Material']>>>, ParentType, ContextType, RequireFields<QueryListMaterialsArgs, 'advanced'>>;
  ListParentCode?: Resolver<ResolversTypes['CodePageResult'], ParentType, ContextType, RequireFields<QueryListParentCodeArgs, 'limit' | 'page' | 'searchCondition'>>;
  ListSubMaterials?: Resolver<Maybe<Array<Maybe<ResolversTypes['Material']>>>, ParentType, ContextType, RequireFields<QueryListSubMaterialsArgs, 'material_id'>>;
  ListUserMaterials?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserMaterial']>>>, ParentType, ContextType, Partial<QueryListUserMaterialsArgs>>;
  ListUserMaterialsPage?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserMaterialPageResult']>>>, ParentType, ContextType, RequireFields<QueryListUserMaterialsPageArgs, 'limit' | 'page'>>;
  ListUsers?: Resolver<ResolversTypes['SearchResult'], ParentType, ContextType, RequireFields<QueryListUsersArgs, 'condition'>>;
  ListUsersPage?: Resolver<ResolversTypes['SearchPageResult'], ParentType, ContextType, RequireFields<QueryListUsersPageArgs, 'advanced' | 'limit' | 'page'>>;
  getBooks?: Resolver<ResolversTypes['GetBooksResult'], ParentType, ContextType, RequireFields<QueryGetBooksArgs, 'limit' | 'page'>>;
}>;

export type SearchManagerPageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchManagerPageResult'] = ResolversParentTypes['SearchManagerPageResult']> = ResolversObject<{
  listManager?: Resolver<Maybe<Array<ResolversTypes['Manager']>>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchPageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchPageResult'] = ResolversParentTypes['SearchPageResult']> = ResolversObject<{
  listUser?: Resolver<Maybe<Array<ResolversTypes['User']>>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = ResolversObject<{
  listUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  cpny_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  del_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_verified_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pass_enc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pass_num?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone_verified_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_phone1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaterialResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaterial'] = ResolversParentTypes['UserMaterial']> = ResolversObject<{
  del_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_comment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  use_yn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_material_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaterialDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaterialDetail'] = ResolversParentTypes['UserMaterialDetail']> = ResolversObject<{
  material_detail_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_material_detail_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_material_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaterialPageResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserMaterialPageResult'] = ResolversParentTypes['UserMaterialPageResult']> = ResolversObject<{
  listUserMaterial?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserMaterial']>>>, ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AdvancedUserMaterialResult?: AdvancedUserMaterialResultResolvers<ContextType>;
  Auth?: AuthResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Code?: CodeResolvers<ContextType>;
  CodePageResult?: CodePageResultResolvers<ContextType>;
  GetBooksResult?: GetBooksResultResolvers<ContextType>;
  Manager?: ManagerResolvers<ContextType>;
  ManagerAuth?: ManagerAuthResolvers<ContextType>;
  Material?: MaterialResolvers<ContextType>;
  MaterialDetail?: MaterialDetailResolvers<ContextType>;
  MaterialDetailPageResult?: MaterialDetailPageResultResolvers<ContextType>;
  MaterialPageResult?: MaterialPageResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SearchManagerPageResult?: SearchManagerPageResultResolvers<ContextType>;
  SearchPageResult?: SearchPageResultResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserMaterial?: UserMaterialResolvers<ContextType>;
  UserMaterialDetail?: UserMaterialDetailResolvers<ContextType>;
  UserMaterialPageResult?: UserMaterialPageResultResolvers<ContextType>;
}>;

