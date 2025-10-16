/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AgentlessScanningAwsScanOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options#aws_account_id AgentlessScanningAwsScanOptions#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * Indicates if scanning of Lambda functions is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options#lambda AgentlessScanningAwsScanOptions#lambda}
  */
  readonly lambda: boolean | cdktf.IResolvable;
  /**
  * Indicates if scanning for sensitive data is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options#sensitive_data AgentlessScanningAwsScanOptions#sensitive_data}
  */
  readonly sensitiveData: boolean | cdktf.IResolvable;
  /**
  * Indicates if scanning for vulnerabilities in containers is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options#vuln_containers_os AgentlessScanningAwsScanOptions#vuln_containers_os}
  */
  readonly vulnContainersOs: boolean | cdktf.IResolvable;
  /**
  * Indicates if scanning for vulnerabilities in hosts is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options#vuln_host_os AgentlessScanningAwsScanOptions#vuln_host_os}
  */
  readonly vulnHostOs: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options datadog_agentless_scanning_aws_scan_options}
*/
export class AgentlessScanningAwsScanOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_agentless_scanning_aws_scan_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentlessScanningAwsScanOptions to import
  * @param importFromId The id of the existing AgentlessScanningAwsScanOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentlessScanningAwsScanOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_agentless_scanning_aws_scan_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/agentless_scanning_aws_scan_options datadog_agentless_scanning_aws_scan_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentlessScanningAwsScanOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: AgentlessScanningAwsScanOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_agentless_scanning_aws_scan_options',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.76.0',
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
    this._awsAccountId = config.awsAccountId;
    this._lambda = config.lambda;
    this._sensitiveData = config.sensitiveData;
    this._vulnContainersOs = config.vulnContainersOs;
    this._vulnHostOs = config.vulnHostOs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lambda - computed: false, optional: false, required: true
  private _lambda?: boolean | cdktf.IResolvable; 
  public get lambda() {
    return this.getBooleanAttribute('lambda');
  }
  public set lambda(value: boolean | cdktf.IResolvable) {
    this._lambda = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda;
  }

  // sensitive_data - computed: false, optional: false, required: true
  private _sensitiveData?: boolean | cdktf.IResolvable; 
  public get sensitiveData() {
    return this.getBooleanAttribute('sensitive_data');
  }
  public set sensitiveData(value: boolean | cdktf.IResolvable) {
    this._sensitiveData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataInput() {
    return this._sensitiveData;
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
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      lambda: cdktf.booleanToTerraform(this._lambda),
      sensitive_data: cdktf.booleanToTerraform(this._sensitiveData),
      vuln_containers_os: cdktf.booleanToTerraform(this._vulnContainersOs),
      vuln_host_os: cdktf.booleanToTerraform(this._vulnHostOs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda: {
        value: cdktf.booleanToHclTerraform(this._lambda),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sensitive_data: {
        value: cdktf.booleanToHclTerraform(this._sensitiveData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
