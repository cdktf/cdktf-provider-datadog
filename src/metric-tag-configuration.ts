// https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricTagConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Toggle to include/exclude percentiles for a distribution metric. Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}
  */
  readonly includePercentiles?: boolean | cdktf.IResolvable;
  /**
  * The metric name for this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}
  */
  readonly metricName: string;
  /**
  * The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}
  */
  readonly metricType: string;
  /**
  * A list of tag keys that will be queryable for your metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration#tags MetricTagConfiguration#tags}
  */
  readonly tags: string[];
  /**
  * aggregations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}
  */
  readonly aggregations?: MetricTagConfigurationAggregations[] | cdktf.IResolvable;
}
export interface MetricTagConfigurationAggregations {
  /**
  * A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration#space MetricTagConfiguration#space}
  */
  readonly space: string;
  /**
  * A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration#time MetricTagConfiguration#time}
  */
  readonly time: string;
}

export function metricTagConfigurationAggregationsToTerraform(struct?: MetricTagConfigurationAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    space: cdktf.stringToTerraform(struct!.space),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration datadog_metric_tag_configuration}
*/
export class MetricTagConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_metric_tag_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/metric_tag_configuration datadog_metric_tag_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricTagConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MetricTagConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_metric_tag_configuration',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._includePercentiles = config.includePercentiles;
    this._metricName = config.metricName;
    this._metricType = config.metricType;
    this._tags = config.tags;
    this._aggregations = config.aggregations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_percentiles - computed: false, optional: true, required: false
  private _includePercentiles?: boolean | cdktf.IResolvable; 
  public get includePercentiles() {
    return this.getBooleanAttribute('include_percentiles');
  }
  public set includePercentiles(value: boolean | cdktf.IResolvable) {
    this._includePercentiles = value;
  }
  public resetIncludePercentiles() {
    this._includePercentiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePercentilesInput() {
    return this._includePercentiles;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations?: MetricTagConfigurationAggregations[] | cdktf.IResolvable; 
  public get aggregations() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('aggregations')));
  }
  public set aggregations(value: MetricTagConfigurationAggregations[] | cdktf.IResolvable) {
    this._aggregations = value;
  }
  public resetAggregations() {
    this._aggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_percentiles: cdktf.booleanToTerraform(this._includePercentiles),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_type: cdktf.stringToTerraform(this._metricType),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      aggregations: cdktf.listMapper(metricTagConfigurationAggregationsToTerraform)(this._aggregations),
    };
  }
}
