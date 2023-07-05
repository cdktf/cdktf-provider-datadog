// https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/integration_confluent_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConfluentAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API key associated with your Confluent account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/integration_confluent_account#api_key IntegrationConfluentAccount#api_key}
  */
  readonly apiKey: string;
  /**
  * The API secret associated with your Confluent account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/integration_confluent_account#api_secret IntegrationConfluentAccount#api_secret}
  */
  readonly apiSecret: string;
  /**
  * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/integration_confluent_account#tags IntegrationConfluentAccount#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/integration_confluent_account datadog_integration_confluent_account}
*/
export class IntegrationConfluentAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_confluent_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/integration_confluent_account datadog_integration_confluent_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConfluentAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConfluentAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_confluent_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.27.0',
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
    this._apiSecret = config.apiSecret;
    this._tags = config.tags;
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

  // api_secret - computed: false, optional: false, required: true
  private _apiSecret?: string; 
  public get apiSecret() {
    return this.getStringAttribute('api_secret');
  }
  public set apiSecret(value: string) {
    this._apiSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
