// https://www.terraform.io/docs/providers/datadog/r/authn_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthnMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identity provider key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/authn_mapping#key AuthnMapping#key}
  */
  readonly key: string;
  /**
  * The ID of a role to attach to all users with the corresponding key and value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/authn_mapping#role AuthnMapping#role}
  */
  readonly role: string;
  /**
  * Identity provider value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/authn_mapping#value AuthnMapping#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/authn_mapping datadog_authn_mapping}
*/
export class AuthnMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_authn_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/authn_mapping datadog_authn_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthnMappingConfig
  */
  public constructor(scope: Construct, id: string, config: AuthnMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_authn_mapping',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.10.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._key = config.key;
    this._role = config.role;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
      key: cdktf.stringToTerraform(this._key),
      role: cdktf.stringToTerraform(this._role),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
