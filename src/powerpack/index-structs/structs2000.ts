/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { PowerpackWidgetTreemapDefinitionRequestQueryEventQueryCompute,
powerpackWidgetTreemapDefinitionRequestQueryEventQueryComputeToTerraform,
powerpackWidgetTreemapDefinitionRequestQueryEventQueryComputeToHclTerraform,
PowerpackWidgetTreemapDefinitionRequestQueryEventQueryComputeList,
PowerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQuery,
powerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQueryToTerraform,
powerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform,
PowerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQueryOutputReference,
PowerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQuery,
powerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQueryToTerraform,
powerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQueryToHclTerraform,
PowerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQueryOutputReference,
PowerpackWidgetTreemapDefinitionRequestQueryCloudCostQuery,
powerpackWidgetTreemapDefinitionRequestQueryCloudCostQueryToTerraform,
powerpackWidgetTreemapDefinitionRequestQueryCloudCostQueryToHclTerraform,
PowerpackWidgetTreemapDefinitionRequestQueryCloudCostQueryOutputReference,
PowerpackWidgetTreemapDefinitionRequestFormula,
powerpackWidgetTreemapDefinitionRequestFormulaToTerraform,
powerpackWidgetTreemapDefinitionRequestFormulaToHclTerraform,
PowerpackWidgetTreemapDefinitionRequestFormulaList,
PowerpackWidgetTreemapDefinitionCustomLinks,
powerpackWidgetTreemapDefinitionCustomLinksToTerraform,
powerpackWidgetTreemapDefinitionCustomLinksToHclTerraform,
PowerpackWidgetTreemapDefinitionCustomLinksList,
PowerpackWidgetTimeseriesDefinition,
powerpackWidgetTimeseriesDefinitionToTerraform,
powerpackWidgetTimeseriesDefinitionToHclTerraform,
PowerpackWidgetTimeseriesDefinitionOutputReference,
PowerpackWidgetToplistDefinition,
powerpackWidgetToplistDefinitionToTerraform,
powerpackWidgetToplistDefinitionToHclTerraform,
PowerpackWidgetToplistDefinitionOutputReference,
PowerpackWidgetTopologyMapDefinition,
powerpackWidgetTopologyMapDefinitionToTerraform,
powerpackWidgetTopologyMapDefinitionToHclTerraform,
PowerpackWidgetTopologyMapDefinitionOutputReference,
PowerpackWidgetTraceServiceDefinition,
powerpackWidgetTraceServiceDefinitionToTerraform,
powerpackWidgetTraceServiceDefinitionToHclTerraform,
PowerpackWidgetTraceServiceDefinitionOutputReference } from './structs1600'
import { PowerpackWidgetAlertGraphDefinition,
powerpackWidgetAlertGraphDefinitionToTerraform,
powerpackWidgetAlertGraphDefinitionToHclTerraform,
PowerpackWidgetAlertGraphDefinitionOutputReference,
PowerpackWidgetAlertValueDefinition,
powerpackWidgetAlertValueDefinitionToTerraform,
powerpackWidgetAlertValueDefinitionToHclTerraform,
PowerpackWidgetAlertValueDefinitionOutputReference,
PowerpackWidgetChangeDefinition,
powerpackWidgetChangeDefinitionToTerraform,
powerpackWidgetChangeDefinitionToHclTerraform,
PowerpackWidgetChangeDefinitionOutputReference,
PowerpackWidgetCheckStatusDefinition,
powerpackWidgetCheckStatusDefinitionToTerraform,
powerpackWidgetCheckStatusDefinitionToHclTerraform,
PowerpackWidgetCheckStatusDefinitionOutputReference,
PowerpackWidgetDistributionDefinition,
powerpackWidgetDistributionDefinitionToTerraform,
powerpackWidgetDistributionDefinitionToHclTerraform,
PowerpackWidgetDistributionDefinitionOutputReference,
PowerpackWidgetEventStreamDefinition,
powerpackWidgetEventStreamDefinitionToTerraform,
powerpackWidgetEventStreamDefinitionToHclTerraform,
PowerpackWidgetEventStreamDefinitionOutputReference,
PowerpackWidgetEventTimelineDefinition,
powerpackWidgetEventTimelineDefinitionToTerraform,
powerpackWidgetEventTimelineDefinitionToHclTerraform,
PowerpackWidgetEventTimelineDefinitionOutputReference,
PowerpackWidgetFreeTextDefinition,
powerpackWidgetFreeTextDefinitionToTerraform,
powerpackWidgetFreeTextDefinitionToHclTerraform,
PowerpackWidgetFreeTextDefinitionOutputReference,
PowerpackWidgetGeomapDefinition,
powerpackWidgetGeomapDefinitionToTerraform,
powerpackWidgetGeomapDefinitionToHclTerraform,
PowerpackWidgetGeomapDefinitionOutputReference } from './structs0'
import { PowerpackWidgetHeatmapDefinition,
powerpackWidgetHeatmapDefinitionToTerraform,
powerpackWidgetHeatmapDefinitionToHclTerraform,
PowerpackWidgetHeatmapDefinitionOutputReference,
PowerpackWidgetHostmapDefinition,
powerpackWidgetHostmapDefinitionToTerraform,
powerpackWidgetHostmapDefinitionToHclTerraform,
PowerpackWidgetHostmapDefinitionOutputReference,
PowerpackWidgetIframeDefinition,
powerpackWidgetIframeDefinitionToTerraform,
powerpackWidgetIframeDefinitionToHclTerraform,
PowerpackWidgetIframeDefinitionOutputReference,
PowerpackWidgetImageDefinition,
powerpackWidgetImageDefinitionToTerraform,
powerpackWidgetImageDefinitionToHclTerraform,
PowerpackWidgetImageDefinitionOutputReference,
PowerpackWidgetListStreamDefinition,
powerpackWidgetListStreamDefinitionToTerraform,
powerpackWidgetListStreamDefinitionToHclTerraform,
PowerpackWidgetListStreamDefinitionOutputReference,
PowerpackWidgetLogStreamDefinition,
powerpackWidgetLogStreamDefinitionToTerraform,
powerpackWidgetLogStreamDefinitionToHclTerraform,
PowerpackWidgetLogStreamDefinitionOutputReference,
PowerpackWidgetManageStatusDefinition,
powerpackWidgetManageStatusDefinitionToTerraform,
powerpackWidgetManageStatusDefinitionToHclTerraform,
PowerpackWidgetManageStatusDefinitionOutputReference,
PowerpackWidgetNoteDefinition,
powerpackWidgetNoteDefinitionToTerraform,
powerpackWidgetNoteDefinitionToHclTerraform,
PowerpackWidgetNoteDefinitionOutputReference } from './structs400'
import { PowerpackWidgetQueryTableDefinition,
powerpackWidgetQueryTableDefinitionToTerraform,
powerpackWidgetQueryTableDefinitionToHclTerraform,
PowerpackWidgetQueryTableDefinitionOutputReference,
PowerpackWidgetQueryValueDefinition,
powerpackWidgetQueryValueDefinitionToTerraform,
powerpackWidgetQueryValueDefinitionToHclTerraform,
PowerpackWidgetQueryValueDefinitionOutputReference,
PowerpackWidgetRunWorkflowDefinition,
powerpackWidgetRunWorkflowDefinitionToTerraform,
powerpackWidgetRunWorkflowDefinitionToHclTerraform,
PowerpackWidgetRunWorkflowDefinitionOutputReference } from './structs800'
import { PowerpackWidgetScatterplotDefinition,
powerpackWidgetScatterplotDefinitionToTerraform,
powerpackWidgetScatterplotDefinitionToHclTerraform,
PowerpackWidgetScatterplotDefinitionOutputReference,
PowerpackWidgetServiceLevelObjectiveDefinition,
powerpackWidgetServiceLevelObjectiveDefinitionToTerraform,
powerpackWidgetServiceLevelObjectiveDefinitionToHclTerraform,
PowerpackWidgetServiceLevelObjectiveDefinitionOutputReference,
PowerpackWidgetServicemapDefinition,
powerpackWidgetServicemapDefinitionToTerraform,
powerpackWidgetServicemapDefinitionToHclTerraform,
PowerpackWidgetServicemapDefinitionOutputReference,
PowerpackWidgetSloListDefinition,
powerpackWidgetSloListDefinitionToTerraform,
powerpackWidgetSloListDefinitionToHclTerraform,
PowerpackWidgetSloListDefinitionOutputReference,
PowerpackWidgetSunburstDefinition,
powerpackWidgetSunburstDefinitionToTerraform,
powerpackWidgetSunburstDefinitionToHclTerraform,
PowerpackWidgetSunburstDefinitionOutputReference } from './structs1200'
export interface PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#aggregation Powerpack#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#metric Powerpack#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#order Powerpack#order}
  */
  readonly order?: string;
}

export function powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric: cdktf.stringToTerraform(struct!.metric),
    order: cdktf.stringToTerraform(struct!.order),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metric = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metric = value.metric;
      this._order = value.order;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#facet Powerpack#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#limit Powerpack#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#sort Powerpack#sort}
  */
  readonly sort?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySort;
}

export function powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    facet: {
      value: cdktf.stringToHclTerraform(struct!.facet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort: {
      value: powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facet = value.facet;
      this._limit = value.limit;
      this._sort.internalValue = value.sort;
    }
  }

  // facet - computed: false, optional: false, required: true
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBySort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }
}

export class PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByOutputReference {
    return new PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#query Powerpack#query}
  */
  readonly query: string;
}

export function powerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearch): any {
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

export class PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearch | undefined) {
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
export interface PowerpackWidgetTreemapDefinitionRequestQueryEventQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#cross_org_uuids Powerpack#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`, `ci_tests`, `ci_pipelines`, `incident_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#data_source Powerpack#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#indexes Powerpack#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#name Powerpack#name}
  */
  readonly name: string;
  /**
  * Storage location (private beta).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#storage Powerpack#storage}
  */
  readonly storage?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#compute Powerpack#compute}
  */
  readonly compute: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#group_by Powerpack#group_by}
  */
  readonly groupBy?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#search Powerpack#search}
  */
  readonly search?: PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearch;
}

export function powerpackWidgetTreemapDefinitionRequestQueryEventQueryToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cross_org_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexes),
    name: cdktf.stringToTerraform(struct!.name),
    storage: cdktf.stringToTerraform(struct!.storage),
    compute: cdktf.listMapper(powerpackWidgetTreemapDefinitionRequestQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktf.listMapper(powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    search: powerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQueryEventQueryToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cross_org_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.indexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute: {
      value: cdktf.listMapperHcl(powerpackWidgetTreemapDefinitionRequestQueryEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryEventQueryComputeList",
    },
    group_by: {
      value: cdktf.listMapperHcl(powerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByList",
    },
    search: {
      value: powerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionRequestQueryEventQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQueryEventQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._compute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._storage = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._storage = value.storage;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._search.internalValue = value.search;
    }
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes?: string[]; 
  public get indexes() {
    return this.getListAttribute('indexes');
  }
  public set indexes(value: string[]) {
    this._indexes = value;
  }
  public resetIndexes() {
    this._indexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes;
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

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // compute - computed: false, optional: false, required: true
  private _compute = new PowerpackWidgetTreemapDefinitionRequestQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQuerySearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}
export interface PowerpackWidgetTreemapDefinitionRequestQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#aggregator Powerpack#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#cross_org_uuids Powerpack#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for metrics queries. Defaults to `"metrics"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#data_source Powerpack#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#name Powerpack#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#query Powerpack#query}
  */
  readonly query: string;
}

export function powerpackWidgetTreemapDefinitionRequestQueryMetricQueryToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryMetricQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    cross_org_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQueryMetricQueryToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryMetricQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: cdktf.stringToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_org_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class PowerpackWidgetTreemapDefinitionRequestQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQueryMetricQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQueryMetricQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
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
export interface PowerpackWidgetTreemapDefinitionRequestQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#aggregator Powerpack#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#cross_org_uuids Powerpack#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#data_source Powerpack#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#is_normalized_cpu Powerpack#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktf.IResolvable;
  /**
  * The number of hits to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#limit Powerpack#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#metric Powerpack#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#name Powerpack#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#sort Powerpack#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#tag_filters Powerpack#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#text_filter Powerpack#text_filter}
  */
  readonly textFilter?: string;
}

export function powerpackWidgetTreemapDefinitionRequestQueryProcessQueryToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryProcessQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    cross_org_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    is_normalized_cpu: cdktf.booleanToTerraform(struct!.isNormalizedCpu),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    sort: cdktf.stringToTerraform(struct!.sort),
    tag_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagFilters),
    text_filter: cdktf.stringToTerraform(struct!.textFilter),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQueryProcessQueryToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQueryProcessQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQueryProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: cdktf.stringToHclTerraform(struct!.aggregator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_org_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_normalized_cpu: {
      value: cdktf.booleanToHclTerraform(struct!.isNormalizedCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    text_filter: {
      value: cdktf.stringToHclTerraform(struct!.textFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionRequestQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQueryProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._isNormalizedCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNormalizedCpu = this._isNormalizedCpu;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._tagFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilters = this._tagFilters;
    }
    if (this._textFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFilter = this._textFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQueryProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._isNormalizedCpu = undefined;
      this._limit = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._sort = undefined;
      this._tagFilters = undefined;
      this._textFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._isNormalizedCpu = value.isNormalizedCpu;
      this._limit = value.limit;
      this._metric = value.metric;
      this._name = value.name;
      this._sort = value.sort;
      this._tagFilters = value.tagFilters;
      this._textFilter = value.textFilter;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator?: string; 
  public get aggregator() {
    return this.getStringAttribute('aggregator');
  }
  public set aggregator(value: string) {
    this._aggregator = value;
  }
  public resetAggregator() {
    this._aggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator;
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // is_normalized_cpu - computed: false, optional: true, required: false
  private _isNormalizedCpu?: boolean | cdktf.IResolvable; 
  public get isNormalizedCpu() {
    return this.getBooleanAttribute('is_normalized_cpu');
  }
  public set isNormalizedCpu(value: boolean | cdktf.IResolvable) {
    this._isNormalizedCpu = value;
  }
  public resetIsNormalizedCpu() {
    this._isNormalizedCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNormalizedCpuInput() {
    return this._isNormalizedCpu;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: string[]; 
  public get tagFilters() {
    return this.getListAttribute('tag_filters');
  }
  public set tagFilters(value: string[]) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // text_filter - computed: false, optional: true, required: false
  private _textFilter?: string; 
  public get textFilter() {
    return this.getStringAttribute('text_filter');
  }
  public set textFilter(value: string) {
    this._textFilter = value;
  }
  public resetTextFilter() {
    this._textFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFilterInput() {
    return this._textFilter;
  }
}
export interface PowerpackWidgetTreemapDefinitionRequestQuerySloQuery {
  /**
  * Additional filters applied to the SLO query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#additional_query_filters Powerpack#additional_query_filters}
  */
  readonly additionalQueryFilters?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#cross_org_uuids Powerpack#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for SLO queries. Valid values are `slo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#data_source Powerpack#data_source}
  */
  readonly dataSource: string;
  /**
  * Group mode to query measures. Valid values are `overall`, `components`. Defaults to `"overall"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#group_mode Powerpack#group_mode}
  */
  readonly groupMode?: string;
  /**
  * SLO measures queries. Valid values are `good_events`, `bad_events`, `good_minutes`, `bad_minutes`, `slo_status`, `error_budget_remaining`, `burn_rate`, `error_budget_burndown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#measure Powerpack#measure}
  */
  readonly measure: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#name Powerpack#name}
  */
  readonly name?: string;
  /**
  * ID of an SLO to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#slo_id Powerpack#slo_id}
  */
  readonly sloId: string;
  /**
  * type of the SLO to query. Valid values are `metric`, `monitor`, `time_slice`. Defaults to `"metric"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#slo_query_type Powerpack#slo_query_type}
  */
  readonly sloQueryType?: string;
}

export function powerpackWidgetTreemapDefinitionRequestQuerySloQueryToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQuerySloQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQuerySloQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_query_filters: cdktf.stringToTerraform(struct!.additionalQueryFilters),
    cross_org_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crossOrgUuids),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    group_mode: cdktf.stringToTerraform(struct!.groupMode),
    measure: cdktf.stringToTerraform(struct!.measure),
    name: cdktf.stringToTerraform(struct!.name),
    slo_id: cdktf.stringToTerraform(struct!.sloId),
    slo_query_type: cdktf.stringToTerraform(struct!.sloQueryType),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQuerySloQueryToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQuerySloQueryOutputReference | PowerpackWidgetTreemapDefinitionRequestQuerySloQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_query_filters: {
      value: cdktf.stringToHclTerraform(struct!.additionalQueryFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cross_org_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crossOrgUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: cdktf.stringToHclTerraform(struct!.dataSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_mode: {
      value: cdktf.stringToHclTerraform(struct!.groupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measure: {
      value: cdktf.stringToHclTerraform(struct!.measure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_id: {
      value: cdktf.stringToHclTerraform(struct!.sloId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_query_type: {
      value: cdktf.stringToHclTerraform(struct!.sloQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionRequestQuerySloQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQuerySloQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalQueryFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalQueryFilters = this._additionalQueryFilters;
    }
    if (this._crossOrgUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.crossOrgUuids = this._crossOrgUuids;
    }
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._groupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMode = this._groupMode;
    }
    if (this._measure !== undefined) {
      hasAnyValues = true;
      internalValueResult.measure = this._measure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sloId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloId = this._sloId;
    }
    if (this._sloQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloQueryType = this._sloQueryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQuerySloQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalQueryFilters = undefined;
      this._crossOrgUuids = undefined;
      this._dataSource = undefined;
      this._groupMode = undefined;
      this._measure = undefined;
      this._name = undefined;
      this._sloId = undefined;
      this._sloQueryType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalQueryFilters = value.additionalQueryFilters;
      this._crossOrgUuids = value.crossOrgUuids;
      this._dataSource = value.dataSource;
      this._groupMode = value.groupMode;
      this._measure = value.measure;
      this._name = value.name;
      this._sloId = value.sloId;
      this._sloQueryType = value.sloQueryType;
    }
  }

  // additional_query_filters - computed: false, optional: true, required: false
  private _additionalQueryFilters?: string; 
  public get additionalQueryFilters() {
    return this.getStringAttribute('additional_query_filters');
  }
  public set additionalQueryFilters(value: string) {
    this._additionalQueryFilters = value;
  }
  public resetAdditionalQueryFilters() {
    this._additionalQueryFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalQueryFiltersInput() {
    return this._additionalQueryFilters;
  }

  // cross_org_uuids - computed: false, optional: true, required: false
  private _crossOrgUuids?: string[]; 
  public get crossOrgUuids() {
    return this.getListAttribute('cross_org_uuids');
  }
  public set crossOrgUuids(value: string[]) {
    this._crossOrgUuids = value;
  }
  public resetCrossOrgUuids() {
    this._crossOrgUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOrgUuidsInput() {
    return this._crossOrgUuids;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // group_mode - computed: false, optional: true, required: false
  private _groupMode?: string; 
  public get groupMode() {
    return this.getStringAttribute('group_mode');
  }
  public set groupMode(value: string) {
    this._groupMode = value;
  }
  public resetGroupMode() {
    this._groupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupModeInput() {
    return this._groupMode;
  }

  // measure - computed: false, optional: false, required: true
  private _measure?: string; 
  public get measure() {
    return this.getStringAttribute('measure');
  }
  public set measure(value: string) {
    this._measure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measureInput() {
    return this._measure;
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

  // slo_id - computed: false, optional: false, required: true
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // slo_query_type - computed: false, optional: true, required: false
  private _sloQueryType?: string; 
  public get sloQueryType() {
    return this.getStringAttribute('slo_query_type');
  }
  public set sloQueryType(value: string) {
    this._sloQueryType = value;
  }
  public resetSloQueryType() {
    this._sloQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloQueryTypeInput() {
    return this._sloQueryType;
  }
}
export interface PowerpackWidgetTreemapDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#apm_dependency_stats_query Powerpack#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: PowerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#apm_resource_stats_query Powerpack#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: PowerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#cloud_cost_query Powerpack#cloud_cost_query}
  */
  readonly cloudCostQuery?: PowerpackWidgetTreemapDefinitionRequestQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#event_query Powerpack#event_query}
  */
  readonly eventQuery?: PowerpackWidgetTreemapDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#metric_query Powerpack#metric_query}
  */
  readonly metricQuery?: PowerpackWidgetTreemapDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#process_query Powerpack#process_query}
  */
  readonly processQuery?: PowerpackWidgetTreemapDefinitionRequestQueryProcessQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#slo_query Powerpack#slo_query}
  */
  readonly sloQuery?: PowerpackWidgetTreemapDefinitionRequestQuerySloQuery;
}

export function powerpackWidgetTreemapDefinitionRequestQueryToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: powerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: powerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: powerpackWidgetTreemapDefinitionRequestQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: powerpackWidgetTreemapDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: powerpackWidgetTreemapDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: powerpackWidgetTreemapDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
    slo_query: powerpackWidgetTreemapDefinitionRequestQuerySloQueryToTerraform(struct!.sloQuery),
  }
}


export function powerpackWidgetTreemapDefinitionRequestQueryToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: powerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQueryList",
    },
    apm_resource_stats_query: {
      value: powerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: powerpackWidgetTreemapDefinitionRequestQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryCloudCostQueryList",
    },
    event_query: {
      value: powerpackWidgetTreemapDefinitionRequestQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryEventQueryList",
    },
    metric_query: {
      value: powerpackWidgetTreemapDefinitionRequestQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryMetricQueryList",
    },
    process_query: {
      value: powerpackWidgetTreemapDefinitionRequestQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryProcessQueryList",
    },
    slo_query: {
      value: powerpackWidgetTreemapDefinitionRequestQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQuerySloQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionRequestQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequestQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apmDependencyStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmDependencyStatsQuery = this._apmDependencyStatsQuery?.internalValue;
    }
    if (this._apmResourceStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmResourceStatsQuery = this._apmResourceStatsQuery?.internalValue;
    }
    if (this._cloudCostQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudCostQuery = this._cloudCostQuery?.internalValue;
    }
    if (this._eventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQuery = this._eventQuery?.internalValue;
    }
    if (this._metricQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricQuery = this._metricQuery?.internalValue;
    }
    if (this._processQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processQuery = this._processQuery?.internalValue;
    }
    if (this._sloQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloQuery = this._sloQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequestQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = undefined;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._cloudCostQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._sloQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = value.apmDependencyStatsQuery;
      this._apmResourceStatsQuery.internalValue = value.apmResourceStatsQuery;
      this._cloudCostQuery.internalValue = value.cloudCostQuery;
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
      this._processQuery.internalValue = value.processQuery;
      this._sloQuery.internalValue = value.sloQuery;
    }
  }

  // apm_dependency_stats_query - computed: false, optional: true, required: false
  private _apmDependencyStatsQuery = new PowerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: PowerpackWidgetTreemapDefinitionRequestQueryApmDependencyStatsQuery) {
    this._apmDependencyStatsQuery.internalValue = value;
  }
  public resetApmDependencyStatsQuery() {
    this._apmDependencyStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDependencyStatsQueryInput() {
    return this._apmDependencyStatsQuery.internalValue;
  }

  // apm_resource_stats_query - computed: false, optional: true, required: false
  private _apmResourceStatsQuery = new PowerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: PowerpackWidgetTreemapDefinitionRequestQueryApmResourceStatsQuery) {
    this._apmResourceStatsQuery.internalValue = value;
  }
  public resetApmResourceStatsQuery() {
    this._apmResourceStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmResourceStatsQueryInput() {
    return this._apmResourceStatsQuery.internalValue;
  }

  // cloud_cost_query - computed: false, optional: true, required: false
  private _cloudCostQuery = new PowerpackWidgetTreemapDefinitionRequestQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: PowerpackWidgetTreemapDefinitionRequestQueryCloudCostQuery) {
    this._cloudCostQuery.internalValue = value;
  }
  public resetCloudCostQuery() {
    this._cloudCostQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCostQueryInput() {
    return this._cloudCostQuery.internalValue;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery = new PowerpackWidgetTreemapDefinitionRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: PowerpackWidgetTreemapDefinitionRequestQueryEventQuery) {
    this._eventQuery.internalValue = value;
  }
  public resetEventQuery() {
    this._eventQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventQueryInput() {
    return this._eventQuery.internalValue;
  }

  // metric_query - computed: false, optional: true, required: false
  private _metricQuery = new PowerpackWidgetTreemapDefinitionRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: PowerpackWidgetTreemapDefinitionRequestQueryMetricQuery) {
    this._metricQuery.internalValue = value;
  }
  public resetMetricQuery() {
    this._metricQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery.internalValue;
  }

  // process_query - computed: false, optional: true, required: false
  private _processQuery = new PowerpackWidgetTreemapDefinitionRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackWidgetTreemapDefinitionRequestQueryProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // slo_query - computed: false, optional: true, required: false
  private _sloQuery = new PowerpackWidgetTreemapDefinitionRequestQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: PowerpackWidgetTreemapDefinitionRequestQuerySloQuery) {
    this._sloQuery.internalValue = value;
  }
  public resetSloQuery() {
    this._sloQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloQueryInput() {
    return this._sloQuery.internalValue;
  }
}

export class PowerpackWidgetTreemapDefinitionRequestQueryList extends cdktf.ComplexList {
  public internalValue? : PowerpackWidgetTreemapDefinitionRequestQuery[] | cdktf.IResolvable

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
  public get(index: number): PowerpackWidgetTreemapDefinitionRequestQueryOutputReference {
    return new PowerpackWidgetTreemapDefinitionRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackWidgetTreemapDefinitionRequest {
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#formula Powerpack#formula}
  */
  readonly formula?: PowerpackWidgetTreemapDefinitionRequestFormula[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#query Powerpack#query}
  */
  readonly query?: PowerpackWidgetTreemapDefinitionRequestQuery[] | cdktf.IResolvable;
}

export function powerpackWidgetTreemapDefinitionRequestToTerraform(struct?: PowerpackWidgetTreemapDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    formula: cdktf.listMapper(powerpackWidgetTreemapDefinitionRequestFormulaToTerraform, true)(struct!.formula),
    query: cdktf.listMapper(powerpackWidgetTreemapDefinitionRequestQueryToTerraform, true)(struct!.query),
  }
}


export function powerpackWidgetTreemapDefinitionRequestToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    formula: {
      value: cdktf.listMapperHcl(powerpackWidgetTreemapDefinitionRequestFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestFormulaList",
    },
    query: {
      value: cdktf.listMapperHcl(powerpackWidgetTreemapDefinitionRequestQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerpackWidgetTreemapDefinitionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinitionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._formula.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._formula.internalValue = value.formula;
      this._query.internalValue = value.query;
    }
  }

  // formula - computed: false, optional: true, required: false
  private _formula = new PowerpackWidgetTreemapDefinitionRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: PowerpackWidgetTreemapDefinitionRequestFormula[] | cdktf.IResolvable) {
    this._formula.internalValue = value;
  }
  public resetFormula() {
    this._formula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new PowerpackWidgetTreemapDefinitionRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackWidgetTreemapDefinitionRequestQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class PowerpackWidgetTreemapDefinitionRequestList extends cdktf.ComplexList {
  public internalValue? : PowerpackWidgetTreemapDefinitionRequest[] | cdktf.IResolvable

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
  public get(index: number): PowerpackWidgetTreemapDefinitionRequestOutputReference {
    return new PowerpackWidgetTreemapDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackWidgetTreemapDefinition {
  /**
  * The title of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#title Powerpack#title}
  */
  readonly title?: string;
  /**
  * custom_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#custom_links Powerpack#custom_links}
  */
  readonly customLinks?: PowerpackWidgetTreemapDefinitionCustomLinks[] | cdktf.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#request Powerpack#request}
  */
  readonly request?: PowerpackWidgetTreemapDefinitionRequest[] | cdktf.IResolvable;
}

export function powerpackWidgetTreemapDefinitionToTerraform(struct?: PowerpackWidgetTreemapDefinitionOutputReference | PowerpackWidgetTreemapDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    custom_links: cdktf.listMapper(powerpackWidgetTreemapDefinitionCustomLinksToTerraform, true)(struct!.customLinks),
    request: cdktf.listMapper(powerpackWidgetTreemapDefinitionRequestToTerraform, true)(struct!.request),
  }
}


export function powerpackWidgetTreemapDefinitionToHclTerraform(struct?: PowerpackWidgetTreemapDefinitionOutputReference | PowerpackWidgetTreemapDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_links: {
      value: cdktf.listMapperHcl(powerpackWidgetTreemapDefinitionCustomLinksToHclTerraform, true)(struct!.customLinks),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionCustomLinksList",
    },
    request: {
      value: cdktf.listMapperHcl(powerpackWidgetTreemapDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetTreemapDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetTreemapDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._customLinks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLinks = this._customLinks?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetTreemapDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._title = undefined;
      this._customLinks.internalValue = undefined;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._title = value.title;
      this._customLinks.internalValue = value.customLinks;
      this._request.internalValue = value.request;
    }
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // custom_links - computed: false, optional: true, required: false
  private _customLinks = new PowerpackWidgetTreemapDefinitionCustomLinksList(this, "custom_links", false);
  public get customLinks() {
    return this._customLinks;
  }
  public putCustomLinks(value: PowerpackWidgetTreemapDefinitionCustomLinks[] | cdktf.IResolvable) {
    this._customLinks.internalValue = value;
  }
  public resetCustomLinks() {
    this._customLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinksInput() {
    return this._customLinks.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new PowerpackWidgetTreemapDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackWidgetTreemapDefinitionRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface PowerpackWidgetWidgetLayout {
  /**
  * The height of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#height Powerpack#height}
  */
  readonly height: number;
  /**
  * Whether the widget should be the first one on the second column in high density or not. Only one widget in the dashboard should have this property set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#is_column_break Powerpack#is_column_break}
  */
  readonly isColumnBreak?: boolean | cdktf.IResolvable;
  /**
  * The width of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#width Powerpack#width}
  */
  readonly width: number;
  /**
  * The position of the widget on the x (horizontal) axis. Must be greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#x Powerpack#x}
  */
  readonly x: number;
  /**
  * The position of the widget on the y (vertical) axis. Must be greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#y Powerpack#y}
  */
  readonly y: number;
}

export function powerpackWidgetWidgetLayoutToTerraform(struct?: PowerpackWidgetWidgetLayoutOutputReference | PowerpackWidgetWidgetLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    is_column_break: cdktf.booleanToTerraform(struct!.isColumnBreak),
    width: cdktf.numberToTerraform(struct!.width),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function powerpackWidgetWidgetLayoutToHclTerraform(struct?: PowerpackWidgetWidgetLayoutOutputReference | PowerpackWidgetWidgetLayout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_column_break: {
      value: cdktf.booleanToHclTerraform(struct!.isColumnBreak),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetWidgetLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackWidgetWidgetLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._isColumnBreak !== undefined) {
      hasAnyValues = true;
      internalValueResult.isColumnBreak = this._isColumnBreak;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidgetWidgetLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._isColumnBreak = undefined;
      this._width = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._isColumnBreak = value.isColumnBreak;
      this._width = value.width;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // is_column_break - computed: false, optional: true, required: false
  private _isColumnBreak?: boolean | cdktf.IResolvable; 
  public get isColumnBreak() {
    return this.getBooleanAttribute('is_column_break');
  }
  public set isColumnBreak(value: boolean | cdktf.IResolvable) {
    this._isColumnBreak = value;
  }
  public resetIsColumnBreak() {
    this._isColumnBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isColumnBreakInput() {
    return this._isColumnBreak;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x - computed: false, optional: false, required: true
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: false, required: true
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface PowerpackWidget {
  /**
  * alert_graph_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#alert_graph_definition Powerpack#alert_graph_definition}
  */
  readonly alertGraphDefinition?: PowerpackWidgetAlertGraphDefinition;
  /**
  * alert_value_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#alert_value_definition Powerpack#alert_value_definition}
  */
  readonly alertValueDefinition?: PowerpackWidgetAlertValueDefinition;
  /**
  * change_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#change_definition Powerpack#change_definition}
  */
  readonly changeDefinition?: PowerpackWidgetChangeDefinition;
  /**
  * check_status_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#check_status_definition Powerpack#check_status_definition}
  */
  readonly checkStatusDefinition?: PowerpackWidgetCheckStatusDefinition;
  /**
  * distribution_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#distribution_definition Powerpack#distribution_definition}
  */
  readonly distributionDefinition?: PowerpackWidgetDistributionDefinition;
  /**
  * event_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#event_stream_definition Powerpack#event_stream_definition}
  */
  readonly eventStreamDefinition?: PowerpackWidgetEventStreamDefinition;
  /**
  * event_timeline_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#event_timeline_definition Powerpack#event_timeline_definition}
  */
  readonly eventTimelineDefinition?: PowerpackWidgetEventTimelineDefinition;
  /**
  * free_text_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#free_text_definition Powerpack#free_text_definition}
  */
  readonly freeTextDefinition?: PowerpackWidgetFreeTextDefinition;
  /**
  * geomap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#geomap_definition Powerpack#geomap_definition}
  */
  readonly geomapDefinition?: PowerpackWidgetGeomapDefinition;
  /**
  * heatmap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#heatmap_definition Powerpack#heatmap_definition}
  */
  readonly heatmapDefinition?: PowerpackWidgetHeatmapDefinition;
  /**
  * hostmap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#hostmap_definition Powerpack#hostmap_definition}
  */
  readonly hostmapDefinition?: PowerpackWidgetHostmapDefinition;
  /**
  * iframe_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#iframe_definition Powerpack#iframe_definition}
  */
  readonly iframeDefinition?: PowerpackWidgetIframeDefinition;
  /**
  * image_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#image_definition Powerpack#image_definition}
  */
  readonly imageDefinition?: PowerpackWidgetImageDefinition;
  /**
  * list_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#list_stream_definition Powerpack#list_stream_definition}
  */
  readonly listStreamDefinition?: PowerpackWidgetListStreamDefinition;
  /**
  * log_stream_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#log_stream_definition Powerpack#log_stream_definition}
  */
  readonly logStreamDefinition?: PowerpackWidgetLogStreamDefinition;
  /**
  * manage_status_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#manage_status_definition Powerpack#manage_status_definition}
  */
  readonly manageStatusDefinition?: PowerpackWidgetManageStatusDefinition;
  /**
  * note_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#note_definition Powerpack#note_definition}
  */
  readonly noteDefinition?: PowerpackWidgetNoteDefinition;
  /**
  * query_table_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#query_table_definition Powerpack#query_table_definition}
  */
  readonly queryTableDefinition?: PowerpackWidgetQueryTableDefinition;
  /**
  * query_value_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#query_value_definition Powerpack#query_value_definition}
  */
  readonly queryValueDefinition?: PowerpackWidgetQueryValueDefinition;
  /**
  * run_workflow_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#run_workflow_definition Powerpack#run_workflow_definition}
  */
  readonly runWorkflowDefinition?: PowerpackWidgetRunWorkflowDefinition;
  /**
  * scatterplot_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#scatterplot_definition Powerpack#scatterplot_definition}
  */
  readonly scatterplotDefinition?: PowerpackWidgetScatterplotDefinition;
  /**
  * service_level_objective_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#service_level_objective_definition Powerpack#service_level_objective_definition}
  */
  readonly serviceLevelObjectiveDefinition?: PowerpackWidgetServiceLevelObjectiveDefinition;
  /**
  * servicemap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#servicemap_definition Powerpack#servicemap_definition}
  */
  readonly servicemapDefinition?: PowerpackWidgetServicemapDefinition;
  /**
  * slo_list_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#slo_list_definition Powerpack#slo_list_definition}
  */
  readonly sloListDefinition?: PowerpackWidgetSloListDefinition;
  /**
  * sunburst_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#sunburst_definition Powerpack#sunburst_definition}
  */
  readonly sunburstDefinition?: PowerpackWidgetSunburstDefinition;
  /**
  * timeseries_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#timeseries_definition Powerpack#timeseries_definition}
  */
  readonly timeseriesDefinition?: PowerpackWidgetTimeseriesDefinition;
  /**
  * toplist_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#toplist_definition Powerpack#toplist_definition}
  */
  readonly toplistDefinition?: PowerpackWidgetToplistDefinition;
  /**
  * topology_map_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#topology_map_definition Powerpack#topology_map_definition}
  */
  readonly topologyMapDefinition?: PowerpackWidgetTopologyMapDefinition;
  /**
  * trace_service_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#trace_service_definition Powerpack#trace_service_definition}
  */
  readonly traceServiceDefinition?: PowerpackWidgetTraceServiceDefinition;
  /**
  * treemap_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#treemap_definition Powerpack#treemap_definition}
  */
  readonly treemapDefinition?: PowerpackWidgetTreemapDefinition;
  /**
  * widget_layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.67.0/docs/resources/powerpack#widget_layout Powerpack#widget_layout}
  */
  readonly widgetLayout?: PowerpackWidgetWidgetLayout;
}

export function powerpackWidgetToTerraform(struct?: PowerpackWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_graph_definition: powerpackWidgetAlertGraphDefinitionToTerraform(struct!.alertGraphDefinition),
    alert_value_definition: powerpackWidgetAlertValueDefinitionToTerraform(struct!.alertValueDefinition),
    change_definition: powerpackWidgetChangeDefinitionToTerraform(struct!.changeDefinition),
    check_status_definition: powerpackWidgetCheckStatusDefinitionToTerraform(struct!.checkStatusDefinition),
    distribution_definition: powerpackWidgetDistributionDefinitionToTerraform(struct!.distributionDefinition),
    event_stream_definition: powerpackWidgetEventStreamDefinitionToTerraform(struct!.eventStreamDefinition),
    event_timeline_definition: powerpackWidgetEventTimelineDefinitionToTerraform(struct!.eventTimelineDefinition),
    free_text_definition: powerpackWidgetFreeTextDefinitionToTerraform(struct!.freeTextDefinition),
    geomap_definition: powerpackWidgetGeomapDefinitionToTerraform(struct!.geomapDefinition),
    heatmap_definition: powerpackWidgetHeatmapDefinitionToTerraform(struct!.heatmapDefinition),
    hostmap_definition: powerpackWidgetHostmapDefinitionToTerraform(struct!.hostmapDefinition),
    iframe_definition: powerpackWidgetIframeDefinitionToTerraform(struct!.iframeDefinition),
    image_definition: powerpackWidgetImageDefinitionToTerraform(struct!.imageDefinition),
    list_stream_definition: powerpackWidgetListStreamDefinitionToTerraform(struct!.listStreamDefinition),
    log_stream_definition: powerpackWidgetLogStreamDefinitionToTerraform(struct!.logStreamDefinition),
    manage_status_definition: powerpackWidgetManageStatusDefinitionToTerraform(struct!.manageStatusDefinition),
    note_definition: powerpackWidgetNoteDefinitionToTerraform(struct!.noteDefinition),
    query_table_definition: powerpackWidgetQueryTableDefinitionToTerraform(struct!.queryTableDefinition),
    query_value_definition: powerpackWidgetQueryValueDefinitionToTerraform(struct!.queryValueDefinition),
    run_workflow_definition: powerpackWidgetRunWorkflowDefinitionToTerraform(struct!.runWorkflowDefinition),
    scatterplot_definition: powerpackWidgetScatterplotDefinitionToTerraform(struct!.scatterplotDefinition),
    service_level_objective_definition: powerpackWidgetServiceLevelObjectiveDefinitionToTerraform(struct!.serviceLevelObjectiveDefinition),
    servicemap_definition: powerpackWidgetServicemapDefinitionToTerraform(struct!.servicemapDefinition),
    slo_list_definition: powerpackWidgetSloListDefinitionToTerraform(struct!.sloListDefinition),
    sunburst_definition: powerpackWidgetSunburstDefinitionToTerraform(struct!.sunburstDefinition),
    timeseries_definition: powerpackWidgetTimeseriesDefinitionToTerraform(struct!.timeseriesDefinition),
    toplist_definition: powerpackWidgetToplistDefinitionToTerraform(struct!.toplistDefinition),
    topology_map_definition: powerpackWidgetTopologyMapDefinitionToTerraform(struct!.topologyMapDefinition),
    trace_service_definition: powerpackWidgetTraceServiceDefinitionToTerraform(struct!.traceServiceDefinition),
    treemap_definition: powerpackWidgetTreemapDefinitionToTerraform(struct!.treemapDefinition),
    widget_layout: powerpackWidgetWidgetLayoutToTerraform(struct!.widgetLayout),
  }
}


export function powerpackWidgetToHclTerraform(struct?: PowerpackWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_graph_definition: {
      value: powerpackWidgetAlertGraphDefinitionToHclTerraform(struct!.alertGraphDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetAlertGraphDefinitionList",
    },
    alert_value_definition: {
      value: powerpackWidgetAlertValueDefinitionToHclTerraform(struct!.alertValueDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetAlertValueDefinitionList",
    },
    change_definition: {
      value: powerpackWidgetChangeDefinitionToHclTerraform(struct!.changeDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetChangeDefinitionList",
    },
    check_status_definition: {
      value: powerpackWidgetCheckStatusDefinitionToHclTerraform(struct!.checkStatusDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetCheckStatusDefinitionList",
    },
    distribution_definition: {
      value: powerpackWidgetDistributionDefinitionToHclTerraform(struct!.distributionDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetDistributionDefinitionList",
    },
    event_stream_definition: {
      value: powerpackWidgetEventStreamDefinitionToHclTerraform(struct!.eventStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetEventStreamDefinitionList",
    },
    event_timeline_definition: {
      value: powerpackWidgetEventTimelineDefinitionToHclTerraform(struct!.eventTimelineDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetEventTimelineDefinitionList",
    },
    free_text_definition: {
      value: powerpackWidgetFreeTextDefinitionToHclTerraform(struct!.freeTextDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetFreeTextDefinitionList",
    },
    geomap_definition: {
      value: powerpackWidgetGeomapDefinitionToHclTerraform(struct!.geomapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetGeomapDefinitionList",
    },
    heatmap_definition: {
      value: powerpackWidgetHeatmapDefinitionToHclTerraform(struct!.heatmapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetHeatmapDefinitionList",
    },
    hostmap_definition: {
      value: powerpackWidgetHostmapDefinitionToHclTerraform(struct!.hostmapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetHostmapDefinitionList",
    },
    iframe_definition: {
      value: powerpackWidgetIframeDefinitionToHclTerraform(struct!.iframeDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetIframeDefinitionList",
    },
    image_definition: {
      value: powerpackWidgetImageDefinitionToHclTerraform(struct!.imageDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetImageDefinitionList",
    },
    list_stream_definition: {
      value: powerpackWidgetListStreamDefinitionToHclTerraform(struct!.listStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetListStreamDefinitionList",
    },
    log_stream_definition: {
      value: powerpackWidgetLogStreamDefinitionToHclTerraform(struct!.logStreamDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetLogStreamDefinitionList",
    },
    manage_status_definition: {
      value: powerpackWidgetManageStatusDefinitionToHclTerraform(struct!.manageStatusDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetManageStatusDefinitionList",
    },
    note_definition: {
      value: powerpackWidgetNoteDefinitionToHclTerraform(struct!.noteDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetNoteDefinitionList",
    },
    query_table_definition: {
      value: powerpackWidgetQueryTableDefinitionToHclTerraform(struct!.queryTableDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetQueryTableDefinitionList",
    },
    query_value_definition: {
      value: powerpackWidgetQueryValueDefinitionToHclTerraform(struct!.queryValueDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetQueryValueDefinitionList",
    },
    run_workflow_definition: {
      value: powerpackWidgetRunWorkflowDefinitionToHclTerraform(struct!.runWorkflowDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetRunWorkflowDefinitionList",
    },
    scatterplot_definition: {
      value: powerpackWidgetScatterplotDefinitionToHclTerraform(struct!.scatterplotDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetScatterplotDefinitionList",
    },
    service_level_objective_definition: {
      value: powerpackWidgetServiceLevelObjectiveDefinitionToHclTerraform(struct!.serviceLevelObjectiveDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetServiceLevelObjectiveDefinitionList",
    },
    servicemap_definition: {
      value: powerpackWidgetServicemapDefinitionToHclTerraform(struct!.servicemapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetServicemapDefinitionList",
    },
    slo_list_definition: {
      value: powerpackWidgetSloListDefinitionToHclTerraform(struct!.sloListDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetSloListDefinitionList",
    },
    sunburst_definition: {
      value: powerpackWidgetSunburstDefinitionToHclTerraform(struct!.sunburstDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetSunburstDefinitionList",
    },
    timeseries_definition: {
      value: powerpackWidgetTimeseriesDefinitionToHclTerraform(struct!.timeseriesDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTimeseriesDefinitionList",
    },
    toplist_definition: {
      value: powerpackWidgetToplistDefinitionToHclTerraform(struct!.toplistDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetToplistDefinitionList",
    },
    topology_map_definition: {
      value: powerpackWidgetTopologyMapDefinitionToHclTerraform(struct!.topologyMapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTopologyMapDefinitionList",
    },
    trace_service_definition: {
      value: powerpackWidgetTraceServiceDefinitionToHclTerraform(struct!.traceServiceDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTraceServiceDefinitionList",
    },
    treemap_definition: {
      value: powerpackWidgetTreemapDefinitionToHclTerraform(struct!.treemapDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetTreemapDefinitionList",
    },
    widget_layout: {
      value: powerpackWidgetWidgetLayoutToHclTerraform(struct!.widgetLayout),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackWidgetWidgetLayoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackWidgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerpackWidget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertGraphDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertGraphDefinition = this._alertGraphDefinition?.internalValue;
    }
    if (this._alertValueDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertValueDefinition = this._alertValueDefinition?.internalValue;
    }
    if (this._changeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeDefinition = this._changeDefinition?.internalValue;
    }
    if (this._checkStatusDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkStatusDefinition = this._checkStatusDefinition?.internalValue;
    }
    if (this._distributionDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributionDefinition = this._distributionDefinition?.internalValue;
    }
    if (this._eventStreamDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStreamDefinition = this._eventStreamDefinition?.internalValue;
    }
    if (this._eventTimelineDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimelineDefinition = this._eventTimelineDefinition?.internalValue;
    }
    if (this._freeTextDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeTextDefinition = this._freeTextDefinition?.internalValue;
    }
    if (this._geomapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geomapDefinition = this._geomapDefinition?.internalValue;
    }
    if (this._heatmapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.heatmapDefinition = this._heatmapDefinition?.internalValue;
    }
    if (this._hostmapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostmapDefinition = this._hostmapDefinition?.internalValue;
    }
    if (this._iframeDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iframeDefinition = this._iframeDefinition?.internalValue;
    }
    if (this._imageDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDefinition = this._imageDefinition?.internalValue;
    }
    if (this._listStreamDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listStreamDefinition = this._listStreamDefinition?.internalValue;
    }
    if (this._logStreamDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamDefinition = this._logStreamDefinition?.internalValue;
    }
    if (this._manageStatusDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageStatusDefinition = this._manageStatusDefinition?.internalValue;
    }
    if (this._noteDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteDefinition = this._noteDefinition?.internalValue;
    }
    if (this._queryTableDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTableDefinition = this._queryTableDefinition?.internalValue;
    }
    if (this._queryValueDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryValueDefinition = this._queryValueDefinition?.internalValue;
    }
    if (this._runWorkflowDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runWorkflowDefinition = this._runWorkflowDefinition?.internalValue;
    }
    if (this._scatterplotDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scatterplotDefinition = this._scatterplotDefinition?.internalValue;
    }
    if (this._serviceLevelObjectiveDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLevelObjectiveDefinition = this._serviceLevelObjectiveDefinition?.internalValue;
    }
    if (this._servicemapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicemapDefinition = this._servicemapDefinition?.internalValue;
    }
    if (this._sloListDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloListDefinition = this._sloListDefinition?.internalValue;
    }
    if (this._sunburstDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sunburstDefinition = this._sunburstDefinition?.internalValue;
    }
    if (this._timeseriesDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesDefinition = this._timeseriesDefinition?.internalValue;
    }
    if (this._toplistDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toplistDefinition = this._toplistDefinition?.internalValue;
    }
    if (this._topologyMapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyMapDefinition = this._topologyMapDefinition?.internalValue;
    }
    if (this._traceServiceDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceServiceDefinition = this._traceServiceDefinition?.internalValue;
    }
    if (this._treemapDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treemapDefinition = this._treemapDefinition?.internalValue;
    }
    if (this._widgetLayout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetLayout = this._widgetLayout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackWidget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertGraphDefinition.internalValue = undefined;
      this._alertValueDefinition.internalValue = undefined;
      this._changeDefinition.internalValue = undefined;
      this._checkStatusDefinition.internalValue = undefined;
      this._distributionDefinition.internalValue = undefined;
      this._eventStreamDefinition.internalValue = undefined;
      this._eventTimelineDefinition.internalValue = undefined;
      this._freeTextDefinition.internalValue = undefined;
      this._geomapDefinition.internalValue = undefined;
      this._heatmapDefinition.internalValue = undefined;
      this._hostmapDefinition.internalValue = undefined;
      this._iframeDefinition.internalValue = undefined;
      this._imageDefinition.internalValue = undefined;
      this._listStreamDefinition.internalValue = undefined;
      this._logStreamDefinition.internalValue = undefined;
      this._manageStatusDefinition.internalValue = undefined;
      this._noteDefinition.internalValue = undefined;
      this._queryTableDefinition.internalValue = undefined;
      this._queryValueDefinition.internalValue = undefined;
      this._runWorkflowDefinition.internalValue = undefined;
      this._scatterplotDefinition.internalValue = undefined;
      this._serviceLevelObjectiveDefinition.internalValue = undefined;
      this._servicemapDefinition.internalValue = undefined;
      this._sloListDefinition.internalValue = undefined;
      this._sunburstDefinition.internalValue = undefined;
      this._timeseriesDefinition.internalValue = undefined;
      this._toplistDefinition.internalValue = undefined;
      this._topologyMapDefinition.internalValue = undefined;
      this._traceServiceDefinition.internalValue = undefined;
      this._treemapDefinition.internalValue = undefined;
      this._widgetLayout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertGraphDefinition.internalValue = value.alertGraphDefinition;
      this._alertValueDefinition.internalValue = value.alertValueDefinition;
      this._changeDefinition.internalValue = value.changeDefinition;
      this._checkStatusDefinition.internalValue = value.checkStatusDefinition;
      this._distributionDefinition.internalValue = value.distributionDefinition;
      this._eventStreamDefinition.internalValue = value.eventStreamDefinition;
      this._eventTimelineDefinition.internalValue = value.eventTimelineDefinition;
      this._freeTextDefinition.internalValue = value.freeTextDefinition;
      this._geomapDefinition.internalValue = value.geomapDefinition;
      this._heatmapDefinition.internalValue = value.heatmapDefinition;
      this._hostmapDefinition.internalValue = value.hostmapDefinition;
      this._iframeDefinition.internalValue = value.iframeDefinition;
      this._imageDefinition.internalValue = value.imageDefinition;
      this._listStreamDefinition.internalValue = value.listStreamDefinition;
      this._logStreamDefinition.internalValue = value.logStreamDefinition;
      this._manageStatusDefinition.internalValue = value.manageStatusDefinition;
      this._noteDefinition.internalValue = value.noteDefinition;
      this._queryTableDefinition.internalValue = value.queryTableDefinition;
      this._queryValueDefinition.internalValue = value.queryValueDefinition;
      this._runWorkflowDefinition.internalValue = value.runWorkflowDefinition;
      this._scatterplotDefinition.internalValue = value.scatterplotDefinition;
      this._serviceLevelObjectiveDefinition.internalValue = value.serviceLevelObjectiveDefinition;
      this._servicemapDefinition.internalValue = value.servicemapDefinition;
      this._sloListDefinition.internalValue = value.sloListDefinition;
      this._sunburstDefinition.internalValue = value.sunburstDefinition;
      this._timeseriesDefinition.internalValue = value.timeseriesDefinition;
      this._toplistDefinition.internalValue = value.toplistDefinition;
      this._topologyMapDefinition.internalValue = value.topologyMapDefinition;
      this._traceServiceDefinition.internalValue = value.traceServiceDefinition;
      this._treemapDefinition.internalValue = value.treemapDefinition;
      this._widgetLayout.internalValue = value.widgetLayout;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // alert_graph_definition - computed: false, optional: true, required: false
  private _alertGraphDefinition = new PowerpackWidgetAlertGraphDefinitionOutputReference(this, "alert_graph_definition");
  public get alertGraphDefinition() {
    return this._alertGraphDefinition;
  }
  public putAlertGraphDefinition(value: PowerpackWidgetAlertGraphDefinition) {
    this._alertGraphDefinition.internalValue = value;
  }
  public resetAlertGraphDefinition() {
    this._alertGraphDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertGraphDefinitionInput() {
    return this._alertGraphDefinition.internalValue;
  }

  // alert_value_definition - computed: false, optional: true, required: false
  private _alertValueDefinition = new PowerpackWidgetAlertValueDefinitionOutputReference(this, "alert_value_definition");
  public get alertValueDefinition() {
    return this._alertValueDefinition;
  }
  public putAlertValueDefinition(value: PowerpackWidgetAlertValueDefinition) {
    this._alertValueDefinition.internalValue = value;
  }
  public resetAlertValueDefinition() {
    this._alertValueDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertValueDefinitionInput() {
    return this._alertValueDefinition.internalValue;
  }

  // change_definition - computed: false, optional: true, required: false
  private _changeDefinition = new PowerpackWidgetChangeDefinitionOutputReference(this, "change_definition");
  public get changeDefinition() {
    return this._changeDefinition;
  }
  public putChangeDefinition(value: PowerpackWidgetChangeDefinition) {
    this._changeDefinition.internalValue = value;
  }
  public resetChangeDefinition() {
    this._changeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeDefinitionInput() {
    return this._changeDefinition.internalValue;
  }

  // check_status_definition - computed: false, optional: true, required: false
  private _checkStatusDefinition = new PowerpackWidgetCheckStatusDefinitionOutputReference(this, "check_status_definition");
  public get checkStatusDefinition() {
    return this._checkStatusDefinition;
  }
  public putCheckStatusDefinition(value: PowerpackWidgetCheckStatusDefinition) {
    this._checkStatusDefinition.internalValue = value;
  }
  public resetCheckStatusDefinition() {
    this._checkStatusDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkStatusDefinitionInput() {
    return this._checkStatusDefinition.internalValue;
  }

  // distribution_definition - computed: false, optional: true, required: false
  private _distributionDefinition = new PowerpackWidgetDistributionDefinitionOutputReference(this, "distribution_definition");
  public get distributionDefinition() {
    return this._distributionDefinition;
  }
  public putDistributionDefinition(value: PowerpackWidgetDistributionDefinition) {
    this._distributionDefinition.internalValue = value;
  }
  public resetDistributionDefinition() {
    this._distributionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionDefinitionInput() {
    return this._distributionDefinition.internalValue;
  }

  // event_stream_definition - computed: false, optional: true, required: false
  private _eventStreamDefinition = new PowerpackWidgetEventStreamDefinitionOutputReference(this, "event_stream_definition");
  public get eventStreamDefinition() {
    return this._eventStreamDefinition;
  }
  public putEventStreamDefinition(value: PowerpackWidgetEventStreamDefinition) {
    this._eventStreamDefinition.internalValue = value;
  }
  public resetEventStreamDefinition() {
    this._eventStreamDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStreamDefinitionInput() {
    return this._eventStreamDefinition.internalValue;
  }

  // event_timeline_definition - computed: false, optional: true, required: false
  private _eventTimelineDefinition = new PowerpackWidgetEventTimelineDefinitionOutputReference(this, "event_timeline_definition");
  public get eventTimelineDefinition() {
    return this._eventTimelineDefinition;
  }
  public putEventTimelineDefinition(value: PowerpackWidgetEventTimelineDefinition) {
    this._eventTimelineDefinition.internalValue = value;
  }
  public resetEventTimelineDefinition() {
    this._eventTimelineDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimelineDefinitionInput() {
    return this._eventTimelineDefinition.internalValue;
  }

  // free_text_definition - computed: false, optional: true, required: false
  private _freeTextDefinition = new PowerpackWidgetFreeTextDefinitionOutputReference(this, "free_text_definition");
  public get freeTextDefinition() {
    return this._freeTextDefinition;
  }
  public putFreeTextDefinition(value: PowerpackWidgetFreeTextDefinition) {
    this._freeTextDefinition.internalValue = value;
  }
  public resetFreeTextDefinition() {
    this._freeTextDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeTextDefinitionInput() {
    return this._freeTextDefinition.internalValue;
  }

  // geomap_definition - computed: false, optional: true, required: false
  private _geomapDefinition = new PowerpackWidgetGeomapDefinitionOutputReference(this, "geomap_definition");
  public get geomapDefinition() {
    return this._geomapDefinition;
  }
  public putGeomapDefinition(value: PowerpackWidgetGeomapDefinition) {
    this._geomapDefinition.internalValue = value;
  }
  public resetGeomapDefinition() {
    this._geomapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geomapDefinitionInput() {
    return this._geomapDefinition.internalValue;
  }

  // heatmap_definition - computed: false, optional: true, required: false
  private _heatmapDefinition = new PowerpackWidgetHeatmapDefinitionOutputReference(this, "heatmap_definition");
  public get heatmapDefinition() {
    return this._heatmapDefinition;
  }
  public putHeatmapDefinition(value: PowerpackWidgetHeatmapDefinition) {
    this._heatmapDefinition.internalValue = value;
  }
  public resetHeatmapDefinition() {
    this._heatmapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heatmapDefinitionInput() {
    return this._heatmapDefinition.internalValue;
  }

  // hostmap_definition - computed: false, optional: true, required: false
  private _hostmapDefinition = new PowerpackWidgetHostmapDefinitionOutputReference(this, "hostmap_definition");
  public get hostmapDefinition() {
    return this._hostmapDefinition;
  }
  public putHostmapDefinition(value: PowerpackWidgetHostmapDefinition) {
    this._hostmapDefinition.internalValue = value;
  }
  public resetHostmapDefinition() {
    this._hostmapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostmapDefinitionInput() {
    return this._hostmapDefinition.internalValue;
  }

  // iframe_definition - computed: false, optional: true, required: false
  private _iframeDefinition = new PowerpackWidgetIframeDefinitionOutputReference(this, "iframe_definition");
  public get iframeDefinition() {
    return this._iframeDefinition;
  }
  public putIframeDefinition(value: PowerpackWidgetIframeDefinition) {
    this._iframeDefinition.internalValue = value;
  }
  public resetIframeDefinition() {
    this._iframeDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iframeDefinitionInput() {
    return this._iframeDefinition.internalValue;
  }

  // image_definition - computed: false, optional: true, required: false
  private _imageDefinition = new PowerpackWidgetImageDefinitionOutputReference(this, "image_definition");
  public get imageDefinition() {
    return this._imageDefinition;
  }
  public putImageDefinition(value: PowerpackWidgetImageDefinition) {
    this._imageDefinition.internalValue = value;
  }
  public resetImageDefinition() {
    this._imageDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDefinitionInput() {
    return this._imageDefinition.internalValue;
  }

  // list_stream_definition - computed: false, optional: true, required: false
  private _listStreamDefinition = new PowerpackWidgetListStreamDefinitionOutputReference(this, "list_stream_definition");
  public get listStreamDefinition() {
    return this._listStreamDefinition;
  }
  public putListStreamDefinition(value: PowerpackWidgetListStreamDefinition) {
    this._listStreamDefinition.internalValue = value;
  }
  public resetListStreamDefinition() {
    this._listStreamDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listStreamDefinitionInput() {
    return this._listStreamDefinition.internalValue;
  }

  // log_stream_definition - computed: false, optional: true, required: false
  private _logStreamDefinition = new PowerpackWidgetLogStreamDefinitionOutputReference(this, "log_stream_definition");
  public get logStreamDefinition() {
    return this._logStreamDefinition;
  }
  public putLogStreamDefinition(value: PowerpackWidgetLogStreamDefinition) {
    this._logStreamDefinition.internalValue = value;
  }
  public resetLogStreamDefinition() {
    this._logStreamDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamDefinitionInput() {
    return this._logStreamDefinition.internalValue;
  }

  // manage_status_definition - computed: false, optional: true, required: false
  private _manageStatusDefinition = new PowerpackWidgetManageStatusDefinitionOutputReference(this, "manage_status_definition");
  public get manageStatusDefinition() {
    return this._manageStatusDefinition;
  }
  public putManageStatusDefinition(value: PowerpackWidgetManageStatusDefinition) {
    this._manageStatusDefinition.internalValue = value;
  }
  public resetManageStatusDefinition() {
    this._manageStatusDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageStatusDefinitionInput() {
    return this._manageStatusDefinition.internalValue;
  }

  // note_definition - computed: false, optional: true, required: false
  private _noteDefinition = new PowerpackWidgetNoteDefinitionOutputReference(this, "note_definition");
  public get noteDefinition() {
    return this._noteDefinition;
  }
  public putNoteDefinition(value: PowerpackWidgetNoteDefinition) {
    this._noteDefinition.internalValue = value;
  }
  public resetNoteDefinition() {
    this._noteDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteDefinitionInput() {
    return this._noteDefinition.internalValue;
  }

  // query_table_definition - computed: false, optional: true, required: false
  private _queryTableDefinition = new PowerpackWidgetQueryTableDefinitionOutputReference(this, "query_table_definition");
  public get queryTableDefinition() {
    return this._queryTableDefinition;
  }
  public putQueryTableDefinition(value: PowerpackWidgetQueryTableDefinition) {
    this._queryTableDefinition.internalValue = value;
  }
  public resetQueryTableDefinition() {
    this._queryTableDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTableDefinitionInput() {
    return this._queryTableDefinition.internalValue;
  }

  // query_value_definition - computed: false, optional: true, required: false
  private _queryValueDefinition = new PowerpackWidgetQueryValueDefinitionOutputReference(this, "query_value_definition");
  public get queryValueDefinition() {
    return this._queryValueDefinition;
  }
  public putQueryValueDefinition(value: PowerpackWidgetQueryValueDefinition) {
    this._queryValueDefinition.internalValue = value;
  }
  public resetQueryValueDefinition() {
    this._queryValueDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryValueDefinitionInput() {
    return this._queryValueDefinition.internalValue;
  }

  // run_workflow_definition - computed: false, optional: true, required: false
  private _runWorkflowDefinition = new PowerpackWidgetRunWorkflowDefinitionOutputReference(this, "run_workflow_definition");
  public get runWorkflowDefinition() {
    return this._runWorkflowDefinition;
  }
  public putRunWorkflowDefinition(value: PowerpackWidgetRunWorkflowDefinition) {
    this._runWorkflowDefinition.internalValue = value;
  }
  public resetRunWorkflowDefinition() {
    this._runWorkflowDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runWorkflowDefinitionInput() {
    return this._runWorkflowDefinition.internalValue;
  }

  // scatterplot_definition - computed: false, optional: true, required: false
  private _scatterplotDefinition = new PowerpackWidgetScatterplotDefinitionOutputReference(this, "scatterplot_definition");
  public get scatterplotDefinition() {
    return this._scatterplotDefinition;
  }
  public putScatterplotDefinition(value: PowerpackWidgetScatterplotDefinition) {
    this._scatterplotDefinition.internalValue = value;
  }
  public resetScatterplotDefinition() {
    this._scatterplotDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scatterplotDefinitionInput() {
    return this._scatterplotDefinition.internalValue;
  }

  // service_level_objective_definition - computed: false, optional: true, required: false
  private _serviceLevelObjectiveDefinition = new PowerpackWidgetServiceLevelObjectiveDefinitionOutputReference(this, "service_level_objective_definition");
  public get serviceLevelObjectiveDefinition() {
    return this._serviceLevelObjectiveDefinition;
  }
  public putServiceLevelObjectiveDefinition(value: PowerpackWidgetServiceLevelObjectiveDefinition) {
    this._serviceLevelObjectiveDefinition.internalValue = value;
  }
  public resetServiceLevelObjectiveDefinition() {
    this._serviceLevelObjectiveDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelObjectiveDefinitionInput() {
    return this._serviceLevelObjectiveDefinition.internalValue;
  }

  // servicemap_definition - computed: false, optional: true, required: false
  private _servicemapDefinition = new PowerpackWidgetServicemapDefinitionOutputReference(this, "servicemap_definition");
  public get servicemapDefinition() {
    return this._servicemapDefinition;
  }
  public putServicemapDefinition(value: PowerpackWidgetServicemapDefinition) {
    this._servicemapDefinition.internalValue = value;
  }
  public resetServicemapDefinition() {
    this._servicemapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicemapDefinitionInput() {
    return this._servicemapDefinition.internalValue;
  }

  // slo_list_definition - computed: false, optional: true, required: false
  private _sloListDefinition = new PowerpackWidgetSloListDefinitionOutputReference(this, "slo_list_definition");
  public get sloListDefinition() {
    return this._sloListDefinition;
  }
  public putSloListDefinition(value: PowerpackWidgetSloListDefinition) {
    this._sloListDefinition.internalValue = value;
  }
  public resetSloListDefinition() {
    this._sloListDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloListDefinitionInput() {
    return this._sloListDefinition.internalValue;
  }

  // sunburst_definition - computed: false, optional: true, required: false
  private _sunburstDefinition = new PowerpackWidgetSunburstDefinitionOutputReference(this, "sunburst_definition");
  public get sunburstDefinition() {
    return this._sunburstDefinition;
  }
  public putSunburstDefinition(value: PowerpackWidgetSunburstDefinition) {
    this._sunburstDefinition.internalValue = value;
  }
  public resetSunburstDefinition() {
    this._sunburstDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sunburstDefinitionInput() {
    return this._sunburstDefinition.internalValue;
  }

  // timeseries_definition - computed: false, optional: true, required: false
  private _timeseriesDefinition = new PowerpackWidgetTimeseriesDefinitionOutputReference(this, "timeseries_definition");
  public get timeseriesDefinition() {
    return this._timeseriesDefinition;
  }
  public putTimeseriesDefinition(value: PowerpackWidgetTimeseriesDefinition) {
    this._timeseriesDefinition.internalValue = value;
  }
  public resetTimeseriesDefinition() {
    this._timeseriesDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesDefinitionInput() {
    return this._timeseriesDefinition.internalValue;
  }

  // toplist_definition - computed: false, optional: true, required: false
  private _toplistDefinition = new PowerpackWidgetToplistDefinitionOutputReference(this, "toplist_definition");
  public get toplistDefinition() {
    return this._toplistDefinition;
  }
  public putToplistDefinition(value: PowerpackWidgetToplistDefinition) {
    this._toplistDefinition.internalValue = value;
  }
  public resetToplistDefinition() {
    this._toplistDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toplistDefinitionInput() {
    return this._toplistDefinition.internalValue;
  }

  // topology_map_definition - computed: false, optional: true, required: false
  private _topologyMapDefinition = new PowerpackWidgetTopologyMapDefinitionOutputReference(this, "topology_map_definition");
  public get topologyMapDefinition() {
    return this._topologyMapDefinition;
  }
  public putTopologyMapDefinition(value: PowerpackWidgetTopologyMapDefinition) {
    this._topologyMapDefinition.internalValue = value;
  }
  public resetTopologyMapDefinition() {
    this._topologyMapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyMapDefinitionInput() {
    return this._topologyMapDefinition.internalValue;
  }

  // trace_service_definition - computed: false, optional: true, required: false
  private _traceServiceDefinition = new PowerpackWidgetTraceServiceDefinitionOutputReference(this, "trace_service_definition");
  public get traceServiceDefinition() {
    return this._traceServiceDefinition;
  }
  public putTraceServiceDefinition(value: PowerpackWidgetTraceServiceDefinition) {
    this._traceServiceDefinition.internalValue = value;
  }
  public resetTraceServiceDefinition() {
    this._traceServiceDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceServiceDefinitionInput() {
    return this._traceServiceDefinition.internalValue;
  }

  // treemap_definition - computed: false, optional: true, required: false
  private _treemapDefinition = new PowerpackWidgetTreemapDefinitionOutputReference(this, "treemap_definition");
  public get treemapDefinition() {
    return this._treemapDefinition;
  }
  public putTreemapDefinition(value: PowerpackWidgetTreemapDefinition) {
    this._treemapDefinition.internalValue = value;
  }
  public resetTreemapDefinition() {
    this._treemapDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treemapDefinitionInput() {
    return this._treemapDefinition.internalValue;
  }

  // widget_layout - computed: false, optional: true, required: false
  private _widgetLayout = new PowerpackWidgetWidgetLayoutOutputReference(this, "widget_layout");
  public get widgetLayout() {
    return this._widgetLayout;
  }
  public putWidgetLayout(value: PowerpackWidgetWidgetLayout) {
    this._widgetLayout.internalValue = value;
  }
  public resetWidgetLayout() {
    this._widgetLayout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetLayoutInput() {
    return this._widgetLayout.internalValue;
  }
}

export class PowerpackWidgetList extends cdktf.ComplexList {
  public internalValue? : PowerpackWidget[] | cdktf.IResolvable

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
  public get(index: number): PowerpackWidgetOutputReference {
    return new PowerpackWidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
