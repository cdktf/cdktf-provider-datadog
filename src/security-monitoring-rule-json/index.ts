/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/security_monitoring_rule_json
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringRuleJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON definition of the Security Monitoring Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/security_monitoring_rule_json#json SecurityMonitoringRuleJson#json}
  */
  readonly json: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/security_monitoring_rule_json datadog_security_monitoring_rule_json}
*/
export class SecurityMonitoringRuleJson extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_rule_json";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityMonitoringRuleJson resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringRuleJson to import
  * @param importFromId The id of the existing SecurityMonitoringRuleJson that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/security_monitoring_rule_json#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringRuleJson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_rule_json", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/security_monitoring_rule_json datadog_security_monitoring_rule_json} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringRuleJsonConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringRuleJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_rule_json',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.67.0',
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
    this._json = config.json;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json - computed: false, optional: false, required: true
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      json: cdktf.stringToTerraform(this._json),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      json: {
        value: cdktf.stringToHclTerraform(this._json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
