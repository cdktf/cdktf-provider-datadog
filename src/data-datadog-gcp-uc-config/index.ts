/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/gcp_uc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogGcpUcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Datadog cloud account ID for the GCP Usage Cost configuration you want to retrieve information about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/gcp_uc_config#cloud_account_id DataDatadogGcpUcConfig#cloud_account_id}
  */
  readonly cloudAccountId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/gcp_uc_config datadog_gcp_uc_config}
*/
export class DataDatadogGcpUcConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_gcp_uc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogGcpUcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogGcpUcConfig to import
  * @param importFromId The id of the existing DataDatadogGcpUcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/gcp_uc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogGcpUcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_gcp_uc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/data-sources/gcp_uc_config datadog_gcp_uc_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogGcpUcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogGcpUcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_gcp_uc_config',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.80.0',
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
    this._cloudAccountId = config.cloudAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: number; 
  public get cloudAccountId() {
    return this.getNumberAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: number) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
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

  // export_prefix - computed: true, optional: false, required: false
  public get exportPrefix() {
    return this.getStringAttribute('export_prefix');
  }

  // export_project_name - computed: true, optional: false, required: false
  public get exportProjectName() {
    return this.getStringAttribute('export_project_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // months - computed: true, optional: false, required: false
  public get months() {
    return this.getNumberAttribute('months');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
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
      cloud_account_id: cdktf.numberToTerraform(this._cloudAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktf.numberToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
