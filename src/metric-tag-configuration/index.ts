// https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricTagConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Toggle to include/exclude tags as queryable for your metric. Can only be applied to metrics that have one or more tags configured. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#exclude_tags_mode MetricTagConfiguration#exclude_tags_mode}
  */
  readonly excludeTagsMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#id MetricTagConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Toggle to include/exclude percentiles for a distribution metric. Defaults to false. Can only be applied to metrics that have a `metric_type` of distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#include_percentiles MetricTagConfiguration#include_percentiles}
  */
  readonly includePercentiles?: boolean | cdktf.IResolvable;
  /**
  * The metric name for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#metric_name MetricTagConfiguration#metric_name}
  */
  readonly metricName: string;
  /**
  * The metric's type. This field can't be updated after creation. Valid values are `gauge`, `count`, `rate`, `distribution`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#metric_type MetricTagConfiguration#metric_type}
  */
  readonly metricType: string;
  /**
  * A list of tag keys that will be queryable for your metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#tags MetricTagConfiguration#tags}
  */
  readonly tags: string[];
  /**
  * aggregations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#aggregations MetricTagConfiguration#aggregations}
  */
  readonly aggregations?: MetricTagConfigurationAggregations[] | cdktf.IResolvable;
}
export interface MetricTagConfigurationAggregations {
  /**
  * A space aggregation for use in query. Valid values are `avg`, `max`, `min`, `sum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#space MetricTagConfiguration#space}
  */
  readonly space: string;
  /**
  * A time aggregation for use in query. Valid values are `avg`, `count`, `max`, `min`, `sum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#time MetricTagConfiguration#time}
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


export function metricTagConfigurationAggregationsToHclTerraform(struct?: MetricTagConfigurationAggregations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricTagConfigurationAggregationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricTagConfigurationAggregations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricTagConfigurationAggregations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._space = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._space = value.space;
      this._time = value.time;
    }
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // time - computed: false, optional: false, required: true
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class MetricTagConfigurationAggregationsList extends cdktf.ComplexList {
  public internalValue? : MetricTagConfigurationAggregations[] | cdktf.IResolvable

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
  public get(index: number): MetricTagConfigurationAggregationsOutputReference {
    return new MetricTagConfigurationAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration datadog_metric_tag_configuration}
*/
export class MetricTagConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_metric_tag_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricTagConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricTagConfiguration to import
  * @param importFromId The id of the existing MetricTagConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricTagConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_metric_tag_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.55.0/docs/resources/metric_tag_configuration datadog_metric_tag_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricTagConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MetricTagConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_metric_tag_configuration',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.55.0',
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
    this._excludeTagsMode = config.excludeTagsMode;
    this._id = config.id;
    this._includePercentiles = config.includePercentiles;
    this._metricName = config.metricName;
    this._metricType = config.metricType;
    this._tags = config.tags;
    this._aggregations.internalValue = config.aggregations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_tags_mode - computed: false, optional: true, required: false
  private _excludeTagsMode?: boolean | cdktf.IResolvable; 
  public get excludeTagsMode() {
    return this.getBooleanAttribute('exclude_tags_mode');
  }
  public set excludeTagsMode(value: boolean | cdktf.IResolvable) {
    this._excludeTagsMode = value;
  }
  public resetExcludeTagsMode() {
    this._excludeTagsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsModeInput() {
    return this._excludeTagsMode;
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
  private _aggregations = new MetricTagConfigurationAggregationsList(this, "aggregations", true);
  public get aggregations() {
    return this._aggregations;
  }
  public putAggregations(value: MetricTagConfigurationAggregations[] | cdktf.IResolvable) {
    this._aggregations.internalValue = value;
  }
  public resetAggregations() {
    this._aggregations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_tags_mode: cdktf.booleanToTerraform(this._excludeTagsMode),
      id: cdktf.stringToTerraform(this._id),
      include_percentiles: cdktf.booleanToTerraform(this._includePercentiles),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_type: cdktf.stringToTerraform(this._metricType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      aggregations: cdktf.listMapper(metricTagConfigurationAggregationsToTerraform, true)(this._aggregations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_tags_mode: {
        value: cdktf.booleanToHclTerraform(this._excludeTagsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_percentiles: {
        value: cdktf.booleanToHclTerraform(this._includePercentiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
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
      aggregations: {
        value: cdktf.listMapperHcl(metricTagConfigurationAggregationsToHclTerraform, true)(this._aggregations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MetricTagConfigurationAggregationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
