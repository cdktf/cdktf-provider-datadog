/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/software_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SoftwareCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The catalog entity definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/software_catalog#entity SoftwareCatalog#entity}
  */
  readonly entity: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/software_catalog datadog_software_catalog}
*/
export class SoftwareCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_software_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SoftwareCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SoftwareCatalog to import
  * @param importFromId The id of the existing SoftwareCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/software_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SoftwareCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_software_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/software_catalog datadog_software_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SoftwareCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: SoftwareCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_software_catalog',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.48.1',
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
    this._entity = config.entity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity - computed: false, optional: false, required: true
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity: cdktf.stringToTerraform(this._entity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity: {
        value: cdktf.stringToHclTerraform(this._entity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
