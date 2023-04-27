// https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_cloudflare_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationCloudflareAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API key (or token) for the Cloudflare account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_cloudflare_account#api_key IntegrationCloudflareAccount#api_key}
  */
  readonly apiKey: string;
  /**
  * The email associated with the Cloudflare account. If an API key is provided (and not a token), this field is also required.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_cloudflare_account#email IntegrationCloudflareAccount#email}
  */
  readonly email?: string;
  /**
  * The name of the Cloudflare account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_cloudflare_account#name IntegrationCloudflareAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_cloudflare_account datadog_integration_cloudflare_account}
*/
export class IntegrationCloudflareAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_cloudflare_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/integration_cloudflare_account datadog_integration_cloudflare_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationCloudflareAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationCloudflareAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_cloudflare_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.24.0',
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
    this._apiKey = config.apiKey;
    this._email = config.email;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
