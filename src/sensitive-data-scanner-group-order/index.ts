/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/sensitive_data_scanner_group_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SensitiveDataScannerGroupOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of Sensitive Data Scanner group IDs, in order. Logs are tested against the query filter of each index one by one following the order of the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/sensitive_data_scanner_group_order#group_ids SensitiveDataScannerGroupOrder#group_ids}
  */
  readonly groupIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order}
*/
export class SensitiveDataScannerGroupOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_sensitive_data_scanner_group_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SensitiveDataScannerGroupOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SensitiveDataScannerGroupOrder to import
  * @param importFromId The id of the existing SensitiveDataScannerGroupOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/sensitive_data_scanner_group_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SensitiveDataScannerGroupOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_sensitive_data_scanner_group_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.44.0/docs/resources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SensitiveDataScannerGroupOrderConfig
  */
  public constructor(scope: Construct, id: string, config: SensitiveDataScannerGroupOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_sensitive_data_scanner_group_order',
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
    this._groupIds = config.groupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
