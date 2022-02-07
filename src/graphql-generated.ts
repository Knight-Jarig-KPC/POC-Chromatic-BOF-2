import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** type to get any */
  AnyType: any;
};

export type AcceptConsentInput = {
  policies?: InputMaybe<Array<InputMaybe<PolicyEnum>>>;
};

export type AcceptConsentPayload = {
  __typename?: 'AcceptConsentPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type AddAddressInput = {
  address?: InputMaybe<AddressInput>;
  ssoId?: InputMaybe<Scalars['String']>;
};

export type AddBrandMicrositeCategoryProductsInput = {
  brandName: Scalars['String'];
  skus?: InputMaybe<Array<InputMaybe<BrandMicrositeCategoryProducts>>>;
  subBrandCategoryName: Scalars['String'];
};

export type AddCartMeItemInput = {
  cartDisplayId: Scalars['String'];
  quantity: Scalars['Int'];
  shipTo: ShoppingCartShipToType;
  sku: Scalars['String'];
};

export type AddWishlistItemInput = {
  sku: Scalars['String'];
};

export type AddWishlistItemResponse = {
  __typename?: 'AddWishlistItemResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  billingDefault?: Maybe<Scalars['Boolean']>;
  building?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryResource?: Maybe<BaseResourceResponse>;
  district?: Maybe<Scalars['String']>;
  districtResource?: Maybe<BaseResourceResponse>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  phoneCodeResource?: Maybe<PhoneCodeResponse>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  provinceResource?: Maybe<BaseResourceResponse>;
  shippingDefault?: Maybe<Scalars['Boolean']>;
  street?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};


export type AddressCountryResourceArgs = {
  lang?: InputMaybe<LocaleType>;
};


export type AddressDistrictResourceArgs = {
  lang?: InputMaybe<LocaleType>;
};


export type AddressPhoneCodeResourceArgs = {
  lang?: InputMaybe<LocaleType>;
};


export type AddressProvinceResourceArgs = {
  lang?: InputMaybe<LocaleType>;
};

export type AddressInput = {
  address?: InputMaybe<Scalars['String']>;
  billingDefault?: InputMaybe<Scalars['Boolean']>;
  building?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  shippingDefault?: InputMaybe<Scalars['Boolean']>;
  street?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AirLineInfo = {
  __typename?: 'AirLineInfo';
  airLineCode?: Maybe<Scalars['String']>;
  airLineName?: Maybe<Scalars['String']>;
};

export type AirLineResponse = {
  __typename?: 'AirLineResponse';
  flights?: Maybe<Array<Maybe<Flight>>>;
  lists?: Maybe<Array<Maybe<AirLineInfo>>>;
  validFlight?: Maybe<ValidFlight>;
};


export type AirLineResponseFlightsArgs = {
  airLineCode: Scalars['String'];
  status: FlightStatusType;
  type?: InputMaybe<OrderType>;
};


export type AirLineResponseListsArgs = {
  status: FlightStatusType;
  type?: InputMaybe<OrderType>;
};


export type AirLineResponseValidFlightArgs = {
  airLineCode: Scalars['String'];
  date: Scalars['Float'];
  flightNumber: Scalars['String'];
  status: FlightStatusType;
  type?: InputMaybe<OrderType>;
};

export type AirportBackOfficeResponse = {
  __typename?: 'AirportBackOfficeResponse';
  data?: Maybe<AirportsResponse>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AirportResponse = {
  __typename?: 'AirportResponse';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type AirportsResponse = {
  __typename?: 'AirportsResponse';
  arrival?: Maybe<Array<Maybe<AirportResponse>>>;
  departure?: Maybe<Array<Maybe<AirportResponse>>>;
};

export type AmountCondition = {
  __typename?: 'AmountCondition';
  airports?: Maybe<Array<Maybe<Scalars['String']>>>;
  amountDiscount?: Maybe<Scalars['Float']>;
  calculateSeparateDeliveryType?: Maybe<Scalars['Boolean']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  discountItemExcludes?: Maybe<ConditionSelector>;
  discountItemIncludes?: Maybe<ConditionSelector>;
  excludes?: Maybe<ConditionSelector>;
  id?: Maybe<Scalars['String']>;
  includes?: Maybe<ConditionSelector>;
  itemQuantity?: Maybe<Scalars['Int']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  maximumDiscount?: Maybe<Scalars['Float']>;
  minimumAmount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type AmountConditionInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amountDiscount?: InputMaybe<Scalars['Float']>;
  calculateSeparateDeliveryType?: InputMaybe<Scalars['Boolean']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  discountItemExcludes?: InputMaybe<ConditionSelectorInput>;
  discountItemIncludes?: InputMaybe<ConditionSelectorInput>;
  excludes?: InputMaybe<ConditionSelectorInput>;
  id?: InputMaybe<Scalars['String']>;
  includes?: InputMaybe<ConditionSelectorInput>;
  itemQuantity?: InputMaybe<Scalars['Int']>;
  maximumAmount?: InputMaybe<Scalars['Float']>;
  maximumDiscount?: InputMaybe<Scalars['Float']>;
  minimumAmount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<PromotionConditionEnumType>;
};

export enum AmountEnumType {
  Amount = 'AMOUNT'
}

export type AmountRule = {
  __typename?: 'AmountRule';
  amountConditions?: Maybe<Array<Maybe<AmountCondition>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  templateType?: Maybe<Scalars['String']>;
};

export type AmountRuleInput = {
  amountConditions?: InputMaybe<Array<InputMaybe<AmountConditionInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  ruleType?: InputMaybe<AmountEnumType>;
  templateType?: InputMaybe<AmountTemplateEnumType>;
};

export type AmountRulePayload = {
  __typename?: 'AmountRulePayload';
  amountConditions?: Maybe<Array<Maybe<ConditionPayload>>>;
  templateType?: Maybe<Scalars['String']>;
};

export enum AmountTemplateEnumType {
  BuyAmountXGetAmountDiscount = 'BUY_AMOUNT_X_GET_AMOUNT_DISCOUNT',
  BuyItemXGetAmountDiscount = 'BUY_ITEM_X_GET_AMOUNT_DISCOUNT',
  BuyItemXGetAmountDiscountForItemY = 'BUY_ITEM_X_GET_AMOUNT_DISCOUNT_FOR_ITEM_Y'
}

export type Attribute = {
  __typename?: 'Attribute';
  display?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<AttributeSubValue>>>;
};

export enum AttributeDisplayEnumType {
  Color = 'COLOR',
  Dropdown = 'DROPDOWN',
  Image = 'IMAGE',
  Label = 'LABEL'
}

export enum AttributeEnumType {
  Normal = 'NORMAL',
  Selection = 'SELECTION'
}

export type AttributeInput = {
  display?: InputMaybe<AttributeDisplayEnumType>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<LocaleInput>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AttributeEnumType>;
  values?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
};

export type AttributeInputSort = {
  direction: SortEnumType;
  field: SortFileType;
};

export type AttributeLocale = {
  __typename?: 'AttributeLocale';
  display?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<AttributeSubValueLocale>>>;
};

export type AttributeResponse = Attribute | AttributeLocale;

export enum AttributeSearchByEnumType {
  Name = 'NAME',
  Value = 'VALUE'
}

export enum AttributeSortableFieldEnum {
  Name = 'NAME'
}

export type AttributeSubValue = {
  __typename?: 'AttributeSubValue';
  hexCode?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AttributeSubValueLocale = {
  __typename?: 'AttributeSubValueLocale';
  hexCode?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type AttributeValue = {
  __typename?: 'AttributeValue';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<SubAttributeValue>;
};

export type AttributeValueInput = {
  hexCode?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<UploadImageInput>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<LocaleInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type AttributeValueLocale = {
  __typename?: 'AttributeValueLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<SubAttributeValueLocale>;
};

export type AttributesPayload = {
  __typename?: 'AttributesPayload';
  id?: Maybe<Scalars['String']>;
};

export type AttributesResponse = {
  __typename?: 'AttributesResponse';
  data?: Maybe<Array<Maybe<AttributeResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthenticatedProvider = {
  __typename?: 'AuthenticatedProvider';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
};

export type AuthenticationUserPayload = {
  __typename?: 'AuthenticationUserPayload';
  description?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AuthorizationCheckUserExistingResponse = {
  __typename?: 'AuthorizationCheckUserExistingResponse';
  isUserExisting?: Maybe<Scalars['Boolean']>;
};

export type AuthorizationGroupResponse = {
  __typename?: 'AuthorizationGroupResponse';
  code?: Maybe<Scalars['String']>;
  hadGroup?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthorizationGroupsResponse = {
  __typename?: 'AuthorizationGroupsResponse';
  data?: Maybe<Array<Maybe<AuthorizationGroupResponse>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthorizationPresetPayload = {
  __typename?: 'AuthorizationPresetPayload';
  description?: Maybe<Scalars['String']>;
  presetId?: Maybe<Scalars['String']>;
};

export type AuthorizationPresetResponse = {
  __typename?: 'AuthorizationPresetResponse';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<AuthorizationServiceResponse>>>;
};

export type AuthorizationPresetsResponse = {
  __typename?: 'AuthorizationPresetsResponse';
  data?: Maybe<Array<Maybe<AuthorizationPresetResponse>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthorizationRoleResponse = {
  __typename?: 'AuthorizationRoleResponse';
  code?: Maybe<Scalars['String']>;
  hadRole?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthorizationRolesResponse = {
  __typename?: 'AuthorizationRolesResponse';
  data?: Maybe<Array<Maybe<AuthorizationRoleResponse>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthorizationServiceResponse = {
  __typename?: 'AuthorizationServiceResponse';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<AuthorizationRoleResponse>>>;
};

export type AuthorizationServicesResponse = {
  __typename?: 'AuthorizationServicesResponse';
  data?: Maybe<Array<Maybe<AuthorizationServiceResponse>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AuthorizationUserProfileResponse = {
  __typename?: 'AuthorizationUserProfileResponse';
  groups?: Maybe<Array<Maybe<AuthorizationGroupResponse>>>;
  services?: Maybe<Array<Maybe<AuthorizationServiceResponse>>>;
  userDetails?: Maybe<AuthorizationUserResponse>;
};

export type AuthorizationUserResponse = {
  __typename?: 'AuthorizationUserResponse';
  createdDate?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  employeeName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  groupName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  lastestLogin?: Maybe<Scalars['Float']>;
  ssoId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
};

export type AuthorizationUsersResponse = {
  __typename?: 'AuthorizationUsersResponse';
  data?: Maybe<Array<Maybe<AuthorizationUserResponse>>>;
  page?: Maybe<Scalars['Int']>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BackOfficeOrderReasonInput = {
  reasonCode?: InputMaybe<Scalars['String']>;
  reasonComment?: InputMaybe<Scalars['String']>;
};

export type BannerHomepageResponse = {
  __typename?: 'BannerHomepageResponse';
  desktop?: Maybe<Array<Maybe<CmsImageResponse>>>;
  mobile?: Maybe<Array<Maybe<CmsImageResponse>>>;
};

export type BannerResponse = {
  __typename?: 'BannerResponse';
  desktopImage?: Maybe<Image>;
  desktopImageUrl?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mobileImage?: Maybe<Image>;
  mobileImageUrl?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BaseDiscountResponse = {
  __typename?: 'BaseDiscountResponse';
  discountPrice?: Maybe<Scalars['Float']>;
  unitCurrency?: Maybe<Scalars['String']>;
};

export type BaseResourceBackOfficeResponse = {
  __typename?: 'BaseResourceBackOfficeResponse';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type BaseResourceResponse = {
  __typename?: 'BaseResourceResponse';
  acquisitionRate?: Maybe<Scalars['Float']>;
  backgroundDesktopImage?: Maybe<Image>;
  backgroundMobileImage?: Maybe<Image>;
  backgroundProfileImage?: Maybe<Image>;
  code?: Maybe<Scalars['String']>;
  codeAlpha2?: Maybe<Scalars['String']>;
  codeAlpha3?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  isOther?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BaseResourcesBackOfficeResponse = {
  __typename?: 'BaseResourcesBackOfficeResponse';
  airports?: Maybe<AirportBackOfficeResponse>;
  cancellationReasons?: Maybe<ResourcesResponse>;
  cardTypes?: Maybe<ResourcesResponse>;
  errorMessages?: Maybe<ErrorMessagesResponse>;
  nationalities?: Maybe<ResourcesResponse>;
  phoneCodes?: Maybe<PhoneCodesResponse>;
  shippingAddresses?: Maybe<ShippingAddressesResponse>;
  titles?: Maybe<ResourcesResponse>;
  types?: Maybe<Array<Maybe<ResourcesManagementResponse>>>;
};


export type BaseResourcesBackOfficeResponseAirportsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type BaseResourcesBackOfficeResponseCancellationReasonsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type BaseResourcesBackOfficeResponseCardTypesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type BaseResourcesBackOfficeResponseErrorMessagesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type BaseResourcesBackOfficeResponseNationalitiesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type BaseResourcesBackOfficeResponsePhoneCodesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type BaseResourcesBackOfficeResponseShippingAddressesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type BaseResourcesBackOfficeResponseTitlesArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export type BaseResourcesResponse = {
  __typename?: 'BaseResourcesResponse';
  airports?: Maybe<AirportsResponse>;
  cancellationReasons?: Maybe<Array<Maybe<BaseResourceResponse>>>;
  cards?: Maybe<Array<Maybe<BaseResourceResponse>>>;
  countries?: Maybe<Array<Maybe<BaseResourceResponse>>>;
  country?: Maybe<BaseResourceResponse>;
  district?: Maybe<BaseResourceResponse>;
  districts?: Maybe<Array<Maybe<BaseResourceResponse>>>;
  errorMessages?: Maybe<Array<Maybe<ErrorMessageResponse>>>;
  nationalities?: Maybe<Array<Maybe<BaseResourceResponse>>>;
  phoneCode?: Maybe<PhoneCodeResponse>;
  phoneCodes?: Maybe<Array<Maybe<PhoneCodeResponse>>>;
  postalCode?: Maybe<BaseResourceResponse>;
  postalCodes?: Maybe<Array<Maybe<BaseResourceResponse>>>;
  province?: Maybe<BaseResourceResponse>;
  provinces?: Maybe<Array<Maybe<BaseResourceResponse>>>;
  titles?: Maybe<Array<Maybe<BaseResourceResponse>>>;
};


export type BaseResourcesResponseCancellationReasonsArgs = {
  lang: LocaleType;
};


export type BaseResourcesResponseCardsArgs = {
  lang: LocaleType;
};


export type BaseResourcesResponseCountriesArgs = {
  lang: LocaleType;
};


export type BaseResourcesResponseCountryArgs = {
  country: Scalars['String'];
  lang: LocaleType;
};


export type BaseResourcesResponseDistrictArgs = {
  country: Scalars['String'];
  district: Scalars['String'];
  lang: LocaleType;
  province: Scalars['String'];
};


export type BaseResourcesResponseDistrictsArgs = {
  country: Scalars['String'];
  lang: LocaleType;
  province: Scalars['String'];
};


export type BaseResourcesResponseNationalitiesArgs = {
  lang: LocaleType;
};


export type BaseResourcesResponsePhoneCodeArgs = {
  lang: LocaleType;
  phoneCode: Scalars['String'];
};


export type BaseResourcesResponsePhoneCodesArgs = {
  lang: LocaleType;
};


export type BaseResourcesResponsePostalCodeArgs = {
  country: Scalars['String'];
  district: Scalars['String'];
  lang: LocaleType;
  postalCode: Scalars['String'];
  province: Scalars['String'];
};


export type BaseResourcesResponsePostalCodesArgs = {
  country: Scalars['String'];
  district: Scalars['String'];
  lang: LocaleType;
  province: Scalars['String'];
};


export type BaseResourcesResponseProvinceArgs = {
  country: Scalars['String'];
  lang: LocaleType;
  province: Scalars['String'];
};


export type BaseResourcesResponseProvincesArgs = {
  country: Scalars['String'];
  lang: LocaleType;
};


export type BaseResourcesResponseTitlesArgs = {
  lang: LocaleType;
};

export type Brand = {
  __typename?: 'Brand';
  banners?: Maybe<Array<Maybe<BrandBannerImageResponse>>>;
  /** @deprecated use 'codes' instead */
  code?: Maybe<Array<Maybe<Scalars['String']>>>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdDate?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<Image>>>;
  isBannerDisplay?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  logo?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
  productNodes?: Maybe<ProductNodesResponse>;
  remark?: Maybe<Scalars['String']>;
  sap?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  story?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};


export type BrandProductNodesArgs = {
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ProductNodeSearchInput>;
  sort?: InputMaybe<ProductNodeSortInput>;
};

export type BrandBannerImageResponse = {
  __typename?: 'BrandBannerImageResponse';
  image?: Maybe<Image>;
  lang?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
};

export type BrandBannerInput = {
  image: BrandImageInput;
  lang: LocaleType;
  link?: InputMaybe<Scalars['String']>;
  size: ImageSizeEnumType;
};

export type BrandCategory = {
  __typename?: 'BrandCategory';
  children?: Maybe<Array<Maybe<BrandCategory>>>;
  isEnable?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum BrandCategoryFieldEnum {
  Brand = 'BRAND',
  Created = 'CREATED'
}

export type BrandCategoryItem = {
  __typename?: 'BrandCategoryItem';
  categories?: Maybe<Array<Maybe<BrandCategoryItemCategoryResponse>>>;
  categoryLevel?: Maybe<Scalars['Int']>;
  /** @deprecated use 'category' instead */
  categoryPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdDate?: Maybe<Scalars['Int']>;
  product?: Maybe<BrandMicrositeCategoryItemResponse>;
  score?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  subBrandCategory?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Int']>;
};

export type BrandCategoryItemCategory = {
  __typename?: 'BrandCategoryItemCategory';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BrandCategoryItemCategoryLocale = {
  __typename?: 'BrandCategoryItemCategoryLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type BrandCategoryItemCategoryResponse = BrandCategoryItemCategory | BrandCategoryItemCategoryLocale;

export enum BrandCategoryItemFieldEnum {
  Created = 'CREATED',
  Name = 'NAME',
  Price = 'PRICE',
  Score = 'SCORE'
}

export type BrandCategoryItemFilterQuery = {
  isDutyFree?: InputMaybe<Scalars['Boolean']>;
  priceMax?: InputMaybe<Scalars['Float']>;
  priceMin?: InputMaybe<Scalars['Float']>;
};

export type BrandCategoryItemFilterResponse = {
  __typename?: 'BrandCategoryItemFilterResponse';
  isDutyFree?: Maybe<Scalars['Boolean']>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

export type BrandCategoryItemListResponse = {
  __typename?: 'BrandCategoryItemListResponse';
  data?: Maybe<Array<Maybe<BrandCategoryItem>>>;
  filterData?: Maybe<BrandCategoryItemFilterResponse>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum BrandCategoryItemViewOptionType {
  All = 'ALL',
  Node = 'NODE'
}

export enum BrandCategoryItemViewType {
  Product = 'PRODUCT',
  ProductNode = 'PRODUCT_NODE'
}

export enum BrandCategoryKeywordByEnumType {
  Brand = 'BRAND',
  Label = 'LABEL'
}

export type BrandCategoryLocale = {
  __typename?: 'BrandCategoryLocale';
  children?: Maybe<Array<Maybe<BrandCategoryLocale>>>;
  isEnable?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type BrandCategoryLocaleListResponse = {
  __typename?: 'BrandCategoryLocaleListResponse';
  data?: Maybe<Array<Maybe<BrandMicrositeCategoryResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BrandCategoryPayload = {
  __typename?: 'BrandCategoryPayload';
  brand?: Maybe<Scalars['String']>;
};

export type BrandCategoryProductsPayload = {
  __typename?: 'BrandCategoryProductsPayload';
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BrandCategoryResponse = BrandCategory | BrandCategoryLocale;

export enum BrandCategoryStatusType {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export type BrandCollectionBreadcrumb = {
  __typename?: 'BrandCollectionBreadcrumb';
  collection?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BrandCollectionBreadcrumbLocale = {
  __typename?: 'BrandCollectionBreadcrumbLocale';
  collection?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type BrandCollectionBreadcrumbResponse = BrandCollectionBreadcrumb | BrandCollectionBreadcrumbLocale;

export type BrandCollectionResponse = {
  __typename?: 'BrandCollectionResponse';
  name?: Maybe<Scalars['String']>;
};

export enum BrandFieldEnum {
  Createddate = 'CREATEDDATE',
  Label = 'LABEL',
  Name = 'NAME'
}

export type BrandFilterInput = {
  status?: InputMaybe<BrandStatusEnumType>;
};

export type BrandImageInput = {
  hash: Scalars['String'];
};

export type BrandInput = {
  banners?: InputMaybe<Array<InputMaybe<BrandBannerInput>>>;
  codes: Array<InputMaybe<Scalars['String']>>;
  isBannerDisplay?: InputMaybe<Scalars['Boolean']>;
  label: LocaleInput;
  logo?: InputMaybe<BrandImageInput>;
  metadataId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  sap?: InputMaybe<Scalars['String']>;
  story?: InputMaybe<LocaleInput>;
};

export type BrandLocale = {
  __typename?: 'BrandLocale';
  banners?: Maybe<Array<Maybe<BrandBannerImageResponse>>>;
  /** @deprecated use 'codes' instead */
  code?: Maybe<Array<Maybe<Scalars['String']>>>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdDate?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Maybe<Image>>>;
  isBannerDisplay?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Locale>;
  logo?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
  productNodes?: Maybe<ProductNodesResponse>;
  remark?: Maybe<Scalars['String']>;
  sap?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  story?: Maybe<Locale>;
  updatedDate?: Maybe<Scalars['Float']>;
};


export type BrandLocaleProductNodesArgs = {
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ProductNodeSearchInput>;
  sort?: InputMaybe<ProductNodeSortInput>;
};

export type BrandMicrositeCategory = {
  __typename?: 'BrandMicrositeCategory';
  childs?: Maybe<Array<Maybe<SubBrandCategory>>>;
  createdDate?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  itemSize?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Int']>;
};

export type BrandMicrositeCategoryInput = {
  brandName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<LocaleInput>;
  metadata?: InputMaybe<MetadataInput>;
  score?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<BrandCategoryStatusType>;
};

export type BrandMicrositeCategoryItemResponse = Product | ProductLocale | ProductNode | ProductNodeLocale;

export type BrandMicrositeCategoryLocale = {
  __typename?: 'BrandMicrositeCategoryLocale';
  childs?: Maybe<Array<Maybe<SubBrandCategoryLocale>>>;
  createdDate?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  itemSize?: Maybe<Scalars['Int']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Int']>;
};

export type BrandMicrositeCategoryProducts = {
  score?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
};

export type BrandMicrositeCategoryResponse = BrandMicrositeCategory | BrandMicrositeCategoryLocale;

export type BrandPayload = {
  __typename?: 'BrandPayload';
  id?: Maybe<Scalars['String']>;
};

export type BrandResponse = {
  __typename?: 'BrandResponse';
  data?: Maybe<Array<Maybe<SelectBrandLocaleType>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BrandSortInput = {
  direction?: InputMaybe<SortEnumType>;
  field?: InputMaybe<BrandFieldEnum>;
};

export enum BrandStatusEnumType {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export type BrandsRankingResponse = {
  __typename?: 'BrandsRankingResponse';
  data?: Maybe<Array<Maybe<SelectBrandLocaleType>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  /** This field allowed airports in the list. (default: allow all airports). */
  airports?: Maybe<Array<Maybe<Scalars['String']>>>;
  amountRules?: Maybe<Array<Maybe<AmountRule>>>;
  applyDiscountOverLimit?: Maybe<Scalars['Boolean']>;
  applyNewCustomer?: Maybe<Scalars['Boolean']>;
  applyNonMember?: Maybe<Scalars['Boolean']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  description?: Maybe<Scalars['String']>;
  descriptionUrl?: Maybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate?: Maybe<Scalars['Float']>;
  gwpRules?: Maybe<Array<Maybe<GwpRule>>>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  limitPerCustomer?: Maybe<Scalars['Int']>;
  limitPerOrder?: Maybe<Scalars['Int']>;
  maxUse?: Maybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: Maybe<Array<Maybe<Scalars['String']>>>;
  minimumSubTotal?: Maybe<Scalars['Float']>;
  notAllowCombine?: Maybe<Scalars['Boolean']>;
  orderRules?: Maybe<Array<Maybe<OrderRule>>>;
  percentRules?: Maybe<Array<Maybe<PercentRule>>>;
  platforms?: Maybe<PlatformResponse>;
  priority?: Maybe<Scalars['Int']>;
  promotionName?: Maybe<Scalars['String']>;
  shippingRules?: Maybe<Array<Maybe<ShippingRule>>>;
  startDate?: Maybe<Scalars['Float']>;
  storeId?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  used?: Maybe<Scalars['Int']>;
};

export enum CampaignEnumType {
  Amount = 'AMOUNT',
  Gwp = 'GWP',
  Order = 'ORDER',
  Percent = 'PERCENT',
  Shipping = 'SHIPPING'
}

export type CampaignRulePayload = {
  __typename?: 'CampaignRulePayload';
  amountRules?: Maybe<Array<Maybe<AmountRulePayload>>>;
  gwpRules?: Maybe<Array<Maybe<GwpRulePayload>>>;
  orderRules?: Maybe<Array<Maybe<OrderRulePayload>>>;
  percentRules?: Maybe<Array<Maybe<PercentRulePayload>>>;
  shippingRules?: Maybe<Array<Maybe<ShippingRulePayload>>>;
};

export enum CampaignTemplateEnumType {
  BuyAmountXGetAmountDiscount = 'BUY_AMOUNT_X_GET_AMOUNT_DISCOUNT',
  BuyAmountXGetGwp = 'BUY_AMOUNT_X_GET_GWP',
  BuyAmountXGetOrderAmountDiscount = 'BUY_AMOUNT_X_GET_ORDER_AMOUNT_DISCOUNT',
  BuyAmountXGetOrderPercentDiscount = 'BUY_AMOUNT_X_GET_ORDER_PERCENT_DISCOUNT',
  BuyAmountXGetPercentDiscount = 'BUY_AMOUNT_X_GET_PERCENT_DISCOUNT',
  BuyAAndAnyItemGetGwp = 'BUY_A_AND_ANY_ITEM_GET_GWP',
  BuyItemXGetAmountDiscount = 'BUY_ITEM_X_GET_AMOUNT_DISCOUNT',
  BuyItemXGetAmountDiscountForItemY = 'BUY_ITEM_X_GET_AMOUNT_DISCOUNT_FOR_ITEM_Y',
  BuyItemXGetFeeY = 'BUY_ITEM_X_GET_FEE_Y',
  BuyItemXGetGwp = 'BUY_ITEM_X_GET_GWP',
  BuyItemXGetPercentDiscount = 'BUY_ITEM_X_GET_PERCENT_DISCOUNT',
  BuyItemXGetPercentDiscountForItemY = 'BUY_ITEM_X_GET_PERCENT_DISCOUNT_FOR_ITEM_Y',
  BuyXAmountGetFeeY = 'BUY_X_AMOUNT_GET_FEE_Y'
}

export type CancellationReasons = {
  __typename?: 'CancellationReasons';
  cancelDate?: Maybe<Scalars['Float']>;
  cancelType?: Maybe<Scalars['String']>;
  reasons?: Maybe<Array<Maybe<Reasons>>>;
};

export type CaratEarnRate = {
  __typename?: 'CaratEarnRate';
  baht?: Maybe<Scalars['Float']>;
  carat?: Maybe<Scalars['Float']>;
};

export type CaratItem = {
  __typename?: 'CaratItem';
  amount?: Maybe<Scalars['Float']>;
  expireDate?: Maybe<Scalars['Float']>;
};

export type CardTypeResponse = {
  __typename?: 'CardTypeResponse';
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  label?: Maybe<Scalars['String']>;
};

export type Cart = {
  __typename?: 'Cart';
  ageRestriction?: Maybe<Scalars['Boolean']>;
  billingAddress?: Maybe<Address>;
  billingAddressId?: Maybe<Scalars['String']>;
  caratAvailable?: Maybe<Scalars['Float']>;
  caratBurnTotal?: Maybe<Scalars['Float']>;
  caratEarnTotal?: Maybe<Scalars['Float']>;
  cartDisplayId?: Maybe<Scalars['String']>;
  cartItems?: Maybe<Array<Maybe<CartItems>>>;
  cartItemsSummary?: Maybe<CartItemsSummary>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<CustomerResponse>;
  customerId?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Float']>;
  dateUpdated?: Maybe<Scalars['Float']>;
  errors?: Maybe<Array<Maybe<Warning>>>;
  flightArrival?: Maybe<FlightArrival>;
  flightDeparture?: Maybe<FlightDeparture>;
  flightPersonalInfo?: Maybe<FlightPersonalInfo>;
  grandTotal?: Maybe<Scalars['Float']>;
  gwpCheckoutConfirm?: Maybe<Scalars['Boolean']>;
  gwpStockAcknowledge?: Maybe<Scalars['Boolean']>;
  gwps?: Maybe<Array<Maybe<CartGwp>>>;
  id?: Maybe<Scalars['Int']>;
  isVerify?: Maybe<Scalars['Boolean']>;
  itemsCount?: Maybe<Scalars['Int']>;
  itemsQty?: Maybe<Scalars['Int']>;
  lag?: Maybe<Scalars['Boolean']>;
  orderDiscount?: Maybe<Scalars['Float']>;
  orderSubtotal?: Maybe<Scalars['Float']>;
  orderSubtotalExcludeAlcohol?: Maybe<Scalars['Float']>;
  overLimitedProducts?: Maybe<VerifyLimitedProductResponse>;
  paymentMethod?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['String']>;
  productDiscount?: Maybe<Scalars['Float']>;
  productSubtotal?: Maybe<Scalars['Float']>;
  promotionCodes?: Maybe<Array<Maybe<PromotionCodesInformation>>>;
  /** @deprecated Change field to `warnings` for straightforward to understand. */
  promotionErrors?: Maybe<Array<Maybe<PromotionError>>>;
  promotionUsageDetails?: Maybe<Array<Maybe<CartMarketingUseage>>>;
  shippingAddress?: Maybe<Address>;
  shippingAddressId?: Maybe<Scalars['String']>;
  shippingDiscount?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  shippingMethod?: Maybe<Scalars['String']>;
  shippingSubtotal?: Maybe<Scalars['Float']>;
  storeId?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxId?: Maybe<Scalars['String']>;
  warnings?: Maybe<Array<Maybe<Warning>>>;
};

export type CartCount = {
  __typename?: 'CartCount';
  count?: Maybe<Scalars['Int']>;
};

export type CartGwp = {
  __typename?: 'CartGwp';
  canSelectGwps?: Maybe<Array<Maybe<CartGwpInformation>>>;
  gwpSetId?: Maybe<Scalars['String']>;
  referenceSkus?: Maybe<Array<Maybe<GwpReferenceInformation>>>;
  selectedGwps?: Maybe<Array<Maybe<CartGwpInformation>>>;
};

export type CartGwpInformation = {
  __typename?: 'CartGwpInformation';
  availableQuantity?: Maybe<Scalars['Int']>;
  dutyFree?: Maybe<Scalars['Boolean']>;
  gwpAcknowledgeQuantity?: Maybe<Scalars['Int']>;
  image?: Maybe<Image>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  quantityToSelected?: Maybe<Scalars['Int']>;
  shipTo?: Maybe<ShoppingCartShipToType>;
  sku?: Maybe<Scalars['String']>;
};

export type CartGwpLocaleInformation = {
  __typename?: 'CartGwpLocaleInformation';
  availableQuantity?: Maybe<Scalars['Int']>;
  dutyFree?: Maybe<Scalars['Boolean']>;
  gwpAcknowledgeQuantity?: Maybe<Scalars['Int']>;
  image?: Maybe<Image>;
  productName?: Maybe<Locale>;
  quantity?: Maybe<Scalars['Int']>;
  quantityToSelected?: Maybe<Scalars['Int']>;
  shipTo?: Maybe<ShoppingCartShipToType>;
  sku?: Maybe<Scalars['String']>;
};

export type CartItemBrand = {
  __typename?: 'CartItemBrand';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CartItemBrandLocale = {
  __typename?: 'CartItemBrandLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type CartItemCategory = {
  __typename?: 'CartItemCategory';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CartItemCategoryLocale = {
  __typename?: 'CartItemCategoryLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type CartItemDiscountLimitByBrand = {
  __typename?: 'CartItemDiscountLimitByBrand';
  brand?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
  sapCategory?: Maybe<Scalars['String']>;
};

export type CartItemDiscountResponse = {
  __typename?: 'CartItemDiscountResponse';
  discountPrice?: Maybe<Scalars['Float']>;
  isDiscountByLoyaltyLevel?: Maybe<Scalars['Boolean']>;
  isDiscountLimitByBrand?: Maybe<Scalars['Boolean']>;
  limitByBrand?: Maybe<CartItemDiscountLimitByBrand>;
  referenceItemShipTo?: Maybe<Scalars['String']>;
  referenceItemSku?: Maybe<Scalars['String']>;
  unitCurrency?: Maybe<Scalars['String']>;
};

export type CartItemLocale = {
  __typename?: 'CartItemLocale';
  ageRestriction?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Float']>;
  availableQuantity?: Maybe<Scalars['Int']>;
  brand?: Maybe<CartItemBrandLocale>;
  categories?: Maybe<Array<Maybe<CartItemCategoryLocale>>>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  discountPrice?: Maybe<Scalars['Float']>;
  dutyFree?: Maybe<Scalars['Boolean']>;
  flags?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Image>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAvailableOnDestination?: Maybe<Scalars['Boolean']>;
  isInstalmentAvailable?: Maybe<Scalars['Boolean']>;
  isOutOfStock?: Maybe<Scalars['Boolean']>;
  isQuantityEnough?: Maybe<Scalars['Boolean']>;
  isSelected?: Maybe<Scalars['Boolean']>;
  lag?: Maybe<Scalars['Boolean']>;
  limitedProduct?: Maybe<OrderRuleLimitedProduct>;
  netAmount?: Maybe<Scalars['Float']>;
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  productName?: Maybe<Locale>;
  productType?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  sapCategory?: Maybe<Scalars['String']>;
  shipTo?: Maybe<ShoppingCartShipToType>;
  sku?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<CartItemTag>>>;
  unitCurrency?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  variation?: Maybe<CartItemVariationLocale>;
};

export type CartItemSummary = {
  __typename?: 'CartItemSummary';
  carat?: Maybe<CartItemsSummaryCarat>;
  grandTotal?: Maybe<Scalars['Float']>;
  itemsQty?: Maybe<Scalars['Int']>;
  orderDiscount?: Maybe<Scalars['Float']>;
  orderSubtotal?: Maybe<Scalars['Float']>;
  orderSubtotalExcludeAlcohol?: Maybe<Scalars['Float']>;
  productDiscount?: Maybe<Scalars['Float']>;
  productSubtotal?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

export type CartItemTag = {
  __typename?: 'CartItemTag';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type CartItemVariation = {
  __typename?: 'CartItemVariation';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<CartItemVariationValue>;
};

export type CartItemVariationLocale = {
  __typename?: 'CartItemVariationLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<CartItemVariationValueLocale>;
};

export type CartItemVariationValue = {
  __typename?: 'CartItemVariationValue';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CartItemVariationValueLocale = {
  __typename?: 'CartItemVariationValueLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type CartItems = {
  __typename?: 'CartItems';
  ageRestriction?: Maybe<Scalars['Boolean']>;
  amount?: Maybe<Scalars['Float']>;
  availableQuantity?: Maybe<Scalars['Int']>;
  brand?: Maybe<CartItemBrand>;
  categories?: Maybe<Array<Maybe<CartItemCategory>>>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  discountPrice?: Maybe<Scalars['Float']>;
  dutyFree?: Maybe<Scalars['Boolean']>;
  flags?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Image>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAvailableOnDestination?: Maybe<Scalars['Boolean']>;
  isInstalmentAvailable?: Maybe<Scalars['Boolean']>;
  isOutOfStock?: Maybe<Scalars['Boolean']>;
  isQuantityEnough?: Maybe<Scalars['Boolean']>;
  isSelected?: Maybe<Scalars['Boolean']>;
  lag?: Maybe<Scalars['Boolean']>;
  limitedProduct?: Maybe<OrderRuleLimitedProduct>;
  netAmount?: Maybe<Scalars['Float']>;
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productType?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  sapCategory?: Maybe<Scalars['String']>;
  shipTo?: Maybe<ShoppingCartShipToType>;
  sku?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<CartItemTag>>>;
  unitCurrency?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  variation?: Maybe<CartItemVariation>;
};

export type CartItemsSummary = {
  __typename?: 'CartItemsSummary';
  arrival?: Maybe<CartItemSummary>;
  delivery?: Maybe<DeliveryCartItemSummary>;
  departure?: Maybe<CartItemSummary>;
};

export type CartItemsSummaryCarat = {
  __typename?: 'CartItemsSummaryCarat';
  caratBurn?: Maybe<CartItemsSummaryCaratBurn>;
  caratEarn?: Maybe<CartItemsSummaryCaratEarn>;
};

export type CartItemsSummaryCaratBurn = {
  __typename?: 'CartItemsSummaryCaratBurn';
  caratPoint?: Maybe<Scalars['Float']>;
  caratPrice?: Maybe<Scalars['Float']>;
};

export type CartItemsSummaryCaratEarn = {
  __typename?: 'CartItemsSummaryCaratEarn';
  caratTotal?: Maybe<Scalars['Float']>;
  earnSubtotal?: Maybe<Scalars['Float']>;
};

export type CartLocale = {
  __typename?: 'CartLocale';
  PromotionCodes?: Maybe<Array<Maybe<PromotionCodesInformation>>>;
  ageRestriction?: Maybe<Scalars['Boolean']>;
  billingAddress?: Maybe<Address>;
  billingAddressId?: Maybe<Scalars['String']>;
  cartDisplayId?: Maybe<Scalars['String']>;
  cartItems?: Maybe<Array<Maybe<CartItemLocale>>>;
  cartItemsSummary?: Maybe<CartItemsSummary>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<CustomerResponse>;
  customerId?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Float']>;
  dateUpdated?: Maybe<Scalars['Float']>;
  flightArrival?: Maybe<FlightArrival>;
  flightDeparture?: Maybe<FlightDeparture>;
  flightPersonalInfo?: Maybe<FlightPersonalInfo>;
  grandTotal?: Maybe<Scalars['Float']>;
  gwpCheckoutConfirm?: Maybe<Scalars['Boolean']>;
  gwpStockAcknowledge?: Maybe<Scalars['Boolean']>;
  gwps?: Maybe<Array<Maybe<GwpLocale>>>;
  id?: Maybe<Scalars['Int']>;
  itemsCount?: Maybe<Scalars['Int']>;
  itemsQty?: Maybe<Scalars['Int']>;
  lag?: Maybe<Scalars['Boolean']>;
  orderDiscount?: Maybe<Scalars['Float']>;
  orderSubtotal?: Maybe<Scalars['Float']>;
  orderSubtotalExcludeAlcohol?: Maybe<Scalars['Float']>;
  paymentMethod?: Maybe<Scalars['String']>;
  pickup?: Maybe<Scalars['String']>;
  productDiscount?: Maybe<Scalars['Float']>;
  productSubtotal?: Maybe<Scalars['Float']>;
  /** @deprecated Change field to `warnings` for straightforward to understand. */
  promotionErrors?: Maybe<Array<Maybe<PromotionError>>>;
  promotionUsageDetails?: Maybe<Array<Maybe<CartMarketingUseage>>>;
  shippingAddress?: Maybe<Address>;
  shippingAddressId?: Maybe<Scalars['String']>;
  shippingDiscount?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  shippingSubtotal?: Maybe<Scalars['Float']>;
  storeId?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxId?: Maybe<Scalars['String']>;
  warnings?: Maybe<Array<Maybe<Warning>>>;
};

export type CartMarketingUseage = {
  __typename?: 'CartMarketingUseage';
  endDate?: Maybe<Scalars['Float']>;
  promotionDescription?: Maybe<Scalars['String']>;
  promotionName?: Maybe<Scalars['String']>;
  promotionType?: Maybe<Scalars['Int']>;
  promotionTypeId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Float']>;
};

export enum CartMeFlightStatusType {
  Arrival = 'ARRIVAL',
  Departure = 'DEPARTURE'
}

export type CartMeMergeInput = {
  cartDisplayId: Scalars['String'];
  storeId: Scalars['String'];
};

export type CartPayload = {
  __typename?: 'CartPayload';
  id?: Maybe<Scalars['String']>;
};

export type CartPromocodeInput = {
  cartDisplayId: Scalars['String'];
  promoCode: Scalars['String'];
};

export type CartResponse = Cart | CartLocale;

export type CartRule = {
  __typename?: 'CartRule';
  /** This field allowed airports in the list. (default: allow all airports). */
  airports?: Maybe<Array<Maybe<Scalars['String']>>>;
  applyDiscountOverLimit?: Maybe<Scalars['Boolean']>;
  applyNonMember?: Maybe<Scalars['Boolean']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  description?: Maybe<Scalars['String']>;
  descriptionUrl?: Maybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  limitPerCustomer?: Maybe<Scalars['Int']>;
  limitPerOrder?: Maybe<Scalars['Int']>;
  maxUse?: Maybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: Maybe<Array<Maybe<Scalars['String']>>>;
  minimumSubTotal?: Maybe<Scalars['Float']>;
  orderRules?: Maybe<Array<Maybe<OrderRule>>>;
  platforms?: Maybe<PlatformResponse>;
  priority?: Maybe<Scalars['Int']>;
  promotionName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  storeId?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  used?: Maybe<Scalars['Int']>;
};

export type CartValidationResponse = {
  __typename?: 'CartValidationResponse';
  errors?: Maybe<Array<Maybe<Warning>>>;
  warnings?: Maybe<Array<Maybe<Warning>>>;
};

export type CartsResponse = {
  __typename?: 'CartsResponse';
  data?: Maybe<Array<Maybe<CartResponse>>>;
  itemsQty?: Maybe<Scalars['Int']>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  children?: Maybe<Array<Maybe<Category>>>;
  createdDate?: Maybe<Scalars['Int']>;
  /** @deprecated Unuse field */
  image?: Maybe<Image>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductNodesResponse>;
  updatedDate?: Maybe<Scalars['Int']>;
};


export type CategoryProductsArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  keywordBy?: InputMaybe<ProductNodeKeywordByFieldEnum>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export type CategoryLocale = {
  __typename?: 'CategoryLocale';
  children?: Maybe<Array<Maybe<CategoryLocale>>>;
  createdDate?: Maybe<Scalars['Int']>;
  /** @deprecated Unuse field */
  image?: Maybe<Image>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductNodesResponse>;
  updatedDate?: Maybe<Scalars['Int']>;
};


export type CategoryLocaleProductsArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  keywordBy?: InputMaybe<ProductNodeKeywordByFieldEnum>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  data?: Maybe<Array<Maybe<SelectCategoryType>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategorySearch = {
  field?: InputMaybe<CategorySearchableFieldEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export enum CategorySearchableFieldEnum {
  Name = 'NAME'
}

export type CategorySort = {
  direction?: InputMaybe<SortEnumType>;
  field?: InputMaybe<CategorySortableFieldEnum>;
};

export enum CategorySortableFieldEnum {
  Created = 'CREATED',
  Name = 'NAME',
  Updated = 'UPDATED'
}

export type ChangePasswordInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type CmsContentResponse = {
  __typename?: 'CmsContentResponse';
  floatingBanner?: Maybe<FloatingBanner>;
  homepage?: Maybe<HomepageResponse>;
  megaMenu?: Maybe<MegaMenu>;
  modalBanner?: Maybe<ModalBanner>;
  powerDeal?: Maybe<PowerDeal>;
  premiumBrand?: Maybe<PremiumBrandResponse>;
  staticPage?: Maybe<StaticPage>;
};


export type CmsContentResponseFloatingBannerArgs = {
  lang?: InputMaybe<LocaleType>;
  url?: InputMaybe<Scalars['String']>;
};


export type CmsContentResponseHomepageArgs = {
  lang?: InputMaybe<LocaleType>;
  platform?: InputMaybe<PlatformEnumType>;
};


export type CmsContentResponseMegaMenuArgs = {
  lang?: InputMaybe<LocaleType>;
};


export type CmsContentResponseModalBannerArgs = {
  lang?: InputMaybe<LocaleType>;
  platform?: InputMaybe<PlatformEnumType>;
};


export type CmsContentResponsePowerDealArgs = {
  lang?: InputMaybe<LocaleType>;
  url?: InputMaybe<Scalars['String']>;
};


export type CmsContentResponsePremiumBrandArgs = {
  brandName: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
};


export type CmsContentResponseStaticPageArgs = {
  contentType: ContentEnumType;
  isPreview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CmsImageInput = {
  image?: InputMaybe<ImageInput>;
  reference?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CmsImageResponse = {
  __typename?: 'CmsImageResponse';
  image?: Maybe<ImagePayload>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CollecitonResponse = {
  __typename?: 'CollecitonResponse';
  isDisable?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<SelectProductLocaleType>>>;
};


export type CollecitonResponseProductsArgs = {
  filter?: InputMaybe<ProductFilterQuery>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};

export type Collection = {
  __typename?: 'Collection';
  banners?: Maybe<Array<Maybe<CollectionImage>>>;
  createdDate?: Maybe<Scalars['Float']>;
  /** @deprecated use `banners` instead */
  images?: Maybe<Array<Maybe<CollectionImage>>>;
  isBannerDisplay?: Maybe<Scalars['Boolean']>;
  isDisable?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<CollectionMetadata>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductsResponse>;
  remark?: Maybe<Scalars['String']>;
  skus?: Maybe<Array<Maybe<CollectionSku>>>;
  /** @deprecated will remove */
  targetBannerUrl?: Maybe<Scalars['String']>;
};


export type CollectionProductsArgs = {
  filter?: InputMaybe<ProductFilterQuery>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};

export type CollectionBannerImageInput = {
  hash: Scalars['String'];
};

export type CollectionBannerInput = {
  image: CollectionBannerImageInput;
  lang: LocaleType;
  link?: InputMaybe<Scalars['String']>;
  size: ImageSizeEnumType;
};

export type CollectionDetailResponse = {
  __typename?: 'CollectionDetailResponse';
  data?: Maybe<CollectionResponse>;
};

export type CollectionFilterInput = {
  status?: InputMaybe<CollectionStatusEnumType>;
};

export type CollectionHomepage = {
  __typename?: 'CollectionHomepage';
  isDisable?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<SelectProductLocaleType>>>;
};


export type CollectionHomepageLabelArgs = {
  lang?: InputMaybe<LocaleType>;
};


export type CollectionHomepageProductsArgs = {
  filter?: InputMaybe<ProductFilterQuery>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};

export type CollectionHomepageInput = {
  collectionName?: InputMaybe<Scalars['String']>;
};

export type CollectionHomepageResponse = {
  __typename?: 'CollectionHomepageResponse';
  collectionName?: Maybe<Scalars['String']>;
  info?: Maybe<SelectCollectionResponseType>;
};


export type CollectionHomepageResponseInfoArgs = {
  lang?: InputMaybe<LocaleType>;
};

export type CollectionImage = {
  __typename?: 'CollectionImage';
  /** @deprecated will remove */
  hash?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  lang?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
};

/** deprecate */
export type CollectionImageInput = {
  hash: Scalars['String'];
  lang: LocaleType;
  size: ImageSizeEnumType;
};

export type CollectionLocale = {
  __typename?: 'CollectionLocale';
  banners?: Maybe<Array<Maybe<CollectionImage>>>;
  createdDate?: Maybe<Scalars['Float']>;
  /** @deprecated use `banners` instead */
  images?: Maybe<Array<Maybe<CollectionImage>>>;
  isBannerDisplay?: Maybe<Scalars['Boolean']>;
  isDisable?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Locale>;
  metadata?: Maybe<CollectionMetadata>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductsResponse>;
  remark?: Maybe<Scalars['String']>;
  skus?: Maybe<Array<Maybe<CollectionSku>>>;
  /** @deprecated will remove */
  targetBannerUrl?: Maybe<Scalars['String']>;
};


export type CollectionLocaleProductsArgs = {
  filter?: InputMaybe<ProductFilterQuery>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ProductSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  description?: Maybe<Scalars['String']>;
  prettyUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CollectionMetadataInput = {
  description?: InputMaybe<Scalars['String']>;
  prettyUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CollectionPayload = {
  __typename?: 'CollectionPayload';
  banners?: Maybe<Array<Maybe<CollectionImage>>>;
  /** @deprecated use `banners` instead */
  images?: Maybe<Array<Maybe<CollectionImage>>>;
  isBannerDisplay?: Maybe<Scalars['Boolean']>;
  isDisable?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<CollectionMetadata>;
  name?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  skus?: Maybe<Array<Maybe<CollectionSku>>>;
};

export type CollectionResponse = Collection | CollectionLocale;

export type CollectionSku = {
  __typename?: 'CollectionSku';
  score?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
};

export type CollectionSkuInput = {
  score?: InputMaybe<Scalars['Float']>;
  sku?: InputMaybe<Scalars['String']>;
};

export enum CollectionSortableFieldEnum {
  Name = 'NAME'
}

export enum CollectionStatusEnumType {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export type CollectionsResponse = {
  __typename?: 'CollectionsResponse';
  data?: Maybe<Array<Maybe<CollectionResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum CompanyType {
  Kpd = 'KPD',
  Kpi = 'KPI'
}

export type ConditionInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadataTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ConditionPayload = {
  __typename?: 'ConditionPayload';
  id?: Maybe<Scalars['String']>;
};

export type ConditionSelector = {
  __typename?: 'ConditionSelector';
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  metadataTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ConditionSelectorInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadataTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentBackOfficeResponse = {
  contentType?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};

export type ContentBrandStoryPremiumBrandInput = {
  paragraph?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentBrandStoryPremiumBrandResponse = {
  __typename?: 'ContentBrandStoryPremiumBrandResponse';
  paragraph?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentCategoryBannerPremiumBrandInput = {
  subBannerCategoryBanner?: InputMaybe<CmsImageInput>;
  subBannerCategoryName?: InputMaybe<Scalars['String']>;
};

export type ContentCategoryBannerPremiumBrandResponse = {
  __typename?: 'ContentCategoryBannerPremiumBrandResponse';
  subBannerCategoryBanner?: Maybe<CmsImageResponse>;
  subBannerCategoryName?: Maybe<Scalars['String']>;
};

export enum ContentEnumType {
  BannerFloating = 'BANNER_FLOATING',
  BannerModal = 'BANNER_MODAL',
  Homepage = 'HOMEPAGE',
  Megamenu = 'MEGAMENU',
  Powerdeal = 'POWERDEAL',
  Premiumbrand = 'PREMIUMBRAND',
  Staticpage = 'STATICPAGE'
}

export type ContentInformationResponse = {
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentPayload = {
  __typename?: 'ContentPayload';
  id?: Maybe<Scalars['String']>;
};

export type ContentPremiumBrandInput = {
  brandStory?: InputMaybe<ContentBrandStoryPremiumBrandInput>;
  categoryBanners?: InputMaybe<Array<InputMaybe<ContentCategoryBannerPremiumBrandInput>>>;
  headBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  heroBanners?: InputMaybe<Array<InputMaybe<HomepageImageInput>>>;
  logo?: InputMaybe<CmsImageInput>;
  product?: InputMaybe<ContentProductPremiumBrandInput>;
  video?: InputMaybe<ContentVideoPremiumBrandInput>;
};

export type ContentPremiumBrandLocaleInput = {
  cn?: InputMaybe<ContentPremiumBrandInput>;
  en?: InputMaybe<ContentPremiumBrandInput>;
  th?: InputMaybe<ContentPremiumBrandInput>;
};

export type ContentPremiumBrandLocaleResponse = {
  __typename?: 'ContentPremiumBrandLocaleResponse';
  cn?: Maybe<ContentPremiumBrandResponse>;
  en?: Maybe<ContentPremiumBrandResponse>;
  th?: Maybe<ContentPremiumBrandResponse>;
};

export type ContentPremiumBrandResponse = {
  __typename?: 'ContentPremiumBrandResponse';
  brandStory?: Maybe<ContentBrandStoryPremiumBrandResponse>;
  categoryBanners?: Maybe<Array<Maybe<ContentCategoryBannerPremiumBrandResponse>>>;
  headBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  heroBanners?: Maybe<Array<Maybe<HomepageImageResponse>>>;
  logo?: Maybe<CmsImageResponse>;
  product?: Maybe<ContentProductPremiumBrandResponse>;
  video?: Maybe<ContentVideoPremiumBrandResponse>;
};

export type ContentProductPremiumBrandInput = {
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentProductPremiumBrandResponse = {
  __typename?: 'ContentProductPremiumBrandResponse';
  preview?: Maybe<Array<Maybe<SelectProductLocaleType>>>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};


export type ContentProductPremiumBrandResponsePreviewArgs = {
  lang?: InputMaybe<LocaleType>;
};

export type ContentResponse = {
  __typename?: 'ContentResponse';
  data?: Maybe<SelectContentResponse>;
};

export type ContentVideoPremiumBrandInput = {
  content?: InputMaybe<Scalars['String']>;
  coverBanner?: InputMaybe<CmsImageInput>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContentVideoPremiumBrandResponse = {
  __typename?: 'ContentVideoPremiumBrandResponse';
  content?: Maybe<Scalars['String']>;
  coverBanner?: Maybe<CmsImageResponse>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ContentsResponse = {
  __typename?: 'ContentsResponse';
  data?: Maybe<Array<Maybe<ContentBackOfficeResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CountryBackOfficeResponse = {
  __typename?: 'CountryBackOfficeResponse';
  code?: Maybe<Scalars['String']>;
  codeAlpha2?: Maybe<Scalars['String']>;
  codeAlpha3?: Maybe<Scalars['String']>;
  isVisible?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type CreateBannerFloatingInput = {
  author: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  desktopImages?: InputMaybe<ImageLocaleInput>;
  name: Scalars['String'];
  page: PageInput;
  position: Scalars['String'];
  status: StatusEnumType;
};

export type CreateBannerModalInput = {
  author: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  desktopImages?: InputMaybe<ImageLocaleInput>;
  mobileImages?: InputMaybe<ImageLocaleInput>;
  name: Scalars['String'];
  platform: PlatformInput;
  status: StatusEnumType;
};

export type CreateCollectionInput = {
  banners?: InputMaybe<Array<InputMaybe<CollectionBannerInput>>>;
  /** Deprecate use banners instead */
  images?: InputMaybe<Array<InputMaybe<CollectionImageInput>>>;
  isBannerDisplay?: InputMaybe<Scalars['Boolean']>;
  isDisable?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<LocaleInput>;
  metadata?: InputMaybe<CollectionMetadataInput>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
};

export type CreateCustomerPrivilegeInput = {
  citizenId: Scalars['String'];
};

export type CreateCustomerPrivilegePayload = {
  __typename?: 'CreateCustomerPrivilegePayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateDealDurarionInput = {
  description: Scalars['String'];
  endDate: Scalars['Float'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  remark: LocaleInput;
  startDate: Scalars['Float'];
};

export type CreateHomepageInput = {
  author: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  homepage?: InputMaybe<HomepageInput>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['Float']>;
  status: StatusEnumType;
};

export type CreateMegaMenuInput = {
  author?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnumType>;
  subMenus?: InputMaybe<SubMegaMenuLocaleInput>;
};

export type CreateMemberCardWithPrivilegeInput = {
  acquisition: RegisterMemberWithPrivilegeAcquisitionInput;
};

export type CreateMemberCardWithPrivilegePayload = {
  __typename?: 'CreateMemberCardWithPrivilegePayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateMemberInput = {
  citizenId: Scalars['String'];
};

export type CreateMemberPayload = {
  __typename?: 'CreateMemberPayload';
  email?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  verificationMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateMemberWithPassportInput = {
  birthDate: Scalars['Float'];
  passport: Scalars['String'];
};

export type CreateNewUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  ssoId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateOrderCommentInput = {
  comment: OrderCommentInput;
  orderId: Scalars['String'];
};

export type CreateOrderEventLogInput = {
  orderId: Scalars['String'];
  values: Scalars['String'];
};

export type CreateOrderReOrderInput = {
  cartDisplayId: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
};

export type CreatePasswordInput = {
  language?: InputMaybe<LocaleType>;
};

export type CreatePasswordResponse = {
  __typename?: 'CreatePasswordResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type CreatePlaceOrderInput = {
  cartDisplayId?: InputMaybe<Scalars['String']>;
  /** InstalmentPaymentPlan */
  ipp?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LocaleType>;
};

export type CreatePowerDealDurationInput = {
  endDate: Scalars['Float'];
  startDate: Scalars['Float'];
};

export type CreatePowerDealInfoInput = {
  description?: InputMaybe<Scalars['String']>;
  status: StatusEnumType;
  titleName?: InputMaybe<LocaleInput>;
  url: Scalars['String'];
};

export type CreatePowerDealInput = {
  author?: InputMaybe<Scalars['String']>;
  collectionName: Scalars['String'];
  duration: CreatePowerDealDurationInput;
  endPage: CreatePowerDealPageInput;
  info: CreatePowerDealInfoInput;
  metaDescription?: InputMaybe<LocaleInput>;
  metaTitle?: InputMaybe<LocaleInput>;
  ongoingPage: CreatePowerDealPageInput;
  upcomingPage: CreatePowerDealPageInput;
};

export type CreatePowerDealPageInput = {
  desktopImage: ImageLocaleInput;
  mobileImage: ImageLocaleInput;
};

export type CreatePremiumBrandInput = {
  author?: InputMaybe<Scalars['String']>;
  brandLabel?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<ContentPremiumBrandLocaleInput>;
  description?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnumType>;
  template?: InputMaybe<PremiumBrandTemplateEnum>;
};

export type CreatePromotionGwpInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  applyDiscountOverLimit?: InputMaybe<Scalars['Boolean']>;
  applyNonMember?: InputMaybe<Scalars['Boolean']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  description?: InputMaybe<Scalars['String']>;
  descriptionUrl?: InputMaybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Float']>;
  gwpRules?: InputMaybe<Array<InputMaybe<GwpRuleInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limitPerCustomer?: InputMaybe<Scalars['Int']>;
  limitPerOrder?: InputMaybe<Scalars['Int']>;
  maxUse?: InputMaybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimumSubTotal?: InputMaybe<Scalars['Float']>;
  platforms?: InputMaybe<PlatformInput>;
  priority?: InputMaybe<Scalars['Int']>;
  promotionName?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  storeId?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
  used?: InputMaybe<Scalars['Int']>;
};

export type CreatePromotionShippingInput = {
  applyDiscountOverLimit?: InputMaybe<Scalars['Boolean']>;
  applyNonMember?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionUrl?: InputMaybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limitPerCustomer?: InputMaybe<Scalars['Int']>;
  limitPerOrder?: InputMaybe<Scalars['Int']>;
  maxUse?: InputMaybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimumSubTotal?: InputMaybe<Scalars['Float']>;
  platforms?: InputMaybe<PlatformInput>;
  priority?: InputMaybe<Scalars['Int']>;
  promotionName?: InputMaybe<Scalars['String']>;
  shippingRules?: InputMaybe<Array<InputMaybe<ShippingRuleInput>>>;
  startDate?: InputMaybe<Scalars['Float']>;
  storeId?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
  used?: InputMaybe<Scalars['Int']>;
};

export type CreateSizeChartInput = {
  content: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  remark: Scalars['String'];
  status: SizeChatStatus;
};

export type CreateStaticPageInput = {
  authorName: Scalars['String'];
  name: Scalars['String'];
  staticPageContent?: InputMaybe<StaticPageContent>;
  status: StatusEnumType;
  url: Scalars['String'];
};

export type CreateStaticPagePreviewPayload = {
  __typename?: 'CreateStaticPagePreviewPayload';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CreateTagInput = {
  label: LocaleInput;
  name: Scalars['String'];
  remark: Scalars['String'];
  score: Scalars['Int'];
  status: TagStatus;
};

export type CustomerAddressPayload = {
  __typename?: 'CustomerAddressPayload';
  addressId?: Maybe<Scalars['String']>;
};

export type CustomerEventLogPayload = {
  __typename?: 'CustomerEventLogPayload';
  data?: Maybe<Array<Maybe<CustomerEventLogPayloadData>>>;
  initiator?: Maybe<EventLogInitiator>;
  message?: Maybe<Scalars['String']>;
};

export type CustomerEventLogPayloadData = {
  __typename?: 'CustomerEventLogPayloadData';
  acquisition?: Maybe<CustomerOrderAcquisitionLog>;
  /** customer detail after change */
  after?: Maybe<CustomerProfileLog>;
  /** customer detail before change */
  before?: Maybe<CustomerProfileLog>;
  member?: Maybe<CustomerMemberProfileLog>;
  memberId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerIdentifier?: Maybe<Scalars['String']>;
  ssoId?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CustomerFilterQuery = {
  citizenId?: InputMaybe<Scalars['String']>;
  dobDay?: InputMaybe<Scalars['Int']>;
  dobMonth?: InputMaybe<Scalars['Int']>;
  dobYear?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  isLock?: InputMaybe<Scalars['Boolean']>;
  isSubscribe?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<CustomerMemberQuery>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  passportNumber?: InputMaybe<Scalars['String']>;
  registerDateFrom?: InputMaybe<Scalars['Float']>;
  registerDateTo?: InputMaybe<Scalars['Float']>;
};

export type CustomerInput = {
  birthDate?: InputMaybe<Scalars['Float']>;
  citizenId?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LocaleType>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  passportNumber?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CustomerLastLogin = {
  __typename?: 'CustomerLastLogin';
  agent?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type CustomerMemberProfileLog = {
  __typename?: 'CustomerMemberProfileLog';
  citizenId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type CustomerMemberQuery = {
  isExpire?: InputMaybe<Scalars['Boolean']>;
  isMember?: InputMaybe<Scalars['Boolean']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CustomerOrderAcquisitionLog = {
  __typename?: 'CustomerOrderAcquisitionLog';
  acquisitionLv?: Maybe<Scalars['String']>;
  by?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CustomerPayload = {
  __typename?: 'CustomerPayload';
  ssoId?: Maybe<Scalars['String']>;
};

export type CustomerPrivilegeInformation = {
  __typename?: 'CustomerPrivilegeInformation';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type CustomerProfileLog = {
  __typename?: 'CustomerProfileLog';
  birthDate?: Maybe<Scalars['Float']>;
  citizenId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CustomerResponse = {
  __typename?: 'CustomerResponse';
  addresses?: Maybe<Array<Maybe<Address>>>;
  authenticatedProviders?: Maybe<Array<Maybe<AuthenticatedProvider>>>;
  birthDate?: Maybe<Scalars['Float']>;
  citizenId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  isSubscribeNewsletter?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<CustomerLastLogin>;
  lastName?: Maybe<Scalars['String']>;
  member?: Maybe<MemberResponse>;
  /** @deprecated use memberId in member */
  memberId?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  /** @deprecated use 'isSubscribeNewsletter' instead */
  newsletterSubscription?: Maybe<Scalars['Boolean']>;
  order?: Maybe<OrderCustomerResponse>;
  passportNumber?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  phoneCodeResource?: Maybe<PhoneCodeResponse>;
  privilege?: Maybe<CustomerPrivilegeInformation>;
  registerDate?: Maybe<Scalars['Float']>;
  segment?: Maybe<CustomerSegment>;
  ssoId?: Maybe<Scalars['String']>;
  status?: Maybe<CustomerStatus>;
  title?: Maybe<Scalars['String']>;
};


export type CustomerResponseAddressesArgs = {
  addressId?: InputMaybe<Scalars['String']>;
};


export type CustomerResponseNewsletterSubscriptionArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type CustomerResponsePhoneCodeResourceArgs = {
  lang?: InputMaybe<LocaleType>;
};

export type CustomerSegment = {
  __typename?: 'CustomerSegment';
  name?: Maybe<Scalars['String']>;
  rfm?: Maybe<Scalars['String']>;
  subSegment?: Maybe<Scalars['String']>;
};

export enum CustomerSortedByFieldEnum {
  Name = 'NAME',
  RegisterDate = 'REGISTER_DATE',
  UpdatedDate = 'UPDATED_DATE'
}

export type CustomerSsoIdInput = {
  ssoId: Scalars['String'];
};

export type CustomerStatus = {
  __typename?: 'CustomerStatus';
  isLock?: Maybe<Scalars['Boolean']>;
  remark?: Maybe<Scalars['String']>;
};

export type CustomersResponse = {
  __typename?: 'CustomersResponse';
  data?: Maybe<Array<Maybe<CustomerResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DealDuration = {
  __typename?: 'DealDuration';
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductNodesResponse>;
  remark?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};


export type DealDurationProductsArgs = {
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export enum DealDurationEnumStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE'
}

export type DealDurationLocale = {
  __typename?: 'DealDurationLocale';
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductNodesResponse>;
  remark?: Maybe<Locale>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};


export type DealDurationLocaleProductsArgs = {
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export type DealDurationPayload = {
  __typename?: 'DealDurationPayload';
  id?: Maybe<Scalars['String']>;
};

export type DealDurationProduct = {
  __typename?: 'DealDurationProduct';
  haveDeal?: Maybe<Scalars['Boolean']>;
  remark?: Maybe<Scalars['String']>;
};

export type DealDurationProductLocale = {
  __typename?: 'DealDurationProductLocale';
  haveDeal?: Maybe<Scalars['Boolean']>;
  remark?: Maybe<Locale>;
};

export type DealDurationResponse = DealDuration | DealDurationLocale;

export enum DealDurationSortableFieldEnum {
  Createddate = 'CREATEDDATE',
  Default = 'DEFAULT',
  Name = 'NAME',
  Startdate = 'STARTDATE',
  Updateddate = 'UPDATEDDATE'
}

export type DealDurationsResponse = {
  __typename?: 'DealDurationsResponse';
  data?: Maybe<Array<Maybe<DealDurationResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DeleteAttributeInput = {
  id: Scalars['String'];
  valueId: Scalars['String'];
};

export type DeleteAttributePayload = {
  __typename?: 'DeleteAttributePayload';
  id?: Maybe<Scalars['String']>;
  valueId?: Maybe<Scalars['String']>;
};

export type DeleteBrandInput = {
  brandName: Scalars['String'];
};

export type DeleteCartItemInput = {
  cartDisplayId: Scalars['String'];
  shipTo: ShoppingCartShipToType;
  sku: Scalars['String'];
};

export type DeleteCollectionPayload = {
  __typename?: 'DeleteCollectionPayload';
  message?: Maybe<Scalars['String']>;
};

export type DeleteCustomerInput = {
  addressId?: InputMaybe<Scalars['String']>;
  ssoId?: InputMaybe<Scalars['String']>;
};

export type DeleteGuestCartItemInput = {
  cartDisplayId: Scalars['String'];
  shipTo: ShoppingCartShipToType;
  sku: Scalars['String'];
};

export type DeleteMemberInput = {
  remark?: InputMaybe<Scalars['String']>;
  ssoId: Scalars['String'];
};

export type DeleteMemberPayload = {
  __typename?: 'DeleteMemberPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteProductInput = {
  sku: Scalars['String'];
};

export type DeleteResult = {
  __typename?: 'DeleteResult';
  deleteSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DeleteWishlistItemInput = {
  sku: Scalars['String'];
};

export type DeleteWishlistItemResponse = {
  __typename?: 'DeleteWishlistItemResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type DeliveryCartItemSummary = {
  __typename?: 'DeliveryCartItemSummary';
  carat?: Maybe<CartItemsSummaryCarat>;
  grandTotal?: Maybe<Scalars['Float']>;
  itemsQty?: Maybe<Scalars['Int']>;
  orderDiscount?: Maybe<Scalars['Float']>;
  orderSubtotal?: Maybe<Scalars['Float']>;
  orderSubtotalExcludeAlcohol?: Maybe<Scalars['Float']>;
  productDiscount?: Maybe<Scalars['Float']>;
  productSubtotal?: Maybe<Scalars['Float']>;
  shippingDiscount?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  shippingSubtotal?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
};

export type DeliveryTypeInput = {
  delivery?: InputMaybe<Scalars['Boolean']>;
};

export type DeliveryTypeResponse = {
  __typename?: 'DeliveryTypeResponse';
  delivery?: Maybe<Scalars['Boolean']>;
};

export type DuplicateHomepageInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DuplicateImageTaskResponse = {
  __typename?: 'DuplicateImageTaskResponse';
  duplicateDutyPaidTaskIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DuplicateMegaMenuInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DuplicatePremiumBrandInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DuplicateProductResponse = {
  __typename?: 'DuplicateProductResponse';
  createdLogStateSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  duplicateImageTask?: Maybe<DuplicateImageTaskResponse>;
  newProductSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  newStockSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  parentMovement?: Maybe<ParentMovementResponse>;
  updatedSizeChart?: Maybe<UpdatedSizeChartResponse>;
};

export type EPurseItem = {
  __typename?: 'EPurseItem';
  amount?: Maybe<Scalars['Float']>;
  canBurn?: Maybe<Scalars['Boolean']>;
  expireDate?: Maybe<Scalars['Float']>;
  group?: Maybe<MemberEPurseTypeEnum>;
  header?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  valueCode?: Maybe<Scalars['String']>;
};

export type ErrorMessageResponse = {
  __typename?: 'ErrorMessageResponse';
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
};

export type ErrorMessagesResponse = {
  __typename?: 'ErrorMessagesResponse';
  data?: Maybe<Array<Maybe<ErrorMessageResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum EventLogDomainEnumType {
  Customer = 'CUSTOMER'
}

export enum EventLogEnumType {
  CustomerChallengeMember = 'CUSTOMER_CHALLENGE_MEMBER',
  CustomerLinkProvider = 'CUSTOMER_LINK_PROVIDER',
  CustomerLock = 'CUSTOMER_LOCK',
  CustomerUnlinkMember = 'CUSTOMER_UNLINK_MEMBER',
  CustomerUnlinkProvider = 'CUSTOMER_UNLINK_PROVIDER',
  CustomerUnlock = 'CUSTOMER_UNLOCK',
  CustomerUpdateProfile = 'CUSTOMER_UPDATE_PROFILE'
}

export enum EventLogFieldName {
  CreatedDate = 'CREATED_DATE'
}

export type EventLogFilterInput = {
  initiator?: InputMaybe<Scalars['String']>;
  ssoId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<EventLogEnumType>;
};

export type EventLogInitiator = {
  __typename?: 'EventLogInitiator';
  email?: Maybe<Scalars['String']>;
  initiator?: Maybe<Scalars['String']>;
};

export type EventLogPayloadType = CustomerEventLogPayload;

export type EventLogResponse = {
  __typename?: 'EventLogResponse';
  createdDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  payload?: Maybe<EventLogPayloadType>;
  type?: Maybe<Scalars['String']>;
};

export type EventLogSortInput = {
  direction?: InputMaybe<SortEnumType>;
  field?: InputMaybe<EventLogFieldName>;
};

export type EventLogsResponse = {
  __typename?: 'EventLogsResponse';
  data?: Maybe<Array<Maybe<EventLogResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ExcludeCaratPayload = {
  __typename?: 'ExcludeCaratPayload';
  brands?: Maybe<Array<Maybe<Brand>>>;
  options?: Maybe<Array<Maybe<Array<Maybe<ExcludeEarnCaratProductOption>>>>>;
  skus?: Maybe<Array<Maybe<ProductNode>>>;
};

export type ExcludeEarnCaratProductOption = {
  __typename?: 'ExcludeEarnCaratProductOption';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Boolean']>;
};

export type ExcludeInstalmentPayload = {
  __typename?: 'ExcludeInstalmentPayload';
  brands?: Maybe<Array<Maybe<Brand>>>;
  options?: Maybe<Array<Maybe<Array<Maybe<ExcludeInstalmentProductOption>>>>>;
  skus?: Maybe<Array<Maybe<ProductNode>>>;
};

export type ExcludeInstalmentProductOption = {
  __typename?: 'ExcludeInstalmentProductOption';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Boolean']>;
};

export type Facebook = {
  __typename?: 'Facebook';
  description?: Maybe<Scalars['String']>;
  imageUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type FacebookLocale = {
  __typename?: 'FacebookLocale';
  description?: Maybe<Locale>;
  imageUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Locale>;
};

export type FailedGwpItem = {
  __typename?: 'FailedGwpItem';
  errorMessage?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
};

export type FailedProductItem = {
  __typename?: 'FailedProductItem';
  errorMessage?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
};

export type FilterCategory = {
  __typename?: 'FilterCategory';
  children?: Maybe<Array<Maybe<FilterCategory>>>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FilterInformation = {
  __typename?: 'FilterInformation';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Flight = {
  __typename?: 'Flight';
  airLineCode?: Maybe<Scalars['String']>;
  airLineName?: Maybe<Scalars['String']>;
  airportCode?: Maybe<Scalars['String']>;
  flightCode?: Maybe<Scalars['String']>;
  flightName?: Maybe<Scalars['String']>;
  flightNumber?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
};

export type FlightArrival = {
  __typename?: 'FlightArrival';
  airlineCode?: Maybe<Scalars['String']>;
  airportCode?: Maybe<Scalars['String']>;
  flightNo?: Maybe<Scalars['String']>;
  flightUnixDate?: Maybe<Scalars['Float']>;
  pickupCounterCode?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
};

export type FlightDeparture = {
  __typename?: 'FlightDeparture';
  airlineCode?: Maybe<Scalars['String']>;
  airportCode?: Maybe<Scalars['String']>;
  flightNo?: Maybe<Scalars['String']>;
  flightUnixDate?: Maybe<Scalars['Float']>;
  pickupCounterCode?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
};

export type FlightPersonalInfo = {
  __typename?: 'FlightPersonalInfo';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  passport?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type FlightResponse = {
  __typename?: 'FlightResponse';
  data?: Maybe<Array<Maybe<Flight>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum FlightStatusType {
  Arrival = 'ARRIVAL',
  Departure = 'DEPARTURE'
}

export type FloatingBanner = {
  __typename?: 'FloatingBanner';
  banners?: Maybe<Array<Maybe<FloatingBannerResponse>>>;
};

export type FloatingBannerBackOffice = ContentInformationResponse & {
  __typename?: 'FloatingBannerBackOffice';
  author?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  desktopImages?: Maybe<ImageLocaleResponse>;
  id?: Maybe<Scalars['String']>;
  mobileImages?: Maybe<ImageLocaleResponse>;
  name?: Maybe<Scalars['String']>;
  page?: Maybe<PageResponse>;
  position?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type FloatingBannerResponse = {
  __typename?: 'FloatingBannerResponse';
  desktopImage?: Maybe<CmsImageResponse>;
  position?: Maybe<Scalars['String']>;
};

export type FloatingBanners = ContentBackOfficeResponse & {
  __typename?: 'FloatingBanners';
  author?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};

export type ForgotPasswordByEmailInput = {
  email: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
};

export type ForgotPasswordBySmsInput = {
  lang?: InputMaybe<LocaleType>;
  ssoId: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export enum GuestCartFlightStatusType {
  Arrival = 'ARRIVAL',
  Departure = 'DEPARTURE'
}

export type GuestCartPromoCodeInput = {
  cartDisplayId: Scalars['String'];
  promoCode: Scalars['String'];
};

export type Gwp = {
  __typename?: 'Gwp';
  /** This field allowed airports in the list. (default: allow all airports). */
  airports?: Maybe<Array<Maybe<Scalars['String']>>>;
  applyDiscountOverLimit?: Maybe<Scalars['Boolean']>;
  applyNonMember?: Maybe<Scalars['Boolean']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  description?: Maybe<Scalars['String']>;
  descriptionUrl?: Maybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate?: Maybe<Scalars['Float']>;
  gwpRules?: Maybe<Array<Maybe<GwpRule>>>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  limitPerCustomer?: Maybe<Scalars['Int']>;
  limitPerOrder?: Maybe<Scalars['Int']>;
  maxUse?: Maybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: Maybe<Array<Maybe<Scalars['String']>>>;
  minimumSubTotal?: Maybe<Scalars['Float']>;
  platforms?: Maybe<PlatformResponse>;
  priority?: Maybe<Scalars['Int']>;
  promotionName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  storeId?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  used?: Maybe<Scalars['Int']>;
};

export enum GwpBuyItemConditionEnumType {
  BuyXAndAny = 'BUY_X_AND_ANY',
  BuyXAndItemY = 'BUY_X_AND_ITEM_Y'
}

export type GwpCondition = {
  __typename?: 'GwpCondition';
  airports?: Maybe<Array<Maybe<Scalars['String']>>>;
  buyItemCondition?: Maybe<Scalars['String']>;
  calculateSeparateDeliveryType?: Maybe<Scalars['Boolean']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  excludes?: Maybe<GwpConditionGroup>;
  gwp?: Maybe<Array<Maybe<Scalars['String']>>>;
  gwpQuantity?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  includes?: Maybe<GwpConditionGroup>;
  isRepeatCondition?: Maybe<Scalars['Boolean']>;
  itemQuantity?: Maybe<Scalars['Int']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  minimumAmount?: Maybe<Scalars['Float']>;
  offeringMethod?: Maybe<Scalars['String']>;
  secondExcludes?: Maybe<GwpConditionGroup>;
  secondIncludes?: Maybe<GwpConditionGroup>;
  secondItemQuantity?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type GwpConditionGroup = {
  __typename?: 'GwpConditionGroup';
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  metadataTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GwpConditionGroupInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metadataTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GwpConditionInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buyItemCondition?: InputMaybe<GwpBuyItemConditionEnumType>;
  calculateSeparateDeliveryType?: InputMaybe<Scalars['Boolean']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  excludes?: InputMaybe<GwpConditionGroupInput>;
  gwp?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gwpQuantity?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  includes?: InputMaybe<GwpConditionGroupInput>;
  isRepeatCondition?: InputMaybe<Scalars['Boolean']>;
  itemQuantity?: InputMaybe<Scalars['Int']>;
  maximumAmount?: InputMaybe<Scalars['Float']>;
  minimumAmount?: InputMaybe<Scalars['Float']>;
  offeringMethod?: InputMaybe<OfferingMethodEnumType>;
  order?: InputMaybe<Scalars['Int']>;
  secondExcludes?: InputMaybe<GwpConditionGroupInput>;
  secondIncludes?: InputMaybe<GwpConditionGroupInput>;
  secondItemQuantity?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<PromotionConditionEnumType>;
};

export type GwpConditionPayload = {
  __typename?: 'GwpConditionPayload';
  id?: Maybe<Scalars['String']>;
};

export enum GwpEnumType {
  Gwp = 'GWP'
}

export type GwpInformation = {
  __typename?: 'GwpInformation';
  availableQuantity?: Maybe<Scalars['Int']>;
  dutyFree?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Image>;
  pickup?: Maybe<Scalars['Boolean']>;
  productName?: Maybe<Scalars['String']>;
  quantityToSelected?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type GwpLocale = {
  __typename?: 'GwpLocale';
  canSelectGwps?: Maybe<Array<Maybe<CartGwpLocaleInformation>>>;
  gwpSetId?: Maybe<Scalars['String']>;
  referenceSkus?: Maybe<Array<Maybe<GwpReferenceInformation>>>;
  selectedGwps?: Maybe<Array<Maybe<CartGwpLocaleInformation>>>;
};

export type GwpLocaleInformation = {
  __typename?: 'GwpLocaleInformation';
  availableQuantity?: Maybe<Scalars['Int']>;
  dutyFree?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Image>;
  pickup?: Maybe<Scalars['Boolean']>;
  productName?: Maybe<Locale>;
  quantityToSelected?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type GwpOptions = {
  __typename?: 'GwpOptions';
  isAgeRestriction?: Maybe<Scalars['Boolean']>;
  isDutyFree?: Maybe<Scalars['Boolean']>;
  isLag?: Maybe<Scalars['Boolean']>;
  isPickup?: Maybe<Scalars['Boolean']>;
};

export type GwpProduct = {
  __typename?: 'GwpProduct';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  batch?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<GwpProductBrand>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Scalars['String']>;
  isDisable?: Maybe<Scalars['Boolean']>;
  isVisibility?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<GwpOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  quantity?: Maybe<Scalars['Int']>;
  sapCategory?: Maybe<Scalars['String']>;
  sapCategoryName?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateLogs?: Maybe<Array<Maybe<GwpProductStateLogs>>>;
  stock?: Maybe<StockBof>;
  supplierCode?: Maybe<Scalars['String']>;
  warranty?: Maybe<Scalars['String']>;
};

export type GwpProductBrand = {
  __typename?: 'GwpProductBrand';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GwpProductBrandLocale = {
  __typename?: 'GwpProductBrandLocale';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type GwpProductLocale = {
  __typename?: 'GwpProductLocale';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  batch?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<GwpProductBrandLocale>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Locale>;
  isDisable?: Maybe<Scalars['Boolean']>;
  isVisibility?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Locale>;
  materials?: Maybe<Locale>;
  name?: Maybe<Locale>;
  options?: Maybe<GwpOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  quantity?: Maybe<Scalars['Int']>;
  sapCategory?: Maybe<Scalars['String']>;
  sapCategoryName?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Locale>;
  sku?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateLogs?: Maybe<Array<Maybe<GwpProductStateLogs>>>;
  stock?: Maybe<StockBof>;
  supplierCode?: Maybe<Scalars['String']>;
  warranty?: Maybe<Locale>;
};

export type GwpProductLogStateAuthor = {
  __typename?: 'GwpProductLogStateAuthor';
  email?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type GwpProductResponse = GwpProduct | GwpProductLocale;

export type GwpProductStateLogs = {
  __typename?: 'GwpProductStateLogs';
  author?: Maybe<GwpProductLogStateAuthor>;
  createdDate?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type GwpReferenceInformation = {
  __typename?: 'GwpReferenceInformation';
  shipTo?: Maybe<ShoppingCartShipToType>;
  sku?: Maybe<Scalars['String']>;
};

export type GwpResponseGwpResponse = {
  __typename?: 'GwpResponseGwpResponse';
  quantityToSelected?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
};

export type GwpRule = {
  __typename?: 'GwpRule';
  gwpConditions?: Maybe<Array<Maybe<GwpCondition>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  templateType?: Maybe<Scalars['String']>;
};

export type GwpRuleInput = {
  gwpConditions?: InputMaybe<Array<InputMaybe<GwpConditionInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  ruleType?: InputMaybe<GwpEnumType>;
  templateType?: InputMaybe<GwpTemplateEnumType>;
};

export type GwpRulePayload = {
  __typename?: 'GwpRulePayload';
  gwpConditions?: Maybe<Array<Maybe<GwpConditionPayload>>>;
  templateType?: Maybe<Scalars['String']>;
};

export type GwpSetResponse = {
  __typename?: 'GwpSetResponse';
  gwpInfo?: Maybe<Array<Maybe<GwpResponseGwpResponse>>>;
  gwpSetId?: Maybe<Scalars['String']>;
  offeringMethod?: Maybe<Scalars['String']>;
  referenceSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum GwpTemplateEnumType {
  BuyAmountXGetGwp = 'BUY_AMOUNT_X_GET_GWP',
  BuyAAndAnyItemGetGwp = 'BUY_A_AND_ANY_ITEM_GET_GWP',
  BuyItemXGetGwp = 'BUY_ITEM_X_GET_GWP'
}

export type GwpWithQuantityResponse = {
  __typename?: 'GwpWithQuantityResponse';
  gwps?: Maybe<Array<Maybe<SelectedGwpResponse>>>;
  quantity?: Maybe<Scalars['Int']>;
};

export type GwpsProductResponse = {
  __typename?: 'GwpsProductResponse';
  data?: Maybe<Array<Maybe<GwpProductResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HomePagePartInput = {
  bestCollectionBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  brandBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  categoryBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  categoryBeautyBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  categoryElectronicBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  categoryFashionBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  heroBanners?: InputMaybe<Array<InputMaybe<HomepageImageInput>>>;
  productCollections?: InputMaybe<Array<InputMaybe<CollectionHomepageInput>>>;
  promotionBanners?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  shopByCategories?: InputMaybe<Array<InputMaybe<ShopByCategoryHomepageInput>>>;
};

export type HomePagePartResponse = {
  __typename?: 'HomePagePartResponse';
  bestCollectionBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  brandBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  categoryBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  categoryBeautyBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  categoryElectronicBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  categoryFashionBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  heroBanners?: Maybe<Array<Maybe<HomepageImageResponse>>>;
  productCollections?: Maybe<Array<Maybe<CollectionHomepageResponse>>>;
  promotionBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  shopByCategories?: Maybe<Array<Maybe<ShopByCategoryResponse>>>;
};

export type HomePagePlatformInput = {
  desktop?: InputMaybe<HomePagePlatformLocaleInput>;
  mobile?: InputMaybe<HomePagePlatformLocaleInput>;
};

export type HomePagePlatformLocaleInput = {
  cn?: InputMaybe<HomePagePartInput>;
  en?: InputMaybe<HomePagePartInput>;
  th?: InputMaybe<HomePagePartInput>;
};

export type HomePagePlatformLocaleResponse = {
  __typename?: 'HomePagePlatformLocaleResponse';
  cn?: Maybe<HomePagePartResponse>;
  en?: Maybe<HomePagePartResponse>;
  th?: Maybe<HomePagePartResponse>;
};

export type HomePagePlatformResponse = {
  __typename?: 'HomePagePlatformResponse';
  desktop?: Maybe<HomePagePlatformLocaleResponse>;
  mobile?: Maybe<HomePagePlatformLocaleResponse>;
};

export type HomepageBackOffice = ContentInformationResponse & {
  __typename?: 'HomepageBackOffice';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  homepage?: Maybe<HomepageBackofficeResponse>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
};

export type HomepageBackofficeResponse = {
  __typename?: 'HomepageBackofficeResponse';
  android?: Maybe<HomePagePlatformResponse>;
  ios?: Maybe<HomePagePlatformResponse>;
  web?: Maybe<HomePagePlatformResponse>;
};

export type HomepageImageInput = {
  image?: InputMaybe<ImageInput>;
  isDisplayed?: InputMaybe<Scalars['Boolean']>;
  reference?: InputMaybe<Scalars['String']>;
};

export type HomepageImageResponse = {
  __typename?: 'HomepageImageResponse';
  image?: Maybe<ImagePayload>;
  isDisplayed?: Maybe<Scalars['Boolean']>;
  reference?: Maybe<Scalars['String']>;
};

export type HomepageInput = {
  android?: InputMaybe<HomePagePlatformInput>;
  ios?: InputMaybe<HomePagePlatformInput>;
  web?: InputMaybe<HomePagePlatformInput>;
};

export type HomepageResponse = {
  __typename?: 'HomepageResponse';
  desktop?: Maybe<HomePagePartResponse>;
  mobile?: Maybe<HomePagePartResponse>;
};

export type Homepages = ContentBackOfficeResponse & {
  __typename?: 'Homepages';
  author?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isLive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};

export type HotWord = {
  __typename?: 'HotWord';
  url?: Maybe<Scalars['String']>;
  word?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  baseUri?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ImageGwpInput = {
  baseUri?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ImageInput = {
  baseUri?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type ImageLocaleInput = {
  cn?: InputMaybe<CmsImageInput>;
  en: CmsImageInput;
  th?: InputMaybe<CmsImageInput>;
};

export type ImageLocaleResponse = {
  __typename?: 'ImageLocaleResponse';
  cn?: Maybe<CmsImageResponse>;
  en?: Maybe<CmsImageResponse>;
  th?: Maybe<CmsImageResponse>;
};

export type ImagePayload = {
  __typename?: 'ImagePayload';
  baseUri?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export enum ImageSizeEnumType {
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE'
}

export type Keyword = {
  __typename?: 'Keyword';
  keyword?: Maybe<Scalars['String']>;
};

export type LimitByBrandResponse = {
  __typename?: 'LimitByBrandResponse';
  brand?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Int']>;
  limitByLoyaltyLevels?: Maybe<Array<Maybe<LimitByLoyaltyLevelResponse>>>;
  sapCategory?: Maybe<Scalars['String']>;
};

export enum LimitByBrandSortableFieldEnum {
  Brand = 'BRAND',
  Sapcategory = 'SAPCATEGORY'
}

export type LimitByBrandsResponse = {
  __typename?: 'LimitByBrandsResponse';
  data?: Maybe<Array<Maybe<LimitByBrandResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LimitByLoyaltyLevelResponse = {
  __typename?: 'LimitByLoyaltyLevelResponse';
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Float']>;
  loyaltyLabel?: Maybe<Scalars['String']>;
  loyaltyLevel?: Maybe<Scalars['String']>;
};

export type LimitProductGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  endTimestamp: Scalars['Float'];
  groupName?: InputMaybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  limitBy: OrderLimitByType;
  limitQty?: InputMaybe<Scalars['String']>;
  limitQuantities: OrderLimitQuantitieTypeInput;
  message?: InputMaybe<LocaleInput>;
  popupMessage?: InputMaybe<LocaleInput>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startTimestamp: Scalars['Float'];
};

export type LimitProductGroupResponse = {
  __typename?: 'LimitProductGroupResponse';
  description?: Maybe<Scalars['String']>;
  endTimestamp?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  limitBy?: Maybe<OrderLimitByType>;
  limitQty?: Maybe<Scalars['String']>;
  limitQuantities?: Maybe<OrderLimitQuantitieTypeResponse>;
  message?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  popupMessage?: Maybe<Locale>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
  startTimestamp?: Maybe<Scalars['Float']>;
};

export type LimitProductGroupsResponse = {
  __typename?: 'LimitProductGroupsResponse';
  data?: Maybe<Array<Maybe<LimitProductGroupResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** Language */
export type Locale = {
  __typename?: 'Locale';
  cn?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  th?: Maybe<Scalars['String']>;
};

export type LocaleInput = {
  cn?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
  th?: InputMaybe<Scalars['String']>;
};

export enum LocaleType {
  Cn = 'CN',
  En = 'EN',
  Th = 'TH'
}

export type LogInstalmentProductLog = {
  __typename?: 'LogInstalmentProductLog';
  createdDate?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Boolean']>;
};

export type LogProductLogType = LogInstalmentProductLog;

export type MegaMenu = {
  __typename?: 'MegaMenu';
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<MegaMenuData>>>;
};

export type MegaMenuBackOffice = ContentInformationResponse & {
  __typename?: 'MegaMenuBackOffice';
  author?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  subMenus?: Maybe<SubMegaMenuLocale>;
};

export type MegaMenuData = {
  __typename?: 'MegaMenuData';
  columns?: Maybe<Array<Maybe<SubMegaMenuChildColumn>>>;
  navigationName?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  subMegaMenuType?: Maybe<SubMegaMenuType>;
};

export type MegaMenuDataInput = {
  columns?: InputMaybe<Array<InputMaybe<SubMegaMenuChildColumnInput>>>;
  navigationName?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Int']>;
  subMegaMenuType?: InputMaybe<SubMegaMenuType>;
};

export type MegaMenus = ContentBackOfficeResponse & {
  __typename?: 'MegaMenus';
  author?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isLive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};

export type Member = {
  __typename?: 'Member';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type MemberDiscountByLoyaltyLevelResponse = {
  __typename?: 'MemberDiscountByLoyaltyLevelResponse';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  loyaltyLabel?: Maybe<Scalars['String']>;
  loyaltyLevel?: Maybe<Scalars['String']>;
};

export type MemberDiscountResponse = {
  __typename?: 'MemberDiscountResponse';
  brand?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Int']>;
  memberDiscountByLoyaltyLevels?: Maybe<Array<Maybe<MemberDiscountByLoyaltyLevelResponse>>>;
  sapCategory?: Maybe<Scalars['String']>;
};

export type MemberDiscountsResponse = {
  __typename?: 'MemberDiscountsResponse';
  data?: Maybe<Array<Maybe<MemberDiscountResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum MemberEPurseTypeEnum {
  Corporate = 'CORPORATE',
  Topup = 'TOPUP'
}

export type MemberKpiAddress = {
  __typename?: 'MemberKPIAddress';
  home?: Maybe<MemberKpiHomeAddress>;
};

export type MemberKpiHomeAddress = {
  __typename?: 'MemberKPIHomeAddress';
  country?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  lane?: Maybe<Scalars['String']>;
  moo?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  road?: Maybe<Scalars['String']>;
  subDistrict?: Maybe<Scalars['String']>;
  village?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type MemberKpiLoyaltyCard = {
  __typename?: 'MemberKPILoyaltyCard';
  embossId?: Maybe<Scalars['String']>;
  embossName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  groupCode?: Maybe<Scalars['String']>;
  statusName?: Maybe<Scalars['String']>;
  typeCode?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
};

export type MemberKpiName = {
  __typename?: 'MemberKPIName';
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MemberKpiNameLocale = {
  __typename?: 'MemberKPINameLocale';
  firstName?: Maybe<Locale>;
  fullName?: Maybe<Locale>;
  lastName?: Maybe<Locale>;
  title?: Maybe<Locale>;
};

export type MemberKpiResponse = {
  __typename?: 'MemberKPIResponse';
  address?: Maybe<MemberKpiAddress>;
  citizenId?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  loyaltyCards?: Maybe<Array<Maybe<MemberKpiLoyaltyCard>>>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<SelectMemberNameLocaleType>;
  nationality?: Maybe<Scalars['String']>;
  passport?: Maybe<Scalars['String']>;
  ssoId?: Maybe<Scalars['String']>;
  usableLoyaltyCard?: Maybe<MemberKpiLoyaltyCard>;
};

export type MemberLocale = {
  __typename?: 'MemberLocale';
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
};

export type MemberLoyaltyCard = {
  __typename?: 'MemberLoyaltyCard';
  card?: Maybe<CardTypeResponse>;
  discount?: Maybe<Scalars['Float']>;
  embossId?: Maybe<Scalars['String']>;
  embossName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Float']>;
  groupCode?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  typeCode?: Maybe<Scalars['String']>;
};


export type MemberLoyaltyCardCardArgs = {
  lang?: InputMaybe<LocaleType>;
};

export type MemberLoyaltyValueCarat = {
  __typename?: 'MemberLoyaltyValueCarat';
  caratItems?: Maybe<Array<Maybe<CaratItem>>>;
  total?: Maybe<Scalars['Float']>;
};

export type MemberLoyaltyValueEPurse = {
  __typename?: 'MemberLoyaltyValueEPurse';
  availableAmount?: Maybe<Scalars['Float']>;
  corporateAmount?: Maybe<Scalars['Float']>;
  ePurseItems?: Maybe<Array<Maybe<EPurseItem>>>;
  topupAmount?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type MemberResourceResponse = Member | MemberLocale;

export type MemberResponse = {
  __typename?: 'MemberResponse';
  birthDate?: Maybe<Scalars['Float']>;
  carat?: Maybe<MemberLoyaltyValueCarat>;
  citizenId?: Maybe<Scalars['String']>;
  ePurse?: Maybe<MemberLoyaltyValueEPurse>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  loyaltyCard?: Maybe<MemberLoyaltyCard>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Locale>;
  nationality?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  phoneCodeResource?: Maybe<PhoneCodeResponse>;
  status?: Maybe<Scalars['String']>;
  /** @deprecated use loyaltyCard instead */
  typeCode?: Maybe<Scalars['String']>;
  /** @deprecated use name instead */
  typeName?: Maybe<Scalars['String']>;
  verifiedDate?: Maybe<Scalars['Float']>;
  verifiedMethod?: Maybe<Scalars['String']>;
};


export type MemberResponsePhoneCodeResourceArgs = {
  lang?: InputMaybe<LocaleType>;
};

export enum MemberVerificationEnumType {
  Easypass = 'EASYPASS',
  Email = 'EMAIL',
  Otp = 'OTP'
}

export type Meta = {
  __typename?: 'Meta';
  facebook?: Maybe<Facebook>;
  id?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  type?: Maybe<Scalars['String']>;
};

export type MetaLocale = {
  __typename?: 'MetaLocale';
  facebook?: Maybe<FacebookLocale>;
  id?: Maybe<Scalars['String']>;
  seo?: Maybe<SeoLocale>;
  type?: Maybe<Scalars['String']>;
};

export type MetaPayload = {
  __typename?: 'MetaPayload';
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MetaResponse = Meta | MetaLocale;

export enum MetaTypeEnum {
  Brand = 'BRAND'
}

/** Metadata Single language */
export type Metadata = {
  __typename?: 'Metadata';
  description?: Maybe<Scalars['String']>;
  prettyUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Metadata input Single language */
export type MetadataInput = {
  description?: InputMaybe<Scalars['String']>;
  prettyUrl: Scalars['String'];
  title: Scalars['String'];
};

export type ModalBanner = {
  __typename?: 'ModalBanner';
  desktopImage?: Maybe<CmsImageResponse>;
  mobileImage?: Maybe<CmsImageResponse>;
};

export type ModalBannerBackOffice = ContentInformationResponse & {
  __typename?: 'ModalBannerBackOffice';
  author?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  desktopImages?: Maybe<ImageLocaleResponse>;
  id?: Maybe<Scalars['String']>;
  mobileImages?: Maybe<ImageLocaleResponse>;
  name?: Maybe<Scalars['String']>;
  platform?: Maybe<PlatformResponse>;
  status?: Maybe<Scalars['String']>;
};

export type ModalBanners = ContentBackOfficeResponse & {
  __typename?: 'ModalBanners';
  author?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};

export type MoveResult = {
  __typename?: 'MoveResult';
  belongToSku?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
};

export type MovementResult = {
  __typename?: 'MovementResult';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  moveResults?: Maybe<Array<Maybe<MoveResult>>>;
};

export type MultipleUpdateProductStateInput = {
  remark?: InputMaybe<Scalars['String']>;
  skus: Array<InputMaybe<Scalars['String']>>;
  state: ProductStateFieldEnum;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptConsent?: Maybe<AcceptConsentPayload>;
  addBrandMicrositeCategoryProducts?: Maybe<BrandCategoryProductsPayload>;
  addCartItem?: Maybe<CartPayload>;
  addCartMeItem?: Maybe<CartPayload>;
  addCartMePromoCode?: Maybe<CartPayload>;
  addCartPromoCode?: Maybe<CartPayload>;
  addCustomerAddress?: Maybe<CustomerAddressPayload>;
  addGuestCartItem?: Maybe<CartPayload>;
  addGuestCartPromoCode?: Maybe<CartPayload>;
  addWishlistItem?: Maybe<AddWishlistItemResponse>;
  batchUpdateQuantityStock?: Maybe<StocksPayload>;
  cancelOrder?: Maybe<OrderPayload>;
  changePassword?: Maybe<ChangePasswordResponse>;
  checkExistingProvider?: Maybe<ProviderExistingResponse>;
  createAttribute?: Maybe<AttributesPayload>;
  createBannerFloating?: Maybe<ContentPayload>;
  createBannerModal?: Maybe<ContentPayload>;
  createBrand?: Maybe<BrandPayload>;
  createBrandMicrositeCategory?: Maybe<BrandCategoryPayload>;
  createCartMe?: Maybe<CartPayload>;
  createCollection?: Maybe<CollectionPayload>;
  createCustomerPrivilege?: Maybe<CreateCustomerPrivilegePayload>;
  createDealDuration?: Maybe<DealDurationPayload>;
  createGuestCart?: Maybe<CartPayload>;
  createGwpByFile?: Maybe<TaskRegister>;
  createHomepage?: Maybe<ContentPayload>;
  createLimitProductGroup?: Maybe<OrderSimplePayload>;
  createMegaMenu?: Maybe<ContentPayload>;
  createMember?: Maybe<CreateMemberPayload>;
  createMemberCardWithPrivilege?: Maybe<CreateMemberCardWithPrivilegePayload>;
  createMemberWithPassport?: Maybe<CreateMemberPayload>;
  createNewUser?: Maybe<AuthenticationUserPayload>;
  createOrderComment?: Maybe<OrderSimplePayload>;
  createOrderEventLog?: Maybe<OrderSimplePayload>;
  createOrderPlaceOrder?: Maybe<OrderPaidPayload>;
  createOrderReOrder?: Maybe<OrderPayload>;
  createOrderTaxRequestBusiness?: Maybe<OrderPayload>;
  createOrderTaxRequestPersonal?: Maybe<OrderPayload>;
  createPassword?: Maybe<CreatePasswordResponse>;
  createPowerDeal?: Maybe<ContentPayload>;
  createPremiumBrand?: Maybe<ContentPayload>;
  createProductByFile?: Maybe<TaskRegister>;
  createPromotionCampaign?: Maybe<PromotionCampaignPayload>;
  createPromotionCartRule?: Maybe<PromotionCartRulePayload>;
  createPromotionGwp?: Maybe<PromotionGwpPayload>;
  createPromotionShipping?: Maybe<PromotionShippingPayload>;
  createSizeChart?: Maybe<SizeChartPayload>;
  createStaticPage?: Maybe<ContentPayload>;
  createStaticPagePreview?: Maybe<CreateStaticPagePreviewPayload>;
  createSubBrandMicrositeCategory?: Maybe<BrandCategoryPayload>;
  createTag?: Maybe<TagPayload>;
  delectCollection?: Maybe<DeleteCollectionPayload>;
  deleteAllCartPromoCode?: Maybe<CartPayload>;
  deleteAttributeValue?: Maybe<DeleteAttributePayload>;
  deleteBrand?: Maybe<BrandPayload>;
  deleteCartItem?: Maybe<CartPayload>;
  deleteCartMeItem?: Maybe<CartPayload>;
  deleteCartMePromoCode?: Maybe<CartPayload>;
  deleteCartMePromoCodesReject?: Maybe<CartPayload>;
  deleteCartPromoCode?: Maybe<CartPayload>;
  deleteContent?: Maybe<Array<Maybe<ContentPayload>>>;
  deleteCustomerAdddress?: Maybe<CustomerAddressPayload>;
  deleteGuestCartItem?: Maybe<CartPayload>;
  deleteGuestCartPromoCode?: Maybe<CartPayload>;
  deleteMember?: Maybe<DeleteMemberPayload>;
  deleteProduct?: Maybe<ProductPayload>;
  deletePromotionCampaign?: Maybe<PromotionPayload>;
  deletePromotionCartRule?: Maybe<PromotionPayload>;
  deletePromotionCodes?: Maybe<Array<Maybe<PromotionPayload>>>;
  deletePromotionGwp?: Maybe<PromotionPayload>;
  deletePromotionShipping?: Maybe<PromotionPayload>;
  deleteWishlistItem?: Maybe<DeleteWishlistItemResponse>;
  duplicateHomepage?: Maybe<ContentPayload>;
  duplicateMegaMenu?: Maybe<ContentPayload>;
  duplicatePremiumBrand?: Maybe<ContentPayload>;
  duplicateProductByFile?: Maybe<DuplicateProductResponse>;
  forgotPasswordByEmail?: Maybe<ForgotPasswordResponse>;
  forgotPasswordBySms?: Maybe<ForgotPasswordResponse>;
  linkProvider?: Maybe<ProviderLinkUnlinkResponse>;
  loginProvider?: Maybe<LoginResponse>;
  markReadOrder?: Maybe<OrderPayload>;
  multipleUpdateDealDurationActive?: Maybe<Array<Maybe<DealDurationPayload>>>;
  multipleUpdateProduct?: Maybe<ProductsPayload>;
  multipleUpdateProductState?: Maybe<ProductsPayload>;
  multipleUpdateSizeChartStatus?: Maybe<Array<Maybe<SizeChartPayload>>>;
  refreshToken?: Maybe<LoginResponse>;
  register?: Maybe<LoginResponse>;
  registerMemberWithPrivilege?: Maybe<RegisterMemberWithPrivilegePayload>;
  registerProvider?: Maybe<LoginResponse>;
  removeBrandMicrositeCategory?: Maybe<BrandCategoryPayload>;
  removeBrandMicrositeCategoryProducts?: Maybe<BrandCategoryProductsPayload>;
  removeSubBrandMicrositeCategory?: Maybe<BrandCategoryPayload>;
  replaceBrandMicrositeCategoryProducts?: Maybe<BrandCategoryProductsPayload>;
  requestMemberVerification?: Maybe<RequestMemberVerificationPayload>;
  requestRegisterMemberWithPrivilegeVerification?: Maybe<RequestRegisterMemberWithPrivilegeVerificationPayload>;
  resendEmailToCartRule?: Maybe<ResendEmailToCartRulePayload>;
  resendEmailWelcome?: Maybe<ResendEmailPayload>;
  resendOrderEmail?: Maybe<OrderPayload>;
  resetPassword?: Maybe<CreatePasswordResponse>;
  sendSmsRepaymentBackOffice?: Maybe<OrderPayload>;
  setMultipleSkusDealDurationByFile?: Maybe<DealDurationPayload>;
  setMultipleSkusSizeChartByFile?: Maybe<SizeChartPayload>;
  setMultipleSkusTagByFile?: Maybe<TagPayload>;
  setProductExcludeEarnCaratRulePayload?: Maybe<RuleResponsePayload>;
  setProductExcludeInstalmentRulePayload?: Maybe<RuleResponsePayload>;
  setProductExcludeRedeemCaratRulePayload?: Maybe<RuleResponsePayload>;
  subscribeByEmaillList?: Maybe<Array<Maybe<SubscriptionPayload>>>;
  subscribeNewsLetter?: Maybe<Array<Maybe<SubscriptionPayload>>>;
  syncGwpsImagesBySkus?: Maybe<SyncGwpsImagesResponse>;
  syncProductsImagesBySkus?: Maybe<SyncProductsImagesResponse>;
  unlinkProvider?: Maybe<ProviderLinkUnlinkResponse>;
  unsubscribeByEmaillList?: Maybe<Array<Maybe<SubscriptionPayload>>>;
  unsubscribeNewsLetter?: Maybe<Array<Maybe<SubscriptionPayload>>>;
  updateAttribute?: Maybe<AttributesPayload>;
  updateAttributesStatus?: Maybe<Array<Maybe<AttributesPayload>>>;
  updateBannerFloating?: Maybe<ContentPayload>;
  updateBannerModal?: Maybe<ContentPayload>;
  updateBrand?: Maybe<BrandPayload>;
  updateBrandMicrositeCategory?: Maybe<BrandCategoryPayload>;
  updateCartBurnCarat?: Maybe<CartPayload>;
  updateCartDisableBurnCarat?: Maybe<VerifyBurnCaratPayload>;
  updateCartEnableBurnCarat?: Maybe<VerifyBurnCaratPayload>;
  updateCartEnableBurnCaratWithPassport?: Maybe<VerifyBurnCaratPayload>;
  /** back-office. */
  updateCartFlightInfo?: Maybe<CartPayload>;
  updateCartGwpAcknowledge?: Maybe<CartPayload>;
  updateCartGwpCheckoutConfirm?: Maybe<CartPayload>;
  updateCartItem?: Maybe<CartPayload>;
  updateCartMeBilling?: Maybe<CartPayload>;
  updateCartMeFlightInfo?: Maybe<CartPayload>;
  updateCartMeFlightPersonalInfo?: Maybe<CartPayload>;
  updateCartMeGwpAcknowledgeQuantity?: Maybe<CartPayload>;
  updateCartMeItem?: Maybe<CartPayload>;
  updateCartMeItems?: Maybe<CartPayload>;
  updateCartMeMerge?: Maybe<CartPayload>;
  updateCartMeShipping?: Maybe<CartPayload>;
  /** back-office. */
  updateCartPersonalInfo?: Maybe<CartPayload>;
  /** back-office. */
  updateCartShipping?: Maybe<CartPayload>;
  updateCollection?: Maybe<CollectionPayload>;
  updateCollectionStatus?: Maybe<Array<Maybe<UpdateCollectionPayload>>>;
  updateContentStatus?: Maybe<Array<Maybe<ContentPayload>>>;
  updateCustomer?: Maybe<CustomerPayload>;
  updateCustomerAddress?: Maybe<CustomerAddressPayload>;
  updateCustomerStatusLock?: Maybe<CustomerPayload>;
  updateDealDuration?: Maybe<DealDurationPayload>;
  updateGuestCartFlightInfo?: Maybe<CartPayload>;
  updateGuestCartItem?: Maybe<CartPayload>;
  updateGuestCartItems?: Maybe<CartPayload>;
  updateGwpByFile?: Maybe<TaskRegister>;
  updateGwpProductImageByTag?: Maybe<UploadGwpsProductPayload>;
  updateHomepage?: Maybe<ContentPayload>;
  updateLimitProduct?: Maybe<OrderSimplePayload>;
  updateLimitProductGroup?: Maybe<OrderSimplePayload>;
  updateMegaMenu?: Maybe<ContentPayload>;
  updateOrderAcquisitionExpire?: Maybe<OrderAcquisitionPayload>;
  updateOrderAddress?: Maybe<OrderPayload>;
  updateOrderReOrder?: Maybe<ReOrderResponse>;
  updateOrderStatus?: Maybe<OrderPayload>;
  updatePowerDeal?: Maybe<ContentPayload>;
  updatePowerDealCollection?: Maybe<ContentPayload>;
  updatePremiumBrand?: Maybe<ContentPayload>;
  updatePreset?: Maybe<AuthorizationPresetPayload>;
  updateProduct?: Maybe<ProductsPayload>;
  updateProductByFile?: Maybe<TaskRegister>;
  updateProductImageByTag?: Maybe<ProductsPayload>;
  updateProductInstalment?: Maybe<ProductsPayload>;
  updateProductRelationByFile?: Maybe<TaskRegister>;
  updatePromotionCampaign?: Maybe<PromotionCampaignPayload>;
  updatePromotionCampaignAction?: Maybe<Array<Maybe<PromotionPayload>>>;
  updatePromotionCampaignRule?: Maybe<PromotionCampaignPayload>;
  updatePromotionCart?: Maybe<PromotionPayload>;
  updatePromotionCartRule?: Maybe<PromotionCartRulePayload>;
  updatePromotionCartRuleAction?: Maybe<Array<Maybe<PromotionPayload>>>;
  updatePromotionGwp?: Maybe<PromotionGwpPayload>;
  updatePromotionGwpAction?: Maybe<Array<Maybe<PromotionPayload>>>;
  updatePromotionGwpRule?: Maybe<PromotionGwpPayload>;
  updatePromotionShipping?: Maybe<PromotionShippingPayload>;
  updatePromotionShippingAction?: Maybe<Array<Maybe<PromotionPayload>>>;
  updatePromotionShippingRule?: Maybe<PromotionShippingPayload>;
  updateSapCategoryByFile?: Maybe<SapCategoryCreateUpdateResponse>;
  updateSelectionAttributeValuesByFile?: Maybe<UpdateSelectionAttributeValuesPayload>;
  updateSizeChart?: Maybe<SizeChartPayload>;
  updateStaticPage?: Maybe<ContentPayload>;
  /** Update price of many sku that already in stock by CSV file */
  updateStockPriceByFile?: Maybe<StocksPayload>;
  updateStockQuantityByFile?: Maybe<StocksPayload>;
  updateSubBrandMicrositeCategory?: Maybe<BrandCategoryPayload>;
  updateTag?: Maybe<TagPayload>;
  updateTags?: Maybe<TaskRegister>;
  updateUserDetails?: Maybe<AuthenticationUserPayload>;
  uploadBrandCollectionFile?: Maybe<Array<Maybe<BrandCollectionResponse>>>;
  uploadCardTypeFile?: Maybe<UploadCsvPayload>;
  uploadCategoryFile?: Maybe<CategoryLocale>;
  uploadErrorMessageFile?: Maybe<UploadCsvPayload>;
  uploadImage?: Maybe<ImagePayload>;
  uploadImageFile?: Maybe<ImagePayload>;
  uploadMemberDiscountFile?: Maybe<UploadMemberDiscountPayload>;
  uploadMetaFile?: Maybe<MetaPayload>;
  uploadNationalityFile?: Maybe<UploadCsvPayload>;
  uploadPhoneCodeFile?: Maybe<UploadCsvPayload>;
  uploadPromotionCodeFile?: Maybe<UploadPromotionCodePayload>;
  uploadShippingAddressFile?: Maybe<UploadCsvPayload>;
  uploadShippingFile?: Maybe<UploadShippingPayload>;
  uploadTitleFile?: Maybe<UploadCsvPayload>;
  uploadlimitByBrandFile?: Maybe<UploadLimitByBrandPayload>;
  userForgotPassword?: Maybe<UserForgotPasswordResponse>;
  validateCustomerPrivilege?: Maybe<ValidateCustomerPrivilegePayload>;
  verifyMemberWithEasyPass?: Maybe<VerifyMemberPayload>;
  verifyMemberWithOtp?: Maybe<VerifyMemberPayload>;
  verifyMemberWithPersonalInformation?: Maybe<VerifyMemberPayload>;
  verifyMemberWithToken?: Maybe<VerifyMemberPayload>;
  verifyRegisterMemberWithPrivilegeWithOtp?: Maybe<VerifyRegisterMemberWithPrivilegePayload>;
};


export type MutationAcceptConsentArgs = {
  input: AcceptConsentInput;
};


export type MutationAddBrandMicrositeCategoryProductsArgs = {
  input: AddBrandMicrositeCategoryProductsInput;
};


export type MutationAddCartItemArgs = {
  input: AddCartMeItemInput;
};


export type MutationAddCartMeItemArgs = {
  input: AddCartMeItemInput;
};


export type MutationAddCartMePromoCodeArgs = {
  promoCode: Scalars['String'];
};


export type MutationAddCartPromoCodeArgs = {
  input: CartPromocodeInput;
};


export type MutationAddCustomerAddressArgs = {
  input: AddAddressInput;
};


export type MutationAddGuestCartItemArgs = {
  input: AddCartMeItemInput;
};


export type MutationAddGuestCartPromoCodeArgs = {
  input: GuestCartPromoCodeInput;
};


export type MutationAddWishlistItemArgs = {
  input: AddWishlistItemInput;
};


export type MutationBatchUpdateQuantityStockArgs = {
  input?: InputMaybe<Array<InputMaybe<StockUpdateQuantityInput>>>;
  remark?: InputMaybe<Scalars['String']>;
};


export type MutationCancelOrderArgs = {
  input: OrderCancelInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCheckExistingProviderArgs = {
  input: ProviderExistingInput;
};


export type MutationCreateAttributeArgs = {
  input?: InputMaybe<AttributeInput>;
};


export type MutationCreateBannerFloatingArgs = {
  input: CreateBannerFloatingInput;
};


export type MutationCreateBannerModalArgs = {
  input: CreateBannerModalInput;
};


export type MutationCreateBrandArgs = {
  input: BrandInput;
};


export type MutationCreateBrandMicrositeCategoryArgs = {
  input: BrandMicrositeCategoryInput;
};


export type MutationCreateCartMeArgs = {
  storeId: Scalars['String'];
};


export type MutationCreateCollectionArgs = {
  input?: InputMaybe<CreateCollectionInput>;
};


export type MutationCreateCustomerPrivilegeArgs = {
  input: CreateCustomerPrivilegeInput;
};


export type MutationCreateDealDurationArgs = {
  input: CreateDealDurarionInput;
};


export type MutationCreateGuestCartArgs = {
  storeId: Scalars['String'];
};


export type MutationCreateHomepageArgs = {
  input: CreateHomepageInput;
};


export type MutationCreateLimitProductGroupArgs = {
  input: LimitProductGroupInput;
};


export type MutationCreateMegaMenuArgs = {
  input: CreateMegaMenuInput;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};


export type MutationCreateMemberCardWithPrivilegeArgs = {
  input: CreateMemberCardWithPrivilegeInput;
};


export type MutationCreateMemberWithPassportArgs = {
  input: CreateMemberWithPassportInput;
};


export type MutationCreateNewUserArgs = {
  input: CreateNewUserInput;
};


export type MutationCreateOrderCommentArgs = {
  input: CreateOrderCommentInput;
};


export type MutationCreateOrderEventLogArgs = {
  input: CreateOrderEventLogInput;
};


export type MutationCreateOrderPlaceOrderArgs = {
  input: CreatePlaceOrderInput;
};


export type MutationCreateOrderReOrderArgs = {
  input: CreateOrderReOrderInput;
};


export type MutationCreateOrderTaxRequestBusinessArgs = {
  input: TaxInvoiceRequestBusinessInput;
};


export type MutationCreateOrderTaxRequestPersonalArgs = {
  input: TaxInvoiceRequestPersonalInput;
};


export type MutationCreatePasswordArgs = {
  input?: InputMaybe<CreatePasswordInput>;
};


export type MutationCreatePowerDealArgs = {
  input: CreatePowerDealInput;
};


export type MutationCreatePremiumBrandArgs = {
  input: CreatePremiumBrandInput;
};


export type MutationCreatePromotionCampaignArgs = {
  input?: InputMaybe<PromotionCampaignInput>;
};


export type MutationCreatePromotionCartRuleArgs = {
  input?: InputMaybe<PromotionCartRuleInput>;
};


export type MutationCreatePromotionGwpArgs = {
  input?: InputMaybe<CreatePromotionGwpInput>;
};


export type MutationCreatePromotionShippingArgs = {
  input?: InputMaybe<CreatePromotionShippingInput>;
};


export type MutationCreateSizeChartArgs = {
  input: CreateSizeChartInput;
};


export type MutationCreateStaticPageArgs = {
  input: CreateStaticPageInput;
};


export type MutationCreateStaticPagePreviewArgs = {
  input: CreateStaticPageInput;
};


export type MutationCreateSubBrandMicrositeCategoryArgs = {
  input: SubBrandMicrositeCategoryInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationDelectCollectionArgs = {
  name: Scalars['String'];
};


export type MutationDeleteAllCartPromoCodeArgs = {
  cartDisplayId: Scalars['String'];
};


export type MutationDeleteAttributeValueArgs = {
  input?: InputMaybe<DeleteAttributeInput>;
};


export type MutationDeleteBrandArgs = {
  input: DeleteBrandInput;
};


export type MutationDeleteCartItemArgs = {
  input: DeleteCartItemInput;
};


export type MutationDeleteCartMeItemArgs = {
  input: DeleteCartMeItemInput;
};


export type MutationDeleteCartMePromoCodeArgs = {
  promoCode: Scalars['String'];
};


export type MutationDeleteCartMePromoCodesRejectArgs = {
  cartDisplayId: Scalars['String'];
};


export type MutationDeleteCartPromoCodeArgs = {
  input: CartPromocodeInput;
};


export type MutationDeleteContentArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDeleteCustomerAdddressArgs = {
  input: DeleteCustomerInput;
};


export type MutationDeleteGuestCartItemArgs = {
  input: DeleteGuestCartItemInput;
};


export type MutationDeleteGuestCartPromoCodeArgs = {
  input: GuestCartPromoCodeInput;
};


export type MutationDeleteMemberArgs = {
  input?: InputMaybe<DeleteMemberInput>;
};


export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


export type MutationDeletePromotionCampaignArgs = {
  campaignId: Scalars['String'];
};


export type MutationDeletePromotionCartRuleArgs = {
  cartRuleId: Scalars['String'];
};


export type MutationDeletePromotionCodesArgs = {
  ids: Array<InputMaybe<Scalars['String']>>;
};


export type MutationDeletePromotionGwpArgs = {
  gwpId: Scalars['String'];
};


export type MutationDeletePromotionShippingArgs = {
  shippingId: Scalars['String'];
};


export type MutationDeleteWishlistItemArgs = {
  input: DeleteWishlistItemInput;
};


export type MutationDuplicateHomepageArgs = {
  input: DuplicateHomepageInput;
};


export type MutationDuplicateMegaMenuArgs = {
  input: DuplicateMegaMenuInput;
};


export type MutationDuplicatePremiumBrandArgs = {
  input: DuplicatePremiumBrandInput;
};


export type MutationForgotPasswordByEmailArgs = {
  input: ForgotPasswordByEmailInput;
};


export type MutationForgotPasswordBySmsArgs = {
  input: ForgotPasswordBySmsInput;
};


export type MutationLinkProviderArgs = {
  input: ProviderInformationInput;
};


export type MutationLoginProviderArgs = {
  input: ProviderLoginInput;
};


export type MutationMarkReadOrderArgs = {
  orderId: Scalars['String'];
};


export type MutationMultipleUpdateDealDurationActiveArgs = {
  input?: InputMaybe<UpdateDealDurarionIsActiveInput>;
};


export type MutationMultipleUpdateProductArgs = {
  input: UpdateProductStatusAndVisibilityInput;
};


export type MutationMultipleUpdateProductStateArgs = {
  input: MultipleUpdateProductStateInput;
};


export type MutationMultipleUpdateSizeChartStatusArgs = {
  input?: InputMaybe<UpdateSizeChartStatusInput>;
};


export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRegisterMemberWithPrivilegeArgs = {
  input: RegisterMemberWithPrivilegeInput;
};


export type MutationRegisterProviderArgs = {
  input: SsoProviderRegisterInput;
};


export type MutationRemoveBrandMicrositeCategoryArgs = {
  input: RemoveBrandMicrositeCategoryInput;
};


export type MutationRemoveBrandMicrositeCategoryProductsArgs = {
  input: RemoveBrandMicrositeCategoryProductsInput;
};


export type MutationRemoveSubBrandMicrositeCategoryArgs = {
  input: RemoveSubBrandMicrositeCategoryInput;
};


export type MutationReplaceBrandMicrositeCategoryProductsArgs = {
  input: AddBrandMicrositeCategoryProductsInput;
};


export type MutationRequestMemberVerificationArgs = {
  input: RequestMemberVerificationInput;
};


export type MutationRequestRegisterMemberWithPrivilegeVerificationArgs = {
  input: RequestRegisterMemberWithPrivilegeVerificationInput;
};


export type MutationResendEmailWelcomeArgs = {
  input: CustomerSsoIdInput;
};


export type MutationResendOrderEmailArgs = {
  orderId: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendSmsRepaymentBackOfficeArgs = {
  orderId: Scalars['String'];
};


export type MutationSetMultipleSkusDealDurationByFileArgs = {
  id: Scalars['String'];
};


export type MutationSetMultipleSkusSizeChartByFileArgs = {
  id: Scalars['String'];
};


export type MutationSetMultipleSkusTagByFileArgs = {
  name: Scalars['String'];
};


export type MutationSetProductExcludeEarnCaratRulePayloadArgs = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  options?: InputMaybe<Array<InputMaybe<Array<InputMaybe<ProductOptionRuleInput>>>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationSetProductExcludeInstalmentRulePayloadArgs = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  options?: InputMaybe<Array<InputMaybe<Array<InputMaybe<ProductOptionRuleInput>>>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationSetProductExcludeRedeemCaratRulePayloadArgs = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  options?: InputMaybe<Array<InputMaybe<Array<InputMaybe<ProductOptionRuleInput>>>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationSubscribeByEmaillListArgs = {
  input?: InputMaybe<UpdateSubscribeInput>;
};


export type MutationSubscribeNewsLetterArgs = {
  input?: InputMaybe<UpdateSubscribeInput>;
};


export type MutationSyncGwpsImagesBySkusArgs = {
  input: SyncGwpsImagesInput;
};


export type MutationSyncProductsImagesBySkusArgs = {
  input: SyncProductsImagesInput;
};


export type MutationUnlinkProviderArgs = {
  input: ProviderUnlinkInput;
};


export type MutationUnsubscribeByEmaillListArgs = {
  input?: InputMaybe<UpdateSubscribeInput>;
};


export type MutationUnsubscribeNewsLetterArgs = {
  input?: InputMaybe<UpdateSubscribeInput>;
};


export type MutationUpdateAttributeArgs = {
  input?: InputMaybe<UpdateAttributeInput>;
};


export type MutationUpdateAttributesStatusArgs = {
  input?: InputMaybe<UpdateAttributesStatusInput>;
};


export type MutationUpdateBannerFloatingArgs = {
  input: UpdateBannerFloatingInput;
};


export type MutationUpdateBannerModalArgs = {
  input: UpdateBannerModalInput;
};


export type MutationUpdateBrandArgs = {
  input: BrandInput;
};


export type MutationUpdateBrandMicrositeCategoryArgs = {
  input: BrandMicrositeCategoryInput;
};


export type MutationUpdateCartBurnCaratArgs = {
  input: UpdateCartBurnCaratInput;
};


export type MutationUpdateCartDisableBurnCaratArgs = {
  input: UpdateCartDisableBurnCaratInput;
};


export type MutationUpdateCartEnableBurnCaratArgs = {
  input: UpdateCartEnableBurnCaratInput;
};


export type MutationUpdateCartEnableBurnCaratWithPassportArgs = {
  input: UpdateCartEnableBurnCaratWithPassportInput;
};


export type MutationUpdateCartFlightInfoArgs = {
  input: UpdateCartFlightInfoInput;
};


export type MutationUpdateCartGwpAcknowledgeArgs = {
  input: UpdateCartGwpAcknowledge;
};


export type MutationUpdateCartGwpCheckoutConfirmArgs = {
  input: UpdateCartGwpCheckoutConfirm;
};


export type MutationUpdateCartItemArgs = {
  input: AddCartMeItemInput;
};


export type MutationUpdateCartMeBillingArgs = {
  addressId: Scalars['String'];
};


export type MutationUpdateCartMeFlightInfoArgs = {
  input: UpdateCartMeFlightInfoInput;
};


export type MutationUpdateCartMeFlightPersonalInfoArgs = {
  input: UpdateCartMeFlightPersonalInfoInput;
};


export type MutationUpdateCartMeGwpAcknowledgeQuantityArgs = {
  input: UpdateCartMeGwpAcknowledgeQuantity;
};


export type MutationUpdateCartMeItemArgs = {
  input: AddCartMeItemInput;
};


export type MutationUpdateCartMeItemsArgs = {
  input: UpdateCartItemsMultipleInput;
};


export type MutationUpdateCartMeMergeArgs = {
  input: CartMeMergeInput;
};


export type MutationUpdateCartMeShippingArgs = {
  addressId: Scalars['String'];
};


export type MutationUpdateCartPersonalInfoArgs = {
  input: UpdateCartFlightPersonalInfoInput;
};


export type MutationUpdateCartShippingArgs = {
  input: UpdateCartShippingInput;
};


export type MutationUpdateCollectionArgs = {
  input?: InputMaybe<UpdateCollectionInput>;
};


export type MutationUpdateCollectionStatusArgs = {
  input?: InputMaybe<UpdateCollectionStatusInput>;
};


export type MutationUpdateContentStatusArgs = {
  input?: InputMaybe<UpdateContentStatusInput>;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerStatusLockArgs = {
  input: UpdateCustomerStatusLock;
};


export type MutationUpdateDealDurationArgs = {
  input: UpdateDealDurarionInput;
};


export type MutationUpdateGuestCartFlightInfoArgs = {
  input: UpdateGuestCartFlightInfoInput;
};


export type MutationUpdateGuestCartItemArgs = {
  input: AddCartMeItemInput;
};


export type MutationUpdateGuestCartItemsArgs = {
  input: UpdateCartItemsMultipleInput;
};


export type MutationUpdateGwpProductImageByTagArgs = {
  input: UpdateGwpProductImageByTagInput;
};


export type MutationUpdateHomepageArgs = {
  input: UpdateHomepageInput;
};


export type MutationUpdateLimitProductArgs = {
  input: UpdateLimitProductGroupInput;
};


export type MutationUpdateLimitProductGroupArgs = {
  input: UpdateLimitProductGroupInput;
};


export type MutationUpdateMegaMenuArgs = {
  input: UpdateMegaMenuInput;
};


export type MutationUpdateOrderAcquisitionExpireArgs = {
  orderId: Scalars['String'];
};


export type MutationUpdateOrderAddressArgs = {
  input: UpdateOrderAddressInput;
};


export type MutationUpdateOrderReOrderArgs = {
  input: UpdateOrderReOrderInput;
};


export type MutationUpdateOrderStatusArgs = {
  input: UpdateOrderStatusInput;
};


export type MutationUpdatePowerDealArgs = {
  input: UpdatePowerDealInput;
};


export type MutationUpdatePowerDealCollectionArgs = {
  input: UpdatePowerDealCollectionInput;
};


export type MutationUpdatePremiumBrandArgs = {
  input: UpdatePremiumBrandInput;
};


export type MutationUpdatePresetArgs = {
  input: UpdatePresetInput;
};


export type MutationUpdateProductArgs = {
  input: ProductInput;
};


export type MutationUpdateProductImageByTagArgs = {
  input: UpdateProductImageByTagInput;
};


export type MutationUpdateProductInstalmentArgs = {
  input: UpdateProductInstalmentInput;
};


export type MutationUpdatePromotionCampaignArgs = {
  input?: InputMaybe<UpdatePromotionCampaignInput>;
};


export type MutationUpdatePromotionCampaignActionArgs = {
  input?: InputMaybe<UpdatePromotionActionInput>;
};


export type MutationUpdatePromotionCampaignRuleArgs = {
  input?: InputMaybe<UpdatePromotionCampaignRuleInput>;
};


export type MutationUpdatePromotionCartArgs = {
  input?: InputMaybe<UpdatePromotionCartInput>;
};


export type MutationUpdatePromotionCartRuleArgs = {
  input?: InputMaybe<UpdatePromotionCartRuleInput>;
};


export type MutationUpdatePromotionCartRuleActionArgs = {
  input?: InputMaybe<UpdatePromotionActionInput>;
};


export type MutationUpdatePromotionGwpArgs = {
  input?: InputMaybe<UpdatePromotionGwpInput>;
};


export type MutationUpdatePromotionGwpActionArgs = {
  input?: InputMaybe<UpdatePromotionActionInput>;
};


export type MutationUpdatePromotionGwpRuleArgs = {
  input?: InputMaybe<PromotionGwpRuleInput>;
};


export type MutationUpdatePromotionShippingArgs = {
  input?: InputMaybe<UpdatePromotionShippingInput>;
};


export type MutationUpdatePromotionShippingActionArgs = {
  input?: InputMaybe<UpdatePromotionActionInput>;
};


export type MutationUpdatePromotionShippingRuleArgs = {
  input?: InputMaybe<PromotionShippingRuleInput>;
};


export type MutationUpdateSelectionAttributeValuesByFileArgs = {
  id: Scalars['String'];
  sortBy: AttributeInputSort;
};


export type MutationUpdateSizeChartArgs = {
  input: UpdateSizeChartInput;
};


export type MutationUpdateStaticPageArgs = {
  input: UpdateStaticPageInput;
};


export type MutationUpdateStockPriceByFileArgs = {
  remark?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateStockQuantityByFileArgs = {
  remark?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSubBrandMicrositeCategoryArgs = {
  input: SubBrandMicrositeCategoryInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationUpdateTagsArgs = {
  input: UpdateTagsInput;
};


export type MutationUpdateUserDetailsArgs = {
  input: UpdateUserDetailsInput;
};


export type MutationUploadMetaFileArgs = {
  type: MetaTypeEnum;
};


export type MutationUserForgotPasswordArgs = {
  input: UserForgotPasswordInput;
};


export type MutationValidateCustomerPrivilegeArgs = {
  input: ValidateCustomerPrivilegeInput;
};


export type MutationVerifyMemberWithEasyPassArgs = {
  input: VerifyWithOtpInput;
};


export type MutationVerifyMemberWithOtpArgs = {
  input: VerifyWithOtpInput;
};


export type MutationVerifyMemberWithPersonalInformationArgs = {
  input: VerifyWithPersonalInformationInput;
};


export type MutationVerifyMemberWithTokenArgs = {
  input: VerifyWithTokenInput;
};


export type MutationVerifyRegisterMemberWithPrivilegeWithOtpArgs = {
  input: VerifyWithOtpInput;
};

export type NewsletterSubscriptionResponse = {
  __typename?: 'NewsletterSubscriptionResponse';
  isSubscribe?: Maybe<Scalars['Boolean']>;
};

export enum OfferingMethodEnumType {
  All = 'ALL',
  OnlyOne = 'ONLY_ONE'
}

export type OrderAcquisitionCampaign = {
  __typename?: 'OrderAcquisitionCampaign';
  cardType?: Maybe<Scalars['String']>;
  expireDate?: Maybe<Scalars['Float']>;
  /** For Order-BackOffice */
  isActive?: Maybe<Scalars['Boolean']>;
  /** For Order-BackOffice */
  logs?: Maybe<Array<Maybe<OrderBackOfficeComment>>>;
  /** For Order-BackOffice */
  orderSubtotalExcludeAlcohol?: Maybe<Scalars['Float']>;
};

export enum OrderAcquisitionInput {
  Acquisition = 'ACQUISITION'
}

export type OrderAcquisitionPayload = {
  __typename?: 'OrderAcquisitionPayload';
  expire: Scalars['Float'];
};

export type OrderAcquisitionResponse = {
  __typename?: 'OrderAcquisitionResponse';
  acquisitionLevel: Scalars['String'];
  expireDate?: Maybe<Scalars['Float']>;
  orderId: Scalars['String'];
};

export type OrderAddressInformationInput = {
  arrivalFlight?: InputMaybe<OrderFlightAddressInput>;
  billingAddress?: InputMaybe<OrderBillingAddressInput>;
  departureFlight?: InputMaybe<OrderFlightAddressInput>;
  shippingAddress?: InputMaybe<OrderShippingAddressInput>;
};

export type OrderBackOfficeComment = {
  __typename?: 'OrderBackOfficeComment';
  unixTimestamp?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
  values?: Maybe<Scalars['String']>;
};

export type OrderBackOfficeResponse = OrderResponse & {
  __typename?: 'OrderBackOfficeResponse';
  acquisition?: Maybe<OrderAcquisitionCampaign>;
  activeReOrderIsValid?: Maybe<Scalars['Boolean']>;
  billingAddress?: Maybe<Address>;
  cancellationReasons?: Maybe<CancellationReasons>;
  carat?: Maybe<OrderCarat>;
  caratTotal?: Maybe<Scalars['Int']>;
  checkOutType?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  customer?: Maybe<OrderCustomer>;
  customerIp?: Maybe<Scalars['String']>;
  ePurse?: Maybe<OrderEPurse>;
  editOrderIsValid?: Maybe<Scalars['Boolean']>;
  grandTotal?: Maybe<Scalars['Float']>;
  gwpCheckoutConfirm?: Maybe<Scalars['Boolean']>;
  gwpStockAcknowledge?: Maybe<Scalars['Boolean']>;
  /** This Field recently become obsolete on Nov 2019 */
  instalment?: Maybe<OrderInstalment>;
  isAllowEdit?: Maybe<Scalars['Boolean']>;
  isHold?: Maybe<Scalars['Boolean']>;
  orderDiscount?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['String']>;
  orderLanguage?: Maybe<Scalars['String']>;
  orderLogs?: Maybe<Array<Maybe<OrderBackOfficeComment>>>;
  orderPromotions?: Maybe<Array<Maybe<OrderPromotion>>>;
  orderStatus?: Maybe<Scalars['String']>;
  orderStatusDisplay?: Maybe<Scalars['String']>;
  /** reason tag for canceled order */
  orderStatusTag?: Maybe<Scalars['String']>;
  orderSubtotal?: Maybe<Scalars['Float']>;
  orderType?: Maybe<Scalars['String']>;
  payment?: Maybe<Payment>;
  paymentCardIssuer?: Maybe<Scalars['String']>;
  /** This Field recently become obsolete on Nov 2019 */
  paymentChannel?: Maybe<Scalars['String']>;
  paymentMethodImage?: Maybe<Image>;
  /** This Field recently become obsolete on Nov 2019 */
  paymentMethodName?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  productDiscount?: Maybe<Scalars['Float']>;
  productSubtotal?: Maybe<Scalars['Float']>;
  promoCode?: Maybe<Scalars['String']>;
  promotionCodes?: Maybe<Array<Maybe<PromotionCode>>>;
  quantity?: Maybe<Scalars['Int']>;
  reOrderIsValid?: Maybe<Scalars['Boolean']>;
  setToPendingIsValid?: Maybe<Scalars['Boolean']>;
  shippingDiscount?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  shippingMethod?: Maybe<Array<Maybe<ShippingMethodType>>>;
  shippingTotal?: Maybe<Scalars['Float']>;
  subOrders?: Maybe<Array<Maybe<SubOrderInformation>>>;
  subtotal?: Maybe<Scalars['Float']>;
  taxInvoiceRequestable?: Maybe<Scalars['Boolean']>;
  timePlace?: Maybe<Scalars['String']>;
  unixTimeplaced?: Maybe<Scalars['Float']>;
  unread?: Maybe<Scalars['Boolean']>;
  viewOnly?: Maybe<Scalars['Boolean']>;
};

export type OrderBillingAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  building?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type OrderCancelInput = {
  orderId: Scalars['String'];
  reasons?: InputMaybe<Array<InputMaybe<OrderReasonInput>>>;
};

export type OrderCarat = {
  __typename?: 'OrderCarat';
  caratEarnRate?: Maybe<CaratEarnRate>;
  currentCarat?: Maybe<Scalars['Float']>;
  earnCaratPoint?: Maybe<Scalars['Float']>;
  earnSubtotal?: Maybe<Scalars['Float']>;
  redeemCaratPoint?: Maybe<Scalars['Float']>;
  redeemCaratPrice?: Maybe<Scalars['Float']>;
};

export type OrderCommentInput = {
  ip?: InputMaybe<Scalars['String']>;
  values: Scalars['String'];
};

export type OrderCondition = {
  __typename?: 'OrderCondition';
  airports?: Maybe<Array<Maybe<Scalars['String']>>>;
  amountDiscount?: Maybe<Scalars['Float']>;
  calculateSeparateDeliveryType?: Maybe<Scalars['Boolean']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  excludes?: Maybe<ConditionSelector>;
  id?: Maybe<Scalars['String']>;
  includes?: Maybe<ConditionSelector>;
  maximumAmount?: Maybe<Scalars['Float']>;
  maximumDiscount?: Maybe<Scalars['Float']>;
  minimumAmount?: Maybe<Scalars['Float']>;
  percentDiscount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type OrderConditionInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amountDiscount?: InputMaybe<Scalars['Float']>;
  calculateSeparateDeliveryType?: InputMaybe<Scalars['Boolean']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  excludes?: InputMaybe<ConditionSelectorInput>;
  id?: InputMaybe<Scalars['String']>;
  includes?: InputMaybe<ConditionSelectorInput>;
  maximumAmount?: InputMaybe<Scalars['Float']>;
  maximumDiscount?: InputMaybe<Scalars['Float']>;
  minimumAmount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<Scalars['Int']>;
  percentDiscount?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<PromotionConditionEnumType>;
};

export type OrderCustomer = {
  __typename?: 'OrderCustomer';
  addresses?: Maybe<Array<Maybe<Address>>>;
  birthDate?: Maybe<Scalars['Float']>;
  citizenId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  member?: Maybe<OrderMember>;
  middleName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  ssoId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type OrderCustomerAddressesArgs = {
  addressId?: InputMaybe<Scalars['String']>;
};

export type OrderCustomerResponse = {
  __typename?: 'OrderCustomerResponse';
  hasPending?: Maybe<Scalars['Boolean']>;
  unreadTotal?: Maybe<UnreadTotalResponse>;
};

export type OrderEPurse = {
  __typename?: 'OrderEPurse';
  currentEPurse?: Maybe<Scalars['Float']>;
  ePurseTotal?: Maybe<Scalars['Float']>;
  redeemEPurse?: Maybe<Scalars['Float']>;
};

export enum OrderEnumType {
  Order = 'ORDER'
}

export type OrderFlightAddressInput = {
  airlineCode?: InputMaybe<Scalars['String']>;
  airportCode?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  flightDate?: InputMaybe<Scalars['String']>;
  flightNo?: InputMaybe<Scalars['String']>;
  flightUnixDate?: InputMaybe<Scalars['Float']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  passport?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  terminal?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type OrderFlightDetail = {
  __typename?: 'OrderFlightDetail';
  airlineCode?: Maybe<Scalars['String']>;
  airportCode?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  flightDate?: Maybe<Scalars['String']>;
  flightNo?: Maybe<Scalars['String']>;
  flightUnixDate?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  passport?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  pickupCounterCode?: Maybe<Scalars['String']>;
  pickupCounterImgUrl?: Maybe<Image>;
  pickupCounterName?: Maybe<Scalars['String']>;
  terminal?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type OrderGrandTotalInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type OrderInstalment = {
  __typename?: 'OrderInstalment';
  interestRate?: Maybe<Scalars['Float']>;
  interestType?: Maybe<Scalars['String']>;
  monthlyPaid?: Maybe<Scalars['Float']>;
  period?: Maybe<Scalars['Int']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  amount?: Maybe<Scalars['Float']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountRate?: Maybe<Scalars['String']>;
  gwpReferencePromotionRule?: Maybe<Scalars['String']>;
  gwpReferenceSKUs?: Maybe<Array<Maybe<OrderItemGwpReference>>>;
  isDutyFree?: Maybe<Scalars['Boolean']>;
  isGWP?: Maybe<Scalars['Boolean']>;
  isInstalmentAvailable?: Maybe<Scalars['Boolean']>;
  isOutOfStock?: Maybe<Scalars['Boolean']>;
  netAmount?: Maybe<Scalars['Float']>;
  productImageURL?: Maybe<Image>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  receiveQuantity?: Maybe<Scalars['Int']>;
  shipTo?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  unitCurrency?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  variation?: Maybe<Array<Maybe<OrderItemVariation>>>;
};

export type OrderItemGwpReference = {
  __typename?: 'OrderItemGwpReference';
  shipTo?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
};

export type OrderItemSubtotalInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type OrderItemVariation = {
  __typename?: 'OrderItemVariation';
  name?: Maybe<Scalars['String']>;
  orderItemsId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export enum OrderLimitByType {
  Group = 'GROUP',
  Sku = 'SKU'
}

export type OrderLimitQuantitieTypeInput = {
  ACCOUNT?: InputMaybe<Scalars['Int']>;
  ORDER?: InputMaybe<Scalars['Int']>;
};

export type OrderLimitQuantitieTypeResponse = {
  __typename?: 'OrderLimitQuantitieTypeResponse';
  ACCOUNT?: Maybe<Scalars['Int']>;
  ORDER?: Maybe<Scalars['Int']>;
};

export type OrderMember = {
  __typename?: 'OrderMember';
  birthDate?: Maybe<Scalars['Float']>;
  citizenId?: Maybe<Scalars['String']>;
  ePurse?: Maybe<OrderMemberValueEPurse>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  loyaltyCard?: Maybe<OrderMemberLoyaltyCard>;
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Locale>;
  nationality?: Maybe<Scalars['String']>;
  passportNumber?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  phoneCodeResource?: Maybe<PhoneCodeResponse>;
  status?: Maybe<Scalars['String']>;
  verifiedDate?: Maybe<Scalars['Float']>;
  verifiedMethod?: Maybe<Scalars['String']>;
};


export type OrderMemberPhoneCodeResourceArgs = {
  lang?: InputMaybe<LocaleType>;
};

export type OrderMemberInput = {
  isExpire?: InputMaybe<Scalars['Boolean']>;
  isMember?: InputMaybe<Scalars['Boolean']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OrderMemberLoyaltyCard = {
  __typename?: 'OrderMemberLoyaltyCard';
  card?: Maybe<CardTypeResponse>;
  discount?: Maybe<Scalars['Float']>;
  embossId?: Maybe<Scalars['String']>;
  embossName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Float']>;
  groupCode?: Maybe<Scalars['String']>;
  issueDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  typeCode?: Maybe<Scalars['String']>;
};

export type OrderMemberValueEPurse = {
  __typename?: 'OrderMemberValueEPurse';
  availableAmount?: Maybe<Scalars['Float']>;
  corporateAmount?: Maybe<Scalars['Float']>;
  topupAmount?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderMetadata = {
  __typename?: 'OrderMetadata';
  unreadTotal?: Maybe<UnreadTotalResponse>;
};

export type OrderOrderSubtotalInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type OrderPaidPayload = {
  __typename?: 'OrderPaidPayload';
  orderId: Scalars['String'];
};

export type OrderPayload = {
  __typename?: 'OrderPayload';
  orderId: Scalars['String'];
};

export enum OrderPromotionEnumType {
  /** for admin */
  Campaignpromocode = 'CAMPAIGNPROMOCODE',
  /** for admin */
  Globalcartrule = 'GLOBALCARTRULE',
  /** for admin */
  Globalgwp = 'GLOBALGWP',
  /** for admin */
  Globalshipping = 'GLOBALSHIPPING'
}

export type OrderPurchaseDateInput = {
  endDate?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['Float']>;
};

export type OrderReasonInput = {
  code?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  other?: InputMaybe<Scalars['String']>;
};

export type OrderReasonResponse = {
  __typename?: 'OrderReasonResponse';
  reasonCode?: Maybe<Scalars['String']>;
  reasonName?: Maybe<Scalars['String']>;
};

export type OrderResponse = {
  acquisition?: Maybe<OrderAcquisitionCampaign>;
  billingAddress?: Maybe<Address>;
  carat?: Maybe<OrderCarat>;
  caratTotal?: Maybe<Scalars['Int']>;
  checkOutType?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  customer?: Maybe<OrderCustomer>;
  customerIp?: Maybe<Scalars['String']>;
  ePurse?: Maybe<OrderEPurse>;
  grandTotal?: Maybe<Scalars['Float']>;
  isAllowEdit?: Maybe<Scalars['Boolean']>;
  orderDiscount?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['String']>;
  orderLanguage?: Maybe<Scalars['String']>;
  /** group of subOrder status */
  orderStatus?: Maybe<Scalars['String']>;
  orderStatusDisplay?: Maybe<Scalars['String']>;
  /** reason tag for canceled order */
  orderStatusTag?: Maybe<Scalars['String']>;
  orderSubtotal?: Maybe<Scalars['Float']>;
  paymentMethodName?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  productDiscount?: Maybe<Scalars['Float']>;
  productSubtotal?: Maybe<Scalars['Float']>;
  promoCode?: Maybe<Scalars['String']>;
  promotionCodes?: Maybe<Array<Maybe<PromotionCode>>>;
  quantity?: Maybe<Scalars['Int']>;
  shippingDiscount?: Maybe<Scalars['Float']>;
  shippingFee?: Maybe<Scalars['Float']>;
  shippingMethod?: Maybe<Array<Maybe<ShippingMethodType>>>;
  shippingTotal?: Maybe<Scalars['Float']>;
  subOrders?: Maybe<Array<Maybe<SubOrderInformation>>>;
  subtotal?: Maybe<Scalars['Float']>;
  taxInvoiceRequestable?: Maybe<Scalars['Boolean']>;
  timePlace?: Maybe<Scalars['String']>;
  unixTimeplaced?: Maybe<Scalars['Float']>;
  unread?: Maybe<Scalars['Boolean']>;
};

export type OrderRule = {
  __typename?: 'OrderRule';
  isActive?: Maybe<Scalars['Boolean']>;
  orderConditions?: Maybe<Array<Maybe<OrderCondition>>>;
  templateType?: Maybe<Scalars['String']>;
};

export type OrderRuleInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  orderConditions?: InputMaybe<Array<InputMaybe<OrderConditionInput>>>;
  ruleType?: InputMaybe<OrderEnumType>;
  templateType?: InputMaybe<OrderTemplateEnumType>;
};

export type OrderRuleLimitedProduct = {
  __typename?: 'OrderRuleLimitedProduct';
  limitQuantity?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  popupMessage?: Maybe<Scalars['String']>;
};

export type OrderRulePayload = {
  __typename?: 'OrderRulePayload';
  orderConditions?: Maybe<Array<Maybe<ConditionPayload>>>;
  templateType?: Maybe<Scalars['String']>;
};

export type OrderShippingAddressInput = {
  address?: InputMaybe<Scalars['String']>;
  building?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type OrderSimplePayload = {
  __typename?: 'OrderSimplePayload';
  id: Scalars['String'];
};

export enum OrderStateEnumType {
  /** for admin */
  Delivered = 'DELIVERED',
  /** for admin */
  Ordered = 'ORDERED',
  /** for admin */
  Pending = 'PENDING'
}

export enum OrderStatusEnumType {
  /** for admin */
  Canceled = 'CANCELED',
  /** for admin */
  Delivered = 'DELIVERED',
  /** for admin */
  Dispatch = 'DISPATCH',
  /** for customer */
  History = 'HISTORY',
  /** for customer */
  Inprogress = 'INPROGRESS',
  /** for admin */
  New = 'NEW',
  /** for admin */
  Packed = 'PACKED',
  /** for admin */
  Paid = 'PAID',
  /** for admin, customer */
  Pending = 'PENDING',
  /** for admin */
  PuRecieved = 'PU_RECIEVED',
  /** for admin */
  Ready = 'READY',
  /** for admin */
  Shipped = 'SHIPPED'
}

export enum OrderStatusTagEnumType {
  /** for admin */
  Customer = 'CUSTOMER',
  /** for admin */
  Defect = 'DEFECT',
  /** for admin */
  Refund = 'REFUND',
  /** for admin */
  Reorder = 'REORDER',
  /** for admin */
  Resale = 'RESALE',
  /** for admin */
  System = 'SYSTEM'
}

export enum OrderStatusType {
  Cancel = 'CANCEL',
  Hold = 'HOLD',
  Lastest = 'LASTEST',
  Pending = 'PENDING',
  Unhold = 'UNHOLD'
}

export enum OrderTemplateEnumType {
  BuyAmountXGetOrderAmountDiscount = 'BUY_AMOUNT_X_GET_ORDER_AMOUNT_DISCOUNT',
  BuyAmountXGetOrderPercentDiscount = 'BUY_AMOUNT_X_GET_ORDER_PERCENT_DISCOUNT'
}

export enum OrderType {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

export type OrdersResponse = {
  __typename?: 'OrdersResponse';
  data?: Maybe<Array<Maybe<OrderResponse>>>;
  metadata?: Maybe<OrderMetadata>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageInput = {
  collection?: InputMaybe<Scalars['Boolean']>;
  homepage?: InputMaybe<Scalars['Boolean']>;
  productList?: InputMaybe<Scalars['Boolean']>;
  search?: InputMaybe<Scalars['Boolean']>;
};

export type PageResponse = {
  __typename?: 'PageResponse';
  collection?: Maybe<Scalars['Boolean']>;
  homepage?: Maybe<Scalars['Boolean']>;
  productList?: Maybe<Scalars['Boolean']>;
  search?: Maybe<Scalars['Boolean']>;
};

export type ParentMovementResponse = {
  __typename?: 'ParentMovementResponse';
  deleteResult?: Maybe<DeleteResult>;
  moveResult?: Maybe<MovementResult>;
};

export type Payment = {
  __typename?: 'Payment';
  cardIssuer?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  instalment?: Maybe<OrderInstalment>;
  methodName?: Maybe<Scalars['String']>;
};

export enum PaymentMedhodEnumType {
  Alipay = 'ALIPAY',
  Epurse = 'EPURSE',
  Instalment = 'INSTALMENT',
  Jcb = 'JCB',
  KplusApp = 'KPLUS_APP',
  KplusNoti = 'KPLUS_NOTI',
  Master = 'MASTER',
  Unionpay = 'UNIONPAY',
  Visa = 'VISA'
}

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  code?: Maybe<Scalars['Int']>;
  iconImage?: Maybe<Image>;
  name?: Maybe<Scalars['String']>;
};

export type PaymentMethodResponse = {
  __typename?: 'PaymentMethodResponse';
  lists?: Maybe<Array<Maybe<PaymentMethod>>>;
};

export type PercentCondition = {
  __typename?: 'PercentCondition';
  airports?: Maybe<Array<Maybe<Scalars['String']>>>;
  calculateSeparateDeliveryType?: Maybe<Scalars['Boolean']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  discountItemExcludes?: Maybe<ConditionSelector>;
  discountItemIncludes?: Maybe<ConditionSelector>;
  excludes?: Maybe<ConditionSelector>;
  id?: Maybe<Scalars['String']>;
  includes?: Maybe<ConditionSelector>;
  itemQuantity?: Maybe<Scalars['Int']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  maximumDiscount?: Maybe<Scalars['Float']>;
  minimumAmount?: Maybe<Scalars['Float']>;
  percentDiscount?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type PercentConditionInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  calculateSeparateDeliveryType?: InputMaybe<Scalars['Boolean']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  discountItemExcludes?: InputMaybe<ConditionSelectorInput>;
  discountItemIncludes?: InputMaybe<ConditionSelectorInput>;
  excludes?: InputMaybe<ConditionSelectorInput>;
  id?: InputMaybe<Scalars['String']>;
  includes?: InputMaybe<ConditionSelectorInput>;
  itemQuantity?: InputMaybe<Scalars['Int']>;
  maximumAmount?: InputMaybe<Scalars['Float']>;
  maximumDiscount?: InputMaybe<Scalars['Float']>;
  minimumAmount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<Scalars['Int']>;
  percentDiscount?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<PromotionConditionEnumType>;
};

export enum PercentEnumType {
  Percent = 'PERCENT'
}

export type PercentRule = {
  __typename?: 'PercentRule';
  isActive?: Maybe<Scalars['Boolean']>;
  percentConditions?: Maybe<Array<Maybe<PercentCondition>>>;
  templateType?: Maybe<Scalars['String']>;
};

export type PercentRuleInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  percentConditions?: InputMaybe<Array<InputMaybe<PercentConditionInput>>>;
  ruleType?: InputMaybe<PercentEnumType>;
  templateType?: InputMaybe<PercentTemplateEnumType>;
};

export type PercentRulePayload = {
  __typename?: 'PercentRulePayload';
  percentConditions?: Maybe<Array<Maybe<ConditionPayload>>>;
  templateType?: Maybe<Scalars['String']>;
};

export enum PercentTemplateEnumType {
  BuyAmountXGetPercentDiscount = 'BUY_AMOUNT_X_GET_PERCENT_DISCOUNT',
  BuyItemXGetPercentDiscount = 'BUY_ITEM_X_GET_PERCENT_DISCOUNT',
  BuyItemXGetPercentDiscountForItemY = 'BUY_ITEM_X_GET_PERCENT_DISCOUNT_FOR_ITEM_Y'
}

export type PersonalizeRecommendationItem = {
  __typename?: 'PersonalizeRecommendationItem';
  sku?: Maybe<Scalars['String']>;
};

export type PersonalizeRecommendationProductResponse = {
  __typename?: 'PersonalizeRecommendationProductResponse';
  data?: Maybe<Array<Maybe<PersonalizeRecommendationItem>>>;
  recommendationId?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PhoneCodeBackOfficeResponse = {
  __typename?: 'PhoneCodeBackOfficeResponse';
  code?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  flagImageUri?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
};

export type PhoneCodeResponse = {
  __typename?: 'PhoneCodeResponse';
  code?: Maybe<Scalars['String']>;
  country?: Maybe<BaseResourceResponse>;
  flagImageUri?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
};

export type PhoneCodesResponse = {
  __typename?: 'PhoneCodesResponse';
  data?: Maybe<Array<Maybe<PhoneCodeBackOfficeResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum PlatformEnumType {
  Android = 'ANDROID',
  Ios = 'IOS',
  Line = 'LINE',
  Web = 'WEB'
}

export type PlatformInput = {
  android?: InputMaybe<Scalars['Boolean']>;
  ios?: InputMaybe<Scalars['Boolean']>;
  web?: InputMaybe<Scalars['Boolean']>;
};

export type PlatformResponse = {
  __typename?: 'PlatformResponse';
  android?: Maybe<Scalars['Boolean']>;
  ios?: Maybe<Scalars['Boolean']>;
  web?: Maybe<Scalars['Boolean']>;
};

export enum PolicyEnum {
  PrivacyPolicy = 'PRIVACY_POLICY',
  PrivacyPolicyMarketing = 'PRIVACY_POLICY_MARKETING'
}

export type PostalCodeResponse = {
  __typename?: 'PostalCodeResponse';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type PowerDeal = {
  __typename?: 'PowerDeal';
  collectionName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Float']>;
  endPage?: Maybe<PowerDealPageImages>;
  ongoingPage?: Maybe<PowerDealPageImages>;
  startDate?: Maybe<Scalars['Float']>;
  titleName?: Maybe<Scalars['String']>;
  upcomingPage?: Maybe<PowerDealPageImages>;
};

export type PowerDealBackOffice = ContentInformationResponse & {
  __typename?: 'PowerDealBackOffice';
  author?: Maybe<Scalars['String']>;
  collectionName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  duration?: Maybe<PowerDealDuration>;
  endPage?: Maybe<PowerDealPageLocaleImages>;
  id?: Maybe<Scalars['String']>;
  info?: Maybe<PowerDealInfo>;
  metaDescription?: Maybe<Locale>;
  metaTitle?: Maybe<Locale>;
  ongoingPage?: Maybe<PowerDealPageLocaleImages>;
  upcomingPage?: Maybe<PowerDealPageLocaleImages>;
};

export type PowerDealDuration = {
  __typename?: 'PowerDealDuration';
  endDate?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Float']>;
};

export type PowerDealInfo = {
  __typename?: 'PowerDealInfo';
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  titleName?: Maybe<Locale>;
  url?: Maybe<Scalars['String']>;
};

export type PowerDealPageImages = {
  __typename?: 'PowerDealPageImages';
  desktopImage?: Maybe<CmsImageResponse>;
  mobileImage?: Maybe<CmsImageResponse>;
};

export type PowerDealPageLocaleImages = {
  __typename?: 'PowerDealPageLocaleImages';
  desktopImage?: Maybe<ImageLocaleResponse>;
  mobileImage?: Maybe<ImageLocaleResponse>;
};

export type PowerDeals = ContentBackOfficeResponse & {
  __typename?: 'PowerDeals';
  contentType?: Maybe<Scalars['String']>;
  /** This parameter isnot implemented */
  createdDate?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  /** This parameter isnot implemented */
  updatedDate?: Maybe<Scalars['Float']>;
};

export type PremiumBrandBackOfficeResponse = ContentInformationResponse & {
  __typename?: 'PremiumBrandBackOfficeResponse';
  author?: Maybe<Scalars['String']>;
  brandLabel?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  content?: Maybe<ContentPremiumBrandLocaleResponse>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<StatusEnumType>;
  template?: Maybe<PremiumBrandTemplateEnum>;
};

export type PremiumBrandFooterResponse = {
  __typename?: 'PremiumBrandFooterResponse';
  brandStory?: Maybe<ContentBrandStoryPremiumBrandResponse>;
  brandType?: Maybe<Scalars['String']>;
};

export type PremiumBrandHeaderResponse = {
  __typename?: 'PremiumBrandHeaderResponse';
  banner?: Maybe<CmsImageResponse>;
  brandType?: Maybe<Scalars['String']>;
  logo?: Maybe<CmsImageResponse>;
};

export type PremiumBrandListResponse = ContentBackOfficeResponse & {
  __typename?: 'PremiumBrandListResponse';
  author?: Maybe<Scalars['String']>;
  brandLabel?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isLive?: Maybe<Scalars['Boolean']>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};

export type PremiumBrandResponse = {
  __typename?: 'PremiumBrandResponse';
  author?: Maybe<Scalars['String']>;
  brandLabel?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  brandStory?: Maybe<ContentBrandStoryPremiumBrandResponse>;
  brandType?: Maybe<Scalars['String']>;
  categoryBanners?: Maybe<Array<Maybe<ContentCategoryBannerPremiumBrandResponse>>>;
  contentType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  headBanners?: Maybe<Array<Maybe<CmsImageResponse>>>;
  heroBanners?: Maybe<Array<Maybe<HomepageImageResponse>>>;
  logo?: Maybe<CmsImageResponse>;
  product?: Maybe<ContentProductPremiumBrandResponse>;
  startDate?: Maybe<Scalars['Float']>;
  status?: Maybe<StatusEnumType>;
  template?: Maybe<PremiumBrandTemplateEnum>;
  video?: Maybe<ContentVideoPremiumBrandResponse>;
};

export enum PremiumBrandTemplateEnum {
  All = 'ALL',
  None = 'NONE',
  Template1 = 'TEMPLATE1',
  Template2 = 'TEMPLATE2',
  Template3 = 'TEMPLATE3'
}

export enum PrivilegeAcquisitionEnumType {
  OrderId = 'ORDER_ID'
}

export type Product = {
  __typename?: 'Product';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValue>>>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<ProductBrand>;
  categories?: Maybe<Array<Maybe<ProductCategory>>>;
  child?: Maybe<Array<Maybe<ProductChild>>>;
  dealDuration?: Maybe<DealDurationProduct>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Scalars['String']>;
  isWished?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  limitedProduct?: Maybe<OrderRuleLimitedProduct>;
  longDescription?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<ProductOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  /** @deprecated use 'relatedProducts' instead */
  relateProducts?: Maybe<Array<Maybe<ProductRelate>>>;
  /** @deprecated use 'relatedProductSkus' instead */
  relateSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProductSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProducts?: Maybe<Array<Maybe<ProductRelate>>>;
  sapCategory?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  searchable?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  soldOut?: Maybe<Scalars['Boolean']>;
  stock?: Maybe<Stock>;
  supplierCode?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ProductTag>>>;
  variation?: Maybe<ProductVariation>;
  /** @deprecated use 'videos' instead */
  video?: Maybe<Array<Maybe<Scalars['String']>>>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  warranty?: Maybe<Scalars['String']>;
};

export type ProductAttributeInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ProductBrand = {
  __typename?: 'ProductBrand';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductBrandLocale = {
  __typename?: 'ProductBrandLocale';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type ProductCampaignInformation = {
  __typename?: 'ProductCampaignInformation';
  campaignId?: Maybe<Scalars['String']>;
  linkInformation?: Maybe<Scalars['String']>;
  maxUsed?: Maybe<Scalars['Int']>;
  promoCode?: Maybe<Scalars['String']>;
  termAndCondition?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalUsed?: Maybe<Scalars['Int']>;
};

export type ProductCampaignResponse = {
  __typename?: 'ProductCampaignResponse';
  campaign?: Maybe<ProductCampaignInformation>;
  validBy?: Maybe<ValidProductCampaign>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductCategoryLocale = {
  __typename?: 'ProductCategoryLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type ProductChild = {
  __typename?: 'ProductChild';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValue>>>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  dealDuration?: Maybe<DealDurationProduct>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Scalars['String']>;
  isWished?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  limitedProduct?: Maybe<OrderRuleLimitedProduct>;
  longDescription?: Maybe<Scalars['String']>;
  materials?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<ProductOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  sapCategory?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  searchable?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  soldOut?: Maybe<Scalars['Boolean']>;
  stock?: Maybe<Stock>;
  supplierCode?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ProductTag>>>;
  variationValue?: Maybe<ProductVariationValue>;
  /** @deprecated use 'videos' instead */
  video?: Maybe<Array<Maybe<Scalars['String']>>>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  warranty?: Maybe<Scalars['String']>;
};

export type ProductChildLocale = {
  __typename?: 'ProductChildLocale';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValueLocale>>>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<ProductBrandLocale>;
  categories?: Maybe<Array<Maybe<ProductCategoryLocale>>>;
  dealDuration?: Maybe<DealDurationProductLocale>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Locale>;
  isWished?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Locale>;
  materials?: Maybe<Locale>;
  name?: Maybe<Locale>;
  options?: Maybe<ProductOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  sapCategory?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  searchable?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Locale>;
  sku?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  soldOut?: Maybe<Scalars['Boolean']>;
  stock?: Maybe<Stock>;
  supplierCode?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ProductTagLocale>>>;
  variationValue?: Maybe<ProductVariationValueLocale>;
  /** @deprecated use 'videos' instead */
  video?: Maybe<Array<Maybe<Scalars['String']>>>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  warranty?: Maybe<Locale>;
};

export type ProductContentInput = {
  ingredient?: InputMaybe<LocaleInput>;
  longDescription?: InputMaybe<LocaleInput>;
  material?: InputMaybe<LocaleInput>;
  name?: InputMaybe<LocaleInput>;
  shortDescription?: InputMaybe<LocaleInput>;
  warranty?: InputMaybe<LocaleInput>;
};

export type ProductFilterQuery = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  genders?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isDutyFree?: InputMaybe<Scalars['Boolean']>;
  priceMax?: InputMaybe<Scalars['Float']>;
  priceMin?: InputMaybe<Scalars['Float']>;
};

export type ProductFilterResponse = {
  __typename?: 'ProductFilterResponse';
  brands?: Maybe<Array<Maybe<FilterInformation>>>;
  categories?: Maybe<Array<Maybe<FilterCategory>>>;
  genders?: Maybe<Array<Maybe<FilterInformation>>>;
  priceMax?: Maybe<Scalars['Float']>;
  priceMin?: Maybe<Scalars['Float']>;
};

export type ProductImageInput = {
  hash: Scalars['String'];
};

export type ProductInput = {
  attributes?: InputMaybe<Array<InputMaybe<ProductAttributeInput>>>;
  content?: InputMaybe<ProductContentInput>;
  images?: InputMaybe<Array<InputMaybe<ProductImageInput>>>;
  sap?: InputMaybe<ProductSapInput>;
  sku: Scalars['String'];
  videos?: InputMaybe<Array<InputMaybe<ProductVideoInput>>>;
};

export type ProductLocale = {
  __typename?: 'ProductLocale';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValueLocale>>>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<ProductBrandLocale>;
  categories?: Maybe<Array<Maybe<ProductCategoryLocale>>>;
  child?: Maybe<Array<Maybe<ProductChildLocale>>>;
  dealDuration?: Maybe<DealDurationProductLocale>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Locale>;
  isWished?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Locale>;
  materials?: Maybe<Locale>;
  name?: Maybe<Locale>;
  options?: Maybe<ProductOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  /** @deprecated use 'relatedProducts' instead */
  relateProducts?: Maybe<Array<Maybe<ProductRelateLocale>>>;
  /** @deprecated use 'relatedProductSkus' instead */
  relateSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProductSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProducts?: Maybe<Array<Maybe<ProductRelateLocale>>>;
  sapCategory?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  searchable?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Locale>;
  sku?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  soldOut?: Maybe<Scalars['Boolean']>;
  stock?: Maybe<Stock>;
  supplierCode?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ProductTagLocale>>>;
  variation?: Maybe<ProductVariationLocale>;
  /** @deprecated use 'videos' instead */
  video?: Maybe<Array<Maybe<Scalars['String']>>>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  warranty?: Maybe<Locale>;
};

export type ProductLog = {
  __typename?: 'ProductLog';
  createdDate?: Maybe<Scalars['Float']>;
  logs?: Maybe<Array<Maybe<LogProductLogType>>>;
  productNode?: Maybe<ProductNodeResponse>;
  sku?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};


export type ProductLogProductNodeArgs = {
  lang?: InputMaybe<LocaleType>;
};

export enum ProductLogFieldNameEnum {
  IsInstalmentAvailable = 'IS_INSTALMENT_AVAILABLE'
}

export type ProductLogFilterInput = {
  brand?: InputMaybe<Scalars['String']>;
  isInstalmentAvailable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
};

export type ProductLogResponse = {
  __typename?: 'ProductLogResponse';
  data?: Maybe<Array<Maybe<ProductLog>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum ProductLogSortFieldEnum {
  UpdatedDate = 'UPDATED_DATE'
}

export type ProductLogSortInput = {
  direction?: InputMaybe<SortEnumType>;
  field?: InputMaybe<ProductLogSortFieldEnum>;
};

export type ProductNode = {
  __typename?: 'ProductNode';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValue>>>;
  batch?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<ProductBrand>;
  categories1?: Maybe<Array<Maybe<ProductNodeCategory>>>;
  categories2?: Maybe<Array<Maybe<ProductNodeCategory>>>;
  categories3?: Maybe<Array<Maybe<ProductNodeCategory>>>;
  categories4?: Maybe<Array<Maybe<ProductNodeCategory>>>;
  categories5?: Maybe<Array<Maybe<ProductNodeCategory>>>;
  createdDate?: Maybe<Scalars['Int']>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Scalars['String']>;
  isDisable?: Maybe<Scalars['Boolean']>;
  isVisibility?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Scalars['String']>;
  masterCategories?: Maybe<Array<Maybe<ProductNodeCategory>>>;
  materials?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<ProductOptions>;
  parentSku?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  relatedProductSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProducts?: Maybe<Array<Maybe<ProductNodeRelatedProduct>>>;
  sapCategory?: Maybe<Scalars['String']>;
  sapCategoryName?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateLogs?: Maybe<Array<Maybe<ProductNodeStateLogs>>>;
  stock?: Maybe<StockBof>;
  supplierCode?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ProductTag>>>;
  type?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Int']>;
  variation?: Maybe<ProductVariation>;
  variationValue?: Maybe<ProductVariationValue>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  warranty?: Maybe<Scalars['String']>;
};

export type ProductNodeCategory = {
  __typename?: 'ProductNodeCategory';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductNodeCategoryLocale = {
  __typename?: 'ProductNodeCategoryLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export enum ProductNodeKeywordByFieldEnum {
  Batch = 'BATCH',
  Brand = 'BRAND',
  BrandLabel = 'BRAND_LABEL',
  Name = 'NAME',
  ParentSku = 'PARENT_SKU',
  Sku = 'SKU'
}

export type ProductNodeLocale = {
  __typename?: 'ProductNodeLocale';
  /** @deprecated deprecate on 2019-01-31 */
  ageRestriction?: Maybe<Scalars['Boolean']>;
  attributeValues?: Maybe<Array<Maybe<AttributeValueLocale>>>;
  batch?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  bestSeller?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<ProductBrandLocale>;
  categories1?: Maybe<Array<Maybe<ProductNodeCategoryLocale>>>;
  categories2?: Maybe<Array<Maybe<ProductNodeCategoryLocale>>>;
  categories3?: Maybe<Array<Maybe<ProductNodeCategoryLocale>>>;
  categories4?: Maybe<Array<Maybe<ProductNodeCategoryLocale>>>;
  categories5?: Maybe<Array<Maybe<ProductNodeCategoryLocale>>>;
  createdDate?: Maybe<Scalars['Int']>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  hotItem?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  ingredients?: Maybe<Locale>;
  isDisable?: Maybe<Scalars['Boolean']>;
  isVisibility?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  lag?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Locale>;
  masterCategories?: Maybe<Array<Maybe<ProductNodeCategoryLocale>>>;
  materials?: Maybe<Locale>;
  name?: Maybe<Locale>;
  options?: Maybe<ProductOptions>;
  parentSku?: Maybe<Scalars['String']>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  relatedProductSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProducts?: Maybe<Array<Maybe<ProductNodeRelatedProductLocale>>>;
  sapCategory?: Maybe<Scalars['String']>;
  sapCategoryName?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Locale>;
  sku?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateLogs?: Maybe<Array<Maybe<ProductNodeStateLogs>>>;
  stock?: Maybe<StockBof>;
  supplierCode?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ProductTagLocale>>>;
  type?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Int']>;
  variation?: Maybe<ProductVariationLocale>;
  variationValue?: Maybe<ProductVariationValueLocale>;
  videos?: Maybe<Array<Maybe<Scalars['String']>>>;
  warranty?: Maybe<Locale>;
};

export type ProductNodeLogStateAuthor = {
  __typename?: 'ProductNodeLogStateAuthor';
  email?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ProductNodeRelatedProduct = {
  __typename?: 'ProductNodeRelatedProduct';
  images?: Maybe<Array<Maybe<Image>>>;
  isDisable?: Maybe<Scalars['Boolean']>;
  isVisibility?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ProductNodeRelatedProductLocale = {
  __typename?: 'ProductNodeRelatedProductLocale';
  images?: Maybe<Array<Maybe<Image>>>;
  isDisable?: Maybe<Scalars['Boolean']>;
  isVisibility?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Locale>;
  sku?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ProductNodeResponse = ProductNode | ProductNodeLocale;

export type ProductNodeSearchInput = {
  field?: InputMaybe<ProductNodeKeywordByFieldEnum>;
  value?: InputMaybe<Scalars['String']>;
};

export type ProductNodeSortInput = {
  direction?: InputMaybe<SortEnumType>;
  field?: InputMaybe<ProductNodeKeywordByFieldEnum>;
};

export enum ProductNodeSortedByFieldEnum {
  Batch = 'BATCH',
  Brand = 'BRAND',
  Default = 'DEFAULT',
  Latest = 'LATEST',
  Name = 'NAME'
}

export type ProductNodeStateLogs = {
  __typename?: 'ProductNodeStateLogs';
  author?: Maybe<ProductNodeLogStateAuthor>;
  createdDate?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type ProductNodesFilterQuery = {
  batch?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<GenderEnum>;
  isAgeRestriction?: InputMaybe<Scalars['Boolean']>;
  isAirportPickup?: InputMaybe<Scalars['Boolean']>;
  isDisable?: InputMaybe<Scalars['Boolean']>;
  isDutyFree?: InputMaybe<Scalars['Boolean']>;
  isGWP?: InputMaybe<Scalars['Boolean']>;
  isLag?: InputMaybe<Scalars['Boolean']>;
  isShortData?: InputMaybe<Scalars['Boolean']>;
  isVisibility?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  priceMax?: InputMaybe<Scalars['Float']>;
  priceMin?: InputMaybe<Scalars['Float']>;
  productType?: InputMaybe<ProductTypeEnum>;
  quantityMax?: InputMaybe<Scalars['Int']>;
  quantityMin?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<ProductStateFieldEnum>;
  tag?: InputMaybe<Scalars['String']>;
};

export type ProductNodesResponse = {
  __typename?: 'ProductNodesResponse';
  data?: Maybe<Array<Maybe<ProductNodeResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductOptionRuleInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Boolean']>;
};

export type ProductOptions = {
  __typename?: 'ProductOptions';
  isAgeRestriction?: Maybe<Scalars['Boolean']>;
  isDutyFree?: Maybe<Scalars['Boolean']>;
  isInstalmentAvailable?: Maybe<Scalars['Boolean']>;
  isLag?: Maybe<Scalars['Boolean']>;
  isPickup?: Maybe<Scalars['Boolean']>;
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  sku?: Maybe<Scalars['String']>;
};

export type ProductRelate = {
  __typename?: 'ProductRelate';
  dealDuration?: Maybe<DealDurationProduct>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<ProductOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  prettyUrl?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  stock?: Maybe<Stock>;
  tags?: Maybe<Array<Maybe<ProductTag>>>;
};

export type ProductRelateLocale = {
  __typename?: 'ProductRelateLocale';
  dealDuration?: Maybe<DealDurationProductLocale>;
  /** @deprecated deprecate on 2019-01-31 */
  dutyFree?: Maybe<Scalars['Boolean']>;
  /** @deprecated deprecate on 2019-01-31 */
  exclusiveKP?: Maybe<Scalars['Boolean']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Locale>;
  options?: Maybe<ProductOptions>;
  /** @deprecated deprecate on 2019-01-31 */
  pickup?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  stock?: Maybe<Stock>;
  tags?: Maybe<Array<Maybe<ProductTagLocale>>>;
};

export type ProductSapInput = {
  supplierCode: Scalars['String'];
};

export enum ProductSortableFieldEnum {
  Brand = 'BRAND',
  Latest = 'LATEST',
  Name = 'NAME',
  Price = 'PRICE',
  Relevance = 'RELEVANCE',
  Score = 'SCORE'
}

export enum ProductStateFieldEnum {
  Discont = 'DISCONT',
  Hide = 'HIDE',
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type ProductSubVariationValue = {
  __typename?: 'ProductSubVariationValue';
  hexCode?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductSubVariationValueLocale = {
  __typename?: 'ProductSubVariationValueLocale';
  image?: Maybe<Image>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type ProductTag = {
  __typename?: 'ProductTag';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ProductTagLocale = {
  __typename?: 'ProductTagLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ProductTagResponse = {
  __typename?: 'ProductTagResponse';
  brand?: Maybe<Locale>;
  name?: Maybe<Locale>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductVariation = {
  __typename?: 'ProductVariation';
  display?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductVariationLocale = {
  __typename?: 'ProductVariationLocale';
  display?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductVariationValue = {
  __typename?: 'ProductVariationValue';
  display?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<ProductSubVariationValue>;
};

export type ProductVariationValueLocale = {
  __typename?: 'ProductVariationValueLocale';
  display?: Maybe<Scalars['String']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<ProductSubVariationValueLocale>;
};

export type ProductVideoInput = {
  url: Scalars['String'];
};

export type ProductsPayload = {
  __typename?: 'ProductsPayload';
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductsRankingResponse = {
  __typename?: 'ProductsRankingResponse';
  data?: Maybe<Array<Maybe<SelectProductLocaleType>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductsResponse = {
  __typename?: 'ProductsResponse';
  data?: Maybe<Array<Maybe<SelectProductLocaleType>>>;
  filterData?: Maybe<ProductFilterResponse>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductsTagResponse = {
  __typename?: 'ProductsTagResponse';
  data?: Maybe<Array<Maybe<ProductTagResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum PromotionActionEnumType {
  Active = 'ACTIVE',
  Copy = 'COPY',
  Delete = 'DELETE',
  Inactive = 'INACTIVE'
}

export type PromotionCalculationResponse = {
  __typename?: 'PromotionCalculationResponse';
  cartDisplayId?: Maybe<Scalars['String']>;
  gwps?: Maybe<Array<Maybe<GwpSetResponse>>>;
  itemsDiscount?: Maybe<Array<Maybe<CartItemDiscountResponse>>>;
  orderDiscount?: Maybe<BaseDiscountResponse>;
  promoCode?: Maybe<Scalars['String']>;
  shippingDiscount?: Maybe<BaseDiscountResponse>;
  usageDetails?: Maybe<Array<Maybe<PromotionUsageDetail>>>;
};

export type PromotionCampaignInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  amountRules?: InputMaybe<Array<InputMaybe<AmountRuleInput>>>;
  applyDiscountOverLimit?: InputMaybe<Scalars['Boolean']>;
  applyNewCustomer?: InputMaybe<Scalars['Boolean']>;
  applyNonMember?: InputMaybe<Scalars['Boolean']>;
  codeLength?: InputMaybe<Scalars['Int']>;
  codePrefix?: InputMaybe<Scalars['String']>;
  codeQuantity?: InputMaybe<Scalars['Int']>;
  codeSuffix?: InputMaybe<Scalars['String']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  description?: InputMaybe<Scalars['String']>;
  descriptionUrl?: InputMaybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Float']>;
  gwpRules?: InputMaybe<Array<InputMaybe<GwpRuleInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limitPerCustomer?: InputMaybe<Scalars['Int']>;
  limitPerOrder?: InputMaybe<Scalars['Int']>;
  maxUse?: InputMaybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimumSubTotal?: InputMaybe<Scalars['Float']>;
  notAllowCombine?: InputMaybe<Scalars['Boolean']>;
  orderRules?: InputMaybe<Array<InputMaybe<OrderRuleInput>>>;
  percentRules?: InputMaybe<Array<InputMaybe<PercentRuleInput>>>;
  platforms?: InputMaybe<PlatformInput>;
  priority?: InputMaybe<Scalars['Int']>;
  promoCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  promotionName?: InputMaybe<Scalars['String']>;
  shippingRules?: InputMaybe<Array<InputMaybe<ShippingRuleInput>>>;
  startDate?: InputMaybe<Scalars['Float']>;
  storeId?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
};

export type PromotionCampaignPayload = {
  __typename?: 'PromotionCampaignPayload';
  id: Scalars['String'];
  rule?: Maybe<CampaignRulePayload>;
};

export type PromotionCampaignRuleInput = {
  amountConditions?: InputMaybe<Array<InputMaybe<AmountConditionInput>>>;
  gwpConditions?: InputMaybe<Array<InputMaybe<GwpConditionInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  orderConditions?: InputMaybe<Array<InputMaybe<OrderConditionInput>>>;
  percentConditions?: InputMaybe<Array<InputMaybe<PercentConditionInput>>>;
  ruleType?: InputMaybe<CampaignEnumType>;
  shippingConditions?: InputMaybe<Array<InputMaybe<ShippingConditionInput>>>;
  templateType?: InputMaybe<CampaignTemplateEnumType>;
};

export type PromotionCartRuleInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  applyDiscountOverLimit?: InputMaybe<Scalars['Boolean']>;
  applyNonMember?: InputMaybe<Scalars['Boolean']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  description?: InputMaybe<Scalars['String']>;
  descriptionUrl?: InputMaybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limitPerCustomer?: InputMaybe<Scalars['Int']>;
  limitPerOrder?: InputMaybe<Scalars['Int']>;
  maxUse?: InputMaybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimumSubTotal?: InputMaybe<Scalars['Float']>;
  orderRules?: InputMaybe<Array<InputMaybe<OrderRuleInput>>>;
  platforms?: InputMaybe<PlatformInput>;
  priority?: InputMaybe<Scalars['Int']>;
  promotionName?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  storeId?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
};

export type PromotionCartRulePayload = {
  __typename?: 'PromotionCartRulePayload';
  id: Scalars['String'];
  orderRules?: Maybe<Array<Maybe<OrderRulePayload>>>;
};

export type PromotionCode = {
  __typename?: 'PromotionCode';
  applyTo?: Maybe<Array<Maybe<Scalars['String']>>>;
  codeStatus?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  termAndCondition?: Maybe<PromotionCodesTermAndCondition>;
  warnings?: Maybe<Array<Maybe<PromotionCodeWarning>>>;
};

export type PromotionCodeData = {
  __typename?: 'PromotionCodeData';
  cn?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
  th?: Maybe<Scalars['String']>;
};

export enum PromotionCodeFieldEnum {
  DateCreated = 'DATE_CREATED',
  Id = 'ID',
  PromotionCode = 'PROMOTION_CODE'
}

export type PromotionCodeResponse = {
  __typename?: 'PromotionCodeResponse';
  dateCreated?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  promotionCode?: Maybe<Scalars['String']>;
  totalUsage?: Maybe<Scalars['Int']>;
};

export enum PromotionCodeStatusType {
  NotRemove = 'NOT_REMOVE',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export type PromotionCodeUrlResponse = {
  __typename?: 'PromotionCodeUrlResponse';
  url?: Maybe<Scalars['String']>;
};

export type PromotionCodeWarning = {
  __typename?: 'PromotionCodeWarning';
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type PromotionCodesInformation = {
  __typename?: 'PromotionCodesInformation';
  applyTo?: Maybe<Scalars['String']>;
  codeStatus?: Maybe<PromotionCodeStatusType>;
  endDate?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  promoCode?: Maybe<Scalars['String']>;
  termAndCondition?: Maybe<TermAndConditionInformation>;
  warnings?: Maybe<Array<Maybe<Warning>>>;
};

export type PromotionCodesResponse = {
  __typename?: 'PromotionCodesResponse';
  data?: Maybe<Array<Maybe<PromotionCodeResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PromotionCodesTermAndCondition = {
  __typename?: 'PromotionCodesTermAndCondition';
  term?: Maybe<PromotionCodeData>;
  title?: Maybe<PromotionCodeData>;
};

export enum PromotionConditionEnumType {
  Gross = 'GROSS',
  Net = 'NET'
}

export type PromotionGwpPayload = {
  __typename?: 'PromotionGwpPayload';
  gwpRules?: Maybe<Array<Maybe<GwpRulePayload>>>;
  id: Scalars['String'];
};

export type PromotionGwpRuleInput = {
  gwpId?: InputMaybe<Scalars['String']>;
  information?: InputMaybe<GwpRuleInput>;
};

export type PromotionGwpSetsResponse = {
  __typename?: 'PromotionGwpSetsResponse';
  gwpProductSets?: Maybe<Array<Maybe<GwpWithQuantityResponse>>>;
};

export type PromotionPayload = {
  __typename?: 'PromotionPayload';
  id?: Maybe<Scalars['String']>;
};

export type PromotionResponse = Campaign | CartRule | Gwp | Shipping;

export type PromotionShippingPayload = {
  __typename?: 'PromotionShippingPayload';
  id: Scalars['String'];
  shippingRules?: Maybe<Array<Maybe<ShippingRulePayload>>>;
};

export enum PromotionSortableFieldEnum {
  EndDate = 'END_DATE',
  Id = 'ID',
  PromotionName = 'PROMOTION_NAME',
  StartDate = 'START_DATE'
}

export enum PromotionType {
  Campaign = 'CAMPAIGN',
  CartRule = 'CART_RULE',
  Gwp = 'GWP',
  Shipping = 'SHIPPING'
}

export type PromotionUsageDetail = {
  __typename?: 'PromotionUsageDetail';
  endDate?: Maybe<Scalars['Float']>;
  promotionDescription?: Maybe<Scalars['String']>;
  promotionName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
};

export type PromotionsResponse = {
  __typename?: 'PromotionsResponse';
  data?: Maybe<Array<Maybe<PromotionResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProviderExistingInput = {
  accessToken: Scalars['String'];
  provider: ProviderType;
};

export type ProviderExistingResponse = {
  __typename?: 'ProviderExistingResponse';
  email?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type ProviderInformationInput = {
  accessToken: Scalars['String'];
  provider: ProviderType;
};

export type ProviderLinkUnlinkResponse = {
  __typename?: 'ProviderLinkUnlinkResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type ProviderLoginInput = {
  accessToken: Scalars['String'];
  provider: ProviderType;
};

export enum ProviderType {
  Apple = 'APPLE',
  Facebook = 'FACEBOOK'
}

export type ProviderUnlinkInput = {
  provider: ProviderType;
};

export type ProviderUserInput = {
  /** email does not use. this supports client compatibility. */
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LocaleType>;
  lastName?: InputMaybe<Scalars['String']>;
  nationality: Scalars['String'];
  newsletterSubscription?: InputMaybe<Scalars['Boolean']>;
  policyAgreement: Scalars['Boolean'];
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  airline?: Maybe<AirLineResponse>;
  attribute?: Maybe<AttributeResponse>;
  attributes?: Maybe<AttributesResponse>;
  authorizationUser?: Maybe<AuthorizationUserProfileResponse>;
  authorizationUserExisting?: Maybe<AuthorizationCheckUserExistingResponse>;
  authorizationUsers?: Maybe<AuthorizationUsersResponse>;
  banners?: Maybe<Array<Maybe<BannerResponse>>>;
  brand?: Maybe<SelectBrandLocaleType>;
  brandCategories?: Maybe<Array<Maybe<BrandCategoryResponse>>>;
  brandCollectionBreadcrumbs?: Maybe<Array<Maybe<BrandCollectionBreadcrumbResponse>>>;
  brandMicrositeCategories?: Maybe<BrandCategoryLocaleListResponse>;
  brandMicrositeCategory?: Maybe<BrandMicrositeCategoryResponse>;
  brandMicrositeCategoryItem?: Maybe<BrandCategoryItem>;
  brandMicrositeCategoryItems?: Maybe<BrandCategoryItemListResponse>;
  brands?: Maybe<BrandResponse>;
  brandsRanking?: Maybe<BrandsRankingResponse>;
  cart?: Maybe<CartResponse>;
  cartCount?: Maybe<CartCount>;
  cartReOrder?: Maybe<CartResponse>;
  cartValidateEPurse?: Maybe<ValidateResponse>;
  cartValidation?: Maybe<CartValidationResponse>;
  carts?: Maybe<CartsResponse>;
  categories?: Maybe<CategoryResponse>;
  category?: Maybe<SelectCategoryType>;
  cms?: Maybe<CmsContentResponse>;
  collection?: Maybe<CollectionDetailResponse>;
  collections?: Maybe<CollectionsResponse>;
  content?: Maybe<ContentResponse>;
  contentBackOffice?: Maybe<ContentInformationResponse>;
  contents?: Maybe<ContentsResponse>;
  customer?: Maybe<CustomerResponse>;
  customers?: Maybe<CustomersResponse>;
  dealDuration?: Maybe<DealDurationResponse>;
  dealDurations?: Maybe<DealDurationsResponse>;
  eventLogs?: Maybe<EventLogsResponse>;
  flights?: Maybe<FlightResponse>;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  groups?: Maybe<AuthorizationGroupsResponse>;
  guestCart?: Maybe<CartResponse>;
  guestCartCount?: Maybe<CartCount>;
  gwp?: Maybe<GwpProductResponse>;
  gwps?: Maybe<GwpsProductResponse>;
  homepage?: Maybe<BannerHomepageResponse>;
  homepageCollections?: Maybe<Array<Maybe<CollectionHomepageResponse>>>;
  homepageShopByCategories?: Maybe<ShopByCategoryByResolutionResponse>;
  limitByBrands?: Maybe<LimitByBrandsResponse>;
  limitProductGroup?: Maybe<LimitProductGroupResponse>;
  limitProductGroups?: Maybe<LimitProductGroupsResponse>;
  login?: Maybe<LoginResponse>;
  member?: Maybe<MemberKpiResponse>;
  memberDiscounts?: Maybe<MemberDiscountsResponse>;
  meta?: Maybe<MetaResponse>;
  newsletterSubscription?: Maybe<NewsletterSubscriptionResponse>;
  order?: Maybe<OrderResponse>;
  orderAcquisition?: Maybe<OrderAcquisitionResponse>;
  orderReason?: Maybe<Array<Maybe<OrderReasonResponse>>>;
  orders?: Maybe<OrdersResponse>;
  paymentMethod?: Maybe<PaymentMethodResponse>;
  personalizeRecommendationProducts?: Maybe<PersonalizeRecommendationProductResponse>;
  premiumBrandFooter?: Maybe<PremiumBrandFooterResponse>;
  premiumBrandHeader?: Maybe<PremiumBrandHeaderResponse>;
  presets?: Maybe<AuthorizationPresetsResponse>;
  product?: Maybe<SelectProductLocaleType>;
  productCampaigns?: Maybe<Array<Maybe<ProductCampaignResponse>>>;
  productCollection?: Maybe<SelectProductLocaleType>;
  productLogs?: Maybe<ProductLogResponse>;
  productNode?: Maybe<ProductNodeResponse>;
  productNodes?: Maybe<ProductNodesResponse>;
  productSimilarity?: Maybe<ProductsResponse>;
  products?: Maybe<ProductsResponse>;
  productsRanking?: Maybe<ProductsRankingResponse>;
  promotion?: Maybe<PromotionResponse>;
  promotionCalculation?: Maybe<PromotionCalculationResponse>;
  promotionCode?: Maybe<PromotionCodeResponse>;
  promotionCodeUrl?: Maybe<PromotionCodeUrlResponse>;
  promotionCodes?: Maybe<PromotionCodesResponse>;
  promotionGwpSets?: Maybe<PromotionGwpSetsResponse>;
  promotions?: Maybe<PromotionsResponse>;
  reOrder?: Maybe<ReOrderResponse>;
  recommendProduct?: Maybe<ProductsResponse>;
  resource?: Maybe<BaseResourcesResponse>;
  resources?: Maybe<Array<Maybe<ResourceResponse>>>;
  resourcesBackOffice?: Maybe<BaseResourcesBackOfficeResponse>;
  roles?: Maybe<AuthorizationRolesResponse>;
  rule?: Maybe<Rule>;
  services?: Maybe<AuthorizationServicesResponse>;
  shipping?: Maybe<ShippingResponse>;
  shippingFee?: Maybe<ShippingFeeResponse>;
  shippings?: Maybe<ShippingsResponse>;
  sizeChart?: Maybe<SizeChartResponse>;
  sizeCharts?: Maybe<SizeChartsResponse>;
  /** @deprecated use 'brandMicrositeCategory' instead */
  subBrandMicrositeCategory?: Maybe<SubBrandMicrositeCategoryResponse>;
  suggestionProducts?: Maybe<SuggestionProductsResponse>;
  suggestionsSearch?: Maybe<SuggestionsResponse>;
  tag?: Maybe<TagResponse>;
  tags?: Maybe<TagsResponse>;
  task?: Maybe<Task>;
  tasks?: Maybe<TasksResponse>;
  user?: Maybe<UserResponse>;
  userLogin?: Maybe<LoginResponse>;
  users?: Maybe<UsersResponse>;
  wishlist?: Maybe<WishlistResponse>;
};


export type QueryAttributeArgs = {
  id: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
};


export type QueryAttributesArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  searchBy?: InputMaybe<AttributeSearchByEnumType>;
  sortBy?: InputMaybe<AttributeSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
  type?: InputMaybe<AttributeEnumType>;
};


export type QueryAuthorizationUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryAuthorizationUserExistingArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryAuthorizationUsersArgs = {
  email?: InputMaybe<Scalars['String']>;
  employeeName?: InputMaybe<Scalars['String']>;
  groupName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type QueryBannersArgs = {
  lang?: InputMaybe<LocaleType>;
  reference?: InputMaybe<Scalars['String']>;
  type: BannerTypeEnum;
};


export type QueryBrandArgs = {
  lang?: InputMaybe<LocaleType>;
  name: Scalars['String'];
};


export type QueryBrandCategoriesArgs = {
  brand?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
};


export type QueryBrandCollectionBreadcrumbsArgs = {
  brand?: InputMaybe<Scalars['String']>;
  collectionName?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  sku?: InputMaybe<Scalars['String']>;
};


export type QueryBrandMicrositeCategoriesArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  keywordBy?: InputMaybe<BrandCategoryKeywordByEnumType>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  showAll?: InputMaybe<Scalars['Boolean']>;
  sortBy?: InputMaybe<BrandCategoryFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};


export type QueryBrandMicrositeCategoryArgs = {
  brandName: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
  showAll?: InputMaybe<Scalars['Boolean']>;
};


export type QueryBrandMicrositeCategoryItemArgs = {
  brandName: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
  showAll?: InputMaybe<Scalars['Boolean']>;
  sku: Scalars['String'];
  subBrandCategoryName?: InputMaybe<Scalars['String']>;
  type: BrandCategoryItemViewType;
};


export type QueryBrandMicrositeCategoryItemsArgs = {
  brandName: Scalars['String'];
  filter?: InputMaybe<BrandCategoryItemFilterQuery>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<BrandCategoryItemFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
  subBrandCategoryName?: InputMaybe<Scalars['String']>;
  type: BrandCategoryItemViewType;
  viewOption?: InputMaybe<BrandCategoryItemViewOptionType>;
};


export type QueryBrandsArgs = {
  filter?: InputMaybe<BrandFilterInput>;
  label?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  remark?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<BrandSortInput>;
  sortBy?: InputMaybe<BrandFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};


export type QueryBrandsRankingArgs = {
  lang?: InputMaybe<LocaleType>;
  name: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  resource: RankingResourceInput;
};


export type QueryCartArgs = {
  cartDisplayId?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
};


export type QueryCartReOrderArgs = {
  cartDisplayId?: InputMaybe<Scalars['String']>;
};


export type QueryCartValidateEPurseArgs = {
  lang?: InputMaybe<LocaleType>;
};


export type QueryCartsArgs = {
  cartDisplayId?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
};


export type QueryCategoriesArgs = {
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  searchBy?: InputMaybe<CategorySearch>;
  sortBy?: InputMaybe<CategorySort>;
};


export type QueryCategoryArgs = {
  lang?: InputMaybe<LocaleType>;
  name: Scalars['String'];
};


export type QueryCollectionArgs = {
  lang?: InputMaybe<LocaleType>;
  name?: InputMaybe<Scalars['String']>;
  prettyUrl?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  filter?: InputMaybe<CollectionFilterInput>;
  lang?: InputMaybe<LocaleType>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortBy?: InputMaybe<CollectionSortableFieldEnum>;
  soryType?: InputMaybe<SortEnumType>;
};


export type QueryContentArgs = {
  contentType: ContentEnumType;
  isPreview?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LocaleType>;
  platform?: InputMaybe<PlatformEnumType>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryContentBackOfficeArgs = {
  contentType?: InputMaybe<ContentEnumType>;
  id?: InputMaybe<Scalars['String']>;
};


export type QueryContentsArgs = {
  brandLabel?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<ContentEnumType>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  recordsPerPage: Scalars['Int'];
  template?: InputMaybe<PremiumBrandTemplateEnum>;
  titleName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryCustomerArgs = {
  ssoId?: InputMaybe<Scalars['String']>;
};


export type QueryCustomersArgs = {
  filter?: InputMaybe<CustomerFilterQuery>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CustomerSortedByFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};


export type QueryDealDurationArgs = {
  id: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
};


export type QueryDealDurationsArgs = {
  durationStatus?: InputMaybe<DealDurationEnumStatus>;
  endDate?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LocaleType>;
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<DealDurationSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
  startDate?: InputMaybe<Scalars['Float']>;
  updatedDate?: InputMaybe<Scalars['Float']>;
};


export type QueryEventLogsArgs = {
  domain: EventLogDomainEnumType;
  filter?: InputMaybe<EventLogFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<EventLogSortInput>;
};


export type QueryFlightsArgs = {
  flightCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<FlightStatusType>;
};


export type QueryForgotPasswordArgs = {
  clientId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  language?: InputMaybe<LocaleType>;
};


export type QueryGuestCartArgs = {
  cartDisplayId: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
};


export type QueryGuestCartCountArgs = {
  cartDisplayId: Scalars['String'];
};


export type QueryGwpArgs = {
  lang?: InputMaybe<LocaleType>;
  sku: Scalars['String'];
};


export type QueryGwpsArgs = {
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHomepageArgs = {
  contentType: BannerTypeEnum;
  lang: LocaleType;
  platform: PlatformEnumType;
};


export type QueryHomepageCollectionsArgs = {
  lang: LocaleType;
  platform: PlatformEnumType;
};


export type QueryHomepageShopByCategoriesArgs = {
  lang: LocaleType;
  platform: PlatformEnumType;
};


export type QueryLimitByBrandsArgs = {
  brand?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sapCategory?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<LimitByBrandSortableFieldEnum>;
  sortOrders?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortType?: InputMaybe<SortEnumType>;
};


export type QueryLimitProductGroupArgs = {
  limitProductGroupId?: InputMaybe<Scalars['String']>;
};


export type QueryLimitProductGroupsArgs = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  unixEndTimeplace?: InputMaybe<Scalars['Float']>;
  unixStartTimeplace?: InputMaybe<Scalars['Float']>;
};


export type QueryLoginArgs = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryMemberArgs = {
  citizenId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  memberId?: InputMaybe<Scalars['String']>;
  passport?: InputMaybe<Scalars['String']>;
  ssoId?: InputMaybe<Scalars['String']>;
};


export type QueryMemberDiscountsArgs = {
  brand?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sapCategory?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<LimitByBrandSortableFieldEnum>;
  sortOrders?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortType?: InputMaybe<SortEnumType>;
};


export type QueryMetaArgs = {
  id: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
  type: MetaTypeEnum;
};


export type QueryNewsletterSubscriptionArgs = {
  email: Scalars['String'];
};


export type QueryOrderArgs = {
  email?: InputMaybe<Scalars['String']>;
  isRePayment?: InputMaybe<Scalars['Boolean']>;
  orderId?: InputMaybe<Scalars['String']>;
  read?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<OrderType>;
};


export type QueryOrdersArgs = {
  company?: InputMaybe<Array<InputMaybe<CompanyType>>>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  grandTotal?: InputMaybe<OrderGrandTotalInput>;
  itemSubtotal?: InputMaybe<OrderItemSubtotalInput>;
  member?: InputMaybe<OrderMemberInput>;
  orderAcquisition?: InputMaybe<OrderAcquisitionInput>;
  orderId?: InputMaybe<Scalars['String']>;
  orderState?: InputMaybe<OrderStateEnumType>;
  orderStatus?: InputMaybe<OrderStatusEnumType>;
  orderStatusTag?: InputMaybe<OrderStatusTagEnumType>;
  orderSubtotal?: InputMaybe<OrderOrderSubtotalInput>;
  page?: InputMaybe<Scalars['Int']>;
  paymentMethod?: InputMaybe<PaymentMedhodEnumType>;
  platform?: InputMaybe<PlatformEnumType>;
  promoCode?: InputMaybe<Scalars['String']>;
  purchaseDate?: InputMaybe<OrderPurchaseDateInput>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  shippingMethod?: InputMaybe<Array<InputMaybe<ShippingMethodType>>>;
  ssoId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<OrderType>;
};


export type QueryPersonalizeRecommendationProductsArgs = {
  visitorId?: InputMaybe<Scalars['String']>;
};


export type QueryPremiumBrandFooterArgs = {
  brandName: Scalars['String'];
  lang: LocaleType;
};


export type QueryPremiumBrandHeaderArgs = {
  brandName: Scalars['String'];
  lang: LocaleType;
  subCategoryName?: InputMaybe<Scalars['String']>;
};


export type QueryProductArgs = {
  lang?: InputMaybe<LocaleType>;
  prettyUrl?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type QueryProductCampaignsArgs = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lang?: InputMaybe<LocaleType>;
  metadataTags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductCollectionArgs = {
  collectionName?: InputMaybe<Scalars['String']>;
  collectionUrl?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  prettyUrl?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
};


export type QueryProductLogsArgs = {
  fieldName: ProductLogFieldNameEnum;
  filter?: InputMaybe<ProductLogFilterInput>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ProductLogSortInput>;
};


export type QueryProductNodeArgs = {
  lang?: InputMaybe<LocaleType>;
  sku: Scalars['String'];
};


export type QueryProductNodesArgs = {
  filter?: InputMaybe<ProductNodesFilterQuery>;
  keyword?: InputMaybe<Scalars['String']>;
  keywordBy?: InputMaybe<ProductNodeKeywordByFieldEnum>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortBy?: InputMaybe<ProductNodeSortedByFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};


export type QueryProductSimilarityArgs = {
  lang?: InputMaybe<LocaleType>;
  limit?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
  type?: InputMaybe<RecommendationTypeInput>;
};


export type QueryProductsArgs = {
  batch?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  collectionName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProductFilterQuery>;
  keyword?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  prettyUrl?: InputMaybe<Scalars['String']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortBy?: InputMaybe<ProductSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
  tag?: InputMaybe<Scalars['String']>;
};


export type QueryProductsRankingArgs = {
  lang?: InputMaybe<LocaleType>;
  name: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  resource: RankingResourceInput;
};


export type QueryPromotionArgs = {
  id: Scalars['String'];
  type: PromotionType;
};


export type QueryPromotionCalculationArgs = {
  cartDisplayId: Scalars['String'];
};


export type QueryPromotionCodeArgs = {
  memberTier?: InputMaybe<Scalars['String']>;
};


export type QueryPromotionCodeUrlArgs = {
  campaignId: Scalars['String'];
};


export type QueryPromotionCodesArgs = {
  campaignId?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  promotionCode?: InputMaybe<Scalars['String']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<PromotionCodeFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
};


export type QueryPromotionGwpSetsArgs = {
  lang?: InputMaybe<LocaleType>;
  sku: Scalars['String'];
};


export type QueryPromotionsArgs = {
  brand?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  promoCode?: InputMaybe<Scalars['String']>;
  promotionName?: InputMaybe<Scalars['String']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sku?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<PromotionSortableFieldEnum>;
  sortOrders?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sortType?: InputMaybe<SortEnumType>;
  type: PromotionType;
};


export type QueryReOrderArgs = {
  orderId: Scalars['String'];
};


export type QueryRecommendProductArgs = {
  lang?: InputMaybe<LocaleType>;
  limit?: InputMaybe<Scalars['Int']>;
  modelType?: InputMaybe<RecommendationTypeInput>;
  page?: InputMaybe<Scalars['Int']>;
  sku: Scalars['String'];
};


export type QueryResourcesArgs = {
  lang?: InputMaybe<LocaleType>;
  type?: InputMaybe<ResourceType>;
};


export type QueryRuleArgs = {
  type: Scalars['String'];
};


export type QueryShippingArgs = {
  zipCode: Scalars['String'];
};


export type QueryShippingFeeArgs = {
  zipCode: Scalars['String'];
};


export type QueryShippingsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type QuerySizeChartArgs = {
  id: Scalars['String'];
};


export type QuerySizeChartsArgs = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  remark?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<SizeChartSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SizeChatStatus>;
  updatedDate?: InputMaybe<Scalars['Float']>;
};


export type QuerySubBrandMicrositeCategoryArgs = {
  brandName: Scalars['String'];
  lang?: InputMaybe<LocaleType>;
  showAll?: InputMaybe<Scalars['Boolean']>;
  subBrandCategoryName: Scalars['String'];
};


export type QuerySuggestionProductsArgs = {
  filter?: InputMaybe<SuggestionProductFilter>;
  keyword?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type QuerySuggestionsSearchArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LocaleType>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  type: SuggestionsEnumType;
};


export type QueryTagArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryTagsArgs = {
  keyword?: InputMaybe<Scalars['String']>;
  keywordBy?: InputMaybe<TagSearchableFieldEnum>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<TagSortableFieldEnum>;
  sortType?: InputMaybe<SortEnumType>;
  sorts?: InputMaybe<Array<InputMaybe<TagSortingByField>>>;
};


export type QueryTaskArgs = {
  id: Scalars['String'];
};


export type QueryTasksArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryUsersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};


export type QueryWishlistArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export type RankingResourceInput = {
  id: Scalars['String'];
  type: RankingResourceType;
};

export enum RankingResourceType {
  Brand = 'BRAND',
  Category = 'CATEGORY',
  Collection = 'COLLECTION'
}

export type ReOrderResponse = {
  __typename?: 'ReOrderResponse';
  cartDisplayId: Scalars['String'];
};

export type Reasons = {
  __typename?: 'Reasons';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  other?: Maybe<Scalars['String']>;
};

export enum RecommendationTypeInput {
  BoughtBought = 'BOUGHT_BOUGHT',
  BuyTogether = 'BUY_TOGETHER',
  ContentBase = 'CONTENT_BASE',
  Customer = 'CUSTOMER',
  PoppularInCate = 'POPPULAR_IN_CATE'
}

export type RefreshTokenInput = {
  refreshToken: Scalars['String'];
};

export type RegisterInput = {
  birthDate?: InputMaybe<Scalars['Float']>;
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  confirmPassword?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LocaleType>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  newsletterSubscription?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  policyAgreement?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type RegisterMemberWithPrivilegeAcquisitionInput = {
  by: PrivilegeAcquisitionEnumType;
  value: Scalars['String'];
};

export type RegisterMemberWithPrivilegeInput = {
  acquisition: RegisterMemberWithPrivilegeAcquisitionInput;
  member: RegisterMemberWithPrivilegeMemberInput;
};

export type RegisterMemberWithPrivilegeMemberInput = {
  birthDate: Scalars['Float'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobile?: InputMaybe<Scalars['String']>;
  phoneCode: Scalars['String'];
  title: Scalars['String'];
};

export type RegisterMemberWithPrivilegePayload = {
  __typename?: 'RegisterMemberWithPrivilegePayload';
  success?: Maybe<Scalars['Boolean']>;
};

export enum RegisterMemberWithPrivilegeVerificationEnumType {
  Otp = 'OTP'
}

export type RemoveBrandMicrositeCategoryInput = {
  brandName: Scalars['String'];
};

export type RemoveBrandMicrositeCategoryProductsInput = {
  brandName: Scalars['String'];
  skus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subBrandCategoryName: Scalars['String'];
};

export type RemoveSubBrandMicrositeCategoryInput = {
  brandName: Scalars['String'];
  subBrandCategoryName: Scalars['String'];
};

export type RequestMemberVerificationInput = {
  lang?: InputMaybe<LocaleType>;
  method: MemberVerificationEnumType;
};

export type RequestMemberVerificationPayload = {
  __typename?: 'RequestMemberVerificationPayload';
  refCode?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type RequestRegisterMemberWithPrivilegeVerificationInput = {
  lang?: InputMaybe<LocaleType>;
  method: RegisterMemberWithPrivilegeVerificationEnumType;
};

export type RequestRegisterMemberWithPrivilegeVerificationPayload = {
  __typename?: 'RequestRegisterMemberWithPrivilegeVerificationPayload';
  refCode?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ResendEmailPayload = {
  __typename?: 'ResendEmailPayload';
  promoCode?: Maybe<Scalars['String']>;
  ssoId?: Maybe<Scalars['String']>;
};

export type ResendEmailToCartRulePayload = {
  __typename?: 'ResendEmailToCartRulePayload';
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
  /** pid is the reset token */
  pid: Scalars['String'];
  /** sid is the verify token */
  sid: Scalars['String'];
};

export type Resource = {
  __typename?: 'Resource';
  label?: Maybe<Scalars['String']>;
  member?: Maybe<Array<Maybe<MemberResourceResponse>>>;
  memberCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ResourceBackOfficeResponse = {
  __typename?: 'ResourceBackOfficeResponse';
  code?: Maybe<Scalars['String']>;
  isOther?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Locale>;
};

export type ResourceLocale = {
  __typename?: 'ResourceLocale';
  label?: Maybe<Locale>;
  member?: Maybe<Array<Maybe<MemberResourceResponse>>>;
  memberCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ResourceResponse = Resource | ResourceLocale;

export enum ResourceType {
  CardType = 'CARD_TYPE',
  Country = 'COUNTRY',
  Nationality = 'NATIONALITY',
  Province = 'PROVINCE',
  Title = 'TITLE'
}

export type ResourcesManagementResponse = {
  __typename?: 'ResourcesManagementResponse';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};

export type ResourcesResponse = {
  __typename?: 'ResourcesResponse';
  data?: Maybe<Array<Maybe<ResourceBackOfficeResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Rule = {
  __typename?: 'Rule';
  payload?: Maybe<RulePayloadType>;
  type?: Maybe<Scalars['String']>;
};

export type RulePayloadType = ExcludeCaratPayload | ExcludeInstalmentPayload;

export type RuleResponsePayload = {
  __typename?: 'RuleResponsePayload';
  type?: Maybe<Scalars['String']>;
};

export type SsoProviderRegisterInput = {
  provider: ProviderInformationInput;
  user: ProviderUserInput;
};

export type SapCategoryCreateUpdateResponse = {
  __typename?: 'SapCategoryCreateUpdateResponse';
  createdIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SelectBrandLocaleType = Brand | BrandLocale;

export type SelectCategoryType = Category | CategoryLocale;

export type SelectCollectionResponseType = CollecitonResponse | CollectionHomepage;

export type SelectContentResponse = FloatingBanner | HomepageResponse | MegaMenu | ModalBanner | PowerDeal | StaticPage;

export type SelectMemberNameLocaleType = MemberKpiName | MemberKpiNameLocale;

export type SelectProductLocaleType = Product | ProductLocale;

export type SelectedGwp = {
  __typename?: 'SelectedGwp';
  gwpInfo?: Maybe<Array<Maybe<GwpInformation>>>;
  gwpSetId?: Maybe<Scalars['String']>;
  offeringMethod?: Maybe<Scalars['String']>;
  referenceSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SelectedGwpLocale = {
  __typename?: 'SelectedGwpLocale';
  gwpInfo?: Maybe<Array<Maybe<GwpLocaleInformation>>>;
  gwpSetId?: Maybe<Scalars['String']>;
  offeringMethod?: Maybe<Scalars['String']>;
  referenceSkus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SelectedGwpResponse = SelectedGwp | SelectedGwpLocale;

export type Seo = {
  __typename?: 'Seo';
  additionalContent?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type SeoLocale = {
  __typename?: 'SeoLocale';
  additionalContent?: Maybe<Locale>;
  description?: Maybe<Locale>;
  keywords?: Maybe<StringListByLocale>;
  title?: Maybe<Locale>;
};

export type Shipping = {
  __typename?: 'Shipping';
  applyDiscountOverLimit?: Maybe<Scalars['Boolean']>;
  applyNonMember?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  descriptionUrl?: Maybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: Maybe<Array<Maybe<Scalars['String']>>>;
  endDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  limitPerCustomer?: Maybe<Scalars['Int']>;
  limitPerOrder?: Maybe<Scalars['Int']>;
  maxUse?: Maybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: Maybe<Array<Maybe<Scalars['String']>>>;
  minimumSubTotal?: Maybe<Scalars['Float']>;
  platforms?: Maybe<PlatformResponse>;
  priority?: Maybe<Scalars['Int']>;
  promotionName?: Maybe<Scalars['String']>;
  shippingRules?: Maybe<Array<Maybe<ShippingRule>>>;
  startDate?: Maybe<Scalars['Float']>;
  storeId?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  used?: Maybe<Scalars['Int']>;
};

export type ShippingAddressBackOfficeResponse = {
  __typename?: 'ShippingAddressBackOfficeResponse';
  country?: Maybe<CountryBackOfficeResponse>;
  district?: Maybe<BaseResourceBackOfficeResponse>;
  postal?: Maybe<PostalCodeResponse>;
  province?: Maybe<BaseResourceBackOfficeResponse>;
};

export type ShippingAddressesResponse = {
  __typename?: 'ShippingAddressesResponse';
  data?: Maybe<Array<Maybe<ShippingAddressBackOfficeResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ShippingCondition = {
  __typename?: 'ShippingCondition';
  calculateSeparateDeliveryType?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<DeliveryTypeResponse>;
  excludes?: Maybe<ShippingConditionGroup>;
  id?: Maybe<Scalars['String']>;
  includes?: Maybe<ShippingConditionGroup>;
  itemQuantity?: Maybe<Scalars['Int']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  minimumAmount?: Maybe<Scalars['Float']>;
  promotionShippingFee?: Maybe<Scalars['Float']>;
  provinces?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
};

export type ShippingConditionGroup = {
  __typename?: 'ShippingConditionGroup';
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  metadataTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ShippingConditionInput = {
  calculateSeparateDeliveryType?: InputMaybe<Scalars['Boolean']>;
  country?: InputMaybe<Scalars['String']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  excludes?: InputMaybe<ConditionInput>;
  id?: InputMaybe<Scalars['String']>;
  includes?: InputMaybe<ConditionInput>;
  itemQuantity?: InputMaybe<Scalars['Int']>;
  maximumAmount?: InputMaybe<Scalars['Float']>;
  minimumAmount?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<Scalars['Int']>;
  promotionShippingFee?: InputMaybe<Scalars['Float']>;
  provinces?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<PromotionConditionEnumType>;
};

export type ShippingConditionPayload = {
  __typename?: 'ShippingConditionPayload';
  id?: Maybe<Scalars['String']>;
};

export enum ShippingEnumType {
  Shipping = 'SHIPPING'
}

export type ShippingFeeResponse = {
  __typename?: 'ShippingFeeResponse';
  shippingFee?: Maybe<Scalars['Float']>;
};

export enum ShippingMethodType {
  Arrival = 'ARRIVAL',
  Delivery = 'DELIVERY',
  Departure = 'DEPARTURE'
}

export type ShippingResponse = {
  __typename?: 'ShippingResponse';
  area?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  providerLabel?: Maybe<Scalars['String']>;
  providerName?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type ShippingRule = {
  __typename?: 'ShippingRule';
  isActive?: Maybe<Scalars['Boolean']>;
  shippingConditions?: Maybe<Array<Maybe<ShippingCondition>>>;
  templateType?: Maybe<Scalars['String']>;
};

export type ShippingRuleInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  ruleType?: InputMaybe<ShippingEnumType>;
  shippingConditions?: InputMaybe<Array<InputMaybe<ShippingConditionInput>>>;
  templateType?: InputMaybe<ShippingTemplateEnumType>;
};

export type ShippingRulePayload = {
  __typename?: 'ShippingRulePayload';
  shippingConditions?: Maybe<Array<Maybe<ShippingConditionPayload>>>;
  templateType?: Maybe<Scalars['String']>;
};

export enum ShippingTemplateEnumType {
  BuyItemXGetFeeY = 'BuyItemXGetFeeY',
  BuyXAmountGetFeeY = 'BuyXAmountGetFeeY'
}

export type ShippingsResponse = {
  __typename?: 'ShippingsResponse';
  data?: Maybe<Array<Maybe<ShippingResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ShopByCategoryByResolutionResponse = {
  __typename?: 'ShopByCategoryByResolutionResponse';
  desktop?: Maybe<Array<Maybe<ShopByCategoryResponse>>>;
  mobile?: Maybe<Array<Maybe<ShopByCategoryResponse>>>;
};

export type ShopByCategoryHomepageInput = {
  banners?: InputMaybe<Array<InputMaybe<HomepageImageInput>>>;
  categoryName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ShopByCategoryResponse = {
  __typename?: 'ShopByCategoryResponse';
  banners?: Maybe<Array<Maybe<HomepageImageResponse>>>;
  categoryName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum ShoppingCartShipToType {
  Arrival = 'ARRIVAL',
  D = 'D',
  Delivery = 'DELIVERY',
  Departure = 'DEPARTURE',
  P = 'P'
}

export type SizeChartPayload = {
  __typename?: 'SizeChartPayload';
  id?: Maybe<Scalars['String']>;
};

export type SizeChartResponse = {
  __typename?: 'SizeChartResponse';
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductNodesResponse>;
  remark?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Float']>;
};


export type SizeChartResponseProductsArgs = {
  lang?: InputMaybe<LocaleType>;
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export enum SizeChartSortableFieldEnum {
  Default = 'DEFAULT',
  Name = 'NAME',
  Updateddate = 'UPDATEDDATE'
}

export type SizeChartUpdatedDetail = {
  __typename?: 'SizeChartUpdatedDetail';
  name?: Maybe<Scalars['String']>;
  skusAddedInSizeChart?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SizeChartsResponse = {
  __typename?: 'SizeChartsResponse';
  data?: Maybe<Array<Maybe<SizeChartResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum SizeChatStatus {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SortFileType {
  Field = 'FIELD',
  File = 'FILE'
}

export type StaticPage = {
  __typename?: 'StaticPage';
  css?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  titleName?: Maybe<Scalars['String']>;
};

export type StaticPageContent = {
  css?: InputMaybe<LocaleInput>;
  html?: InputMaybe<LocaleInput>;
  metaDescription?: InputMaybe<LocaleInput>;
  metaTitle?: InputMaybe<LocaleInput>;
  titleName?: InputMaybe<LocaleInput>;
};

export type StaticPageContentLocale = ContentInformationResponse & {
  __typename?: 'StaticPageContentLocale';
  author?: Maybe<Scalars['String']>;
  /** @deprecated use 'author' instead */
  authorName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  staticPageContent?: Maybe<StaticPageContentResponse>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StaticPageContentResponse = {
  __typename?: 'StaticPageContentResponse';
  css?: Maybe<Locale>;
  html?: Maybe<Locale>;
  metaDescription?: Maybe<Locale>;
  metaTitle?: Maybe<Locale>;
  titleName?: Maybe<Locale>;
};

export type StaticPages = ContentBackOfficeResponse & {
  __typename?: 'StaticPages';
  author?: Maybe<Scalars['String']>;
  /** @deprecated be idle */
  authorName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  createDate?: Maybe<Scalars['Float']>;
  createdDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  titleName?: Maybe<Scalars['String']>;
  /** @deprecated use 'updatedDate' instead */
  updateDate?: Maybe<Scalars['Float']>;
  updatedDate?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
};

export enum StatusEnumType {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Stock = {
  __typename?: 'Stock';
  previousPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** @deprecated deprecated on 2020-08-31 for microsite backward compatibility */
  quantity?: Maybe<Scalars['Int']>;
  quantityByDeliveryType?: Maybe<StockQuantityByDeliveryType>;
};

export type StockBof = {
  __typename?: 'StockBof';
  previousPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** @deprecated deprecated on 2020-08-31 for microsite backward compatibility */
  quantity?: Maybe<Scalars['Int']>;
  quantityByLocations?: Maybe<Array<Maybe<StockBofQuantityByLocation>>>;
  syncStatus?: Maybe<Scalars['String']>;
  totalQuantity?: Maybe<Scalars['Int']>;
};

export type StockBofQuantityByLocation = {
  __typename?: 'StockBofQuantityByLocation';
  location?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type StockQuantityByDeliveryType = {
  __typename?: 'StockQuantityByDeliveryType';
  arrival?: Maybe<Scalars['Int']>;
  delivery?: Maybe<Scalars['Int']>;
  departure?: Maybe<Scalars['Int']>;
};

export type StockUpdateQuantityInput = {
  quantity: Scalars['Int'];
  sku: Scalars['String'];
};

export type StocksPayload = {
  __typename?: 'StocksPayload';
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Language */
export type StringListByLocale = {
  __typename?: 'StringListByLocale';
  cn?: Maybe<Array<Maybe<Scalars['String']>>>;
  en?: Maybe<Array<Maybe<Scalars['String']>>>;
  th?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SubAttributeValue = {
  __typename?: 'SubAttributeValue';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SubAttributeValueLocale = {
  __typename?: 'SubAttributeValueLocale';
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
};

export type SubBrandCategory = {
  __typename?: 'SubBrandCategory';
  childs?: Maybe<Array<Maybe<SubBrandCategory>>>;
  description?: Maybe<Scalars['String']>;
  items?: Maybe<BrandCategoryItemListResponse>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};


export type SubBrandCategoryItemsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ProductNodeSearchInput>;
  sort?: InputMaybe<ProductNodeSortInput>;
  type: BrandCategoryItemViewType;
  viewOption?: InputMaybe<BrandCategoryItemViewOptionType>;
};

export type SubBrandCategoryLocale = {
  __typename?: 'SubBrandCategoryLocale';
  childs?: Maybe<Array<Maybe<SubBrandCategoryLocale>>>;
  description?: Maybe<Scalars['String']>;
  items?: Maybe<BrandCategoryItemListResponse>;
  label?: Maybe<Locale>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};


export type SubBrandCategoryLocaleItemsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<ProductNodeSearchInput>;
  sort?: InputMaybe<ProductNodeSortInput>;
  type: BrandCategoryItemViewType;
  viewOption?: InputMaybe<BrandCategoryItemViewOptionType>;
};

export type SubBrandMicrositeCategoryInput = {
  brandName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<LocaleInput>;
  metadata?: InputMaybe<MetadataInput>;
  parentName?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<BrandCategoryStatusType>;
  subBrandCategoryName: Scalars['String'];
};

export type SubBrandMicrositeCategoryResponse = SubBrandCategory | SubBrandCategoryLocale;

export type SubMegaMenuChildBannerChild = {
  __typename?: 'SubMegaMenuChildBannerChild';
  images?: Maybe<Array<Maybe<CmsImageResponse>>>;
  subMegaMenuChildBannerType?: Maybe<SubMegaMenuChildBannerType>;
};

export type SubMegaMenuChildBannerChildInput = {
  images?: InputMaybe<Array<InputMaybe<CmsImageInput>>>;
  subMegaMenuChildBannerType?: InputMaybe<SubMegaMenuChildBannerType>;
};

export enum SubMegaMenuChildBannerType {
  FourBannerIsolate = 'FOUR_BANNER_ISOLATE',
  OneBannerFull = 'ONE_BANNER_FULL',
  OneBannerVertical = 'ONE_BANNER_VERTICAL',
  ThreeBannerIsolateBottomFull = 'THREE_BANNER_ISOLATE_BOTTOM_FULL',
  ThreeBannerIsolateLeftFull = 'THREE_BANNER_ISOLATE_LEFT_FULL',
  ThreeBannerIsolateRightFull = 'THREE_BANNER_ISOLATE_RIGHT_FULL',
  ThreeBannerIsolateTopFull = 'THREE_BANNER_ISOLATE_TOP_FULL',
  ThreeBannerVertical = 'THREE_BANNER_VERTICAL',
  TwoBannerHorizontal = 'TWO_BANNER_HORIZONTAL',
  TwoBannerVertical = 'TWO_BANNER_VERTICAL'
}

export type SubMegaMenuChildColumn = {
  __typename?: 'SubMegaMenuChildColumn';
  header?: Maybe<Scalars['String']>;
  subMegaMenuChildBanner?: Maybe<SubMegaMenuChildBannerChild>;
  subMegaMenuChildItemType?: Maybe<SubMegaMenuChildItemType>;
  subMegaMenuChildList?: Maybe<Array<Maybe<SubMegaMenuChildListMenu>>>;
};

export type SubMegaMenuChildColumnInput = {
  header?: InputMaybe<Scalars['String']>;
  /** if you implement this, SubMegaMenuChildList doesn't implement */
  subMegaMenuChildBanner?: InputMaybe<SubMegaMenuChildBannerChildInput>;
  /** SubMegaMenuChildItemType is consistency with SubMegaMenuChildList and SubMegaMenuChildBanner */
  subMegaMenuChildItemType?: InputMaybe<SubMegaMenuChildItemType>;
  /** if you implement this, SubMegaMenuChildBanner doesn't implement */
  subMegaMenuChildList?: InputMaybe<Array<InputMaybe<SubMegaMenuChildListInput>>>;
};

export enum SubMegaMenuChildItemType {
  Banner = 'BANNER',
  List = 'LIST'
}

export type SubMegaMenuChildListInput = {
  childs?: InputMaybe<Array<InputMaybe<SubMegaMenuChildListInput>>>;
  reference?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type SubMegaMenuChildListMenu = {
  __typename?: 'SubMegaMenuChildListMenu';
  childs?: Maybe<Array<Maybe<SubMegaMenuChildListMenu>>>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SubMegaMenuLocale = {
  __typename?: 'SubMegaMenuLocale';
  cn?: Maybe<Array<Maybe<MegaMenuData>>>;
  en?: Maybe<Array<Maybe<MegaMenuData>>>;
  th?: Maybe<Array<Maybe<MegaMenuData>>>;
};

export type SubMegaMenuLocaleInput = {
  cn?: InputMaybe<Array<InputMaybe<MegaMenuDataInput>>>;
  en?: InputMaybe<Array<InputMaybe<MegaMenuDataInput>>>;
  th?: InputMaybe<Array<InputMaybe<MegaMenuDataInput>>>;
};

export enum SubMegaMenuType {
  MenuFourColumns = 'MENU_FOUR_COLUMNS',
  MenuLink = 'MENU_LINK',
  MenuThreeColumns = 'MENU_THREE_COLUMNS'
}

export type SubOrderCarat = {
  __typename?: 'SubOrderCarat';
  caratBurn?: Maybe<SubOrderCaratBurn>;
  caratEarn?: Maybe<SubOrderCaratEarn>;
};

export type SubOrderCaratBurn = {
  __typename?: 'SubOrderCaratBurn';
  caratPoint?: Maybe<Scalars['Float']>;
  caratPrice?: Maybe<Scalars['Float']>;
};

export type SubOrderCaratEarn = {
  __typename?: 'SubOrderCaratEarn';
  caratTotal?: Maybe<Scalars['Float']>;
  earnSubtotal?: Maybe<Scalars['Float']>;
};

export type SubOrderInformation = {
  __typename?: 'SubOrderInformation';
  carat?: Maybe<SubOrderCarat>;
  company?: Maybe<Scalars['String']>;
  displayStatus?: Maybe<Scalars['String']>;
  flightDetail?: Maybe<OrderFlightDetail>;
  grandTotal?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  logisticId?: Maybe<Scalars['String']>;
  logisticName?: Maybe<Scalars['String']>;
  logisticTrackingNumber?: Maybe<Scalars['String']>;
  orderDiscount?: Maybe<Scalars['Float']>;
  orderSubTotal?: Maybe<Scalars['Float']>;
  productDiscount?: Maybe<Scalars['Float']>;
  productSubtotal?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  shippingAddress?: Maybe<Address>;
  shippingMethod?: Maybe<ShippingMethodType>;
  status?: Maybe<Scalars['String']>;
  stockLocation?: Maybe<Scalars['String']>;
  subOrderId?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
};

export type SubscriptionPayload = {
  __typename?: 'SubscriptionPayload';
  email?: Maybe<Scalars['String']>;
  isSubscribe?: Maybe<Scalars['Boolean']>;
};

export type SuggestionProductFilter = {
  brand?: InputMaybe<Scalars['String']>;
};

export type SuggestionProductsResponse = {
  __typename?: 'SuggestionProductsResponse';
  data?: Maybe<Array<Maybe<Product>>>;
};

/** prefer to `suggestionProducts` in order to get `Product` type */
export type SuggestionResponse = Brand | HotWord | Keyword | Product;

export enum SuggestionsEnumType {
  Brand = 'BRAND',
  HotWords = 'HOT_WORDS',
  Keyword = 'KEYWORD',
  Product = 'PRODUCT'
}

export type SuggestionsResponse = {
  __typename?: 'SuggestionsResponse';
  data?: Maybe<Array<Maybe<SuggestionResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SyncGwpsImagesInput = {
  skus: Array<InputMaybe<Scalars['String']>>;
};

export type SyncGwpsImagesResponse = {
  __typename?: 'SyncGwpsImagesResponse';
  failedItems?: Maybe<Array<Maybe<FailedGwpItem>>>;
  successfulItems?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SyncProductsImagesInput = {
  skus: Array<InputMaybe<Scalars['String']>>;
};

export type SyncProductsImagesResponse = {
  __typename?: 'SyncProductsImagesResponse';
  failedItems?: Maybe<Array<Maybe<FailedProductItem>>>;
  successfulItems?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TagPayload = {
  __typename?: 'TagPayload';
  name?: Maybe<Scalars['String']>;
};

export type TagResponse = {
  __typename?: 'TagResponse';
  createdDate?: Maybe<Scalars['Int']>;
  label?: Maybe<Locale>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductsTagResponse>;
  remark?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Int']>;
};


export type TagResponseProductsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
};

export enum TagSearchableFieldEnum {
  Name = 'NAME',
  Sku = 'SKU'
}

export enum TagSortableFieldEnum {
  CreateDate = 'CREATE_DATE',
  Name = 'NAME',
  Score = 'SCORE',
  Status = 'STATUS'
}

export type TagSortingByField = {
  direction?: InputMaybe<SortEnumType>;
  field?: InputMaybe<TagSortableFieldEnum>;
};

export enum TagStatus {
  Disable = 'DISABLE',
  Enable = 'ENABLE'
}

export type TagsResponse = {
  __typename?: 'TagsResponse';
  data?: Maybe<Array<Maybe<TagResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Task = {
  __typename?: 'Task';
  app?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Int']>;
  domain?: Maybe<Scalars['String']>;
  endTaskDate?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  logs?: Maybe<Array<Maybe<TaskLogsType>>>;
  method?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['AnyType']>;
  result?: Maybe<TaskResultType>;
  startTaskDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['Int']>;
};

export type TaskLogsType = {
  __typename?: 'TaskLogsType';
  createdDate?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['AnyType']>;
  status?: Maybe<Scalars['String']>;
};

export type TaskRegister = {
  __typename?: 'TaskRegister';
  taskId?: Maybe<Scalars['String']>;
};

export type TaskResultType = {
  __typename?: 'TaskResultType';
  isSuccess?: Maybe<Scalars['Boolean']>;
  payload?: Maybe<Scalars['AnyType']>;
};

export type TasksResponse = {
  __typename?: 'TasksResponse';
  data?: Maybe<Array<Maybe<Task>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TaxInvoiceRequestBusinessInput = {
  address?: InputMaybe<Scalars['String']>;
  branch?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  orderId: Scalars['String'];
  phoneCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  taxId?: InputMaybe<Scalars['String']>;
};

export type TaxInvoiceRequestPersonalInput = {
  address?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  district?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  orderId: Scalars['String'];
  phoneCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  taxId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TermAndConditionInformation = {
  __typename?: 'TermAndConditionInformation';
  term?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UnreadTotalResponse = {
  __typename?: 'UnreadTotalResponse';
  awaitingPayment?: Maybe<Scalars['Int']>;
  history?: Maybe<Scalars['Int']>;
  inProgress?: Maybe<Scalars['Int']>;
};

export type UpdateAddressInput = {
  address?: InputMaybe<AddressInput>;
  addressId: Scalars['String'];
  ssoId?: InputMaybe<Scalars['String']>;
};

export type UpdateAttributeInput = {
  id: Scalars['String'];
  information?: InputMaybe<UpdateInformationAttributeInput>;
};

export type UpdateAttributeValueInput = {
  hexCode?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<UploadImageInput>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<LocaleInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateAttributesStatusInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isEnabled: Scalars['Boolean'];
};

export type UpdateBannerFloatingInput = {
  author: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  desktopImages?: InputMaybe<ImageLocaleInput>;
  id: Scalars['String'];
  name: Scalars['String'];
  page: PageInput;
  position: Scalars['String'];
  status: StatusEnumType;
};

export type UpdateBannerModalInput = {
  author: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  desktopImages?: InputMaybe<ImageLocaleInput>;
  id: Scalars['String'];
  mobileImages?: InputMaybe<ImageLocaleInput>;
  name: Scalars['String'];
  platform: PlatformInput;
  status: StatusEnumType;
};

export type UpdateCartBurnCaratInput = {
  cartDisplayId: Scalars['String'];
  usageCarat: Scalars['Int'];
};

export type UpdateCartDisableBurnCaratInput = {
  cartDisplayId: Scalars['String'];
};

export type UpdateCartEnableBurnCaratInput = {
  cartDisplayId: Scalars['String'];
  citizenId: Scalars['String'];
};

export type UpdateCartEnableBurnCaratWithPassportInput = {
  cartDisplayId: Scalars['String'];
  passportId: Scalars['String'];
};

export type UpdateCartFlightInfoInput = {
  airlineCode: Scalars['String'];
  airportCode: Scalars['String'];
  cartDisplayId: Scalars['String'];
  flightNo: Scalars['String'];
  flightStatus: CartMeFlightStatusType;
  flightUnixDate: Scalars['Float'];
  pickupCounterCode: Scalars['String'];
  terminal: Scalars['String'];
};

export type UpdateCartFlightPersonalInfoInput = {
  cartDisplayId: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobile: Scalars['String'];
  nationality: Scalars['String'];
  passport: Scalars['String'];
  phoneCode: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateCartGwpAcknowledge = {
  gwpAcknowledge: Scalars['Boolean'];
};

export type UpdateCartGwpCheckoutConfirm = {
  isAccept: Scalars['Boolean'];
};

export type UpdateCartGwpLocaleInformation = {
  availableQuantity: Scalars['Int'];
  dutyFree?: InputMaybe<Scalars['Boolean']>;
  gwpAcknowledgeQuantity?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<ImageGwpInput>;
  productName?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
  quantityToSelected: Scalars['Int'];
  shipTo?: InputMaybe<ShoppingCartShipToType>;
  sku: Scalars['String'];
};

export type UpdateCartGwpsInput = {
  canSelectGwps?: InputMaybe<Array<InputMaybe<UpdateCartGwpLocaleInformation>>>;
  gwpSetId: Scalars['String'];
  referenceSkus?: InputMaybe<Array<InputMaybe<UpdateGwpReferenceInformation>>>;
  selectedGwps?: InputMaybe<Array<InputMaybe<UpdateCartGwpLocaleInformation>>>;
};

export type UpdateCartItemInput = {
  isSelected?: InputMaybe<Scalars['Boolean']>;
  shipTo: ShoppingCartShipToType;
  sku: Scalars['String'];
};

export type UpdateCartItemsMultipleInput = {
  cartDisplayId: Scalars['String'];
  cartItems?: InputMaybe<Array<InputMaybe<UpdateCartItemInput>>>;
};

export type UpdateCartMeFlightInfoInput = {
  airlineCode: Scalars['String'];
  airportCode: Scalars['String'];
  flightNo: Scalars['String'];
  flightStatus: CartMeFlightStatusType;
  flightUnixDate: Scalars['Float'];
  pickupCounterCode: Scalars['String'];
  terminal: Scalars['String'];
};

export type UpdateCartMeFlightPersonalInfoInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mobile: Scalars['String'];
  nationality: Scalars['String'];
  passport: Scalars['String'];
  phoneCode: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateCartMeGwpAcknowledgeQuantity = {
  gwps?: InputMaybe<Array<InputMaybe<UpdateCartGwpsInput>>>;
};

export type UpdateCartShippingInput = {
  addressId: Scalars['String'];
  cartDisplayId: Scalars['String'];
};

export type UpdateCollectionInput = {
  banners?: InputMaybe<Array<InputMaybe<CollectionBannerInput>>>;
  /** Deprecate use banners instead */
  images?: InputMaybe<Array<InputMaybe<CollectionImageInput>>>;
  isBannerDisplay?: InputMaybe<Scalars['Boolean']>;
  isDisable?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<LocaleInput>;
  metadata?: InputMaybe<CollectionMetadataInput>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  skus?: InputMaybe<Array<InputMaybe<CollectionSkuInput>>>;
};

export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  isDisable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateCollectionStatusInput = {
  isDisable?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateContentStatusInput = {
  ids: Array<InputMaybe<Scalars['String']>>;
  status: StatusEnumType;
};

export type UpdateCustomerInput = {
  information?: InputMaybe<CustomerInput>;
  ssoId?: InputMaybe<Scalars['String']>;
};

export type UpdateCustomerStatusLock = {
  isLock: Scalars['Boolean'];
  remark?: InputMaybe<Scalars['String']>;
  ssoId: Scalars['String'];
};

export type UpdateDealDurarionInput = {
  description: Scalars['String'];
  endDate: Scalars['Float'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  remark: LocaleInput;
  startDate: Scalars['Float'];
};

export type UpdateDealDurarionIsActiveInput = {
  ids: Array<InputMaybe<Scalars['String']>>;
  isActive: Scalars['Boolean'];
};

export type UpdateGuestCartFlightInfoInput = {
  airlineCode: Scalars['String'];
  airportCode: Scalars['String'];
  cartDisplayId: Scalars['String'];
  flightNo: Scalars['String'];
  flightStatus: GuestCartFlightStatusType;
  flightUnixDate: Scalars['Float'];
  pickupCounterCode: Scalars['String'];
  terminal: Scalars['String'];
};

export type UpdateGwpProductImageByTagInput = {
  tagName: Scalars['String'];
};

export type UpdateGwpReferenceInformation = {
  shipTo?: InputMaybe<ShoppingCartShipToType>;
  sku?: InputMaybe<Scalars['String']>;
};

export type UpdateHomepageInput = {
  author: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  homepage?: InputMaybe<HomepageInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['Float']>;
  status: StatusEnumType;
};

export type UpdateInformationAttributeInput = {
  display?: InputMaybe<AttributeDisplayEnumType>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<LocaleInput>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AttributeEnumType>;
  values?: InputMaybe<Array<InputMaybe<UpdateAttributeValueInput>>>;
};

export type UpdateLimitProductGroupInput = {
  information?: InputMaybe<LimitProductGroupInput>;
  limitProductGroupId: Scalars['String'];
};

export type UpdateMegaMenuInput = {
  author?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnumType>;
  subMenus?: InputMaybe<SubMegaMenuLocaleInput>;
};

export type UpdateOrderAddressInput = {
  information: OrderAddressInformationInput;
  orderId: Scalars['String'];
};

export type UpdateOrderReOrderInput = {
  cancelOrderReason: BackOfficeOrderReasonInput;
  orderId: Scalars['String'];
};

export type UpdateOrderStatusInput = {
  orderId: Scalars['String'];
  orderReason?: InputMaybe<BackOfficeOrderReasonInput>;
  status: OrderStatusType;
};

export type UpdatePowerDealCollectionInput = {
  collectionName: Scalars['String'];
  id: Scalars['String'];
};

export type UpdatePowerDealInput = {
  author?: InputMaybe<Scalars['String']>;
  collectionName: Scalars['String'];
  duration: CreatePowerDealDurationInput;
  endPage: CreatePowerDealPageInput;
  id: Scalars['String'];
  info: CreatePowerDealInfoInput;
  metaDescription?: InputMaybe<LocaleInput>;
  metaTitle?: InputMaybe<LocaleInput>;
  ongoingPage: CreatePowerDealPageInput;
  upcomingPage: CreatePowerDealPageInput;
};

export type UpdatePremiumBrandInput = {
  author?: InputMaybe<Scalars['String']>;
  brandLabel?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<ContentPremiumBrandLocaleInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<StatusEnumType>;
  template?: InputMaybe<PremiumBrandTemplateEnum>;
};

export type UpdatePresetInput = {
  presetId?: InputMaybe<Scalars['String']>;
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateProductImageByTagInput = {
  tagName: Scalars['String'];
};

export type UpdateProductInstalmentInput = {
  skus: Array<InputMaybe<Scalars['String']>>;
  value: Scalars['Boolean'];
};

export type UpdateProductStatusAndVisibilityInput = {
  isDisabled: Scalars['Boolean'];
  isVisible: Scalars['Boolean'];
  remark?: InputMaybe<Scalars['String']>;
  skus: Array<InputMaybe<Scalars['String']>>;
};

export type UpdatePromotionActionInput = {
  action?: InputMaybe<PromotionActionEnumType>;
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type?: InputMaybe<PromotionType>;
};

export type UpdatePromotionCampaignInput = {
  id: Scalars['String'];
  information: PromotionCampaignInput;
};

export type UpdatePromotionCampaignRuleInput = {
  id: Scalars['String'];
  information: PromotionCampaignRuleInput;
};

export type UpdatePromotionCartInput = {
  id: Scalars['String'];
  information: PromotionCartRuleInput;
};

export type UpdatePromotionCartRuleInput = {
  cartRuleId: Scalars['String'];
  information: OrderRuleInput;
};

export type UpdatePromotionGwpInput = {
  airports?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  applyDiscountOverLimit?: InputMaybe<Scalars['Boolean']>;
  applyNonMember?: InputMaybe<Scalars['Boolean']>;
  deliveryType?: InputMaybe<DeliveryTypeInput>;
  description?: InputMaybe<Scalars['String']>;
  descriptionUrl?: InputMaybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Float']>;
  gwpId: Scalars['String'];
  gwpRules?: InputMaybe<Array<InputMaybe<GwpRuleInput>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limitPerCustomer?: InputMaybe<Scalars['Int']>;
  limitPerOrder?: InputMaybe<Scalars['Int']>;
  maxUse?: InputMaybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimumSubTotal?: InputMaybe<Scalars['Float']>;
  platforms?: InputMaybe<PlatformInput>;
  priority?: InputMaybe<Scalars['Int']>;
  promotionName?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Float']>;
  storeId?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
  used?: InputMaybe<Scalars['Int']>;
};

export type UpdatePromotionShippingInput = {
  applyDiscountOverLimit?: InputMaybe<Scalars['Boolean']>;
  applyNonMember?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  descriptionUrl?: InputMaybe<Scalars['String']>;
  /** This field control allowed domains in the list (default: allow all domains). */
  domains?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  limitPerCustomer?: InputMaybe<Scalars['Int']>;
  limitPerOrder?: InputMaybe<Scalars['Int']>;
  maxUse?: InputMaybe<Scalars['Int']>;
  /** This field allowed member level in the list. (default: allow all member levels). */
  memberLevels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  minimumSubTotal?: InputMaybe<Scalars['Float']>;
  platforms?: InputMaybe<PlatformInput>;
  priority?: InputMaybe<Scalars['Int']>;
  promotionName?: InputMaybe<Scalars['String']>;
  shippingId?: InputMaybe<Scalars['String']>;
  shippingRules?: InputMaybe<Array<InputMaybe<ShippingRuleInput>>>;
  startDate?: InputMaybe<Scalars['Float']>;
  storeId?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
  used?: InputMaybe<Scalars['Int']>;
};

export type UpdateSelectionAttributeValuesPayload = {
  __typename?: 'UpdateSelectionAttributeValuesPayload';
  id?: Maybe<Scalars['String']>;
};

export type UpdateSizeChartInput = {
  content: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  remark: Scalars['String'];
  status: SizeChatStatus;
};

export type UpdateSizeChartStatusInput = {
  ids: Array<InputMaybe<Scalars['String']>>;
  status: SizeChatStatus;
};

export type UpdateStaticPageInput = {
  authorName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  staticPageContent?: InputMaybe<StaticPageContent>;
  status: StatusEnumType;
  url?: InputMaybe<Scalars['String']>;
};

export type UpdateSubscribeInput = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateTagInput = {
  label?: InputMaybe<LocaleInput>;
  name: Scalars['String'];
  remark?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<TagStatus>;
};

export type UpdateTagsInput = {
  payload?: InputMaybe<Array<InputMaybe<UpdateTagInput>>>;
};

export type UpdateUserDetailsInput = {
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UpdatedSizeChartResponse = {
  __typename?: 'UpdatedSizeChartResponse';
  sizeCartUpdatedCount?: Maybe<Scalars['Int']>;
  sizeChartUpdatedDetails?: Maybe<Array<Maybe<SizeChartUpdatedDetail>>>;
};

export type UploadCsvPayload = {
  __typename?: 'UploadCsvPayload';
  totalRecords?: Maybe<Scalars['Int']>;
};

export type UploadGwpsProductPayload = {
  __typename?: 'UploadGwpsProductPayload';
  sku?: Maybe<Scalars['String']>;
};

export type UploadImageInput = {
  fileName?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type UploadLimitByBrandPayload = {
  __typename?: 'UploadLimitByBrandPayload';
  totalRecords?: Maybe<Scalars['Int']>;
};

export type UploadMemberDiscountPayload = {
  __typename?: 'UploadMemberDiscountPayload';
  totalRecords?: Maybe<Scalars['Int']>;
};

export type UploadPromotionCodePayload = {
  __typename?: 'UploadPromotionCodePayload';
  promoCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadShippingPayload = {
  __typename?: 'UploadShippingPayload';
  totalRecords?: Maybe<Scalars['Int']>;
};

export type UserForgotPasswordInput = {
  email: Scalars['String'];
};

export type UserForgotPasswordResponse = {
  __typename?: 'UserForgotPasswordResponse';
  isSuccess?: Maybe<Scalars['Boolean']>;
};

export type UserLastLogin = {
  __typename?: 'UserLastLogin';
  agent?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Float']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  department?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isEnable?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<UserLastLogin>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  data?: Maybe<Array<Maybe<UserResponse>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ValidFlight = {
  __typename?: 'ValidFlight';
  airportCode?: Maybe<Scalars['String']>;
  flightUnixDate?: Maybe<Scalars['Float']>;
  isValid?: Maybe<Scalars['Boolean']>;
  pickupCounterCode?: Maybe<Scalars['String']>;
  pickupImage?: Maybe<Image>;
  terminal?: Maybe<Scalars['String']>;
};

export type ValidProductCampaign = {
  __typename?: 'ValidProductCampaign';
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  collections?: Maybe<Array<Maybe<Scalars['String']>>>;
  metadataTags?: Maybe<Array<Maybe<Scalars['String']>>>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ValidateCustomerPrivilegeInput = {
  acquisition: RegisterMemberWithPrivilegeAcquisitionInput;
};

export type ValidateCustomerPrivilegePayload = {
  __typename?: 'ValidateCustomerPrivilegePayload';
  code?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ValidateResponse = {
  __typename?: 'ValidateResponse';
  isValid?: Maybe<Scalars['Boolean']>;
};

export type VerifyBurnCaratPayload = {
  __typename?: 'VerifyBurnCaratPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type VerifyLimitedProductResponse = {
  __typename?: 'VerifyLimitedProductResponse';
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type VerifyMemberPayload = {
  __typename?: 'VerifyMemberPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type VerifyRegisterMemberWithPrivilegePayload = {
  __typename?: 'VerifyRegisterMemberWithPrivilegePayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type VerifyWithOtpInput = {
  otpCode?: InputMaybe<Scalars['String']>;
  refCode?: InputMaybe<Scalars['String']>;
};

export type VerifyWithPersonalInformationInput = {
  birthDate: Scalars['Float'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type VerifyWithTokenInput = {
  token: Scalars['String'];
};

export type Warning = {
  __typename?: 'Warning';
  code?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type WishlistItem = {
  __typename?: 'WishlistItem';
  product?: Maybe<SelectProductLocaleType>;
  sku?: Maybe<Scalars['String']>;
};


export type WishlistItemProductArgs = {
  lang?: InputMaybe<LocaleType>;
};

export type WishlistResponse = {
  __typename?: 'WishlistResponse';
  data?: Maybe<Array<Maybe<WishlistItem>>>;
  recordsPerPage?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum BannerTypeEnum {
  BeautyCategory = 'BEAUTY_CATEGORY',
  BestCollections = 'BEST_COLLECTIONS',
  Brands = 'BRANDS',
  Category = 'CATEGORY',
  ElectronicsCategory = 'ELECTRONICS_CATEGORY',
  FashionCategory = 'FASHION_CATEGORY',
  HeroBanners = 'HERO_BANNERS',
  Inspiration = 'INSPIRATION',
  MegaBanners = 'MEGA_BANNERS',
  Microsite = 'MICROSITE',
  Modal = 'MODAL',
  PromotionBanners = 'PROMOTION_BANNERS'
}

export type DeleteCartMeItemInput = {
  shipTo: ShoppingCartShipToType;
  sku: Scalars['String'];
};

export enum GenderEnum {
  Boys = 'BOYS',
  Girls = 'GIRLS',
  Men = 'MEN',
  Unisex = 'UNISEX',
  UnisexKids = 'UNISEX_KIDS',
  Women = 'WOMEN'
}

export type LoginResponse = {
  __typename?: 'loginResponse';
  accessToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Int']>;
  refreshToken?: Maybe<Scalars['String']>;
  tokenType?: Maybe<Scalars['String']>;
};

export type OrderPromotion = {
  __typename?: 'orderPromotion';
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  promotionType?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Float']>;
  typeId?: Maybe<OrderPromotionEnumType>;
};

export enum ProductTypeEnum {
  Child = 'CHILD',
  Group = 'GROUP',
  Standalone = 'STANDALONE'
}

export type PromotionError = {
  __typename?: 'promotionError';
  error?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type PromotionShippingRuleInput = {
  information?: InputMaybe<ShippingRuleInput>;
  shippingId?: InputMaybe<Scalars['String']>;
};

export type RefreshTokenMutationVariables = Exact<{
  input: RefreshTokenInput;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken?: { __typename?: 'loginResponse', tokenType?: string | null | undefined, accessToken?: string | null | undefined, refreshToken?: string | null | undefined, expiresIn?: number | null | undefined } | null | undefined };

export type UserLoginQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginQuery = { __typename?: 'Query', userLogin?: { __typename?: 'loginResponse', tokenType?: string | null | undefined, expiresIn?: number | null | undefined, accessToken?: string | null | undefined, refreshToken?: string | null | undefined } | null | undefined };

export type ContentsQueryVariables = Exact<{
  page: Scalars['Int'];
  limit: Scalars['Int'];
  titleName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<ContentEnumType>;
}>;


export type ContentsQuery = { __typename?: 'Query', contents?: { __typename?: 'ContentsResponse', totalCount?: number | null | undefined, recordsPerPage?: number | null | undefined, data?: Array<{ __typename?: 'FloatingBanners' } | { __typename?: 'Homepages' } | { __typename?: 'MegaMenus' } | { __typename?: 'ModalBanners' } | { __typename?: 'PowerDeals' } | { __typename?: 'PremiumBrandListResponse' } | { __typename?: 'StaticPages', id?: string | null | undefined, updatedDate?: number | null | undefined, url?: string | null | undefined, titleName?: string | null | undefined, author?: string | null | undefined, status?: string | null | undefined, contentType?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreateOrderPlaceOrderMutationVariables = Exact<{
  input: CreatePlaceOrderInput;
}>;


export type CreateOrderPlaceOrderMutation = { __typename?: 'Mutation', createOrderPlaceOrder?: { __typename?: 'OrderPaidPayload', orderId: string } | null | undefined };

export type OrdersQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  recordsPerPage?: InputMaybe<Scalars['Int']>;
  orderStatus?: InputMaybe<OrderStatusEnumType>;
  orderState?: InputMaybe<OrderStateEnumType>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrdersResponse', totalCount?: number | null | undefined, recordsPerPage?: number | null | undefined, data?: Array<{ __typename?: 'OrderBackOfficeResponse', paymentCardIssuer?: string | null | undefined, isHold?: boolean | null | undefined, editOrderIsValid?: boolean | null | undefined, orderId?: string | null | undefined, timePlace?: string | null | undefined, unixTimeplaced?: number | null | undefined, orderStatus?: string | null | undefined, productSubtotal?: number | null | undefined, productDiscount?: number | null | undefined, subtotal?: number | null | undefined, shippingMethod?: Array<ShippingMethodType | null | undefined> | null | undefined, shippingFee?: number | null | undefined, shippingDiscount?: number | null | undefined, shippingTotal?: number | null | undefined, orderDiscount?: number | null | undefined, grandTotal?: number | null | undefined, orderSubtotal?: number | null | undefined, promoCode?: string | null | undefined, currencyCode?: string | null | undefined, orderLanguage?: string | null | undefined, paymentMethodName?: string | null | undefined, customerIp?: string | null | undefined, checkOutType?: number | null | undefined, taxInvoiceRequestable?: boolean | null | undefined, id?: string | null | undefined, orderPromotions?: Array<{ __typename?: 'orderPromotion', name?: string | null | undefined, description?: string | null | undefined, startDate?: number | null | undefined, endDate?: number | null | undefined } | null | undefined> | null | undefined, carat?: { __typename?: 'OrderCarat', currentCarat?: number | null | undefined, redeemCaratPoint?: number | null | undefined, redeemCaratPrice?: number | null | undefined, earnCaratPoint?: number | null | undefined, earnSubtotal?: number | null | undefined } | null | undefined, customer?: { __typename?: 'OrderCustomer', firstName?: string | null | undefined, email?: string | null | undefined } | null | undefined, subOrders?: Array<{ __typename?: 'SubOrderInformation', subOrderId?: string | null | undefined, items?: Array<{ __typename?: 'OrderItem', sku?: string | null | undefined, productName?: string | null | undefined } | null | undefined> | null | undefined, shippingAddress?: { __typename?: 'Address', firstName?: string | null | undefined, lastName?: string | null | undefined } | null | undefined, flightDetail?: { __typename?: 'OrderFlightDetail', lastName?: string | null | undefined, firstName?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type OrderQueryVariables = Exact<{
  orderId: Scalars['String'];
}>;


export type OrderQuery = { __typename?: 'Query', order?: { __typename?: 'OrderBackOfficeResponse', viewOnly?: boolean | null | undefined, paymentCardIssuer?: string | null | undefined, orderStatus?: string | null | undefined, isHold?: boolean | null | undefined, editOrderIsValid?: boolean | null | undefined, orderId?: string | null | undefined, promoCode?: string | null | undefined, platform?: string | null | undefined, caratTotal?: number | null | undefined, quantity?: number | null | undefined, timePlace?: string | null | undefined, unixTimeplaced?: number | null | undefined, productSubtotal?: number | null | undefined, productDiscount?: number | null | undefined, subtotal?: number | null | undefined, orderDiscount?: number | null | undefined, grandTotal?: number | null | undefined, shippingMethod?: Array<ShippingMethodType | null | undefined> | null | undefined, shippingFee?: number | null | undefined, shippingDiscount?: number | null | undefined, shippingTotal?: number | null | undefined, orderSubtotal?: number | null | undefined, currencyCode?: string | null | undefined, orderLanguage?: string | null | undefined, paymentMethodName?: string | null | undefined, customerIp?: string | null | undefined, checkOutType?: number | null | undefined, company?: string | null | undefined, taxInvoiceRequestable?: boolean | null | undefined, cancellationReasons?: { __typename?: 'CancellationReasons', cancelType?: string | null | undefined, cancelDate?: number | null | undefined, reasons?: Array<{ __typename?: 'Reasons', code?: string | null | undefined, message?: string | null | undefined, other?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, orderLogs?: Array<{ __typename?: 'OrderBackOfficeComment', values?: string | null | undefined, username?: string | null | undefined, unixTimestamp?: number | null | undefined } | null | undefined> | null | undefined, orderPromotions?: Array<{ __typename?: 'orderPromotion', name?: string | null | undefined, description?: string | null | undefined, startDate?: number | null | undefined, endDate?: number | null | undefined } | null | undefined> | null | undefined, paymentMethodImage?: { __typename?: 'Image', filename?: string | null | undefined, prefix?: string | null | undefined, version?: string | null | undefined } | null | undefined, carat?: { __typename?: 'OrderCarat', currentCarat?: number | null | undefined, redeemCaratPoint?: number | null | undefined, redeemCaratPrice?: number | null | undefined, earnCaratPoint?: number | null | undefined, earnSubtotal?: number | null | undefined } | null | undefined, customer?: { __typename?: 'OrderCustomer', firstName?: string | null | undefined, lastName?: string | null | undefined, email?: string | null | undefined, nationality?: string | null | undefined, ssoId?: string | null | undefined, phoneCode?: string | null | undefined, mobile?: string | null | undefined, addresses?: Array<{ __typename?: 'Address', phoneCode?: string | null | undefined, lastName?: string | null | undefined, firstName?: string | null | undefined, id?: string | null | undefined, title?: string | null | undefined, district?: string | null | undefined, email?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, subOrders?: Array<{ __typename?: 'SubOrderInformation', subtotal?: number | null | undefined, productDiscount?: number | null | undefined, orderDiscount?: number | null | undefined, orderSubTotal?: number | null | undefined, grandTotal?: number | null | undefined, shippingMethod?: ShippingMethodType | null | undefined, subOrderId?: string | null | undefined, quantity?: number | null | undefined, status?: string | null | undefined, displayStatus?: string | null | undefined, productSubtotal?: number | null | undefined, logisticName?: string | null | undefined, logisticId?: string | null | undefined, flightDetail?: { __typename?: 'OrderFlightDetail', airlineCode?: string | null | undefined, flightNo?: string | null | undefined, airportCode?: string | null | undefined } | null | undefined, carat?: { __typename?: 'SubOrderCarat', caratEarn?: { __typename?: 'SubOrderCaratEarn', caratTotal?: number | null | undefined } | null | undefined } | null | undefined, items?: Array<{ __typename?: 'OrderItem', sku?: string | null | undefined, isGWP?: boolean | null | undefined, unitPrice?: number | null | undefined, receiveQuantity?: number | null | undefined, gwpReferencePromotionRule?: string | null | undefined, shipTo?: string | null | undefined, productName?: string | null | undefined, quantity?: number | null | undefined, amount?: number | null | undefined, discountAmount?: number | null | undefined, netAmount?: number | null | undefined, isOutOfStock?: boolean | null | undefined, gwpReferenceSKUs?: Array<{ __typename?: 'OrderItemGwpReference', sku?: string | null | undefined, shipTo?: string | null | undefined } | null | undefined> | null | undefined, variation?: Array<{ __typename?: 'OrderItemVariation', orderItemsId?: number | null | undefined } | null | undefined> | null | undefined, productImageURL?: { __typename?: 'Image', filename?: string | null | undefined, version?: string | null | undefined, prefix?: string | null | undefined, baseUri?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type CreateProductByFileMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateProductByFileMutation = { __typename?: 'Mutation', createProductByFile?: { __typename?: 'TaskRegister', taskId?: string | null | undefined } | null | undefined };

export type GetProductQueryVariables = Exact<{
  sku: Scalars['String'];
  sortType?: InputMaybe<SortEnumType>;
  sortBy?: InputMaybe<SizeChartSortableFieldEnum>;
}>;


export type GetProductQuery = { __typename?: 'Query', productNode?: { __typename?: 'ProductNode' } | { __typename?: 'ProductNodeLocale', type?: string | null | undefined, sku?: string | null | undefined, dutyFree?: boolean | null | undefined, pickup?: boolean | null | undefined, ageRestriction?: boolean | null | undefined, lag?: boolean | null | undefined, isDisable?: boolean | null | undefined, isVisibility?: boolean | null | undefined, prettyUrl?: string | null | undefined, parentSku?: string | null | undefined, videos?: Array<string | null | undefined> | null | undefined, sapCategory?: string | null | undefined, sapCategoryName?: string | null | undefined, supplierCode?: string | null | undefined, batch?: string | null | undefined, relatedProductSkus?: Array<string | null | undefined> | null | undefined, state?: string | null | undefined, name?: { __typename?: 'Locale', en?: string | null | undefined, th?: string | null | undefined, cn?: string | null | undefined } | null | undefined, options?: { __typename?: 'ProductOptions', isInstalmentAvailable?: boolean | null | undefined } | null | undefined, materials?: { __typename?: 'Locale', en?: string | null | undefined, th?: string | null | undefined, cn?: string | null | undefined } | null | undefined, ingredients?: { __typename?: 'Locale', en?: string | null | undefined, th?: string | null | undefined, cn?: string | null | undefined } | null | undefined, warranty?: { __typename?: 'Locale', en?: string | null | undefined, th?: string | null | undefined, cn?: string | null | undefined } | null | undefined, tags?: Array<{ __typename?: 'ProductTagLocale', name?: string | null | undefined, status?: string | null | undefined, label?: { __typename?: 'Locale', en?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined, stock?: { __typename?: 'StockBof', price?: number | null | undefined, previousPrice?: number | null | undefined, syncStatus?: string | null | undefined, quantityByLocations?: Array<{ __typename?: 'StockBofQuantityByLocation', location?: string | null | undefined, quantity?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined, longDescription?: { __typename?: 'Locale', en?: string | null | undefined, th?: string | null | undefined, cn?: string | null | undefined } | null | undefined, shortDescription?: { __typename?: 'Locale', en?: string | null | undefined, th?: string | null | undefined, cn?: string | null | undefined } | null | undefined, variation?: { __typename?: 'ProductVariationLocale', display?: string | null | undefined, name?: string | null | undefined, label?: { __typename?: 'Locale', en?: string | null | undefined } | null | undefined } | null | undefined, variationValue?: { __typename?: 'ProductVariationValueLocale', name?: string | null | undefined, label?: { __typename?: 'Locale', en?: string | null | undefined, th?: string | null | undefined, cn?: string | null | undefined } | null | undefined, value?: { __typename?: 'ProductSubVariationValueLocale', name?: string | null | undefined, label?: { __typename?: 'Locale', en?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, images?: Array<{ __typename?: 'Image', filename?: string | null | undefined, baseUri?: string | null | undefined, hash?: string | null | undefined, version?: string | null | undefined } | null | undefined> | null | undefined, brand?: { __typename?: 'ProductBrandLocale', name?: string | null | undefined, code?: string | null | undefined, label?: { __typename?: 'Locale', en?: string | null | undefined } | null | undefined } | null | undefined, masterCategories?: Array<{ __typename?: 'ProductNodeCategoryLocale', name?: string | null | undefined, label?: { __typename?: 'Locale', en?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined, attributeValues?: Array<{ __typename?: 'AttributeValueLocale', name?: string | null | undefined, value?: { __typename?: 'SubAttributeValueLocale', name?: string | null | undefined, label?: { __typename?: 'Locale', en?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined, relatedProducts?: Array<{ __typename?: 'ProductNodeRelatedProductLocale', sku?: string | null | undefined, state?: string | null | undefined, name?: { __typename?: 'Locale', th?: string | null | undefined } | null | undefined, images?: Array<{ __typename?: 'Image', baseUri?: string | null | undefined, filename?: string | null | undefined, version?: string | null | undefined, prefix?: string | null | undefined, hash?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined, categories1?: Array<{ __typename?: 'ProductNodeCategoryLocale', name?: string | null | undefined } | null | undefined> | null | undefined, categories2?: Array<{ __typename?: 'ProductNodeCategoryLocale', name?: string | null | undefined } | null | undefined> | null | undefined, categories3?: Array<{ __typename?: 'ProductNodeCategoryLocale', name?: string | null | undefined } | null | undefined> | null | undefined, categories4?: Array<{ __typename?: 'ProductNodeCategoryLocale', name?: string | null | undefined } | null | undefined> | null | undefined, categories5?: Array<{ __typename?: 'ProductNodeCategoryLocale', name?: string | null | undefined } | null | undefined> | null | undefined, stateLogs?: Array<{ __typename?: 'ProductNodeStateLogs', remark?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined, sizeCharts?: { __typename?: 'SizeChartsResponse', data?: Array<{ __typename?: 'SizeChartResponse', name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdateProductMutationVariables = Exact<{
  inputFromAction: ProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'ProductsPayload', skus?: Array<string | null | undefined> | null | undefined } | null | undefined };


export const RefreshTokenDocument = gql`
    mutation refreshToken($input: RefreshTokenInput!) {
  refreshToken(input: $input) {
    tokenType
    accessToken
    refreshToken
    expiresIn
  }
}
    `;
export const UserLoginDocument = gql`
    query userLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    tokenType
    expiresIn
    accessToken
    refreshToken
  }
}
    `;
export const ContentsDocument = gql`
    query contents($page: Int!, $limit: Int!, $titleName: String, $url: String, $contentType: ContentEnumType) {
  contents(
    page: $page
    recordsPerPage: $limit
    titleName: $titleName
    url: $url
    contentType: $contentType
  ) {
    data {
      ... on StaticPages {
        id
        updatedDate
        url
        titleName
        author
        status
        contentType
      }
    }
    totalCount
    recordsPerPage
  }
}
    `;
export const CreateOrderPlaceOrderDocument = gql`
    mutation createOrderPlaceOrder($input: CreatePlaceOrderInput!) {
  createOrderPlaceOrder(input: $input) {
    orderId
  }
}
    `;
export const OrdersDocument = gql`
    query orders($page: Int, $recordsPerPage: Int, $orderStatus: OrderStatusEnumType, $orderState: OrderStateEnumType) {
  orders(
    type: ADMIN
    recordsPerPage: $recordsPerPage
    page: $page
    orderStatus: $orderStatus
    orderState: $orderState
  ) {
    totalCount
    recordsPerPage
    data {
      id: orderId
      orderId
      timePlace
      carat {
        currentCarat
        redeemCaratPoint
        redeemCaratPrice
        earnCaratPoint
        earnSubtotal
      }
      customer {
        firstName
        email
      }
      unixTimeplaced
      orderStatus
      productSubtotal
      productDiscount
      subtotal
      shippingMethod
      shippingFee
      subOrders {
        subOrderId
        items {
          sku
          productName
        }
        shippingAddress {
          firstName
          lastName
        }
        flightDetail {
          lastName
          firstName
        }
      }
      shippingDiscount
      shippingTotal
      orderDiscount
      grandTotal
      orderSubtotal
      promoCode
      currencyCode
      orderLanguage
      paymentMethodName
      customerIp
      checkOutType
      taxInvoiceRequestable
      ... on OrderBackOfficeResponse {
        paymentCardIssuer
        isHold
        editOrderIsValid
        orderPromotions {
          name
          description
          startDate
          endDate
          description
        }
      }
    }
  }
}
    `;
export const OrderDocument = gql`
    query order($orderId: String!) {
  order(orderId: $orderId, type: ADMIN) {
    orderId
    promoCode
    platform
    caratTotal
    carat {
      currentCarat
      redeemCaratPoint
      redeemCaratPrice
      earnCaratPoint
      earnSubtotal
    }
    caratTotal
    customer {
      firstName
      lastName
      email
      nationality
      ssoId
      phoneCode
      mobile
      addresses {
        phoneCode
        lastName
        firstName
        id
        title
        district
        email
      }
    }
    quantity
    timePlace
    unixTimeplaced
    orderStatus
    productSubtotal
    productDiscount
    subtotal
    orderDiscount
    grandTotal
    shippingMethod
    shippingFee
    shippingDiscount
    shippingTotal
    orderDiscount
    grandTotal
    orderSubtotal
    promoCode
    currencyCode
    orderLanguage
    paymentMethodName
    customerIp
    checkOutType
    company
    subOrders {
      subtotal
      productDiscount
      orderDiscount
      orderSubTotal
      grandTotal
      shippingMethod
      flightDetail {
        airlineCode
        flightNo
        airportCode
      }
      carat {
        caratEarn {
          caratTotal
        }
      }
      subOrderId
      quantity
      shippingMethod
      status
      displayStatus
      productSubtotal
      productDiscount
      subtotal
      orderDiscount
      logisticName
      logisticId
      items {
        ... on OrderItem {
          sku
          isGWP
          unitPrice
          receiveQuantity
          gwpReferencePromotionRule
          gwpReferenceSKUs {
            sku
            shipTo
          }
          shipTo
          variation {
            orderItemsId
          }
          productName
          quantity
          amount
          discountAmount
          netAmount
          isOutOfStock
          productImageURL {
            filename
            version
            prefix
            baseUri
          }
        }
      }
    }
    taxInvoiceRequestable
    ... on OrderBackOfficeResponse {
      viewOnly
      cancellationReasons {
        cancelType
        cancelDate
        reasons {
          code
          message
          other
        }
      }
      orderLogs {
        values
        username
        unixTimestamp
      }
      paymentCardIssuer
      orderStatus
      isHold
      editOrderIsValid
      orderPromotions {
        name
        description
        startDate
        endDate
      }
      orderLogs {
        unixTimestamp
        values
        username
      }
      paymentMethodImage {
        filename
        prefix
        version
        version
      }
    }
  }
}
    `;
export const CreateProductByFileDocument = gql`
    mutation createProductByFile {
  createProductByFile {
    taskId
  }
}
    `;
export const GetProductDocument = gql`
    query getProduct($sku: String!, $sortType: SortEnumType, $sortBy: SizeChartSortableFieldEnum) {
  productNode(sku: $sku) {
    ... on ProductNodeLocale {
      type
      sku
      name {
        en
        th
        cn
      }
      options {
        isInstalmentAvailable
      }
      dutyFree
      pickup
      ageRestriction
      lag
      isDisable
      isVisibility
      prettyUrl
      materials {
        en
        th
        cn
      }
      ingredients {
        en
        th
        cn
      }
      warranty {
        en
        th
        cn
      }
      tags {
        name
        status
        label {
          en
        }
      }
      stock {
        price
        previousPrice
        syncStatus
        quantityByLocations {
          location
          quantity
        }
      }
      parentSku
      longDescription {
        en
        th
        cn
      }
      shortDescription {
        en
        th
        cn
      }
      variation {
        label {
          en
        }
        display
        name
      }
      variationValue {
        name
        label {
          en
          th
          cn
        }
        value {
          name
          label {
            en
          }
        }
      }
      images {
        filename
        baseUri
        hash
        version
      }
      videos
      prettyUrl
      brand {
        name
        label {
          en
        }
        code
      }
      masterCategories {
        name
        label {
          en
        }
      }
      sapCategory
      sapCategoryName
      supplierCode
      batch
      attributeValues {
        name
        value {
          name
          label {
            en
          }
        }
      }
      materials {
        en
        th
        cn
      }
      ingredients {
        en
        th
        cn
      }
      warranty {
        en
        th
        cn
      }
      relatedProductSkus
      relatedProducts {
        sku
        name {
          th
        }
        state
        images {
          baseUri
          filename
          version
          prefix
          hash
        }
      }
      categories1 {
        name
      }
      categories2 {
        name
      }
      categories3 {
        name
      }
      categories4 {
        name
      }
      categories5 {
        name
      }
      state
      stateLogs {
        remark
      }
    }
  }
  sizeCharts(sku: $sku, sortType: $sortType, sortBy: $sortBy) {
    data {
      name
    }
  }
}
    `;
export const UpdateProductDocument = gql`
    mutation updateProduct($inputFromAction: ProductInput!) {
  updateProduct(input: $inputFromAction) {
    skus
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    refreshToken(variables: RefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RefreshTokenMutation>(RefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'refreshToken');
    },
    userLogin(variables: UserLoginQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserLoginQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserLoginQuery>(UserLoginDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userLogin');
    },
    contents(variables: ContentsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ContentsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContentsQuery>(ContentsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'contents');
    },
    createOrderPlaceOrder(variables: CreateOrderPlaceOrderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateOrderPlaceOrderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrderPlaceOrderMutation>(CreateOrderPlaceOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOrderPlaceOrder');
    },
    orders(variables?: OrdersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrdersQuery>(OrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'orders');
    },
    order(variables: OrderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OrderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OrderQuery>(OrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'order');
    },
    createProductByFile(variables?: CreateProductByFileMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateProductByFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProductByFileMutation>(CreateProductByFileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createProductByFile');
    },
    getProduct(variables: GetProductQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductQuery>(GetProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProduct');
    },
    updateProduct(variables: UpdateProductMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProductMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProductMutation>(UpdateProductDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProduct');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;