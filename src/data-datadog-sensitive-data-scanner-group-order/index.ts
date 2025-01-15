/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/sensitive_data_scanner_group_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogSensitiveDataScannerGroupOrderConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order}
*/
export class DataDatadogSensitiveDataScannerGroupOrder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_sensitive_data_scanner_group_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogSensitiveDataScannerGroupOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogSensitiveDataScannerGroupOrder to import
  * @param importFromId The id of the existing DataDatadogSensitiveDataScannerGroupOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/sensitive_data_scanner_group_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogSensitiveDataScannerGroupOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_sensitive_data_scanner_group_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/data-sources/sensitive_data_scanner_group_order datadog_sensitive_data_scanner_group_order} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSensitiveDataScannerGroupOrderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSensitiveDataScannerGroupOrderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_sensitive_data_scanner_group_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.52.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return this.getListAttribute('group_ids');
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
