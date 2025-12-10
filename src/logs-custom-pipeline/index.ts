/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsCustomPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#description LogsCustomPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#id LogsCustomPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#tags LogsCustomPipeline#tags}
  */
  readonly tags?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineFilter[] | cdktf.IResolvable;
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#processor LogsCustomPipeline#processor}
  */
  readonly processor?: LogsCustomPipelineProcessor[] | cdktf.IResolvable;
}
export interface LogsCustomPipelineFilter {
  /**
  * Filter criteria of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

export function logsCustomPipelineFilterToTerraform(struct?: LogsCustomPipelineFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logsCustomPipelineFilterToHclTerraform(struct?: LogsCustomPipelineFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class LogsCustomPipelineFilterList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineFilter[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineFilterOutputReference {
    return new LogsCustomPipelineFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorArithmeticProcessor {
  /**
  * Arithmetic operation between one or more log attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#expression LogsCustomPipeline#expression}
  */
  readonly expression: string;
  /**
  * Boolean value to enable your pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, it replaces all missing attributes of expression by 0, false skips the operation if an attribute is missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * Your pipeline name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the attribute that contains the result of the arithmetic operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorArithmeticProcessorToTerraform(struct?: LogsCustomPipelineProcessorArithmeticProcessorOutputReference | LogsCustomPipelineProcessorArithmeticProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_replace_missing: cdktf.booleanToTerraform(struct!.isReplaceMissing),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorArithmeticProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorArithmeticProcessorOutputReference | LogsCustomPipelineProcessorArithmeticProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_replace_missing: {
      value: cdktf.booleanToHclTerraform(struct!.isReplaceMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorArithmeticProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorArithmeticProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isReplaceMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReplaceMissing = this._isReplaceMissing;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorArithmeticProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._isEnabled = undefined;
      this._isReplaceMissing = undefined;
      this._name = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._isEnabled = value.isEnabled;
      this._isReplaceMissing = value.isReplaceMissing;
      this._name = value.name;
      this._target = value.target;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing');
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorArrayProcessorOperationAppend {
  /**
  * Remove or preserve the remapped source element. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Attribute path containing the value to append.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Attribute path of the array to append to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorArrayProcessorOperationAppendToTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationAppendOutputReference | LogsCustomPipelineProcessorArrayProcessorOperationAppend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_source: cdktf.booleanToTerraform(struct!.preserveSource),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorArrayProcessorOperationAppendToHclTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationAppendOutputReference | LogsCustomPipelineProcessorArrayProcessorOperationAppend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_source: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorArrayProcessorOperationAppendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorArrayProcessorOperationAppend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorArrayProcessorOperationAppend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveSource = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preserveSource = value.preserveSource;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktf.IResolvable) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorArrayProcessorOperationLength {
  /**
  * Attribute path of the array to compute the length of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Attribute that receives the computed length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorArrayProcessorOperationLengthToTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationLengthOutputReference | LogsCustomPipelineProcessorArrayProcessorOperationLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorArrayProcessorOperationLengthToHclTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationLengthOutputReference | LogsCustomPipelineProcessorArrayProcessorOperationLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorArrayProcessorOperationLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorArrayProcessorOperationLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorArrayProcessorOperationLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorArrayProcessorOperationSelect {
  /**
  * Filter expression (e.g. key1:value1 OR key2:value2) used to find the matching element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: string;
  /**
  * Attribute path of the array to search into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Attribute that receives the extracted value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * Attribute key from the matching object that should be extracted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#value_to_extract LogsCustomPipeline#value_to_extract}
  */
  readonly valueToExtract: string;
}

export function logsCustomPipelineProcessorArrayProcessorOperationSelectToTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationSelectOutputReference | LogsCustomPipelineProcessorArrayProcessorOperationSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    value_to_extract: cdktf.stringToTerraform(struct!.valueToExtract),
  }
}


export function logsCustomPipelineProcessorArrayProcessorOperationSelectToHclTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationSelectOutputReference | LogsCustomPipelineProcessorArrayProcessorOperationSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_extract: {
      value: cdktf.stringToHclTerraform(struct!.valueToExtract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorArrayProcessorOperationSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorArrayProcessorOperationSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._valueToExtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToExtract = this._valueToExtract;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorArrayProcessorOperationSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._source = undefined;
      this._target = undefined;
      this._valueToExtract = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._source = value.source;
      this._target = value.target;
      this._valueToExtract = value.valueToExtract;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // value_to_extract - computed: false, optional: false, required: true
  private _valueToExtract?: string; 
  public get valueToExtract() {
    return this.getStringAttribute('value_to_extract');
  }
  public set valueToExtract(value: string) {
    this._valueToExtract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToExtractInput() {
    return this._valueToExtract;
  }
}
export interface LogsCustomPipelineProcessorArrayProcessorOperation {
  /**
  * append block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#append LogsCustomPipeline#append}
  */
  readonly append?: LogsCustomPipelineProcessorArrayProcessorOperationAppend;
  /**
  * length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#length LogsCustomPipeline#length}
  */
  readonly length?: LogsCustomPipelineProcessorArrayProcessorOperationLength;
  /**
  * select block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#select LogsCustomPipeline#select}
  */
  readonly select?: LogsCustomPipelineProcessorArrayProcessorOperationSelect;
}

export function logsCustomPipelineProcessorArrayProcessorOperationToTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationOutputReference | LogsCustomPipelineProcessorArrayProcessorOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: logsCustomPipelineProcessorArrayProcessorOperationAppendToTerraform(struct!.append),
    length: logsCustomPipelineProcessorArrayProcessorOperationLengthToTerraform(struct!.length),
    select: logsCustomPipelineProcessorArrayProcessorOperationSelectToTerraform(struct!.select),
  }
}


export function logsCustomPipelineProcessorArrayProcessorOperationToHclTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOperationOutputReference | LogsCustomPipelineProcessorArrayProcessorOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: logsCustomPipelineProcessorArrayProcessorOperationAppendToHclTerraform(struct!.append),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorArrayProcessorOperationAppendList",
    },
    length: {
      value: logsCustomPipelineProcessorArrayProcessorOperationLengthToHclTerraform(struct!.length),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorArrayProcessorOperationLengthList",
    },
    select: {
      value: logsCustomPipelineProcessorArrayProcessorOperationSelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorArrayProcessorOperationSelectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorArrayProcessorOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorArrayProcessorOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append?.internalValue;
    }
    if (this._length?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length?.internalValue;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorArrayProcessorOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._append.internalValue = undefined;
      this._length.internalValue = undefined;
      this._select.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._append.internalValue = value.append;
      this._length.internalValue = value.length;
      this._select.internalValue = value.select;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append = new LogsCustomPipelineProcessorArrayProcessorOperationAppendOutputReference(this, "append");
  public get append() {
    return this._append;
  }
  public putAppend(value: LogsCustomPipelineProcessorArrayProcessorOperationAppend) {
    this._append.internalValue = value;
  }
  public resetAppend() {
    this._append.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append.internalValue;
  }

  // length - computed: false, optional: true, required: false
  private _length = new LogsCustomPipelineProcessorArrayProcessorOperationLengthOutputReference(this, "length");
  public get length() {
    return this._length;
  }
  public putLength(value: LogsCustomPipelineProcessorArrayProcessorOperationLength) {
    this._length.internalValue = value;
  }
  public resetLength() {
    this._length.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length.internalValue;
  }

  // select - computed: false, optional: true, required: false
  private _select = new LogsCustomPipelineProcessorArrayProcessorOperationSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: LogsCustomPipelineProcessorArrayProcessorOperationSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}
export interface LogsCustomPipelineProcessorArrayProcessor {
  /**
  * Boolean value to enable your processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Your processor name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#operation LogsCustomPipeline#operation}
  */
  readonly operation: LogsCustomPipelineProcessorArrayProcessorOperation;
}

export function logsCustomPipelineProcessorArrayProcessorToTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOutputReference | LogsCustomPipelineProcessorArrayProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    operation: logsCustomPipelineProcessorArrayProcessorOperationToTerraform(struct!.operation),
  }
}


export function logsCustomPipelineProcessorArrayProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorArrayProcessorOutputReference | LogsCustomPipelineProcessorArrayProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: logsCustomPipelineProcessorArrayProcessorOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorArrayProcessorOperationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorArrayProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorArrayProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorArrayProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._operation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._operation.internalValue = value.operation;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // operation - computed: false, optional: false, required: true
  private _operation = new LogsCustomPipelineProcessorArrayProcessorOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: LogsCustomPipelineProcessorArrayProcessorOperation) {
    this._operation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }
}
export interface LogsCustomPipelineProcessorAttributeRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Override the target element if already set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Defines where the sources are from (log `attribute` or `tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source_type LogsCustomPipeline#source_type}
  */
  readonly sourceType: string;
  /**
  * List of source attributes or tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Final attribute or tag name to remap the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Defines if the target is a log `attribute` or `tag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target_type LogsCustomPipeline#target_type}
  */
  readonly targetType: string;
}

export function logsCustomPipelineProcessorAttributeRemapperToTerraform(struct?: LogsCustomPipelineProcessorAttributeRemapperOutputReference | LogsCustomPipelineProcessorAttributeRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    override_on_conflict: cdktf.booleanToTerraform(struct!.overrideOnConflict),
    preserve_source: cdktf.booleanToTerraform(struct!.preserveSource),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
    target_format: cdktf.stringToTerraform(struct!.targetFormat),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function logsCustomPipelineProcessorAttributeRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorAttributeRemapperOutputReference | LogsCustomPipelineProcessorAttributeRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_on_conflict: {
      value: cdktf.booleanToHclTerraform(struct!.overrideOnConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_source: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_format: {
      value: cdktf.stringToHclTerraform(struct!.targetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorAttributeRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorAttributeRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideOnConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideOnConflict = this._overrideOnConflict;
    }
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFormat = this._targetFormat;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorAttributeRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._overrideOnConflict = undefined;
      this._preserveSource = undefined;
      this._sourceType = undefined;
      this._sources = undefined;
      this._target = undefined;
      this._targetFormat = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._overrideOnConflict = value.overrideOnConflict;
      this._preserveSource = value.preserveSource;
      this._sourceType = value.sourceType;
      this._sources = value.sources;
      this._target = value.target;
      this._targetFormat = value.targetFormat;
      this._targetType = value.targetType;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // override_on_conflict - computed: false, optional: true, required: false
  private _overrideOnConflict?: boolean | cdktf.IResolvable; 
  public get overrideOnConflict() {
    return this.getBooleanAttribute('override_on_conflict');
  }
  public set overrideOnConflict(value: boolean | cdktf.IResolvable) {
    this._overrideOnConflict = value;
  }
  public resetOverrideOnConflict() {
    this._overrideOnConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideOnConflictInput() {
    return this._overrideOnConflict;
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktf.IResolvable) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_format - computed: false, optional: true, required: false
  private _targetFormat?: string; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface LogsCustomPipelineProcessorCategoryProcessorCategoryFilter {
  /**
  * Filter criteria of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

export function logsCustomPipelineProcessorCategoryProcessorCategoryFilterToTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorCategoryFilterOutputReference | LogsCustomPipelineProcessorCategoryProcessorCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logsCustomPipelineProcessorCategoryProcessorCategoryFilterToHclTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorCategoryFilterOutputReference | LogsCustomPipelineProcessorCategoryProcessorCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorCategoryProcessorCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorCategoryProcessorCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorCategoryProcessorCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface LogsCustomPipelineProcessorCategoryProcessorCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorCategoryProcessorCategoryFilter;
}

export function logsCustomPipelineProcessorCategoryProcessorCategoryToTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    filter: logsCustomPipelineProcessorCategoryProcessorCategoryFilterToTerraform(struct!.filter),
  }
}


export function logsCustomPipelineProcessorCategoryProcessorCategoryToHclTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: logsCustomPipelineProcessorCategoryProcessorCategoryFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorCategoryProcessorCategoryFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorCategoryProcessorCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._filter.internalValue = value.filter;
    }
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

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsCustomPipelineProcessorCategoryProcessorCategoryFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsCustomPipelineProcessorCategoryProcessorCategoryFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class LogsCustomPipelineProcessorCategoryProcessorCategoryList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorCategoryProcessorCategoryOutputReference {
    return new LogsCustomPipelineProcessorCategoryProcessorCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorCategoryProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the target attribute whose value is defined by the matching category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#category LogsCustomPipeline#category}
  */
  readonly category: LogsCustomPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable;
}

export function logsCustomPipelineProcessorCategoryProcessorToTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorOutputReference | LogsCustomPipelineProcessorCategoryProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
    category: cdktf.listMapper(logsCustomPipelineProcessorCategoryProcessorCategoryToTerraform, true)(struct!.category),
  }
}


export function logsCustomPipelineProcessorCategoryProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorOutputReference | LogsCustomPipelineProcessorCategoryProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorCategoryProcessorCategoryToHclTerraform, true)(struct!.category),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorCategoryProcessorCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorCategoryProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorCategoryProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorCategoryProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._target = undefined;
      this._category.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._target = value.target;
      this._category.internalValue = value.category;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // category - computed: false, optional: false, required: true
  private _category = new LogsCustomPipelineProcessorCategoryProcessorCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: LogsCustomPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}
export interface LogsCustomPipelineProcessorDateRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorDateRemapperToTerraform(struct?: LogsCustomPipelineProcessorDateRemapperOutputReference | LogsCustomPipelineProcessorDateRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorDateRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorDateRemapperOutputReference | LogsCustomPipelineProcessorDateRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorDateRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorDateRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorDateRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorDecoderProcessor {
  /**
  * Encoding type: base64 or base16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#binary_to_text_encoding LogsCustomPipeline#binary_to_text_encoding}
  */
  readonly binaryToTextEncoding: string;
  /**
  * Input representation: utf-8 or integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#input_representation LogsCustomPipeline#input_representation}
  */
  readonly inputRepresentation: string;
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Encoded message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Decoded message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorDecoderProcessorToTerraform(struct?: LogsCustomPipelineProcessorDecoderProcessorOutputReference | LogsCustomPipelineProcessorDecoderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_to_text_encoding: cdktf.stringToTerraform(struct!.binaryToTextEncoding),
    input_representation: cdktf.stringToTerraform(struct!.inputRepresentation),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorDecoderProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorDecoderProcessorOutputReference | LogsCustomPipelineProcessorDecoderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_to_text_encoding: {
      value: cdktf.stringToHclTerraform(struct!.binaryToTextEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_representation: {
      value: cdktf.stringToHclTerraform(struct!.inputRepresentation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorDecoderProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorDecoderProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryToTextEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryToTextEncoding = this._binaryToTextEncoding;
    }
    if (this._inputRepresentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputRepresentation = this._inputRepresentation;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorDecoderProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryToTextEncoding = undefined;
      this._inputRepresentation = undefined;
      this._isEnabled = undefined;
      this._name = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryToTextEncoding = value.binaryToTextEncoding;
      this._inputRepresentation = value.inputRepresentation;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // binary_to_text_encoding - computed: false, optional: false, required: true
  private _binaryToTextEncoding?: string; 
  public get binaryToTextEncoding() {
    return this.getStringAttribute('binary_to_text_encoding');
  }
  public set binaryToTextEncoding(value: string) {
    this._binaryToTextEncoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryToTextEncodingInput() {
    return this._binaryToTextEncoding;
  }

  // input_representation - computed: false, optional: false, required: true
  private _inputRepresentation?: string; 
  public get inputRepresentation() {
    return this.getStringAttribute('input_representation');
  }
  public set inputRepresentation(value: string) {
    this._inputRepresentation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRepresentationInput() {
    return this._inputRepresentation;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorGeoIpParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorGeoIpParserToTerraform(struct?: LogsCustomPipelineProcessorGeoIpParserOutputReference | LogsCustomPipelineProcessorGeoIpParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorGeoIpParserToHclTerraform(struct?: LogsCustomPipelineProcessorGeoIpParserOutputReference | LogsCustomPipelineProcessorGeoIpParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorGeoIpParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorGeoIpParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorGeoIpParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorGrokParserGrok {
  /**
  * Match rules for your grok parser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#match_rules LogsCustomPipeline#match_rules}
  */
  readonly matchRules: string;
  /**
  * Support rules for your grok parser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#support_rules LogsCustomPipeline#support_rules}
  */
  readonly supportRules: string;
}

export function logsCustomPipelineProcessorGrokParserGrokToTerraform(struct?: LogsCustomPipelineProcessorGrokParserGrokOutputReference | LogsCustomPipelineProcessorGrokParserGrok): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_rules: cdktf.stringToTerraform(struct!.matchRules),
    support_rules: cdktf.stringToTerraform(struct!.supportRules),
  }
}


export function logsCustomPipelineProcessorGrokParserGrokToHclTerraform(struct?: LogsCustomPipelineProcessorGrokParserGrokOutputReference | LogsCustomPipelineProcessorGrokParserGrok): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_rules: {
      value: cdktf.stringToHclTerraform(struct!.matchRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_rules: {
      value: cdktf.stringToHclTerraform(struct!.supportRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorGrokParserGrokOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorGrokParserGrok | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules;
    }
    if (this._supportRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportRules = this._supportRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorGrokParserGrok | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchRules = undefined;
      this._supportRules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchRules = value.matchRules;
      this._supportRules = value.supportRules;
    }
  }

  // match_rules - computed: false, optional: false, required: true
  private _matchRules?: string; 
  public get matchRules() {
    return this.getStringAttribute('match_rules');
  }
  public set matchRules(value: string) {
    this._matchRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules;
  }

  // support_rules - computed: false, optional: false, required: true
  private _supportRules?: string; 
  public get supportRules() {
    return this.getStringAttribute('support_rules');
  }
  public set supportRules(value: string) {
    this._supportRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportRulesInput() {
    return this._supportRules;
  }
}
export interface LogsCustomPipelineProcessorGrokParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of sample logs for this parser. It can save up to 5 samples. Each sample takes up to 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#samples LogsCustomPipeline#samples}
  */
  readonly samples?: string[];
  /**
  * Name of the log attribute to parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * grok block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#grok LogsCustomPipeline#grok}
  */
  readonly grok: LogsCustomPipelineProcessorGrokParserGrok;
}

export function logsCustomPipelineProcessorGrokParserToTerraform(struct?: LogsCustomPipelineProcessorGrokParserOutputReference | LogsCustomPipelineProcessorGrokParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    samples: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samples),
    source: cdktf.stringToTerraform(struct!.source),
    grok: logsCustomPipelineProcessorGrokParserGrokToTerraform(struct!.grok),
  }
}


export function logsCustomPipelineProcessorGrokParserToHclTerraform(struct?: LogsCustomPipelineProcessorGrokParserOutputReference | LogsCustomPipelineProcessorGrokParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samples: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok: {
      value: logsCustomPipelineProcessorGrokParserGrokToHclTerraform(struct!.grok),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorGrokParserGrokList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorGrokParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorGrokParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._grok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grok = this._grok?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorGrokParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._samples = undefined;
      this._source = undefined;
      this._grok.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._samples = value.samples;
      this._source = value.source;
      this._grok.internalValue = value.grok;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // samples - computed: false, optional: true, required: false
  private _samples?: string[]; 
  public get samples() {
    return this.getListAttribute('samples');
  }
  public set samples(value: string[]) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // grok - computed: false, optional: false, required: true
  private _grok = new LogsCustomPipelineProcessorGrokParserGrokOutputReference(this, "grok");
  public get grok() {
    return this._grok;
  }
  public putGrok(value: LogsCustomPipelineProcessorGrokParserGrok) {
    this._grok.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok.internalValue;
  }
}
export interface LogsCustomPipelineProcessorLookupProcessor {
  /**
  * Default lookup value to use if there is no entry in the lookup table for the value of the source attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#default_lookup LogsCustomPipeline#default_lookup}
  */
  readonly defaultLookup?: string;
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of entries of the lookup table using `key,value` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#lookup_table LogsCustomPipeline#lookup_table}
  */
  readonly lookupTable: string[];
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorLookupProcessorToTerraform(struct?: LogsCustomPipelineProcessorLookupProcessorOutputReference | LogsCustomPipelineProcessorLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_lookup: cdktf.stringToTerraform(struct!.defaultLookup),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    lookup_table: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lookupTable),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorLookupProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorLookupProcessorOutputReference | LogsCustomPipelineProcessorLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_lookup: {
      value: cdktf.stringToHclTerraform(struct!.defaultLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lookup_table: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lookupTable),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorLookupProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorLookupProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLookup = this._defaultLookup;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._lookupTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupTable = this._lookupTable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorLookupProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLookup = undefined;
      this._isEnabled = undefined;
      this._lookupTable = undefined;
      this._name = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLookup = value.defaultLookup;
      this._isEnabled = value.isEnabled;
      this._lookupTable = value.lookupTable;
      this._name = value.name;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // default_lookup - computed: false, optional: true, required: false
  private _defaultLookup?: string; 
  public get defaultLookup() {
    return this.getStringAttribute('default_lookup');
  }
  public set defaultLookup(value: string) {
    this._defaultLookup = value;
  }
  public resetDefaultLookup() {
    this._defaultLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLookupInput() {
    return this._defaultLookup;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // lookup_table - computed: false, optional: false, required: true
  private _lookupTable?: string[]; 
  public get lookupTable() {
    return this.getListAttribute('lookup_table');
  }
  public set lookupTable(value: string[]) {
    this._lookupTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupTableInput() {
    return this._lookupTable;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorMessageRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorMessageRemapperToTerraform(struct?: LogsCustomPipelineProcessorMessageRemapperOutputReference | LogsCustomPipelineProcessorMessageRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorMessageRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorMessageRemapperOutputReference | LogsCustomPipelineProcessorMessageRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorMessageRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorMessageRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorMessageRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorPipelineFilter {
  /**
  * Filter criteria of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

export function logsCustomPipelineProcessorPipelineFilterToTerraform(struct?: LogsCustomPipelineProcessorPipelineFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logsCustomPipelineProcessorPipelineFilterToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorPipelineFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class LogsCustomPipelineProcessorPipelineFilterList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorPipelineFilter[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorPipelineFilterOutputReference {
    return new LogsCustomPipelineProcessorPipelineFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor {
  /**
  * Arithmetic operation between one or more log attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#expression LogsCustomPipeline#expression}
  */
  readonly expression: string;
  /**
  * Boolean value to enable your pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, it replaces all missing attributes of expression by 0, false skips the operation if an attribute is missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * Your pipeline name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the attribute that contains the result of the arithmetic operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorArithmeticProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_replace_missing: cdktf.booleanToTerraform(struct!.isReplaceMissing),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorArithmeticProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_replace_missing: {
      value: cdktf.booleanToHclTerraform(struct!.isReplaceMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isReplaceMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReplaceMissing = this._isReplaceMissing;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._isEnabled = undefined;
      this._isReplaceMissing = undefined;
      this._name = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._isEnabled = value.isEnabled;
      this._isReplaceMissing = value.isReplaceMissing;
      this._name = value.name;
      this._target = value.target;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing');
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppend {
  /**
  * Remove or preserve the remapped source element. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Attribute path containing the value to append.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Attribute path of the array to append to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_source: cdktf.booleanToTerraform(struct!.preserveSource),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_source: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preserveSource = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preserveSource = value.preserveSource;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktf.IResolvable) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLength {
  /**
  * Attribute path of the array to compute the length of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Attribute that receives the computed length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelect {
  /**
  * Filter expression (e.g. key1:value1 OR key2:value2) used to find the matching element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: string;
  /**
  * Attribute path of the array to search into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Attribute that receives the extracted value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * Attribute key from the matching object that should be extracted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#value_to_extract LogsCustomPipeline#value_to_extract}
  */
  readonly valueToExtract: string;
}

export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
    value_to_extract: cdktf.stringToTerraform(struct!.valueToExtract),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_extract: {
      value: cdktf.stringToHclTerraform(struct!.valueToExtract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._valueToExtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToExtract = this._valueToExtract;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._source = undefined;
      this._target = undefined;
      this._valueToExtract = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._source = value.source;
      this._target = value.target;
      this._valueToExtract = value.valueToExtract;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // value_to_extract - computed: false, optional: false, required: true
  private _valueToExtract?: string; 
  public get valueToExtract() {
    return this.getStringAttribute('value_to_extract');
  }
  public set valueToExtract(value: string) {
    this._valueToExtract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToExtractInput() {
    return this._valueToExtract;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperation {
  /**
  * append block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#append LogsCustomPipeline#append}
  */
  readonly append?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppend;
  /**
  * length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#length LogsCustomPipeline#length}
  */
  readonly length?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLength;
  /**
  * select block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#select LogsCustomPipeline#select}
  */
  readonly select?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelect;
}

export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendToTerraform(struct!.append),
    length: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthToTerraform(struct!.length),
    select: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectToTerraform(struct!.select),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendToHclTerraform(struct!.append),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendList",
    },
    length: {
      value: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthToHclTerraform(struct!.length),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthList",
    },
    select: {
      value: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectToHclTerraform(struct!.select),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append?.internalValue;
    }
    if (this._length?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length?.internalValue;
    }
    if (this._select?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.select = this._select?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._append.internalValue = undefined;
      this._length.internalValue = undefined;
      this._select.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._append.internalValue = value.append;
      this._length.internalValue = value.length;
      this._select.internalValue = value.select;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append = new LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppendOutputReference(this, "append");
  public get append() {
    return this._append;
  }
  public putAppend(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationAppend) {
    this._append.internalValue = value;
  }
  public resetAppend() {
    this._append.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append.internalValue;
  }

  // length - computed: false, optional: true, required: false
  private _length = new LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLengthOutputReference(this, "length");
  public get length() {
    return this._length;
  }
  public putLength(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationLength) {
    this._length.internalValue = value;
  }
  public resetLength() {
    this._length.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length.internalValue;
  }

  // select - computed: false, optional: true, required: false
  private _select = new LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelectOutputReference(this, "select");
  public get select() {
    return this._select;
  }
  public putSelect(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationSelect) {
    this._select.internalValue = value;
  }
  public resetSelect() {
    this._select.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select.internalValue;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorArrayProcessor {
  /**
  * Boolean value to enable your processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Your processor name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#operation LogsCustomPipeline#operation}
  */
  readonly operation: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperation;
}

export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    operation: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationToTerraform(struct!.operation),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorArrayProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorArrayProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: logsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorArrayProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._operation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._operation.internalValue = value.operation;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // operation - computed: false, optional: false, required: true
  private _operation = new LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOperation) {
    this._operation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Override the target element if already set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Defines where the sources are from (log `attribute` or `tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source_type LogsCustomPipeline#source_type}
  */
  readonly sourceType: string;
  /**
  * List of source attributes or tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Final attribute or tag name to remap the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Defines if the target is a log `attribute` or `tag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target_type LogsCustomPipeline#target_type}
  */
  readonly targetType: string;
}

export function logsCustomPipelineProcessorPipelineProcessorAttributeRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    override_on_conflict: cdktf.booleanToTerraform(struct!.overrideOnConflict),
    preserve_source: cdktf.booleanToTerraform(struct!.preserveSource),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
    target_format: cdktf.stringToTerraform(struct!.targetFormat),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorAttributeRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_on_conflict: {
      value: cdktf.booleanToHclTerraform(struct!.overrideOnConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_source: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_format: {
      value: cdktf.stringToHclTerraform(struct!.targetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorAttributeRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideOnConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideOnConflict = this._overrideOnConflict;
    }
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFormat = this._targetFormat;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._overrideOnConflict = undefined;
      this._preserveSource = undefined;
      this._sourceType = undefined;
      this._sources = undefined;
      this._target = undefined;
      this._targetFormat = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._overrideOnConflict = value.overrideOnConflict;
      this._preserveSource = value.preserveSource;
      this._sourceType = value.sourceType;
      this._sources = value.sources;
      this._target = value.target;
      this._targetFormat = value.targetFormat;
      this._targetType = value.targetType;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // override_on_conflict - computed: false, optional: true, required: false
  private _overrideOnConflict?: boolean | cdktf.IResolvable; 
  public get overrideOnConflict() {
    return this.getBooleanAttribute('override_on_conflict');
  }
  public set overrideOnConflict(value: boolean | cdktf.IResolvable) {
    this._overrideOnConflict = value;
  }
  public resetOverrideOnConflict() {
    this._overrideOnConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideOnConflictInput() {
    return this._overrideOnConflict;
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktf.IResolvable) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_format - computed: false, optional: true, required: false
  private _targetFormat?: string; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter {
  /**
  * Filter criteria of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

export function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterOutputReference | LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterOutputReference | LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter;
}

export function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    filter: logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterToTerraform(struct!.filter),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._filter.internalValue = value.filter;
    }
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

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryOutputReference {
    return new LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the target attribute whose value is defined by the matching category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#category LogsCustomPipeline#category}
  */
  readonly category: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable;
}

export function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
    category: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryToTerraform, true)(struct!.category),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryToHclTerraform, true)(struct!.category),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._target = undefined;
      this._category.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._target = value.target;
      this._category.internalValue = value.category;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // category - computed: false, optional: false, required: true
  private _category = new LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorDateRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorPipelineProcessorDateRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorDateRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorDateRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorDateRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorDateRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorDateRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorDateRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorDateRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorDateRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorDecoderProcessor {
  /**
  * Encoding type: base64 or base16
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#binary_to_text_encoding LogsCustomPipeline#binary_to_text_encoding}
  */
  readonly binaryToTextEncoding: string;
  /**
  * Input representation: utf-8 or integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#input_representation LogsCustomPipeline#input_representation}
  */
  readonly inputRepresentation: string;
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Encoded message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Decoded message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorDecoderProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorDecoderProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorDecoderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_to_text_encoding: cdktf.stringToTerraform(struct!.binaryToTextEncoding),
    input_representation: cdktf.stringToTerraform(struct!.inputRepresentation),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorDecoderProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorDecoderProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorDecoderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_to_text_encoding: {
      value: cdktf.stringToHclTerraform(struct!.binaryToTextEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_representation: {
      value: cdktf.stringToHclTerraform(struct!.inputRepresentation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorDecoderProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorDecoderProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryToTextEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryToTextEncoding = this._binaryToTextEncoding;
    }
    if (this._inputRepresentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputRepresentation = this._inputRepresentation;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorDecoderProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryToTextEncoding = undefined;
      this._inputRepresentation = undefined;
      this._isEnabled = undefined;
      this._name = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryToTextEncoding = value.binaryToTextEncoding;
      this._inputRepresentation = value.inputRepresentation;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // binary_to_text_encoding - computed: false, optional: false, required: true
  private _binaryToTextEncoding?: string; 
  public get binaryToTextEncoding() {
    return this.getStringAttribute('binary_to_text_encoding');
  }
  public set binaryToTextEncoding(value: string) {
    this._binaryToTextEncoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryToTextEncodingInput() {
    return this._binaryToTextEncoding;
  }

  // input_representation - computed: false, optional: false, required: true
  private _inputRepresentation?: string; 
  public get inputRepresentation() {
    return this.getStringAttribute('input_representation');
  }
  public set inputRepresentation(value: string) {
    this._inputRepresentation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRepresentationInput() {
    return this._inputRepresentation;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorGeoIpParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorGeoIpParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGeoIpParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorGeoIpParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorGeoIpParserToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGeoIpParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorGeoIpParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorGeoIpParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorGeoIpParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorGeoIpParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok {
  /**
  * Match rules for your grok parser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#match_rules LogsCustomPipeline#match_rules}
  */
  readonly matchRules: string;
  /**
  * Support rules for your grok parser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#support_rules LogsCustomPipeline#support_rules}
  */
  readonly supportRules: string;
}

export function logsCustomPipelineProcessorPipelineProcessorGrokParserGrokToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokOutputReference | LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_rules: cdktf.stringToTerraform(struct!.matchRules),
    support_rules: cdktf.stringToTerraform(struct!.supportRules),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorGrokParserGrokToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokOutputReference | LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_rules: {
      value: cdktf.stringToHclTerraform(struct!.matchRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_rules: {
      value: cdktf.stringToHclTerraform(struct!.supportRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRules = this._matchRules;
    }
    if (this._supportRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportRules = this._supportRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchRules = undefined;
      this._supportRules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchRules = value.matchRules;
      this._supportRules = value.supportRules;
    }
  }

  // match_rules - computed: false, optional: false, required: true
  private _matchRules?: string; 
  public get matchRules() {
    return this.getStringAttribute('match_rules');
  }
  public set matchRules(value: string) {
    this._matchRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRulesInput() {
    return this._matchRules;
  }

  // support_rules - computed: false, optional: false, required: true
  private _supportRules?: string; 
  public get supportRules() {
    return this.getStringAttribute('support_rules');
  }
  public set supportRules(value: string) {
    this._supportRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportRulesInput() {
    return this._supportRules;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorGrokParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of sample logs for this parser. It can save up to 5 samples. Each sample takes up to 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#samples LogsCustomPipeline#samples}
  */
  readonly samples?: string[];
  /**
  * Name of the log attribute to parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * grok block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#grok LogsCustomPipeline#grok}
  */
  readonly grok: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok;
}

export function logsCustomPipelineProcessorPipelineProcessorGrokParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGrokParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorGrokParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    samples: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.samples),
    source: cdktf.stringToTerraform(struct!.source),
    grok: logsCustomPipelineProcessorPipelineProcessorGrokParserGrokToTerraform(struct!.grok),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorGrokParserToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGrokParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorGrokParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samples: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.samples),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok: {
      value: logsCustomPipelineProcessorPipelineProcessorGrokParserGrokToHclTerraform(struct!.grok),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorGrokParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorGrokParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._grok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grok = this._grok?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorGrokParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._samples = undefined;
      this._source = undefined;
      this._grok.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._samples = value.samples;
      this._source = value.source;
      this._grok.internalValue = value.grok;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // samples - computed: false, optional: true, required: false
  private _samples?: string[]; 
  public get samples() {
    return this.getListAttribute('samples');
  }
  public set samples(value: string[]) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // grok - computed: false, optional: false, required: true
  private _grok = new LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokOutputReference(this, "grok");
  public get grok() {
    return this._grok;
  }
  public putGrok(value: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok) {
    this._grok.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok.internalValue;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorLookupProcessor {
  /**
  * Default lookup value to use if there is no entry in the lookup table for the value of the source attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#default_lookup LogsCustomPipeline#default_lookup}
  */
  readonly defaultLookup?: string;
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of entries of the lookup table using `key,value` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#lookup_table LogsCustomPipeline#lookup_table}
  */
  readonly lookupTable: string[];
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorLookupProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorLookupProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_lookup: cdktf.stringToTerraform(struct!.defaultLookup),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    lookup_table: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lookupTable),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorLookupProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorLookupProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_lookup: {
      value: cdktf.stringToHclTerraform(struct!.defaultLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lookup_table: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lookupTable),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorLookupProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorLookupProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLookup = this._defaultLookup;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._lookupTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupTable = this._lookupTable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorLookupProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLookup = undefined;
      this._isEnabled = undefined;
      this._lookupTable = undefined;
      this._name = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLookup = value.defaultLookup;
      this._isEnabled = value.isEnabled;
      this._lookupTable = value.lookupTable;
      this._name = value.name;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // default_lookup - computed: false, optional: true, required: false
  private _defaultLookup?: string; 
  public get defaultLookup() {
    return this.getStringAttribute('default_lookup');
  }
  public set defaultLookup(value: string) {
    this._defaultLookup = value;
  }
  public resetDefaultLookup() {
    this._defaultLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLookupInput() {
    return this._defaultLookup;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // lookup_table - computed: false, optional: false, required: true
  private _lookupTable?: string[]; 
  public get lookupTable() {
    return this.getListAttribute('lookup_table');
  }
  public set lookupTable(value: string[]) {
    this._lookupTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupTableInput() {
    return this._lookupTable;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorMessageRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorPipelineProcessorMessageRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorMessageRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorMessageRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorMessageRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorMessageRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorMessageRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorMessageRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorMessageRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorMessageRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the Reference Table for the source attribute and their associated target attribute values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#lookup_enrichment_table LogsCustomPipeline#lookup_enrichment_table}
  */
  readonly lookupEnrichmentTable: string;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    lookup_enrichment_table: cdktf.stringToTerraform(struct!.lookupEnrichmentTable),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lookup_enrichment_table: {
      value: cdktf.stringToHclTerraform(struct!.lookupEnrichmentTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._lookupEnrichmentTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupEnrichmentTable = this._lookupEnrichmentTable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._lookupEnrichmentTable = undefined;
      this._name = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._lookupEnrichmentTable = value.lookupEnrichmentTable;
      this._name = value.name;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // lookup_enrichment_table - computed: false, optional: false, required: true
  private _lookupEnrichmentTable?: string; 
  public get lookupEnrichmentTable() {
    return this.getStringAttribute('lookup_enrichment_table');
  }
  public set lookupEnrichmentTable(value: string) {
    this._lookupEnrichmentTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupEnrichmentTableInput() {
    return this._lookupEnrichmentTable;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter {
  /**
  * Filter criteria of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories {
  /**
  * ID to inject into the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#id LogsCustomPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Value to assign to target schema field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    filter: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToTerraform(struct!.filter),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._filter.internalValue = value.filter;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
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

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesOutputReference {
    return new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback {
  /**
  * Fallback sources used to populate value of field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources?: { [key: string]: string };
  /**
  * Values that define when the fallback is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#values LogsCustomPipeline#values}
  */
  readonly values?: { [key: string]: string };
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sources),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sources = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sources = value.sources;
      this._values = value.values;
    }
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: { [key: string]: string }; 
  public get sources() {
    return this.getStringMapAttribute('sources');
  }
  public set sources(value: { [key: string]: string }) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets {
  /**
  * ID of the field to map log attributes to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#id LogsCustomPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the field to map log attributes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper {
  /**
  * Name of the logs schema category mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#categories LogsCustomPipeline#categories}
  */
  readonly categories: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories[] | cdktf.IResolvable;
  /**
  * fallback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#fallback LogsCustomPipeline#fallback}
  */
  readonly fallback?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#targets LogsCustomPipeline#targets}
  */
  readonly targets: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    categories: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToTerraform, true)(struct!.categories),
    fallback: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToTerraform(struct!.fallback),
    targets: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToTerraform(struct!.targets),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categories: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToHclTerraform, true)(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesList",
    },
    fallback: {
      value: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackList",
    },
    targets: {
      value: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToHclTerraform(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._categories.internalValue = undefined;
      this._fallback.internalValue = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._categories.internalValue = value.categories;
      this._fallback.internalValue = value.fallback;
      this._targets.internalValue = value.targets;
    }
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

  // categories - computed: false, optional: false, required: true
  private _categories = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference(this, "targets");
  public get targets() {
    return this._targets;
  }
  public putTargets(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperOutputReference {
    return new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper {
  /**
  * Name of the logs schema remapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * Override or not the target element if already set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Array of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Target field to map log source field to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    override_on_conflict: cdktf.booleanToTerraform(struct!.overrideOnConflict),
    preserve_source: cdktf.booleanToTerraform(struct!.preserveSource),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
    target_format: cdktf.stringToTerraform(struct!.targetFormat),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_on_conflict: {
      value: cdktf.booleanToHclTerraform(struct!.overrideOnConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_source: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_format: {
      value: cdktf.stringToHclTerraform(struct!.targetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideOnConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideOnConflict = this._overrideOnConflict;
    }
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFormat = this._targetFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overrideOnConflict = undefined;
      this._preserveSource = undefined;
      this._sources = undefined;
      this._target = undefined;
      this._targetFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overrideOnConflict = value.overrideOnConflict;
      this._preserveSource = value.preserveSource;
      this._sources = value.sources;
      this._target = value.target;
      this._targetFormat = value.targetFormat;
    }
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

  // override_on_conflict - computed: false, optional: true, required: false
  private _overrideOnConflict?: boolean | cdktf.IResolvable; 
  public get overrideOnConflict() {
    return this.getBooleanAttribute('override_on_conflict');
  }
  public set overrideOnConflict(value: boolean | cdktf.IResolvable) {
    this._overrideOnConflict = value;
  }
  public resetOverrideOnConflict() {
    this._overrideOnConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideOnConflictInput() {
    return this._overrideOnConflict;
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktf.IResolvable) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_format - computed: false, optional: true, required: false
  private _targetFormat?: string; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat;
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperOutputReference {
    return new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers {
  /**
  * schema_category_mapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_category_mapper LogsCustomPipeline#schema_category_mapper}
  */
  readonly schemaCategoryMapper?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper[] | cdktf.IResolvable;
  /**
  * schema_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_remapper LogsCustomPipeline#schema_remapper}
  */
  readonly schemaRemapper?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper[] | cdktf.IResolvable;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_category_mapper: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToTerraform, true)(struct!.schemaCategoryMapper),
    schema_remapper: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperToTerraform, true)(struct!.schemaRemapper),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_category_mapper: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToHclTerraform, true)(struct!.schemaCategoryMapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperList",
    },
    schema_remapper: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperToHclTerraform, true)(struct!.schemaRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaCategoryMapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaCategoryMapper = this._schemaCategoryMapper?.internalValue;
    }
    if (this._schemaRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRemapper = this._schemaRemapper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaCategoryMapper.internalValue = undefined;
      this._schemaRemapper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaCategoryMapper.internalValue = value.schemaCategoryMapper;
      this._schemaRemapper.internalValue = value.schemaRemapper;
    }
  }

  // schema_category_mapper - computed: false, optional: true, required: false
  private _schemaCategoryMapper = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperList(this, "schema_category_mapper", false);
  public get schemaCategoryMapper() {
    return this._schemaCategoryMapper;
  }
  public putSchemaCategoryMapper(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper[] | cdktf.IResolvable) {
    this._schemaCategoryMapper.internalValue = value;
  }
  public resetSchemaCategoryMapper() {
    this._schemaCategoryMapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaCategoryMapperInput() {
    return this._schemaCategoryMapper.internalValue;
  }

  // schema_remapper - computed: false, optional: true, required: false
  private _schemaRemapper = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapperList(this, "schema_remapper", false);
  public get schemaRemapper() {
    return this._schemaRemapper;
  }
  public putSchemaRemapper(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersSchemaRemapper[] | cdktf.IResolvable) {
    this._schemaRemapper.internalValue = value;
  }
  public resetSchemaRemapper() {
    this._schemaRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRemapperInput() {
    return this._schemaRemapper.internalValue;
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersOutputReference {
    return new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchema {
  /**
  * Class name of the schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#class_name LogsCustomPipeline#class_name}
  */
  readonly className: string;
  /**
  * Class UID of the schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#class_uid LogsCustomPipeline#class_uid}
  */
  readonly classUid: number;
  /**
  * Optional list of extensions to modify the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#extensions LogsCustomPipeline#extensions}
  */
  readonly extensions?: string[];
  /**
  * Optional list of profiles to modify the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#profiles LogsCustomPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * Type of schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_type LogsCustomPipeline#schema_type}
  */
  readonly schemaType: string;
  /**
  * Version of the schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#version LogsCustomPipeline#version}
  */
  readonly version: string;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    class_uid: cdktf.numberToTerraform(struct!.classUid),
    extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extensions),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_uid: {
      value: cdktf.numberToHclTerraform(struct!.classUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema_type: {
      value: cdktf.stringToHclTerraform(struct!.schemaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._classUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.classUid = this._classUid;
    }
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._className = undefined;
      this._classUid = undefined;
      this._extensions = undefined;
      this._profiles = undefined;
      this._schemaType = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._className = value.className;
      this._classUid = value.classUid;
      this._extensions = value.extensions;
      this._profiles = value.profiles;
      this._schemaType = value.schemaType;
      this._version = value.version;
    }
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // class_uid - computed: false, optional: false, required: true
  private _classUid?: number; 
  public get classUid() {
    return this.getNumberAttribute('class_uid');
  }
  public set classUid(value: number) {
    this._classUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classUidInput() {
    return this._classUid;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: string[]; 
  public get extensions() {
    return this.getListAttribute('extensions');
  }
  public set extensions(value: string[]) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // schema_type - computed: false, optional: false, required: true
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSchemaProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * mappers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#mappers LogsCustomPipeline#mappers}
  */
  readonly mappers: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers[] | cdktf.IResolvable;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema LogsCustomPipeline#schema}
  */
  readonly schema: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchema;
}

export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    mappers: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersToTerraform, true)(struct!.mappers),
    schema: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaToTerraform(struct!.schema),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSchemaProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorSchemaProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappers: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersToHclTerraform, true)(struct!.mappers),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersList",
    },
    schema: {
      value: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSchemaProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._mappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappers = this._mappers?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._mappers.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._mappers.internalValue = value.mappers;
      this._schema.internalValue = value.schema;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // mappers - computed: false, optional: false, required: true
  private _mappers = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappersList(this, "mappers", false);
  public get mappers() {
    return this._mappers;
  }
  public putMappers(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorMappers[] | cdktf.IResolvable) {
    this._mappers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappersInput() {
    return this._mappers.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorServiceRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorPipelineProcessorServiceRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorServiceRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorServiceRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorServiceRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorServiceRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorServiceRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorServiceRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorServiceRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorServiceRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorPipelineProcessorSpanIdRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorSpanIdRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorStatusRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorPipelineProcessorStatusRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorStatusRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorStatusRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorStatusRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorStatusRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorStatusRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorStatusRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorStatusRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorStatusRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If it replaces all missing attributes of template by an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * The name of the attribute that contains the result of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * The formula with one or more attributes and raw text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#template LogsCustomPipeline#template}
  */
  readonly template: string;
}

export function logsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_replace_missing: cdktf.booleanToTerraform(struct!.isReplaceMissing),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_replace_missing: {
      value: cdktf.booleanToHclTerraform(struct!.isReplaceMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isReplaceMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReplaceMissing = this._isReplaceMissing;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._isReplaceMissing = undefined;
      this._name = undefined;
      this._target = undefined;
      this._template = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._isReplaceMissing = value.isReplaceMissing;
      this._name = value.name;
      this._target = value.target;
      this._template = value.template;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing');
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorPipelineProcessorTraceIdRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorTraceIdRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorUrlParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Normalize the ending slashes or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#normalize_ending_slashes LogsCustomPipeline#normalize_ending_slashes}
  */
  readonly normalizeEndingSlashes?: boolean | cdktf.IResolvable;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorUrlParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorUrlParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorUrlParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    normalize_ending_slashes: cdktf.booleanToTerraform(struct!.normalizeEndingSlashes),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorUrlParserToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorUrlParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorUrlParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalize_ending_slashes: {
      value: cdktf.booleanToHclTerraform(struct!.normalizeEndingSlashes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorUrlParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorUrlParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._normalizeEndingSlashes !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizeEndingSlashes = this._normalizeEndingSlashes;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorUrlParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._normalizeEndingSlashes = undefined;
      this._sources = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._normalizeEndingSlashes = value.normalizeEndingSlashes;
      this._sources = value.sources;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // normalize_ending_slashes - computed: false, optional: true, required: false
  private _normalizeEndingSlashes?: boolean | cdktf.IResolvable; 
  public get normalizeEndingSlashes() {
    return this.getBooleanAttribute('normalize_ending_slashes');
  }
  public set normalizeEndingSlashes(value: boolean | cdktf.IResolvable) {
    this._normalizeEndingSlashes = value;
  }
  public resetNormalizeEndingSlashes() {
    this._normalizeEndingSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeEndingSlashesInput() {
    return this._normalizeEndingSlashes;
  }

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorUserAgentParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If the source attribute is URL encoded or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_encoded LogsCustomPipeline#is_encoded}
  */
  readonly isEncoded?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorPipelineProcessorUserAgentParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorUserAgentParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorUserAgentParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_encoded: cdktf.booleanToTerraform(struct!.isEncoded),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorUserAgentParserToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorUserAgentParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorUserAgentParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_encoded: {
      value: cdktf.booleanToHclTerraform(struct!.isEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorUserAgentParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessorUserAgentParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEncoded = this._isEncoded;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorUserAgentParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._isEncoded = undefined;
      this._name = undefined;
      this._sources = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._isEncoded = value.isEncoded;
      this._name = value.name;
      this._sources = value.sources;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_encoded - computed: false, optional: true, required: false
  private _isEncoded?: boolean | cdktf.IResolvable; 
  public get isEncoded() {
    return this.getBooleanAttribute('is_encoded');
  }
  public set isEncoded(value: boolean | cdktf.IResolvable) {
    this._isEncoded = value;
  }
  public resetIsEncoded() {
    this._isEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncodedInput() {
    return this._isEncoded;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessor {
  /**
  * arithmetic_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#arithmetic_processor LogsCustomPipeline#arithmetic_processor}
  */
  readonly arithmeticProcessor?: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor;
  /**
  * array_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#array_processor LogsCustomPipeline#array_processor}
  */
  readonly arrayProcessor?: LogsCustomPipelineProcessorPipelineProcessorArrayProcessor;
  /**
  * attribute_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#attribute_remapper LogsCustomPipeline#attribute_remapper}
  */
  readonly attributeRemapper?: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper;
  /**
  * category_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#category_processor LogsCustomPipeline#category_processor}
  */
  readonly categoryProcessor?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor;
  /**
  * date_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#date_remapper LogsCustomPipeline#date_remapper}
  */
  readonly dateRemapper?: LogsCustomPipelineProcessorPipelineProcessorDateRemapper;
  /**
  * decoder_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#decoder_processor LogsCustomPipeline#decoder_processor}
  */
  readonly decoderProcessor?: LogsCustomPipelineProcessorPipelineProcessorDecoderProcessor;
  /**
  * geo_ip_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#geo_ip_parser LogsCustomPipeline#geo_ip_parser}
  */
  readonly geoIpParser?: LogsCustomPipelineProcessorPipelineProcessorGeoIpParser;
  /**
  * grok_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#grok_parser LogsCustomPipeline#grok_parser}
  */
  readonly grokParser?: LogsCustomPipelineProcessorPipelineProcessorGrokParser;
  /**
  * lookup_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#lookup_processor LogsCustomPipeline#lookup_processor}
  */
  readonly lookupProcessor?: LogsCustomPipelineProcessorPipelineProcessorLookupProcessor;
  /**
  * message_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#message_remapper LogsCustomPipeline#message_remapper}
  */
  readonly messageRemapper?: LogsCustomPipelineProcessorPipelineProcessorMessageRemapper;
  /**
  * reference_table_lookup_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#reference_table_lookup_processor LogsCustomPipeline#reference_table_lookup_processor}
  */
  readonly referenceTableLookupProcessor?: LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessor;
  /**
  * schema_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_processor LogsCustomPipeline#schema_processor}
  */
  readonly schemaProcessor?: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessor;
  /**
  * service_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#service_remapper LogsCustomPipeline#service_remapper}
  */
  readonly serviceRemapper?: LogsCustomPipelineProcessorPipelineProcessorServiceRemapper;
  /**
  * span_id_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#span_id_remapper LogsCustomPipeline#span_id_remapper}
  */
  readonly spanIdRemapper?: LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapper;
  /**
  * status_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#status_remapper LogsCustomPipeline#status_remapper}
  */
  readonly statusRemapper?: LogsCustomPipelineProcessorPipelineProcessorStatusRemapper;
  /**
  * string_builder_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#string_builder_processor LogsCustomPipeline#string_builder_processor}
  */
  readonly stringBuilderProcessor?: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor;
  /**
  * trace_id_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#trace_id_remapper LogsCustomPipeline#trace_id_remapper}
  */
  readonly traceIdRemapper?: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper;
  /**
  * url_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#url_parser LogsCustomPipeline#url_parser}
  */
  readonly urlParser?: LogsCustomPipelineProcessorPipelineProcessorUrlParser;
  /**
  * user_agent_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#user_agent_parser LogsCustomPipeline#user_agent_parser}
  */
  readonly userAgentParser?: LogsCustomPipelineProcessorPipelineProcessorUserAgentParser;
}

export function logsCustomPipelineProcessorPipelineProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arithmetic_processor: logsCustomPipelineProcessorPipelineProcessorArithmeticProcessorToTerraform(struct!.arithmeticProcessor),
    array_processor: logsCustomPipelineProcessorPipelineProcessorArrayProcessorToTerraform(struct!.arrayProcessor),
    attribute_remapper: logsCustomPipelineProcessorPipelineProcessorAttributeRemapperToTerraform(struct!.attributeRemapper),
    category_processor: logsCustomPipelineProcessorPipelineProcessorCategoryProcessorToTerraform(struct!.categoryProcessor),
    date_remapper: logsCustomPipelineProcessorPipelineProcessorDateRemapperToTerraform(struct!.dateRemapper),
    decoder_processor: logsCustomPipelineProcessorPipelineProcessorDecoderProcessorToTerraform(struct!.decoderProcessor),
    geo_ip_parser: logsCustomPipelineProcessorPipelineProcessorGeoIpParserToTerraform(struct!.geoIpParser),
    grok_parser: logsCustomPipelineProcessorPipelineProcessorGrokParserToTerraform(struct!.grokParser),
    lookup_processor: logsCustomPipelineProcessorPipelineProcessorLookupProcessorToTerraform(struct!.lookupProcessor),
    message_remapper: logsCustomPipelineProcessorPipelineProcessorMessageRemapperToTerraform(struct!.messageRemapper),
    reference_table_lookup_processor: logsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorToTerraform(struct!.referenceTableLookupProcessor),
    schema_processor: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorToTerraform(struct!.schemaProcessor),
    service_remapper: logsCustomPipelineProcessorPipelineProcessorServiceRemapperToTerraform(struct!.serviceRemapper),
    span_id_remapper: logsCustomPipelineProcessorPipelineProcessorSpanIdRemapperToTerraform(struct!.spanIdRemapper),
    status_remapper: logsCustomPipelineProcessorPipelineProcessorStatusRemapperToTerraform(struct!.statusRemapper),
    string_builder_processor: logsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorToTerraform(struct!.stringBuilderProcessor),
    trace_id_remapper: logsCustomPipelineProcessorPipelineProcessorTraceIdRemapperToTerraform(struct!.traceIdRemapper),
    url_parser: logsCustomPipelineProcessorPipelineProcessorUrlParserToTerraform(struct!.urlParser),
    user_agent_parser: logsCustomPipelineProcessorPipelineProcessorUserAgentParserToTerraform(struct!.userAgentParser),
  }
}


export function logsCustomPipelineProcessorPipelineProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arithmetic_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorArithmeticProcessorToHclTerraform(struct!.arithmeticProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessorList",
    },
    array_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorArrayProcessorToHclTerraform(struct!.arrayProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorArrayProcessorList",
    },
    attribute_remapper: {
      value: logsCustomPipelineProcessorPipelineProcessorAttributeRemapperToHclTerraform(struct!.attributeRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorAttributeRemapperList",
    },
    category_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorCategoryProcessorToHclTerraform(struct!.categoryProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorList",
    },
    date_remapper: {
      value: logsCustomPipelineProcessorPipelineProcessorDateRemapperToHclTerraform(struct!.dateRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorDateRemapperList",
    },
    decoder_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorDecoderProcessorToHclTerraform(struct!.decoderProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorDecoderProcessorList",
    },
    geo_ip_parser: {
      value: logsCustomPipelineProcessorPipelineProcessorGeoIpParserToHclTerraform(struct!.geoIpParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorGeoIpParserList",
    },
    grok_parser: {
      value: logsCustomPipelineProcessorPipelineProcessorGrokParserToHclTerraform(struct!.grokParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorGrokParserList",
    },
    lookup_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorLookupProcessorToHclTerraform(struct!.lookupProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorLookupProcessorList",
    },
    message_remapper: {
      value: logsCustomPipelineProcessorPipelineProcessorMessageRemapperToHclTerraform(struct!.messageRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorMessageRemapperList",
    },
    reference_table_lookup_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorToHclTerraform(struct!.referenceTableLookupProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorList",
    },
    schema_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorSchemaProcessorToHclTerraform(struct!.schemaProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorList",
    },
    service_remapper: {
      value: logsCustomPipelineProcessorPipelineProcessorServiceRemapperToHclTerraform(struct!.serviceRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorServiceRemapperList",
    },
    span_id_remapper: {
      value: logsCustomPipelineProcessorPipelineProcessorSpanIdRemapperToHclTerraform(struct!.spanIdRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapperList",
    },
    status_remapper: {
      value: logsCustomPipelineProcessorPipelineProcessorStatusRemapperToHclTerraform(struct!.statusRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorStatusRemapperList",
    },
    string_builder_processor: {
      value: logsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorToHclTerraform(struct!.stringBuilderProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorList",
    },
    trace_id_remapper: {
      value: logsCustomPipelineProcessorPipelineProcessorTraceIdRemapperToHclTerraform(struct!.traceIdRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapperList",
    },
    url_parser: {
      value: logsCustomPipelineProcessorPipelineProcessorUrlParserToHclTerraform(struct!.urlParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorUrlParserList",
    },
    user_agent_parser: {
      value: logsCustomPipelineProcessorPipelineProcessorUserAgentParserToHclTerraform(struct!.userAgentParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorUserAgentParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorPipelineProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arithmeticProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arithmeticProcessor = this._arithmeticProcessor?.internalValue;
    }
    if (this._arrayProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayProcessor = this._arrayProcessor?.internalValue;
    }
    if (this._attributeRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRemapper = this._attributeRemapper?.internalValue;
    }
    if (this._categoryProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryProcessor = this._categoryProcessor?.internalValue;
    }
    if (this._dateRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRemapper = this._dateRemapper?.internalValue;
    }
    if (this._decoderProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoderProcessor = this._decoderProcessor?.internalValue;
    }
    if (this._geoIpParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpParser = this._geoIpParser?.internalValue;
    }
    if (this._grokParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokParser = this._grokParser?.internalValue;
    }
    if (this._lookupProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupProcessor = this._lookupProcessor?.internalValue;
    }
    if (this._messageRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRemapper = this._messageRemapper?.internalValue;
    }
    if (this._referenceTableLookupProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTableLookupProcessor = this._referenceTableLookupProcessor?.internalValue;
    }
    if (this._schemaProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaProcessor = this._schemaProcessor?.internalValue;
    }
    if (this._serviceRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRemapper = this._serviceRemapper?.internalValue;
    }
    if (this._spanIdRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanIdRemapper = this._spanIdRemapper?.internalValue;
    }
    if (this._statusRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusRemapper = this._statusRemapper?.internalValue;
    }
    if (this._stringBuilderProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringBuilderProcessor = this._stringBuilderProcessor?.internalValue;
    }
    if (this._traceIdRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceIdRemapper = this._traceIdRemapper?.internalValue;
    }
    if (this._urlParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParser = this._urlParser?.internalValue;
    }
    if (this._userAgentParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentParser = this._userAgentParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arithmeticProcessor.internalValue = undefined;
      this._arrayProcessor.internalValue = undefined;
      this._attributeRemapper.internalValue = undefined;
      this._categoryProcessor.internalValue = undefined;
      this._dateRemapper.internalValue = undefined;
      this._decoderProcessor.internalValue = undefined;
      this._geoIpParser.internalValue = undefined;
      this._grokParser.internalValue = undefined;
      this._lookupProcessor.internalValue = undefined;
      this._messageRemapper.internalValue = undefined;
      this._referenceTableLookupProcessor.internalValue = undefined;
      this._schemaProcessor.internalValue = undefined;
      this._serviceRemapper.internalValue = undefined;
      this._spanIdRemapper.internalValue = undefined;
      this._statusRemapper.internalValue = undefined;
      this._stringBuilderProcessor.internalValue = undefined;
      this._traceIdRemapper.internalValue = undefined;
      this._urlParser.internalValue = undefined;
      this._userAgentParser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arithmeticProcessor.internalValue = value.arithmeticProcessor;
      this._arrayProcessor.internalValue = value.arrayProcessor;
      this._attributeRemapper.internalValue = value.attributeRemapper;
      this._categoryProcessor.internalValue = value.categoryProcessor;
      this._dateRemapper.internalValue = value.dateRemapper;
      this._decoderProcessor.internalValue = value.decoderProcessor;
      this._geoIpParser.internalValue = value.geoIpParser;
      this._grokParser.internalValue = value.grokParser;
      this._lookupProcessor.internalValue = value.lookupProcessor;
      this._messageRemapper.internalValue = value.messageRemapper;
      this._referenceTableLookupProcessor.internalValue = value.referenceTableLookupProcessor;
      this._schemaProcessor.internalValue = value.schemaProcessor;
      this._serviceRemapper.internalValue = value.serviceRemapper;
      this._spanIdRemapper.internalValue = value.spanIdRemapper;
      this._statusRemapper.internalValue = value.statusRemapper;
      this._stringBuilderProcessor.internalValue = value.stringBuilderProcessor;
      this._traceIdRemapper.internalValue = value.traceIdRemapper;
      this._urlParser.internalValue = value.urlParser;
      this._userAgentParser.internalValue = value.userAgentParser;
    }
  }

  // arithmetic_processor - computed: false, optional: true, required: false
  private _arithmeticProcessor = new LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessorOutputReference(this, "arithmetic_processor");
  public get arithmeticProcessor() {
    return this._arithmeticProcessor;
  }
  public putArithmeticProcessor(value: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor) {
    this._arithmeticProcessor.internalValue = value;
  }
  public resetArithmeticProcessor() {
    this._arithmeticProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arithmeticProcessorInput() {
    return this._arithmeticProcessor.internalValue;
  }

  // array_processor - computed: false, optional: true, required: false
  private _arrayProcessor = new LogsCustomPipelineProcessorPipelineProcessorArrayProcessorOutputReference(this, "array_processor");
  public get arrayProcessor() {
    return this._arrayProcessor;
  }
  public putArrayProcessor(value: LogsCustomPipelineProcessorPipelineProcessorArrayProcessor) {
    this._arrayProcessor.internalValue = value;
  }
  public resetArrayProcessor() {
    this._arrayProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayProcessorInput() {
    return this._arrayProcessor.internalValue;
  }

  // attribute_remapper - computed: false, optional: true, required: false
  private _attributeRemapper = new LogsCustomPipelineProcessorPipelineProcessorAttributeRemapperOutputReference(this, "attribute_remapper");
  public get attributeRemapper() {
    return this._attributeRemapper;
  }
  public putAttributeRemapper(value: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper) {
    this._attributeRemapper.internalValue = value;
  }
  public resetAttributeRemapper() {
    this._attributeRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRemapperInput() {
    return this._attributeRemapper.internalValue;
  }

  // category_processor - computed: false, optional: true, required: false
  private _categoryProcessor = new LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorOutputReference(this, "category_processor");
  public get categoryProcessor() {
    return this._categoryProcessor;
  }
  public putCategoryProcessor(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor) {
    this._categoryProcessor.internalValue = value;
  }
  public resetCategoryProcessor() {
    this._categoryProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryProcessorInput() {
    return this._categoryProcessor.internalValue;
  }

  // date_remapper - computed: false, optional: true, required: false
  private _dateRemapper = new LogsCustomPipelineProcessorPipelineProcessorDateRemapperOutputReference(this, "date_remapper");
  public get dateRemapper() {
    return this._dateRemapper;
  }
  public putDateRemapper(value: LogsCustomPipelineProcessorPipelineProcessorDateRemapper) {
    this._dateRemapper.internalValue = value;
  }
  public resetDateRemapper() {
    this._dateRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRemapperInput() {
    return this._dateRemapper.internalValue;
  }

  // decoder_processor - computed: false, optional: true, required: false
  private _decoderProcessor = new LogsCustomPipelineProcessorPipelineProcessorDecoderProcessorOutputReference(this, "decoder_processor");
  public get decoderProcessor() {
    return this._decoderProcessor;
  }
  public putDecoderProcessor(value: LogsCustomPipelineProcessorPipelineProcessorDecoderProcessor) {
    this._decoderProcessor.internalValue = value;
  }
  public resetDecoderProcessor() {
    this._decoderProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decoderProcessorInput() {
    return this._decoderProcessor.internalValue;
  }

  // geo_ip_parser - computed: false, optional: true, required: false
  private _geoIpParser = new LogsCustomPipelineProcessorPipelineProcessorGeoIpParserOutputReference(this, "geo_ip_parser");
  public get geoIpParser() {
    return this._geoIpParser;
  }
  public putGeoIpParser(value: LogsCustomPipelineProcessorPipelineProcessorGeoIpParser) {
    this._geoIpParser.internalValue = value;
  }
  public resetGeoIpParser() {
    this._geoIpParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpParserInput() {
    return this._geoIpParser.internalValue;
  }

  // grok_parser - computed: false, optional: true, required: false
  private _grokParser = new LogsCustomPipelineProcessorPipelineProcessorGrokParserOutputReference(this, "grok_parser");
  public get grokParser() {
    return this._grokParser;
  }
  public putGrokParser(value: LogsCustomPipelineProcessorPipelineProcessorGrokParser) {
    this._grokParser.internalValue = value;
  }
  public resetGrokParser() {
    this._grokParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokParserInput() {
    return this._grokParser.internalValue;
  }

  // lookup_processor - computed: false, optional: true, required: false
  private _lookupProcessor = new LogsCustomPipelineProcessorPipelineProcessorLookupProcessorOutputReference(this, "lookup_processor");
  public get lookupProcessor() {
    return this._lookupProcessor;
  }
  public putLookupProcessor(value: LogsCustomPipelineProcessorPipelineProcessorLookupProcessor) {
    this._lookupProcessor.internalValue = value;
  }
  public resetLookupProcessor() {
    this._lookupProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupProcessorInput() {
    return this._lookupProcessor.internalValue;
  }

  // message_remapper - computed: false, optional: true, required: false
  private _messageRemapper = new LogsCustomPipelineProcessorPipelineProcessorMessageRemapperOutputReference(this, "message_remapper");
  public get messageRemapper() {
    return this._messageRemapper;
  }
  public putMessageRemapper(value: LogsCustomPipelineProcessorPipelineProcessorMessageRemapper) {
    this._messageRemapper.internalValue = value;
  }
  public resetMessageRemapper() {
    this._messageRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRemapperInput() {
    return this._messageRemapper.internalValue;
  }

  // reference_table_lookup_processor - computed: false, optional: true, required: false
  private _referenceTableLookupProcessor = new LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessorOutputReference(this, "reference_table_lookup_processor");
  public get referenceTableLookupProcessor() {
    return this._referenceTableLookupProcessor;
  }
  public putReferenceTableLookupProcessor(value: LogsCustomPipelineProcessorPipelineProcessorReferenceTableLookupProcessor) {
    this._referenceTableLookupProcessor.internalValue = value;
  }
  public resetReferenceTableLookupProcessor() {
    this._referenceTableLookupProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTableLookupProcessorInput() {
    return this._referenceTableLookupProcessor.internalValue;
  }

  // schema_processor - computed: false, optional: true, required: false
  private _schemaProcessor = new LogsCustomPipelineProcessorPipelineProcessorSchemaProcessorOutputReference(this, "schema_processor");
  public get schemaProcessor() {
    return this._schemaProcessor;
  }
  public putSchemaProcessor(value: LogsCustomPipelineProcessorPipelineProcessorSchemaProcessor) {
    this._schemaProcessor.internalValue = value;
  }
  public resetSchemaProcessor() {
    this._schemaProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaProcessorInput() {
    return this._schemaProcessor.internalValue;
  }

  // service_remapper - computed: false, optional: true, required: false
  private _serviceRemapper = new LogsCustomPipelineProcessorPipelineProcessorServiceRemapperOutputReference(this, "service_remapper");
  public get serviceRemapper() {
    return this._serviceRemapper;
  }
  public putServiceRemapper(value: LogsCustomPipelineProcessorPipelineProcessorServiceRemapper) {
    this._serviceRemapper.internalValue = value;
  }
  public resetServiceRemapper() {
    this._serviceRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRemapperInput() {
    return this._serviceRemapper.internalValue;
  }

  // span_id_remapper - computed: false, optional: true, required: false
  private _spanIdRemapper = new LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapperOutputReference(this, "span_id_remapper");
  public get spanIdRemapper() {
    return this._spanIdRemapper;
  }
  public putSpanIdRemapper(value: LogsCustomPipelineProcessorPipelineProcessorSpanIdRemapper) {
    this._spanIdRemapper.internalValue = value;
  }
  public resetSpanIdRemapper() {
    this._spanIdRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanIdRemapperInput() {
    return this._spanIdRemapper.internalValue;
  }

  // status_remapper - computed: false, optional: true, required: false
  private _statusRemapper = new LogsCustomPipelineProcessorPipelineProcessorStatusRemapperOutputReference(this, "status_remapper");
  public get statusRemapper() {
    return this._statusRemapper;
  }
  public putStatusRemapper(value: LogsCustomPipelineProcessorPipelineProcessorStatusRemapper) {
    this._statusRemapper.internalValue = value;
  }
  public resetStatusRemapper() {
    this._statusRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusRemapperInput() {
    return this._statusRemapper.internalValue;
  }

  // string_builder_processor - computed: false, optional: true, required: false
  private _stringBuilderProcessor = new LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorOutputReference(this, "string_builder_processor");
  public get stringBuilderProcessor() {
    return this._stringBuilderProcessor;
  }
  public putStringBuilderProcessor(value: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor) {
    this._stringBuilderProcessor.internalValue = value;
  }
  public resetStringBuilderProcessor() {
    this._stringBuilderProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringBuilderProcessorInput() {
    return this._stringBuilderProcessor.internalValue;
  }

  // trace_id_remapper - computed: false, optional: true, required: false
  private _traceIdRemapper = new LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapperOutputReference(this, "trace_id_remapper");
  public get traceIdRemapper() {
    return this._traceIdRemapper;
  }
  public putTraceIdRemapper(value: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper) {
    this._traceIdRemapper.internalValue = value;
  }
  public resetTraceIdRemapper() {
    this._traceIdRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceIdRemapperInput() {
    return this._traceIdRemapper.internalValue;
  }

  // url_parser - computed: false, optional: true, required: false
  private _urlParser = new LogsCustomPipelineProcessorPipelineProcessorUrlParserOutputReference(this, "url_parser");
  public get urlParser() {
    return this._urlParser;
  }
  public putUrlParser(value: LogsCustomPipelineProcessorPipelineProcessorUrlParser) {
    this._urlParser.internalValue = value;
  }
  public resetUrlParser() {
    this._urlParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParserInput() {
    return this._urlParser.internalValue;
  }

  // user_agent_parser - computed: false, optional: true, required: false
  private _userAgentParser = new LogsCustomPipelineProcessorPipelineProcessorUserAgentParserOutputReference(this, "user_agent_parser");
  public get userAgentParser() {
    return this._userAgentParser;
  }
  public putUserAgentParser(value: LogsCustomPipelineProcessorPipelineProcessorUserAgentParser) {
    this._userAgentParser.internalValue = value;
  }
  public resetUserAgentParser() {
    this._userAgentParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentParserInput() {
    return this._userAgentParser.internalValue;
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorPipelineProcessor[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorPipelineProcessorOutputReference {
    return new LogsCustomPipelineProcessorPipelineProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorPipeline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#description LogsCustomPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#tags LogsCustomPipeline#tags}
  */
  readonly tags?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorPipelineFilter[] | cdktf.IResolvable;
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#processor LogsCustomPipeline#processor}
  */
  readonly processor?: LogsCustomPipelineProcessorPipelineProcessor[] | cdktf.IResolvable;
}

export function logsCustomPipelineProcessorPipelineToTerraform(struct?: LogsCustomPipelineProcessorPipelineOutputReference | LogsCustomPipelineProcessorPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    filter: cdktf.listMapper(logsCustomPipelineProcessorPipelineFilterToTerraform, true)(struct!.filter),
    processor: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorToTerraform, true)(struct!.processor),
  }
}


export function logsCustomPipelineProcessorPipelineToHclTerraform(struct?: LogsCustomPipelineProcessorPipelineOutputReference | LogsCustomPipelineProcessorPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorPipelineFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineFilterList",
    },
    processor: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorPipelineProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorPipelineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorPipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._isEnabled = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._filter.internalValue = undefined;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._tags = value.tags;
      this._filter.internalValue = value.filter;
      this._processor.internalValue = value.processor;
    }
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // tags - computed: true, optional: true, required: false
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

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsCustomPipelineProcessorPipelineFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsCustomPipelineProcessorPipelineFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new LogsCustomPipelineProcessorPipelineProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: LogsCustomPipelineProcessorPipelineProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface LogsCustomPipelineProcessorReferenceTableLookupProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the Reference Table for the source attribute and their associated target attribute values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#lookup_enrichment_table LogsCustomPipeline#lookup_enrichment_table}
  */
  readonly lookupEnrichmentTable: string;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorReferenceTableLookupProcessorToTerraform(struct?: LogsCustomPipelineProcessorReferenceTableLookupProcessorOutputReference | LogsCustomPipelineProcessorReferenceTableLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    lookup_enrichment_table: cdktf.stringToTerraform(struct!.lookupEnrichmentTable),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorReferenceTableLookupProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorReferenceTableLookupProcessorOutputReference | LogsCustomPipelineProcessorReferenceTableLookupProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lookup_enrichment_table: {
      value: cdktf.stringToHclTerraform(struct!.lookupEnrichmentTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorReferenceTableLookupProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorReferenceTableLookupProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._lookupEnrichmentTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupEnrichmentTable = this._lookupEnrichmentTable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorReferenceTableLookupProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._lookupEnrichmentTable = undefined;
      this._name = undefined;
      this._source = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._lookupEnrichmentTable = value.lookupEnrichmentTable;
      this._name = value.name;
      this._source = value.source;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // lookup_enrichment_table - computed: false, optional: false, required: true
  private _lookupEnrichmentTable?: string; 
  public get lookupEnrichmentTable() {
    return this.getStringAttribute('lookup_enrichment_table');
  }
  public set lookupEnrichmentTable(value: string) {
    this._lookupEnrichmentTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupEnrichmentTableInput() {
    return this._lookupEnrichmentTable;
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

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter {
  /**
  * Filter criteria of the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference | LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference | LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories {
  /**
  * ID to inject into the category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#id LogsCustomPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Value to assign to target schema field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter;
}

export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    filter: logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToTerraform(struct!.filter),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._filter.internalValue = value.filter;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
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

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesOutputReference {
    return new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback {
  /**
  * Fallback sources used to populate value of field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources?: { [key: string]: string };
  /**
  * Values that define when the fallback is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#values LogsCustomPipeline#values}
  */
  readonly values?: { [key: string]: string };
}

export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference | LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sources: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sources),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference | LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sources: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sources),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sources = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sources = value.sources;
      this._values = value.values;
    }
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: { [key: string]: string }; 
  public get sources() {
    return this.getStringMapAttribute('sources');
  }
  public set sources(value: { [key: string]: string }) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets {
  /**
  * ID of the field to map log attributes to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#id LogsCustomPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the field to map log attributes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
}

export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference | LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference | LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper {
  /**
  * Name of the logs schema category mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#categories LogsCustomPipeline#categories}
  */
  readonly categories: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories[] | cdktf.IResolvable;
  /**
  * fallback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#fallback LogsCustomPipeline#fallback}
  */
  readonly fallback?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#targets LogsCustomPipeline#targets}
  */
  readonly targets: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets;
}

export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    categories: cdktf.listMapper(logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToTerraform, true)(struct!.categories),
    fallback: logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToTerraform(struct!.fallback),
    targets: logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToTerraform(struct!.targets),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categories: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesToHclTerraform, true)(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesList",
    },
    fallback: {
      value: logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackList",
    },
    targets: {
      value: logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsToHclTerraform(struct!.targets),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._categories.internalValue = undefined;
      this._fallback.internalValue = undefined;
      this._targets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._categories.internalValue = value.categories;
      this._fallback.internalValue = value.fallback;
      this._targets.internalValue = value.targets;
    }
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

  // categories - computed: false, optional: false, required: true
  private _categories = new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback = new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // targets - computed: false, optional: false, required: true
  private _targets = new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargetsOutputReference(this, "targets");
  public get targets() {
    return this._targets;
  }
  public putTargets(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperTargets) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperOutputReference {
    return new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper {
  /**
  * Name of the logs schema remapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * Override or not the target element if already set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Array of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Target field to map log source field to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
}

export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    override_on_conflict: cdktf.booleanToTerraform(struct!.overrideOnConflict),
    preserve_source: cdktf.booleanToTerraform(struct!.preserveSource),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
    target_format: cdktf.stringToTerraform(struct!.targetFormat),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_on_conflict: {
      value: cdktf.booleanToHclTerraform(struct!.overrideOnConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_source: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_format: {
      value: cdktf.stringToHclTerraform(struct!.targetFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideOnConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideOnConflict = this._overrideOnConflict;
    }
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFormat = this._targetFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overrideOnConflict = undefined;
      this._preserveSource = undefined;
      this._sources = undefined;
      this._target = undefined;
      this._targetFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overrideOnConflict = value.overrideOnConflict;
      this._preserveSource = value.preserveSource;
      this._sources = value.sources;
      this._target = value.target;
      this._targetFormat = value.targetFormat;
    }
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

  // override_on_conflict - computed: false, optional: true, required: false
  private _overrideOnConflict?: boolean | cdktf.IResolvable; 
  public get overrideOnConflict() {
    return this.getBooleanAttribute('override_on_conflict');
  }
  public set overrideOnConflict(value: boolean | cdktf.IResolvable) {
    this._overrideOnConflict = value;
  }
  public resetOverrideOnConflict() {
    this._overrideOnConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideOnConflictInput() {
    return this._overrideOnConflict;
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktf.IResolvable) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_format - computed: false, optional: true, required: false
  private _targetFormat?: string; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat;
  }
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperOutputReference {
    return new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessorMappers {
  /**
  * schema_category_mapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_category_mapper LogsCustomPipeline#schema_category_mapper}
  */
  readonly schemaCategoryMapper?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper[] | cdktf.IResolvable;
  /**
  * schema_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_remapper LogsCustomPipeline#schema_remapper}
  */
  readonly schemaRemapper?: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper[] | cdktf.IResolvable;
}

export function logsCustomPipelineProcessorSchemaProcessorMappersToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_category_mapper: cdktf.listMapper(logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToTerraform, true)(struct!.schemaCategoryMapper),
    schema_remapper: cdktf.listMapper(logsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperToTerraform, true)(struct!.schemaRemapper),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorMappersToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_category_mapper: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperToHclTerraform, true)(struct!.schemaCategoryMapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperList",
    },
    schema_remapper: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperToHclTerraform, true)(struct!.schemaRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaCategoryMapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaCategoryMapper = this._schemaCategoryMapper?.internalValue;
    }
    if (this._schemaRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRemapper = this._schemaRemapper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorMappers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaCategoryMapper.internalValue = undefined;
      this._schemaRemapper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaCategoryMapper.internalValue = value.schemaCategoryMapper;
      this._schemaRemapper.internalValue = value.schemaRemapper;
    }
  }

  // schema_category_mapper - computed: false, optional: true, required: false
  private _schemaCategoryMapper = new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapperList(this, "schema_category_mapper", false);
  public get schemaCategoryMapper() {
    return this._schemaCategoryMapper;
  }
  public putSchemaCategoryMapper(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaCategoryMapper[] | cdktf.IResolvable) {
    this._schemaCategoryMapper.internalValue = value;
  }
  public resetSchemaCategoryMapper() {
    this._schemaCategoryMapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaCategoryMapperInput() {
    return this._schemaCategoryMapper.internalValue;
  }

  // schema_remapper - computed: false, optional: true, required: false
  private _schemaRemapper = new LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapperList(this, "schema_remapper", false);
  public get schemaRemapper() {
    return this._schemaRemapper;
  }
  public putSchemaRemapper(value: LogsCustomPipelineProcessorSchemaProcessorMappersSchemaRemapper[] | cdktf.IResolvable) {
    this._schemaRemapper.internalValue = value;
  }
  public resetSchemaRemapper() {
    this._schemaRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRemapperInput() {
    return this._schemaRemapper.internalValue;
  }
}

export class LogsCustomPipelineProcessorSchemaProcessorMappersList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessorSchemaProcessorMappers[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorSchemaProcessorMappersOutputReference {
    return new LogsCustomPipelineProcessorSchemaProcessorMappersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessorSchema {
  /**
  * Class name of the schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#class_name LogsCustomPipeline#class_name}
  */
  readonly className: string;
  /**
  * Class UID of the schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#class_uid LogsCustomPipeline#class_uid}
  */
  readonly classUid: number;
  /**
  * Optional list of extensions to modify the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#extensions LogsCustomPipeline#extensions}
  */
  readonly extensions?: string[];
  /**
  * Optional list of profiles to modify the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#profiles LogsCustomPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * Type of schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_type LogsCustomPipeline#schema_type}
  */
  readonly schemaType: string;
  /**
  * Version of the schema to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#version LogsCustomPipeline#version}
  */
  readonly version: string;
}

export function logsCustomPipelineProcessorSchemaProcessorSchemaToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorSchemaOutputReference | LogsCustomPipelineProcessorSchemaProcessorSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    class_uid: cdktf.numberToTerraform(struct!.classUid),
    extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extensions),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorSchemaToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorSchemaOutputReference | LogsCustomPipelineProcessorSchemaProcessorSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_uid: {
      value: cdktf.numberToHclTerraform(struct!.classUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schema_type: {
      value: cdktf.stringToHclTerraform(struct!.schemaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessorSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._classUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.classUid = this._classUid;
    }
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessorSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._className = undefined;
      this._classUid = undefined;
      this._extensions = undefined;
      this._profiles = undefined;
      this._schemaType = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._className = value.className;
      this._classUid = value.classUid;
      this._extensions = value.extensions;
      this._profiles = value.profiles;
      this._schemaType = value.schemaType;
      this._version = value.version;
    }
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // class_uid - computed: false, optional: false, required: true
  private _classUid?: number; 
  public get classUid() {
    return this.getNumberAttribute('class_uid');
  }
  public set classUid(value: number) {
    this._classUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classUidInput() {
    return this._classUid;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: string[]; 
  public get extensions() {
    return this.getListAttribute('extensions');
  }
  public set extensions(value: string[]) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // schema_type - computed: false, optional: false, required: true
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LogsCustomPipelineProcessorSchemaProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * mappers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#mappers LogsCustomPipeline#mappers}
  */
  readonly mappers: LogsCustomPipelineProcessorSchemaProcessorMappers[] | cdktf.IResolvable;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema LogsCustomPipeline#schema}
  */
  readonly schema: LogsCustomPipelineProcessorSchemaProcessorSchema;
}

export function logsCustomPipelineProcessorSchemaProcessorToTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorOutputReference | LogsCustomPipelineProcessorSchemaProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    mappers: cdktf.listMapper(logsCustomPipelineProcessorSchemaProcessorMappersToTerraform, true)(struct!.mappers),
    schema: logsCustomPipelineProcessorSchemaProcessorSchemaToTerraform(struct!.schema),
  }
}


export function logsCustomPipelineProcessorSchemaProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorSchemaProcessorOutputReference | LogsCustomPipelineProcessorSchemaProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappers: {
      value: cdktf.listMapperHcl(logsCustomPipelineProcessorSchemaProcessorMappersToHclTerraform, true)(struct!.mappers),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorMappersList",
    },
    schema: {
      value: logsCustomPipelineProcessorSchemaProcessorSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSchemaProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorSchemaProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._mappers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappers = this._mappers?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSchemaProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._mappers.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._mappers.internalValue = value.mappers;
      this._schema.internalValue = value.schema;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // mappers - computed: false, optional: false, required: true
  private _mappers = new LogsCustomPipelineProcessorSchemaProcessorMappersList(this, "mappers", false);
  public get mappers() {
    return this._mappers;
  }
  public putMappers(value: LogsCustomPipelineProcessorSchemaProcessorMappers[] | cdktf.IResolvable) {
    this._mappers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappersInput() {
    return this._mappers.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new LogsCustomPipelineProcessorSchemaProcessorSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: LogsCustomPipelineProcessorSchemaProcessorSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface LogsCustomPipelineProcessorServiceRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorServiceRemapperToTerraform(struct?: LogsCustomPipelineProcessorServiceRemapperOutputReference | LogsCustomPipelineProcessorServiceRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorServiceRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorServiceRemapperOutputReference | LogsCustomPipelineProcessorServiceRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorServiceRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorServiceRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorServiceRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorSpanIdRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorSpanIdRemapperToTerraform(struct?: LogsCustomPipelineProcessorSpanIdRemapperOutputReference | LogsCustomPipelineProcessorSpanIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorSpanIdRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorSpanIdRemapperOutputReference | LogsCustomPipelineProcessorSpanIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorSpanIdRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorSpanIdRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorSpanIdRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorStatusRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorStatusRemapperToTerraform(struct?: LogsCustomPipelineProcessorStatusRemapperOutputReference | LogsCustomPipelineProcessorStatusRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorStatusRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorStatusRemapperOutputReference | LogsCustomPipelineProcessorStatusRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorStatusRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorStatusRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorStatusRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorStringBuilderProcessor {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If it replaces all missing attributes of template by an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * The name of the attribute that contains the result of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * The formula with one or more attributes and raw text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#template LogsCustomPipeline#template}
  */
  readonly template: string;
}

export function logsCustomPipelineProcessorStringBuilderProcessorToTerraform(struct?: LogsCustomPipelineProcessorStringBuilderProcessorOutputReference | LogsCustomPipelineProcessorStringBuilderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_replace_missing: cdktf.booleanToTerraform(struct!.isReplaceMissing),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function logsCustomPipelineProcessorStringBuilderProcessorToHclTerraform(struct?: LogsCustomPipelineProcessorStringBuilderProcessorOutputReference | LogsCustomPipelineProcessorStringBuilderProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_replace_missing: {
      value: cdktf.booleanToHclTerraform(struct!.isReplaceMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorStringBuilderProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorStringBuilderProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isReplaceMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReplaceMissing = this._isReplaceMissing;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorStringBuilderProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._isReplaceMissing = undefined;
      this._name = undefined;
      this._target = undefined;
      this._template = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._isReplaceMissing = value.isReplaceMissing;
      this._name = value.name;
      this._target = value.target;
      this._template = value.template;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing');
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing;
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

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface LogsCustomPipelineProcessorTraceIdRemapper {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

export function logsCustomPipelineProcessorTraceIdRemapperToTerraform(struct?: LogsCustomPipelineProcessorTraceIdRemapperOutputReference | LogsCustomPipelineProcessorTraceIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function logsCustomPipelineProcessorTraceIdRemapperToHclTerraform(struct?: LogsCustomPipelineProcessorTraceIdRemapperOutputReference | LogsCustomPipelineProcessorTraceIdRemapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorTraceIdRemapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorTraceIdRemapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorTraceIdRemapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._sources = value.sources;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface LogsCustomPipelineProcessorUrlParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Normalize the ending slashes or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#normalize_ending_slashes LogsCustomPipeline#normalize_ending_slashes}
  */
  readonly normalizeEndingSlashes?: boolean | cdktf.IResolvable;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorUrlParserToTerraform(struct?: LogsCustomPipelineProcessorUrlParserOutputReference | LogsCustomPipelineProcessorUrlParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    normalize_ending_slashes: cdktf.booleanToTerraform(struct!.normalizeEndingSlashes),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorUrlParserToHclTerraform(struct?: LogsCustomPipelineProcessorUrlParserOutputReference | LogsCustomPipelineProcessorUrlParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalize_ending_slashes: {
      value: cdktf.booleanToHclTerraform(struct!.normalizeEndingSlashes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorUrlParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorUrlParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._normalizeEndingSlashes !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizeEndingSlashes = this._normalizeEndingSlashes;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorUrlParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._normalizeEndingSlashes = undefined;
      this._sources = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._normalizeEndingSlashes = value.normalizeEndingSlashes;
      this._sources = value.sources;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // normalize_ending_slashes - computed: false, optional: true, required: false
  private _normalizeEndingSlashes?: boolean | cdktf.IResolvable; 
  public get normalizeEndingSlashes() {
    return this.getBooleanAttribute('normalize_ending_slashes');
  }
  public set normalizeEndingSlashes(value: boolean | cdktf.IResolvable) {
    this._normalizeEndingSlashes = value;
  }
  public resetNormalizeEndingSlashes() {
    this._normalizeEndingSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeEndingSlashesInput() {
    return this._normalizeEndingSlashes;
  }

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessorUserAgentParser {
  /**
  * If the processor is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If the source attribute is URL encoded or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#is_encoded LogsCustomPipeline#is_encoded}
  */
  readonly isEncoded?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

export function logsCustomPipelineProcessorUserAgentParserToTerraform(struct?: LogsCustomPipelineProcessorUserAgentParserOutputReference | LogsCustomPipelineProcessorUserAgentParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_encoded: cdktf.booleanToTerraform(struct!.isEncoded),
    name: cdktf.stringToTerraform(struct!.name),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function logsCustomPipelineProcessorUserAgentParserToHclTerraform(struct?: LogsCustomPipelineProcessorUserAgentParserOutputReference | LogsCustomPipelineProcessorUserAgentParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_encoded: {
      value: cdktf.booleanToHclTerraform(struct!.isEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorUserAgentParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsCustomPipelineProcessorUserAgentParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEncoded = this._isEncoded;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorUserAgentParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._isEncoded = undefined;
      this._name = undefined;
      this._sources = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._isEncoded = value.isEncoded;
      this._name = value.name;
      this._sources = value.sources;
      this._target = value.target;
    }
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_encoded - computed: false, optional: true, required: false
  private _isEncoded?: boolean | cdktf.IResolvable; 
  public get isEncoded() {
    return this.getBooleanAttribute('is_encoded');
  }
  public set isEncoded(value: boolean | cdktf.IResolvable) {
    this._isEncoded = value;
  }
  public resetIsEncoded() {
    this._isEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncodedInput() {
    return this._isEncoded;
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

  // sources - computed: false, optional: false, required: true
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface LogsCustomPipelineProcessor {
  /**
  * arithmetic_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#arithmetic_processor LogsCustomPipeline#arithmetic_processor}
  */
  readonly arithmeticProcessor?: LogsCustomPipelineProcessorArithmeticProcessor;
  /**
  * array_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#array_processor LogsCustomPipeline#array_processor}
  */
  readonly arrayProcessor?: LogsCustomPipelineProcessorArrayProcessor;
  /**
  * attribute_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#attribute_remapper LogsCustomPipeline#attribute_remapper}
  */
  readonly attributeRemapper?: LogsCustomPipelineProcessorAttributeRemapper;
  /**
  * category_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#category_processor LogsCustomPipeline#category_processor}
  */
  readonly categoryProcessor?: LogsCustomPipelineProcessorCategoryProcessor;
  /**
  * date_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#date_remapper LogsCustomPipeline#date_remapper}
  */
  readonly dateRemapper?: LogsCustomPipelineProcessorDateRemapper;
  /**
  * decoder_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#decoder_processor LogsCustomPipeline#decoder_processor}
  */
  readonly decoderProcessor?: LogsCustomPipelineProcessorDecoderProcessor;
  /**
  * geo_ip_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#geo_ip_parser LogsCustomPipeline#geo_ip_parser}
  */
  readonly geoIpParser?: LogsCustomPipelineProcessorGeoIpParser;
  /**
  * grok_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#grok_parser LogsCustomPipeline#grok_parser}
  */
  readonly grokParser?: LogsCustomPipelineProcessorGrokParser;
  /**
  * lookup_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#lookup_processor LogsCustomPipeline#lookup_processor}
  */
  readonly lookupProcessor?: LogsCustomPipelineProcessorLookupProcessor;
  /**
  * message_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#message_remapper LogsCustomPipeline#message_remapper}
  */
  readonly messageRemapper?: LogsCustomPipelineProcessorMessageRemapper;
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#pipeline LogsCustomPipeline#pipeline}
  */
  readonly pipeline?: LogsCustomPipelineProcessorPipeline;
  /**
  * reference_table_lookup_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#reference_table_lookup_processor LogsCustomPipeline#reference_table_lookup_processor}
  */
  readonly referenceTableLookupProcessor?: LogsCustomPipelineProcessorReferenceTableLookupProcessor;
  /**
  * schema_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#schema_processor LogsCustomPipeline#schema_processor}
  */
  readonly schemaProcessor?: LogsCustomPipelineProcessorSchemaProcessor;
  /**
  * service_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#service_remapper LogsCustomPipeline#service_remapper}
  */
  readonly serviceRemapper?: LogsCustomPipelineProcessorServiceRemapper;
  /**
  * span_id_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#span_id_remapper LogsCustomPipeline#span_id_remapper}
  */
  readonly spanIdRemapper?: LogsCustomPipelineProcessorSpanIdRemapper;
  /**
  * status_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#status_remapper LogsCustomPipeline#status_remapper}
  */
  readonly statusRemapper?: LogsCustomPipelineProcessorStatusRemapper;
  /**
  * string_builder_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#string_builder_processor LogsCustomPipeline#string_builder_processor}
  */
  readonly stringBuilderProcessor?: LogsCustomPipelineProcessorStringBuilderProcessor;
  /**
  * trace_id_remapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#trace_id_remapper LogsCustomPipeline#trace_id_remapper}
  */
  readonly traceIdRemapper?: LogsCustomPipelineProcessorTraceIdRemapper;
  /**
  * url_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#url_parser LogsCustomPipeline#url_parser}
  */
  readonly urlParser?: LogsCustomPipelineProcessorUrlParser;
  /**
  * user_agent_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#user_agent_parser LogsCustomPipeline#user_agent_parser}
  */
  readonly userAgentParser?: LogsCustomPipelineProcessorUserAgentParser;
}

export function logsCustomPipelineProcessorToTerraform(struct?: LogsCustomPipelineProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arithmetic_processor: logsCustomPipelineProcessorArithmeticProcessorToTerraform(struct!.arithmeticProcessor),
    array_processor: logsCustomPipelineProcessorArrayProcessorToTerraform(struct!.arrayProcessor),
    attribute_remapper: logsCustomPipelineProcessorAttributeRemapperToTerraform(struct!.attributeRemapper),
    category_processor: logsCustomPipelineProcessorCategoryProcessorToTerraform(struct!.categoryProcessor),
    date_remapper: logsCustomPipelineProcessorDateRemapperToTerraform(struct!.dateRemapper),
    decoder_processor: logsCustomPipelineProcessorDecoderProcessorToTerraform(struct!.decoderProcessor),
    geo_ip_parser: logsCustomPipelineProcessorGeoIpParserToTerraform(struct!.geoIpParser),
    grok_parser: logsCustomPipelineProcessorGrokParserToTerraform(struct!.grokParser),
    lookup_processor: logsCustomPipelineProcessorLookupProcessorToTerraform(struct!.lookupProcessor),
    message_remapper: logsCustomPipelineProcessorMessageRemapperToTerraform(struct!.messageRemapper),
    pipeline: logsCustomPipelineProcessorPipelineToTerraform(struct!.pipeline),
    reference_table_lookup_processor: logsCustomPipelineProcessorReferenceTableLookupProcessorToTerraform(struct!.referenceTableLookupProcessor),
    schema_processor: logsCustomPipelineProcessorSchemaProcessorToTerraform(struct!.schemaProcessor),
    service_remapper: logsCustomPipelineProcessorServiceRemapperToTerraform(struct!.serviceRemapper),
    span_id_remapper: logsCustomPipelineProcessorSpanIdRemapperToTerraform(struct!.spanIdRemapper),
    status_remapper: logsCustomPipelineProcessorStatusRemapperToTerraform(struct!.statusRemapper),
    string_builder_processor: logsCustomPipelineProcessorStringBuilderProcessorToTerraform(struct!.stringBuilderProcessor),
    trace_id_remapper: logsCustomPipelineProcessorTraceIdRemapperToTerraform(struct!.traceIdRemapper),
    url_parser: logsCustomPipelineProcessorUrlParserToTerraform(struct!.urlParser),
    user_agent_parser: logsCustomPipelineProcessorUserAgentParserToTerraform(struct!.userAgentParser),
  }
}


export function logsCustomPipelineProcessorToHclTerraform(struct?: LogsCustomPipelineProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arithmetic_processor: {
      value: logsCustomPipelineProcessorArithmeticProcessorToHclTerraform(struct!.arithmeticProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorArithmeticProcessorList",
    },
    array_processor: {
      value: logsCustomPipelineProcessorArrayProcessorToHclTerraform(struct!.arrayProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorArrayProcessorList",
    },
    attribute_remapper: {
      value: logsCustomPipelineProcessorAttributeRemapperToHclTerraform(struct!.attributeRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorAttributeRemapperList",
    },
    category_processor: {
      value: logsCustomPipelineProcessorCategoryProcessorToHclTerraform(struct!.categoryProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorCategoryProcessorList",
    },
    date_remapper: {
      value: logsCustomPipelineProcessorDateRemapperToHclTerraform(struct!.dateRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorDateRemapperList",
    },
    decoder_processor: {
      value: logsCustomPipelineProcessorDecoderProcessorToHclTerraform(struct!.decoderProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorDecoderProcessorList",
    },
    geo_ip_parser: {
      value: logsCustomPipelineProcessorGeoIpParserToHclTerraform(struct!.geoIpParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorGeoIpParserList",
    },
    grok_parser: {
      value: logsCustomPipelineProcessorGrokParserToHclTerraform(struct!.grokParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorGrokParserList",
    },
    lookup_processor: {
      value: logsCustomPipelineProcessorLookupProcessorToHclTerraform(struct!.lookupProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorLookupProcessorList",
    },
    message_remapper: {
      value: logsCustomPipelineProcessorMessageRemapperToHclTerraform(struct!.messageRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorMessageRemapperList",
    },
    pipeline: {
      value: logsCustomPipelineProcessorPipelineToHclTerraform(struct!.pipeline),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorPipelineList",
    },
    reference_table_lookup_processor: {
      value: logsCustomPipelineProcessorReferenceTableLookupProcessorToHclTerraform(struct!.referenceTableLookupProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorReferenceTableLookupProcessorList",
    },
    schema_processor: {
      value: logsCustomPipelineProcessorSchemaProcessorToHclTerraform(struct!.schemaProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSchemaProcessorList",
    },
    service_remapper: {
      value: logsCustomPipelineProcessorServiceRemapperToHclTerraform(struct!.serviceRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorServiceRemapperList",
    },
    span_id_remapper: {
      value: logsCustomPipelineProcessorSpanIdRemapperToHclTerraform(struct!.spanIdRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorSpanIdRemapperList",
    },
    status_remapper: {
      value: logsCustomPipelineProcessorStatusRemapperToHclTerraform(struct!.statusRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorStatusRemapperList",
    },
    string_builder_processor: {
      value: logsCustomPipelineProcessorStringBuilderProcessorToHclTerraform(struct!.stringBuilderProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorStringBuilderProcessorList",
    },
    trace_id_remapper: {
      value: logsCustomPipelineProcessorTraceIdRemapperToHclTerraform(struct!.traceIdRemapper),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorTraceIdRemapperList",
    },
    url_parser: {
      value: logsCustomPipelineProcessorUrlParserToHclTerraform(struct!.urlParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorUrlParserList",
    },
    user_agent_parser: {
      value: logsCustomPipelineProcessorUserAgentParserToHclTerraform(struct!.userAgentParser),
      isBlock: true,
      type: "list",
      storageClassType: "LogsCustomPipelineProcessorUserAgentParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsCustomPipelineProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsCustomPipelineProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arithmeticProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arithmeticProcessor = this._arithmeticProcessor?.internalValue;
    }
    if (this._arrayProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayProcessor = this._arrayProcessor?.internalValue;
    }
    if (this._attributeRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeRemapper = this._attributeRemapper?.internalValue;
    }
    if (this._categoryProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryProcessor = this._categoryProcessor?.internalValue;
    }
    if (this._dateRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateRemapper = this._dateRemapper?.internalValue;
    }
    if (this._decoderProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoderProcessor = this._decoderProcessor?.internalValue;
    }
    if (this._geoIpParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoIpParser = this._geoIpParser?.internalValue;
    }
    if (this._grokParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokParser = this._grokParser?.internalValue;
    }
    if (this._lookupProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupProcessor = this._lookupProcessor?.internalValue;
    }
    if (this._messageRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRemapper = this._messageRemapper?.internalValue;
    }
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    if (this._referenceTableLookupProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTableLookupProcessor = this._referenceTableLookupProcessor?.internalValue;
    }
    if (this._schemaProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaProcessor = this._schemaProcessor?.internalValue;
    }
    if (this._serviceRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRemapper = this._serviceRemapper?.internalValue;
    }
    if (this._spanIdRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanIdRemapper = this._spanIdRemapper?.internalValue;
    }
    if (this._statusRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusRemapper = this._statusRemapper?.internalValue;
    }
    if (this._stringBuilderProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringBuilderProcessor = this._stringBuilderProcessor?.internalValue;
    }
    if (this._traceIdRemapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceIdRemapper = this._traceIdRemapper?.internalValue;
    }
    if (this._urlParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParser = this._urlParser?.internalValue;
    }
    if (this._userAgentParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentParser = this._userAgentParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arithmeticProcessor.internalValue = undefined;
      this._arrayProcessor.internalValue = undefined;
      this._attributeRemapper.internalValue = undefined;
      this._categoryProcessor.internalValue = undefined;
      this._dateRemapper.internalValue = undefined;
      this._decoderProcessor.internalValue = undefined;
      this._geoIpParser.internalValue = undefined;
      this._grokParser.internalValue = undefined;
      this._lookupProcessor.internalValue = undefined;
      this._messageRemapper.internalValue = undefined;
      this._pipeline.internalValue = undefined;
      this._referenceTableLookupProcessor.internalValue = undefined;
      this._schemaProcessor.internalValue = undefined;
      this._serviceRemapper.internalValue = undefined;
      this._spanIdRemapper.internalValue = undefined;
      this._statusRemapper.internalValue = undefined;
      this._stringBuilderProcessor.internalValue = undefined;
      this._traceIdRemapper.internalValue = undefined;
      this._urlParser.internalValue = undefined;
      this._userAgentParser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arithmeticProcessor.internalValue = value.arithmeticProcessor;
      this._arrayProcessor.internalValue = value.arrayProcessor;
      this._attributeRemapper.internalValue = value.attributeRemapper;
      this._categoryProcessor.internalValue = value.categoryProcessor;
      this._dateRemapper.internalValue = value.dateRemapper;
      this._decoderProcessor.internalValue = value.decoderProcessor;
      this._geoIpParser.internalValue = value.geoIpParser;
      this._grokParser.internalValue = value.grokParser;
      this._lookupProcessor.internalValue = value.lookupProcessor;
      this._messageRemapper.internalValue = value.messageRemapper;
      this._pipeline.internalValue = value.pipeline;
      this._referenceTableLookupProcessor.internalValue = value.referenceTableLookupProcessor;
      this._schemaProcessor.internalValue = value.schemaProcessor;
      this._serviceRemapper.internalValue = value.serviceRemapper;
      this._spanIdRemapper.internalValue = value.spanIdRemapper;
      this._statusRemapper.internalValue = value.statusRemapper;
      this._stringBuilderProcessor.internalValue = value.stringBuilderProcessor;
      this._traceIdRemapper.internalValue = value.traceIdRemapper;
      this._urlParser.internalValue = value.urlParser;
      this._userAgentParser.internalValue = value.userAgentParser;
    }
  }

  // arithmetic_processor - computed: false, optional: true, required: false
  private _arithmeticProcessor = new LogsCustomPipelineProcessorArithmeticProcessorOutputReference(this, "arithmetic_processor");
  public get arithmeticProcessor() {
    return this._arithmeticProcessor;
  }
  public putArithmeticProcessor(value: LogsCustomPipelineProcessorArithmeticProcessor) {
    this._arithmeticProcessor.internalValue = value;
  }
  public resetArithmeticProcessor() {
    this._arithmeticProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arithmeticProcessorInput() {
    return this._arithmeticProcessor.internalValue;
  }

  // array_processor - computed: false, optional: true, required: false
  private _arrayProcessor = new LogsCustomPipelineProcessorArrayProcessorOutputReference(this, "array_processor");
  public get arrayProcessor() {
    return this._arrayProcessor;
  }
  public putArrayProcessor(value: LogsCustomPipelineProcessorArrayProcessor) {
    this._arrayProcessor.internalValue = value;
  }
  public resetArrayProcessor() {
    this._arrayProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayProcessorInput() {
    return this._arrayProcessor.internalValue;
  }

  // attribute_remapper - computed: false, optional: true, required: false
  private _attributeRemapper = new LogsCustomPipelineProcessorAttributeRemapperOutputReference(this, "attribute_remapper");
  public get attributeRemapper() {
    return this._attributeRemapper;
  }
  public putAttributeRemapper(value: LogsCustomPipelineProcessorAttributeRemapper) {
    this._attributeRemapper.internalValue = value;
  }
  public resetAttributeRemapper() {
    this._attributeRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRemapperInput() {
    return this._attributeRemapper.internalValue;
  }

  // category_processor - computed: false, optional: true, required: false
  private _categoryProcessor = new LogsCustomPipelineProcessorCategoryProcessorOutputReference(this, "category_processor");
  public get categoryProcessor() {
    return this._categoryProcessor;
  }
  public putCategoryProcessor(value: LogsCustomPipelineProcessorCategoryProcessor) {
    this._categoryProcessor.internalValue = value;
  }
  public resetCategoryProcessor() {
    this._categoryProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryProcessorInput() {
    return this._categoryProcessor.internalValue;
  }

  // date_remapper - computed: false, optional: true, required: false
  private _dateRemapper = new LogsCustomPipelineProcessorDateRemapperOutputReference(this, "date_remapper");
  public get dateRemapper() {
    return this._dateRemapper;
  }
  public putDateRemapper(value: LogsCustomPipelineProcessorDateRemapper) {
    this._dateRemapper.internalValue = value;
  }
  public resetDateRemapper() {
    this._dateRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateRemapperInput() {
    return this._dateRemapper.internalValue;
  }

  // decoder_processor - computed: false, optional: true, required: false
  private _decoderProcessor = new LogsCustomPipelineProcessorDecoderProcessorOutputReference(this, "decoder_processor");
  public get decoderProcessor() {
    return this._decoderProcessor;
  }
  public putDecoderProcessor(value: LogsCustomPipelineProcessorDecoderProcessor) {
    this._decoderProcessor.internalValue = value;
  }
  public resetDecoderProcessor() {
    this._decoderProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decoderProcessorInput() {
    return this._decoderProcessor.internalValue;
  }

  // geo_ip_parser - computed: false, optional: true, required: false
  private _geoIpParser = new LogsCustomPipelineProcessorGeoIpParserOutputReference(this, "geo_ip_parser");
  public get geoIpParser() {
    return this._geoIpParser;
  }
  public putGeoIpParser(value: LogsCustomPipelineProcessorGeoIpParser) {
    this._geoIpParser.internalValue = value;
  }
  public resetGeoIpParser() {
    this._geoIpParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoIpParserInput() {
    return this._geoIpParser.internalValue;
  }

  // grok_parser - computed: false, optional: true, required: false
  private _grokParser = new LogsCustomPipelineProcessorGrokParserOutputReference(this, "grok_parser");
  public get grokParser() {
    return this._grokParser;
  }
  public putGrokParser(value: LogsCustomPipelineProcessorGrokParser) {
    this._grokParser.internalValue = value;
  }
  public resetGrokParser() {
    this._grokParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokParserInput() {
    return this._grokParser.internalValue;
  }

  // lookup_processor - computed: false, optional: true, required: false
  private _lookupProcessor = new LogsCustomPipelineProcessorLookupProcessorOutputReference(this, "lookup_processor");
  public get lookupProcessor() {
    return this._lookupProcessor;
  }
  public putLookupProcessor(value: LogsCustomPipelineProcessorLookupProcessor) {
    this._lookupProcessor.internalValue = value;
  }
  public resetLookupProcessor() {
    this._lookupProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupProcessorInput() {
    return this._lookupProcessor.internalValue;
  }

  // message_remapper - computed: false, optional: true, required: false
  private _messageRemapper = new LogsCustomPipelineProcessorMessageRemapperOutputReference(this, "message_remapper");
  public get messageRemapper() {
    return this._messageRemapper;
  }
  public putMessageRemapper(value: LogsCustomPipelineProcessorMessageRemapper) {
    this._messageRemapper.internalValue = value;
  }
  public resetMessageRemapper() {
    this._messageRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRemapperInput() {
    return this._messageRemapper.internalValue;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline = new LogsCustomPipelineProcessorPipelineOutputReference(this, "pipeline");
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: LogsCustomPipelineProcessorPipeline) {
    this._pipeline.internalValue = value;
  }
  public resetPipeline() {
    this._pipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline.internalValue;
  }

  // reference_table_lookup_processor - computed: false, optional: true, required: false
  private _referenceTableLookupProcessor = new LogsCustomPipelineProcessorReferenceTableLookupProcessorOutputReference(this, "reference_table_lookup_processor");
  public get referenceTableLookupProcessor() {
    return this._referenceTableLookupProcessor;
  }
  public putReferenceTableLookupProcessor(value: LogsCustomPipelineProcessorReferenceTableLookupProcessor) {
    this._referenceTableLookupProcessor.internalValue = value;
  }
  public resetReferenceTableLookupProcessor() {
    this._referenceTableLookupProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTableLookupProcessorInput() {
    return this._referenceTableLookupProcessor.internalValue;
  }

  // schema_processor - computed: false, optional: true, required: false
  private _schemaProcessor = new LogsCustomPipelineProcessorSchemaProcessorOutputReference(this, "schema_processor");
  public get schemaProcessor() {
    return this._schemaProcessor;
  }
  public putSchemaProcessor(value: LogsCustomPipelineProcessorSchemaProcessor) {
    this._schemaProcessor.internalValue = value;
  }
  public resetSchemaProcessor() {
    this._schemaProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaProcessorInput() {
    return this._schemaProcessor.internalValue;
  }

  // service_remapper - computed: false, optional: true, required: false
  private _serviceRemapper = new LogsCustomPipelineProcessorServiceRemapperOutputReference(this, "service_remapper");
  public get serviceRemapper() {
    return this._serviceRemapper;
  }
  public putServiceRemapper(value: LogsCustomPipelineProcessorServiceRemapper) {
    this._serviceRemapper.internalValue = value;
  }
  public resetServiceRemapper() {
    this._serviceRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRemapperInput() {
    return this._serviceRemapper.internalValue;
  }

  // span_id_remapper - computed: false, optional: true, required: false
  private _spanIdRemapper = new LogsCustomPipelineProcessorSpanIdRemapperOutputReference(this, "span_id_remapper");
  public get spanIdRemapper() {
    return this._spanIdRemapper;
  }
  public putSpanIdRemapper(value: LogsCustomPipelineProcessorSpanIdRemapper) {
    this._spanIdRemapper.internalValue = value;
  }
  public resetSpanIdRemapper() {
    this._spanIdRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanIdRemapperInput() {
    return this._spanIdRemapper.internalValue;
  }

  // status_remapper - computed: false, optional: true, required: false
  private _statusRemapper = new LogsCustomPipelineProcessorStatusRemapperOutputReference(this, "status_remapper");
  public get statusRemapper() {
    return this._statusRemapper;
  }
  public putStatusRemapper(value: LogsCustomPipelineProcessorStatusRemapper) {
    this._statusRemapper.internalValue = value;
  }
  public resetStatusRemapper() {
    this._statusRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusRemapperInput() {
    return this._statusRemapper.internalValue;
  }

  // string_builder_processor - computed: false, optional: true, required: false
  private _stringBuilderProcessor = new LogsCustomPipelineProcessorStringBuilderProcessorOutputReference(this, "string_builder_processor");
  public get stringBuilderProcessor() {
    return this._stringBuilderProcessor;
  }
  public putStringBuilderProcessor(value: LogsCustomPipelineProcessorStringBuilderProcessor) {
    this._stringBuilderProcessor.internalValue = value;
  }
  public resetStringBuilderProcessor() {
    this._stringBuilderProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringBuilderProcessorInput() {
    return this._stringBuilderProcessor.internalValue;
  }

  // trace_id_remapper - computed: false, optional: true, required: false
  private _traceIdRemapper = new LogsCustomPipelineProcessorTraceIdRemapperOutputReference(this, "trace_id_remapper");
  public get traceIdRemapper() {
    return this._traceIdRemapper;
  }
  public putTraceIdRemapper(value: LogsCustomPipelineProcessorTraceIdRemapper) {
    this._traceIdRemapper.internalValue = value;
  }
  public resetTraceIdRemapper() {
    this._traceIdRemapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceIdRemapperInput() {
    return this._traceIdRemapper.internalValue;
  }

  // url_parser - computed: false, optional: true, required: false
  private _urlParser = new LogsCustomPipelineProcessorUrlParserOutputReference(this, "url_parser");
  public get urlParser() {
    return this._urlParser;
  }
  public putUrlParser(value: LogsCustomPipelineProcessorUrlParser) {
    this._urlParser.internalValue = value;
  }
  public resetUrlParser() {
    this._urlParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParserInput() {
    return this._urlParser.internalValue;
  }

  // user_agent_parser - computed: false, optional: true, required: false
  private _userAgentParser = new LogsCustomPipelineProcessorUserAgentParserOutputReference(this, "user_agent_parser");
  public get userAgentParser() {
    return this._userAgentParser;
  }
  public putUserAgentParser(value: LogsCustomPipelineProcessorUserAgentParser) {
    this._userAgentParser.internalValue = value;
  }
  public resetUserAgentParser() {
    this._userAgentParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentParserInput() {
    return this._userAgentParser.internalValue;
  }
}

export class LogsCustomPipelineProcessorList extends cdktf.ComplexList {
  public internalValue? : LogsCustomPipelineProcessor[] | cdktf.IResolvable

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
  public get(index: number): LogsCustomPipelineProcessorOutputReference {
    return new LogsCustomPipelineProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline datadog_logs_custom_pipeline}
*/
export class LogsCustomPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_custom_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogsCustomPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsCustomPipeline to import
  * @param importFromId The id of the existing LogsCustomPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsCustomPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_custom_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/logs_custom_pipeline datadog_logs_custom_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsCustomPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: LogsCustomPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_custom_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.82.0',
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
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._tags = config.tags;
    this._filter.internalValue = config.filter;
    this._processor.internalValue = config.processor;
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // tags - computed: true, optional: true, required: false
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

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsCustomPipelineFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsCustomPipelineFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new LogsCustomPipelineProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: LogsCustomPipelineProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      filter: cdktf.listMapper(logsCustomPipelineFilterToTerraform, true)(this._filter.internalValue),
      processor: cdktf.listMapper(logsCustomPipelineProcessorToTerraform, true)(this._processor.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(logsCustomPipelineFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsCustomPipelineFilterList",
      },
      processor: {
        value: cdktf.listMapperHcl(logsCustomPipelineProcessorToHclTerraform, true)(this._processor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsCustomPipelineProcessorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
