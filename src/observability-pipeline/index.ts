/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObservabilityPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The pipeline name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#config ObservabilityPipeline#config}
  */
  readonly config?: ObservabilityPipelineConfigA;
}
export interface ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth {
  /**
  * ARN of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * AWS region override (if applicable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#aws_region ObservabilityPipeline#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * External ID for assumed role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * Session name for assumed role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
  /**
  * The authentication strategy to use (e.g. aws or basic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigDestinationsAmazonOpensearchAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role: cdktf.stringToTerraform(struct!.assumeRole),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigDestinationsAmazonOpensearchAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assume_role: {
      value: cdktf.stringToHclTerraform(struct!.assumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsAmazonOpensearchAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRole = undefined;
      this._awsRegion = undefined;
      this._externalId = undefined;
      this._sessionName = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRole = value.assumeRole;
      this._awsRegion = value.awsRegion;
      this._externalId = value.externalId;
      this._sessionName = value.sessionName;
      this._strategy = value.strategy;
    }
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: string; 
  public get assumeRole() {
    return this.getStringAttribute('assume_role');
  }
  public set assumeRole(value: string) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface ObservabilityPipelineConfigDestinationsAmazonOpensearch {
  /**
  * The index or datastream to write logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the input for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth;
}

export function observabilityPipelineConfigDestinationsAmazonOpensearchToTerraform(struct?: ObservabilityPipelineConfigDestinationsAmazonOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_index: cdktf.stringToTerraform(struct!.bulkIndex),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    auth: observabilityPipelineConfigDestinationsAmazonOpensearchAuthToTerraform(struct!.auth),
  }
}


export function observabilityPipelineConfigDestinationsAmazonOpensearchToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsAmazonOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bulk_index: {
      value: cdktf.stringToHclTerraform(struct!.bulkIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth: {
      value: observabilityPipelineConfigDestinationsAmazonOpensearchAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsAmazonOpensearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsAmazonOpensearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bulkIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkIndex = this._bulkIndex;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsAmazonOpensearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkIndex = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bulkIndex = value.bulkIndex;
      this._id = value.id;
      this._inputs = value.inputs;
      this._auth.internalValue = value.auth;
    }
  }

  // bulk_index - computed: false, optional: true, required: false
  private _bulkIndex?: string; 
  public get bulkIndex() {
    return this.getStringAttribute('bulk_index');
  }
  public set bulkIndex(value: string) {
    this._bulkIndex = value;
  }
  public resetBulkIndex() {
    this._bulkIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkIndexInput() {
    return this._bulkIndex;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationsAmazonOpensearchAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationsAmazonOpensearchAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationsAmazonOpensearchList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsAmazonOpensearch[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsAmazonOpensearchOutputReference {
    return new ObservabilityPipelineConfigDestinationsAmazonOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsAzureStorage {
  /**
  * Optional prefix for blobs written to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#blob_prefix ObservabilityPipeline#blob_prefix}
  */
  readonly blobPrefix?: string;
  /**
  * The name of the Azure Blob Storage container to store logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#container_name ObservabilityPipeline#container_name}
  */
  readonly containerName: string;
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
}

export function observabilityPipelineConfigDestinationsAzureStorageToTerraform(struct?: ObservabilityPipelineConfigDestinationsAzureStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_prefix: cdktf.stringToTerraform(struct!.blobPrefix),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
  }
}


export function observabilityPipelineConfigDestinationsAzureStorageToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsAzureStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_prefix: {
      value: cdktf.stringToHclTerraform(struct!.blobPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsAzureStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsAzureStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobPrefix = this._blobPrefix;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsAzureStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blobPrefix = undefined;
      this._containerName = undefined;
      this._id = undefined;
      this._inputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blobPrefix = value.blobPrefix;
      this._containerName = value.containerName;
      this._id = value.id;
      this._inputs = value.inputs;
    }
  }

  // blob_prefix - computed: false, optional: true, required: false
  private _blobPrefix?: string; 
  public get blobPrefix() {
    return this.getStringAttribute('blob_prefix');
  }
  public set blobPrefix(value: string) {
    this._blobPrefix = value;
  }
  public resetBlobPrefix() {
    this._blobPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPrefixInput() {
    return this._blobPrefix;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }
}

export class ObservabilityPipelineConfigDestinationsAzureStorageList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsAzureStorage[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsAzureStorageOutputReference {
    return new ObservabilityPipelineConfigDestinationsAzureStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsDatadogLogs {
  /**
  * The unique ID of the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The inputs for the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
}

export function observabilityPipelineConfigDestinationsDatadogLogsToTerraform(struct?: ObservabilityPipelineConfigDestinationsDatadogLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
  }
}


export function observabilityPipelineConfigDestinationsDatadogLogsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsDatadogLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsDatadogLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsDatadogLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inputs = value.inputs;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }
}

export class ObservabilityPipelineConfigDestinationsDatadogLogsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsDatadogLogs[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference {
    return new ObservabilityPipelineConfigDestinationsDatadogLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsElasticsearch {
  /**
  * The Elasticsearch API version to use. Set to `auto` to auto-detect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#api_version ObservabilityPipeline#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The index or datastream to write logs to in Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
}

export function observabilityPipelineConfigDestinationsElasticsearchToTerraform(struct?: ObservabilityPipelineConfigDestinationsElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    bulk_index: cdktf.stringToTerraform(struct!.bulkIndex),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
  }
}


export function observabilityPipelineConfigDestinationsElasticsearchToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bulk_index: {
      value: cdktf.stringToHclTerraform(struct!.bulkIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._bulkIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkIndex = this._bulkIndex;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._bulkIndex = undefined;
      this._id = undefined;
      this._inputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._bulkIndex = value.bulkIndex;
      this._id = value.id;
      this._inputs = value.inputs;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // bulk_index - computed: false, optional: true, required: false
  private _bulkIndex?: string; 
  public get bulkIndex() {
    return this.getStringAttribute('bulk_index');
  }
  public set bulkIndex(value: string) {
    this._bulkIndex = value;
  }
  public resetBulkIndex() {
    this._bulkIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkIndexInput() {
    return this._bulkIndex;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }
}

export class ObservabilityPipelineConfigDestinationsElasticsearchList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsElasticsearchOutputReference {
    return new ObservabilityPipelineConfigDestinationsElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsGoogleChronicleAuth {
  /**
  * Path to the GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile?: string;
}

export function observabilityPipelineConfigDestinationsGoogleChronicleAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleChronicleAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigDestinationsGoogleChronicleAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleChronicleAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsGoogleChronicleAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigDestinationsGoogleChronicleAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsGoogleChronicleAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsFile = value.credentialsFile;
    }
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }
}
export interface ObservabilityPipelineConfigDestinationsGoogleChronicle {
  /**
  * The Google Chronicle customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#customer_id ObservabilityPipeline#customer_id}
  */
  readonly customerId?: string;
  /**
  * The encoding format for the logs sent to Chronicle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: string;
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The log type metadata associated with the Chronicle destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#log_type ObservabilityPipeline#log_type}
  */
  readonly logType?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationsGoogleChronicleAuth;
}

export function observabilityPipelineConfigDestinationsGoogleChronicleToTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleChronicle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_id: cdktf.stringToTerraform(struct!.customerId),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    log_type: cdktf.stringToTerraform(struct!.logType),
    auth: observabilityPipelineConfigDestinationsGoogleChronicleAuthToTerraform(struct!.auth),
  }
}


export function observabilityPipelineConfigDestinationsGoogleChronicleToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleChronicle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_id: {
      value: cdktf.stringToHclTerraform(struct!.customerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: observabilityPipelineConfigDestinationsGoogleChronicleAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigDestinationsGoogleChronicleAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsGoogleChronicleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsGoogleChronicle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerId = this._customerId;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsGoogleChronicle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerId = undefined;
      this._encoding = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._logType = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerId = value.customerId;
      this._encoding = value.encoding;
      this._id = value.id;
      this._inputs = value.inputs;
      this._logType = value.logType;
      this._auth.internalValue = value.auth;
    }
  }

  // customer_id - computed: false, optional: true, required: false
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  public resetCustomerId() {
    this._customerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationsGoogleChronicleAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationsGoogleChronicleAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationsGoogleChronicleList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsGoogleChronicle[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsGoogleChronicleOutputReference {
    return new ObservabilityPipelineConfigDestinationsGoogleChronicleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth {
  /**
  * Path to the GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile: string;
}

export function observabilityPipelineConfigDestinationsGoogleCloudStorageAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigDestinationsGoogleCloudStorageAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsFile = value.credentialsFile;
    }
  }

  // credentials_file - computed: false, optional: false, required: true
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }
}
export interface ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata {
  /**
  * The metadata key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigDestinationsGoogleCloudStorageMetadataToTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigDestinationsGoogleCloudStorageMetadataToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadataList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadataOutputReference {
    return new ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsGoogleCloudStorage {
  /**
  * Access control list setting for objects written to the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#acl ObservabilityPipeline#acl}
  */
  readonly acl: string;
  /**
  * Name of the GCS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Unique identifier for the destination component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * Optional prefix for object keys within the GCS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_prefix ObservabilityPipeline#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Storage class used for objects stored in GCS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#storage_class ObservabilityPipeline#storage_class}
  */
  readonly storageClass: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth: ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#metadata ObservabilityPipeline#metadata}
  */
  readonly metadata?: ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigDestinationsGoogleCloudStorageToTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleCloudStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    key_prefix: cdktf.stringToTerraform(struct!.keyPrefix),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    auth: observabilityPipelineConfigDestinationsGoogleCloudStorageAuthToTerraform(struct!.auth),
    metadata: cdktf.listMapper(observabilityPipelineConfigDestinationsGoogleCloudStorageMetadataToTerraform, true)(struct!.metadata),
  }
}


export function observabilityPipelineConfigDestinationsGoogleCloudStorageToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsGoogleCloudStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: observabilityPipelineConfigDestinationsGoogleCloudStorageAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth",
    },
    metadata: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsGoogleCloudStorageMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsGoogleCloudStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsGoogleCloudStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsGoogleCloudStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._bucket = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._keyPrefix = undefined;
      this._storageClass = undefined;
      this._auth.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._bucket = value.bucket;
      this._id = value.id;
      this._inputs = value.inputs;
      this._keyPrefix = value.keyPrefix;
      this._storageClass = value.storageClass;
      this._auth.internalValue = value.auth;
      this._metadata.internalValue = value.metadata;
    }
  }

  // acl - computed: false, optional: false, required: true
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationsGoogleCloudStorageAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ObservabilityPipelineConfigDestinationsGoogleCloudStorageMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationsGoogleCloudStorageList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsGoogleCloudStorage[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsGoogleCloudStorageOutputReference {
    return new ObservabilityPipelineConfigDestinationsGoogleCloudStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsMicrosoftSentinel {
  /**
  * Azure AD client ID used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#client_id ObservabilityPipeline#client_id}
  */
  readonly clientId: string;
  /**
  * The immutable ID of the Data Collection Rule (DCR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#dcr_immutable_id ObservabilityPipeline#dcr_immutable_id}
  */
  readonly dcrImmutableId: string;
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The name of the Log Analytics table where logs will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#table ObservabilityPipeline#table}
  */
  readonly table: string;
  /**
  * Azure AD tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tenant_id ObservabilityPipeline#tenant_id}
  */
  readonly tenantId: string;
}

export function observabilityPipelineConfigDestinationsMicrosoftSentinelToTerraform(struct?: ObservabilityPipelineConfigDestinationsMicrosoftSentinel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    dcr_immutable_id: cdktf.stringToTerraform(struct!.dcrImmutableId),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    table: cdktf.stringToTerraform(struct!.table),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function observabilityPipelineConfigDestinationsMicrosoftSentinelToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsMicrosoftSentinel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dcr_immutable_id: {
      value: cdktf.stringToHclTerraform(struct!.dcrImmutableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsMicrosoftSentinelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsMicrosoftSentinel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._dcrImmutableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrImmutableId = this._dcrImmutableId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsMicrosoftSentinel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._dcrImmutableId = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._table = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._dcrImmutableId = value.dcrImmutableId;
      this._id = value.id;
      this._inputs = value.inputs;
      this._table = value.table;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // dcr_immutable_id - computed: false, optional: false, required: true
  private _dcrImmutableId?: string; 
  public get dcrImmutableId() {
    return this.getStringAttribute('dcr_immutable_id');
  }
  public set dcrImmutableId(value: string) {
    this._dcrImmutableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrImmutableIdInput() {
    return this._dcrImmutableId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class ObservabilityPipelineConfigDestinationsMicrosoftSentinelList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsMicrosoftSentinel[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsMicrosoftSentinelOutputReference {
    return new ObservabilityPipelineConfigDestinationsMicrosoftSentinelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsNewRelic {
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The New Relic region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
}

export function observabilityPipelineConfigDestinationsNewRelicToTerraform(struct?: ObservabilityPipelineConfigDestinationsNewRelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function observabilityPipelineConfigDestinationsNewRelicToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsNewRelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsNewRelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsNewRelic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsNewRelic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inputs = value.inputs;
      this._region = value.region;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ObservabilityPipelineConfigDestinationsNewRelicList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsNewRelic[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsNewRelicOutputReference {
    return new ObservabilityPipelineConfigDestinationsNewRelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsOpensearch {
  /**
  * The index or datastream to write logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
}

export function observabilityPipelineConfigDestinationsOpensearchToTerraform(struct?: ObservabilityPipelineConfigDestinationsOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_index: cdktf.stringToTerraform(struct!.bulkIndex),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
  }
}


export function observabilityPipelineConfigDestinationsOpensearchToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bulk_index: {
      value: cdktf.stringToHclTerraform(struct!.bulkIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsOpensearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsOpensearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bulkIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkIndex = this._bulkIndex;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsOpensearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkIndex = undefined;
      this._id = undefined;
      this._inputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bulkIndex = value.bulkIndex;
      this._id = value.id;
      this._inputs = value.inputs;
    }
  }

  // bulk_index - computed: false, optional: true, required: false
  private _bulkIndex?: string; 
  public get bulkIndex() {
    return this.getStringAttribute('bulk_index');
  }
  public set bulkIndex(value: string) {
    this._bulkIndex = value;
  }
  public resetBulkIndex() {
    this._bulkIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkIndexInput() {
    return this._bulkIndex;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }
}

export class ObservabilityPipelineConfigDestinationsOpensearchList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsOpensearch[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsOpensearchOutputReference {
    return new ObservabilityPipelineConfigDestinationsOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsRsyslogTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigDestinationsRsyslogTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationsRsyslogTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigDestinationsRsyslogTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsRsyslogTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsRsyslogTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigDestinationsRsyslogTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsRsyslogTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigDestinationsRsyslog {
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * Optional socket keepalive duration in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#keepalive ObservabilityPipeline#keepalive}
  */
  readonly keepalive?: number;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationsRsyslogTls;
}

export function observabilityPipelineConfigDestinationsRsyslogToTerraform(struct?: ObservabilityPipelineConfigDestinationsRsyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    tls: observabilityPipelineConfigDestinationsRsyslogTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationsRsyslogToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsRsyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: observabilityPipelineConfigDestinationsRsyslogTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigDestinationsRsyslogTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsRsyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsRsyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsRsyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._keepalive = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inputs = value.inputs;
      this._keepalive = value.keepalive;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationsRsyslogTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationsRsyslogTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationsRsyslogList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsRsyslog[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsRsyslogOutputReference {
    return new ObservabilityPipelineConfigDestinationsRsyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsSentinelOne {
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The SentinelOne region to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
}

export function observabilityPipelineConfigDestinationsSentinelOneToTerraform(struct?: ObservabilityPipelineConfigDestinationsSentinelOne | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function observabilityPipelineConfigDestinationsSentinelOneToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsSentinelOne | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsSentinelOneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsSentinelOne | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsSentinelOne | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inputs = value.inputs;
      this._region = value.region;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ObservabilityPipelineConfigDestinationsSentinelOneList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsSentinelOne[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsSentinelOneOutputReference {
    return new ObservabilityPipelineConfigDestinationsSentinelOneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsSplunkHec {
  /**
  * If `true`, Splunk tries to extract timestamps from incoming log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auto_extract_timestamp ObservabilityPipeline#auto_extract_timestamp}
  */
  readonly autoExtractTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Encoding format for log events. Valid values: `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: string;
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional name of the Splunk index where logs are written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#index ObservabilityPipeline#index}
  */
  readonly index?: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The Splunk sourcetype to assign to log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sourcetype ObservabilityPipeline#sourcetype}
  */
  readonly sourcetype?: string;
}

export function observabilityPipelineConfigDestinationsSplunkHecToTerraform(struct?: ObservabilityPipelineConfigDestinationsSplunkHec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_extract_timestamp: cdktf.booleanToTerraform(struct!.autoExtractTimestamp),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    sourcetype: cdktf.stringToTerraform(struct!.sourcetype),
  }
}


export function observabilityPipelineConfigDestinationsSplunkHecToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsSplunkHec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_extract_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.autoExtractTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sourcetype: {
      value: cdktf.stringToHclTerraform(struct!.sourcetype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsSplunkHecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsSplunkHec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoExtractTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExtractTimestamp = this._autoExtractTimestamp;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._sourcetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcetype = this._sourcetype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsSplunkHec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoExtractTimestamp = undefined;
      this._encoding = undefined;
      this._id = undefined;
      this._index = undefined;
      this._inputs = undefined;
      this._sourcetype = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoExtractTimestamp = value.autoExtractTimestamp;
      this._encoding = value.encoding;
      this._id = value.id;
      this._index = value.index;
      this._inputs = value.inputs;
      this._sourcetype = value.sourcetype;
    }
  }

  // auto_extract_timestamp - computed: false, optional: true, required: false
  private _autoExtractTimestamp?: boolean | cdktf.IResolvable; 
  public get autoExtractTimestamp() {
    return this.getBooleanAttribute('auto_extract_timestamp');
  }
  public set autoExtractTimestamp(value: boolean | cdktf.IResolvable) {
    this._autoExtractTimestamp = value;
  }
  public resetAutoExtractTimestamp() {
    this._autoExtractTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExtractTimestampInput() {
    return this._autoExtractTimestamp;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // index - computed: false, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // sourcetype - computed: false, optional: true, required: false
  private _sourcetype?: string; 
  public get sourcetype() {
    return this.getStringAttribute('sourcetype');
  }
  public set sourcetype(value: string) {
    this._sourcetype = value;
  }
  public resetSourcetype() {
    this._sourcetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcetypeInput() {
    return this._sourcetype;
  }
}

export class ObservabilityPipelineConfigDestinationsSplunkHecList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsSplunkHec[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsSplunkHecOutputReference {
    return new ObservabilityPipelineConfigDestinationsSplunkHecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields {
  /**
  * The header field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name?: string;
  /**
  * The header field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: string;
}

export function observabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsToTerraform(struct?: ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsOutputReference {
    return new ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsSumoLogic {
  /**
  * The output encoding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: string;
  /**
  * Optional override for the host name header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#header_host_name ObservabilityPipeline#header_host_name}
  */
  readonly headerHostName?: string;
  /**
  * Optional override for the source category header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#header_source_category ObservabilityPipeline#header_source_category}
  */
  readonly headerSourceCategory?: string;
  /**
  * Optional override for the source name header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#header_source_name ObservabilityPipeline#header_source_name}
  */
  readonly headerSourceName?: string;
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * header_custom_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#header_custom_fields ObservabilityPipeline#header_custom_fields}
  */
  readonly headerCustomFields?: ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigDestinationsSumoLogicToTerraform(struct?: ObservabilityPipelineConfigDestinationsSumoLogic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    header_host_name: cdktf.stringToTerraform(struct!.headerHostName),
    header_source_category: cdktf.stringToTerraform(struct!.headerSourceCategory),
    header_source_name: cdktf.stringToTerraform(struct!.headerSourceName),
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    header_custom_fields: cdktf.listMapper(observabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsToTerraform, true)(struct!.headerCustomFields),
  }
}


export function observabilityPipelineConfigDestinationsSumoLogicToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsSumoLogic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_host_name: {
      value: cdktf.stringToHclTerraform(struct!.headerHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_source_category: {
      value: cdktf.stringToHclTerraform(struct!.headerSourceCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_source_name: {
      value: cdktf.stringToHclTerraform(struct!.headerSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    header_custom_fields: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsToHclTerraform, true)(struct!.headerCustomFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsSumoLogicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsSumoLogic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._headerHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHostName = this._headerHostName;
    }
    if (this._headerSourceCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSourceCategory = this._headerSourceCategory;
    }
    if (this._headerSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSourceName = this._headerSourceName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._headerCustomFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCustomFields = this._headerCustomFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsSumoLogic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._headerHostName = undefined;
      this._headerSourceCategory = undefined;
      this._headerSourceName = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._headerCustomFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._headerHostName = value.headerHostName;
      this._headerSourceCategory = value.headerSourceCategory;
      this._headerSourceName = value.headerSourceName;
      this._id = value.id;
      this._inputs = value.inputs;
      this._headerCustomFields.internalValue = value.headerCustomFields;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // header_host_name - computed: false, optional: true, required: false
  private _headerHostName?: string; 
  public get headerHostName() {
    return this.getStringAttribute('header_host_name');
  }
  public set headerHostName(value: string) {
    this._headerHostName = value;
  }
  public resetHeaderHostName() {
    this._headerHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHostNameInput() {
    return this._headerHostName;
  }

  // header_source_category - computed: false, optional: true, required: false
  private _headerSourceCategory?: string; 
  public get headerSourceCategory() {
    return this.getStringAttribute('header_source_category');
  }
  public set headerSourceCategory(value: string) {
    this._headerSourceCategory = value;
  }
  public resetHeaderSourceCategory() {
    this._headerSourceCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSourceCategoryInput() {
    return this._headerSourceCategory;
  }

  // header_source_name - computed: false, optional: true, required: false
  private _headerSourceName?: string; 
  public get headerSourceName() {
    return this.getStringAttribute('header_source_name');
  }
  public set headerSourceName(value: string) {
    this._headerSourceName = value;
  }
  public resetHeaderSourceName() {
    this._headerSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSourceNameInput() {
    return this._headerSourceName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // header_custom_fields - computed: false, optional: true, required: false
  private _headerCustomFields = new ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFieldsList(this, "header_custom_fields", false);
  public get headerCustomFields() {
    return this._headerCustomFields;
  }
  public putHeaderCustomFields(value: ObservabilityPipelineConfigDestinationsSumoLogicHeaderCustomFields[] | cdktf.IResolvable) {
    this._headerCustomFields.internalValue = value;
  }
  public resetHeaderCustomFields() {
    this._headerCustomFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerCustomFieldsInput() {
    return this._headerCustomFields.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationsSumoLogicList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsSumoLogic[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsSumoLogicOutputReference {
    return new ObservabilityPipelineConfigDestinationsSumoLogicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationsSyslogNgTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigDestinationsSyslogNgTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationsSyslogNgTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigDestinationsSyslogNgTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsSyslogNgTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsSyslogNgTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigDestinationsSyslogNgTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsSyslogNgTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigDestinationsSyslogNg {
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * Optional socket keepalive duration in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#keepalive ObservabilityPipeline#keepalive}
  */
  readonly keepalive?: number;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationsSyslogNgTls;
}

export function observabilityPipelineConfigDestinationsSyslogNgToTerraform(struct?: ObservabilityPipelineConfigDestinationsSyslogNg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    tls: observabilityPipelineConfigDestinationsSyslogNgTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationsSyslogNgToHclTerraform(struct?: ObservabilityPipelineConfigDestinationsSyslogNg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: observabilityPipelineConfigDestinationsSyslogNgTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigDestinationsSyslogNgTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsSyslogNgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationsSyslogNg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationsSyslogNg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._keepalive = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inputs = value.inputs;
      this._keepalive = value.keepalive;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationsSyslogNgTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationsSyslogNgTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationsSyslogNgList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationsSyslogNg[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationsSyslogNgOutputReference {
    return new ObservabilityPipelineConfigDestinationsSyslogNgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinations {
  /**
  * amazon_opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#amazon_opensearch ObservabilityPipeline#amazon_opensearch}
  */
  readonly amazonOpensearch?: ObservabilityPipelineConfigDestinationsAmazonOpensearch[] | cdktf.IResolvable;
  /**
  * azure_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#azure_storage ObservabilityPipeline#azure_storage}
  */
  readonly azureStorage?: ObservabilityPipelineConfigDestinationsAzureStorage[] | cdktf.IResolvable;
  /**
  * datadog_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#datadog_logs ObservabilityPipeline#datadog_logs}
  */
  readonly datadogLogs?: ObservabilityPipelineConfigDestinationsDatadogLogs[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#elasticsearch ObservabilityPipeline#elasticsearch}
  */
  readonly elasticsearch?: ObservabilityPipelineConfigDestinationsElasticsearch[] | cdktf.IResolvable;
  /**
  * google_chronicle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#google_chronicle ObservabilityPipeline#google_chronicle}
  */
  readonly googleChronicle?: ObservabilityPipelineConfigDestinationsGoogleChronicle[] | cdktf.IResolvable;
  /**
  * google_cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#google_cloud_storage ObservabilityPipeline#google_cloud_storage}
  */
  readonly googleCloudStorage?: ObservabilityPipelineConfigDestinationsGoogleCloudStorage[] | cdktf.IResolvable;
  /**
  * microsoft_sentinel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#microsoft_sentinel ObservabilityPipeline#microsoft_sentinel}
  */
  readonly microsoftSentinel?: ObservabilityPipelineConfigDestinationsMicrosoftSentinel[] | cdktf.IResolvable;
  /**
  * new_relic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#new_relic ObservabilityPipeline#new_relic}
  */
  readonly newRelic?: ObservabilityPipelineConfigDestinationsNewRelic[] | cdktf.IResolvable;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#opensearch ObservabilityPipeline#opensearch}
  */
  readonly opensearch?: ObservabilityPipelineConfigDestinationsOpensearch[] | cdktf.IResolvable;
  /**
  * rsyslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rsyslog ObservabilityPipeline#rsyslog}
  */
  readonly rsyslog?: ObservabilityPipelineConfigDestinationsRsyslog[] | cdktf.IResolvable;
  /**
  * sentinel_one block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sentinel_one ObservabilityPipeline#sentinel_one}
  */
  readonly sentinelOne?: ObservabilityPipelineConfigDestinationsSentinelOne[] | cdktf.IResolvable;
  /**
  * splunk_hec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#splunk_hec ObservabilityPipeline#splunk_hec}
  */
  readonly splunkHec?: ObservabilityPipelineConfigDestinationsSplunkHec[] | cdktf.IResolvable;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sumo_logic ObservabilityPipeline#sumo_logic}
  */
  readonly sumoLogic?: ObservabilityPipelineConfigDestinationsSumoLogic[] | cdktf.IResolvable;
  /**
  * syslog_ng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#syslog_ng ObservabilityPipeline#syslog_ng}
  */
  readonly syslogNg?: ObservabilityPipelineConfigDestinationsSyslogNg[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigDestinationsToTerraform(struct?: ObservabilityPipelineConfigDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_opensearch: cdktf.listMapper(observabilityPipelineConfigDestinationsAmazonOpensearchToTerraform, true)(struct!.amazonOpensearch),
    azure_storage: cdktf.listMapper(observabilityPipelineConfigDestinationsAzureStorageToTerraform, true)(struct!.azureStorage),
    datadog_logs: cdktf.listMapper(observabilityPipelineConfigDestinationsDatadogLogsToTerraform, true)(struct!.datadogLogs),
    elasticsearch: cdktf.listMapper(observabilityPipelineConfigDestinationsElasticsearchToTerraform, true)(struct!.elasticsearch),
    google_chronicle: cdktf.listMapper(observabilityPipelineConfigDestinationsGoogleChronicleToTerraform, true)(struct!.googleChronicle),
    google_cloud_storage: cdktf.listMapper(observabilityPipelineConfigDestinationsGoogleCloudStorageToTerraform, true)(struct!.googleCloudStorage),
    microsoft_sentinel: cdktf.listMapper(observabilityPipelineConfigDestinationsMicrosoftSentinelToTerraform, true)(struct!.microsoftSentinel),
    new_relic: cdktf.listMapper(observabilityPipelineConfigDestinationsNewRelicToTerraform, true)(struct!.newRelic),
    opensearch: cdktf.listMapper(observabilityPipelineConfigDestinationsOpensearchToTerraform, true)(struct!.opensearch),
    rsyslog: cdktf.listMapper(observabilityPipelineConfigDestinationsRsyslogToTerraform, true)(struct!.rsyslog),
    sentinel_one: cdktf.listMapper(observabilityPipelineConfigDestinationsSentinelOneToTerraform, true)(struct!.sentinelOne),
    splunk_hec: cdktf.listMapper(observabilityPipelineConfigDestinationsSplunkHecToTerraform, true)(struct!.splunkHec),
    sumo_logic: cdktf.listMapper(observabilityPipelineConfigDestinationsSumoLogicToTerraform, true)(struct!.sumoLogic),
    syslog_ng: cdktf.listMapper(observabilityPipelineConfigDestinationsSyslogNgToTerraform, true)(struct!.syslogNg),
  }
}


export function observabilityPipelineConfigDestinationsToHclTerraform(struct?: ObservabilityPipelineConfigDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_opensearch: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsAmazonOpensearchToHclTerraform, true)(struct!.amazonOpensearch),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsAmazonOpensearchList",
    },
    azure_storage: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsAzureStorageToHclTerraform, true)(struct!.azureStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsAzureStorageList",
    },
    datadog_logs: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsDatadogLogsToHclTerraform, true)(struct!.datadogLogs),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsDatadogLogsList",
    },
    elasticsearch: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsElasticsearchToHclTerraform, true)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsElasticsearchList",
    },
    google_chronicle: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsGoogleChronicleToHclTerraform, true)(struct!.googleChronicle),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsGoogleChronicleList",
    },
    google_cloud_storage: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsGoogleCloudStorageToHclTerraform, true)(struct!.googleCloudStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsGoogleCloudStorageList",
    },
    microsoft_sentinel: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsMicrosoftSentinelToHclTerraform, true)(struct!.microsoftSentinel),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsMicrosoftSentinelList",
    },
    new_relic: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsNewRelicToHclTerraform, true)(struct!.newRelic),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsNewRelicList",
    },
    opensearch: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsOpensearchToHclTerraform, true)(struct!.opensearch),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsOpensearchList",
    },
    rsyslog: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsRsyslogToHclTerraform, true)(struct!.rsyslog),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsRsyslogList",
    },
    sentinel_one: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsSentinelOneToHclTerraform, true)(struct!.sentinelOne),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsSentinelOneList",
    },
    splunk_hec: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsSplunkHecToHclTerraform, true)(struct!.splunkHec),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsSplunkHecList",
    },
    sumo_logic: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsSumoLogicToHclTerraform, true)(struct!.sumoLogic),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsSumoLogicList",
    },
    syslog_ng: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigDestinationsSyslogNgToHclTerraform, true)(struct!.syslogNg),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationsSyslogNgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonOpensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonOpensearch = this._amazonOpensearch?.internalValue;
    }
    if (this._azureStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorage = this._azureStorage?.internalValue;
    }
    if (this._datadogLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogLogs = this._datadogLogs?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._googleChronicle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleChronicle = this._googleChronicle?.internalValue;
    }
    if (this._googleCloudStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorage = this._googleCloudStorage?.internalValue;
    }
    if (this._microsoftSentinel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftSentinel = this._microsoftSentinel?.internalValue;
    }
    if (this._newRelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newRelic = this._newRelic?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    if (this._rsyslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsyslog = this._rsyslog?.internalValue;
    }
    if (this._sentinelOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelOne = this._sentinelOne?.internalValue;
    }
    if (this._splunkHec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHec = this._splunkHec?.internalValue;
    }
    if (this._sumoLogic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumoLogic = this._sumoLogic?.internalValue;
    }
    if (this._syslogNg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogNg = this._syslogNg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonOpensearch.internalValue = undefined;
      this._azureStorage.internalValue = undefined;
      this._datadogLogs.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._googleChronicle.internalValue = undefined;
      this._googleCloudStorage.internalValue = undefined;
      this._microsoftSentinel.internalValue = undefined;
      this._newRelic.internalValue = undefined;
      this._opensearch.internalValue = undefined;
      this._rsyslog.internalValue = undefined;
      this._sentinelOne.internalValue = undefined;
      this._splunkHec.internalValue = undefined;
      this._sumoLogic.internalValue = undefined;
      this._syslogNg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonOpensearch.internalValue = value.amazonOpensearch;
      this._azureStorage.internalValue = value.azureStorage;
      this._datadogLogs.internalValue = value.datadogLogs;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._googleChronicle.internalValue = value.googleChronicle;
      this._googleCloudStorage.internalValue = value.googleCloudStorage;
      this._microsoftSentinel.internalValue = value.microsoftSentinel;
      this._newRelic.internalValue = value.newRelic;
      this._opensearch.internalValue = value.opensearch;
      this._rsyslog.internalValue = value.rsyslog;
      this._sentinelOne.internalValue = value.sentinelOne;
      this._splunkHec.internalValue = value.splunkHec;
      this._sumoLogic.internalValue = value.sumoLogic;
      this._syslogNg.internalValue = value.syslogNg;
    }
  }

  // amazon_opensearch - computed: false, optional: true, required: false
  private _amazonOpensearch = new ObservabilityPipelineConfigDestinationsAmazonOpensearchList(this, "amazon_opensearch", false);
  public get amazonOpensearch() {
    return this._amazonOpensearch;
  }
  public putAmazonOpensearch(value: ObservabilityPipelineConfigDestinationsAmazonOpensearch[] | cdktf.IResolvable) {
    this._amazonOpensearch.internalValue = value;
  }
  public resetAmazonOpensearch() {
    this._amazonOpensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonOpensearchInput() {
    return this._amazonOpensearch.internalValue;
  }

  // azure_storage - computed: false, optional: true, required: false
  private _azureStorage = new ObservabilityPipelineConfigDestinationsAzureStorageList(this, "azure_storage", false);
  public get azureStorage() {
    return this._azureStorage;
  }
  public putAzureStorage(value: ObservabilityPipelineConfigDestinationsAzureStorage[] | cdktf.IResolvable) {
    this._azureStorage.internalValue = value;
  }
  public resetAzureStorage() {
    this._azureStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageInput() {
    return this._azureStorage.internalValue;
  }

  // datadog_logs - computed: false, optional: true, required: false
  private _datadogLogs = new ObservabilityPipelineConfigDestinationsDatadogLogsList(this, "datadog_logs", false);
  public get datadogLogs() {
    return this._datadogLogs;
  }
  public putDatadogLogs(value: ObservabilityPipelineConfigDestinationsDatadogLogs[] | cdktf.IResolvable) {
    this._datadogLogs.internalValue = value;
  }
  public resetDatadogLogs() {
    this._datadogLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogLogsInput() {
    return this._datadogLogs.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new ObservabilityPipelineConfigDestinationsElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: ObservabilityPipelineConfigDestinationsElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // google_chronicle - computed: false, optional: true, required: false
  private _googleChronicle = new ObservabilityPipelineConfigDestinationsGoogleChronicleList(this, "google_chronicle", false);
  public get googleChronicle() {
    return this._googleChronicle;
  }
  public putGoogleChronicle(value: ObservabilityPipelineConfigDestinationsGoogleChronicle[] | cdktf.IResolvable) {
    this._googleChronicle.internalValue = value;
  }
  public resetGoogleChronicle() {
    this._googleChronicle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleChronicleInput() {
    return this._googleChronicle.internalValue;
  }

  // google_cloud_storage - computed: false, optional: true, required: false
  private _googleCloudStorage = new ObservabilityPipelineConfigDestinationsGoogleCloudStorageList(this, "google_cloud_storage", false);
  public get googleCloudStorage() {
    return this._googleCloudStorage;
  }
  public putGoogleCloudStorage(value: ObservabilityPipelineConfigDestinationsGoogleCloudStorage[] | cdktf.IResolvable) {
    this._googleCloudStorage.internalValue = value;
  }
  public resetGoogleCloudStorage() {
    this._googleCloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageInput() {
    return this._googleCloudStorage.internalValue;
  }

  // microsoft_sentinel - computed: false, optional: true, required: false
  private _microsoftSentinel = new ObservabilityPipelineConfigDestinationsMicrosoftSentinelList(this, "microsoft_sentinel", false);
  public get microsoftSentinel() {
    return this._microsoftSentinel;
  }
  public putMicrosoftSentinel(value: ObservabilityPipelineConfigDestinationsMicrosoftSentinel[] | cdktf.IResolvable) {
    this._microsoftSentinel.internalValue = value;
  }
  public resetMicrosoftSentinel() {
    this._microsoftSentinel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftSentinelInput() {
    return this._microsoftSentinel.internalValue;
  }

  // new_relic - computed: false, optional: true, required: false
  private _newRelic = new ObservabilityPipelineConfigDestinationsNewRelicList(this, "new_relic", false);
  public get newRelic() {
    return this._newRelic;
  }
  public putNewRelic(value: ObservabilityPipelineConfigDestinationsNewRelic[] | cdktf.IResolvable) {
    this._newRelic.internalValue = value;
  }
  public resetNewRelic() {
    this._newRelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicInput() {
    return this._newRelic.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new ObservabilityPipelineConfigDestinationsOpensearchList(this, "opensearch", false);
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: ObservabilityPipelineConfigDestinationsOpensearch[] | cdktf.IResolvable) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // rsyslog - computed: false, optional: true, required: false
  private _rsyslog = new ObservabilityPipelineConfigDestinationsRsyslogList(this, "rsyslog", false);
  public get rsyslog() {
    return this._rsyslog;
  }
  public putRsyslog(value: ObservabilityPipelineConfigDestinationsRsyslog[] | cdktf.IResolvable) {
    this._rsyslog.internalValue = value;
  }
  public resetRsyslog() {
    this._rsyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsyslogInput() {
    return this._rsyslog.internalValue;
  }

  // sentinel_one - computed: false, optional: true, required: false
  private _sentinelOne = new ObservabilityPipelineConfigDestinationsSentinelOneList(this, "sentinel_one", false);
  public get sentinelOne() {
    return this._sentinelOne;
  }
  public putSentinelOne(value: ObservabilityPipelineConfigDestinationsSentinelOne[] | cdktf.IResolvable) {
    this._sentinelOne.internalValue = value;
  }
  public resetSentinelOne() {
    this._sentinelOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelOneInput() {
    return this._sentinelOne.internalValue;
  }

  // splunk_hec - computed: false, optional: true, required: false
  private _splunkHec = new ObservabilityPipelineConfigDestinationsSplunkHecList(this, "splunk_hec", false);
  public get splunkHec() {
    return this._splunkHec;
  }
  public putSplunkHec(value: ObservabilityPipelineConfigDestinationsSplunkHec[] | cdktf.IResolvable) {
    this._splunkHec.internalValue = value;
  }
  public resetSplunkHec() {
    this._splunkHec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecInput() {
    return this._splunkHec.internalValue;
  }

  // sumo_logic - computed: false, optional: true, required: false
  private _sumoLogic = new ObservabilityPipelineConfigDestinationsSumoLogicList(this, "sumo_logic", false);
  public get sumoLogic() {
    return this._sumoLogic;
  }
  public putSumoLogic(value: ObservabilityPipelineConfigDestinationsSumoLogic[] | cdktf.IResolvable) {
    this._sumoLogic.internalValue = value;
  }
  public resetSumoLogic() {
    this._sumoLogic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoLogicInput() {
    return this._sumoLogic.internalValue;
  }

  // syslog_ng - computed: false, optional: true, required: false
  private _syslogNg = new ObservabilityPipelineConfigDestinationsSyslogNgList(this, "syslog_ng", false);
  public get syslogNg() {
    return this._syslogNg;
  }
  public putSyslogNg(value: ObservabilityPipelineConfigDestinationsSyslogNg[] | cdktf.IResolvable) {
    this._syslogNg.internalValue = value;
  }
  public resetSyslogNg() {
    this._syslogNg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogNgInput() {
    return this._syslogNg.internalValue;
  }
}
export interface ObservabilityPipelineConfigProcessorsAddEnvVarsVariables {
  /**
  * The target field in the log event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
  /**
  * The name of the environment variable to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
}

export function observabilityPipelineConfigProcessorsAddEnvVarsVariablesToTerraform(struct?: ObservabilityPipelineConfigProcessorsAddEnvVarsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function observabilityPipelineConfigProcessorsAddEnvVarsVariablesToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsAddEnvVarsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsAddEnvVarsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsAddEnvVarsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsAddEnvVarsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._name = value.name;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
}

export class ObservabilityPipelineConfigProcessorsAddEnvVarsVariablesList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsAddEnvVarsVariables[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsAddEnvVarsVariablesOutputReference {
    return new ObservabilityPipelineConfigProcessorsAddEnvVarsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsAddEnvVars {
  /**
  * The unique identifier for this component. Used to reference this processor in the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the input for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#variables ObservabilityPipeline#variables}
  */
  readonly variables?: ObservabilityPipelineConfigProcessorsAddEnvVarsVariables[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsAddEnvVarsToTerraform(struct?: ObservabilityPipelineConfigProcessorsAddEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    variables: cdktf.listMapper(observabilityPipelineConfigProcessorsAddEnvVarsVariablesToTerraform, true)(struct!.variables),
  }
}


export function observabilityPipelineConfigProcessorsAddEnvVarsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsAddEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    variables: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsAddEnvVarsVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsAddEnvVarsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsAddEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsAddEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsAddEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._variables.internalValue = value.variables;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new ObservabilityPipelineConfigProcessorsAddEnvVarsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ObservabilityPipelineConfigProcessorsAddEnvVarsVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsAddEnvVarsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsAddEnvVars[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsAddEnvVarsOutputReference {
    return new ObservabilityPipelineConfigProcessorsAddEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsAddFieldsField {
  /**
  * The field name to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value to assign to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigProcessorsAddFieldsFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorsAddFieldsFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsAddFieldsField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsAddFieldsField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObservabilityPipelineConfigProcessorsAddFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsAddFieldsField[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference {
    return new ObservabilityPipelineConfigProcessorsAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsAddFields {
  /**
  * The unique ID of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * The inputs for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorsAddFieldsField[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsAddFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorsAddFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    field: cdktf.listMapper(observabilityPipelineConfigProcessorsAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorsAddFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsAddFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsAddFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsAddFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsAddFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._field.internalValue = value.field;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // field - computed: false, optional: true, required: false
  private _field = new ObservabilityPipelineConfigProcessorsAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ObservabilityPipelineConfigProcessorsAddFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsAddFieldsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsAddFields[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsAddFieldsOutputReference {
    return new ObservabilityPipelineConfigProcessorsAddFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsDedupe {
  /**
  * A list of log field paths to check for duplicates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields: string[];
  /**
  * The unique identifier for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the input for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The deduplication mode to apply to the fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorsDedupeToTerraform(struct?: ObservabilityPipelineConfigProcessorsDedupe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigProcessorsDedupeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsDedupe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsDedupeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsDedupe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsDedupe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._mode = value.mode;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ObservabilityPipelineConfigProcessorsDedupeList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsDedupe[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsDedupeOutputReference {
    return new ObservabilityPipelineConfigProcessorsDedupeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding {
  /**
  * The `encoding` `delimiter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#delimiter ObservabilityPipeline#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The `encoding` `includes_headers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#includes_headers ObservabilityPipeline#includes_headers}
  */
  readonly includesHeaders?: boolean | cdktf.IResolvable;
  /**
  * File encoding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#type ObservabilityPipeline#type}
  */
  readonly type?: string;
}

export function observabilityPipelineConfigProcessorsEnrichmentTableFileEncodingToTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    includes_headers: cdktf.booleanToTerraform(struct!.includesHeaders),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function observabilityPipelineConfigProcessorsEnrichmentTableFileEncodingToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    includes_headers: {
      value: cdktf.booleanToHclTerraform(struct!.includesHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncodingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._includesHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includesHeaders = this._includesHeaders;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._includesHeaders = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._includesHeaders = value.includesHeaders;
      this._type = value.type;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // includes_headers - computed: false, optional: true, required: false
  private _includesHeaders?: boolean | cdktf.IResolvable; 
  public get includesHeaders() {
    return this.getBooleanAttribute('includes_headers');
  }
  public set includesHeaders(value: boolean | cdktf.IResolvable) {
    this._includesHeaders = value;
  }
  public resetIncludesHeaders() {
    this._includesHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesHeadersInput() {
    return this._includesHeaders;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey {
  /**
  * The `items` `column`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#column ObservabilityPipeline#column}
  */
  readonly column?: string;
  /**
  * The comparison method (e.g. equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#comparison ObservabilityPipeline#comparison}
  */
  readonly comparison?: string;
  /**
  * The `items` `field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: string;
}

export function observabilityPipelineConfigProcessorsEnrichmentTableFileKeyToTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    comparison: cdktf.stringToTerraform(struct!.comparison),
    field: cdktf.stringToTerraform(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorsEnrichmentTableFileKeyToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableFileKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._comparison = undefined;
      this._field = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._comparison = value.comparison;
      this._field = value.field;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableFileKeyList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsEnrichmentTableFileKeyOutputReference {
    return new ObservabilityPipelineConfigProcessorsEnrichmentTableFileKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema {
  /**
  * The `items` `column`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#column ObservabilityPipeline#column}
  */
  readonly column?: string;
  /**
  * The type of the column (e.g. string, boolean, integer, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#type ObservabilityPipeline#type}
  */
  readonly type?: string;
}

export function observabilityPipelineConfigProcessorsEnrichmentTableFileSchemaToTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function observabilityPipelineConfigProcessorsEnrichmentTableFileSchemaToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._type = value.type;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchemaList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchemaOutputReference {
    return new ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsEnrichmentTableFile {
  /**
  * Path to the CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path?: string;
  /**
  * encoding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key ObservabilityPipeline#key}
  */
  readonly key?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey[] | cdktf.IResolvable;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#schema ObservabilityPipeline#schema}
  */
  readonly schema?: ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsEnrichmentTableFileToTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    encoding: observabilityPipelineConfigProcessorsEnrichmentTableFileEncodingToTerraform(struct!.encoding),
    key: cdktf.listMapper(observabilityPipelineConfigProcessorsEnrichmentTableFileKeyToTerraform, true)(struct!.key),
    schema: cdktf.listMapper(observabilityPipelineConfigProcessorsEnrichmentTableFileSchemaToTerraform, true)(struct!.schema),
  }
}


export function observabilityPipelineConfigProcessorsEnrichmentTableFileToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: observabilityPipelineConfigProcessorsEnrichmentTableFileEncodingToHclTerraform(struct!.encoding),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding",
    },
    key: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsEnrichmentTableFileKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsEnrichmentTableFileKeyList",
    },
    schema: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsEnrichmentTableFileSchemaToHclTerraform, true)(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsEnrichmentTableFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._encoding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._encoding.internalValue = undefined;
      this._key.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._encoding.internalValue = value.encoding;
      this._key.internalValue = value.key;
      this._schema.internalValue = value.schema;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding = new ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncodingOutputReference(this, "encoding");
  public get encoding() {
    return this._encoding;
  }
  public putEncoding(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFileEncoding) {
    this._encoding.internalValue = value;
  }
  public resetEncoding() {
    this._encoding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ObservabilityPipelineConfigProcessorsEnrichmentTableFileKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFileKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFileSchema[] | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip {
  /**
  * Path to the IP field in the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_field ObservabilityPipeline#key_field}
  */
  readonly keyField?: string;
  /**
  * Locale used to resolve geographical names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#locale ObservabilityPipeline#locale}
  */
  readonly locale?: string;
  /**
  * Path to the GeoIP database file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path?: string;
}

export function observabilityPipelineConfigProcessorsEnrichmentTableGeoipToTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_field: cdktf.stringToTerraform(struct!.keyField),
    locale: cdktf.stringToTerraform(struct!.locale),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function observabilityPipelineConfigProcessorsEnrichmentTableGeoipToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_field: {
      value: cdktf.stringToHclTerraform(struct!.keyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableGeoipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyField = this._keyField;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyField = undefined;
      this._locale = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyField = value.keyField;
      this._locale = value.locale;
      this._path = value.path;
    }
  }

  // key_field - computed: false, optional: true, required: false
  private _keyField?: string; 
  public get keyField() {
    return this.getStringAttribute('key_field');
  }
  public set keyField(value: string) {
    this._keyField = value;
  }
  public resetKeyField() {
    this._keyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFieldInput() {
    return this._keyField;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface ObservabilityPipelineConfigProcessorsEnrichmentTable {
  /**
  * The unique identifier for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the input for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * Path where enrichment results should be stored in the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#target ObservabilityPipeline#target}
  */
  readonly target: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#file ObservabilityPipeline#file}
  */
  readonly file?: ObservabilityPipelineConfigProcessorsEnrichmentTableFile;
  /**
  * geoip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#geoip ObservabilityPipeline#geoip}
  */
  readonly geoip?: ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip;
}

export function observabilityPipelineConfigProcessorsEnrichmentTableToTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    target: cdktf.stringToTerraform(struct!.target),
    file: observabilityPipelineConfigProcessorsEnrichmentTableFileToTerraform(struct!.file),
    geoip: observabilityPipelineConfigProcessorsEnrichmentTableGeoipToTerraform(struct!.geoip),
  }
}


export function observabilityPipelineConfigProcessorsEnrichmentTableToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsEnrichmentTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: observabilityPipelineConfigProcessorsEnrichmentTableFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsEnrichmentTableFile",
    },
    geoip: {
      value: observabilityPipelineConfigProcessorsEnrichmentTableGeoipToHclTerraform(struct!.geoip),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsEnrichmentTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._geoip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoip = this._geoip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsEnrichmentTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._target = undefined;
      this._file.internalValue = undefined;
      this._geoip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._target = value.target;
      this._file.internalValue = value.file;
      this._geoip.internalValue = value.geoip;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // file - computed: false, optional: true, required: false
  private _file = new ObservabilityPipelineConfigProcessorsEnrichmentTableFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: ObservabilityPipelineConfigProcessorsEnrichmentTableFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // geoip - computed: false, optional: true, required: false
  private _geoip = new ObservabilityPipelineConfigProcessorsEnrichmentTableGeoipOutputReference(this, "geoip");
  public get geoip() {
    return this._geoip;
  }
  public putGeoip(value: ObservabilityPipelineConfigProcessorsEnrichmentTableGeoip) {
    this._geoip.internalValue = value;
  }
  public resetGeoip() {
    this._geoip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipInput() {
    return this._geoip.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsEnrichmentTableList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsEnrichmentTable[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsEnrichmentTableOutputReference {
    return new ObservabilityPipelineConfigProcessorsEnrichmentTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsFilter {
  /**
  * The unique ID of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs should pass through the filter. Logs that match this query continue to downstream components; others are dropped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * The inputs for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
}

export function observabilityPipelineConfigProcessorsFilterToTerraform(struct?: ObservabilityPipelineConfigProcessorsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
  }
}


export function observabilityPipelineConfigProcessorsFilterToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }
}

export class ObservabilityPipelineConfigProcessorsFilterList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsFilter[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsFilterOutputReference {
    return new ObservabilityPipelineConfigProcessorsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue {
  /**
  * Name of the log field containing the numeric value to increment the metric by (used only for `increment_by_field`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: string;
  /**
  * Metric value strategy: `increment_by_one` or `increment_by_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValueToTerraform(struct?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValueToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._strategy = value.strategy;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics {
  /**
  * Optional fields used to group the metric series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Datadog filter query to match logs for metric generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Type of metric to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#metric_type ObservabilityPipeline#metric_type}
  */
  readonly metricType: string;
  /**
  * Name of the custom metric to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue;
}

export function observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsToTerraform(struct?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    include: cdktf.stringToTerraform(struct!.include),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    name: cdktf.stringToTerraform(struct!.name),
    value: observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValueToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._include = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._include = value.include;
      this._metricType = value.metricType;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // value - computed: false, optional: true, required: false
  private _value = new ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsOutputReference {
    return new ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the `input` for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#metrics ObservabilityPipeline#metrics}
  */
  readonly metrics?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsGenerateDatadogMetricsToTerraform(struct?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    metrics: cdktf.listMapper(observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsToTerraform, true)(struct!.metrics),
  }
}


export function observabilityPipelineConfigProcessorsGenerateDatadogMetricsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metrics: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._metrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._metrics.internalValue = value.metrics;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsOutputReference {
    return new ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsOcsfMapperMapping {
  /**
  * Search query for selecting which logs the mapping applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Predefined library mapping for log transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#library_mapping ObservabilityPipeline#library_mapping}
  */
  readonly libraryMapping: string;
}

export function observabilityPipelineConfigProcessorsOcsfMapperMappingToTerraform(struct?: ObservabilityPipelineConfigProcessorsOcsfMapperMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktf.stringToTerraform(struct!.include),
    library_mapping: cdktf.stringToTerraform(struct!.libraryMapping),
  }
}


export function observabilityPipelineConfigProcessorsOcsfMapperMappingToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsOcsfMapperMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    library_mapping: {
      value: cdktf.stringToHclTerraform(struct!.libraryMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsOcsfMapperMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsOcsfMapperMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._libraryMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryMapping = this._libraryMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsOcsfMapperMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
      this._libraryMapping = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
      this._libraryMapping = value.libraryMapping;
    }
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // library_mapping - computed: false, optional: false, required: true
  private _libraryMapping?: string; 
  public get libraryMapping() {
    return this.getStringAttribute('library_mapping');
  }
  public set libraryMapping(value: string) {
    this._libraryMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryMappingInput() {
    return this._libraryMapping;
  }
}

export class ObservabilityPipelineConfigProcessorsOcsfMapperMappingList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsOcsfMapperMapping[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsOcsfMapperMappingOutputReference {
    return new ObservabilityPipelineConfigProcessorsOcsfMapperMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsOcsfMapper {
  /**
  * The unique identifier for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Search query to select logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * List of component IDs whose output is used as input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#mapping ObservabilityPipeline#mapping}
  */
  readonly mapping?: ObservabilityPipelineConfigProcessorsOcsfMapperMapping[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsOcsfMapperToTerraform(struct?: ObservabilityPipelineConfigProcessorsOcsfMapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    mapping: cdktf.listMapper(observabilityPipelineConfigProcessorsOcsfMapperMappingToTerraform, true)(struct!.mapping),
  }
}


export function observabilityPipelineConfigProcessorsOcsfMapperToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsOcsfMapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mapping: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsOcsfMapperMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsOcsfMapperMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsOcsfMapperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsOcsfMapper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsOcsfMapper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._mapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._mapping.internalValue = value.mapping;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new ObservabilityPipelineConfigProcessorsOcsfMapperMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: ObservabilityPipelineConfigProcessorsOcsfMapperMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsOcsfMapperList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsOcsfMapper[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsOcsfMapperOutputReference {
    return new ObservabilityPipelineConfigProcessorsOcsfMapperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule {
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorsParseGrokRulesMatchRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorsParseGrokRulesMatchRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rule = value.rule;
    }
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRuleList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule {
  /**
  * The name of the helper Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the helper Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorsParseGrokRulesSupportRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorsParseGrokRulesSupportRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rule = value.rule;
    }
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRuleList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsParseGrokRules {
  /**
  * The name of the field in the log event to apply the Grok rules to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
  /**
  * match_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#match_rule ObservabilityPipeline#match_rule}
  */
  readonly matchRule?: ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule[] | cdktf.IResolvable;
  /**
  * support_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#support_rule ObservabilityPipeline#support_rule}
  */
  readonly supportRule?: ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsParseGrokRulesToTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrokRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    match_rule: cdktf.listMapper(observabilityPipelineConfigProcessorsParseGrokRulesMatchRuleToTerraform, true)(struct!.matchRule),
    support_rule: cdktf.listMapper(observabilityPipelineConfigProcessorsParseGrokRulesSupportRuleToTerraform, true)(struct!.supportRule),
  }
}


export function observabilityPipelineConfigProcessorsParseGrokRulesToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrokRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_rule: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsParseGrokRulesMatchRuleToHclTerraform, true)(struct!.matchRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRuleList",
    },
    support_rule: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsParseGrokRulesSupportRuleToHclTerraform, true)(struct!.supportRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsParseGrokRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsParseGrokRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._matchRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRule = this._matchRule?.internalValue;
    }
    if (this._supportRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportRule = this._supportRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsParseGrokRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._matchRule.internalValue = undefined;
      this._supportRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._matchRule.internalValue = value.matchRule;
      this._supportRule.internalValue = value.supportRule;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // match_rule - computed: false, optional: true, required: false
  private _matchRule = new ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRuleList(this, "match_rule", false);
  public get matchRule() {
    return this._matchRule;
  }
  public putMatchRule(value: ObservabilityPipelineConfigProcessorsParseGrokRulesMatchRule[] | cdktf.IResolvable) {
    this._matchRule.internalValue = value;
  }
  public resetMatchRule() {
    this._matchRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleInput() {
    return this._matchRule.internalValue;
  }

  // support_rule - computed: false, optional: true, required: false
  private _supportRule = new ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRuleList(this, "support_rule", false);
  public get supportRule() {
    return this._supportRule;
  }
  public putSupportRule(value: ObservabilityPipelineConfigProcessorsParseGrokRulesSupportRule[] | cdktf.IResolvable) {
    this._supportRule.internalValue = value;
  }
  public resetSupportRule() {
    this._supportRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportRuleInput() {
    return this._supportRule.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsParseGrokRulesList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsParseGrokRules[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsParseGrokRulesOutputReference {
    return new ObservabilityPipelineConfigProcessorsParseGrokRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsParseGrok {
  /**
  * If set to `true`, disables the default Grok rules provided by Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#disable_library_rules ObservabilityPipeline#disable_library_rules}
  */
  readonly disableLibraryRules?: boolean | cdktf.IResolvable;
  /**
  * A unique identifier for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rules ObservabilityPipeline#rules}
  */
  readonly rules?: ObservabilityPipelineConfigProcessorsParseGrokRules[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsParseGrokToTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_library_rules: cdktf.booleanToTerraform(struct!.disableLibraryRules),
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    rules: cdktf.listMapper(observabilityPipelineConfigProcessorsParseGrokRulesToTerraform, true)(struct!.rules),
  }
}


export function observabilityPipelineConfigProcessorsParseGrokToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsParseGrok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_library_rules: {
      value: cdktf.booleanToHclTerraform(struct!.disableLibraryRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsParseGrokRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsParseGrokRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsParseGrokOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsParseGrok | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLibraryRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLibraryRules = this._disableLibraryRules;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsParseGrok | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableLibraryRules = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableLibraryRules = value.disableLibraryRules;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._rules.internalValue = value.rules;
    }
  }

  // disable_library_rules - computed: false, optional: true, required: false
  private _disableLibraryRules?: boolean | cdktf.IResolvable; 
  public get disableLibraryRules() {
    return this.getBooleanAttribute('disable_library_rules');
  }
  public set disableLibraryRules(value: boolean | cdktf.IResolvable) {
    this._disableLibraryRules = value;
  }
  public resetDisableLibraryRules() {
    this._disableLibraryRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLibraryRulesInput() {
    return this._disableLibraryRules;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ObservabilityPipelineConfigProcessorsParseGrokRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ObservabilityPipelineConfigProcessorsParseGrokRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsParseGrokList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsParseGrok[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsParseGrokOutputReference {
    return new ObservabilityPipelineConfigProcessorsParseGrokOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsParseJson {
  /**
  * The field to parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
  /**
  * The unique ID of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * The inputs for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
}

export function observabilityPipelineConfigProcessorsParseJsonToTerraform(struct?: ObservabilityPipelineConfigProcessorsParseJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
  }
}


export function observabilityPipelineConfigProcessorsParseJsonToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsParseJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsParseJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsParseJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsParseJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }
}

export class ObservabilityPipelineConfigProcessorsParseJsonList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsParseJson[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsParseJsonOutputReference {
    return new ObservabilityPipelineConfigProcessorsParseJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsQuotaLimit {
  /**
  * Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}
  */
  readonly enforce: string;
  /**
  * The daily quota limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit: number;
}

export function observabilityPipelineConfigProcessorsQuotaLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.stringToTerraform(struct!.enforce),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorsQuotaLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.stringToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsQuotaLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsQuotaLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforce = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforce = value.enforce;
      this._limit = value.limit;
    }
  }

  // enforce - computed: false, optional: false, required: true
  private _enforce?: string; 
  public get enforce() {
    return this.getStringAttribute('enforce');
  }
  public set enforce(value: string) {
    this._enforce = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface ObservabilityPipelineConfigProcessorsQuotaOverridesField {
  /**
  * The field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigProcessorsQuotaOverridesFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaOverridesField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorsQuotaOverridesFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaOverridesField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsQuotaOverridesField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsQuotaOverridesField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsQuotaOverridesField[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference {
    return new ObservabilityPipelineConfigProcessorsQuotaOverridesFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsQuotaOverridesLimit {
  /**
  * Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}
  */
  readonly enforce: string;
  /**
  * The daily quota limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit: number;
}

export function observabilityPipelineConfigProcessorsQuotaOverridesLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaOverridesLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.stringToTerraform(struct!.enforce),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorsQuotaOverridesLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaOverridesLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.stringToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsQuotaOverridesLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsQuotaOverridesLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforce = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforce = value.enforce;
      this._limit = value.limit;
    }
  }

  // enforce - computed: false, optional: false, required: true
  private _enforce?: string; 
  public get enforce() {
    return this.getStringAttribute('enforce');
  }
  public set enforce(value: string) {
    this._enforce = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface ObservabilityPipelineConfigProcessorsQuotaOverrides {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorsQuotaOverridesField[] | cdktf.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit: ObservabilityPipelineConfigProcessorsQuotaOverridesLimit;
}

export function observabilityPipelineConfigProcessorsQuotaOverridesToTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(observabilityPipelineConfigProcessorsQuotaOverridesFieldToTerraform, true)(struct!.field),
    limit: observabilityPipelineConfigProcessorsQuotaOverridesLimitToTerraform(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorsQuotaOverridesToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsQuotaOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsQuotaOverridesFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList",
    },
    limit: {
      value: observabilityPipelineConfigProcessorsQuotaOverridesLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsQuotaOverridesLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsQuotaOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsQuotaOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field.internalValue = undefined;
      this._limit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field.internalValue = value.field;
      this._limit.internalValue = value.limit;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field = new ObservabilityPipelineConfigProcessorsQuotaOverridesFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ObservabilityPipelineConfigProcessorsQuotaOverridesField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // limit - computed: false, optional: false, required: true
  private _limit = new ObservabilityPipelineConfigProcessorsQuotaOverridesLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: ObservabilityPipelineConfigProcessorsQuotaOverridesLimit) {
    this._limit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsQuotaOverridesList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsQuotaOverrides[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference {
    return new ObservabilityPipelineConfigProcessorsQuotaOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsQuota {
  /**
  * Whether to drop events exceeding the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#drop_events ObservabilityPipeline#drop_events}
  */
  readonly dropEvents: boolean | cdktf.IResolvable;
  /**
  * The unique ID of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Whether to ignore when partition fields are missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ignore_when_missing_partitions ObservabilityPipeline#ignore_when_missing_partitions}
  */
  readonly ignoreWhenMissingPartitions?: boolean | cdktf.IResolvable;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * The inputs for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The name of the quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The action to take when the quota is exceeded: `drop`, `no_action`, or `overflow_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#overflow_action ObservabilityPipeline#overflow_action}
  */
  readonly overflowAction?: string;
  /**
  * List of partition fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#partition_fields ObservabilityPipeline#partition_fields}
  */
  readonly partitionFields?: string[];
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit: ObservabilityPipelineConfigProcessorsQuotaLimit;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#overrides ObservabilityPipeline#overrides}
  */
  readonly overrides?: ObservabilityPipelineConfigProcessorsQuotaOverrides[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsQuotaToTerraform(struct?: ObservabilityPipelineConfigProcessorsQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_events: cdktf.booleanToTerraform(struct!.dropEvents),
    id: cdktf.stringToTerraform(struct!.id),
    ignore_when_missing_partitions: cdktf.booleanToTerraform(struct!.ignoreWhenMissingPartitions),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    name: cdktf.stringToTerraform(struct!.name),
    overflow_action: cdktf.stringToTerraform(struct!.overflowAction),
    partition_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.partitionFields),
    limit: observabilityPipelineConfigProcessorsQuotaLimitToTerraform(struct!.limit),
    overrides: cdktf.listMapper(observabilityPipelineConfigProcessorsQuotaOverridesToTerraform, true)(struct!.overrides),
  }
}


export function observabilityPipelineConfigProcessorsQuotaToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_events: {
      value: cdktf.booleanToHclTerraform(struct!.dropEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_when_missing_partitions: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreWhenMissingPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overflow_action: {
      value: cdktf.stringToHclTerraform(struct!.overflowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.partitionFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: observabilityPipelineConfigProcessorsQuotaLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsQuotaLimit",
    },
    overrides: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsQuotaOverridesToHclTerraform, true)(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsQuotaOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropEvents = this._dropEvents;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ignoreWhenMissingPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreWhenMissingPartitions = this._ignoreWhenMissingPartitions;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overflowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowAction = this._overflowAction;
    }
    if (this._partitionFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionFields = this._partitionFields;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropEvents = undefined;
      this._id = undefined;
      this._ignoreWhenMissingPartitions = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._name = undefined;
      this._overflowAction = undefined;
      this._partitionFields = undefined;
      this._limit.internalValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropEvents = value.dropEvents;
      this._id = value.id;
      this._ignoreWhenMissingPartitions = value.ignoreWhenMissingPartitions;
      this._include = value.include;
      this._inputs = value.inputs;
      this._name = value.name;
      this._overflowAction = value.overflowAction;
      this._partitionFields = value.partitionFields;
      this._limit.internalValue = value.limit;
      this._overrides.internalValue = value.overrides;
    }
  }

  // drop_events - computed: false, optional: false, required: true
  private _dropEvents?: boolean | cdktf.IResolvable; 
  public get dropEvents() {
    return this.getBooleanAttribute('drop_events');
  }
  public set dropEvents(value: boolean | cdktf.IResolvable) {
    this._dropEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropEventsInput() {
    return this._dropEvents;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_when_missing_partitions - computed: false, optional: true, required: false
  private _ignoreWhenMissingPartitions?: boolean | cdktf.IResolvable; 
  public get ignoreWhenMissingPartitions() {
    return this.getBooleanAttribute('ignore_when_missing_partitions');
  }
  public set ignoreWhenMissingPartitions(value: boolean | cdktf.IResolvable) {
    this._ignoreWhenMissingPartitions = value;
  }
  public resetIgnoreWhenMissingPartitions() {
    this._ignoreWhenMissingPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWhenMissingPartitionsInput() {
    return this._ignoreWhenMissingPartitions;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
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

  // overflow_action - computed: false, optional: true, required: false
  private _overflowAction?: string; 
  public get overflowAction() {
    return this.getStringAttribute('overflow_action');
  }
  public set overflowAction(value: string) {
    this._overflowAction = value;
  }
  public resetOverflowAction() {
    this._overflowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowActionInput() {
    return this._overflowAction;
  }

  // partition_fields - computed: false, optional: true, required: false
  private _partitionFields?: string[]; 
  public get partitionFields() {
    return this.getListAttribute('partition_fields');
  }
  public set partitionFields(value: string[]) {
    this._partitionFields = value;
  }
  public resetPartitionFields() {
    this._partitionFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFieldsInput() {
    return this._partitionFields;
  }

  // limit - computed: false, optional: false, required: true
  private _limit = new ObservabilityPipelineConfigProcessorsQuotaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: ObservabilityPipelineConfigProcessorsQuotaLimit) {
    this._limit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new ObservabilityPipelineConfigProcessorsQuotaOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: ObservabilityPipelineConfigProcessorsQuotaOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsQuotaList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsQuota[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsQuotaOutputReference {
    return new ObservabilityPipelineConfigProcessorsQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsReduceMergeStrategies {
  /**
  * The field path in the log event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path: string;
  /**
  * The merge strategy to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigProcessorsReduceMergeStrategiesToTerraform(struct?: ObservabilityPipelineConfigProcessorsReduceMergeStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigProcessorsReduceMergeStrategiesToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsReduceMergeStrategies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsReduceMergeStrategiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsReduceMergeStrategies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsReduceMergeStrategies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._strategy = value.strategy;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

export class ObservabilityPipelineConfigProcessorsReduceMergeStrategiesList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsReduceMergeStrategies[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsReduceMergeStrategiesOutputReference {
    return new ObservabilityPipelineConfigProcessorsReduceMergeStrategiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsReduce {
  /**
  * A list of fields used to group log events for merging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy: string[];
  /**
  * The unique identifier for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the input for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * merge_strategies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#merge_strategies ObservabilityPipeline#merge_strategies}
  */
  readonly mergeStrategies?: ObservabilityPipelineConfigProcessorsReduceMergeStrategies[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsReduceToTerraform(struct?: ObservabilityPipelineConfigProcessorsReduce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    merge_strategies: cdktf.listMapper(observabilityPipelineConfigProcessorsReduceMergeStrategiesToTerraform, true)(struct!.mergeStrategies),
  }
}


export function observabilityPipelineConfigProcessorsReduceToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsReduce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    merge_strategies: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsReduceMergeStrategiesToHclTerraform, true)(struct!.mergeStrategies),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsReduceMergeStrategiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsReduceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsReduce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._mergeStrategies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeStrategies = this._mergeStrategies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsReduce | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._mergeStrategies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._mergeStrategies.internalValue = value.mergeStrategies;
    }
  }

  // group_by - computed: false, optional: false, required: true
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // merge_strategies - computed: false, optional: true, required: false
  private _mergeStrategies = new ObservabilityPipelineConfigProcessorsReduceMergeStrategiesList(this, "merge_strategies", false);
  public get mergeStrategies() {
    return this._mergeStrategies;
  }
  public putMergeStrategies(value: ObservabilityPipelineConfigProcessorsReduceMergeStrategies[] | cdktf.IResolvable) {
    this._mergeStrategies.internalValue = value;
  }
  public resetMergeStrategies() {
    this._mergeStrategies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeStrategiesInput() {
    return this._mergeStrategies.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsReduceList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsReduce[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsReduceOutputReference {
    return new ObservabilityPipelineConfigProcessorsReduceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsRemoveFields {
  /**
  * List of fields to remove from the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields: string[];
  /**
  * The unique ID of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * The inputs for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
}

export function observabilityPipelineConfigProcessorsRemoveFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorsRemoveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
  }
}


export function observabilityPipelineConfigProcessorsRemoveFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsRemoveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsRemoveFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsRemoveFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }
}

export class ObservabilityPipelineConfigProcessorsRemoveFieldsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsRemoveFields[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference {
    return new ObservabilityPipelineConfigProcessorsRemoveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsRenameFieldsField {
  /**
  * Destination field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}
  */
  readonly destination: string;
  /**
  * Whether to keep the original field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#preserve_source ObservabilityPipeline#preserve_source}
  */
  readonly preserveSource: boolean | cdktf.IResolvable;
  /**
  * Source field to rename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
}

export function observabilityPipelineConfigProcessorsRenameFieldsFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    preserve_source: cdktf.booleanToTerraform(struct!.preserveSource),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function observabilityPipelineConfigProcessorsRenameFieldsFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_source: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsRenameFieldsField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsRenameFieldsField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._preserveSource = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._preserveSource = value.preserveSource;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // preserve_source - computed: false, optional: false, required: true
  private _preserveSource?: boolean | cdktf.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktf.IResolvable) {
    this._preserveSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ObservabilityPipelineConfigProcessorsRenameFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsRenameFieldsField[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference {
    return new ObservabilityPipelineConfigProcessorsRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsRenameFields {
  /**
  * The unique ID of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * The inputs for the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorsRenameFieldsField[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsRenameFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorsRenameFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    field: cdktf.listMapper(observabilityPipelineConfigProcessorsRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorsRenameFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsRenameFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsRenameFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsRenameFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._field.internalValue = value.field;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // field - computed: false, optional: true, required: false
  private _field = new ObservabilityPipelineConfigProcessorsRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ObservabilityPipelineConfigProcessorsRenameFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsRenameFieldsList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsRenameFields[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference {
    return new ObservabilityPipelineConfigProcessorsRenameFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsSample {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The percentage of logs to sample.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#percentage ObservabilityPipeline#percentage}
  */
  readonly percentage?: number;
  /**
  * Number of events to sample (1 in N).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rate ObservabilityPipeline#rate}
  */
  readonly rate?: number;
}

export function observabilityPipelineConfigProcessorsSampleToTerraform(struct?: ObservabilityPipelineConfigProcessorsSample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    percentage: cdktf.numberToTerraform(struct!.percentage),
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function observabilityPipelineConfigProcessorsSampleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSample | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSampleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsSample | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSample | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._percentage = undefined;
      this._rate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._percentage = value.percentage;
      this._rate = value.rate;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}

export class ObservabilityPipelineConfigProcessorsSampleList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsSample[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsSampleOutputReference {
    return new ObservabilityPipelineConfigProcessorsSampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions {
  /**
  * A list of keywords to match near the sensitive pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#keywords ObservabilityPipeline#keywords}
  */
  readonly keywords?: string[];
  /**
  * Maximum number of tokens between a keyword and a sensitive value match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#proximity ObservabilityPipeline#proximity}
  */
  readonly proximity?: number;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptionsToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keywords),
    proximity: cdktf.numberToTerraform(struct!.proximity),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptionsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keywords: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    proximity: {
      value: cdktf.numberToHclTerraform(struct!.proximity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywords = this._keywords;
    }
    if (this._proximity !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keywords = undefined;
      this._proximity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keywords = value.keywords;
      this._proximity = value.proximity;
    }
  }

  // keywords - computed: false, optional: true, required: false
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // proximity - computed: false, optional: true, required: false
  private _proximity?: number; 
  public get proximity() {
    return this.getNumberAttribute('proximity');
  }
  public set proximity(value: number) {
    this._proximity = value;
  }
  public resetProximity() {
    this._proximity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash {
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHashToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHashToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact {
  /**
  * Number of characters to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#characters ObservabilityPipeline#characters}
  */
  readonly characters?: number;
  /**
  * Direction from which to keep characters: `first` or `last`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#direction ObservabilityPipeline#direction}
  */
  readonly direction?: string;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedactToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characters: cdktf.numberToTerraform(struct!.characters),
    direction: cdktf.stringToTerraform(struct!.direction),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedactToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    characters: {
      value: cdktf.numberToHclTerraform(struct!.characters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characters !== undefined) {
      hasAnyValues = true;
      internalValueResult.characters = this._characters;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._characters = undefined;
      this._direction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._characters = value.characters;
      this._direction = value.direction;
    }
  }

  // characters - computed: false, optional: true, required: false
  private _characters?: number; 
  public get characters() {
    return this.getNumberAttribute('characters');
  }
  public set characters(value: number) {
    this._characters = value;
  }
  public resetCharacters() {
    this._characters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersInput() {
    return this._characters;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact {
  /**
  * Replacement string for redacted values (e.g., `***`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#replace ObservabilityPipeline#replace}
  */
  readonly replace?: string;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedactToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace: cdktf.stringToTerraform(struct!.replace),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedactToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace: {
      value: cdktf.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replace = value.replace;
    }
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch {
  /**
  * hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#hash ObservabilityPipeline#hash}
  */
  readonly hash?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash;
  /**
  * partial_redact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#partial_redact ObservabilityPipeline#partial_redact}
  */
  readonly partialRedact?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact;
  /**
  * redact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#redact ObservabilityPipeline#redact}
  */
  readonly redact?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHashToTerraform(struct!.hash),
    partial_redact: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedactToTerraform(struct!.partialRedact),
    redact: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedactToTerraform(struct!.redact),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHashToHclTerraform(struct!.hash),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash",
    },
    partial_redact: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedactToHclTerraform(struct!.partialRedact),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact",
    },
    redact: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedactToHclTerraform(struct!.redact),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash?.internalValue;
    }
    if (this._partialRedact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialRedact = this._partialRedact?.internalValue;
    }
    if (this._redact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redact = this._redact?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash.internalValue = undefined;
      this._partialRedact.internalValue = undefined;
      this._redact.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash.internalValue = value.hash;
      this._partialRedact.internalValue = value.partialRedact;
      this._redact.internalValue = value.redact;
    }
  }

  // hash - computed: false, optional: true, required: true
  private _hash = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHashOutputReference(this, "hash");
  public get hash() {
    return this._hash;
  }
  public putHash(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchHash) {
    this._hash.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash.internalValue;
  }

  // partial_redact - computed: false, optional: true, required: false
  private _partialRedact = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedactOutputReference(this, "partial_redact");
  public get partialRedact() {
    return this._partialRedact;
  }
  public putPartialRedact(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchPartialRedact) {
    this._partialRedact.internalValue = value;
  }
  public resetPartialRedact() {
    this._partialRedact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialRedactInput() {
    return this._partialRedact.internalValue;
  }

  // redact - computed: false, optional: true, required: false
  private _redact = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedactOutputReference(this, "redact");
  public get redact() {
    return this._redact;
  }
  public putRedact(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchRedact) {
    this._redact.internalValue = value;
  }
  public resetRedact() {
    this._redact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact.internalValue;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom {
  /**
  * A regular expression used to detect sensitive values. Must be a valid regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: string;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustomToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustomToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary {
  /**
  * Identifier for a predefined pattern from the sensitive data scanner pattern library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to augment the pattern with recommended keywords (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#use_recommended_keywords ObservabilityPipeline#use_recommended_keywords}
  */
  readonly useRecommendedKeywords?: boolean | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibraryToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    use_recommended_keywords: cdktf.booleanToTerraform(struct!.useRecommendedKeywords),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibraryToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_recommended_keywords: {
      value: cdktf.booleanToHclTerraform(struct!.useRecommendedKeywords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibraryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._useRecommendedKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecommendedKeywords = this._useRecommendedKeywords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._useRecommendedKeywords = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._useRecommendedKeywords = value.useRecommendedKeywords;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // use_recommended_keywords - computed: false, optional: true, required: false
  private _useRecommendedKeywords?: boolean | cdktf.IResolvable; 
  public get useRecommendedKeywords() {
    return this.getBooleanAttribute('use_recommended_keywords');
  }
  public set useRecommendedKeywords(value: boolean | cdktf.IResolvable) {
    this._useRecommendedKeywords = value;
  }
  public resetUseRecommendedKeywords() {
    this._useRecommendedKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecommendedKeywordsInput() {
    return this._useRecommendedKeywords;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern {
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#custom ObservabilityPipeline#custom}
  */
  readonly custom?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#library ObservabilityPipeline#library}
  */
  readonly library?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustomToTerraform(struct!.custom),
    library: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibraryToTerraform(struct!.library),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom",
    },
    library: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibraryToHclTerraform(struct!.library),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom.internalValue = undefined;
      this._library.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom.internalValue = value.custom;
      this._library.internalValue = value.library;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibraryOutputReference(this, "library");
  public get library() {
    return this._library;
  }
  public putLibrary(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternLibrary) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude {
  /**
  * The fields to exclude from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields?: string[];
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExcludeToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExcludeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExcludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude {
  /**
  * The fields to include in scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields?: string[];
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeIncludeToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeIncludeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope {
  /**
  * Scan all fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#all ObservabilityPipeline#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#exclude ObservabilityPipeline#exclude}
  */
  readonly exclude?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    exclude: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExcludeToTerraform(struct!.exclude),
    include: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeIncludeToTerraform(struct!.include),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExcludeToHclTerraform(struct!.exclude),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude",
    },
    include: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExcludeOutputReference(this, "exclude");
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeExclude) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules {
  /**
  * A name identifying the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name?: string;
  /**
  * Tags assigned to this rule for filtering and classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tags ObservabilityPipeline#tags}
  */
  readonly tags?: string[];
  /**
  * keyword_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#keyword_options ObservabilityPipeline#keyword_options}
  */
  readonly keywordOptions?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions;
  /**
  * on_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#on_match ObservabilityPipeline#on_match}
  */
  readonly onMatch?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#pattern ObservabilityPipeline#pattern}
  */
  readonly pattern?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#scope ObservabilityPipeline#scope}
  */
  readonly scope?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    keyword_options: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptionsToTerraform(struct!.keywordOptions),
    on_match: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchToTerraform(struct!.onMatch),
    pattern: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternToTerraform(struct!.pattern),
    scope: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeToTerraform(struct!.scope),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerRulesToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keyword_options: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptionsToHclTerraform(struct!.keywordOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions",
    },
    on_match: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchToHclTerraform(struct!.onMatch),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch",
    },
    pattern: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternToHclTerraform(struct!.pattern),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern",
    },
    scope: {
      value: observabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._keywordOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordOptions = this._keywordOptions?.internalValue;
    }
    if (this._onMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMatch = this._onMatch?.internalValue;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._keywordOptions.internalValue = undefined;
      this._onMatch.internalValue = undefined;
      this._pattern.internalValue = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._keywordOptions.internalValue = value.keywordOptions;
      this._onMatch.internalValue = value.onMatch;
      this._pattern.internalValue = value.pattern;
      this._scope.internalValue = value.scope;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // keyword_options - computed: false, optional: true, required: false
  private _keywordOptions = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptionsOutputReference(this, "keyword_options");
  public get keywordOptions() {
    return this._keywordOptions;
  }
  public putKeywordOptions(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesKeywordOptions) {
    this._keywordOptions.internalValue = value;
  }
  public resetKeywordOptions() {
    this._keywordOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordOptionsInput() {
    return this._keywordOptions.internalValue;
  }

  // on_match - computed: false, optional: true, required: false
  private _onMatch = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatchOutputReference(this, "on_match");
  public get onMatch() {
    return this._onMatch;
  }
  public putOnMatch(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOnMatch) {
    this._onMatch.internalValue = value;
  }
  public resetOnMatch() {
    this._onMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMatchInput() {
    return this._onMatch.internalValue;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPatternOutputReference(this, "pattern");
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesPattern) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOutputReference {
    return new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsSensitiveDataScanner {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rules ObservabilityPipeline#rules}
  */
  readonly rules?: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsSensitiveDataScannerToTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScanner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    rules: cdktf.listMapper(observabilityPipelineConfigProcessorsSensitiveDataScannerRulesToTerraform, true)(struct!.rules),
  }
}


export function observabilityPipelineConfigProcessorsSensitiveDataScannerToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsSensitiveDataScanner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rules: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsSensitiveDataScannerRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsSensitiveDataScanner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsSensitiveDataScanner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._rules.internalValue = value.rules;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ObservabilityPipelineConfigProcessorsSensitiveDataScannerRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorsSensitiveDataScannerList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsSensitiveDataScanner[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsSensitiveDataScannerOutputReference {
    return new ObservabilityPipelineConfigProcessorsSensitiveDataScannerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorsThrottle {
  /**
  * Optional list of fields used to group events before applying throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The unique identifier for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the input for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * The number of events to allow before throttling is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#threshold ObservabilityPipeline#threshold}
  */
  readonly threshold: number;
  /**
  * The time window in seconds over which the threshold applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#window ObservabilityPipeline#window}
  */
  readonly window: number;
}

export function observabilityPipelineConfigProcessorsThrottleToTerraform(struct?: ObservabilityPipelineConfigProcessorsThrottle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    id: cdktf.stringToTerraform(struct!.id),
    include: cdktf.stringToTerraform(struct!.include),
    inputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputs),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    window: cdktf.numberToTerraform(struct!.window),
  }
}


export function observabilityPipelineConfigProcessorsThrottleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorsThrottle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsThrottleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorsThrottle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorsThrottle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._threshold = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._threshold = value.threshold;
      this._window = value.window;
    }
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // window - computed: false, optional: false, required: true
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}

export class ObservabilityPipelineConfigProcessorsThrottleList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorsThrottle[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorsThrottleOutputReference {
    return new ObservabilityPipelineConfigProcessorsThrottleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessors {
  /**
  * add_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#add_env_vars ObservabilityPipeline#add_env_vars}
  */
  readonly addEnvVars?: ObservabilityPipelineConfigProcessorsAddEnvVars[] | cdktf.IResolvable;
  /**
  * add_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#add_fields ObservabilityPipeline#add_fields}
  */
  readonly addFields?: ObservabilityPipelineConfigProcessorsAddFields[] | cdktf.IResolvable;
  /**
  * dedupe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#dedupe ObservabilityPipeline#dedupe}
  */
  readonly dedupe?: ObservabilityPipelineConfigProcessorsDedupe[] | cdktf.IResolvable;
  /**
  * enrichment_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#enrichment_table ObservabilityPipeline#enrichment_table}
  */
  readonly enrichmentTable?: ObservabilityPipelineConfigProcessorsEnrichmentTable[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#filter ObservabilityPipeline#filter}
  */
  readonly filter?: ObservabilityPipelineConfigProcessorsFilter[] | cdktf.IResolvable;
  /**
  * generate_datadog_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#generate_datadog_metrics ObservabilityPipeline#generate_datadog_metrics}
  */
  readonly generateDatadogMetrics?: ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics[] | cdktf.IResolvable;
  /**
  * ocsf_mapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ocsf_mapper ObservabilityPipeline#ocsf_mapper}
  */
  readonly ocsfMapper?: ObservabilityPipelineConfigProcessorsOcsfMapper[] | cdktf.IResolvable;
  /**
  * parse_grok block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#parse_grok ObservabilityPipeline#parse_grok}
  */
  readonly parseGrok?: ObservabilityPipelineConfigProcessorsParseGrok[] | cdktf.IResolvable;
  /**
  * parse_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#parse_json ObservabilityPipeline#parse_json}
  */
  readonly parseJson?: ObservabilityPipelineConfigProcessorsParseJson[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#quota ObservabilityPipeline#quota}
  */
  readonly quota?: ObservabilityPipelineConfigProcessorsQuota[] | cdktf.IResolvable;
  /**
  * reduce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#reduce ObservabilityPipeline#reduce}
  */
  readonly reduce?: ObservabilityPipelineConfigProcessorsReduce[] | cdktf.IResolvable;
  /**
  * remove_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#remove_fields ObservabilityPipeline#remove_fields}
  */
  readonly removeFields?: ObservabilityPipelineConfigProcessorsRemoveFields[] | cdktf.IResolvable;
  /**
  * rename_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rename_fields ObservabilityPipeline#rename_fields}
  */
  readonly renameFields?: ObservabilityPipelineConfigProcessorsRenameFields[] | cdktf.IResolvable;
  /**
  * sample block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sample ObservabilityPipeline#sample}
  */
  readonly sample?: ObservabilityPipelineConfigProcessorsSample[] | cdktf.IResolvable;
  /**
  * sensitive_data_scanner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sensitive_data_scanner ObservabilityPipeline#sensitive_data_scanner}
  */
  readonly sensitiveDataScanner?: ObservabilityPipelineConfigProcessorsSensitiveDataScanner[] | cdktf.IResolvable;
  /**
  * throttle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#throttle ObservabilityPipeline#throttle}
  */
  readonly throttle?: ObservabilityPipelineConfigProcessorsThrottle[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigProcessorsToTerraform(struct?: ObservabilityPipelineConfigProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_env_vars: cdktf.listMapper(observabilityPipelineConfigProcessorsAddEnvVarsToTerraform, true)(struct!.addEnvVars),
    add_fields: cdktf.listMapper(observabilityPipelineConfigProcessorsAddFieldsToTerraform, true)(struct!.addFields),
    dedupe: cdktf.listMapper(observabilityPipelineConfigProcessorsDedupeToTerraform, true)(struct!.dedupe),
    enrichment_table: cdktf.listMapper(observabilityPipelineConfigProcessorsEnrichmentTableToTerraform, true)(struct!.enrichmentTable),
    filter: cdktf.listMapper(observabilityPipelineConfigProcessorsFilterToTerraform, true)(struct!.filter),
    generate_datadog_metrics: cdktf.listMapper(observabilityPipelineConfigProcessorsGenerateDatadogMetricsToTerraform, true)(struct!.generateDatadogMetrics),
    ocsf_mapper: cdktf.listMapper(observabilityPipelineConfigProcessorsOcsfMapperToTerraform, true)(struct!.ocsfMapper),
    parse_grok: cdktf.listMapper(observabilityPipelineConfigProcessorsParseGrokToTerraform, true)(struct!.parseGrok),
    parse_json: cdktf.listMapper(observabilityPipelineConfigProcessorsParseJsonToTerraform, true)(struct!.parseJson),
    quota: cdktf.listMapper(observabilityPipelineConfigProcessorsQuotaToTerraform, true)(struct!.quota),
    reduce: cdktf.listMapper(observabilityPipelineConfigProcessorsReduceToTerraform, true)(struct!.reduce),
    remove_fields: cdktf.listMapper(observabilityPipelineConfigProcessorsRemoveFieldsToTerraform, true)(struct!.removeFields),
    rename_fields: cdktf.listMapper(observabilityPipelineConfigProcessorsRenameFieldsToTerraform, true)(struct!.renameFields),
    sample: cdktf.listMapper(observabilityPipelineConfigProcessorsSampleToTerraform, true)(struct!.sample),
    sensitive_data_scanner: cdktf.listMapper(observabilityPipelineConfigProcessorsSensitiveDataScannerToTerraform, true)(struct!.sensitiveDataScanner),
    throttle: cdktf.listMapper(observabilityPipelineConfigProcessorsThrottleToTerraform, true)(struct!.throttle),
  }
}


export function observabilityPipelineConfigProcessorsToHclTerraform(struct?: ObservabilityPipelineConfigProcessors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_env_vars: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsAddEnvVarsToHclTerraform, true)(struct!.addEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsAddEnvVarsList",
    },
    add_fields: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsAddFieldsToHclTerraform, true)(struct!.addFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsAddFieldsList",
    },
    dedupe: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsDedupeToHclTerraform, true)(struct!.dedupe),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsDedupeList",
    },
    enrichment_table: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsEnrichmentTableToHclTerraform, true)(struct!.enrichmentTable),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsEnrichmentTableList",
    },
    filter: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsFilterList",
    },
    generate_datadog_metrics: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsGenerateDatadogMetricsToHclTerraform, true)(struct!.generateDatadogMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsList",
    },
    ocsf_mapper: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsOcsfMapperToHclTerraform, true)(struct!.ocsfMapper),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsOcsfMapperList",
    },
    parse_grok: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsParseGrokToHclTerraform, true)(struct!.parseGrok),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsParseGrokList",
    },
    parse_json: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsParseJsonToHclTerraform, true)(struct!.parseJson),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsParseJsonList",
    },
    quota: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsQuotaToHclTerraform, true)(struct!.quota),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsQuotaList",
    },
    reduce: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsReduceToHclTerraform, true)(struct!.reduce),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsReduceList",
    },
    remove_fields: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsRemoveFieldsToHclTerraform, true)(struct!.removeFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsRemoveFieldsList",
    },
    rename_fields: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsRenameFieldsToHclTerraform, true)(struct!.renameFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsRenameFieldsList",
    },
    sample: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsSampleToHclTerraform, true)(struct!.sample),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsSampleList",
    },
    sensitive_data_scanner: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsSensitiveDataScannerToHclTerraform, true)(struct!.sensitiveDataScanner),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsSensitiveDataScannerList",
    },
    throttle: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigProcessorsThrottleToHclTerraform, true)(struct!.throttle),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorsThrottleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigProcessors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addEnvVars = this._addEnvVars?.internalValue;
    }
    if (this._addFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addFields = this._addFields?.internalValue;
    }
    if (this._dedupe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupe = this._dedupe?.internalValue;
    }
    if (this._enrichmentTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichmentTable = this._enrichmentTable?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._generateDatadogMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateDatadogMetrics = this._generateDatadogMetrics?.internalValue;
    }
    if (this._ocsfMapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocsfMapper = this._ocsfMapper?.internalValue;
    }
    if (this._parseGrok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseGrok = this._parseGrok?.internalValue;
    }
    if (this._parseJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseJson = this._parseJson?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    if (this._reduce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reduce = this._reduce?.internalValue;
    }
    if (this._removeFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields?.internalValue;
    }
    if (this._renameFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameFields = this._renameFields?.internalValue;
    }
    if (this._sample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample?.internalValue;
    }
    if (this._sensitiveDataScanner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataScanner = this._sensitiveDataScanner?.internalValue;
    }
    if (this._throttle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttle = this._throttle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addEnvVars.internalValue = undefined;
      this._addFields.internalValue = undefined;
      this._dedupe.internalValue = undefined;
      this._enrichmentTable.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._generateDatadogMetrics.internalValue = undefined;
      this._ocsfMapper.internalValue = undefined;
      this._parseGrok.internalValue = undefined;
      this._parseJson.internalValue = undefined;
      this._quota.internalValue = undefined;
      this._reduce.internalValue = undefined;
      this._removeFields.internalValue = undefined;
      this._renameFields.internalValue = undefined;
      this._sample.internalValue = undefined;
      this._sensitiveDataScanner.internalValue = undefined;
      this._throttle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addEnvVars.internalValue = value.addEnvVars;
      this._addFields.internalValue = value.addFields;
      this._dedupe.internalValue = value.dedupe;
      this._enrichmentTable.internalValue = value.enrichmentTable;
      this._filter.internalValue = value.filter;
      this._generateDatadogMetrics.internalValue = value.generateDatadogMetrics;
      this._ocsfMapper.internalValue = value.ocsfMapper;
      this._parseGrok.internalValue = value.parseGrok;
      this._parseJson.internalValue = value.parseJson;
      this._quota.internalValue = value.quota;
      this._reduce.internalValue = value.reduce;
      this._removeFields.internalValue = value.removeFields;
      this._renameFields.internalValue = value.renameFields;
      this._sample.internalValue = value.sample;
      this._sensitiveDataScanner.internalValue = value.sensitiveDataScanner;
      this._throttle.internalValue = value.throttle;
    }
  }

  // add_env_vars - computed: false, optional: true, required: false
  private _addEnvVars = new ObservabilityPipelineConfigProcessorsAddEnvVarsList(this, "add_env_vars", false);
  public get addEnvVars() {
    return this._addEnvVars;
  }
  public putAddEnvVars(value: ObservabilityPipelineConfigProcessorsAddEnvVars[] | cdktf.IResolvable) {
    this._addEnvVars.internalValue = value;
  }
  public resetAddEnvVars() {
    this._addEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addEnvVarsInput() {
    return this._addEnvVars.internalValue;
  }

  // add_fields - computed: false, optional: true, required: false
  private _addFields = new ObservabilityPipelineConfigProcessorsAddFieldsList(this, "add_fields", false);
  public get addFields() {
    return this._addFields;
  }
  public putAddFields(value: ObservabilityPipelineConfigProcessorsAddFields[] | cdktf.IResolvable) {
    this._addFields.internalValue = value;
  }
  public resetAddFields() {
    this._addFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addFieldsInput() {
    return this._addFields.internalValue;
  }

  // dedupe - computed: false, optional: true, required: false
  private _dedupe = new ObservabilityPipelineConfigProcessorsDedupeList(this, "dedupe", false);
  public get dedupe() {
    return this._dedupe;
  }
  public putDedupe(value: ObservabilityPipelineConfigProcessorsDedupe[] | cdktf.IResolvable) {
    this._dedupe.internalValue = value;
  }
  public resetDedupe() {
    this._dedupe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeInput() {
    return this._dedupe.internalValue;
  }

  // enrichment_table - computed: false, optional: true, required: false
  private _enrichmentTable = new ObservabilityPipelineConfigProcessorsEnrichmentTableList(this, "enrichment_table", false);
  public get enrichmentTable() {
    return this._enrichmentTable;
  }
  public putEnrichmentTable(value: ObservabilityPipelineConfigProcessorsEnrichmentTable[] | cdktf.IResolvable) {
    this._enrichmentTable.internalValue = value;
  }
  public resetEnrichmentTable() {
    this._enrichmentTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentTableInput() {
    return this._enrichmentTable.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ObservabilityPipelineConfigProcessorsFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ObservabilityPipelineConfigProcessorsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // generate_datadog_metrics - computed: false, optional: true, required: false
  private _generateDatadogMetrics = new ObservabilityPipelineConfigProcessorsGenerateDatadogMetricsList(this, "generate_datadog_metrics", false);
  public get generateDatadogMetrics() {
    return this._generateDatadogMetrics;
  }
  public putGenerateDatadogMetrics(value: ObservabilityPipelineConfigProcessorsGenerateDatadogMetrics[] | cdktf.IResolvable) {
    this._generateDatadogMetrics.internalValue = value;
  }
  public resetGenerateDatadogMetrics() {
    this._generateDatadogMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateDatadogMetricsInput() {
    return this._generateDatadogMetrics.internalValue;
  }

  // ocsf_mapper - computed: false, optional: true, required: false
  private _ocsfMapper = new ObservabilityPipelineConfigProcessorsOcsfMapperList(this, "ocsf_mapper", false);
  public get ocsfMapper() {
    return this._ocsfMapper;
  }
  public putOcsfMapper(value: ObservabilityPipelineConfigProcessorsOcsfMapper[] | cdktf.IResolvable) {
    this._ocsfMapper.internalValue = value;
  }
  public resetOcsfMapper() {
    this._ocsfMapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocsfMapperInput() {
    return this._ocsfMapper.internalValue;
  }

  // parse_grok - computed: false, optional: true, required: false
  private _parseGrok = new ObservabilityPipelineConfigProcessorsParseGrokList(this, "parse_grok", false);
  public get parseGrok() {
    return this._parseGrok;
  }
  public putParseGrok(value: ObservabilityPipelineConfigProcessorsParseGrok[] | cdktf.IResolvable) {
    this._parseGrok.internalValue = value;
  }
  public resetParseGrok() {
    this._parseGrok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseGrokInput() {
    return this._parseGrok.internalValue;
  }

  // parse_json - computed: false, optional: true, required: false
  private _parseJson = new ObservabilityPipelineConfigProcessorsParseJsonList(this, "parse_json", false);
  public get parseJson() {
    return this._parseJson;
  }
  public putParseJson(value: ObservabilityPipelineConfigProcessorsParseJson[] | cdktf.IResolvable) {
    this._parseJson.internalValue = value;
  }
  public resetParseJson() {
    this._parseJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseJsonInput() {
    return this._parseJson.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new ObservabilityPipelineConfigProcessorsQuotaList(this, "quota", false);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: ObservabilityPipelineConfigProcessorsQuota[] | cdktf.IResolvable) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // reduce - computed: false, optional: true, required: false
  private _reduce = new ObservabilityPipelineConfigProcessorsReduceList(this, "reduce", false);
  public get reduce() {
    return this._reduce;
  }
  public putReduce(value: ObservabilityPipelineConfigProcessorsReduce[] | cdktf.IResolvable) {
    this._reduce.internalValue = value;
  }
  public resetReduce() {
    this._reduce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reduceInput() {
    return this._reduce.internalValue;
  }

  // remove_fields - computed: false, optional: true, required: false
  private _removeFields = new ObservabilityPipelineConfigProcessorsRemoveFieldsList(this, "remove_fields", false);
  public get removeFields() {
    return this._removeFields;
  }
  public putRemoveFields(value: ObservabilityPipelineConfigProcessorsRemoveFields[] | cdktf.IResolvable) {
    this._removeFields.internalValue = value;
  }
  public resetRemoveFields() {
    this._removeFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields.internalValue;
  }

  // rename_fields - computed: false, optional: true, required: false
  private _renameFields = new ObservabilityPipelineConfigProcessorsRenameFieldsList(this, "rename_fields", false);
  public get renameFields() {
    return this._renameFields;
  }
  public putRenameFields(value: ObservabilityPipelineConfigProcessorsRenameFields[] | cdktf.IResolvable) {
    this._renameFields.internalValue = value;
  }
  public resetRenameFields() {
    this._renameFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameFieldsInput() {
    return this._renameFields.internalValue;
  }

  // sample - computed: false, optional: true, required: false
  private _sample = new ObservabilityPipelineConfigProcessorsSampleList(this, "sample", false);
  public get sample() {
    return this._sample;
  }
  public putSample(value: ObservabilityPipelineConfigProcessorsSample[] | cdktf.IResolvable) {
    this._sample.internalValue = value;
  }
  public resetSample() {
    this._sample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample.internalValue;
  }

  // sensitive_data_scanner - computed: false, optional: true, required: false
  private _sensitiveDataScanner = new ObservabilityPipelineConfigProcessorsSensitiveDataScannerList(this, "sensitive_data_scanner", false);
  public get sensitiveDataScanner() {
    return this._sensitiveDataScanner;
  }
  public putSensitiveDataScanner(value: ObservabilityPipelineConfigProcessorsSensitiveDataScanner[] | cdktf.IResolvable) {
    this._sensitiveDataScanner.internalValue = value;
  }
  public resetSensitiveDataScanner() {
    this._sensitiveDataScanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataScannerInput() {
    return this._sensitiveDataScanner.internalValue;
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle = new ObservabilityPipelineConfigProcessorsThrottleList(this, "throttle", false);
  public get throttle() {
    return this._throttle;
  }
  public putThrottle(value: ObservabilityPipelineConfigProcessorsThrottle[] | cdktf.IResolvable) {
    this._throttle.internalValue = value;
  }
  public resetThrottle() {
    this._throttle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle.internalValue;
  }
}
export interface ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigSourcesAmazonDataFirehoseAuthToTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role: cdktf.stringToTerraform(struct!.assumeRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function observabilityPipelineConfigSourcesAmazonDataFirehoseAuthToHclTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assume_role: {
      value: cdktf.stringToHclTerraform(struct!.assumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRole = undefined;
      this._externalId = undefined;
      this._sessionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRole = value.assumeRole;
      this._externalId = value.externalId;
      this._sessionName = value.sessionName;
    }
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: string; 
  public get assumeRole() {
    return this.getStringAttribute('assume_role');
  }
  public set assumeRole(value: string) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }
}
export interface ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesAmazonDataFirehoseTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesAmazonDataFirehoseTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesAmazonDataFirehoseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesAmazonDataFirehose {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls;
}

export function observabilityPipelineConfigSourcesAmazonDataFirehoseToTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonDataFirehose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    auth: observabilityPipelineConfigSourcesAmazonDataFirehoseAuthToTerraform(struct!.auth),
    tls: observabilityPipelineConfigSourcesAmazonDataFirehoseTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesAmazonDataFirehoseToHclTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonDataFirehose | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: observabilityPipelineConfigSourcesAmazonDataFirehoseAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth",
    },
    tls: {
      value: observabilityPipelineConfigSourcesAmazonDataFirehoseTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesAmazonDataFirehoseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesAmazonDataFirehose | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesAmazonDataFirehose | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._auth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._auth.internalValue = value.auth;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigSourcesAmazonDataFirehoseAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesAmazonDataFirehoseTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesAmazonDataFirehoseTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesAmazonDataFirehoseList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesAmazonDataFirehose[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesAmazonDataFirehoseOutputReference {
    return new ObservabilityPipelineConfigSourcesAmazonDataFirehoseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesAmazonS3Auth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigSourcesAmazonS3AuthToTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonS3Auth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role: cdktf.stringToTerraform(struct!.assumeRole),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function observabilityPipelineConfigSourcesAmazonS3AuthToHclTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonS3Auth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assume_role: {
      value: cdktf.stringToHclTerraform(struct!.assumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesAmazonS3AuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesAmazonS3Auth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesAmazonS3Auth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRole = undefined;
      this._externalId = undefined;
      this._sessionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRole = value.assumeRole;
      this._externalId = value.externalId;
      this._sessionName = value.sessionName;
    }
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: string; 
  public get assumeRole() {
    return this.getStringAttribute('assume_role');
  }
  public set assumeRole(value: string) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }
}
export interface ObservabilityPipelineConfigSourcesAmazonS3Tls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesAmazonS3TlsToTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonS3Tls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesAmazonS3TlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonS3Tls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesAmazonS3TlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesAmazonS3Tls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesAmazonS3Tls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesAmazonS3 {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * AWS region where the S3 bucket resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourcesAmazonS3Auth;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesAmazonS3Tls;
}

export function observabilityPipelineConfigSourcesAmazonS3ToTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    region: cdktf.stringToTerraform(struct!.region),
    auth: observabilityPipelineConfigSourcesAmazonS3AuthToTerraform(struct!.auth),
    tls: observabilityPipelineConfigSourcesAmazonS3TlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesAmazonS3ToHclTerraform(struct?: ObservabilityPipelineConfigSourcesAmazonS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: observabilityPipelineConfigSourcesAmazonS3AuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesAmazonS3Auth",
    },
    tls: {
      value: observabilityPipelineConfigSourcesAmazonS3TlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesAmazonS3Tls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesAmazonS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesAmazonS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesAmazonS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._region = undefined;
      this._auth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._region = value.region;
      this._auth.internalValue = value.auth;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigSourcesAmazonS3AuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigSourcesAmazonS3Auth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesAmazonS3TlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesAmazonS3Tls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesAmazonS3List extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesAmazonS3[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesAmazonS3OutputReference {
    return new ObservabilityPipelineConfigSourcesAmazonS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesDatadogAgentTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesDatadogAgentTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesDatadogAgentTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesDatadogAgentTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesDatadogAgentTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesDatadogAgentTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesDatadogAgentTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesDatadogAgent {
  /**
  * The unique ID of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesDatadogAgentTls;
}

export function observabilityPipelineConfigSourcesDatadogAgentToTerraform(struct?: ObservabilityPipelineConfigSourcesDatadogAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tls: observabilityPipelineConfigSourcesDatadogAgentTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesDatadogAgentToHclTerraform(struct?: ObservabilityPipelineConfigSourcesDatadogAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesDatadogAgentTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesDatadogAgentTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesDatadogAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesDatadogAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesDatadogAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesDatadogAgentTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesDatadogAgentTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesDatadogAgentList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesDatadogAgent[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesDatadogAgentOutputReference {
    return new ObservabilityPipelineConfigSourcesDatadogAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesFluentBitTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesFluentBitTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesFluentBitTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesFluentBitTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesFluentBitTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesFluentBitTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesFluentBitTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesFluentBitTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesFluentBit {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesFluentBitTls;
}

export function observabilityPipelineConfigSourcesFluentBitToTerraform(struct?: ObservabilityPipelineConfigSourcesFluentBit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tls: observabilityPipelineConfigSourcesFluentBitTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesFluentBitToHclTerraform(struct?: ObservabilityPipelineConfigSourcesFluentBit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesFluentBitTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesFluentBitTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesFluentBitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesFluentBit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesFluentBit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesFluentBitTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesFluentBitTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesFluentBitList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesFluentBit[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesFluentBitOutputReference {
    return new ObservabilityPipelineConfigSourcesFluentBitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesFluentdTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesFluentdTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesFluentdTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesFluentdTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesFluentdTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesFluentdTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesFluentdTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesFluentdTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesFluentd {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesFluentdTls;
}

export function observabilityPipelineConfigSourcesFluentdToTerraform(struct?: ObservabilityPipelineConfigSourcesFluentd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tls: observabilityPipelineConfigSourcesFluentdTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesFluentdToHclTerraform(struct?: ObservabilityPipelineConfigSourcesFluentd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesFluentdTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesFluentdTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesFluentdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesFluentd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesFluentd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesFluentdTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesFluentdTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesFluentdList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesFluentd[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesFluentdOutputReference {
    return new ObservabilityPipelineConfigSourcesFluentdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesGooglePubsubAuth {
  /**
  * Path to the GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile: string;
}

export function observabilityPipelineConfigSourcesGooglePubsubAuthToTerraform(struct?: ObservabilityPipelineConfigSourcesGooglePubsubAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigSourcesGooglePubsubAuthToHclTerraform(struct?: ObservabilityPipelineConfigSourcesGooglePubsubAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesGooglePubsubAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesGooglePubsubAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesGooglePubsubAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsFile = value.credentialsFile;
    }
  }

  // credentials_file - computed: false, optional: false, required: true
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }
}
export interface ObservabilityPipelineConfigSourcesGooglePubsubTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesGooglePubsubTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesGooglePubsubTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesGooglePubsubTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesGooglePubsubTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesGooglePubsubTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesGooglePubsubTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesGooglePubsubTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesGooglePubsub {
  /**
  * The decoding format used to interpret incoming logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The GCP project ID that owns the Pub/Sub subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#project ObservabilityPipeline#project}
  */
  readonly project: string;
  /**
  * The Pub/Sub subscription name from which messages are consumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#subscription ObservabilityPipeline#subscription}
  */
  readonly subscription: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth: ObservabilityPipelineConfigSourcesGooglePubsubAuth;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesGooglePubsubTls;
}

export function observabilityPipelineConfigSourcesGooglePubsubToTerraform(struct?: ObservabilityPipelineConfigSourcesGooglePubsub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decoding: cdktf.stringToTerraform(struct!.decoding),
    id: cdktf.stringToTerraform(struct!.id),
    project: cdktf.stringToTerraform(struct!.project),
    subscription: cdktf.stringToTerraform(struct!.subscription),
    auth: observabilityPipelineConfigSourcesGooglePubsubAuthToTerraform(struct!.auth),
    tls: observabilityPipelineConfigSourcesGooglePubsubTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesGooglePubsubToHclTerraform(struct?: ObservabilityPipelineConfigSourcesGooglePubsub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decoding: {
      value: cdktf.stringToHclTerraform(struct!.decoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription: {
      value: cdktf.stringToHclTerraform(struct!.subscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: observabilityPipelineConfigSourcesGooglePubsubAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesGooglePubsubAuth",
    },
    tls: {
      value: observabilityPipelineConfigSourcesGooglePubsubTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesGooglePubsubTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesGooglePubsubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesGooglePubsub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoding = this._decoding;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._subscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscription = this._subscription;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesGooglePubsub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decoding = undefined;
      this._id = undefined;
      this._project = undefined;
      this._subscription = undefined;
      this._auth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decoding = value.decoding;
      this._id = value.id;
      this._project = value.project;
      this._subscription = value.subscription;
      this._auth.internalValue = value.auth;
      this._tls.internalValue = value.tls;
    }
  }

  // decoding - computed: false, optional: false, required: true
  private _decoding?: string; 
  public get decoding() {
    return this.getStringAttribute('decoding');
  }
  public set decoding(value: string) {
    this._decoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingInput() {
    return this._decoding;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // subscription - computed: false, optional: false, required: true
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }

  // auth - computed: false, optional: false, required: true
  private _auth = new ObservabilityPipelineConfigSourcesGooglePubsubAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigSourcesGooglePubsubAuth) {
    this._auth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesGooglePubsubTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesGooglePubsubTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesGooglePubsubList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesGooglePubsub[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesGooglePubsubOutputReference {
    return new ObservabilityPipelineConfigSourcesGooglePubsubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesHttpClientTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesHttpClientTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesHttpClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesHttpClientTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesHttpClientTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesHttpClientTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesHttpClientTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesHttpClientTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesHttpClient {
  /**
  * Optional authentication strategy for HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy?: string;
  /**
  * The decoding format used to interpret incoming logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The interval (in seconds) between HTTP scrape requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#scrape_interval_secs ObservabilityPipeline#scrape_interval_secs}
  */
  readonly scrapeIntervalSecs?: number;
  /**
  * The timeout (in seconds) for each scrape request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#scrape_timeout_secs ObservabilityPipeline#scrape_timeout_secs}
  */
  readonly scrapeTimeoutSecs?: number;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesHttpClientTls;
}

export function observabilityPipelineConfigSourcesHttpClientToTerraform(struct?: ObservabilityPipelineConfigSourcesHttpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_strategy: cdktf.stringToTerraform(struct!.authStrategy),
    decoding: cdktf.stringToTerraform(struct!.decoding),
    id: cdktf.stringToTerraform(struct!.id),
    scrape_interval_secs: cdktf.numberToTerraform(struct!.scrapeIntervalSecs),
    scrape_timeout_secs: cdktf.numberToTerraform(struct!.scrapeTimeoutSecs),
    tls: observabilityPipelineConfigSourcesHttpClientTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesHttpClientToHclTerraform(struct?: ObservabilityPipelineConfigSourcesHttpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_strategy: {
      value: cdktf.stringToHclTerraform(struct!.authStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding: {
      value: cdktf.stringToHclTerraform(struct!.decoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_interval_secs: {
      value: cdktf.numberToHclTerraform(struct!.scrapeIntervalSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scrape_timeout_secs: {
      value: cdktf.numberToHclTerraform(struct!.scrapeTimeoutSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: observabilityPipelineConfigSourcesHttpClientTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesHttpClientTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesHttpClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesHttpClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._decoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoding = this._decoding;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._scrapeIntervalSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeIntervalSecs = this._scrapeIntervalSecs;
    }
    if (this._scrapeTimeoutSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeoutSecs = this._scrapeTimeoutSecs;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesHttpClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authStrategy = undefined;
      this._decoding = undefined;
      this._id = undefined;
      this._scrapeIntervalSecs = undefined;
      this._scrapeTimeoutSecs = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authStrategy = value.authStrategy;
      this._decoding = value.decoding;
      this._id = value.id;
      this._scrapeIntervalSecs = value.scrapeIntervalSecs;
      this._scrapeTimeoutSecs = value.scrapeTimeoutSecs;
      this._tls.internalValue = value.tls;
    }
  }

  // auth_strategy - computed: false, optional: true, required: false
  private _authStrategy?: string; 
  public get authStrategy() {
    return this.getStringAttribute('auth_strategy');
  }
  public set authStrategy(value: string) {
    this._authStrategy = value;
  }
  public resetAuthStrategy() {
    this._authStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyInput() {
    return this._authStrategy;
  }

  // decoding - computed: false, optional: false, required: true
  private _decoding?: string; 
  public get decoding() {
    return this.getStringAttribute('decoding');
  }
  public set decoding(value: string) {
    this._decoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingInput() {
    return this._decoding;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // scrape_interval_secs - computed: false, optional: true, required: false
  private _scrapeIntervalSecs?: number; 
  public get scrapeIntervalSecs() {
    return this.getNumberAttribute('scrape_interval_secs');
  }
  public set scrapeIntervalSecs(value: number) {
    this._scrapeIntervalSecs = value;
  }
  public resetScrapeIntervalSecs() {
    this._scrapeIntervalSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalSecsInput() {
    return this._scrapeIntervalSecs;
  }

  // scrape_timeout_secs - computed: false, optional: true, required: false
  private _scrapeTimeoutSecs?: number; 
  public get scrapeTimeoutSecs() {
    return this.getNumberAttribute('scrape_timeout_secs');
  }
  public set scrapeTimeoutSecs(value: number) {
    this._scrapeTimeoutSecs = value;
  }
  public resetScrapeTimeoutSecs() {
    this._scrapeTimeoutSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutSecsInput() {
    return this._scrapeTimeoutSecs;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesHttpClientTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesHttpClientTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesHttpClientList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesHttpClient[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesHttpClientOutputReference {
    return new ObservabilityPipelineConfigSourcesHttpClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesHttpServerTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesHttpServerTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesHttpServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesHttpServerTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesHttpServerTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesHttpServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesHttpServerTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesHttpServerTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesHttpServer {
  /**
  * HTTP authentication method. Valid values are `none`, `plain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy: string;
  /**
  * The decoding format used to interpret incoming logs. Valid values are `json`, `gelf`, `syslog`, `bytes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * Unique ID for the HTTP server source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesHttpServerTls;
}

export function observabilityPipelineConfigSourcesHttpServerToTerraform(struct?: ObservabilityPipelineConfigSourcesHttpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_strategy: cdktf.stringToTerraform(struct!.authStrategy),
    decoding: cdktf.stringToTerraform(struct!.decoding),
    id: cdktf.stringToTerraform(struct!.id),
    tls: observabilityPipelineConfigSourcesHttpServerTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesHttpServerToHclTerraform(struct?: ObservabilityPipelineConfigSourcesHttpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_strategy: {
      value: cdktf.stringToHclTerraform(struct!.authStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding: {
      value: cdktf.stringToHclTerraform(struct!.decoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesHttpServerTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesHttpServerTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesHttpServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesHttpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._decoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoding = this._decoding;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesHttpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authStrategy = undefined;
      this._decoding = undefined;
      this._id = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authStrategy = value.authStrategy;
      this._decoding = value.decoding;
      this._id = value.id;
      this._tls.internalValue = value.tls;
    }
  }

  // auth_strategy - computed: false, optional: false, required: true
  private _authStrategy?: string; 
  public get authStrategy() {
    return this.getStringAttribute('auth_strategy');
  }
  public set authStrategy(value: string) {
    this._authStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyInput() {
    return this._authStrategy;
  }

  // decoding - computed: false, optional: false, required: true
  private _decoding?: string; 
  public get decoding() {
    return this.getStringAttribute('decoding');
  }
  public set decoding(value: string) {
    this._decoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingInput() {
    return this._decoding;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesHttpServerTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesHttpServerTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesHttpServerList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesHttpServer[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesHttpServerOutputReference {
    return new ObservabilityPipelineConfigSourcesHttpServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption {
  /**
  * The name of the librdkafka option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value of the librdkafka option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigSourcesKafkaLibrdkafkaOptionToTerraform(struct?: ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigSourcesKafkaLibrdkafkaOptionToHclTerraform(struct?: ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference {
    return new ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesKafkaSasl {
  /**
  * SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}
  */
  readonly mechanism?: string;
}

export function observabilityPipelineConfigSourcesKafkaSaslToTerraform(struct?: ObservabilityPipelineConfigSourcesKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
  }
}


export function observabilityPipelineConfigSourcesKafkaSaslToHclTerraform(struct?: ObservabilityPipelineConfigSourcesKafkaSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesKafkaSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesKafkaSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesKafkaSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mechanism = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mechanism = value.mechanism;
    }
  }

  // mechanism - computed: false, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }
}
export interface ObservabilityPipelineConfigSourcesKafkaTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesKafkaTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesKafkaTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesKafkaTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesKafkaTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesKafkaTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesKafkaTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesKafka {
  /**
  * The Kafka consumer group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#group_id ObservabilityPipeline#group_id}
  */
  readonly groupId: string;
  /**
  * The unique ID of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#topics ObservabilityPipeline#topics}
  */
  readonly topics: string[];
  /**
  * librdkafka_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}
  */
  readonly librdkafkaOption?: ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption[] | cdktf.IResolvable;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}
  */
  readonly sasl?: ObservabilityPipelineConfigSourcesKafkaSasl;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesKafkaTls;
}

export function observabilityPipelineConfigSourcesKafkaToTerraform(struct?: ObservabilityPipelineConfigSourcesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    id: cdktf.stringToTerraform(struct!.id),
    topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topics),
    librdkafka_option: cdktf.listMapper(observabilityPipelineConfigSourcesKafkaLibrdkafkaOptionToTerraform, true)(struct!.librdkafkaOption),
    sasl: observabilityPipelineConfigSourcesKafkaSaslToTerraform(struct!.sasl),
    tls: observabilityPipelineConfigSourcesKafkaTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesKafkaToHclTerraform(struct?: ObservabilityPipelineConfigSourcesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    librdkafka_option: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesKafkaLibrdkafkaOptionToHclTerraform, true)(struct!.librdkafkaOption),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList",
    },
    sasl: {
      value: observabilityPipelineConfigSourcesKafkaSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesKafkaSasl",
    },
    tls: {
      value: observabilityPipelineConfigSourcesKafkaTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesKafkaTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._topics !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics;
    }
    if (this._librdkafkaOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.librdkafkaOption = this._librdkafkaOption?.internalValue;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._id = undefined;
      this._topics = undefined;
      this._librdkafkaOption.internalValue = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._id = value.id;
      this._topics = value.topics;
      this._librdkafkaOption.internalValue = value.librdkafkaOption;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // topics - computed: false, optional: false, required: true
  private _topics?: string[]; 
  public get topics() {
    return this.getListAttribute('topics');
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // librdkafka_option - computed: false, optional: true, required: false
  private _librdkafkaOption = new ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOptionList(this, "librdkafka_option", false);
  public get librdkafkaOption() {
    return this._librdkafkaOption;
  }
  public putLibrdkafkaOption(value: ObservabilityPipelineConfigSourcesKafkaLibrdkafkaOption[] | cdktf.IResolvable) {
    this._librdkafkaOption.internalValue = value;
  }
  public resetLibrdkafkaOption() {
    this._librdkafkaOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get librdkafkaOptionInput() {
    return this._librdkafkaOption.internalValue;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new ObservabilityPipelineConfigSourcesKafkaSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: ObservabilityPipelineConfigSourcesKafkaSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesKafkaTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesKafkaTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesKafkaList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesKafka[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesKafkaOutputReference {
    return new ObservabilityPipelineConfigSourcesKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesLogstashTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesLogstashTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesLogstashTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesLogstashTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesLogstashTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesLogstashTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesLogstashTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesLogstashTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesLogstash {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesLogstashTls;
}

export function observabilityPipelineConfigSourcesLogstashToTerraform(struct?: ObservabilityPipelineConfigSourcesLogstash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tls: observabilityPipelineConfigSourcesLogstashTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesLogstashToHclTerraform(struct?: ObservabilityPipelineConfigSourcesLogstash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesLogstashTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesLogstashTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesLogstashOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesLogstash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesLogstash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesLogstashTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesLogstashTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesLogstashList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesLogstash[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesLogstashOutputReference {
    return new ObservabilityPipelineConfigSourcesLogstashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesRsyslogTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesRsyslogTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesRsyslogTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesRsyslogTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesRsyslogTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesRsyslogTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesRsyslogTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesRsyslogTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesRsyslog {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Protocol used by the syslog source to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesRsyslogTls;
}

export function observabilityPipelineConfigSourcesRsyslogToTerraform(struct?: ObservabilityPipelineConfigSourcesRsyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    mode: cdktf.stringToTerraform(struct!.mode),
    tls: observabilityPipelineConfigSourcesRsyslogTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesRsyslogToHclTerraform(struct?: ObservabilityPipelineConfigSourcesRsyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesRsyslogTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesRsyslogTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesRsyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesRsyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesRsyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mode = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mode = value.mode;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesRsyslogTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesRsyslogTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesRsyslogList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesRsyslog[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesRsyslogOutputReference {
    return new ObservabilityPipelineConfigSourcesRsyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesSplunkHecTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesSplunkHecTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkHecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesSplunkHecTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkHecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesSplunkHecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesSplunkHecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesSplunkHecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesSplunkHec {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesSplunkHecTls;
}

export function observabilityPipelineConfigSourcesSplunkHecToTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkHec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tls: observabilityPipelineConfigSourcesSplunkHecTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesSplunkHecToHclTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkHec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesSplunkHecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesSplunkHecTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesSplunkHecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesSplunkHec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesSplunkHec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesSplunkHecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesSplunkHecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesSplunkHecList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesSplunkHec[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesSplunkHecOutputReference {
    return new ObservabilityPipelineConfigSourcesSplunkHecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesSplunkTcpTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesSplunkTcpTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkTcpTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesSplunkTcpTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkTcpTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesSplunkTcpTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesSplunkTcpTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesSplunkTcpTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesSplunkTcp {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesSplunkTcpTls;
}

export function observabilityPipelineConfigSourcesSplunkTcpToTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    tls: observabilityPipelineConfigSourcesSplunkTcpTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesSplunkTcpToHclTerraform(struct?: ObservabilityPipelineConfigSourcesSplunkTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesSplunkTcpTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesSplunkTcpTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesSplunkTcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesSplunkTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesSplunkTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesSplunkTcpTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesSplunkTcpTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesSplunkTcpList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesSplunkTcp[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesSplunkTcpOutputReference {
    return new ObservabilityPipelineConfigSourcesSplunkTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesSumoLogic {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function observabilityPipelineConfigSourcesSumoLogicToTerraform(struct?: ObservabilityPipelineConfigSourcesSumoLogic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function observabilityPipelineConfigSourcesSumoLogicToHclTerraform(struct?: ObservabilityPipelineConfigSourcesSumoLogic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesSumoLogicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesSumoLogic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesSumoLogic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ObservabilityPipelineConfigSourcesSumoLogicList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesSumoLogic[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesSumoLogicOutputReference {
    return new ObservabilityPipelineConfigSourcesSumoLogicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourcesSyslogNgTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server’s TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigSourcesSyslogNgTlsToTerraform(struct?: ObservabilityPipelineConfigSourcesSyslogNgTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    crt_file: cdktf.stringToTerraform(struct!.crtFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigSourcesSyslogNgTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourcesSyslogNgTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktf.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesSyslogNgTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSourcesSyslogNgTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesSyslogNgTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }
}
export interface ObservabilityPipelineConfigSourcesSyslogNg {
  /**
  * The unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Protocol used by the syslog source to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourcesSyslogNgTls;
}

export function observabilityPipelineConfigSourcesSyslogNgToTerraform(struct?: ObservabilityPipelineConfigSourcesSyslogNg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    mode: cdktf.stringToTerraform(struct!.mode),
    tls: observabilityPipelineConfigSourcesSyslogNgTlsToTerraform(struct!.tls),
  }
}


export function observabilityPipelineConfigSourcesSyslogNgToHclTerraform(struct?: ObservabilityPipelineConfigSourcesSyslogNg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: observabilityPipelineConfigSourcesSyslogNgTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSourcesSyslogNgTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesSyslogNgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourcesSyslogNg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourcesSyslogNg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._mode = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._mode = value.mode;
      this._tls.internalValue = value.tls;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourcesSyslogNgTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourcesSyslogNgTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourcesSyslogNgList extends cdktf.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourcesSyslogNg[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourcesSyslogNgOutputReference {
    return new ObservabilityPipelineConfigSourcesSyslogNgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSources {
  /**
  * amazon_data_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#amazon_data_firehose ObservabilityPipeline#amazon_data_firehose}
  */
  readonly amazonDataFirehose?: ObservabilityPipelineConfigSourcesAmazonDataFirehose[] | cdktf.IResolvable;
  /**
  * amazon_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#amazon_s3 ObservabilityPipeline#amazon_s3}
  */
  readonly amazonS3?: ObservabilityPipelineConfigSourcesAmazonS3[] | cdktf.IResolvable;
  /**
  * datadog_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#datadog_agent ObservabilityPipeline#datadog_agent}
  */
  readonly datadogAgent?: ObservabilityPipelineConfigSourcesDatadogAgent[] | cdktf.IResolvable;
  /**
  * fluent_bit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#fluent_bit ObservabilityPipeline#fluent_bit}
  */
  readonly fluentBit?: ObservabilityPipelineConfigSourcesFluentBit[] | cdktf.IResolvable;
  /**
  * fluentd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#fluentd ObservabilityPipeline#fluentd}
  */
  readonly fluentd?: ObservabilityPipelineConfigSourcesFluentd[] | cdktf.IResolvable;
  /**
  * google_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#google_pubsub ObservabilityPipeline#google_pubsub}
  */
  readonly googlePubsub?: ObservabilityPipelineConfigSourcesGooglePubsub[] | cdktf.IResolvable;
  /**
  * http_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#http_client ObservabilityPipeline#http_client}
  */
  readonly httpClient?: ObservabilityPipelineConfigSourcesHttpClient[] | cdktf.IResolvable;
  /**
  * http_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#http_server ObservabilityPipeline#http_server}
  */
  readonly httpServer?: ObservabilityPipelineConfigSourcesHttpServer[] | cdktf.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}
  */
  readonly kafka?: ObservabilityPipelineConfigSourcesKafka[] | cdktf.IResolvable;
  /**
  * logstash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#logstash ObservabilityPipeline#logstash}
  */
  readonly logstash?: ObservabilityPipelineConfigSourcesLogstash[] | cdktf.IResolvable;
  /**
  * rsyslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#rsyslog ObservabilityPipeline#rsyslog}
  */
  readonly rsyslog?: ObservabilityPipelineConfigSourcesRsyslog[] | cdktf.IResolvable;
  /**
  * splunk_hec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#splunk_hec ObservabilityPipeline#splunk_hec}
  */
  readonly splunkHec?: ObservabilityPipelineConfigSourcesSplunkHec[] | cdktf.IResolvable;
  /**
  * splunk_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#splunk_tcp ObservabilityPipeline#splunk_tcp}
  */
  readonly splunkTcp?: ObservabilityPipelineConfigSourcesSplunkTcp[] | cdktf.IResolvable;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sumo_logic ObservabilityPipeline#sumo_logic}
  */
  readonly sumoLogic?: ObservabilityPipelineConfigSourcesSumoLogic[] | cdktf.IResolvable;
  /**
  * syslog_ng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#syslog_ng ObservabilityPipeline#syslog_ng}
  */
  readonly syslogNg?: ObservabilityPipelineConfigSourcesSyslogNg[] | cdktf.IResolvable;
}

export function observabilityPipelineConfigSourcesToTerraform(struct?: ObservabilityPipelineConfigSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_data_firehose: cdktf.listMapper(observabilityPipelineConfigSourcesAmazonDataFirehoseToTerraform, true)(struct!.amazonDataFirehose),
    amazon_s3: cdktf.listMapper(observabilityPipelineConfigSourcesAmazonS3ToTerraform, true)(struct!.amazonS3),
    datadog_agent: cdktf.listMapper(observabilityPipelineConfigSourcesDatadogAgentToTerraform, true)(struct!.datadogAgent),
    fluent_bit: cdktf.listMapper(observabilityPipelineConfigSourcesFluentBitToTerraform, true)(struct!.fluentBit),
    fluentd: cdktf.listMapper(observabilityPipelineConfigSourcesFluentdToTerraform, true)(struct!.fluentd),
    google_pubsub: cdktf.listMapper(observabilityPipelineConfigSourcesGooglePubsubToTerraform, true)(struct!.googlePubsub),
    http_client: cdktf.listMapper(observabilityPipelineConfigSourcesHttpClientToTerraform, true)(struct!.httpClient),
    http_server: cdktf.listMapper(observabilityPipelineConfigSourcesHttpServerToTerraform, true)(struct!.httpServer),
    kafka: cdktf.listMapper(observabilityPipelineConfigSourcesKafkaToTerraform, true)(struct!.kafka),
    logstash: cdktf.listMapper(observabilityPipelineConfigSourcesLogstashToTerraform, true)(struct!.logstash),
    rsyslog: cdktf.listMapper(observabilityPipelineConfigSourcesRsyslogToTerraform, true)(struct!.rsyslog),
    splunk_hec: cdktf.listMapper(observabilityPipelineConfigSourcesSplunkHecToTerraform, true)(struct!.splunkHec),
    splunk_tcp: cdktf.listMapper(observabilityPipelineConfigSourcesSplunkTcpToTerraform, true)(struct!.splunkTcp),
    sumo_logic: cdktf.listMapper(observabilityPipelineConfigSourcesSumoLogicToTerraform, true)(struct!.sumoLogic),
    syslog_ng: cdktf.listMapper(observabilityPipelineConfigSourcesSyslogNgToTerraform, true)(struct!.syslogNg),
  }
}


export function observabilityPipelineConfigSourcesToHclTerraform(struct?: ObservabilityPipelineConfigSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_data_firehose: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesAmazonDataFirehoseToHclTerraform, true)(struct!.amazonDataFirehose),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesAmazonDataFirehoseList",
    },
    amazon_s3: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesAmazonS3ToHclTerraform, true)(struct!.amazonS3),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesAmazonS3List",
    },
    datadog_agent: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesDatadogAgentToHclTerraform, true)(struct!.datadogAgent),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesDatadogAgentList",
    },
    fluent_bit: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesFluentBitToHclTerraform, true)(struct!.fluentBit),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesFluentBitList",
    },
    fluentd: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesFluentdToHclTerraform, true)(struct!.fluentd),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesFluentdList",
    },
    google_pubsub: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesGooglePubsubToHclTerraform, true)(struct!.googlePubsub),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesGooglePubsubList",
    },
    http_client: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesHttpClientToHclTerraform, true)(struct!.httpClient),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesHttpClientList",
    },
    http_server: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesHttpServerToHclTerraform, true)(struct!.httpServer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesHttpServerList",
    },
    kafka: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesKafkaToHclTerraform, true)(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesKafkaList",
    },
    logstash: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesLogstashToHclTerraform, true)(struct!.logstash),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesLogstashList",
    },
    rsyslog: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesRsyslogToHclTerraform, true)(struct!.rsyslog),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesRsyslogList",
    },
    splunk_hec: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesSplunkHecToHclTerraform, true)(struct!.splunkHec),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesSplunkHecList",
    },
    splunk_tcp: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesSplunkTcpToHclTerraform, true)(struct!.splunkTcp),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesSplunkTcpList",
    },
    sumo_logic: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesSumoLogicToHclTerraform, true)(struct!.sumoLogic),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesSumoLogicList",
    },
    syslog_ng: {
      value: cdktf.listMapperHcl(observabilityPipelineConfigSourcesSyslogNgToHclTerraform, true)(struct!.syslogNg),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourcesSyslogNgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonDataFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonDataFirehose = this._amazonDataFirehose?.internalValue;
    }
    if (this._amazonS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3 = this._amazonS3?.internalValue;
    }
    if (this._datadogAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogAgent = this._datadogAgent?.internalValue;
    }
    if (this._fluentBit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentBit = this._fluentBit?.internalValue;
    }
    if (this._fluentd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentd = this._fluentd?.internalValue;
    }
    if (this._googlePubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googlePubsub = this._googlePubsub?.internalValue;
    }
    if (this._httpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpClient = this._httpClient?.internalValue;
    }
    if (this._httpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpServer = this._httpServer?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._logstash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstash = this._logstash?.internalValue;
    }
    if (this._rsyslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsyslog = this._rsyslog?.internalValue;
    }
    if (this._splunkHec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHec = this._splunkHec?.internalValue;
    }
    if (this._splunkTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkTcp = this._splunkTcp?.internalValue;
    }
    if (this._sumoLogic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumoLogic = this._sumoLogic?.internalValue;
    }
    if (this._syslogNg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogNg = this._syslogNg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonDataFirehose.internalValue = undefined;
      this._amazonS3.internalValue = undefined;
      this._datadogAgent.internalValue = undefined;
      this._fluentBit.internalValue = undefined;
      this._fluentd.internalValue = undefined;
      this._googlePubsub.internalValue = undefined;
      this._httpClient.internalValue = undefined;
      this._httpServer.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._logstash.internalValue = undefined;
      this._rsyslog.internalValue = undefined;
      this._splunkHec.internalValue = undefined;
      this._splunkTcp.internalValue = undefined;
      this._sumoLogic.internalValue = undefined;
      this._syslogNg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonDataFirehose.internalValue = value.amazonDataFirehose;
      this._amazonS3.internalValue = value.amazonS3;
      this._datadogAgent.internalValue = value.datadogAgent;
      this._fluentBit.internalValue = value.fluentBit;
      this._fluentd.internalValue = value.fluentd;
      this._googlePubsub.internalValue = value.googlePubsub;
      this._httpClient.internalValue = value.httpClient;
      this._httpServer.internalValue = value.httpServer;
      this._kafka.internalValue = value.kafka;
      this._logstash.internalValue = value.logstash;
      this._rsyslog.internalValue = value.rsyslog;
      this._splunkHec.internalValue = value.splunkHec;
      this._splunkTcp.internalValue = value.splunkTcp;
      this._sumoLogic.internalValue = value.sumoLogic;
      this._syslogNg.internalValue = value.syslogNg;
    }
  }

  // amazon_data_firehose - computed: false, optional: true, required: false
  private _amazonDataFirehose = new ObservabilityPipelineConfigSourcesAmazonDataFirehoseList(this, "amazon_data_firehose", false);
  public get amazonDataFirehose() {
    return this._amazonDataFirehose;
  }
  public putAmazonDataFirehose(value: ObservabilityPipelineConfigSourcesAmazonDataFirehose[] | cdktf.IResolvable) {
    this._amazonDataFirehose.internalValue = value;
  }
  public resetAmazonDataFirehose() {
    this._amazonDataFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonDataFirehoseInput() {
    return this._amazonDataFirehose.internalValue;
  }

  // amazon_s3 - computed: false, optional: true, required: false
  private _amazonS3 = new ObservabilityPipelineConfigSourcesAmazonS3List(this, "amazon_s3", false);
  public get amazonS3() {
    return this._amazonS3;
  }
  public putAmazonS3(value: ObservabilityPipelineConfigSourcesAmazonS3[] | cdktf.IResolvable) {
    this._amazonS3.internalValue = value;
  }
  public resetAmazonS3() {
    this._amazonS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3Input() {
    return this._amazonS3.internalValue;
  }

  // datadog_agent - computed: false, optional: true, required: false
  private _datadogAgent = new ObservabilityPipelineConfigSourcesDatadogAgentList(this, "datadog_agent", false);
  public get datadogAgent() {
    return this._datadogAgent;
  }
  public putDatadogAgent(value: ObservabilityPipelineConfigSourcesDatadogAgent[] | cdktf.IResolvable) {
    this._datadogAgent.internalValue = value;
  }
  public resetDatadogAgent() {
    this._datadogAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogAgentInput() {
    return this._datadogAgent.internalValue;
  }

  // fluent_bit - computed: false, optional: true, required: false
  private _fluentBit = new ObservabilityPipelineConfigSourcesFluentBitList(this, "fluent_bit", false);
  public get fluentBit() {
    return this._fluentBit;
  }
  public putFluentBit(value: ObservabilityPipelineConfigSourcesFluentBit[] | cdktf.IResolvable) {
    this._fluentBit.internalValue = value;
  }
  public resetFluentBit() {
    this._fluentBit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentBitInput() {
    return this._fluentBit.internalValue;
  }

  // fluentd - computed: false, optional: true, required: false
  private _fluentd = new ObservabilityPipelineConfigSourcesFluentdList(this, "fluentd", false);
  public get fluentd() {
    return this._fluentd;
  }
  public putFluentd(value: ObservabilityPipelineConfigSourcesFluentd[] | cdktf.IResolvable) {
    this._fluentd.internalValue = value;
  }
  public resetFluentd() {
    this._fluentd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdInput() {
    return this._fluentd.internalValue;
  }

  // google_pubsub - computed: false, optional: true, required: false
  private _googlePubsub = new ObservabilityPipelineConfigSourcesGooglePubsubList(this, "google_pubsub", false);
  public get googlePubsub() {
    return this._googlePubsub;
  }
  public putGooglePubsub(value: ObservabilityPipelineConfigSourcesGooglePubsub[] | cdktf.IResolvable) {
    this._googlePubsub.internalValue = value;
  }
  public resetGooglePubsub() {
    this._googlePubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePubsubInput() {
    return this._googlePubsub.internalValue;
  }

  // http_client - computed: false, optional: true, required: false
  private _httpClient = new ObservabilityPipelineConfigSourcesHttpClientList(this, "http_client", false);
  public get httpClient() {
    return this._httpClient;
  }
  public putHttpClient(value: ObservabilityPipelineConfigSourcesHttpClient[] | cdktf.IResolvable) {
    this._httpClient.internalValue = value;
  }
  public resetHttpClient() {
    this._httpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientInput() {
    return this._httpClient.internalValue;
  }

  // http_server - computed: false, optional: true, required: false
  private _httpServer = new ObservabilityPipelineConfigSourcesHttpServerList(this, "http_server", false);
  public get httpServer() {
    return this._httpServer;
  }
  public putHttpServer(value: ObservabilityPipelineConfigSourcesHttpServer[] | cdktf.IResolvable) {
    this._httpServer.internalValue = value;
  }
  public resetHttpServer() {
    this._httpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerInput() {
    return this._httpServer.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new ObservabilityPipelineConfigSourcesKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ObservabilityPipelineConfigSourcesKafka[] | cdktf.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // logstash - computed: false, optional: true, required: false
  private _logstash = new ObservabilityPipelineConfigSourcesLogstashList(this, "logstash", false);
  public get logstash() {
    return this._logstash;
  }
  public putLogstash(value: ObservabilityPipelineConfigSourcesLogstash[] | cdktf.IResolvable) {
    this._logstash.internalValue = value;
  }
  public resetLogstash() {
    this._logstash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashInput() {
    return this._logstash.internalValue;
  }

  // rsyslog - computed: false, optional: true, required: false
  private _rsyslog = new ObservabilityPipelineConfigSourcesRsyslogList(this, "rsyslog", false);
  public get rsyslog() {
    return this._rsyslog;
  }
  public putRsyslog(value: ObservabilityPipelineConfigSourcesRsyslog[] | cdktf.IResolvable) {
    this._rsyslog.internalValue = value;
  }
  public resetRsyslog() {
    this._rsyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsyslogInput() {
    return this._rsyslog.internalValue;
  }

  // splunk_hec - computed: false, optional: true, required: false
  private _splunkHec = new ObservabilityPipelineConfigSourcesSplunkHecList(this, "splunk_hec", false);
  public get splunkHec() {
    return this._splunkHec;
  }
  public putSplunkHec(value: ObservabilityPipelineConfigSourcesSplunkHec[] | cdktf.IResolvable) {
    this._splunkHec.internalValue = value;
  }
  public resetSplunkHec() {
    this._splunkHec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecInput() {
    return this._splunkHec.internalValue;
  }

  // splunk_tcp - computed: false, optional: true, required: false
  private _splunkTcp = new ObservabilityPipelineConfigSourcesSplunkTcpList(this, "splunk_tcp", false);
  public get splunkTcp() {
    return this._splunkTcp;
  }
  public putSplunkTcp(value: ObservabilityPipelineConfigSourcesSplunkTcp[] | cdktf.IResolvable) {
    this._splunkTcp.internalValue = value;
  }
  public resetSplunkTcp() {
    this._splunkTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTcpInput() {
    return this._splunkTcp.internalValue;
  }

  // sumo_logic - computed: false, optional: true, required: false
  private _sumoLogic = new ObservabilityPipelineConfigSourcesSumoLogicList(this, "sumo_logic", false);
  public get sumoLogic() {
    return this._sumoLogic;
  }
  public putSumoLogic(value: ObservabilityPipelineConfigSourcesSumoLogic[] | cdktf.IResolvable) {
    this._sumoLogic.internalValue = value;
  }
  public resetSumoLogic() {
    this._sumoLogic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoLogicInput() {
    return this._sumoLogic.internalValue;
  }

  // syslog_ng - computed: false, optional: true, required: false
  private _syslogNg = new ObservabilityPipelineConfigSourcesSyslogNgList(this, "syslog_ng", false);
  public get syslogNg() {
    return this._syslogNg;
  }
  public putSyslogNg(value: ObservabilityPipelineConfigSourcesSyslogNg[] | cdktf.IResolvable) {
    this._syslogNg.internalValue = value;
  }
  public resetSyslogNg() {
    this._syslogNg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogNgInput() {
    return this._syslogNg.internalValue;
  }
}
export interface ObservabilityPipelineConfigA {
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#destinations ObservabilityPipeline#destinations}
  */
  readonly destinations?: ObservabilityPipelineConfigDestinations;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#processors ObservabilityPipeline#processors}
  */
  readonly processors?: ObservabilityPipelineConfigProcessors;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#sources ObservabilityPipeline#sources}
  */
  readonly sources?: ObservabilityPipelineConfigSources;
}

export function observabilityPipelineConfigAToTerraform(struct?: ObservabilityPipelineConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: observabilityPipelineConfigDestinationsToTerraform(struct!.destinations),
    processors: observabilityPipelineConfigProcessorsToTerraform(struct!.processors),
    sources: observabilityPipelineConfigSourcesToTerraform(struct!.sources),
  }
}


export function observabilityPipelineConfigAToHclTerraform(struct?: ObservabilityPipelineConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destinations: {
      value: observabilityPipelineConfigDestinationsToHclTerraform(struct!.destinations),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigDestinations",
    },
    processors: {
      value: observabilityPipelineConfigProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigProcessors",
    },
    sources: {
      value: observabilityPipelineConfigSourcesToHclTerraform(struct!.sources),
      isBlock: true,
      type: "struct",
      storageClassType: "ObservabilityPipelineConfigSources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObservabilityPipelineConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations.internalValue = undefined;
      this._processors.internalValue = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations.internalValue = value.destinations;
      this._processors.internalValue = value.processors;
      this._sources.internalValue = value.sources;
    }
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new ObservabilityPipelineConfigDestinationsOutputReference(this, "destinations");
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: ObservabilityPipelineConfigDestinations) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new ObservabilityPipelineConfigProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: ObservabilityPipelineConfigProcessors) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new ObservabilityPipelineConfigSourcesOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: ObservabilityPipelineConfigSources) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline datadog_observability_pipeline}
*/
export class ObservabilityPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_observability_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObservabilityPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityPipeline to import
  * @param importFromId The id of the existing ObservabilityPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_observability_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.71.0/docs/resources/observability_pipeline datadog_observability_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_observability_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.71.0',
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
    this._name = config.name;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // config - computed: false, optional: true, required: false
  private _config = new ObservabilityPipelineConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ObservabilityPipelineConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      config: observabilityPipelineConfigAToTerraform(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: observabilityPipelineConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObservabilityPipelineConfigA",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
