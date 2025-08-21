/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/permissions#id DataDatadogPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to include restricted permissions. Restricted permissions are granted by default to all users of a Datadog org, and cannot be manually granted or revoked. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/permissions#include_restricted DataDatadogPermissions#include_restricted}
  */
  readonly includeRestricted?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/permissions datadog_permissions}
*/
export class DataDatadogPermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogPermissions to import
  * @param importFromId The id of the existing DataDatadogPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.72.0/docs/data-sources/permissions datadog_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogPermissionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogPermissionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_permissions',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.72.0',
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
    this._includeRestricted = config.includeRestricted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // include_restricted - computed: false, optional: true, required: false
  private _includeRestricted?: boolean | cdktf.IResolvable; 
  public get includeRestricted() {
    return this.getBooleanAttribute('include_restricted');
  }
  public set includeRestricted(value: boolean | cdktf.IResolvable) {
    this._includeRestricted = value;
  }
  public resetIncludeRestricted() {
    this._includeRestricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRestrictedInput() {
    return this._includeRestricted;
  }

  // permissions - computed: true, optional: false, required: false
  private _permissions = new cdktf.StringMap(this, "permissions");
  public get permissions() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_restricted: cdktf.booleanToTerraform(this._includeRestricted),
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
      include_restricted: {
        value: cdktf.booleanToHclTerraform(this._includeRestricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
