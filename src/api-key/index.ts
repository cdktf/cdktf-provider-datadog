/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name for API Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/api_key#name ApiKey#name}
  */
  readonly name: string;
  /**
  * Whether the API key is used for remote config. Set to true only if remote config is enabled in `/organization-settings/remote-config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/api_key#remote_config_read_enabled ApiKey#remote_config_read_enabled}
  */
  readonly remoteConfigReadEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/api_key datadog_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/api_key datadog_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_api_key',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.73.0',
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
    this._name = config.name;
    this._remoteConfigReadEnabled = config.remoteConfigReadEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // remote_config_read_enabled - computed: true, optional: true, required: false
  private _remoteConfigReadEnabled?: boolean | cdktf.IResolvable; 
  public get remoteConfigReadEnabled() {
    return this.getBooleanAttribute('remote_config_read_enabled');
  }
  public set remoteConfigReadEnabled(value: boolean | cdktf.IResolvable) {
    this._remoteConfigReadEnabled = value;
  }
  public resetRemoteConfigReadEnabled() {
    this._remoteConfigReadEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteConfigReadEnabledInput() {
    return this._remoteConfigReadEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      remote_config_read_enabled: cdktf.booleanToTerraform(this._remoteConfigReadEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_config_read_enabled: {
        value: cdktf.booleanToHclTerraform(this._remoteConfigReadEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
