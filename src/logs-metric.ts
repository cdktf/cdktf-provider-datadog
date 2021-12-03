// https://www.terraform.io/docs/providers/datadog/r/logs_metric.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogsMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the log-based metric. This field can't be updated after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#name LogsMetric#name}
  */
  readonly name: string;
  /**
  * compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#compute LogsMetric#compute}
  */
  readonly compute: LogsMetricCompute;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#filter LogsMetric#filter}
  */
  readonly filter: LogsMetricFilter;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#group_by LogsMetric#group_by}
  */
  readonly groupBy?: LogsMetricGroupBy[];
}
export interface LogsMetricCompute {
  /**
  * The type of aggregation to use. This field can't be updated after creation. Valid values are `count`, `distribution`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#aggregation_type LogsMetric#aggregation_type}
  */
  readonly aggregationType: string;
  /**
  * The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution"). This field can't be updated after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#path LogsMetric#path}
  */
  readonly path?: string;
}

export function logsMetricComputeToTerraform(struct?: LogsMetricComputeOutputReference | LogsMetricCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class LogsMetricComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogsMetricCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._path) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsMetricCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._path = value.path;
    }
  }

  // aggregation_type - computed: false, optional: false, required: true
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface LogsMetricFilter {
  /**
  * The search query - following the log search syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#query LogsMetric#query}
  */
  readonly query: string;
}

export function logsMetricFilterToTerraform(struct?: LogsMetricFilterOutputReference | LogsMetricFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class LogsMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): LogsMetricFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsMetricFilter | undefined) {
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
export interface LogsMetricGroupBy {
  /**
  * The path to the value the log-based metric will be aggregated over.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#path LogsMetric#path}
  */
  readonly path: string;
  /**
  * Name of the tag that gets created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#tag_name LogsMetric#tag_name}
  */
  readonly tagName: string;
}

export function logsMetricGroupByToTerraform(struct?: LogsMetricGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html datadog_logs_metric}
*/
export class LogsMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_logs_metric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html datadog_logs_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsMetricConfig
  */
  public constructor(scope: Construct, id: string, config: LogsMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_metric',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._compute.internalValue = config.compute;
    this._filter.internalValue = config.filter;
    this._groupBy = config.groupBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // compute - computed: false, optional: false, required: true
  private _compute = new LogsMetricComputeOutputReference(this as any, "compute", true);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: LogsMetricCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsMetricFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsMetricFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: LogsMetricGroupBy[]; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: LogsMetricGroupBy[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      compute: logsMetricComputeToTerraform(this._compute.internalValue),
      filter: logsMetricFilterToTerraform(this._filter.internalValue),
      group_by: cdktf.listMapper(logsMetricGroupByToTerraform)(this._groupBy),
    };
  }
}
