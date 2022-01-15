// generated from terraform resource schema

import { DashboardTemplateVariable, 
DashboardTemplateVariablePreset, 
DashboardWidget} from './dashboard-structs'
import { dashboardTemplateVariableToTerraform, 
dashboardTemplateVariablePresetToTerraform, 
dashboardWidgetToTerraform} from './dashboard-structs'
export * from './dashboard-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of dashboard lists this dashboard belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#dashboard_lists Dashboard#dashboard_lists}
  */
  readonly dashboardLists?: number[];
  /**
  * The description of the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Whether this dashboard is read-only. **Deprecated.** Prefer using `restricted_roles` to define which roles are required to edit the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_read_only Dashboard#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * The layout type of the dashboard. Valid values are `ordered`, `free`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#layout_type Dashboard#layout_type}
  */
  readonly layoutType: string;
  /**
  * The list of handles for the users to notify when changes are made to this dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#notify_list Dashboard#notify_list}
  */
  readonly notifyList?: string[];
  /**
  * The reflow type of a new dashboard layout. Set this only when layout type is `ordered`. If set to `fixed`, the dashboard expects all widgets to have a layout, and if it's set to `auto`, widgets should not have layouts. Valid values are `auto`, `fixed`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#reflow_type Dashboard#reflow_type}
  */
  readonly reflowType?: string;
  /**
  * UUIDs of roles whose associated users are authorized to edit the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#restricted_roles Dashboard#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * The title of the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * The URL of the dashboard.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#url Dashboard#url}
  */
  readonly url?: string;
  /**
  * template_variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#template_variable Dashboard#template_variable}
  */
  readonly templateVariable?: DashboardTemplateVariable[];
  /**
  * template_variable_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#template_variable_preset Dashboard#template_variable_preset}
  */
  readonly templateVariablePreset?: DashboardTemplateVariablePreset[];
  /**
  * widget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#widget Dashboard#widget}
  */
  readonly widget?: DashboardWidget[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/dashboard datadog_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/dashboard datadog_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dashboardLists = config.dashboardLists;
    this._description = config.description;
    this._isReadOnly = config.isReadOnly;
    this._layoutType = config.layoutType;
    this._notifyList = config.notifyList;
    this._reflowType = config.reflowType;
    this._restrictedRoles = config.restrictedRoles;
    this._title = config.title;
    this._url = config.url;
    this._templateVariable = config.templateVariable;
    this._templateVariablePreset = config.templateVariablePreset;
    this._widget = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_read_only - computed: false, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only') as any;
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // layout_type - computed: false, optional: false, required: true
  private _layoutType?: string; 
  public get layoutType() {
    return this.getStringAttribute('layout_type');
  }
  public set layoutType(value: string) {
    this._layoutType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutTypeInput() {
    return this._layoutType;
  }

  // notify_list - computed: false, optional: true, required: false
  private _notifyList?: string[]; 
  public get notifyList() {
    return this.getListAttribute('notify_list');
  }
  public set notifyList(value: string[]) {
    this._notifyList = value;
  }
  public resetNotifyList() {
    this._notifyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyListInput() {
    return this._notifyList;
  }

  // reflow_type - computed: false, optional: true, required: false
  private _reflowType?: string; 
  public get reflowType() {
    return this.getStringAttribute('reflow_type');
  }
  public set reflowType(value: string) {
    this._reflowType = value;
  }
  public resetReflowType() {
    this._reflowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflowTypeInput() {
    return this._reflowType;
  }

  // restricted_roles - computed: false, optional: true, required: false
  private _restrictedRoles?: string[]; 
  public get restrictedRoles() {
    return this.getListAttribute('restricted_roles');
  }
  public set restrictedRoles(value: string[]) {
    this._restrictedRoles = value;
  }
  public resetRestrictedRoles() {
    this._restrictedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRolesInput() {
    return this._restrictedRoles;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // template_variable - computed: false, optional: true, required: false
  private _templateVariable?: DashboardTemplateVariable[]; 
  public get templateVariable() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('template_variable') as any;
  }
  public set templateVariable(value: DashboardTemplateVariable[]) {
    this._templateVariable = value;
  }
  public resetTemplateVariable() {
    this._templateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariableInput() {
    return this._templateVariable;
  }

  // template_variable_preset - computed: false, optional: true, required: false
  private _templateVariablePreset?: DashboardTemplateVariablePreset[]; 
  public get templateVariablePreset() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('template_variable_preset') as any;
  }
  public set templateVariablePreset(value: DashboardTemplateVariablePreset[]) {
    this._templateVariablePreset = value;
  }
  public resetTemplateVariablePreset() {
    this._templateVariablePreset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariablePresetInput() {
    return this._templateVariablePreset;
  }

  // widget - computed: false, optional: true, required: false
  private _widget?: DashboardWidget[]; 
  public get widget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('widget') as any;
  }
  public set widget(value: DashboardWidget[]) {
    this._widget = value;
  }
  public resetWidget() {
    this._widget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_lists: cdktf.listMapper(cdktf.numberToTerraform)(this._dashboardLists),
      description: cdktf.stringToTerraform(this._description),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      layout_type: cdktf.stringToTerraform(this._layoutType),
      notify_list: cdktf.listMapper(cdktf.stringToTerraform)(this._notifyList),
      reflow_type: cdktf.stringToTerraform(this._reflowType),
      restricted_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._restrictedRoles),
      title: cdktf.stringToTerraform(this._title),
      url: cdktf.stringToTerraform(this._url),
      template_variable: cdktf.listMapper(dashboardTemplateVariableToTerraform)(this._templateVariable),
      template_variable_preset: cdktf.listMapper(dashboardTemplateVariablePresetToTerraform)(this._templateVariablePreset),
      widget: cdktf.listMapper(dashboardWidgetToTerraform)(this._widget),
    };
  }
}
