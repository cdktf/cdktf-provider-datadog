// https://www.terraform.io/docs/providers/datadog/d/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter all users by the given string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/user#filter DataDatadogUser#filter}
  */
  readonly filter: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/user datadog_user}
*/
export class DataDatadogUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/user datadog_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogUserConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_user',
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
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
    };
  }
}
