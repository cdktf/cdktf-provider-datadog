// https://www.terraform.io/docs/providers/datadog/r/webhook_custom_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookCustomVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the custom variable is secret or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook_custom_variable#is_secret WebhookCustomVariable#is_secret}
  */
  readonly isSecret: boolean | cdktf.IResolvable;
  /**
  * The name of the variable. It corresponds with `<CUSTOM_VARIABLE_NAME>`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook_custom_variable#name WebhookCustomVariable#name}
  */
  readonly name: string;
  /**
  * The value of the custom variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/webhook_custom_variable#value WebhookCustomVariable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/webhook_custom_variable datadog_webhook_custom_variable}
*/
export class WebhookCustomVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_webhook_custom_variable";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/webhook_custom_variable datadog_webhook_custom_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookCustomVariableConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookCustomVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_webhook_custom_variable',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._isSecret = config.isSecret;
    this._name = config.name;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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
}
