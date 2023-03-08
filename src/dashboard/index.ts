// generated from terraform resource schema

import { DashboardTemplateVariable, 
dashboardTemplateVariableToTerraform, 
DashboardTemplateVariableList, 
DashboardTemplateVariablePreset, 
dashboardTemplateVariablePresetToTerraform, 
DashboardTemplateVariablePresetList, 
DashboardWidget, 
dashboardWidgetToTerraform, 
DashboardWidgetList} from './index-structs'
export * from './index-structs'
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
  readonly templateVariable?: DashboardTemplateVariable[] | cdktf.IResolvable;
  /**
  * template_variable_preset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#template_variable_preset Dashboard#template_variable_preset}
  */
  readonly templateVariablePreset?: DashboardTemplateVariablePreset[] | cdktf.IResolvable;
  /**
  * widget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#widget Dashboard#widget}
  */
  readonly widget?: DashboardWidget[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/dashboard datadog_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_dashboard";

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
        providerName: 'datadog',
        providerVersion: '3.22.0',
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
    this._dashboardLists = config.dashboardLists;
    this._description = config.description;
    this._id = config.id;
    this._isReadOnly = config.isReadOnly;
    this._layoutType = config.layoutType;
    this._notifyList = config.notifyList;
    this._reflowType = config.reflowType;
    this._restrictedRoles = config.restrictedRoles;
    this._title = config.title;
    this._url = config.url;
    this._templateVariable.internalValue = config.templateVariable;
    this._templateVariablePreset.internalValue = config.templateVariablePreset;
    this._widget.internalValue = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_read_only - computed: false, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
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
    return cdktf.Fn.tolist(this.getListAttribute('notify_list'));
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
    return cdktf.Fn.tolist(this.getListAttribute('restricted_roles'));
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
  private _templateVariable = new DashboardTemplateVariableList(this, "template_variable", false);
  public get templateVariable() {
    return this._templateVariable;
  }
  public putTemplateVariable(value: DashboardTemplateVariable[] | cdktf.IResolvable) {
    this._templateVariable.internalValue = value;
  }
  public resetTemplateVariable() {
    this._templateVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariableInput() {
    return this._templateVariable.internalValue;
  }

  // template_variable_preset - computed: false, optional: true, required: false
  private _templateVariablePreset = new DashboardTemplateVariablePresetList(this, "template_variable_preset", false);
  public get templateVariablePreset() {
    return this._templateVariablePreset;
  }
  public putTemplateVariablePreset(value: DashboardTemplateVariablePreset[] | cdktf.IResolvable) {
    this._templateVariablePreset.internalValue = value;
  }
  public resetTemplateVariablePreset() {
    this._templateVariablePreset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariablePresetInput() {
    return this._templateVariablePreset.internalValue;
  }

  // widget - computed: false, optional: true, required: false
  private _widget = new DashboardWidgetList(this, "widget", false);
  public get widget() {
    return this._widget;
  }
  public putWidget(value: DashboardWidget[] | cdktf.IResolvable) {
    this._widget.internalValue = value;
  }
  public resetWidget() {
    this._widget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_lists: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dashboardLists),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      layout_type: cdktf.stringToTerraform(this._layoutType),
      notify_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifyList),
      reflow_type: cdktf.stringToTerraform(this._reflowType),
      restricted_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedRoles),
      title: cdktf.stringToTerraform(this._title),
      url: cdktf.stringToTerraform(this._url),
      template_variable: cdktf.listMapper(dashboardTemplateVariableToTerraform, true)(this._templateVariable.internalValue),
      template_variable_preset: cdktf.listMapper(dashboardTemplateVariablePresetToTerraform, true)(this._templateVariablePreset.internalValue),
      widget: cdktf.listMapper(dashboardWidgetToTerraform, true)(this._widget.internalValue),
    };
  }
}
