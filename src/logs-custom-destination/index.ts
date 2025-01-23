/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsCustomDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether logs matching this custom destination should be forwarded or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#enabled LogsCustomDestination#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether tags from the forwarded logs should be forwarded or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#forward_tags LogsCustomDestination#forward_tags}
  */
  readonly forwardTags?: boolean | cdktf.IResolvable;
  /**
  * List of [tag keys](https://docs.datadoghq.com/getting_started/tagging/#define-tags) to be filtered.
  * 				An empty list represents no restriction is in place and either all or no tags will be
  * 				forwarded depending on `forward_tags_restriction_list_type` parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#forward_tags_restriction_list LogsCustomDestination#forward_tags_restriction_list}
  */
  readonly forwardTagsRestrictionList?: string[];
  /**
  * How the `forward_tags_restriction_list` parameter should be interpreted.
  * 				If `ALLOW_LIST`, then only tags whose keys on the forwarded logs match the ones on the restriction list
  * 				are forwarded.
  * 				`BLOCK_LIST` works the opposite way. It does not forward the tags matching the ones on the list. Valid values are `ALLOW_LIST`, `BLOCK_LIST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#forward_tags_restriction_list_type LogsCustomDestination#forward_tags_restriction_list_type}
  */
  readonly forwardTagsRestrictionListType?: string;
  /**
  * The custom destination name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#name LogsCustomDestination#name}
  */
  readonly name: string;
  /**
  * The custom destination query filter. Logs matching this query are forwarded to the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#query LogsCustomDestination#query}
  */
  readonly query?: string;
  /**
  * elasticsearch_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#elasticsearch_destination LogsCustomDestination#elasticsearch_destination}
  */
  readonly elasticsearchDestination?: LogsCustomDestinationElasticsearchDestination[] | cdktf.IResolvable;
  /**
  * http_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#http_destination LogsCustomDestination#http_destination}
  */
  readonly httpDestination?: LogsCustomDestinationHttpDestination[] | cdktf.IResolvable;
  /**
  * splunk_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#splunk_destination LogsCustomDestination#splunk_destination}
  */
  readonly splunkDestination?: LogsCustomDestinationSplunkDestination[] | cdktf.IResolvable;
}
export interface LogsCustomDestinationElasticsearchDestinationBasicAuth {
  /**
  * The password of the authentication. This field is not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}
  */
  readonly password: string;
  /**
  * The username of the authentication. This field is not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}
  */
  readonly username: string;
}

export function logsCustomDestinationElasticsearchDestinationBasicAuthToTerraform(struct?: LogsCustomDestinationElasticsearchDestinationBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function logsCustomDestinationElasticsearchDestinationBasicAuthToHclTerraform(struct?: LogsCustomDestinationElasticsearchDestinationBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LogsCustomDestinationElasticsearchDestinationBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomDestinationElasticsearchDestinationBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class LogsCustomDestinationElasticsearchDestinationBasicAuthList extends cdktf.ComplexList {
  public internalValue? : LogsCustomDestinationElasticsearchDestinationBasicAuth[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference {
    return new LogsCustomDestinationElasticsearchDestinationBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomDestinationElasticsearchDestination {
  /**
  * The destination for which logs will be forwarded to. Must have HTTPS scheme. Forwarding back to Datadog is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}
  */
  readonly endpoint: string;
  /**
  * Name of the Elasticsearch index (must follow [Elasticsearch's criteria](https://www.elastic.co/guide/en/elasticsearch/reference/8.11/indices-create-index.html#indices-create-api-path-params)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#index_name LogsCustomDestination#index_name}
  */
  readonly indexName: string;
  /**
  * Date pattern with US locale and UTC timezone to be appended to the index name after adding '-'
  * 							(that is, '${index_name}-${indexPattern}').
  * 							You can customize the index rotation naming pattern by choosing one of these options:
  * 							- Hourly: 'yyyy-MM-dd-HH' (as an example, it would render: '2022-10-19-09')
  * 							- Daily: 'yyyy-MM-dd' (as an example, it would render: '2022-10-19')
  * 							- Weekly: 'yyyy-'W'ww' (as an example, it would render: '2022-W42')
  * 							- Monthly: 'yyyy-MM' (as an example, it would render: '2022-10')
  * 							If this field is missing or is blank, it means that the index name will always be the same
  * 							(that is, no rotation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#index_rotation LogsCustomDestination#index_rotation}
  */
  readonly indexRotation?: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}
  */
  readonly basicAuth?: LogsCustomDestinationElasticsearchDestinationBasicAuth[] | cdktf.IResolvable;
}

export function logsCustomDestinationElasticsearchDestinationToTerraform(struct?: LogsCustomDestinationElasticsearchDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    index_rotation: cdktf.stringToTerraform(struct!.indexRotation),
    basic_auth: cdktf.listMapper(logsCustomDestinationElasticsearchDestinationBasicAuthToTerraform, true)(struct!.basicAuth),
  }
}


export function logsCustomDestinationElasticsearchDestinationToHclTerraform(struct?: LogsCustomDestinationElasticsearchDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_name: {
      value: cdktf.stringToHclTerraform(struct!.indexName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_rotation: {
      value: cdktf.stringToHclTerraform(struct!.indexRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: cdktf.listMapperHcl(logsCustomDestinationElasticsearchDestinationBasicAuthToHclTerraform, true)(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomDestinationElasticsearchDestinationBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomDestinationElasticsearchDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LogsCustomDestinationElasticsearchDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._indexName !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexName = this._indexName;
    }
    if (this._indexRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRotation = this._indexRotation;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomDestinationElasticsearchDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._indexName = undefined;
      this._indexRotation = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._indexName = value.indexName;
      this._indexRotation = value.indexRotation;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // index_rotation - computed: false, optional: true, required: false
  private _indexRotation?: string; 
  public get indexRotation() {
    return this.getStringAttribute('index_rotation');
  }
  public set indexRotation(value: string) {
    this._indexRotation = value;
  }
  public resetIndexRotation() {
    this._indexRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRotationInput() {
    return this._indexRotation;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new LogsCustomDestinationElasticsearchDestinationBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: LogsCustomDestinationElasticsearchDestinationBasicAuth[] | cdktf.IResolvable) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}

export class LogsCustomDestinationElasticsearchDestinationList extends cdktf.ComplexList {
  public internalValue? : LogsCustomDestinationElasticsearchDestination[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LogsCustomDestinationElasticsearchDestinationOutputReference {
    return new LogsCustomDestinationElasticsearchDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomDestinationHttpDestinationBasicAuth {
  /**
  * The password of the authentication. This field is not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#password LogsCustomDestination#password}
  */
  readonly password: string;
  /**
  * The username of the authentication. This field is not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#username LogsCustomDestination#username}
  */
  readonly username: string;
}

export function logsCustomDestinationHttpDestinationBasicAuthToTerraform(struct?: LogsCustomDestinationHttpDestinationBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function logsCustomDestinationHttpDestinationBasicAuthToHclTerraform(struct?: LogsCustomDestinationHttpDestinationBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomDestinationHttpDestinationBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LogsCustomDestinationHttpDestinationBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomDestinationHttpDestinationBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class LogsCustomDestinationHttpDestinationBasicAuthList extends cdktf.ComplexList {
  public internalValue? : LogsCustomDestinationHttpDestinationBasicAuth[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LogsCustomDestinationHttpDestinationBasicAuthOutputReference {
    return new LogsCustomDestinationHttpDestinationBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomDestinationHttpDestinationCustomHeaderAuth {
  /**
  * The header name of the authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#header_name LogsCustomDestination#header_name}
  */
  readonly headerName: string;
  /**
  * The header value of the authentication. This field is not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#header_value LogsCustomDestination#header_value}
  */
  readonly headerValue: string;
}

export function logsCustomDestinationHttpDestinationCustomHeaderAuthToTerraform(struct?: LogsCustomDestinationHttpDestinationCustomHeaderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function logsCustomDestinationHttpDestinationCustomHeaderAuthToHclTerraform(struct?: LogsCustomDestinationHttpDestinationCustomHeaderAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LogsCustomDestinationHttpDestinationCustomHeaderAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomDestinationHttpDestinationCustomHeaderAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class LogsCustomDestinationHttpDestinationCustomHeaderAuthList extends cdktf.ComplexList {
  public internalValue? : LogsCustomDestinationHttpDestinationCustomHeaderAuth[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference {
    return new LogsCustomDestinationHttpDestinationCustomHeaderAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomDestinationHttpDestination {
  /**
  * The destination for which logs will be forwarded to. Must have HTTPS scheme. Forwarding back to Datadog is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}
  */
  readonly endpoint: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#basic_auth LogsCustomDestination#basic_auth}
  */
  readonly basicAuth?: LogsCustomDestinationHttpDestinationBasicAuth[] | cdktf.IResolvable;
  /**
  * custom_header_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#custom_header_auth LogsCustomDestination#custom_header_auth}
  */
  readonly customHeaderAuth?: LogsCustomDestinationHttpDestinationCustomHeaderAuth[] | cdktf.IResolvable;
}

export function logsCustomDestinationHttpDestinationToTerraform(struct?: LogsCustomDestinationHttpDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    basic_auth: cdktf.listMapper(logsCustomDestinationHttpDestinationBasicAuthToTerraform, true)(struct!.basicAuth),
    custom_header_auth: cdktf.listMapper(logsCustomDestinationHttpDestinationCustomHeaderAuthToTerraform, true)(struct!.customHeaderAuth),
  }
}


export function logsCustomDestinationHttpDestinationToHclTerraform(struct?: LogsCustomDestinationHttpDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: cdktf.listMapperHcl(logsCustomDestinationHttpDestinationBasicAuthToHclTerraform, true)(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomDestinationHttpDestinationBasicAuthList",
    },
    custom_header_auth: {
      value: cdktf.listMapperHcl(logsCustomDestinationHttpDestinationCustomHeaderAuthToHclTerraform, true)(struct!.customHeaderAuth),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomDestinationHttpDestinationCustomHeaderAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomDestinationHttpDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LogsCustomDestinationHttpDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._customHeaderAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderAuth = this._customHeaderAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomDestinationHttpDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._basicAuth.internalValue = undefined;
      this._customHeaderAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._basicAuth.internalValue = value.basicAuth;
      this._customHeaderAuth.internalValue = value.customHeaderAuth;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new LogsCustomDestinationHttpDestinationBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: LogsCustomDestinationHttpDestinationBasicAuth[] | cdktf.IResolvable) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // custom_header_auth - computed: false, optional: true, required: false
  private _customHeaderAuth = new LogsCustomDestinationHttpDestinationCustomHeaderAuthList(this, "custom_header_auth", false);
  public get customHeaderAuth() {
    return this._customHeaderAuth;
  }
  public putCustomHeaderAuth(value: LogsCustomDestinationHttpDestinationCustomHeaderAuth[] | cdktf.IResolvable) {
    this._customHeaderAuth.internalValue = value;
  }
  public resetCustomHeaderAuth() {
    this._customHeaderAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderAuthInput() {
    return this._customHeaderAuth.internalValue;
  }
}

export class LogsCustomDestinationHttpDestinationList extends cdktf.ComplexList {
  public internalValue? : LogsCustomDestinationHttpDestination[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LogsCustomDestinationHttpDestinationOutputReference {
    return new LogsCustomDestinationHttpDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomDestinationSplunkDestination {
  /**
  * Access token of the Splunk HTTP Event Collector. This field is not returned by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#access_token LogsCustomDestination#access_token}
  */
  readonly accessToken: string;
  /**
  * The destination for which logs will be forwarded to. Must have HTTPS scheme. Forwarding back to Datadog is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#endpoint LogsCustomDestination#endpoint}
  */
  readonly endpoint: string;
}

export function logsCustomDestinationSplunkDestinationToTerraform(struct?: LogsCustomDestinationSplunkDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function logsCustomDestinationSplunkDestinationToHclTerraform(struct?: LogsCustomDestinationSplunkDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomDestinationSplunkDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LogsCustomDestinationSplunkDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomDestinationSplunkDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._endpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._endpoint = value.endpoint;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}

export class LogsCustomDestinationSplunkDestinationList extends cdktf.ComplexList {
  public internalValue? : LogsCustomDestinationSplunkDestination[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LogsCustomDestinationSplunkDestinationOutputReference {
    return new LogsCustomDestinationSplunkDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination datadog_logs_custom_destination}
*/
export class LogsCustomDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_custom_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogsCustomDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsCustomDestination to import
  * @param importFromId The id of the existing LogsCustomDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsCustomDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_custom_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.53.0/docs/resources/logs_custom_destination datadog_logs_custom_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsCustomDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: LogsCustomDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_custom_destination',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.53.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._forwardTags = config.forwardTags;
    this._forwardTagsRestrictionList = config.forwardTagsRestrictionList;
    this._forwardTagsRestrictionListType = config.forwardTagsRestrictionListType;
    this._name = config.name;
    this._query = config.query;
    this._elasticsearchDestination.internalValue = config.elasticsearchDestination;
    this._httpDestination.internalValue = config.httpDestination;
    this._splunkDestination.internalValue = config.splunkDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // forward_tags - computed: true, optional: true, required: false
  private _forwardTags?: boolean | cdktf.IResolvable; 
  public get forwardTags() {
    return this.getBooleanAttribute('forward_tags');
  }
  public set forwardTags(value: boolean | cdktf.IResolvable) {
    this._forwardTags = value;
  }
  public resetForwardTags() {
    this._forwardTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTagsInput() {
    return this._forwardTags;
  }

  // forward_tags_restriction_list - computed: true, optional: true, required: false
  private _forwardTagsRestrictionList?: string[]; 
  public get forwardTagsRestrictionList() {
    return this.getListAttribute('forward_tags_restriction_list');
  }
  public set forwardTagsRestrictionList(value: string[]) {
    this._forwardTagsRestrictionList = value;
  }
  public resetForwardTagsRestrictionList() {
    this._forwardTagsRestrictionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTagsRestrictionListInput() {
    return this._forwardTagsRestrictionList;
  }

  // forward_tags_restriction_list_type - computed: true, optional: true, required: false
  private _forwardTagsRestrictionListType?: string; 
  public get forwardTagsRestrictionListType() {
    return this.getStringAttribute('forward_tags_restriction_list_type');
  }
  public set forwardTagsRestrictionListType(value: string) {
    this._forwardTagsRestrictionListType = value;
  }
  public resetForwardTagsRestrictionListType() {
    this._forwardTagsRestrictionListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTagsRestrictionListTypeInput() {
    return this._forwardTagsRestrictionListType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // elasticsearch_destination - computed: false, optional: true, required: false
  private _elasticsearchDestination = new LogsCustomDestinationElasticsearchDestinationList(this, "elasticsearch_destination", false);
  public get elasticsearchDestination() {
    return this._elasticsearchDestination;
  }
  public putElasticsearchDestination(value: LogsCustomDestinationElasticsearchDestination[] | cdktf.IResolvable) {
    this._elasticsearchDestination.internalValue = value;
  }
  public resetElasticsearchDestination() {
    this._elasticsearchDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchDestinationInput() {
    return this._elasticsearchDestination.internalValue;
  }

  // http_destination - computed: false, optional: true, required: false
  private _httpDestination = new LogsCustomDestinationHttpDestinationList(this, "http_destination", false);
  public get httpDestination() {
    return this._httpDestination;
  }
  public putHttpDestination(value: LogsCustomDestinationHttpDestination[] | cdktf.IResolvable) {
    this._httpDestination.internalValue = value;
  }
  public resetHttpDestination() {
    this._httpDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDestinationInput() {
    return this._httpDestination.internalValue;
  }

  // splunk_destination - computed: false, optional: true, required: false
  private _splunkDestination = new LogsCustomDestinationSplunkDestinationList(this, "splunk_destination", false);
  public get splunkDestination() {
    return this._splunkDestination;
  }
  public putSplunkDestination(value: LogsCustomDestinationSplunkDestination[] | cdktf.IResolvable) {
    this._splunkDestination.internalValue = value;
  }
  public resetSplunkDestination() {
    this._splunkDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkDestinationInput() {
    return this._splunkDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      forward_tags: cdktf.booleanToTerraform(this._forwardTags),
      forward_tags_restriction_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forwardTagsRestrictionList),
      forward_tags_restriction_list_type: cdktf.stringToTerraform(this._forwardTagsRestrictionListType),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      elasticsearch_destination: cdktf.listMapper(logsCustomDestinationElasticsearchDestinationToTerraform, true)(this._elasticsearchDestination.internalValue),
      http_destination: cdktf.listMapper(logsCustomDestinationHttpDestinationToTerraform, true)(this._httpDestination.internalValue),
      splunk_destination: cdktf.listMapper(logsCustomDestinationSplunkDestinationToTerraform, true)(this._splunkDestination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_tags: {
        value: cdktf.booleanToHclTerraform(this._forwardTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_tags_restriction_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forwardTagsRestrictionList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      forward_tags_restriction_list_type: {
        value: cdktf.stringToHclTerraform(this._forwardTagsRestrictionListType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_destination: {
        value: cdktf.listMapperHcl(logsCustomDestinationElasticsearchDestinationToHclTerraform, true)(this._elasticsearchDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsCustomDestinationElasticsearchDestinationList",
      },
      http_destination: {
        value: cdktf.listMapperHcl(logsCustomDestinationHttpDestinationToHclTerraform, true)(this._httpDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsCustomDestinationHttpDestinationList",
      },
      splunk_destination: {
        value: cdktf.listMapperHcl(logsCustomDestinationSplunkDestinationToHclTerraform, true)(this._splunkDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsCustomDestinationSplunkDestinationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
