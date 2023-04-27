// https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsGlobalVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the global variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#description SyntheticsGlobalVariable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#id SyntheticsGlobalVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Synthetics global variable name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#name SyntheticsGlobalVariable#name}
  */
  readonly name: string;
  /**
  * Id of the Synthetics test to use for a variable from test.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#parse_test_id SyntheticsGlobalVariable#parse_test_id}
  */
  readonly parseTestId?: string;
  /**
  * A list of role identifiers to associate with the Synthetics global variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#restricted_roles SyntheticsGlobalVariable#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * If set to true, the value of the global variable is hidden. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#secure SyntheticsGlobalVariable#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to associate with your synthetics global variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#tags SyntheticsGlobalVariable#tags}
  */
  readonly tags?: string[];
  /**
  * The value of the global variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}
  */
  readonly value: string;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#options SyntheticsGlobalVariable#options}
  */
  readonly options?: SyntheticsGlobalVariableOptions;
  /**
  * parse_test_options block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#parse_test_options SyntheticsGlobalVariable#parse_test_options}
  */
  readonly parseTestOptions?: SyntheticsGlobalVariableParseTestOptions;
}
export interface SyntheticsGlobalVariableOptionsTotpParameters {
  /**
  * Number of digits for the OTP.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#digits SyntheticsGlobalVariable#digits}
  */
  readonly digits: number;
  /**
  * Interval for which to refresh the token (in seconds).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#refresh_interval SyntheticsGlobalVariable#refresh_interval}
  */
  readonly refreshInterval: number;
}

export function syntheticsGlobalVariableOptionsTotpParametersToTerraform(struct?: SyntheticsGlobalVariableOptionsTotpParametersOutputReference | SyntheticsGlobalVariableOptionsTotpParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.numberToTerraform(struct!.digits),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
  }
}

export class SyntheticsGlobalVariableOptionsTotpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsGlobalVariableOptionsTotpParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsGlobalVariableOptionsTotpParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._digits = undefined;
      this._refreshInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._digits = value.digits;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // digits - computed: false, optional: false, required: true
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // refresh_interval - computed: false, optional: false, required: true
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface SyntheticsGlobalVariableOptions {
  /**
  * totp_parameters block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#totp_parameters SyntheticsGlobalVariable#totp_parameters}
  */
  readonly totpParameters?: SyntheticsGlobalVariableOptionsTotpParameters;
}

export function syntheticsGlobalVariableOptionsToTerraform(struct?: SyntheticsGlobalVariableOptionsOutputReference | SyntheticsGlobalVariableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    totp_parameters: syntheticsGlobalVariableOptionsTotpParametersToTerraform(struct!.totpParameters),
  }
}

export class SyntheticsGlobalVariableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsGlobalVariableOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totpParameters = this._totpParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsGlobalVariableOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totpParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totpParameters.internalValue = value.totpParameters;
    }
  }

  // totp_parameters - computed: false, optional: true, required: false
  private _totpParameters = new SyntheticsGlobalVariableOptionsTotpParametersOutputReference(this, "totp_parameters");
  public get totpParameters() {
    return this._totpParameters;
  }
  public putTotpParameters(value: SyntheticsGlobalVariableOptionsTotpParameters) {
    this._totpParameters.internalValue = value;
  }
  public resetTotpParameters() {
    this._totpParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpParametersInput() {
    return this._totpParameters.internalValue;
  }
}
export interface SyntheticsGlobalVariableParseTestOptionsParser {
  /**
  * Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}
  */
  readonly type: string;
  /**
  * Value for the parser to use, required for type `json_path` or `regex`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}
  */
  readonly value?: string;
}

export function syntheticsGlobalVariableParseTestOptionsParserToTerraform(struct?: SyntheticsGlobalVariableParseTestOptionsParserOutputReference | SyntheticsGlobalVariableParseTestOptionsParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SyntheticsGlobalVariableParseTestOptionsParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsGlobalVariableParseTestOptionsParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsGlobalVariableParseTestOptionsParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SyntheticsGlobalVariableParseTestOptions {
  /**
  * Required when type = `http_header`. Defines the header to use to extract the value
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#field SyntheticsGlobalVariable#field}
  */
  readonly field?: string;
  /**
  * When type is `local_variable`, name of the local variable to use to extract the value.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#local_variable_name SyntheticsGlobalVariable#local_variable_name}
  */
  readonly localVariableName?: string;
  /**
  * Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `local_variable`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}
  */
  readonly type: string;
  /**
  * parser block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable#parser SyntheticsGlobalVariable#parser}
  */
  readonly parser?: SyntheticsGlobalVariableParseTestOptionsParser;
}

export function syntheticsGlobalVariableParseTestOptionsToTerraform(struct?: SyntheticsGlobalVariableParseTestOptionsOutputReference | SyntheticsGlobalVariableParseTestOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    local_variable_name: cdktf.stringToTerraform(struct!.localVariableName),
    type: cdktf.stringToTerraform(struct!.type),
    parser: syntheticsGlobalVariableParseTestOptionsParserToTerraform(struct!.parser),
  }
}

export class SyntheticsGlobalVariableParseTestOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsGlobalVariableParseTestOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._localVariableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVariableName = this._localVariableName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsGlobalVariableParseTestOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._localVariableName = undefined;
      this._type = undefined;
      this._parser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._localVariableName = value.localVariableName;
      this._type = value.type;
      this._parser.internalValue = value.parser;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // local_variable_name - computed: false, optional: true, required: false
  private _localVariableName?: string; 
  public get localVariableName() {
    return this.getStringAttribute('local_variable_name');
  }
  public set localVariableName(value: string) {
    this._localVariableName = value;
  }
  public resetLocalVariableName() {
    this._localVariableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVariableNameInput() {
    return this._localVariableName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new SyntheticsGlobalVariableParseTestOptionsParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: SyntheticsGlobalVariableParseTestOptionsParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable datadog_synthetics_global_variable}
*/
export class SyntheticsGlobalVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_global_variable";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/synthetics_global_variable datadog_synthetics_global_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsGlobalVariableConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsGlobalVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_global_variable',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.24.0',
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
    this._name = config.name;
    this._parseTestId = config.parseTestId;
    this._restrictedRoles = config.restrictedRoles;
    this._secure = config.secure;
    this._tags = config.tags;
    this._value = config.value;
    this._options.internalValue = config.options;
    this._parseTestOptions.internalValue = config.parseTestOptions;
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

  // parse_test_id - computed: false, optional: true, required: false
  private _parseTestId?: string; 
  public get parseTestId() {
    return this.getStringAttribute('parse_test_id');
  }
  public set parseTestId(value: string) {
    this._parseTestId = value;
  }
  public resetParseTestId() {
    this._parseTestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTestIdInput() {
    return this._parseTestId;
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

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // options - computed: false, optional: true, required: false
  private _options = new SyntheticsGlobalVariableOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: SyntheticsGlobalVariableOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // parse_test_options - computed: false, optional: true, required: false
  private _parseTestOptions = new SyntheticsGlobalVariableParseTestOptionsOutputReference(this, "parse_test_options");
  public get parseTestOptions() {
    return this._parseTestOptions;
  }
  public putParseTestOptions(value: SyntheticsGlobalVariableParseTestOptions) {
    this._parseTestOptions.internalValue = value;
  }
  public resetParseTestOptions() {
    this._parseTestOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseTestOptionsInput() {
    return this._parseTestOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parse_test_id: cdktf.stringToTerraform(this._parseTestId),
      restricted_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedRoles),
      secure: cdktf.booleanToTerraform(this._secure),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      value: cdktf.stringToTerraform(this._value),
      options: syntheticsGlobalVariableOptionsToTerraform(this._options.internalValue),
      parse_test_options: syntheticsGlobalVariableParseTestOptionsToTerraform(this._parseTestOptions.internalValue),
    };
  }
}
