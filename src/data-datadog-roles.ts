// https://www.terraform.io/docs/providers/datadog/d/roles.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter all roles by the given string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/roles.html#filter DataDatadogRoles#filter}
  */
  readonly filter?: string;
}
export class DataDatadogRolesRoles extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/roles.html datadog_roles}
*/
export class DataDatadogRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_roles";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/roles.html datadog_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogRolesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogRolesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_roles',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string | undefined; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string | undefined) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // roles - computed: true, optional: false, required: false
  public roles(index: string) {
    return new DataDatadogRolesRoles(this, 'roles', index);
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
