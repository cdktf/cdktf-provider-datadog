/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppBuilderAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * If specified, this will override the Action Connection IDs for the specified Action Query Names in the App JSON. Otherwise, a map of the App's Action Query Names to Action Connection IDs will be returned in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app#action_query_names_to_connection_ids AppBuilderApp#action_query_names_to_connection_ids}
  */
  readonly actionQueryNamesToConnectionIds?: { [key: string]: string };
  /**
  * The JSON representation of the App. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app#app_json AppBuilderApp#app_json}
  */
  readonly appJson: string;
  /**
  * If specified, this will override the human-readable description of the App in the App JSON. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app#description AppBuilderApp#description}
  */
  readonly description?: string;
  /**
  * If specified, this will override the name of the App in the App JSON. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app#name AppBuilderApp#name}
  */
  readonly name?: string;
  /**
  * Set the app to published or unpublished. Published apps are available to other users. To ensure the app is accessible to the correct users, you also need to set a [Restriction Policy](https://docs.datadoghq.com/api/latest/restriction-policies/) on the app if a policy does not yet exist. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app#published AppBuilderApp#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * The name of the root component of the app. This must be a grid component that contains all other components. If specified, this will override the root instance name of the App in the App JSON. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app#root_instance_name AppBuilderApp#root_instance_name}
  */
  readonly rootInstanceName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app datadog_app_builder_app}
*/
export class AppBuilderApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_app_builder_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppBuilderApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppBuilderApp to import
  * @param importFromId The id of the existing AppBuilderApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppBuilderApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_app_builder_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/app_builder_app datadog_app_builder_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppBuilderAppConfig
  */
  public constructor(scope: Construct, id: string, config: AppBuilderAppConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_app_builder_app',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.59.0',
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
    this._actionQueryNamesToConnectionIds = config.actionQueryNamesToConnectionIds;
    this._appJson = config.appJson;
    this._description = config.description;
    this._name = config.name;
    this._published = config.published;
    this._rootInstanceName = config.rootInstanceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_query_names_to_connection_ids - computed: true, optional: true, required: false
  private _actionQueryNamesToConnectionIds?: { [key: string]: string }; 
  public get actionQueryNamesToConnectionIds() {
    return this.getStringMapAttribute('action_query_names_to_connection_ids');
  }
  public set actionQueryNamesToConnectionIds(value: { [key: string]: string }) {
    this._actionQueryNamesToConnectionIds = value;
  }
  public resetActionQueryNamesToConnectionIds() {
    this._actionQueryNamesToConnectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionQueryNamesToConnectionIdsInput() {
    return this._actionQueryNamesToConnectionIds;
  }

  // app_json - computed: false, optional: false, required: true
  private _appJson?: string; 
  public get appJson() {
    return this.getStringAttribute('app_json');
  }
  public set appJson(value: string) {
    this._appJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appJsonInput() {
    return this._appJson;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // published - computed: true, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // root_instance_name - computed: true, optional: true, required: false
  private _rootInstanceName?: string; 
  public get rootInstanceName() {
    return this.getStringAttribute('root_instance_name');
  }
  public set rootInstanceName(value: string) {
    this._rootInstanceName = value;
  }
  public resetRootInstanceName() {
    this._rootInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootInstanceNameInput() {
    return this._rootInstanceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_query_names_to_connection_ids: cdktf.hashMapper(cdktf.stringToTerraform)(this._actionQueryNamesToConnectionIds),
      app_json: cdktf.stringToTerraform(this._appJson),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      published: cdktf.booleanToTerraform(this._published),
      root_instance_name: cdktf.stringToTerraform(this._rootInstanceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_query_names_to_connection_ids: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._actionQueryNamesToConnectionIds),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      app_json: {
        value: cdktf.stringToHclTerraform(this._appJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published: {
        value: cdktf.booleanToHclTerraform(this._published),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_instance_name: {
        value: cdktf.stringToHclTerraform(this._rootInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
