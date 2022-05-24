// https://www.terraform.io/docs/providers/datadog/r/logs_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of log events you can send in this index per day before you are rate-limited.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#daily_limit LogsIndex#daily_limit}
  */
  readonly dailyLimit?: number;
  /**
  * If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored). If false or omitted, the index's current daily_limit is maintained.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#disable_daily_limit LogsIndex#disable_daily_limit}
  */
  readonly disableDailyLimit?: boolean | cdktf.IResolvable;
  /**
  * The name of the index.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#name LogsIndex#name}
  */
  readonly name: string;
  /**
  * The number of days before logs are deleted from this index.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#retention_days LogsIndex#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * exclusion_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#exclusion_filter LogsIndex#exclusion_filter}
  */
  readonly exclusionFilter?: LogsIndexExclusionFilter[] | cdktf.IResolvable;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#filter LogsIndex#filter}
  */
  readonly filter: LogsIndexFilter;
}
export interface LogsIndexExclusionFilterFilter {
  /**
  * Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#query LogsIndex#query}
  */
  readonly query?: string;
  /**
  * The fraction of logs excluded by the exclusion filter, when active.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#sample_rate LogsIndex#sample_rate}
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

export interface LogsIndexExclusionFilter {
  /**
  * A boolean stating if the exclusion is active or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#is_enabled LogsIndex#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the exclusion filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#name LogsIndex#name}
  */
  readonly name?: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#filter LogsIndex#filter}
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
    filter: cdktf.listMapper(logsIndexExclusionFilterFilterToTerraform)(struct!.filter),
  }
}

export interface LogsIndexFilter {
  /**
  * Logs filter criteria. Only logs matching this filter criteria are considered for this index.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_index#query LogsIndex#query}
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
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_index datadog_logs_index}
*/
export class LogsIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_index datadog_logs_index} Resource
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
        providerVersion: '3.12.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dailyLimit = config.dailyLimit;
    this._disableDailyLimit = config.disableDailyLimit;
    this._name = config.name;
    this._retentionDays = config.retentionDays;
    this._exclusionFilter = config.exclusionFilter;
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

  // id - computed: true, optional: true, required: false
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

  // exclusion_filter - computed: false, optional: true, required: false
  private _exclusionFilter?: LogsIndexExclusionFilter[] | cdktf.IResolvable; 
  public get exclusionFilter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclusion_filter');
  }
  public set exclusionFilter(value: LogsIndexExclusionFilter[] | cdktf.IResolvable) {
    this._exclusionFilter = value;
  }
  public resetExclusionFilter() {
    this._exclusionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFilterInput() {
    return this._exclusionFilter;
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
      disable_daily_limit: cdktf.booleanToTerraform(this._disableDailyLimit),
      name: cdktf.stringToTerraform(this._name),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      exclusion_filter: cdktf.listMapper(logsIndexExclusionFilterToTerraform)(this._exclusionFilter),
      filter: logsIndexFilterToTerraform(this._filter.internalValue),
    };
  }
}
