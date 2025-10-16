/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON formatted definition of the Dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json#dashboard DashboardJson#dashboard}
  */
  readonly dashboard: string;
  /**
  * A list of dashboard lists this dashboard belongs to. This attribute should not be set if managing the corresponding dashboard lists using Terraform as it causes inconsistent behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json#dashboard_lists DashboardJson#dashboard_lists}
  */
  readonly dashboardLists?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json#id DashboardJson#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json#url DashboardJson#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json datadog_dashboard_json}
*/
export class DashboardJson extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_dashboard_json";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardJson resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardJson to import
  * @param importFromId The id of the existing DashboardJson that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardJson to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_dashboard_json", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.76.0/docs/resources/dashboard_json datadog_dashboard_json} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardJsonConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_dashboard_json',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.76.0',
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
    this._dashboard = config.dashboard;
    this._dashboardLists = config.dashboardLists;
    this._id = config.id;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard - computed: false, optional: false, required: true
  private _dashboard?: string; 
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }
  public set dashboard(value: string) {
    this._dashboard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // dashboard_lists - computed: false, optional: true, required: false
  private _dashboardLists?: number[]; 
  public get dashboardLists() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dashboard_lists')));
  }
  public set dashboardLists(value: number[]) {
    this._dashboardLists = value;
  }
  public resetDashboardLists() {
    this._dashboardLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardListsInput() {
    return this._dashboardLists;
  }

  // dashboard_lists_removed - computed: true, optional: false, required: false
  public get dashboardListsRemoved() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dashboard_lists_removed')));
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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard: cdktf.stringToTerraform(this._dashboard),
      dashboard_lists: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dashboardLists),
      id: cdktf.stringToTerraform(this._id),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard: {
        value: cdktf.stringToHclTerraform(this._dashboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_lists: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dashboardLists),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
