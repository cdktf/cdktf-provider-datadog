// https://www.terraform.io/docs/providers/datadog/r/logs_index_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsIndexOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The index resource list. Logs are tested against the query filter of each index one by one following the order of the list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index_order#indexes LogsIndexOrder#indexes}
  */
  readonly indexes: string[];
  /**
  * The unique name of the index order resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index_order#name LogsIndexOrder#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_index_order datadog_logs_index_order}
*/
export class LogsIndexOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_index_order";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_index_order datadog_logs_index_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsIndexOrderConfig
  */
  public constructor(scope: Construct, id: string, config: LogsIndexOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_index_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.11.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._indexes = config.indexes;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // indexes - computed: false, optional: false, required: true
  private _indexes?: string[]; 
  public get indexes() {
    return this.getListAttribute('indexes');
  }
  public set indexes(value: string[]) {
    this._indexes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      indexes: cdktf.listMapper(cdktf.stringToTerraform)(this._indexes),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
