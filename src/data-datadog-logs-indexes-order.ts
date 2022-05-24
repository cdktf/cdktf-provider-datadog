// https://www.terraform.io/docs/providers/datadog/d/logs_indexes_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogLogsIndexesOrderConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/logs_indexes_order datadog_logs_indexes_order}
*/
export class DataDatadogLogsIndexesOrder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_indexes_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/logs_indexes_order datadog_logs_indexes_order} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogLogsIndexesOrderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogLogsIndexesOrderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_indexes_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.12.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_names - computed: true, optional: false, required: false
  public get indexNames() {
    return this.getListAttribute('index_names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
