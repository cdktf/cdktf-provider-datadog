// generated from terraform resource schema

import { PowerpackLayout, 
powerpackLayoutToTerraform, 
PowerpackLayoutOutputReference, 
PowerpackTemplateVariables, 
powerpackTemplateVariablesToTerraform, 
PowerpackTemplateVariablesList, 
PowerpackWidget, 
powerpackWidgetToTerraform, 
PowerpackWidgetList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PowerpackConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the powerpack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#description Powerpack#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#id Powerpack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#live_span Powerpack#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The name for the powerpack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#name Powerpack#name}
  */
  readonly name?: string;
  /**
  * Whether or not title should be displayed in the powerpack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#show_title Powerpack#show_title}
  */
  readonly showTitle?: boolean | cdktf.IResolvable;
  /**
  * List of tags to identify this powerpack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#tags Powerpack#tags}
  */
  readonly tags?: string[];
  /**
  * layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#layout Powerpack#layout}
  */
  readonly layout?: PowerpackLayout;
  /**
  * template_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#template_variables Powerpack#template_variables}
  */
  readonly templateVariables?: PowerpackTemplateVariables[] | cdktf.IResolvable;
  /**
  * widget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#widget Powerpack#widget}
  */
  readonly widget?: PowerpackWidget[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack datadog_powerpack}
*/
export class Powerpack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_powerpack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Powerpack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Powerpack to import
  * @param importFromId The id of the existing Powerpack that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Powerpack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_powerpack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.34.0/docs/resources/powerpack datadog_powerpack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerpackConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PowerpackConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_powerpack',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.34.0',
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
    this._description = config.description;
    this._id = config.id;
    this._liveSpan = config.liveSpan;
    this._name = config.name;
    this._showTitle = config.showTitle;
    this._tags = config.tags;
    this._layout.internalValue = config.layout;
    this._templateVariables.internalValue = config.templateVariables;
    this._widget.internalValue = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // live_span - computed: false, optional: true, required: false
  private _liveSpan?: string; 
  public get liveSpan() {
    return this.getStringAttribute('live_span');
  }
  public set liveSpan(value: string) {
    this._liveSpan = value;
  }
  public resetLiveSpan() {
    this._liveSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveSpanInput() {
    return this._liveSpan;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // show_title - computed: false, optional: true, required: false
  private _showTitle?: boolean | cdktf.IResolvable; 
  public get showTitle() {
    return this.getBooleanAttribute('show_title');
  }
  public set showTitle(value: boolean | cdktf.IResolvable) {
    this._showTitle = value;
  }
  public resetShowTitle() {
    this._showTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTitleInput() {
    return this._showTitle;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new PowerpackLayoutOutputReference(this, "layout");
  public get layout() {
    return this._layout;
  }
  public putLayout(value: PowerpackLayout) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // template_variables - computed: false, optional: true, required: false
  private _templateVariables = new PowerpackTemplateVariablesList(this, "template_variables", false);
  public get templateVariables() {
    return this._templateVariables;
  }
  public putTemplateVariables(value: PowerpackTemplateVariables[] | cdktf.IResolvable) {
    this._templateVariables.internalValue = value;
  }
  public resetTemplateVariables() {
    this._templateVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariablesInput() {
    return this._templateVariables.internalValue;
  }

  // widget - computed: false, optional: true, required: false
  private _widget = new PowerpackWidgetList(this, "widget", false);
  public get widget() {
    return this._widget;
  }
  public putWidget(value: PowerpackWidget[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      live_span: cdktf.stringToTerraform(this._liveSpan),
      name: cdktf.stringToTerraform(this._name),
      show_title: cdktf.booleanToTerraform(this._showTitle),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      layout: powerpackLayoutToTerraform(this._layout.internalValue),
      template_variables: cdktf.listMapper(powerpackTemplateVariablesToTerraform, true)(this._templateVariables.internalValue),
      widget: cdktf.listMapper(powerpackWidgetToTerraform, true)(this._widget.internalValue),
    };
  }
}
