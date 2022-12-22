// https://www.terraform.io/docs/providers/datadog/d/logs_indexes_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogLogsIndexesOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/logs_indexes_order#id DataDatadogLogsIndexesOrder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
        providerVersion: '3.19.0',
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

  // index_names - computed: true, optional: false, required: false
  public get indexNames() {
    return this.getListAttribute('index_names');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
