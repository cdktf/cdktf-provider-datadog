// https://www.terraform.io/docs/providers/datadog/r/dashboard_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Dashboard List
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_list.html#name DashboardList#name}
  */
  readonly name: string;
  /**
  * dash_item block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_list.html#dash_item DashboardList#dash_item}
  */
  readonly dashItem?: DashboardListDashItem[];
}
export interface DashboardListDashItem {
  /**
  * The ID of the dashboard to add
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_list.html#dash_id DashboardList#dash_id}
  */
  readonly dashId: string;
  /**
  * The type of this dashboard. Valid values are `custom_timeboard`, `custom_screenboard`, `integration_screenboard`, `integration_timeboard`, `host_timeboard`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_list.html#type DashboardList#type}
  */
  readonly type: string;
}

export function dashboardListDashItemToTerraform(struct?: DashboardListDashItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash_id: cdktf.stringToTerraform(struct!.dashId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_list.html datadog_dashboard_list}
*/
export class DashboardList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_dashboard_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/dashboard_list.html datadog_dashboard_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardListConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardListConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_dashboard_list',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._dashItem = config.dashItem;
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

  // dash_item - computed: false, optional: true, required: false
  private _dashItem?: DashboardListDashItem[]; 
  public get dashItem() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dash_item') as any;
  }
  public set dashItem(value: DashboardListDashItem[]) {
    this._dashItem = value;
  }
  public resetDashItem() {
    this._dashItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashItemInput() {
    return this._dashItem;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      dash_item: cdktf.listMapper(dashboardListDashItemToTerraform)(this._dashItem),
    };
  }
}
