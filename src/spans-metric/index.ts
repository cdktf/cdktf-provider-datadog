/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpansMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the span-based metric. This field can't be updated after creation.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#name SpansMetric#name}
  */
  readonly name: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#filter SpansMetric#filter}
  */
  readonly filter?: SpansMetricFilter;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#group_by SpansMetric#group_by}
  */
  readonly groupBy?: SpansMetricGroupBy[] | cdktf.IResolvable;
}
export interface SpansMetricCompute {
  /**
  * The type of aggregation to use. This field can't be updated after creation.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#aggregation_type SpansMetric#aggregation_type}
  */
  readonly aggregationType: string;
  /**
  * Toggle to include or exclude percentile aggregations for distribution metrics. Only present when the `aggregation_type` is `distribution`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#include_percentiles SpansMetric#include_percentiles}
  */
  readonly includePercentiles?: boolean | cdktf.IResolvable;
  /**
  * The path to the value the span-based metric will aggregate on (only used if the aggregation type is a "distribution"). This field can't be updated after creation.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#path SpansMetric#path}
  */
  readonly path?: string;
}

export function spansMetricComputeToTerraform(struct?: SpansMetricCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    include_percentiles: cdktf.booleanToTerraform(struct!.includePercentiles),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class SpansMetricComputeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpansMetricCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._includePercentiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePercentiles = this._includePercentiles;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpansMetricCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationType = undefined;
      this._includePercentiles = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationType = value.aggregationType;
      this._includePercentiles = value.includePercentiles;
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
export interface SpansMetricFilter {
  /**
  * The search query - following the span search syntax.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#query SpansMetric#query}
  */
  readonly query?: string;
}

export function spansMetricFilterToTerraform(struct?: SpansMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class SpansMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpansMetricFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpansMetricFilter | cdktf.IResolvable | undefined) {
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

  // query - computed: true, optional: true, required: false
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
}
export interface SpansMetricGroupBy {
  /**
  * The path to the value the span-based metric will be aggregated over.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#path SpansMetric#path}
  */
  readonly path: string;
  /**
  * Eventual name of the tag that gets created. By default, the path attribute is used as the tag name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric#tag_name SpansMetric#tag_name}
  */
  readonly tagName?: string;
}

export function spansMetricGroupByToTerraform(struct?: SpansMetricGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}

export class SpansMetricGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpansMetricGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpansMetricGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._tagName = value.tagName;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class SpansMetricGroupByList extends cdktf.ComplexList {
  public internalValue? : SpansMetricGroupBy[] | cdktf.IResolvable

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
  public get(index: number): SpansMetricGroupByOutputReference {
    return new SpansMetricGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric datadog_spans_metric}
*/
export class SpansMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_spans_metric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/spans_metric datadog_spans_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpansMetricConfig
  */
  public constructor(scope: Construct, id: string, config: SpansMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_spans_metric',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.27.0',
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
    this._name = config.name;
    this._filter.internalValue = config.filter;
    this._groupBy.internalValue = config.groupBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
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

  // compute - computed: false, optional: false, required: false
  private _compute = new SpansMetricComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new SpansMetricFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SpansMetricFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new SpansMetricGroupByList(this, "group_by", true);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: SpansMetricGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      filter: spansMetricFilterToTerraform(this._filter.internalValue),
      group_by: cdktf.listMapper(spansMetricGroupByToTerraform, true)(this._groupBy.internalValue),
    };
  }
}
