// https://www.terraform.io/docs/providers/datadog/r/logs_archive.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsArchiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * To store the tags in the archive, set the value `true`. If it is set to `false`, the tags will be dropped when the logs are sent to the archive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#include_tags LogsArchive#include_tags}
  */
  readonly includeTags?: boolean | cdktf.IResolvable;
  /**
  * Your archive name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#name LogsArchive#name}
  */
  readonly name: string;
  /**
  * The archive query/filter. Logs matching this query are included in the archive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#query LogsArchive#query}
  */
  readonly query: string;
  /**
  * An array of tags to add to rehydrated logs from an archive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#rehydration_tags LogsArchive#rehydration_tags}
  */
  readonly rehydrationTags?: string[];
  /**
  * azure_archive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#azure_archive LogsArchive#azure_archive}
  */
  readonly azureArchive?: LogsArchiveAzureArchive;
  /**
  * gcs_archive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#gcs_archive LogsArchive#gcs_archive}
  */
  readonly gcsArchive?: LogsArchiveGcsArchive;
  /**
  * s3_archive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#s3_archive LogsArchive#s3_archive}
  */
  readonly s3Archive?: LogsArchiveS3Archive;
}
export interface LogsArchiveAzureArchive {
  /**
  * Your client id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#client_id LogsArchive#client_id}
  */
  readonly clientId: string;
  /**
  * The container where the archive will be stored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#container LogsArchive#container}
  */
  readonly container: string;
  /**
  * The path where the archive will be stored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#path LogsArchive#path}
  */
  readonly path?: string;
  /**
  * The associated storage account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#storage_account LogsArchive#storage_account}
  */
  readonly storageAccount: string;
  /**
  * Your tenant id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#tenant_id LogsArchive#tenant_id}
  */
  readonly tenantId: string;
}

function logsArchiveAzureArchiveToTerraform(struct?: LogsArchiveAzureArchiveOutputReference | LogsArchiveAzureArchive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class LogsArchiveAzureArchiveOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._clientId
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
    return this._container
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
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
    return this._storageAccount
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
    return this._tenantId
  }
}
export interface LogsArchiveGcsArchive {
  /**
  * Name of your GCS bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#bucket LogsArchive#bucket}
  */
  readonly bucket: string;
  /**
  * Your client email.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#client_email LogsArchive#client_email}
  */
  readonly clientEmail: string;
  /**
  * Path where the archive will be stored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#path LogsArchive#path}
  */
  readonly path: string;
  /**
  * Your project id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#project_id LogsArchive#project_id}
  */
  readonly projectId: string;
}

function logsArchiveGcsArchiveToTerraform(struct?: LogsArchiveGcsArchiveOutputReference | LogsArchiveGcsArchive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class LogsArchiveGcsArchiveOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._bucket
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
    return this._clientEmail
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
    return this._path
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }
}
export interface LogsArchiveS3Archive {
  /**
  * Your AWS account id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#account_id LogsArchive#account_id}
  */
  readonly accountId: string;
  /**
  * Name of your s3 bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#bucket LogsArchive#bucket}
  */
  readonly bucket: string;
  /**
  * Path where the archive will be stored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#path LogsArchive#path}
  */
  readonly path: string;
  /**
  * Your AWS role name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html#role_name LogsArchive#role_name}
  */
  readonly roleName: string;
}

function logsArchiveS3ArchiveToTerraform(struct?: LogsArchiveS3ArchiveOutputReference | LogsArchiveS3Archive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class LogsArchiveS3ArchiveOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._accountId
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
    return this._bucket
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
    return this._path
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
    return this._roleName
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html datadog_logs_archive}
*/
export class LogsArchive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_logs_archive";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_archive.html datadog_logs_archive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsArchiveConfig
  */
  public constructor(scope: Construct, id: string, config: LogsArchiveConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_archive',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._includeTags = config.includeTags;
    this._name = config.name;
    this._query = config.query;
    this._rehydrationTags = config.rehydrationTags;
    this._azureArchive = config.azureArchive;
    this._gcsArchive = config.gcsArchive;
    this._s3Archive = config.s3Archive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: boolean | cdktf.IResolvable | undefined; 
  public get includeTags() {
    return this.getBooleanAttribute('include_tags') as any;
  }
  public set includeTags(value: boolean | cdktf.IResolvable | undefined) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags
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
    return this._name
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
    return this._query
  }

  // rehydration_tags - computed: false, optional: true, required: false
  private _rehydrationTags?: string[] | undefined; 
  public get rehydrationTags() {
    return this.getListAttribute('rehydration_tags');
  }
  public set rehydrationTags(value: string[] | undefined) {
    this._rehydrationTags = value;
  }
  public resetRehydrationTags() {
    this._rehydrationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rehydrationTagsInput() {
    return this._rehydrationTags
  }

  // azure_archive - computed: false, optional: true, required: false
  private _azureArchive?: LogsArchiveAzureArchive | undefined; 
  private __azureArchiveOutput = new LogsArchiveAzureArchiveOutputReference(this as any, "azure_archive", true);
  public get azureArchive() {
    return this.__azureArchiveOutput;
  }
  public putAzureArchive(value: LogsArchiveAzureArchive | undefined) {
    this._azureArchive = value;
  }
  public resetAzureArchive() {
    this._azureArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureArchiveInput() {
    return this._azureArchive
  }

  // gcs_archive - computed: false, optional: true, required: false
  private _gcsArchive?: LogsArchiveGcsArchive | undefined; 
  private __gcsArchiveOutput = new LogsArchiveGcsArchiveOutputReference(this as any, "gcs_archive", true);
  public get gcsArchive() {
    return this.__gcsArchiveOutput;
  }
  public putGcsArchive(value: LogsArchiveGcsArchive | undefined) {
    this._gcsArchive = value;
  }
  public resetGcsArchive() {
    this._gcsArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsArchiveInput() {
    return this._gcsArchive
  }

  // s3_archive - computed: false, optional: true, required: false
  private _s3Archive?: LogsArchiveS3Archive | undefined; 
  private __s3ArchiveOutput = new LogsArchiveS3ArchiveOutputReference(this as any, "s3_archive", true);
  public get s3Archive() {
    return this.__s3ArchiveOutput;
  }
  public putS3Archive(value: LogsArchiveS3Archive | undefined) {
    this._s3Archive = value;
  }
  public resetS3Archive() {
    this._s3Archive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ArchiveInput() {
    return this._s3Archive
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_tags: cdktf.booleanToTerraform(this._includeTags),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      rehydration_tags: cdktf.listMapper(cdktf.stringToTerraform)(this._rehydrationTags),
      azure_archive: logsArchiveAzureArchiveToTerraform(this._azureArchive),
      gcs_archive: logsArchiveGcsArchiveToTerraform(this._gcsArchive),
      s3_archive: logsArchiveS3ArchiveToTerraform(this._s3Archive),
    };
  }
}
