// https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsCustomPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineFilter[];
  /**
  * processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#processor LogsCustomPipeline#processor}
  */
  readonly processor?: LogsCustomPipelineProcessor[];
}
export interface LogsCustomPipelineFilter {
  /**
  * Filter criteria of the category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

function logsCustomPipelineFilterToTerraform(struct?: LogsCustomPipelineFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#expression LogsCustomPipeline#expression}
  */
  readonly expression: string;
  /**
  * Boolean value to enable your pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, it replaces all missing attributes of expression by 0, false skips the operation if an attribute is missing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * Your pipeline name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the attribute that contains the result of the arithmetic operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorArithmeticProcessorToTerraform(struct?: LogsCustomPipelineProcessorArithmeticProcessorOutputReference | LogsCustomPipelineProcessorArithmeticProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._expression
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable | undefined; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing') as any;
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable | undefined) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorAttributeRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Override the target element if already set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Defines where the sources are from (log `attribute` or `tag`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#source_type LogsCustomPipeline#source_type}
  */
  readonly sourceType: string;
  /**
  * List of source attributes or tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Final attribute or tag name to remap the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Defines if the target is a log `attribute` or `tag`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target_type LogsCustomPipeline#target_type}
  */
  readonly targetType: string;
}

function logsCustomPipelineProcessorAttributeRemapperToTerraform(struct?: LogsCustomPipelineProcessorAttributeRemapperOutputReference | LogsCustomPipelineProcessorAttributeRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // override_on_conflict - computed: false, optional: true, required: false
  private _overrideOnConflict?: boolean | cdktf.IResolvable | undefined; 
  public get overrideOnConflict() {
    return this.getBooleanAttribute('override_on_conflict') as any;
  }
  public set overrideOnConflict(value: boolean | cdktf.IResolvable | undefined) {
    this._overrideOnConflict = value;
  }
  public resetOverrideOnConflict() {
    this._overrideOnConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideOnConflictInput() {
    return this._overrideOnConflict
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable | undefined; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source') as any;
  }
  public set preserveSource(value: boolean | cdktf.IResolvable | undefined) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource
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
    return this._sourceType
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
    return this._sources
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
    return this._target
  }

  // target_format - computed: false, optional: true, required: false
  private _targetFormat?: string | undefined; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string | undefined) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat
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
    return this._targetType
  }
}
export interface LogsCustomPipelineProcessorCategoryProcessorCategoryFilter {
  /**
  * Filter criteria of the category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

function logsCustomPipelineProcessorCategoryProcessorCategoryFilterToTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorCategoryFilterOutputReference | LogsCustomPipelineProcessorCategoryProcessorCategoryFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class LogsCustomPipelineProcessorCategoryProcessorCategoryFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._query
  }
}
export interface LogsCustomPipelineProcessorCategoryProcessorCategory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorCategoryProcessorCategoryFilter;
}

function logsCustomPipelineProcessorCategoryProcessorCategoryToTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorCategory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the category
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the target attribute whose value is defined by the matching category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * category block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#category LogsCustomPipeline#category}
  */
  readonly category: LogsCustomPipelineProcessorCategoryProcessorCategory[];
}

function logsCustomPipelineProcessorCategoryProcessorToTerraform(struct?: LogsCustomPipelineProcessorCategoryProcessorOutputReference | LogsCustomPipelineProcessorCategoryProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._target
  }

  // category - computed: false, optional: false, required: true
  private _category?: LogsCustomPipelineProcessorCategoryProcessorCategory[]; 
  public get category() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('category') as any;
  }
  public set category(value: LogsCustomPipelineProcessorCategoryProcessorCategory[]) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category
  }
}
export interface LogsCustomPipelineProcessorDateRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorDateRemapperToTerraform(struct?: LogsCustomPipelineProcessorDateRemapperOutputReference | LogsCustomPipelineProcessorDateRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorGeoIpParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorGeoIpParserToTerraform(struct?: LogsCustomPipelineProcessorGeoIpParserOutputReference | LogsCustomPipelineProcessorGeoIpParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorGrokParserGrok {
  /**
  * Match rules for your grok parser.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#match_rules LogsCustomPipeline#match_rules}
  */
  readonly matchRules: string;
  /**
  * Support rules for your grok parser.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#support_rules LogsCustomPipeline#support_rules}
  */
  readonly supportRules: string;
}

function logsCustomPipelineProcessorGrokParserGrokToTerraform(struct?: LogsCustomPipelineProcessorGrokParserGrokOutputReference | LogsCustomPipelineProcessorGrokParserGrok): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_rules: cdktf.stringToTerraform(struct!.matchRules),
    support_rules: cdktf.stringToTerraform(struct!.supportRules),
  }
}

export class LogsCustomPipelineProcessorGrokParserGrokOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._matchRules
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
    return this._supportRules
  }
}
export interface LogsCustomPipelineProcessorGrokParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of sample logs for this parser. It can save up to 5 samples. Each sample takes up to 5000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#samples LogsCustomPipeline#samples}
  */
  readonly samples?: string[];
  /**
  * Name of the log attribute to parse.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * grok block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#grok LogsCustomPipeline#grok}
  */
  readonly grok: LogsCustomPipelineProcessorGrokParserGrok;
}

function logsCustomPipelineProcessorGrokParserToTerraform(struct?: LogsCustomPipelineProcessorGrokParserOutputReference | LogsCustomPipelineProcessorGrokParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // samples - computed: false, optional: true, required: false
  private _samples?: string[] | undefined; 
  public get samples() {
    return this.getListAttribute('samples');
  }
  public set samples(value: string[] | undefined) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples
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
    return this._source
  }

  // grok - computed: false, optional: false, required: true
  private _grok?: LogsCustomPipelineProcessorGrokParserGrok; 
  private __grokOutput = new LogsCustomPipelineProcessorGrokParserGrokOutputReference(this as any, "grok", true);
  public get grok() {
    return this.__grokOutput;
  }
  public putGrok(value: LogsCustomPipelineProcessorGrokParserGrok) {
    this._grok = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok
  }
}
export interface LogsCustomPipelineProcessorLookupProcessor {
  /**
  * Default lookup value to use if there is no entry in the lookup table for the value of the source attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#default_lookup LogsCustomPipeline#default_lookup}
  */
  readonly defaultLookup?: string;
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of entries of the lookup table using `key,value` format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#lookup_table LogsCustomPipeline#lookup_table}
  */
  readonly lookupTable: string[];
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorLookupProcessorToTerraform(struct?: LogsCustomPipelineProcessorLookupProcessorOutputReference | LogsCustomPipelineProcessorLookupProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_lookup - computed: false, optional: true, required: false
  private _defaultLookup?: string | undefined; 
  public get defaultLookup() {
    return this.getStringAttribute('default_lookup');
  }
  public set defaultLookup(value: string | undefined) {
    this._defaultLookup = value;
  }
  public resetDefaultLookup() {
    this._defaultLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLookupInput() {
    return this._defaultLookup
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
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
    return this._lookupTable
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._source
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorMessageRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorMessageRemapperToTerraform(struct?: LogsCustomPipelineProcessorMessageRemapperOutputReference | LogsCustomPipelineProcessorMessageRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorPipelineFilter {
  /**
  * Filter criteria of the category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

function logsCustomPipelineProcessorPipelineFilterToTerraform(struct?: LogsCustomPipelineProcessorPipelineFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#expression LogsCustomPipeline#expression}
  */
  readonly expression: string;
  /**
  * Boolean value to enable your pipeline.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true, it replaces all missing attributes of expression by 0, false skips the operation if an attribute is missing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * Your pipeline name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the attribute that contains the result of the arithmetic operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorPipelineProcessorArithmeticProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._expression
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable | undefined; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing') as any;
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable | undefined) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Override the target element if already set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#override_on_conflict LogsCustomPipeline#override_on_conflict}
  */
  readonly overrideOnConflict?: boolean | cdktf.IResolvable;
  /**
  * Remove or preserve the remapped source element.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#preserve_source LogsCustomPipeline#preserve_source}
  */
  readonly preserveSource?: boolean | cdktf.IResolvable;
  /**
  * Defines where the sources are from (log `attribute` or `tag`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#source_type LogsCustomPipeline#source_type}
  */
  readonly sourceType: string;
  /**
  * List of source attributes or tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Final attribute or tag name to remap the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * If the `target_type` of the remapper is `attribute`, try to cast the value to a new specific type. If the cast is not possible, the original type is kept. `string`, `integer`, or `double` are the possible types. If the `target_type` is `tag`, this parameter may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target_format LogsCustomPipeline#target_format}
  */
  readonly targetFormat?: string;
  /**
  * Defines if the target is a log `attribute` or `tag`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target_type LogsCustomPipeline#target_type}
  */
  readonly targetType: string;
}

function logsCustomPipelineProcessorPipelineProcessorAttributeRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // override_on_conflict - computed: false, optional: true, required: false
  private _overrideOnConflict?: boolean | cdktf.IResolvable | undefined; 
  public get overrideOnConflict() {
    return this.getBooleanAttribute('override_on_conflict') as any;
  }
  public set overrideOnConflict(value: boolean | cdktf.IResolvable | undefined) {
    this._overrideOnConflict = value;
  }
  public resetOverrideOnConflict() {
    this._overrideOnConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideOnConflictInput() {
    return this._overrideOnConflict
  }

  // preserve_source - computed: false, optional: true, required: false
  private _preserveSource?: boolean | cdktf.IResolvable | undefined; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source') as any;
  }
  public set preserveSource(value: boolean | cdktf.IResolvable | undefined) {
    this._preserveSource = value;
  }
  public resetPreserveSource() {
    this._preserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource
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
    return this._sourceType
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
    return this._sources
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
    return this._target
  }

  // target_format - computed: false, optional: true, required: false
  private _targetFormat?: string | undefined; 
  public get targetFormat() {
    return this.getStringAttribute('target_format');
  }
  public set targetFormat(value: string | undefined) {
    this._targetFormat = value;
  }
  public resetTargetFormat() {
    this._targetFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFormatInput() {
    return this._targetFormat
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
    return this._targetType
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter {
  /**
  * Filter criteria of the category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#query LogsCustomPipeline#query}
  */
  readonly query: string;
}

function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterOutputReference | LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._query
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryFilter;
}

function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategoryToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the category
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the target attribute whose value is defined by the matching category.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * category block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#category LogsCustomPipeline#category}
  */
  readonly category: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[];
}

function logsCustomPipelineProcessorPipelineProcessorCategoryProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._target
  }

  // category - computed: false, optional: false, required: true
  private _category?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[]; 
  public get category() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('category') as any;
  }
  public set category(value: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessorCategory[]) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorDateRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorPipelineProcessorDateRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorDateRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorDateRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorGeoIpParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorPipelineProcessorGeoIpParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGeoIpParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorGeoIpParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok {
  /**
  * Match rules for your grok parser.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#match_rules LogsCustomPipeline#match_rules}
  */
  readonly matchRules: string;
  /**
  * Support rules for your grok parser.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#support_rules LogsCustomPipeline#support_rules}
  */
  readonly supportRules: string;
}

function logsCustomPipelineProcessorPipelineProcessorGrokParserGrokToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokOutputReference | LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_rules: cdktf.stringToTerraform(struct!.matchRules),
    support_rules: cdktf.stringToTerraform(struct!.supportRules),
  }
}

export class LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._matchRules
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
    return this._supportRules
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorGrokParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of sample logs for this parser. It can save up to 5 samples. Each sample takes up to 5000 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#samples LogsCustomPipeline#samples}
  */
  readonly samples?: string[];
  /**
  * Name of the log attribute to parse.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * grok block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#grok LogsCustomPipeline#grok}
  */
  readonly grok: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok;
}

function logsCustomPipelineProcessorPipelineProcessorGrokParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorGrokParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorGrokParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // samples - computed: false, optional: true, required: false
  private _samples?: string[] | undefined; 
  public get samples() {
    return this.getListAttribute('samples');
  }
  public set samples(value: string[] | undefined) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples
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
    return this._source
  }

  // grok - computed: false, optional: false, required: true
  private _grok?: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok; 
  private __grokOutput = new LogsCustomPipelineProcessorPipelineProcessorGrokParserGrokOutputReference(this as any, "grok", true);
  public get grok() {
    return this.__grokOutput;
  }
  public putGrok(value: LogsCustomPipelineProcessorPipelineProcessorGrokParserGrok) {
    this._grok = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokInput() {
    return this._grok
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorLookupProcessor {
  /**
  * Default lookup value to use if there is no entry in the lookup table for the value of the source attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#default_lookup LogsCustomPipeline#default_lookup}
  */
  readonly defaultLookup?: string;
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of entries of the lookup table using `key,value` format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#lookup_table LogsCustomPipeline#lookup_table}
  */
  readonly lookupTable: string[];
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Name of the source attribute used to do the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#source LogsCustomPipeline#source}
  */
  readonly source: string;
  /**
  * Name of the attribute that contains the result of the lookup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorPipelineProcessorLookupProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorLookupProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorLookupProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_lookup - computed: false, optional: true, required: false
  private _defaultLookup?: string | undefined; 
  public get defaultLookup() {
    return this.getStringAttribute('default_lookup');
  }
  public set defaultLookup(value: string | undefined) {
    this._defaultLookup = value;
  }
  public resetDefaultLookup() {
    this._defaultLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLookupInput() {
    return this._defaultLookup
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
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
    return this._lookupTable
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._source
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorMessageRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorPipelineProcessorMessageRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorMessageRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorMessageRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorServiceRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorPipelineProcessorServiceRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorServiceRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorServiceRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorStatusRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorPipelineProcessorStatusRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorStatusRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorStatusRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If it replaces all missing attributes of template by an empty string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * The name of the attribute that contains the result of the template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * The formula with one or more attributes and raw text.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#template LogsCustomPipeline#template}
  */
  readonly template: string;
}

function logsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessorOutputReference | LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable | undefined; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing') as any;
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable | undefined) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._target
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
    return this._template
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorPipelineProcessorTraceIdRemapperToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapperOutputReference | LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorUrlParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Normalize the ending slashes or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#normalize_ending_slashes LogsCustomPipeline#normalize_ending_slashes}
  */
  readonly normalizeEndingSlashes?: boolean | cdktf.IResolvable;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorPipelineProcessorUrlParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorUrlParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorUrlParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // normalize_ending_slashes - computed: false, optional: true, required: false
  private _normalizeEndingSlashes?: boolean | cdktf.IResolvable | undefined; 
  public get normalizeEndingSlashes() {
    return this.getBooleanAttribute('normalize_ending_slashes') as any;
  }
  public set normalizeEndingSlashes(value: boolean | cdktf.IResolvable | undefined) {
    this._normalizeEndingSlashes = value;
  }
  public resetNormalizeEndingSlashes() {
    this._normalizeEndingSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeEndingSlashesInput() {
    return this._normalizeEndingSlashes
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
    return this._sources
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessorUserAgentParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If the source attribute is URL encoded or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_encoded LogsCustomPipeline#is_encoded}
  */
  readonly isEncoded?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorPipelineProcessorUserAgentParserToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessorUserAgentParserOutputReference | LogsCustomPipelineProcessorPipelineProcessorUserAgentParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // is_encoded - computed: false, optional: true, required: false
  private _isEncoded?: boolean | cdktf.IResolvable | undefined; 
  public get isEncoded() {
    return this.getBooleanAttribute('is_encoded') as any;
  }
  public set isEncoded(value: boolean | cdktf.IResolvable | undefined) {
    this._isEncoded = value;
  }
  public resetIsEncoded() {
    this._isEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncodedInput() {
    return this._isEncoded
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorPipelineProcessor {
  /**
  * arithmetic_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#arithmetic_processor LogsCustomPipeline#arithmetic_processor}
  */
  readonly arithmeticProcessor?: LogsCustomPipelineProcessorPipelineProcessorArithmeticProcessor;
  /**
  * attribute_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#attribute_remapper LogsCustomPipeline#attribute_remapper}
  */
  readonly attributeRemapper?: LogsCustomPipelineProcessorPipelineProcessorAttributeRemapper;
  /**
  * category_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#category_processor LogsCustomPipeline#category_processor}
  */
  readonly categoryProcessor?: LogsCustomPipelineProcessorPipelineProcessorCategoryProcessor;
  /**
  * date_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#date_remapper LogsCustomPipeline#date_remapper}
  */
  readonly dateRemapper?: LogsCustomPipelineProcessorPipelineProcessorDateRemapper;
  /**
  * geo_ip_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#geo_ip_parser LogsCustomPipeline#geo_ip_parser}
  */
  readonly geoIpParser?: LogsCustomPipelineProcessorPipelineProcessorGeoIpParser;
  /**
  * grok_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#grok_parser LogsCustomPipeline#grok_parser}
  */
  readonly grokParser?: LogsCustomPipelineProcessorPipelineProcessorGrokParser;
  /**
  * lookup_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#lookup_processor LogsCustomPipeline#lookup_processor}
  */
  readonly lookupProcessor?: LogsCustomPipelineProcessorPipelineProcessorLookupProcessor;
  /**
  * message_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#message_remapper LogsCustomPipeline#message_remapper}
  */
  readonly messageRemapper?: LogsCustomPipelineProcessorPipelineProcessorMessageRemapper;
  /**
  * service_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#service_remapper LogsCustomPipeline#service_remapper}
  */
  readonly serviceRemapper?: LogsCustomPipelineProcessorPipelineProcessorServiceRemapper;
  /**
  * status_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#status_remapper LogsCustomPipeline#status_remapper}
  */
  readonly statusRemapper?: LogsCustomPipelineProcessorPipelineProcessorStatusRemapper;
  /**
  * string_builder_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#string_builder_processor LogsCustomPipeline#string_builder_processor}
  */
  readonly stringBuilderProcessor?: LogsCustomPipelineProcessorPipelineProcessorStringBuilderProcessor;
  /**
  * trace_id_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#trace_id_remapper LogsCustomPipeline#trace_id_remapper}
  */
  readonly traceIdRemapper?: LogsCustomPipelineProcessorPipelineProcessorTraceIdRemapper;
  /**
  * url_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#url_parser LogsCustomPipeline#url_parser}
  */
  readonly urlParser?: LogsCustomPipelineProcessorPipelineProcessorUrlParser;
  /**
  * user_agent_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#user_agent_parser LogsCustomPipeline#user_agent_parser}
  */
  readonly userAgentParser?: LogsCustomPipelineProcessorPipelineProcessorUserAgentParser;
}

function logsCustomPipelineProcessorPipelineProcessorToTerraform(struct?: LogsCustomPipelineProcessorPipelineProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#filter LogsCustomPipeline#filter}
  */
  readonly filter: LogsCustomPipelineProcessorPipelineFilter[];
  /**
  * processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#processor LogsCustomPipeline#processor}
  */
  readonly processor?: LogsCustomPipelineProcessorPipelineProcessor[];
}

function logsCustomPipelineProcessorPipelineToTerraform(struct?: LogsCustomPipelineProcessorPipelineOutputReference | LogsCustomPipelineProcessorPipeline): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
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
    return this._name
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: LogsCustomPipelineProcessorPipelineFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: LogsCustomPipelineProcessorPipelineFilter[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // processor - computed: false, optional: true, required: false
  private _processor?: LogsCustomPipelineProcessorPipelineProcessor[] | undefined; 
  public get processor() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processor') as any;
  }
  public set processor(value: LogsCustomPipelineProcessorPipelineProcessor[] | undefined) {
    this._processor = value;
  }
  public resetProcessor() {
    this._processor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor
  }
}
export interface LogsCustomPipelineProcessorServiceRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorServiceRemapperToTerraform(struct?: LogsCustomPipelineProcessorServiceRemapperOutputReference | LogsCustomPipelineProcessorServiceRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorStatusRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorStatusRemapperToTerraform(struct?: LogsCustomPipelineProcessorStatusRemapperOutputReference | LogsCustomPipelineProcessorStatusRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorStringBuilderProcessor {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If it replaces all missing attributes of template by an empty string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_replace_missing LogsCustomPipeline#is_replace_missing}
  */
  readonly isReplaceMissing?: boolean | cdktf.IResolvable;
  /**
  * The name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * The name of the attribute that contains the result of the template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
  /**
  * The formula with one or more attributes and raw text.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#template LogsCustomPipeline#template}
  */
  readonly template: string;
}

function logsCustomPipelineProcessorStringBuilderProcessorToTerraform(struct?: LogsCustomPipelineProcessorStringBuilderProcessorOutputReference | LogsCustomPipelineProcessorStringBuilderProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // is_replace_missing - computed: false, optional: true, required: false
  private _isReplaceMissing?: boolean | cdktf.IResolvable | undefined; 
  public get isReplaceMissing() {
    return this.getBooleanAttribute('is_replace_missing') as any;
  }
  public set isReplaceMissing(value: boolean | cdktf.IResolvable | undefined) {
    this._isReplaceMissing = value;
  }
  public resetIsReplaceMissing() {
    this._isReplaceMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReplaceMissingInput() {
    return this._isReplaceMissing
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._target
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
    return this._template
  }
}
export interface LogsCustomPipelineProcessorTraceIdRemapper {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
}

function logsCustomPipelineProcessorTraceIdRemapperToTerraform(struct?: LogsCustomPipelineProcessorTraceIdRemapperOutputReference | LogsCustomPipelineProcessorTraceIdRemapper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
  }
}
export interface LogsCustomPipelineProcessorUrlParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * Normalize the ending slashes or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#normalize_ending_slashes LogsCustomPipeline#normalize_ending_slashes}
  */
  readonly normalizeEndingSlashes?: boolean | cdktf.IResolvable;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorUrlParserToTerraform(struct?: LogsCustomPipelineProcessorUrlParserOutputReference | LogsCustomPipelineProcessorUrlParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // normalize_ending_slashes - computed: false, optional: true, required: false
  private _normalizeEndingSlashes?: boolean | cdktf.IResolvable | undefined; 
  public get normalizeEndingSlashes() {
    return this.getBooleanAttribute('normalize_ending_slashes') as any;
  }
  public set normalizeEndingSlashes(value: boolean | cdktf.IResolvable | undefined) {
    this._normalizeEndingSlashes = value;
  }
  public resetNormalizeEndingSlashes() {
    this._normalizeEndingSlashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizeEndingSlashesInput() {
    return this._normalizeEndingSlashes
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
    return this._sources
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessorUserAgentParser {
  /**
  * If the processor is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_enabled LogsCustomPipeline#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * If the source attribute is URL encoded or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#is_encoded LogsCustomPipeline#is_encoded}
  */
  readonly isEncoded?: boolean | cdktf.IResolvable;
  /**
  * Name of the processor
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#name LogsCustomPipeline#name}
  */
  readonly name?: string;
  /**
  * List of source attributes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#sources LogsCustomPipeline#sources}
  */
  readonly sources: string[];
  /**
  * Name of the parent attribute that contains all the extracted details from the sources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#target LogsCustomPipeline#target}
  */
  readonly target: string;
}

function logsCustomPipelineProcessorUserAgentParserToTerraform(struct?: LogsCustomPipelineProcessorUserAgentParserOutputReference | LogsCustomPipelineProcessorUserAgentParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
  }

  // is_encoded - computed: false, optional: true, required: false
  private _isEncoded?: boolean | cdktf.IResolvable | undefined; 
  public get isEncoded() {
    return this.getBooleanAttribute('is_encoded') as any;
  }
  public set isEncoded(value: boolean | cdktf.IResolvable | undefined) {
    this._isEncoded = value;
  }
  public resetIsEncoded() {
    this._isEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEncodedInput() {
    return this._isEncoded
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._sources
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
    return this._target
  }
}
export interface LogsCustomPipelineProcessor {
  /**
  * arithmetic_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#arithmetic_processor LogsCustomPipeline#arithmetic_processor}
  */
  readonly arithmeticProcessor?: LogsCustomPipelineProcessorArithmeticProcessor;
  /**
  * attribute_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#attribute_remapper LogsCustomPipeline#attribute_remapper}
  */
  readonly attributeRemapper?: LogsCustomPipelineProcessorAttributeRemapper;
  /**
  * category_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#category_processor LogsCustomPipeline#category_processor}
  */
  readonly categoryProcessor?: LogsCustomPipelineProcessorCategoryProcessor;
  /**
  * date_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#date_remapper LogsCustomPipeline#date_remapper}
  */
  readonly dateRemapper?: LogsCustomPipelineProcessorDateRemapper;
  /**
  * geo_ip_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#geo_ip_parser LogsCustomPipeline#geo_ip_parser}
  */
  readonly geoIpParser?: LogsCustomPipelineProcessorGeoIpParser;
  /**
  * grok_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#grok_parser LogsCustomPipeline#grok_parser}
  */
  readonly grokParser?: LogsCustomPipelineProcessorGrokParser;
  /**
  * lookup_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#lookup_processor LogsCustomPipeline#lookup_processor}
  */
  readonly lookupProcessor?: LogsCustomPipelineProcessorLookupProcessor;
  /**
  * message_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#message_remapper LogsCustomPipeline#message_remapper}
  */
  readonly messageRemapper?: LogsCustomPipelineProcessorMessageRemapper;
  /**
  * pipeline block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#pipeline LogsCustomPipeline#pipeline}
  */
  readonly pipeline?: LogsCustomPipelineProcessorPipeline;
  /**
  * service_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#service_remapper LogsCustomPipeline#service_remapper}
  */
  readonly serviceRemapper?: LogsCustomPipelineProcessorServiceRemapper;
  /**
  * status_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#status_remapper LogsCustomPipeline#status_remapper}
  */
  readonly statusRemapper?: LogsCustomPipelineProcessorStatusRemapper;
  /**
  * string_builder_processor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#string_builder_processor LogsCustomPipeline#string_builder_processor}
  */
  readonly stringBuilderProcessor?: LogsCustomPipelineProcessorStringBuilderProcessor;
  /**
  * trace_id_remapper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#trace_id_remapper LogsCustomPipeline#trace_id_remapper}
  */
  readonly traceIdRemapper?: LogsCustomPipelineProcessorTraceIdRemapper;
  /**
  * url_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#url_parser LogsCustomPipeline#url_parser}
  */
  readonly urlParser?: LogsCustomPipelineProcessorUrlParser;
  /**
  * user_agent_parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html#user_agent_parser LogsCustomPipeline#user_agent_parser}
  */
  readonly userAgentParser?: LogsCustomPipelineProcessorUserAgentParser;
}

function logsCustomPipelineProcessorToTerraform(struct?: LogsCustomPipelineProcessor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html datadog_logs_custom_pipeline}
*/
export class LogsCustomPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_logs_custom_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_custom_pipeline.html datadog_logs_custom_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsCustomPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: LogsCustomPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_custom_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
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
  private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled') as any;
  }
  public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
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
    return this._name
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: LogsCustomPipelineFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: LogsCustomPipelineFilter[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // processor - computed: false, optional: true, required: false
  private _processor?: LogsCustomPipelineProcessor[] | undefined; 
  public get processor() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processor') as any;
  }
  public set processor(value: LogsCustomPipelineProcessor[] | undefined) {
    this._processor = value;
  }
  public resetProcessor() {
    this._processor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor
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
