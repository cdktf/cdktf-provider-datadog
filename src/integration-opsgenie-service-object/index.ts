/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationOpsgenieServiceObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The custom url for a custom region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object#custom_url IntegrationOpsgenieServiceObject#custom_url}
  */
  readonly customUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for the Opsgenie service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object#name IntegrationOpsgenieServiceObject#name}
  */
  readonly name: string;
  /**
  * The Opsgenie API key for the Opsgenie service. Note: Since the Datadog API never returns Opsgenie API keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object#opsgenie_api_key IntegrationOpsgenieServiceObject#opsgenie_api_key}
  */
  readonly opsgenieApiKey: string;
  /**
  * The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object#region IntegrationOpsgenieServiceObject#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object datadog_integration_opsgenie_service_object}
*/
export class IntegrationOpsgenieServiceObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_opsgenie_service_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationOpsgenieServiceObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationOpsgenieServiceObject to import
  * @param importFromId The id of the existing IntegrationOpsgenieServiceObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationOpsgenieServiceObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_opsgenie_service_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/resources/integration_opsgenie_service_object datadog_integration_opsgenie_service_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationOpsgenieServiceObjectConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationOpsgenieServiceObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_opsgenie_service_object',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.33.0',
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
    this._customUrl = config.customUrl;
    this._id = config.id;
    this._name = config.name;
    this._opsgenieApiKey = config.opsgenieApiKey;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_url - computed: false, optional: true, required: false
  private _customUrl?: string; 
  public get customUrl() {
    return this.getStringAttribute('custom_url');
  }
  public set customUrl(value: string) {
    this._customUrl = value;
  }
  public resetCustomUrl() {
    this._customUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlInput() {
    return this._customUrl;
  }

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

  // opsgenie_api_key - computed: false, optional: false, required: true
  private _opsgenieApiKey?: string; 
  public get opsgenieApiKey() {
    return this.getStringAttribute('opsgenie_api_key');
  }
  public set opsgenieApiKey(value: string) {
    this._opsgenieApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieApiKeyInput() {
    return this._opsgenieApiKey;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_url: cdktf.stringToTerraform(this._customUrl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      opsgenie_api_key: cdktf.stringToTerraform(this._opsgenieApiKey),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
