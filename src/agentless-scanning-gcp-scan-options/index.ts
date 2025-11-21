/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/agentless_scanning_gcp_scan_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentlessScanningGcpScanOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GCP project ID for which agentless scanning is configured. Must be a valid GCP project ID: 6–30 characters, start with a lowercase letter, and include only lowercase letters, digits, or hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/agentless_scanning_gcp_scan_options#gcp_project_id AgentlessScanningGcpScanOptions#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * Indicates if scanning for vulnerabilities in containers is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_containers_os AgentlessScanningGcpScanOptions#vuln_containers_os}
  */
  readonly vulnContainersOs: boolean | cdktf.IResolvable;
  /**
  * Indicates if scanning for vulnerabilities in hosts is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_host_os AgentlessScanningGcpScanOptions#vuln_host_os}
  */
  readonly vulnHostOs: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/agentless_scanning_gcp_scan_options datadog_agentless_scanning_gcp_scan_options}
*/
export class AgentlessScanningGcpScanOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_agentless_scanning_gcp_scan_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentlessScanningGcpScanOptions to import
  * @param importFromId The id of the existing AgentlessScanningGcpScanOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/agentless_scanning_gcp_scan_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentlessScanningGcpScanOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_agentless_scanning_gcp_scan_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/agentless_scanning_gcp_scan_options datadog_agentless_scanning_gcp_scan_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentlessScanningGcpScanOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: AgentlessScanningGcpScanOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_agentless_scanning_gcp_scan_options',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.81.0',
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
    this._gcpProjectId = config.gcpProjectId;
    this._vulnContainersOs = config.vulnContainersOs;
    this._vulnHostOs = config.vulnHostOs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vuln_containers_os - computed: false, optional: false, required: true
  private _vulnContainersOs?: boolean | cdktf.IResolvable; 
  public get vulnContainersOs() {
    return this.getBooleanAttribute('vuln_containers_os');
  }
  public set vulnContainersOs(value: boolean | cdktf.IResolvable) {
    this._vulnContainersOs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnContainersOsInput() {
    return this._vulnContainersOs;
  }

  // vuln_host_os - computed: false, optional: false, required: true
  private _vulnHostOs?: boolean | cdktf.IResolvable; 
  public get vulnHostOs() {
    return this.getBooleanAttribute('vuln_host_os');
  }
  public set vulnHostOs(value: boolean | cdktf.IResolvable) {
    this._vulnHostOs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnHostOsInput() {
    return this._vulnHostOs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      vuln_containers_os: cdktf.booleanToTerraform(this._vulnContainersOs),
      vuln_host_os: cdktf.booleanToTerraform(this._vulnHostOs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vuln_containers_os: {
        value: cdktf.booleanToHclTerraform(this._vulnContainersOs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_host_os: {
        value: cdktf.booleanToHclTerraform(this._vulnHostOs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
