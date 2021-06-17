// https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsGlobalVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the global variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#description SyntheticsGlobalVariable#description}
  */
  readonly description?: string;
  /**
  * Synthetics global variable name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#name SyntheticsGlobalVariable#name}
  */
  readonly name: string;
  /**
  * Id of the Synthetics test to use for a variable from test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#parse_test_id SyntheticsGlobalVariable#parse_test_id}
  */
  readonly parseTestId?: string;
  /**
  * Sets the variable as secure. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#secure SyntheticsGlobalVariable#secure}
  */
  readonly secure?: boolean;
  /**
  * A list of tags to associate with your synthetics global variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#tags SyntheticsGlobalVariable#tags}
  */
  readonly tags?: string[];
  /**
  * The value of the global variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#value SyntheticsGlobalVariable#value}
  */
  readonly value: string;
  /**
  * parse_test_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#parse_test_options SyntheticsGlobalVariable#parse_test_options}
  */
  readonly parseTestOptions?: SyntheticsGlobalVariableParseTestOptions[];
}
export interface SyntheticsGlobalVariableParseTestOptionsParser {
  /**
  * Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#type SyntheticsGlobalVariable#type}
  */
  readonly type: string;
  /**
  * Value for the parser to use, required for type `json_path` or `regex`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#value SyntheticsGlobalVariable#value}
  */
  readonly value?: string;
}

function syntheticsGlobalVariableParseTestOptionsParserToTerraform(struct?: SyntheticsGlobalVariableParseTestOptionsParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SyntheticsGlobalVariableParseTestOptions {
  /**
  * Required when type = `http_header`. Defines the header to use to extract the value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#field SyntheticsGlobalVariable#field}
  */
  readonly field?: string;
  /**
  * Defines the source to use to extract the value. Valid values are `http_body`, `http_header`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#type SyntheticsGlobalVariable#type}
  */
  readonly type: string;
  /**
  * parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html#parser SyntheticsGlobalVariable#parser}
  */
  readonly parser: SyntheticsGlobalVariableParseTestOptionsParser[];
}

function syntheticsGlobalVariableParseTestOptionsToTerraform(struct?: SyntheticsGlobalVariableParseTestOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
    parser: cdktf.listMapper(syntheticsGlobalVariableParseTestOptionsParserToTerraform)(struct!.parser),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html datadog_synthetics_global_variable}
*/
export class SyntheticsGlobalVariable extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_global_variable.html datadog_synthetics_global_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsGlobalVariableConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsGlobalVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_global_variable',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._parseTestId = config.parseTestId;
    this._secure = config.secure;
    this._tags = config.tags;
    this._value = config.value;
    this._parseTestOptions = config.parseTestOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parse_test_id - computed: false, optional: true, required: false
  private _parseTestId?: string;
  public get parseTestId() {
    return this.getStringAttribute('parse_test_id');
  }
  public set parseTestId(value: string ) {
    this._parseTestId = value;
  }
  public resetParseTestId() {
    this._parseTestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTestIdInput() {
    return this._parseTestId
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean;
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean ) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[];
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // parse_test_options - computed: false, optional: true, required: false
  private _parseTestOptions?: SyntheticsGlobalVariableParseTestOptions[];
  public get parseTestOptions() {
    return this.interpolationForAttribute('parse_test_options') as any;
  }
  public set parseTestOptions(value: SyntheticsGlobalVariableParseTestOptions[] ) {
    this._parseTestOptions = value;
  }
  public resetParseTestOptions() {
    this._parseTestOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTestOptionsInput() {
    return this._parseTestOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parse_test_id: cdktf.stringToTerraform(this._parseTestId),
      secure: cdktf.booleanToTerraform(this._secure),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      value: cdktf.stringToTerraform(this._value),
      parse_test_options: cdktf.listMapper(syntheticsGlobalVariableParseTestOptionsToTerraform)(this._parseTestOptions),
    };
  }
}
