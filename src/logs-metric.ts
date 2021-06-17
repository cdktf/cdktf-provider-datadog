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
  readonly compute: LogsMetricCompute[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html#filter LogsMetric#filter}
  */
  readonly filter: LogsMetricFilter[];
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

function logsMetricComputeToTerraform(struct?: LogsMetricCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    path: cdktf.stringToTerraform(struct!.path),
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

function logsMetricFilterToTerraform(struct?: LogsMetricFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query: cdktf.stringToTerraform(struct!.query),
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

function logsMetricGroupByToTerraform(struct?: LogsMetricGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/logs_metric.html datadog_logs_metric}
*/
export class LogsMetric extends cdktf.TerraformResource {

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
    this._compute = config.compute;
    this._filter = config.filter;
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

  // compute - computed: false, optional: false, required: true
  private _compute: LogsMetricCompute[];
  public get compute() {
    return this.interpolationForAttribute('compute') as any;
  }
  public set compute(value: LogsMetricCompute[]) {
    this._compute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute
  }

  // filter - computed: false, optional: false, required: true
  private _filter: LogsMetricFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: LogsMetricFilter[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: LogsMetricGroupBy[];
  public get groupBy() {
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: LogsMetricGroupBy[] ) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      compute: cdktf.listMapper(logsMetricComputeToTerraform)(this._compute),
      filter: cdktf.listMapper(logsMetricFilterToTerraform)(this._filter),
      group_by: cdktf.listMapper(logsMetricGroupByToTerraform)(this._groupBy),
    };
  }
}
