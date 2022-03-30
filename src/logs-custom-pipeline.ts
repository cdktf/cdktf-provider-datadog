// https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsCustomPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineFilter[] | cdktf.IResolvable;
  /**
  * processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#processor LogsCustomPipeline#processor}
  */
  readonly processor?: LogsCustomPipelineProcessor[] | cdktf.IResolvable;
}
export interface LogsCustomPipelineFilter {
  /**
  * Filter criteria of the category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#query LogsCustomPipeline#query}
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

export interface LogsCustomPipelineProcessorArithmeticProcessor {
  /**
  * Arithmetic operation between one or more log attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#expression LogsCustomPipeline#expression}
  */
  readonly expression: string;
  /**
  * Boolean value to enable your pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, it replaces all missing attributes of expression by 0, false skips the operation if an attribute is missing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * Your pipeline name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the attribute that contains the result of the arithmetic operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
export interface LogsCustomPipelineProcessorAttributeRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Override the target element if already set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Defines where the sources are from (log `attribute` or `tag`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#source_type LogsCustomPipeline#source_type}
  */
  readonly sourceType: string;
  /**
  * List of source attributes or tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Final attribute or tag name to remap the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Defines if the target is a log `attribute` or `tag`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target_type LogsCustomPipeline#target_type}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
    target_format: cdktf.stringToTerraform(struct!.targetFormat),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#query LogsCustomPipeline#query}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#filter LogsCustomPipeline#filter}
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

export interface LogsCustomPipelineProcessorCategoryProcessor {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the category
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the target attribute whose value is defined by the matching category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * category block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#category LogsCustomPipeline#category}
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
    category: cdktf.listMapper(logsCustomPipelineProcessorCategoryProcessorCategoryToTerraform)(struct!.category),
  }
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
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorCategoryProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._target = undefined;
      this._category = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._target = value.target;
      this._category = value.category;
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
  private _category?: LogsCustomPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable; 
  public get category() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('category');
  }
  public set category(value: LogsCustomPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }
}
export interface LogsCustomPipelineProcessorDateRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
export interface LogsCustomPipelineProcessorGeoIpParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#match_rules LogsCustomPipeline#match_rules}
  */
  readonly matchRules: string;
  /**
  * Support rules for your grok parser.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#support_rules LogsCustomPipeline#support_rules}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of sample logs for this parser. It can save up to 5 samples. Each sample takes up to 5000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#samples LogsCustomPipeline#samples}
  */
  readonly samples?: string[];
  /**
  * Name of the log attribute to parse.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * grok block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#grok LogsCustomPipeline#grok}
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
    samples: cdktf.listMapper(cdktf.stringToTerraform)(struct!.samples),
    source: cdktf.stringToTerraform(struct!.source),
    grok: logsCustomPipelineProcessorGrokParserGrokToTerraform(struct!.grok),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#default_lookup LogsCustomPipeline#default_lookup}
  */
  readonly defaultLookup?: string;
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of entries of the lookup table using `key,value` format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#lookup_table LogsCustomPipeline#lookup_table}
  */
  readonly lookupTable: string[];
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    lookup_table: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lookupTable),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#query LogsCustomPipeline#query}
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

export interface LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor {
  /**
  * Arithmetic operation between one or more log attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#expression LogsCustomPipeline#expression}
  */
  readonly expression: string;
  /**
  * Boolean value to enable your pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, it replaces all missing attributes of expression by 0, false skips the operation if an attribute is missing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * Your pipeline name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the attribute that contains the result of the arithmetic operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
export interface LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Override the target element if already set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Defines where the sources are from (log `attribute` or `tag`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#source_type LogsCustomPipeline#source_type}
  */
  readonly sourceType: string;
  /**
  * List of source attributes or tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Final attribute or tag name to remap the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Defines if the target is a log `attribute` or `tag`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target_type LogsCustomPipeline#target_type}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
    target_format: cdktf.stringToTerraform(struct!.targetFormat),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#query LogsCustomPipeline#query}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#filter LogsCustomPipeline#filter}
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

export interface LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the category
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the target attribute whose value is defined by the matching category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * category block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#category LogsCustomPipeline#category}
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
    category: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryToTerraform)(struct!.category),
  }
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
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._target = undefined;
      this._category = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._target = value.target;
      this._category = value.category;
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
  private _category?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable; 
  public get category() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('category');
  }
  public set category(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[] | cdktf.IResolvable) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorDateRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
export interface LogsCustomPipelineProcessorPipelineProcessorGeoIpParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#match_rules LogsCustomPipeline#match_rules}
  */
  readonly matchRules: string;
  /**
  * Support rules for your grok parser.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#support_rules LogsCustomPipeline#support_rules}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of sample logs for this parser. It can save up to 5 samples. Each sample takes up to 5000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#samples LogsCustomPipeline#samples}
  */
  readonly samples?: string[];
  /**
  * Name of the log attribute to parse.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * grok block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#grok LogsCustomPipeline#grok}
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
    samples: cdktf.listMapper(cdktf.stringToTerraform)(struct!.samples),
    source: cdktf.stringToTerraform(struct!.source),
    grok: logsCustomPipelineProcessorPipelineProcessorGrokParserGrokToTerraform(struct!.grok),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#default_lookup LogsCustomPipeline#default_lookup}
  */
  readonly defaultLookup?: string;
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of entries of the lookup table using `key,value` format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#lookup_table LogsCustomPipeline#lookup_table}
  */
  readonly lookupTable: string[];
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    lookup_table: cdktf.listMapper(cdktf.stringToTerraform)(struct!.lookupTable),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
export interface LogsCustomPipelineProcessorPipelineProcessorServiceRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
export interface LogsCustomPipelineProcessorPipelineProcessorStatusRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If it replaces all missing attributes of template by an empty string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * The name of the attribute that contains the result of the template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * The formula with one or more attributes and raw text.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#template LogsCustomPipeline#template}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Normalize the ending slashes or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#normalize_ending_slashes LogsCustomPipeline#normalize_ending_slashes}
  */
  readonly normalizeEndingSlashes?: boolean | cdktf.IResolvable;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If the source attribute is URL encoded or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_encoded LogsCustomPipeline#is_encoded}
  */
  readonly isEncoded?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#arithmetic_processor LogsCustomPipeline#arithmetic_processor}
  */
  readonly arithmeticProcessor?: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor;
  /**
  * attribute_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#attribute_remapper LogsCustomPipeline#attribute_remapper}
  */
  readonly attributeRemapper?: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper;
  /**
  * category_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#category_processor LogsCustomPipeline#category_processor}
  */
  readonly categoryProcessor?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor;
  /**
  * date_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#date_remapper LogsCustomPipeline#date_remapper}
  */
  readonly dateRemapper?: LogsCustomPipelineProcessorPipelineProcessorDateRemapper;
  /**
  * geo_ip_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#geo_ip_parser LogsCustomPipeline#geo_ip_parser}
  */
  readonly geoIpParser?: LogsCustomPipelineProcessorPipelineProcessorGeoIpParser;
  /**
  * grok_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#grok_parser LogsCustomPipeline#grok_parser}
  */
  readonly grokParser?: LogsCustomPipelineProcessorPipelineProcessorGrokParser;
  /**
  * lookup_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#lookup_processor LogsCustomPipeline#lookup_processor}
  */
  readonly lookupProcessor?: LogsCustomPipelineProcessorPipelineProcessorLookupProcessor;
  /**
  * message_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#message_remapper LogsCustomPipeline#message_remapper}
  */
  readonly messageRemapper?: LogsCustomPipelineProcessorPipelineProcessorMessageRemapper;
  /**
  * service_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#service_remapper LogsCustomPipeline#service_remapper}
  */
  readonly serviceRemapper?: LogsCustomPipelineProcessorPipelineProcessorServiceRemapper;
  /**
  * status_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#status_remapper LogsCustomPipeline#status_remapper}
  */
  readonly statusRemapper?: LogsCustomPipelineProcessorPipelineProcessorStatusRemapper;
  /**
  * string_builder_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#string_builder_processor LogsCustomPipeline#string_builder_processor}
  */
  readonly stringBuilderProcessor?: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor;
  /**
  * trace_id_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#trace_id_remapper LogsCustomPipeline#trace_id_remapper}
  */
  readonly traceIdRemapper?: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper;
  /**
  * url_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#url_parser LogsCustomPipeline#url_parser}
  */
  readonly urlParser?: LogsCustomPipelineProcessorPipelineProcessorUrlParser;
  /**
  * user_agent_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#user_agent_parser LogsCustomPipeline#user_agent_parser}
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
    attribute_remapper: logsCustomPipelineProcessorPipelineProcessorAttributeRemapperToTerraform(struct!.attributeRemapper),
    category_processor: logsCustomPipelineProcessorPipelineProcessorCategoryProcessorToTerraform(struct!.categoryProcessor),
    date_remapper: logsCustomPipelineProcessorPipelineProcessorDateRemapperToTerraform(struct!.dateRemapper),
    geo_ip_parser: logsCustomPipelineProcessorPipelineProcessorGeoIpParserToTerraform(struct!.geoIpParser),
    grok_parser: logsCustomPipelineProcessorPipelineProcessorGrokParserToTerraform(struct!.grokParser),
    lookup_processor: logsCustomPipelineProcessorPipelineProcessorLookupProcessorToTerraform(struct!.lookupProcessor),
    message_remapper: logsCustomPipelineProcessorPipelineProcessorMessageRemapperToTerraform(struct!.messageRemapper),
    service_remapper: logsCustomPipelineProcessorPipelineProcessorServiceRemapperToTerraform(struct!.serviceRemapper),
    status_remapper: logsCustomPipelineProcessorPipelineProcessorStatusRemapperToTerraform(struct!.statusRemapper),
    string_builder_processor: logsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorToTerraform(struct!.stringBuilderProcessor),
    trace_id_remapper: logsCustomPipelineProcessorPipelineProcessorTraceIdRemapperToTerraform(struct!.traceIdRemapper),
    url_parser: logsCustomPipelineProcessorPipelineProcessorUrlParserToTerraform(struct!.urlParser),
    user_agent_parser: logsCustomPipelineProcessorPipelineProcessorUserAgentParserToTerraform(struct!.userAgentParser),
  }
}

export interface LogsCustomPipelineProcessorPipeline {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorPipelineFilter[] | cdktf.IResolvable;
  /**
  * processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#processor LogsCustomPipeline#processor}
  */
  readonly processor?: LogsCustomPipelineProcessorPipelineProcessor[] | cdktf.IResolvable;
}

export function logsCustomPipelineProcessorPipelineToTerraform(struct?: LogsCustomPipelineProcessorPipelineOutputReference | LogsCustomPipelineProcessorPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    filter: cdktf.listMapper(logsCustomPipelineProcessorPipelineFilterToTerraform)(struct!.filter),
    processor: cdktf.listMapper(logsCustomPipelineProcessorPipelineProcessorToTerraform)(struct!.processor),
  }
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
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._processor !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsCustomPipelineProcessorPipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._name = undefined;
      this._filter = undefined;
      this._processor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._filter = value.filter;
      this._processor = value.processor;
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
  private _filter?: LogsCustomPipelineProcessorPipelineFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter');
  }
  public set filter(value: LogsCustomPipelineProcessorPipelineFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // processor - computed: false, optional: true, required: false
  private _processor?: LogsCustomPipelineProcessorPipelineProcessor[] | cdktf.IResolvable; 
  public get processor() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processor');
  }
  public set processor(value: LogsCustomPipelineProcessorPipelineProcessor[] | cdktf.IResolvable) {
    this._processor = value;
  }
  public resetProcessor() {
    this._processor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor;
  }
}
export interface LogsCustomPipelineProcessorServiceRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
export interface LogsCustomPipelineProcessorStatusRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If it replaces all missing attributes of template by an empty string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * The name of the attribute that contains the result of the template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * The formula with one or more attributes and raw text.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#template LogsCustomPipeline#template}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Normalize the ending slashes or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#normalize_ending_slashes LogsCustomPipeline#normalize_ending_slashes}
  */
  readonly normalizeEndingSlashes?: boolean | cdktf.IResolvable;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If the source attribute is URL encoded or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#is_encoded LogsCustomPipeline#is_encoded}
  */
  readonly isEncoded?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#target LogsCustomPipeline#target}
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
    sources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sources),
    target: cdktf.stringToTerraform(struct!.target),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#arithmetic_processor LogsCustomPipeline#arithmetic_processor}
  */
  readonly arithmeticProcessor?: LogsCustomPipelineProcessorArithmeticProcessor;
  /**
  * attribute_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#attribute_remapper LogsCustomPipeline#attribute_remapper}
  */
  readonly attributeRemapper?: LogsCustomPipelineProcessorAttributeRemapper;
  /**
  * category_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#category_processor LogsCustomPipeline#category_processor}
  */
  readonly categoryProcessor?: LogsCustomPipelineProcessorCategoryProcessor;
  /**
  * date_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#date_remapper LogsCustomPipeline#date_remapper}
  */
  readonly dateRemapper?: LogsCustomPipelineProcessorDateRemapper;
  /**
  * geo_ip_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#geo_ip_parser LogsCustomPipeline#geo_ip_parser}
  */
  readonly geoIpParser?: LogsCustomPipelineProcessorGeoIpParser;
  /**
  * grok_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#grok_parser LogsCustomPipeline#grok_parser}
  */
  readonly grokParser?: LogsCustomPipelineProcessorGrokParser;
  /**
  * lookup_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#lookup_processor LogsCustomPipeline#lookup_processor}
  */
  readonly lookupProcessor?: LogsCustomPipelineProcessorLookupProcessor;
  /**
  * message_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#message_remapper LogsCustomPipeline#message_remapper}
  */
  readonly messageRemapper?: LogsCustomPipelineProcessorMessageRemapper;
  /**
  * pipeline block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#pipeline LogsCustomPipeline#pipeline}
  */
  readonly pipeline?: LogsCustomPipelineProcessorPipeline;
  /**
  * service_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#service_remapper LogsCustomPipeline#service_remapper}
  */
  readonly serviceRemapper?: LogsCustomPipelineProcessorServiceRemapper;
  /**
  * status_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#status_remapper LogsCustomPipeline#status_remapper}
  */
  readonly statusRemapper?: LogsCustomPipelineProcessorStatusRemapper;
  /**
  * string_builder_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#string_builder_processor LogsCustomPipeline#string_builder_processor}
  */
  readonly stringBuilderProcessor?: LogsCustomPipelineProcessorStringBuilderProcessor;
  /**
  * trace_id_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#trace_id_remapper LogsCustomPipeline#trace_id_remapper}
  */
  readonly traceIdRemapper?: LogsCustomPipelineProcessorTraceIdRemapper;
  /**
  * url_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#url_parser LogsCustomPipeline#url_parser}
  */
  readonly urlParser?: LogsCustomPipelineProcessorUrlParser;
  /**
  * user_agent_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline#user_agent_parser LogsCustomPipeline#user_agent_parser}
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
    attribute_remapper: logsCustomPipelineProcessorAttributeRemapperToTerraform(struct!.attributeRemapper),
    category_processor: logsCustomPipelineProcessorCategoryProcessorToTerraform(struct!.categoryProcessor),
    date_remapper: logsCustomPipelineProcessorDateRemapperToTerraform(struct!.dateRemapper),
    geo_ip_parser: logsCustomPipelineProcessorGeoIpParserToTerraform(struct!.geoIpParser),
    grok_parser: logsCustomPipelineProcessorGrokParserToTerraform(struct!.grokParser),
    lookup_processor: logsCustomPipelineProcessorLookupProcessorToTerraform(struct!.lookupProcessor),
    message_remapper: logsCustomPipelineProcessorMessageRemapperToTerraform(struct!.messageRemapper),
    pipeline: logsCustomPipelineProcessorPipelineToTerraform(struct!.pipeline),
    service_remapper: logsCustomPipelineProcessorServiceRemapperToTerraform(struct!.serviceRemapper),
    status_remapper: logsCustomPipelineProcessorStatusRemapperToTerraform(struct!.statusRemapper),
    string_builder_processor: logsCustomPipelineProcessorStringBuilderProcessorToTerraform(struct!.stringBuilderProcessor),
    trace_id_remapper: logsCustomPipelineProcessorTraceIdRemapperToTerraform(struct!.traceIdRemapper),
    url_parser: logsCustomPipelineProcessorUrlParserToTerraform(struct!.urlParser),
    user_agent_parser: logsCustomPipelineProcessorUserAgentParserToTerraform(struct!.userAgentParser),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline datadog_logs_custom_pipeline}
*/
export class LogsCustomPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_custom_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline datadog_logs_custom_pipeline} Resource
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
        providerVersion: '3.10.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._filter = config.filter;
    this._processor = config.processor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // filter - computed: false, optional: false, required: true
  private _filter?: LogsCustomPipelineFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter');
  }
  public set filter(value: LogsCustomPipelineFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // processor - computed: false, optional: true, required: false
  private _processor?: LogsCustomPipelineProcessor[] | cdktf.IResolvable; 
  public get processor() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processor');
  }
  public set processor(value: LogsCustomPipelineProcessor[] | cdktf.IResolvable) {
    this._processor = value;
  }
  public resetProcessor() {
    this._processor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      filter: cdktf.listMapper(logsCustomPipelineFilterToTerraform)(this._filter),
      processor: cdktf.listMapper(logsCustomPipelineProcessorToTerraform)(this._processor),
    };
  }
}
