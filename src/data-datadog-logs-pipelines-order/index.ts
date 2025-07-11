/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/data-sources/logs_pipelines_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogLogsPipelinesOrderConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/data-sources/logs_pipelines_order datadog_logs_pipelines_order}
*/
export class DataDatadogLogsPipelinesOrder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_pipelines_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogLogsPipelinesOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogLogsPipelinesOrder to import
  * @param importFromId The id of the existing DataDatadogLogsPipelinesOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/data-sources/logs_pipelines_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogLogsPipelinesOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_pipelines_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/data-sources/logs_pipelines_order datadog_logs_pipelines_order} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogLogsPipelinesOrderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogLogsPipelinesOrderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_pipelines_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.67.0',
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pipeline_ids - computed: true, optional: false, required: false
  public get pipelineIds() {
    return this.getListAttribute('pipeline_ids');
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
