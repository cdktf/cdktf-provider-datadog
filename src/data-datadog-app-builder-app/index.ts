/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/app_builder_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogAppBuilderAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID for the App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/app_builder_app#id DataDatadogAppBuilderApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/app_builder_app datadog_app_builder_app}
*/
export class DataDatadogAppBuilderApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_app_builder_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogAppBuilderApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogAppBuilderApp to import
  * @param importFromId The id of the existing DataDatadogAppBuilderApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/app_builder_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogAppBuilderApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_app_builder_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/app_builder_app datadog_app_builder_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogAppBuilderAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogAppBuilderAppConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_app_builder_app',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_query_names_to_connection_ids - computed: true, optional: false, required: false
  private _actionQueryNamesToConnectionIds = new cdktf.StringMap(this, "action_query_names_to_connection_ids");
  public get actionQueryNamesToConnectionIds() {
    return this._actionQueryNamesToConnectionIds;
  }

  // app_json - computed: true, optional: false, required: false
  public get appJson() {
    return this.getStringAttribute('app_json');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // published - computed: true, optional: false, required: false
  public get published() {
    return this.getBooleanAttribute('published');
  }

  // root_instance_name - computed: true, optional: false, required: false
  public get rootInstanceName() {
    return this.getStringAttribute('root_instance_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
