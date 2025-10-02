/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsGlobalVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the global variable. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#description SyntheticsGlobalVariable#description}
  */
  readonly description?: string;
  /**
  * If set to true, the global variable is a FIDO variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#is_fido SyntheticsGlobalVariable#is_fido}
  */
  readonly isFido?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the global variable is a TOTP variable. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#is_totp SyntheticsGlobalVariable#is_totp}
  */
  readonly isTotp?: boolean | cdktf.IResolvable;
  /**
  * Synthetics global variable name. Must be all uppercase with underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#name SyntheticsGlobalVariable#name}
  */
  readonly name: string;
  /**
  * Id of the Synthetics test to use for a variable from test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#parse_test_id SyntheticsGlobalVariable#parse_test_id}
  */
  readonly parseTestId?: string;
  /**
  * A list of role identifiers to associate with the Synthetics global variable. **Deprecated.** This field is no longer supported by the Datadog API. Please use `datadog_restriction_policy` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#restricted_roles SyntheticsGlobalVariable#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * If set to true, the value of the global variable is hidden. This setting is automatically set to `true` if `is_totp` or `is_fido` is set to `true`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#secure SyntheticsGlobalVariable#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
  /**
  * A list of tags to associate with your synthetics global variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#tags SyntheticsGlobalVariable#tags}
  */
  readonly tags?: string[];
  /**
  * The value of the global variable. Required unless `is_fido` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#options SyntheticsGlobalVariable#options}
  */
  readonly options?: SyntheticsGlobalVariableOptions[] | cdktf.IResolvable;
  /**
  * parse_test_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#parse_test_options SyntheticsGlobalVariable#parse_test_options}
  */
  readonly parseTestOptions?: SyntheticsGlobalVariableParseTestOptions[] | cdktf.IResolvable;
}
export interface SyntheticsGlobalVariableOptionsTotpParameters {
  /**
  * Number of digits for the OTP. Value must be between 4 and 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#digits SyntheticsGlobalVariable#digits}
  */
  readonly digits: number;
  /**
  * Interval for which to refresh the token (in seconds). Value must be between 0 and 999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#refresh_interval SyntheticsGlobalVariable#refresh_interval}
  */
  readonly refreshInterval: number;
}

export function syntheticsGlobalVariableOptionsTotpParametersToTerraform(struct?: SyntheticsGlobalVariableOptionsTotpParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.numberToTerraform(struct!.digits),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
  }
}


export function syntheticsGlobalVariableOptionsTotpParametersToHclTerraform(struct?: SyntheticsGlobalVariableOptionsTotpParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.numberToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsGlobalVariableOptionsTotpParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsGlobalVariableOptionsTotpParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SyntheticsGlobalVariableOptionsTotpParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digits = undefined;
      this._refreshInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class SyntheticsGlobalVariableOptionsTotpParametersList extends cdktf.ComplexList {
  public internalValue? : SyntheticsGlobalVariableOptionsTotpParameters[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsGlobalVariableOptionsTotpParametersOutputReference {
    return new SyntheticsGlobalVariableOptionsTotpParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsGlobalVariableOptions {
  /**
  * totp_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#totp_parameters SyntheticsGlobalVariable#totp_parameters}
  */
  readonly totpParameters?: SyntheticsGlobalVariableOptionsTotpParameters[] | cdktf.IResolvable;
}

export function syntheticsGlobalVariableOptionsToTerraform(struct?: SyntheticsGlobalVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    totp_parameters: cdktf.listMapper(syntheticsGlobalVariableOptionsTotpParametersToTerraform, true)(struct!.totpParameters),
  }
}


export function syntheticsGlobalVariableOptionsToHclTerraform(struct?: SyntheticsGlobalVariableOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    totp_parameters: {
      value: cdktf.listMapperHcl(syntheticsGlobalVariableOptionsTotpParametersToHclTerraform, true)(struct!.totpParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsGlobalVariableOptionsTotpParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsGlobalVariableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsGlobalVariableOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totpParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totpParameters = this._totpParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsGlobalVariableOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._totpParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._totpParameters.internalValue = value.totpParameters;
    }
  }

  // totp_parameters - computed: false, optional: true, required: false
  private _totpParameters = new SyntheticsGlobalVariableOptionsTotpParametersList(this, "totp_parameters", false);
  public get totpParameters() {
    return this._totpParameters;
  }
  public putTotpParameters(value: SyntheticsGlobalVariableOptionsTotpParameters[] | cdktf.IResolvable) {
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

export class SyntheticsGlobalVariableOptionsList extends cdktf.ComplexList {
  public internalValue? : SyntheticsGlobalVariableOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsGlobalVariableOptionsOutputReference {
    return new SyntheticsGlobalVariableOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsGlobalVariableParseTestOptionsParser {
  /**
  * Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}
  */
  readonly type: string;
  /**
  * Value for the parser to use, required for type `json_path` or `regex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}
  */
  readonly value?: string;
}

export function syntheticsGlobalVariableParseTestOptionsParserToTerraform(struct?: SyntheticsGlobalVariableParseTestOptionsParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function syntheticsGlobalVariableParseTestOptionsParserToHclTerraform(struct?: SyntheticsGlobalVariableParseTestOptionsParser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsGlobalVariableParseTestOptionsParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsGlobalVariableParseTestOptionsParser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SyntheticsGlobalVariableParseTestOptionsParser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class SyntheticsGlobalVariableParseTestOptionsParserList extends cdktf.ComplexList {
  public internalValue? : SyntheticsGlobalVariableParseTestOptionsParser[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsGlobalVariableParseTestOptionsParserOutputReference {
    return new SyntheticsGlobalVariableParseTestOptionsParserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsGlobalVariableParseTestOptions {
  /**
  * Required when type = `http_header`. Defines the header to use to extract the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#field SyntheticsGlobalVariable#field}
  */
  readonly field?: string;
  /**
  * When type is `local_variable`, name of the local variable to use to extract the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#local_variable_name SyntheticsGlobalVariable#local_variable_name}
  */
  readonly localVariableName?: string;
  /**
  * Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}
  */
  readonly type: string;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#parser SyntheticsGlobalVariable#parser}
  */
  readonly parser?: SyntheticsGlobalVariableParseTestOptionsParser[] | cdktf.IResolvable;
}

export function syntheticsGlobalVariableParseTestOptionsToTerraform(struct?: SyntheticsGlobalVariableParseTestOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    local_variable_name: cdktf.stringToTerraform(struct!.localVariableName),
    type: cdktf.stringToTerraform(struct!.type),
    parser: cdktf.listMapper(syntheticsGlobalVariableParseTestOptionsParserToTerraform, true)(struct!.parser),
  }
}


export function syntheticsGlobalVariableParseTestOptionsToHclTerraform(struct?: SyntheticsGlobalVariableParseTestOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_variable_name: {
      value: cdktf.stringToHclTerraform(struct!.localVariableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser: {
      value: cdktf.listMapperHcl(syntheticsGlobalVariableParseTestOptionsParserToHclTerraform, true)(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsGlobalVariableParseTestOptionsParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsGlobalVariableParseTestOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsGlobalVariableParseTestOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SyntheticsGlobalVariableParseTestOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._localVariableName = undefined;
      this._type = undefined;
      this._parser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _parser = new SyntheticsGlobalVariableParseTestOptionsParserList(this, "parser", false);
  public get parser() {
    return this._parser;
  }
  public putParser(value: SyntheticsGlobalVariableParseTestOptionsParser[] | cdktf.IResolvable) {
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

export class SyntheticsGlobalVariableParseTestOptionsList extends cdktf.ComplexList {
  public internalValue? : SyntheticsGlobalVariableParseTestOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsGlobalVariableParseTestOptionsOutputReference {
    return new SyntheticsGlobalVariableParseTestOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable datadog_synthetics_global_variable}
*/
export class SyntheticsGlobalVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_global_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticsGlobalVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsGlobalVariable to import
  * @param importFromId The id of the existing SyntheticsGlobalVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsGlobalVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_synthetics_global_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/resources/synthetics_global_variable datadog_synthetics_global_variable} Resource
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
        providerVersion: '3.75.0',
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
    this._isFido = config.isFido;
    this._isTotp = config.isTotp;
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

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_fido - computed: true, optional: true, required: false
  private _isFido?: boolean | cdktf.IResolvable; 
  public get isFido() {
    return this.getBooleanAttribute('is_fido');
  }
  public set isFido(value: boolean | cdktf.IResolvable) {
    this._isFido = value;
  }
  public resetIsFido() {
    this._isFido = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFidoInput() {
    return this._isFido;
  }

  // is_totp - computed: true, optional: true, required: false
  private _isTotp?: boolean | cdktf.IResolvable; 
  public get isTotp() {
    return this.getBooleanAttribute('is_totp');
  }
  public set isTotp(value: boolean | cdktf.IResolvable) {
    this._isTotp = value;
  }
  public resetIsTotp() {
    this._isTotp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTotpInput() {
    return this._isTotp;
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

  // secure - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new SyntheticsGlobalVariableOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: SyntheticsGlobalVariableOptions[] | cdktf.IResolvable) {
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
  private _parseTestOptions = new SyntheticsGlobalVariableParseTestOptionsList(this, "parse_test_options", false);
  public get parseTestOptions() {
    return this._parseTestOptions;
  }
  public putParseTestOptions(value: SyntheticsGlobalVariableParseTestOptions[] | cdktf.IResolvable) {
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
      is_fido: cdktf.booleanToTerraform(this._isFido),
      is_totp: cdktf.booleanToTerraform(this._isTotp),
      name: cdktf.stringToTerraform(this._name),
      parse_test_id: cdktf.stringToTerraform(this._parseTestId),
      restricted_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedRoles),
      secure: cdktf.booleanToTerraform(this._secure),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      value: cdktf.stringToTerraform(this._value),
      options: cdktf.listMapper(syntheticsGlobalVariableOptionsToTerraform, true)(this._options.internalValue),
      parse_test_options: cdktf.listMapper(syntheticsGlobalVariableParseTestOptionsToTerraform, true)(this._parseTestOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_fido: {
        value: cdktf.booleanToHclTerraform(this._isFido),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_totp: {
        value: cdktf.booleanToHclTerraform(this._isTotp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parse_test_id: {
        value: cdktf.stringToHclTerraform(this._parseTestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictedRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure: {
        value: cdktf.booleanToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(syntheticsGlobalVariableOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsGlobalVariableOptionsList",
      },
      parse_test_options: {
        value: cdktf.listMapperHcl(syntheticsGlobalVariableParseTestOptionsToHclTerraform, true)(this._parseTestOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsGlobalVariableParseTestOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
