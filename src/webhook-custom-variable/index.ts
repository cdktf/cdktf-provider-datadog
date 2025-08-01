/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook_custom_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookCustomVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the custom variable is secret or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook_custom_variable#is_secret WebhookCustomVariable#is_secret}
  */
  readonly isSecret: boolean | cdktf.IResolvable;
  /**
  * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook_custom_variable#name WebhookCustomVariable#name}
  */
  readonly name: string;
  /**
  * The value of the custom variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook_custom_variable#value WebhookCustomVariable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook_custom_variable datadog_webhook_custom_variable}
*/
export class WebhookCustomVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_webhook_custom_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebhookCustomVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebhookCustomVariable to import
  * @param importFromId The id of the existing WebhookCustomVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook_custom_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookCustomVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_webhook_custom_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/webhook_custom_variable datadog_webhook_custom_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookCustomVariableConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookCustomVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_webhook_custom_variable',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.69.0',
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
    this._isSecret = config.isSecret;
    this._name = config.name;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_secret - computed: false, optional: false, required: true
  private _isSecret?: boolean | cdktf.IResolvable; 
  public get isSecret() {
    return this.getBooleanAttribute('is_secret');
  }
  public set isSecret(value: boolean | cdktf.IResolvable) {
    this._isSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecretInput() {
    return this._isSecret;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_secret: cdktf.booleanToTerraform(this._isSecret),
      name: cdktf.stringToTerraform(this._name),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_secret: {
        value: cdktf.booleanToHclTerraform(this._isSecret),
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
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
