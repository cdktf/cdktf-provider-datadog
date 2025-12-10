/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogServiceAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, `filter` string is exact matched against the user's `email`, followed by `name` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account#exact_match DataDatadogServiceAccount#exact_match}
  */
  readonly exactMatch?: boolean | cdktf.IResolvable;
  /**
  * Filter all users and service accounts by name, email, or role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account#filter DataDatadogServiceAccount#filter}
  */
  readonly filter?: string;
  /**
  * Filter on status attribute. Comma separated list, with possible values `Active`, `Pending`, and `Disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account#filter_status DataDatadogServiceAccount#filter_status}
  */
  readonly filterStatus?: string;
  /**
  * The service account's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account#id DataDatadogServiceAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account datadog_service_account}
*/
export class DataDatadogServiceAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_service_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogServiceAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogServiceAccount to import
  * @param importFromId The id of the existing DataDatadogServiceAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogServiceAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_service_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/service_account datadog_service_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogServiceAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogServiceAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_account',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.82.0',
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
    this._exactMatch = config.exactMatch;
    this._filter = config.filter;
    this._filterStatus = config.filterStatus;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: boolean | cdktf.IResolvable; 
  public get exactMatch() {
    return this.getBooleanAttribute('exact_match');
  }
  public set exactMatch(value: boolean | cdktf.IResolvable) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_status - computed: false, optional: true, required: false
  private _filterStatus?: string; 
  public get filterStatus() {
    return this.getStringAttribute('filter_status');
  }
  public set filterStatus(value: string) {
    this._filterStatus = value;
  }
  public resetFilterStatus() {
    this._filterStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterStatusInput() {
    return this._filterStatus;
  }

  // handle - computed: true, optional: false, required: false
  public get handle() {
    return this.getStringAttribute('handle');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exact_match: cdktf.booleanToTerraform(this._exactMatch),
      filter: cdktf.stringToTerraform(this._filter),
      filter_status: cdktf.stringToTerraform(this._filterStatus),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exact_match: {
        value: cdktf.booleanToHclTerraform(this._exactMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_status: {
        value: cdktf.stringToHclTerraform(this._filterStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
