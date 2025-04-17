/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecWafCustomRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the WAF custom rule will block the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#blocking AppsecWafCustomRule#blocking}
  */
  readonly blocking: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the WAF custom rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#enabled AppsecWafCustomRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The Name of the WAF custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#name AppsecWafCustomRule#name}
  */
  readonly name: string;
  /**
  * The path glob for the WAF custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#path_glob AppsecWafCustomRule#path_glob}
  */
  readonly pathGlob?: string;
  /**
  * Tags associated with the WAF custom rule. `category` and `type` tags are required. Supported categories include `business_logic`, `attack_attempt` and `security_response`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#tags AppsecWafCustomRule#tags}
  */
  readonly tags: { [key: string]: string };
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}
  */
  readonly action?: AppsecWafCustomRuleAction;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#condition AppsecWafCustomRule#condition}
  */
  readonly condition?: AppsecWafCustomRuleCondition[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#scope AppsecWafCustomRule#scope}
  */
  readonly scope?: AppsecWafCustomRuleScope[] | cdktf.IResolvable;
}
export interface AppsecWafCustomRuleActionParameters {
  /**
  * The location to redirect to when the WAF custom rule triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#location AppsecWafCustomRule#location}
  */
  readonly location?: string;
  /**
  * The status code to return when the WAF custom rule triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#status_code AppsecWafCustomRule#status_code}
  */
  readonly statusCode?: number;
}

export function appsecWafCustomRuleActionParametersToTerraform(struct?: AppsecWafCustomRuleActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function appsecWafCustomRuleActionParametersToHclTerraform(struct?: AppsecWafCustomRuleActionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafCustomRuleActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsecWafCustomRuleActionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafCustomRuleActionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._statusCode = value.statusCode;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface AppsecWafCustomRuleAction {
  /**
  * Override the default action to take when the WAF custom rule would block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}
  */
  readonly action?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}
  */
  readonly parameters?: AppsecWafCustomRuleActionParameters;
}

export function appsecWafCustomRuleActionToTerraform(struct?: AppsecWafCustomRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    parameters: appsecWafCustomRuleActionParametersToTerraform(struct!.parameters),
  }
}


export function appsecWafCustomRuleActionToHclTerraform(struct?: AppsecWafCustomRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: appsecWafCustomRuleActionParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsecWafCustomRuleActionParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafCustomRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsecWafCustomRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafCustomRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._parameters.internalValue = value.parameters;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new AppsecWafCustomRuleActionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AppsecWafCustomRuleActionParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface AppsecWafCustomRuleConditionParametersInput {
  /**
  * Input from the request on which the condition should apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#address AppsecWafCustomRule#address}
  */
  readonly address?: string;
  /**
  * Specific path for the input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#key_path AppsecWafCustomRule#key_path}
  */
  readonly keyPath?: string[];
}

export function appsecWafCustomRuleConditionParametersInputToTerraform(struct?: AppsecWafCustomRuleConditionParametersInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    key_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPath),
  }
}


export function appsecWafCustomRuleConditionParametersInputToHclTerraform(struct?: AppsecWafCustomRuleConditionParametersInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafCustomRuleConditionParametersInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsecWafCustomRuleConditionParametersInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafCustomRuleConditionParametersInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._keyPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._keyPath = value.keyPath;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string[]; 
  public get keyPath() {
    return this.getListAttribute('key_path');
  }
  public set keyPath(value: string[]) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }
}

export class AppsecWafCustomRuleConditionParametersInputList extends cdktf.ComplexList {
  public internalValue? : AppsecWafCustomRuleConditionParametersInput[] | cdktf.IResolvable

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
  public get(index: number): AppsecWafCustomRuleConditionParametersInputOutputReference {
    return new AppsecWafCustomRuleConditionParametersInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsecWafCustomRuleConditionParametersOptions {
  /**
  * Evaluate the value as case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#case_sensitive AppsecWafCustomRule#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Only evaluate this condition if the value has a minimum amount of characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#min_length AppsecWafCustomRule#min_length}
  */
  readonly minLength?: number;
}

export function appsecWafCustomRuleConditionParametersOptionsToTerraform(struct?: AppsecWafCustomRuleConditionParametersOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    min_length: cdktf.numberToTerraform(struct!.minLength),
  }
}


export function appsecWafCustomRuleConditionParametersOptionsToHclTerraform(struct?: AppsecWafCustomRuleConditionParametersOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafCustomRuleConditionParametersOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsecWafCustomRuleConditionParametersOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafCustomRuleConditionParametersOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._minLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._minLength = value.minLength;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }
}
export interface AppsecWafCustomRuleConditionParameters {
  /**
  * Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#data AppsecWafCustomRule#data}
  */
  readonly data?: string;
  /**
  * List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#list AppsecWafCustomRule#list}
  */
  readonly list?: string[];
  /**
  * Regex to use with the condition. Only used with match_regex and !match_regex operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#regex AppsecWafCustomRule#regex}
  */
  readonly regex?: string;
  /**
  * Store the captured value in the specified tag name. Only used with the capture_data operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#value AppsecWafCustomRule#value}
  */
  readonly value?: string;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#input AppsecWafCustomRule#input}
  */
  readonly input?: AppsecWafCustomRuleConditionParametersInput[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#options AppsecWafCustomRule#options}
  */
  readonly options?: AppsecWafCustomRuleConditionParametersOptions;
}

export function appsecWafCustomRuleConditionParametersToTerraform(struct?: AppsecWafCustomRuleConditionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.list),
    regex: cdktf.stringToTerraform(struct!.regex),
    value: cdktf.stringToTerraform(struct!.value),
    input: cdktf.listMapper(appsecWafCustomRuleConditionParametersInputToTerraform, true)(struct!.input),
    options: appsecWafCustomRuleConditionParametersOptionsToTerraform(struct!.options),
  }
}


export function appsecWafCustomRuleConditionParametersToHclTerraform(struct?: AppsecWafCustomRuleConditionParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.list),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
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
    input: {
      value: cdktf.listMapperHcl(appsecWafCustomRuleConditionParametersInputToHclTerraform, true)(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "AppsecWafCustomRuleConditionParametersInputList",
    },
    options: {
      value: appsecWafCustomRuleConditionParametersOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsecWafCustomRuleConditionParametersOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafCustomRuleConditionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppsecWafCustomRuleConditionParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafCustomRuleConditionParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._list = undefined;
      this._regex = undefined;
      this._value = undefined;
      this._input.internalValue = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._list = value.list;
      this._regex = value.regex;
      this._value = value.value;
      this._input.internalValue = value.input;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // list - computed: false, optional: true, required: false
  private _list?: string[]; 
  public get list() {
    return this.getListAttribute('list');
  }
  public set list(value: string[]) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // input - computed: false, optional: true, required: false
  private _input = new AppsecWafCustomRuleConditionParametersInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: AppsecWafCustomRuleConditionParametersInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new AppsecWafCustomRuleConditionParametersOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AppsecWafCustomRuleConditionParametersOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}
export interface AppsecWafCustomRuleCondition {
  /**
  * Operator to use for the WAF Condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#operator AppsecWafCustomRule#operator}
  */
  readonly operator?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}
  */
  readonly parameters?: AppsecWafCustomRuleConditionParameters;
}

export function appsecWafCustomRuleConditionToTerraform(struct?: AppsecWafCustomRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    parameters: appsecWafCustomRuleConditionParametersToTerraform(struct!.parameters),
  }
}


export function appsecWafCustomRuleConditionToHclTerraform(struct?: AppsecWafCustomRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: appsecWafCustomRuleConditionParametersToHclTerraform(struct!.parameters),
      isBlock: true,
      type: "struct",
      storageClassType: "AppsecWafCustomRuleConditionParameters",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafCustomRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsecWafCustomRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafCustomRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._parameters.internalValue = value.parameters;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new AppsecWafCustomRuleConditionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AppsecWafCustomRuleConditionParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class AppsecWafCustomRuleConditionList extends cdktf.ComplexList {
  public internalValue? : AppsecWafCustomRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): AppsecWafCustomRuleConditionOutputReference {
    return new AppsecWafCustomRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppsecWafCustomRuleScope {
  /**
  * The environment scope for the WAF custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#env AppsecWafCustomRule#env}
  */
  readonly env?: string;
  /**
  * The service scope for the WAF custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#service AppsecWafCustomRule#service}
  */
  readonly service?: string;
}

export function appsecWafCustomRuleScopeToTerraform(struct?: AppsecWafCustomRuleScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.stringToTerraform(struct!.env),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function appsecWafCustomRuleScopeToHclTerraform(struct?: AppsecWafCustomRuleScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecWafCustomRuleScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppsecWafCustomRuleScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecWafCustomRuleScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._service = value.service;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class AppsecWafCustomRuleScopeList extends cdktf.ComplexList {
  public internalValue? : AppsecWafCustomRuleScope[] | cdktf.IResolvable

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
  public get(index: number): AppsecWafCustomRuleScopeOutputReference {
    return new AppsecWafCustomRuleScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule datadog_appsec_waf_custom_rule}
*/
export class AppsecWafCustomRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_appsec_waf_custom_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecWafCustomRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecWafCustomRule to import
  * @param importFromId The id of the existing AppsecWafCustomRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecWafCustomRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_appsec_waf_custom_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.60.0/docs/resources/appsec_waf_custom_rule datadog_appsec_waf_custom_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecWafCustomRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecWafCustomRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_appsec_waf_custom_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.60.0',
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
    this._blocking = config.blocking;
    this._enabled = config.enabled;
    this._name = config.name;
    this._pathGlob = config.pathGlob;
    this._tags = config.tags;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocking - computed: false, optional: false, required: true
  private _blocking?: boolean | cdktf.IResolvable; 
  public get blocking() {
    return this.getBooleanAttribute('blocking');
  }
  public set blocking(value: boolean | cdktf.IResolvable) {
    this._blocking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingInput() {
    return this._blocking;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
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

  // path_glob - computed: false, optional: true, required: false
  private _pathGlob?: string; 
  public get pathGlob() {
    return this.getStringAttribute('path_glob');
  }
  public set pathGlob(value: string) {
    this._pathGlob = value;
  }
  public resetPathGlob() {
    this._pathGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathGlobInput() {
    return this._pathGlob;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // action - computed: false, optional: true, required: false
  private _action = new AppsecWafCustomRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppsecWafCustomRuleAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new AppsecWafCustomRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AppsecWafCustomRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new AppsecWafCustomRuleScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: AppsecWafCustomRuleScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocking: cdktf.booleanToTerraform(this._blocking),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      path_glob: cdktf.stringToTerraform(this._pathGlob),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      action: appsecWafCustomRuleActionToTerraform(this._action.internalValue),
      condition: cdktf.listMapper(appsecWafCustomRuleConditionToTerraform, true)(this._condition.internalValue),
      scope: cdktf.listMapper(appsecWafCustomRuleScopeToTerraform, true)(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocking: {
        value: cdktf.booleanToHclTerraform(this._blocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      path_glob: {
        value: cdktf.stringToHclTerraform(this._pathGlob),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      action: {
        value: appsecWafCustomRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppsecWafCustomRuleAction",
      },
      condition: {
        value: cdktf.listMapperHcl(appsecWafCustomRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecWafCustomRuleConditionList",
      },
      scope: {
        value: cdktf.listMapperHcl(appsecWafCustomRuleScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecWafCustomRuleScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
