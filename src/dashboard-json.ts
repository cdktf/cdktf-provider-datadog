// https://www.terraform.io/docs/providers/datadog/r/dashboard_json.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardJsonConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON formatted definition of the Dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_json.html#dashboard DashboardJson#dashboard}
  */
  readonly dashboard: string;
  /**
  * The list of dashboard lists this dashboard belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_json.html#dashboard_lists DashboardJson#dashboard_lists}
  */
  readonly dashboardLists?: number[];
  /**
  * The URL of the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_json.html#url DashboardJson#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_json.html datadog_dashboard_json}
*/
export class DashboardJson extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_dashboard_json";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_json.html datadog_dashboard_json} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardJsonConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardJsonConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_dashboard_json',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dashboard = config.dashboard;
    this._dashboardLists = config.dashboardLists;
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dashboard_lists') as any;
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dashboard_lists_removed') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      dashboard_lists: cdktf.listMapper(cdktf.numberToTerraform)(this._dashboardLists),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
