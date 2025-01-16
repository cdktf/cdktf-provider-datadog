/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of log events you can send in this index per day before you are rate-limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#daily_limit LogsIndex#daily_limit}
  */
  readonly dailyLimit?: number;
  /**
  * A percentage threshold of the daily quota at which a Datadog warning event is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#daily_limit_warning_threshold_percentage LogsIndex#daily_limit_warning_threshold_percentage}
  */
  readonly dailyLimitWarningThresholdPercentage?: number;
  /**
  * If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored). If false or omitted, the index's current daily_limit is maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#disable_daily_limit LogsIndex#disable_daily_limit}
  */
  readonly disableDailyLimit?: boolean | cdktf.IResolvable;
  /**
  * The total number of days logs are stored in Standard and Flex Tier before being deleted from the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#flex_retention_days LogsIndex#flex_retention_days}
  */
  readonly flexRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#id LogsIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the index. Index names cannot be modified after creation. If this value is changed, a new index will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#name LogsIndex#name}
  */
  readonly name: string;
  /**
  * The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#retention_days LogsIndex#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * daily_limit_reset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#daily_limit_reset LogsIndex#daily_limit_reset}
  */
  readonly dailyLimitReset?: LogsIndexDailyLimitReset;
  /**
  * exclusion_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#exclusion_filter LogsIndex#exclusion_filter}
  */
  readonly exclusionFilter?: LogsIndexExclusionFilter[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#filter LogsIndex#filter}
  */
  readonly filter: LogsIndexFilter;
}
export interface LogsIndexDailyLimitReset {
  /**
  * String in `HH:00` format representing the time of day the daily limit should be reset. The hours must be between 00 and 23 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#reset_time LogsIndex#reset_time}
  */
  readonly resetTime: string;
  /**
  * String in `(-|+)HH:00` format representing the UTC offset to apply to the given reset time. The hours must be between -12 and +14 (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#reset_utc_offset LogsIndex#reset_utc_offset}
  */
  readonly resetUtcOffset: string;
}

export function logsIndexDailyLimitResetToTerraform(struct?: LogsIndexDailyLimitResetOutputReference | LogsIndexDailyLimitReset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reset_time: cdktf.stringToTerraform(struct!.resetTime),
    reset_utc_offset: cdktf.stringToTerraform(struct!.resetUtcOffset),
  }
}


export function logsIndexDailyLimitResetToHclTerraform(struct?: LogsIndexDailyLimitResetOutputReference | LogsIndexDailyLimitReset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reset_time: {
      value: cdktf.stringToHclTerraform(struct!.resetTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_utc_offset: {
      value: cdktf.stringToHclTerraform(struct!.resetUtcOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsIndexDailyLimitResetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsIndexDailyLimitReset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resetTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTime = this._resetTime;
    }
    if (this._resetUtcOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetUtcOffset = this._resetUtcOffset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsIndexDailyLimitReset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resetTime = undefined;
      this._resetUtcOffset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resetTime = value.resetTime;
      this._resetUtcOffset = value.resetUtcOffset;
    }
  }

  // reset_time - computed: false, optional: false, required: true
  private _resetTime?: string; 
  public get resetTime() {
    return this.getStringAttribute('reset_time');
  }
  public set resetTime(value: string) {
    this._resetTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeInput() {
    return this._resetTime;
  }

  // reset_utc_offset - computed: false, optional: false, required: true
  private _resetUtcOffset?: string; 
  public get resetUtcOffset() {
    return this.getStringAttribute('reset_utc_offset');
  }
  public set resetUtcOffset(value: string) {
    this._resetUtcOffset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resetUtcOffsetInput() {
    return this._resetUtcOffset;
  }
}
export interface LogsIndexExclusionFilterFilter {
  /**
  * Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#query LogsIndex#query}
  */
  readonly query?: string;
  /**
  * The fraction of logs excluded by the exclusion filter, when active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#sample_rate LogsIndex#sample_rate}
  */
  readonly sampleRate?: number;
}

export function logsIndexExclusionFilterFilterToTerraform(struct?: LogsIndexExclusionFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
  }
}


export function logsIndexExclusionFilterFilterToHclTerraform(struct?: LogsIndexExclusionFilterFilter | cdktf.IResolvable): any {
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
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsIndexExclusionFilterFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsIndexExclusionFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsIndexExclusionFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
      this._sampleRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
      this._sampleRate = value.sampleRate;
    }
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // sample_rate - computed: false, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }
}

export class LogsIndexExclusionFilterFilterList extends cdktf.ComplexList {
  public internalValue? : LogsIndexExclusionFilterFilter[] | cdktf.IResolvable

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
  public get(index: number): LogsIndexExclusionFilterFilterOutputReference {
    return new LogsIndexExclusionFilterFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsIndexExclusionFilter {
  /**
  * A boolean stating if the exclusion is active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#is_enabled LogsIndex#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the exclusion filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#name LogsIndex#name}
  */
  readonly name?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#filter LogsIndex#filter}
  */
  readonly filter?: LogsIndexExclusionFilterFilter[] | cdktf.IResolvable;
}

export function logsIndexExclusionFilterToTerraform(struct?: LogsIndexExclusionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    filter: cdktf.listMapper(logsIndexExclusionFilterFilterToTerraform, true)(struct!.filter),
  }
}


export function logsIndexExclusionFilterToHclTerraform(struct?: LogsIndexExclusionFilter | cdktf.IResolvable): any {
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
    filter: {
      value: cdktf.listMapperHcl(logsIndexExclusionFilterFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "LogsIndexExclusionFilterFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsIndexExclusionFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogsIndexExclusionFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsIndexExclusionFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
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
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._filter.internalValue = value.filter;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new LogsIndexExclusionFilterFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsIndexExclusionFilterFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class LogsIndexExclusionFilterList extends cdktf.ComplexList {
  public internalValue? : LogsIndexExclusionFilter[] | cdktf.IResolvable

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
  public get(index: number): LogsIndexExclusionFilterOutputReference {
    return new LogsIndexExclusionFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogsIndexFilter {
  /**
  * Logs filter criteria. Only logs matching this filter criteria are considered for this index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#query LogsIndex#query}
  */
  readonly query: string;
}

export function logsIndexFilterToTerraform(struct?: LogsIndexFilterOutputReference | LogsIndexFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function logsIndexFilterToHclTerraform(struct?: LogsIndexFilterOutputReference | LogsIndexFilter): any {
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

export class LogsIndexFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsIndexFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsIndexFilter | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index datadog_logs_index}
*/
export class LogsIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogsIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsIndex to import
  * @param importFromId The id of the existing LogsIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.52.0/docs/resources/logs_index datadog_logs_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsIndexConfig
  */
  public constructor(scope: Construct, id: string, config: LogsIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_index',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.52.0',
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
    this._dailyLimit = config.dailyLimit;
    this._dailyLimitWarningThresholdPercentage = config.dailyLimitWarningThresholdPercentage;
    this._disableDailyLimit = config.disableDailyLimit;
    this._flexRetentionDays = config.flexRetentionDays;
    this._id = config.id;
    this._name = config.name;
    this._retentionDays = config.retentionDays;
    this._dailyLimitReset.internalValue = config.dailyLimitReset;
    this._exclusionFilter.internalValue = config.exclusionFilter;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // daily_limit - computed: false, optional: true, required: false
  private _dailyLimit?: number; 
  public get dailyLimit() {
    return this.getNumberAttribute('daily_limit');
  }
  public set dailyLimit(value: number) {
    this._dailyLimit = value;
  }
  public resetDailyLimit() {
    this._dailyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyLimitInput() {
    return this._dailyLimit;
  }

  // daily_limit_warning_threshold_percentage - computed: true, optional: true, required: false
  private _dailyLimitWarningThresholdPercentage?: number; 
  public get dailyLimitWarningThresholdPercentage() {
    return this.getNumberAttribute('daily_limit_warning_threshold_percentage');
  }
  public set dailyLimitWarningThresholdPercentage(value: number) {
    this._dailyLimitWarningThresholdPercentage = value;
  }
  public resetDailyLimitWarningThresholdPercentage() {
    this._dailyLimitWarningThresholdPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyLimitWarningThresholdPercentageInput() {
    return this._dailyLimitWarningThresholdPercentage;
  }

  // disable_daily_limit - computed: true, optional: true, required: false
  private _disableDailyLimit?: boolean | cdktf.IResolvable; 
  public get disableDailyLimit() {
    return this.getBooleanAttribute('disable_daily_limit');
  }
  public set disableDailyLimit(value: boolean | cdktf.IResolvable) {
    this._disableDailyLimit = value;
  }
  public resetDisableDailyLimit() {
    this._disableDailyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDailyLimitInput() {
    return this._disableDailyLimit;
  }

  // flex_retention_days - computed: true, optional: true, required: false
  private _flexRetentionDays?: number; 
  public get flexRetentionDays() {
    return this.getNumberAttribute('flex_retention_days');
  }
  public set flexRetentionDays(value: number) {
    this._flexRetentionDays = value;
  }
  public resetFlexRetentionDays() {
    this._flexRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexRetentionDaysInput() {
    return this._flexRetentionDays;
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

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // daily_limit_reset - computed: false, optional: true, required: false
  private _dailyLimitReset = new LogsIndexDailyLimitResetOutputReference(this, "daily_limit_reset");
  public get dailyLimitReset() {
    return this._dailyLimitReset;
  }
  public putDailyLimitReset(value: LogsIndexDailyLimitReset) {
    this._dailyLimitReset.internalValue = value;
  }
  public resetDailyLimitReset() {
    this._dailyLimitReset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyLimitResetInput() {
    return this._dailyLimitReset.internalValue;
  }

  // exclusion_filter - computed: false, optional: true, required: false
  private _exclusionFilter = new LogsIndexExclusionFilterList(this, "exclusion_filter", false);
  public get exclusionFilter() {
    return this._exclusionFilter;
  }
  public putExclusionFilter(value: LogsIndexExclusionFilter[] | cdktf.IResolvable) {
    this._exclusionFilter.internalValue = value;
  }
  public resetExclusionFilter() {
    this._exclusionFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFilterInput() {
    return this._exclusionFilter.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsIndexFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsIndexFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      daily_limit: cdktf.numberToTerraform(this._dailyLimit),
      daily_limit_warning_threshold_percentage: cdktf.numberToTerraform(this._dailyLimitWarningThresholdPercentage),
      disable_daily_limit: cdktf.booleanToTerraform(this._disableDailyLimit),
      flex_retention_days: cdktf.numberToTerraform(this._flexRetentionDays),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      daily_limit_reset: logsIndexDailyLimitResetToTerraform(this._dailyLimitReset.internalValue),
      exclusion_filter: cdktf.listMapper(logsIndexExclusionFilterToTerraform, true)(this._exclusionFilter.internalValue),
      filter: logsIndexFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      daily_limit: {
        value: cdktf.numberToHclTerraform(this._dailyLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      daily_limit_warning_threshold_percentage: {
        value: cdktf.numberToHclTerraform(this._dailyLimitWarningThresholdPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_daily_limit: {
        value: cdktf.booleanToHclTerraform(this._disableDailyLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flex_retention_days: {
        value: cdktf.numberToHclTerraform(this._flexRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      daily_limit_reset: {
        value: logsIndexDailyLimitResetToHclTerraform(this._dailyLimitReset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsIndexDailyLimitResetList",
      },
      exclusion_filter: {
        value: cdktf.listMapperHcl(logsIndexExclusionFilterToHclTerraform, true)(this._exclusionFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsIndexExclusionFilterList",
      },
      filter: {
        value: logsIndexFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsIndexFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
