/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/apm_retention_filter_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmRetentionFilterOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The filter IDs list. The order of filters IDs in this attribute defines the overall APM retention filters order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/apm_retention_filter_order#filter_ids ApmRetentionFilterOrder#filter_ids}
  */
  readonly filterIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/apm_retention_filter_order datadog_apm_retention_filter_order}
*/
export class ApmRetentionFilterOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_apm_retention_filter_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmRetentionFilterOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmRetentionFilterOrder to import
  * @param importFromId The id of the existing ApmRetentionFilterOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/apm_retention_filter_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmRetentionFilterOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_apm_retention_filter_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/apm_retention_filter_order datadog_apm_retention_filter_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmRetentionFilterOrderConfig
  */
  public constructor(scope: Construct, id: string, config: ApmRetentionFilterOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_apm_retention_filter_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.44.0',
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
    this._filterIds = config.filterIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_ids - computed: false, optional: false, required: true
  private _filterIds?: string[]; 
  public get filterIds() {
    return this.getListAttribute('filter_ids');
  }
  public set filterIds(value: string[]) {
    this._filterIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdsInput() {
    return this._filterIds;
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
      filter_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
