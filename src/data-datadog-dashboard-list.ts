// https://www.terraform.io/docs/providers/datadog/d/dashboard_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogDashboardListConfig extends cdktf.TerraformMetaArguments {
  /**
  * A dashboard list name to limit the search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/dashboard_list#name DataDatadogDashboardList#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/dashboard_list datadog_dashboard_list}
*/
export class DataDatadogDashboardList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_dashboard_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/dashboard_list datadog_dashboard_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogDashboardListConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogDashboardListConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_dashboard_list',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.10.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
