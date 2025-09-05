/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogMetricActiveTagsAndAggregationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The metric for which to fetch tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations#metric DataDatadogMetricActiveTagsAndAggregations#metric}
  */
  readonly metric: string;
  /**
  * The number of seconds to look back from now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations#window DataDatadogMetricActiveTagsAndAggregations#window}
  */
  readonly window?: number;
}
export interface DataDatadogMetricActiveTagsAndAggregationsActiveAggregations {
}

export function dataDatadogMetricActiveTagsAndAggregationsActiveAggregationsToTerraform(struct?: DataDatadogMetricActiveTagsAndAggregationsActiveAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogMetricActiveTagsAndAggregationsActiveAggregationsToHclTerraform(struct?: DataDatadogMetricActiveTagsAndAggregationsActiveAggregations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogMetricActiveTagsAndAggregationsActiveAggregations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogMetricActiveTagsAndAggregationsActiveAggregations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // space - computed: true, optional: false, required: false
  public get space() {
    return this.getStringAttribute('space');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }
}

export class DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference {
    return new DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations datadog_metric_active_tags_and_aggregations}
*/
export class DataDatadogMetricActiveTagsAndAggregations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_metric_active_tags_and_aggregations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatadogMetricActiveTagsAndAggregations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogMetricActiveTagsAndAggregations to import
  * @param importFromId The id of the existing DataDatadogMetricActiveTagsAndAggregations that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogMetricActiveTagsAndAggregations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_metric_active_tags_and_aggregations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/data-sources/metric_active_tags_and_aggregations datadog_metric_active_tags_and_aggregations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogMetricActiveTagsAndAggregationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogMetricActiveTagsAndAggregationsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_metric_active_tags_and_aggregations',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.73.0',
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
    this._metric = config.metric;
    this._window = config.window;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_aggregations - computed: true, optional: false, required: false
  private _activeAggregations = new DataDatadogMetricActiveTagsAndAggregationsActiveAggregationsList(this, "active_aggregations", false);
  public get activeAggregations() {
    return this._activeAggregations;
  }

  // active_tags - computed: true, optional: false, required: false
  public get activeTags() {
    return this.getListAttribute('active_tags');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // window - computed: false, optional: true, required: false
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  public resetWindow() {
    this._window = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metric: cdktf.stringToTerraform(this._metric),
      window: cdktf.numberToTerraform(this._window),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window: {
        value: cdktf.numberToHclTerraform(this._window),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
