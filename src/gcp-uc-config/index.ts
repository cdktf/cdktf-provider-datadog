/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpUcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Google Cloud account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config#billing_account_id GcpUcConfig#billing_account_id}
  */
  readonly billingAccountId: string;
  /**
  * The Google Cloud bucket name used to store the Usage Cost export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config#bucket_name GcpUcConfig#bucket_name}
  */
  readonly bucketName: string;
  /**
  * The export dataset name used for the Google Cloud Usage Cost report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config#export_dataset_name GcpUcConfig#export_dataset_name}
  */
  readonly exportDatasetName: string;
  /**
  * The export prefix used for the Google Cloud Usage Cost report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config#export_prefix GcpUcConfig#export_prefix}
  */
  readonly exportPrefix?: string;
  /**
  * The name of the Google Cloud Usage Cost report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config#export_project_name GcpUcConfig#export_project_name}
  */
  readonly exportProjectName: string;
  /**
  * The unique Google Cloud service account email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config#service_account GcpUcConfig#service_account}
  */
  readonly serviceAccount: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config datadog_gcp_uc_config}
*/
export class GcpUcConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_gcp_uc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpUcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpUcConfig to import
  * @param importFromId The id of the existing GcpUcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpUcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_gcp_uc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.78.0/docs/resources/gcp_uc_config datadog_gcp_uc_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpUcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GcpUcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_gcp_uc_config',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.78.0',
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
    this._billingAccountId = config.billingAccountId;
    this._bucketName = config.bucketName;
    this._exportDatasetName = config.exportDatasetName;
    this._exportPrefix = config.exportPrefix;
    this._exportProjectName = config.exportProjectName;
    this._serviceAccount = config.serviceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account_id - computed: false, optional: false, required: true
  private _billingAccountId?: string; 
  public get billingAccountId() {
    return this.getStringAttribute('billing_account_id');
  }
  public set billingAccountId(value: string) {
    this._billingAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountIdInput() {
    return this._billingAccountId;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // error_messages - computed: true, optional: false, required: false
  public get errorMessages() {
    return this.getListAttribute('error_messages');
  }

  // export_dataset_name - computed: false, optional: false, required: true
  private _exportDatasetName?: string; 
  public get exportDatasetName() {
    return this.getStringAttribute('export_dataset_name');
  }
  public set exportDatasetName(value: string) {
    this._exportDatasetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportDatasetNameInput() {
    return this._exportDatasetName;
  }

  // export_prefix - computed: false, optional: true, required: false
  private _exportPrefix?: string; 
  public get exportPrefix() {
    return this.getStringAttribute('export_prefix');
  }
  public set exportPrefix(value: string) {
    this._exportPrefix = value;
  }
  public resetExportPrefix() {
    this._exportPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPrefixInput() {
    return this._exportPrefix;
  }

  // export_project_name - computed: false, optional: false, required: true
  private _exportProjectName?: string; 
  public get exportProjectName() {
    return this.getStringAttribute('export_project_name');
  }
  public set exportProjectName(value: string) {
    this._exportProjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportProjectNameInput() {
    return this._exportProjectName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getNumberAttribute('months');
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_updated_at - computed: true, optional: false, required: false
  public get statusUpdatedAt() {
    return this.getStringAttribute('status_updated_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_account_id: cdktf.stringToTerraform(this._billingAccountId),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      export_dataset_name: cdktf.stringToTerraform(this._exportDatasetName),
      export_prefix: cdktf.stringToTerraform(this._exportPrefix),
      export_project_name: cdktf.stringToTerraform(this._exportProjectName),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_account_id: {
        value: cdktf.stringToHclTerraform(this._billingAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_dataset_name: {
        value: cdktf.stringToHclTerraform(this._exportDatasetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_prefix: {
        value: cdktf.stringToHclTerraform(this._exportPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_project_name: {
        value: cdktf.stringToHclTerraform(this._exportProjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
