/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsArchiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#id LogsArchive#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To store the tags in the archive, set the value `true`. If it is set to `false`, the tags will be dropped when the logs are sent to the archive. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#include_tags LogsArchive#include_tags}
  */
  readonly includeTags?: boolean | cdktf.IResolvable;
  /**
  * Your archive name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#name LogsArchive#name}
  */
  readonly name: string;
  /**
  * The archive query/filter. Logs matching this query are included in the archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#query LogsArchive#query}
  */
  readonly query: string;
  /**
  * To limit the rehydration scan size for the archive, set a value in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#rehydration_max_scan_size_in_gb LogsArchive#rehydration_max_scan_size_in_gb}
  */
  readonly rehydrationMaxScanSizeInGb?: number;
  /**
  * An array of tags to add to rehydrated logs from an archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#rehydration_tags LogsArchive#rehydration_tags}
  */
  readonly rehydrationTags?: string[];
  /**
  * azure_archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#azure_archive LogsArchive#azure_archive}
  */
  readonly azureArchive?: LogsArchiveAzureArchive;
  /**
  * gcs_archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#gcs_archive LogsArchive#gcs_archive}
  */
  readonly gcsArchive?: LogsArchiveGcsArchive;
  /**
  * s3_archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#s3_archive LogsArchive#s3_archive}
  */
  readonly s3Archive?: LogsArchiveS3Archive;
}
export interface LogsArchiveAzureArchive {
  /**
  * Your client id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#client_id LogsArchive#client_id}
  */
  readonly clientId: string;
  /**
  * The container where the archive is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#container LogsArchive#container}
  */
  readonly container: string;
  /**
  * The path where the archive is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#path LogsArchive#path}
  */
  readonly path?: string;
  /**
  * The associated storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#storage_account LogsArchive#storage_account}
  */
  readonly storageAccount: string;
  /**
  * Your tenant id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#tenant_id LogsArchive#tenant_id}
  */
  readonly tenantId: string;
}

export function logsArchiveAzureArchiveToTerraform(struct?: LogsArchiveAzureArchiveOutputReference | LogsArchiveAzureArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function logsArchiveAzureArchiveToHclTerraform(struct?: LogsArchiveAzureArchiveOutputReference | LogsArchiveAzureArchive): any {
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
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
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

export class LogsArchiveAzureArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsArchiveAzureArchive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsArchiveAzureArchive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._container = undefined;
      this._path = undefined;
      this._storageAccount = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._container = value.container;
      this._path = value.path;
      this._storageAccount = value.storageAccount;
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

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
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
export interface LogsArchiveGcsArchive {
  /**
  * Name of your GCS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#bucket LogsArchive#bucket}
  */
  readonly bucket: string;
  /**
  * Your client email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#client_email LogsArchive#client_email}
  */
  readonly clientEmail: string;
  /**
  * Path where the archive is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#path LogsArchive#path}
  */
  readonly path?: string;
  /**
  * Your project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#project_id LogsArchive#project_id}
  */
  readonly projectId?: string;
}

export function logsArchiveGcsArchiveToTerraform(struct?: LogsArchiveGcsArchiveOutputReference | LogsArchiveGcsArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    path: cdktf.stringToTerraform(struct!.path),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function logsArchiveGcsArchiveToHclTerraform(struct?: LogsArchiveGcsArchiveOutputReference | LogsArchiveGcsArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsArchiveGcsArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsArchiveGcsArchive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsArchiveGcsArchive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._clientEmail = undefined;
      this._path = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._clientEmail = value.clientEmail;
      this._path = value.path;
      this._projectId = value.projectId;
    }
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

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface LogsArchiveS3Archive {
  /**
  * Your AWS account id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#account_id LogsArchive#account_id}
  */
  readonly accountId: string;
  /**
  * Name of your s3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#bucket LogsArchive#bucket}
  */
  readonly bucket: string;
  /**
  * Path where the archive is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#path LogsArchive#path}
  */
  readonly path?: string;
  /**
  * Your AWS role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#role_name LogsArchive#role_name}
  */
  readonly roleName: string;
}

export function logsArchiveS3ArchiveToTerraform(struct?: LogsArchiveS3ArchiveOutputReference | LogsArchiveS3Archive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    path: cdktf.stringToTerraform(struct!.path),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function logsArchiveS3ArchiveToHclTerraform(struct?: LogsArchiveS3ArchiveOutputReference | LogsArchiveS3Archive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsArchiveS3ArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsArchiveS3Archive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsArchiveS3Archive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._bucket = undefined;
      this._path = undefined;
      this._roleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._bucket = value.bucket;
      this._path = value.path;
      this._roleName = value.roleName;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive datadog_logs_archive}
*/
export class LogsArchive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_archive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogsArchive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsArchive to import
  * @param importFromId The id of the existing LogsArchive that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsArchive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_archive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.52.1/docs/resources/logs_archive datadog_logs_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: LogsArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_archive',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.52.1',
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
    this._id = config.id;
    this._includeTags = config.includeTags;
    this._name = config.name;
    this._query = config.query;
    this._rehydrationMaxScanSizeInGb = config.rehydrationMaxScanSizeInGb;
    this._rehydrationTags = config.rehydrationTags;
    this._azureArchive.internalValue = config.azureArchive;
    this._gcsArchive.internalValue = config.gcsArchive;
    this._s3Archive.internalValue = config.s3Archive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: boolean | cdktf.IResolvable; 
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }
  public set includeTags(value: boolean | cdktf.IResolvable) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rehydration_max_scan_size_in_gb - computed: false, optional: true, required: false
  private _rehydrationMaxScanSizeInGb?: number; 
  public get rehydrationMaxScanSizeInGb() {
    return this.getNumberAttribute('rehydration_max_scan_size_in_gb');
  }
  public set rehydrationMaxScanSizeInGb(value: number) {
    this._rehydrationMaxScanSizeInGb = value;
  }
  public resetRehydrationMaxScanSizeInGb() {
    this._rehydrationMaxScanSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rehydrationMaxScanSizeInGbInput() {
    return this._rehydrationMaxScanSizeInGb;
  }

  // rehydration_tags - computed: false, optional: true, required: false
  private _rehydrationTags?: string[]; 
  public get rehydrationTags() {
    return this.getListAttribute('rehydration_tags');
  }
  public set rehydrationTags(value: string[]) {
    this._rehydrationTags = value;
  }
  public resetRehydrationTags() {
    this._rehydrationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rehydrationTagsInput() {
    return this._rehydrationTags;
  }

  // azure_archive - computed: false, optional: true, required: false
  private _azureArchive = new LogsArchiveAzureArchiveOutputReference(this, "azure_archive");
  public get azureArchive() {
    return this._azureArchive;
  }
  public putAzureArchive(value: LogsArchiveAzureArchive) {
    this._azureArchive.internalValue = value;
  }
  public resetAzureArchive() {
    this._azureArchive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureArchiveInput() {
    return this._azureArchive.internalValue;
  }

  // gcs_archive - computed: false, optional: true, required: false
  private _gcsArchive = new LogsArchiveGcsArchiveOutputReference(this, "gcs_archive");
  public get gcsArchive() {
    return this._gcsArchive;
  }
  public putGcsArchive(value: LogsArchiveGcsArchive) {
    this._gcsArchive.internalValue = value;
  }
  public resetGcsArchive() {
    this._gcsArchive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsArchiveInput() {
    return this._gcsArchive.internalValue;
  }

  // s3_archive - computed: false, optional: true, required: false
  private _s3Archive = new LogsArchiveS3ArchiveOutputReference(this, "s3_archive");
  public get s3Archive() {
    return this._s3Archive;
  }
  public putS3Archive(value: LogsArchiveS3Archive) {
    this._s3Archive.internalValue = value;
  }
  public resetS3Archive() {
    this._s3Archive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ArchiveInput() {
    return this._s3Archive.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_tags: cdktf.booleanToTerraform(this._includeTags),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      rehydration_max_scan_size_in_gb: cdktf.numberToTerraform(this._rehydrationMaxScanSizeInGb),
      rehydration_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rehydrationTags),
      azure_archive: logsArchiveAzureArchiveToTerraform(this._azureArchive.internalValue),
      gcs_archive: logsArchiveGcsArchiveToTerraform(this._gcsArchive.internalValue),
      s3_archive: logsArchiveS3ArchiveToTerraform(this._s3Archive.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_tags: {
        value: cdktf.booleanToHclTerraform(this._includeTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      rehydration_max_scan_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._rehydrationMaxScanSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rehydration_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rehydrationTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      azure_archive: {
        value: logsArchiveAzureArchiveToHclTerraform(this._azureArchive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsArchiveAzureArchiveList",
      },
      gcs_archive: {
        value: logsArchiveGcsArchiveToHclTerraform(this._gcsArchive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsArchiveGcsArchiveList",
      },
      s3_archive: {
        value: logsArchiveS3ArchiveToHclTerraform(this._s3Archive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsArchiveS3ArchiveList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
