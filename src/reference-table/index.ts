/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReferenceTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#description ReferenceTable#description}
  */
  readonly description?: string;
  /**
  * The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#source ReferenceTable#source}
  */
  readonly source: string;
  /**
  * The name of the reference table. This must be unique within your organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#table_name ReferenceTable#table_name}
  */
  readonly tableName: string;
  /**
  * A list of tags to associate with the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#tags ReferenceTable#tags}
  */
  readonly tags?: string[];
  /**
  * file_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_metadata ReferenceTable#file_metadata}
  */
  readonly fileMetadata?: ReferenceTableFileMetadata;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#schema ReferenceTable#schema}
  */
  readonly schema?: ReferenceTableSchema;
}
export interface ReferenceTableFileMetadataAccessDetailsAwsDetail {
  /**
  * The ID of the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_account_id ReferenceTable#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * The name of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_bucket_name ReferenceTable#aws_bucket_name}
  */
  readonly awsBucketName?: string;
  /**
  * The relative file path from the AWS S3 bucket root to the CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}
  */
  readonly filePath?: string;
}

export function referenceTableFileMetadataAccessDetailsAwsDetailToTerraform(struct?: ReferenceTableFileMetadataAccessDetailsAwsDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    aws_bucket_name: cdktf.stringToTerraform(struct!.awsBucketName),
    file_path: cdktf.stringToTerraform(struct!.filePath),
  }
}


export function referenceTableFileMetadataAccessDetailsAwsDetailToHclTerraform(struct?: ReferenceTableFileMetadataAccessDetailsAwsDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.awsBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReferenceTableFileMetadataAccessDetailsAwsDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._awsBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsBucketName = this._awsBucketName;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceTableFileMetadataAccessDetailsAwsDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId = undefined;
      this._awsBucketName = undefined;
      this._filePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId = value.awsAccountId;
      this._awsBucketName = value.awsBucketName;
      this._filePath = value.filePath;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_bucket_name - computed: false, optional: true, required: false
  private _awsBucketName?: string; 
  public get awsBucketName() {
    return this.getStringAttribute('aws_bucket_name');
  }
  public set awsBucketName(value: string) {
    this._awsBucketName = value;
  }
  public resetAwsBucketName() {
    this._awsBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsBucketNameInput() {
    return this._awsBucketName;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }
}
export interface ReferenceTableFileMetadataAccessDetailsAzureDetail {
  /**
  * The Azure client ID (application ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_client_id ReferenceTable#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * The name of the Azure container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_container_name ReferenceTable#azure_container_name}
  */
  readonly azureContainerName?: string;
  /**
  * The name of the Azure storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_storage_account_name ReferenceTable#azure_storage_account_name}
  */
  readonly azureStorageAccountName?: string;
  /**
  * The ID of the Azure tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_tenant_id ReferenceTable#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * The relative file path from the Azure container root to the CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}
  */
  readonly filePath?: string;
}

export function referenceTableFileMetadataAccessDetailsAzureDetailToTerraform(struct?: ReferenceTableFileMetadataAccessDetailsAzureDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_client_id: cdktf.stringToTerraform(struct!.azureClientId),
    azure_container_name: cdktf.stringToTerraform(struct!.azureContainerName),
    azure_storage_account_name: cdktf.stringToTerraform(struct!.azureStorageAccountName),
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    file_path: cdktf.stringToTerraform(struct!.filePath),
  }
}


export function referenceTableFileMetadataAccessDetailsAzureDetailToHclTerraform(struct?: ReferenceTableFileMetadataAccessDetailsAzureDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_client_id: {
      value: cdktf.stringToHclTerraform(struct!.azureClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_container_name: {
      value: cdktf.stringToHclTerraform(struct!.azureContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.azureStorageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReferenceTableFileMetadataAccessDetailsAzureDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientId = this._azureClientId;
    }
    if (this._azureContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureContainerName = this._azureContainerName;
    }
    if (this._azureStorageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageAccountName = this._azureStorageAccountName;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceTableFileMetadataAccessDetailsAzureDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureClientId = undefined;
      this._azureContainerName = undefined;
      this._azureStorageAccountName = undefined;
      this._azureTenantId = undefined;
      this._filePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureClientId = value.azureClientId;
      this._azureContainerName = value.azureContainerName;
      this._azureStorageAccountName = value.azureStorageAccountName;
      this._azureTenantId = value.azureTenantId;
      this._filePath = value.filePath;
    }
  }

  // azure_client_id - computed: false, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_container_name - computed: false, optional: true, required: false
  private _azureContainerName?: string; 
  public get azureContainerName() {
    return this.getStringAttribute('azure_container_name');
  }
  public set azureContainerName(value: string) {
    this._azureContainerName = value;
  }
  public resetAzureContainerName() {
    this._azureContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureContainerNameInput() {
    return this._azureContainerName;
  }

  // azure_storage_account_name - computed: false, optional: true, required: false
  private _azureStorageAccountName?: string; 
  public get azureStorageAccountName() {
    return this.getStringAttribute('azure_storage_account_name');
  }
  public set azureStorageAccountName(value: string) {
    this._azureStorageAccountName = value;
  }
  public resetAzureStorageAccountName() {
    this._azureStorageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountNameInput() {
    return this._azureStorageAccountName;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }
}
export interface ReferenceTableFileMetadataAccessDetailsGcpDetail {
  /**
  * The relative file path from the GCS bucket root to the CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}
  */
  readonly filePath?: string;
  /**
  * The name of the GCP bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_bucket_name ReferenceTable#gcp_bucket_name}
  */
  readonly gcpBucketName?: string;
  /**
  * The ID of the GCP project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_project_id ReferenceTable#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * The email of the GCP service account used to access the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_service_account_email ReferenceTable#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
}

export function referenceTableFileMetadataAccessDetailsGcpDetailToTerraform(struct?: ReferenceTableFileMetadataAccessDetailsGcpDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
    gcp_bucket_name: cdktf.stringToTerraform(struct!.gcpBucketName),
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
  }
}


export function referenceTableFileMetadataAccessDetailsGcpDetailToHclTerraform(struct?: ReferenceTableFileMetadataAccessDetailsGcpDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.gcpBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReferenceTableFileMetadataAccessDetailsGcpDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._gcpBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpBucketName = this._gcpBucketName;
    }
    if (this._gcpProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProjectId = this._gcpProjectId;
    }
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceTableFileMetadataAccessDetailsGcpDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filePath = undefined;
      this._gcpBucketName = undefined;
      this._gcpProjectId = undefined;
      this._gcpServiceAccountEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filePath = value.filePath;
      this._gcpBucketName = value.gcpBucketName;
      this._gcpProjectId = value.gcpProjectId;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
    }
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // gcp_bucket_name - computed: false, optional: true, required: false
  private _gcpBucketName?: string; 
  public get gcpBucketName() {
    return this.getStringAttribute('gcp_bucket_name');
  }
  public set gcpBucketName(value: string) {
    this._gcpBucketName = value;
  }
  public resetGcpBucketName() {
    this._gcpBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpBucketNameInput() {
    return this._gcpBucketName;
  }

  // gcp_project_id - computed: false, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }
}
export interface ReferenceTableFileMetadataAccessDetails {
  /**
  * aws_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_detail ReferenceTable#aws_detail}
  */
  readonly awsDetail?: ReferenceTableFileMetadataAccessDetailsAwsDetail;
  /**
  * azure_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_detail ReferenceTable#azure_detail}
  */
  readonly azureDetail?: ReferenceTableFileMetadataAccessDetailsAzureDetail;
  /**
  * gcp_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_detail ReferenceTable#gcp_detail}
  */
  readonly gcpDetail?: ReferenceTableFileMetadataAccessDetailsGcpDetail;
}

export function referenceTableFileMetadataAccessDetailsToTerraform(struct?: ReferenceTableFileMetadataAccessDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_detail: referenceTableFileMetadataAccessDetailsAwsDetailToTerraform(struct!.awsDetail),
    azure_detail: referenceTableFileMetadataAccessDetailsAzureDetailToTerraform(struct!.azureDetail),
    gcp_detail: referenceTableFileMetadataAccessDetailsGcpDetailToTerraform(struct!.gcpDetail),
  }
}


export function referenceTableFileMetadataAccessDetailsToHclTerraform(struct?: ReferenceTableFileMetadataAccessDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_detail: {
      value: referenceTableFileMetadataAccessDetailsAwsDetailToHclTerraform(struct!.awsDetail),
      isBlock: true,
      type: "struct",
      storageClassType: "ReferenceTableFileMetadataAccessDetailsAwsDetail",
    },
    azure_detail: {
      value: referenceTableFileMetadataAccessDetailsAzureDetailToHclTerraform(struct!.azureDetail),
      isBlock: true,
      type: "struct",
      storageClassType: "ReferenceTableFileMetadataAccessDetailsAzureDetail",
    },
    gcp_detail: {
      value: referenceTableFileMetadataAccessDetailsGcpDetailToHclTerraform(struct!.gcpDetail),
      isBlock: true,
      type: "struct",
      storageClassType: "ReferenceTableFileMetadataAccessDetailsGcpDetail",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReferenceTableFileMetadataAccessDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReferenceTableFileMetadataAccessDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsDetail = this._awsDetail?.internalValue;
    }
    if (this._azureDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDetail = this._azureDetail?.internalValue;
    }
    if (this._gcpDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpDetail = this._gcpDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceTableFileMetadataAccessDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsDetail.internalValue = undefined;
      this._azureDetail.internalValue = undefined;
      this._gcpDetail.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsDetail.internalValue = value.awsDetail;
      this._azureDetail.internalValue = value.azureDetail;
      this._gcpDetail.internalValue = value.gcpDetail;
    }
  }

  // aws_detail - computed: false, optional: true, required: false
  private _awsDetail = new ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(this, "aws_detail");
  public get awsDetail() {
    return this._awsDetail;
  }
  public putAwsDetail(value: ReferenceTableFileMetadataAccessDetailsAwsDetail) {
    this._awsDetail.internalValue = value;
  }
  public resetAwsDetail() {
    this._awsDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDetailInput() {
    return this._awsDetail.internalValue;
  }

  // azure_detail - computed: false, optional: true, required: false
  private _azureDetail = new ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(this, "azure_detail");
  public get azureDetail() {
    return this._azureDetail;
  }
  public putAzureDetail(value: ReferenceTableFileMetadataAccessDetailsAzureDetail) {
    this._azureDetail.internalValue = value;
  }
  public resetAzureDetail() {
    this._azureDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDetailInput() {
    return this._azureDetail.internalValue;
  }

  // gcp_detail - computed: false, optional: true, required: false
  private _gcpDetail = new ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(this, "gcp_detail");
  public get gcpDetail() {
    return this._gcpDetail;
  }
  public putGcpDetail(value: ReferenceTableFileMetadataAccessDetailsGcpDetail) {
    this._gcpDetail.internalValue = value;
  }
  public resetGcpDetail() {
    this._gcpDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpDetailInput() {
    return this._gcpDetail.internalValue;
  }
}
export interface ReferenceTableFileMetadata {
  /**
  * Whether this table should automatically sync with the cloud storage source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#sync_enabled ReferenceTable#sync_enabled}
  */
  readonly syncEnabled: boolean | cdktf.IResolvable;
  /**
  * access_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#access_details ReferenceTable#access_details}
  */
  readonly accessDetails?: ReferenceTableFileMetadataAccessDetails;
}

export function referenceTableFileMetadataToTerraform(struct?: ReferenceTableFileMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_enabled: cdktf.booleanToTerraform(struct!.syncEnabled),
    access_details: referenceTableFileMetadataAccessDetailsToTerraform(struct!.accessDetails),
  }
}


export function referenceTableFileMetadataToHclTerraform(struct?: ReferenceTableFileMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.syncEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_details: {
      value: referenceTableFileMetadataAccessDetailsToHclTerraform(struct!.accessDetails),
      isBlock: true,
      type: "struct",
      storageClassType: "ReferenceTableFileMetadataAccessDetails",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReferenceTableFileMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReferenceTableFileMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncEnabled = this._syncEnabled;
    }
    if (this._accessDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDetails = this._accessDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceTableFileMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._syncEnabled = undefined;
      this._accessDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._syncEnabled = value.syncEnabled;
      this._accessDetails.internalValue = value.accessDetails;
    }
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // error_row_count - computed: true, optional: false, required: false
  public get errorRowCount() {
    return this.getNumberAttribute('error_row_count');
  }

  // error_type - computed: true, optional: false, required: false
  public get errorType() {
    return this.getStringAttribute('error_type');
  }

  // sync_enabled - computed: false, optional: false, required: true
  private _syncEnabled?: boolean | cdktf.IResolvable; 
  public get syncEnabled() {
    return this.getBooleanAttribute('sync_enabled');
  }
  public set syncEnabled(value: boolean | cdktf.IResolvable) {
    this._syncEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncEnabledInput() {
    return this._syncEnabled;
  }

  // access_details - computed: false, optional: true, required: false
  private _accessDetails = new ReferenceTableFileMetadataAccessDetailsOutputReference(this, "access_details");
  public get accessDetails() {
    return this._accessDetails;
  }
  public putAccessDetails(value: ReferenceTableFileMetadataAccessDetails) {
    this._accessDetails.internalValue = value;
  }
  public resetAccessDetails() {
    this._accessDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDetailsInput() {
    return this._accessDetails.internalValue;
  }
}
export interface ReferenceTableSchemaFields {
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#name ReferenceTable#name}
  */
  readonly name?: string;
  /**
  * The data type of the field. Must be one of: STRING, INT32. Valid values are `STRING`, `INT32`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#type ReferenceTable#type}
  */
  readonly type?: string;
}

export function referenceTableSchemaFieldsToTerraform(struct?: ReferenceTableSchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function referenceTableSchemaFieldsToHclTerraform(struct?: ReferenceTableSchemaFields | cdktf.IResolvable): any {
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

export class ReferenceTableSchemaFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReferenceTableSchemaFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceTableSchemaFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

export class ReferenceTableSchemaFieldsList extends cdktf.ComplexList {
  public internalValue? : ReferenceTableSchemaFields[] | cdktf.IResolvable

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
  public get(index: number): ReferenceTableSchemaFieldsOutputReference {
    return new ReferenceTableSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReferenceTableSchema {
  /**
  * List of field names that serve as primary keys for the table. Currently only one primary key is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#primary_keys ReferenceTable#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#fields ReferenceTable#fields}
  */
  readonly fields?: ReferenceTableSchemaFields[] | cdktf.IResolvable;
}

export function referenceTableSchemaToTerraform(struct?: ReferenceTableSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKeys),
    fields: cdktf.listMapper(referenceTableSchemaFieldsToTerraform, true)(struct!.fields),
  }
}


export function referenceTableSchemaToHclTerraform(struct?: ReferenceTableSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktf.listMapperHcl(referenceTableSchemaFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "ReferenceTableSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReferenceTableSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ReferenceTableSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKeys = this._primaryKeys;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReferenceTableSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryKeys = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryKeys = value.primaryKeys;
      this._fields.internalValue = value.fields;
    }
  }

  // primary_keys - computed: true, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new ReferenceTableSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: ReferenceTableSchemaFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table datadog_reference_table}
*/
export class ReferenceTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_reference_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReferenceTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReferenceTable to import
  * @param importFromId The id of the existing ReferenceTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReferenceTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_reference_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table datadog_reference_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReferenceTableConfig
  */
  public constructor(scope: Construct, id: string, config: ReferenceTableConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_reference_table',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.82.0',
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
    this._description = config.description;
    this._source = config.source;
    this._tableName = config.tableName;
    this._tags = config.tags;
    this._fileMetadata.internalValue = config.fileMetadata;
    this._schema.internalValue = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // row_count - computed: true, optional: false, required: false
  public get rowCount() {
    return this.getNumberAttribute('row_count');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // file_metadata - computed: false, optional: true, required: false
  private _fileMetadata = new ReferenceTableFileMetadataOutputReference(this, "file_metadata");
  public get fileMetadata() {
    return this._fileMetadata;
  }
  public putFileMetadata(value: ReferenceTableFileMetadata) {
    this._fileMetadata.internalValue = value;
  }
  public resetFileMetadata() {
    this._fileMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMetadataInput() {
    return this._fileMetadata.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new ReferenceTableSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ReferenceTableSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      source: cdktf.stringToTerraform(this._source),
      table_name: cdktf.stringToTerraform(this._tableName),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      file_metadata: referenceTableFileMetadataToTerraform(this._fileMetadata.internalValue),
      schema: referenceTableSchemaToTerraform(this._schema.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      file_metadata: {
        value: referenceTableFileMetadataToHclTerraform(this._fileMetadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReferenceTableFileMetadata",
      },
      schema: {
        value: referenceTableSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ReferenceTableSchema",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
