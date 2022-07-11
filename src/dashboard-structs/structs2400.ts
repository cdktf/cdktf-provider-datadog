import * as cdktf from 'cdktf';
import { DashboardWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery,
dashboardWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference,
DashboardWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery,
dashboardWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference,
DashboardWidgetQueryTableDefinitionRequestQueryEventQuery,
dashboardWidgetQueryTableDefinitionRequestQueryEventQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference,
DashboardWidgetQueryTableDefinitionRequestQueryMetricQuery,
dashboardWidgetQueryTableDefinitionRequestQueryMetricQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference,
DashboardWidgetQueryTableDefinitionRequestApmQuery,
dashboardWidgetQueryTableDefinitionRequestApmQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestApmQueryOutputReference,
DashboardWidgetQueryTableDefinitionRequestApmStatsQuery,
dashboardWidgetQueryTableDefinitionRequestApmStatsQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestApmStatsQueryOutputReference,
DashboardWidgetQueryTableDefinitionRequestConditionalFormats,
dashboardWidgetQueryTableDefinitionRequestConditionalFormatsToTerraform,
DashboardWidgetQueryTableDefinitionRequestConditionalFormatsList,
DashboardWidgetQueryTableDefinitionRequestFormula,
dashboardWidgetQueryTableDefinitionRequestFormulaToTerraform,
DashboardWidgetQueryTableDefinitionRequestFormulaList,
DashboardWidgetQueryTableDefinitionRequestLogQuery,
dashboardWidgetQueryTableDefinitionRequestLogQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestLogQueryOutputReference,
DashboardWidgetQueryTableDefinitionRequestProcessQuery,
dashboardWidgetQueryTableDefinitionRequestProcessQueryToTerraform,
DashboardWidgetQueryTableDefinitionRequestProcessQueryOutputReference,
DashboardWidgetQueryTableDefinitionCustomLink,
dashboardWidgetQueryTableDefinitionCustomLinkToTerraform,
DashboardWidgetQueryTableDefinitionCustomLinkList } from './structs2000'
export interface DashboardWidgetQueryTableDefinitionRequestQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_normalized_cpu Dashboard#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktf.IResolvable;
  /**
  * The number of hits to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort Dashboard#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#tag_filters Dashboard#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#text_filter Dashboard#text_filter}
  */
  readonly textFilter?: string;
}

export function dashboardWidgetQueryTableDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetQueryTableDefinitionRequestQueryProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    is_normalized_cpu: cdktf.booleanToTerraform(struct!.isNormalizedCpu),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    sort: cdktf.stringToTerraform(struct!.sort),
    tag_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tagFilters),
    text_filter: cdktf.stringToTerraform(struct!.textFilter),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestQueryProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
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

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestQueryProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
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
export interface DashboardWidgetQueryTableDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetQueryTableDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetQueryTableDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetQueryTableDefinitionRequestQueryProcessQuery;
}

export function dashboardWidgetQueryTableDefinitionRequestQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: dashboardWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: dashboardWidgetQueryTableDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetQueryTableDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetQueryTableDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestQuery | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = undefined;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
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
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
      this._processQuery.internalValue = value.processQuery;
    }
  }

  // apm_dependency_stats_query - computed: false, optional: true, required: false
  private _apmDependencyStatsQuery = new DashboardWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: DashboardWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery) {
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
  private _apmResourceStatsQuery = new DashboardWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: DashboardWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery) {
    this._apmResourceStatsQuery.internalValue = value;
  }
  public resetApmResourceStatsQuery() {
    this._apmResourceStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmResourceStatsQueryInput() {
    return this._apmResourceStatsQuery.internalValue;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery = new DashboardWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: DashboardWidgetQueryTableDefinitionRequestQueryEventQuery) {
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
  private _metricQuery = new DashboardWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: DashboardWidgetQueryTableDefinitionRequestQueryMetricQuery) {
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
  private _processQuery = new DashboardWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetQueryTableDefinitionRequestQueryProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }
}

export class DashboardWidgetQueryTableDefinitionRequestQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryTableDefinitionRequestQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryTableDefinitionRequestQueryOutputReference {
    return new DashboardWidgetQueryTableDefinitionRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryTableDefinitionRequestRumQueryComputeQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference | DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference | DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery;
}

export function dashboardWidgetQueryTableDefinitionRequestRumQueryGroupByToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetQueryTableDefinitionRequestRumQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference {
    return new DashboardWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestRumQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryTableDefinitionRequestRumQueryMultiComputeToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetQueryTableDefinitionRequestRumQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference {
    return new DashboardWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestRumQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryTableDefinitionRequestRumQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestRumQueryOutputReference | DashboardWidgetQueryTableDefinitionRequestRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetQueryTableDefinitionRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestRumQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestRumQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestRumQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetQueryTableDefinitionRequestRumQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryTableDefinitionRequestRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetQueryTableDefinitionRequestRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference | DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupByToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference {
    return new DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryTableDefinitionRequestSecurityQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryTableDefinitionRequestSecurityQueryToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequestSecurityQueryOutputReference | DashboardWidgetQueryTableDefinitionRequestSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequestSecurityQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequestSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetQueryTableDefinitionRequest {
  /**
  * The aggregator to use for time aggregation. Valid values are `avg`, `last`, `max`, `min`, `sum`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The alias for the column name (defaults to metric name).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. List items one of `number`, `bar`. Valid values are `number`, `bar`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string[];
  /**
  * The number of lines to show in the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The sort order for the rows. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order?: string;
  /**
  * The metric query to use for this widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetQueryTableDefinitionRequestApmQuery;
  /**
  * apm_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_stats_query Dashboard#apm_stats_query}
  */
  readonly apmStatsQuery?: DashboardWidgetQueryTableDefinitionRequestApmStatsQuery;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetQueryTableDefinitionRequestConditionalFormats[] | cdktf.IResolvable;
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetQueryTableDefinitionRequestFormula[] | cdktf.IResolvable;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetQueryTableDefinitionRequestLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetQueryTableDefinitionRequestProcessQuery;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetQueryTableDefinitionRequestQuery[] | cdktf.IResolvable;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetQueryTableDefinitionRequestRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetQueryTableDefinitionRequestSecurityQuery;
}

export function dashboardWidgetQueryTableDefinitionRequestToTerraform(struct?: DashboardWidgetQueryTableDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cellDisplayMode),
    limit: cdktf.numberToTerraform(struct!.limit),
    order: cdktf.stringToTerraform(struct!.order),
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetQueryTableDefinitionRequestApmQueryToTerraform(struct!.apmQuery),
    apm_stats_query: dashboardWidgetQueryTableDefinitionRequestApmStatsQueryToTerraform(struct!.apmStatsQuery),
    conditional_formats: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestConditionalFormatsToTerraform)(struct!.conditionalFormats),
    formula: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestFormulaToTerraform)(struct!.formula),
    log_query: dashboardWidgetQueryTableDefinitionRequestLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetQueryTableDefinitionRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestQueryToTerraform)(struct!.query),
    rum_query: dashboardWidgetQueryTableDefinitionRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetQueryTableDefinitionRequestSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export class DashboardWidgetQueryTableDefinitionRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryTableDefinitionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._cellDisplayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellDisplayMode = this._cellDisplayMode;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._apmQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmQuery = this._apmQuery?.internalValue;
    }
    if (this._apmStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmStatsQuery = this._apmStatsQuery?.internalValue;
    }
    if (this._conditionalFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormats = this._conditionalFormats?.internalValue;
    }
    if (this._formula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula?.internalValue;
    }
    if (this._logQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQuery = this._logQuery?.internalValue;
    }
    if (this._processQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processQuery = this._processQuery?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._rumQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rumQuery = this._rumQuery?.internalValue;
    }
    if (this._securityQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityQuery = this._securityQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinitionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._limit = undefined;
      this._order = undefined;
      this._q = undefined;
      this._apmQuery.internalValue = undefined;
      this._apmStatsQuery.internalValue = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._formula.internalValue = undefined;
      this._logQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._query.internalValue = undefined;
      this._rumQuery.internalValue = undefined;
      this._securityQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator = value.aggregator;
      this._alias = value.alias;
      this._cellDisplayMode = value.cellDisplayMode;
      this._limit = value.limit;
      this._order = value.order;
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._apmStatsQuery.internalValue = value.apmStatsQuery;
      this._conditionalFormats.internalValue = value.conditionalFormats;
      this._formula.internalValue = value.formula;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._query.internalValue = value.query;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
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

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cell_display_mode - computed: false, optional: true, required: false
  private _cellDisplayMode?: string[]; 
  public get cellDisplayMode() {
    return this.getListAttribute('cell_display_mode');
  }
  public set cellDisplayMode(value: string[]) {
    this._cellDisplayMode = value;
  }
  public resetCellDisplayMode() {
    this._cellDisplayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellDisplayModeInput() {
    return this._cellDisplayMode;
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

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // apm_query - computed: false, optional: true, required: false
  private _apmQuery = new DashboardWidgetQueryTableDefinitionRequestApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetQueryTableDefinitionRequestApmQuery) {
    this._apmQuery.internalValue = value;
  }
  public resetApmQuery() {
    this._apmQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmQueryInput() {
    return this._apmQuery.internalValue;
  }

  // apm_stats_query - computed: false, optional: true, required: false
  private _apmStatsQuery = new DashboardWidgetQueryTableDefinitionRequestApmStatsQueryOutputReference(this, "apm_stats_query");
  public get apmStatsQuery() {
    return this._apmStatsQuery;
  }
  public putApmStatsQuery(value: DashboardWidgetQueryTableDefinitionRequestApmStatsQuery) {
    this._apmStatsQuery.internalValue = value;
  }
  public resetApmStatsQuery() {
    this._apmStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmStatsQueryInput() {
    return this._apmStatsQuery.internalValue;
  }

  // conditional_formats - computed: false, optional: true, required: false
  private _conditionalFormats = new DashboardWidgetQueryTableDefinitionRequestConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetQueryTableDefinitionRequestConditionalFormats[] | cdktf.IResolvable) {
    this._conditionalFormats.internalValue = value;
  }
  public resetConditionalFormats() {
    this._conditionalFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormatsInput() {
    return this._conditionalFormats.internalValue;
  }

  // formula - computed: false, optional: true, required: false
  private _formula = new DashboardWidgetQueryTableDefinitionRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: DashboardWidgetQueryTableDefinitionRequestFormula[] | cdktf.IResolvable) {
    this._formula.internalValue = value;
  }
  public resetFormula() {
    this._formula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula.internalValue;
  }

  // log_query - computed: false, optional: true, required: false
  private _logQuery = new DashboardWidgetQueryTableDefinitionRequestLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetQueryTableDefinitionRequestLogQuery) {
    this._logQuery.internalValue = value;
  }
  public resetLogQuery() {
    this._logQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryInput() {
    return this._logQuery.internalValue;
  }

  // process_query - computed: false, optional: true, required: false
  private _processQuery = new DashboardWidgetQueryTableDefinitionRequestProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetQueryTableDefinitionRequestProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DashboardWidgetQueryTableDefinitionRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetQueryTableDefinitionRequestQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // rum_query - computed: false, optional: true, required: false
  private _rumQuery = new DashboardWidgetQueryTableDefinitionRequestRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetQueryTableDefinitionRequestRumQuery) {
    this._rumQuery.internalValue = value;
  }
  public resetRumQuery() {
    this._rumQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumQueryInput() {
    return this._rumQuery.internalValue;
  }

  // security_query - computed: false, optional: true, required: false
  private _securityQuery = new DashboardWidgetQueryTableDefinitionRequestSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetQueryTableDefinitionRequestSecurityQuery) {
    this._securityQuery.internalValue = value;
  }
  public resetSecurityQuery() {
    this._securityQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQueryInput() {
    return this._securityQuery.internalValue;
  }
}

export class DashboardWidgetQueryTableDefinitionRequestList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryTableDefinitionRequest[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryTableDefinitionRequestOutputReference {
    return new DashboardWidgetQueryTableDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryTableDefinition {
  /**
  * Controls the display of the search bar. Valid values are `always`, `never`, `auto`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#has_search_bar Dashboard#has_search_bar}
  */
  readonly hasSearchBar?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_link Dashboard#custom_link}
  */
  readonly customLink?: DashboardWidgetQueryTableDefinitionCustomLink[] | cdktf.IResolvable;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetQueryTableDefinitionRequest[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryTableDefinitionToTerraform(struct?: DashboardWidgetQueryTableDefinitionOutputReference | DashboardWidgetQueryTableDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    has_search_bar: cdktf.stringToTerraform(struct!.hasSearchBar),
    live_span: cdktf.stringToTerraform(struct!.liveSpan),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    custom_link: cdktf.listMapper(dashboardWidgetQueryTableDefinitionCustomLinkToTerraform)(struct!.customLink),
    request: cdktf.listMapper(dashboardWidgetQueryTableDefinitionRequestToTerraform)(struct!.request),
  }
}

export class DashboardWidgetQueryTableDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryTableDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hasSearchBar !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasSearchBar = this._hasSearchBar;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleAlign = this._titleAlign;
    }
    if (this._titleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleSize = this._titleSize;
    }
    if (this._customLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink = this._customLink?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryTableDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hasSearchBar = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink.internalValue = undefined;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hasSearchBar = value.hasSearchBar;
      this._liveSpan = value.liveSpan;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink.internalValue = value.customLink;
      this._request.internalValue = value.request;
    }
  }

  // has_search_bar - computed: false, optional: true, required: false
  private _hasSearchBar?: string; 
  public get hasSearchBar() {
    return this.getStringAttribute('has_search_bar');
  }
  public set hasSearchBar(value: string) {
    this._hasSearchBar = value;
  }
  public resetHasSearchBar() {
    this._hasSearchBar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasSearchBarInput() {
    return this._hasSearchBar;
  }

  // live_span - computed: false, optional: true, required: false
  private _liveSpan?: string; 
  public get liveSpan() {
    return this.getStringAttribute('live_span');
  }
  public set liveSpan(value: string) {
    this._liveSpan = value;
  }
  public resetLiveSpan() {
    this._liveSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveSpanInput() {
    return this._liveSpan;
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

  // title_align - computed: false, optional: true, required: false
  private _titleAlign?: string; 
  public get titleAlign() {
    return this.getStringAttribute('title_align');
  }
  public set titleAlign(value: string) {
    this._titleAlign = value;
  }
  public resetTitleAlign() {
    this._titleAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleAlignInput() {
    return this._titleAlign;
  }

  // title_size - computed: false, optional: true, required: false
  private _titleSize?: string; 
  public get titleSize() {
    return this.getStringAttribute('title_size');
  }
  public set titleSize(value: string) {
    this._titleSize = value;
  }
  public resetTitleSize() {
    this._titleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleSizeInput() {
    return this._titleSize;
  }

  // custom_link - computed: false, optional: true, required: false
  private _customLink = new DashboardWidgetQueryTableDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: DashboardWidgetQueryTableDefinitionCustomLink[] | cdktf.IResolvable) {
    this._customLink.internalValue = value;
  }
  public resetCustomLink() {
    this._customLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinkInput() {
    return this._customLink.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DashboardWidgetQueryTableDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DashboardWidgetQueryTableDefinitionRequest[] | cdktf.IResolvable) {
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
export interface DashboardWidgetQueryValueDefinitionCustomLink {
  /**
  * The flag for toggling context menu link visibility.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_hidden Dashboard#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * The label for the custom link URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#link Dashboard#link}
  */
  readonly link?: string;
  /**
  * The label id that refers to a context menu link item. When override_label is provided, the client request omits the label field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#override_label Dashboard#override_label}
  */
  readonly overrideLabel?: string;
}

export function dashboardWidgetQueryValueDefinitionCustomLinkToTerraform(struct?: DashboardWidgetQueryValueDefinitionCustomLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    label: cdktf.stringToTerraform(struct!.label),
    link: cdktf.stringToTerraform(struct!.link),
    override_label: cdktf.stringToTerraform(struct!.overrideLabel),
  }
}

export class DashboardWidgetQueryValueDefinitionCustomLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionCustomLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._overrideLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideLabel = this._overrideLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionCustomLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isHidden = undefined;
      this._label = undefined;
      this._link = undefined;
      this._overrideLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isHidden = value.isHidden;
      this._label = value.label;
      this._link = value.link;
      this._overrideLabel = value.overrideLabel;
    }
  }

  // is_hidden - computed: false, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // override_label - computed: false, optional: true, required: false
  private _overrideLabel?: string; 
  public get overrideLabel() {
    return this.getStringAttribute('override_label');
  }
  public set overrideLabel(value: string) {
    this._overrideLabel = value;
  }
  public resetOverrideLabel() {
    this._overrideLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLabelInput() {
    return this._overrideLabel;
  }
}

export class DashboardWidgetQueryValueDefinitionCustomLinkList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionCustomLink[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionCustomLinkOutputReference {
    return new DashboardWidgetQueryValueDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetQueryValueDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestApmQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestApmQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestApmQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestApmQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryValueDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestApmQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetQueryValueDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestApmQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestApmQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestApmQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestApmQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetQueryValueDefinitionRequestApmQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryValueDefinitionRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetQueryValueDefinitionRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery;
}

export function dashboardWidgetQueryValueDefinitionRequestAuditQueryGroupByToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestAuditQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryValueDefinitionRequestAuditQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestAuditQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestAuditQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestAuditQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestAuditQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestAuditQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestAuditQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestConditionalFormats {
  /**
  * The comparator to use. Valid values are `>`, `>=`, `<`, `<=`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetQueryValueDefinitionRequestConditionalFormatsToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestConditionalFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    custom_bg_color: cdktf.stringToTerraform(struct!.customBgColor),
    custom_fg_color: cdktf.stringToTerraform(struct!.customFgColor),
    hide_value: cdktf.booleanToTerraform(struct!.hideValue),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    metric: cdktf.stringToTerraform(struct!.metric),
    palette: cdktf.stringToTerraform(struct!.palette),
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestConditionalFormats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._customBgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBgColor = this._customBgColor;
    }
    if (this._customFgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFgColor = this._customFgColor;
    }
    if (this._hideValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideValue = this._hideValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestConditionalFormats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._customBgColor = undefined;
      this._customFgColor = undefined;
      this._hideValue = undefined;
      this._imageUrl = undefined;
      this._metric = undefined;
      this._palette = undefined;
      this._timeframe = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._customBgColor = value.customBgColor;
      this._customFgColor = value.customFgColor;
      this._hideValue = value.hideValue;
      this._imageUrl = value.imageUrl;
      this._metric = value.metric;
      this._palette = value.palette;
      this._timeframe = value.timeframe;
      this._value = value.value;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // custom_bg_color - computed: false, optional: true, required: false
  private _customBgColor?: string; 
  public get customBgColor() {
    return this.getStringAttribute('custom_bg_color');
  }
  public set customBgColor(value: string) {
    this._customBgColor = value;
  }
  public resetCustomBgColor() {
    this._customBgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBgColorInput() {
    return this._customBgColor;
  }

  // custom_fg_color - computed: false, optional: true, required: false
  private _customFgColor?: string; 
  public get customFgColor() {
    return this.getStringAttribute('custom_fg_color');
  }
  public set customFgColor(value: string) {
    this._customFgColor = value;
  }
  public resetCustomFgColor() {
    this._customFgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFgColorInput() {
    return this._customFgColor;
  }

  // hide_value - computed: false, optional: true, required: false
  private _hideValue?: boolean | cdktf.IResolvable; 
  public get hideValue() {
    return this.getBooleanAttribute('hide_value');
  }
  public set hideValue(value: boolean | cdktf.IResolvable) {
    this._hideValue = value;
  }
  public resetHideValue() {
    this._hideValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideValueInput() {
    return this._hideValue;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
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

  // palette - computed: false, optional: false, required: true
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestConditionalFormatsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestConditionalFormats[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormats {
  /**
  * The comparator to use. Valid values are `>`, `>=`, `<`, `<=`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    custom_bg_color: cdktf.stringToTerraform(struct!.customBgColor),
    custom_fg_color: cdktf.stringToTerraform(struct!.customFgColor),
    hide_value: cdktf.booleanToTerraform(struct!.hideValue),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    metric: cdktf.stringToTerraform(struct!.metric),
    palette: cdktf.stringToTerraform(struct!.palette),
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._customBgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBgColor = this._customBgColor;
    }
    if (this._customFgColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFgColor = this._customFgColor;
    }
    if (this._hideValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideValue = this._hideValue;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._customBgColor = undefined;
      this._customFgColor = undefined;
      this._hideValue = undefined;
      this._imageUrl = undefined;
      this._metric = undefined;
      this._palette = undefined;
      this._timeframe = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._customBgColor = value.customBgColor;
      this._customFgColor = value.customFgColor;
      this._hideValue = value.hideValue;
      this._imageUrl = value.imageUrl;
      this._metric = value.metric;
      this._palette = value.palette;
      this._timeframe = value.timeframe;
      this._value = value.value;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // custom_bg_color - computed: false, optional: true, required: false
  private _customBgColor?: string; 
  public get customBgColor() {
    return this.getStringAttribute('custom_bg_color');
  }
  public set customBgColor(value: string) {
    this._customBgColor = value;
  }
  public resetCustomBgColor() {
    this._customBgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBgColorInput() {
    return this._customBgColor;
  }

  // custom_fg_color - computed: false, optional: true, required: false
  private _customFgColor?: string; 
  public get customFgColor() {
    return this.getStringAttribute('custom_fg_color');
  }
  public set customFgColor(value: string) {
    this._customFgColor = value;
  }
  public resetCustomFgColor() {
    this._customFgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFgColorInput() {
    return this._customFgColor;
  }

  // hide_value - computed: false, optional: true, required: false
  private _hideValue?: boolean | cdktf.IResolvable; 
  public get hideValue() {
    return this.getBooleanAttribute('hide_value');
  }
  public set hideValue(value: boolean | cdktf.IResolvable) {
    this._hideValue = value;
  }
  public resetHideValue() {
    this._hideValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideValueInput() {
    return this._hideValue;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
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

  // palette - computed: false, optional: false, required: true
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormatsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestFormulaLimit {
  /**
  * The number of results to return
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#count Dashboard#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetQueryValueDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestFormulaLimitOutputReference | DashboardWidgetQueryValueDefinitionRequestFormulaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestFormulaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestFormulaLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestFormulaLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._order = value.order;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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
export interface DashboardWidgetQueryValueDefinitionRequestFormula {
  /**
  * An expression alias.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula_expression Dashboard#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable;
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetQueryValueDefinitionRequestFormulaLimit;
}

export function dashboardWidgetQueryValueDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
    conditional_formats: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToTerraform)(struct!.conditionalFormats),
    limit: dashboardWidgetQueryValueDefinitionRequestFormulaLimitToTerraform(struct!.limit),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestFormulaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestFormula | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._cellDisplayMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellDisplayMode = this._cellDisplayMode;
    }
    if (this._formulaExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.formulaExpression = this._formulaExpression;
    }
    if (this._conditionalFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormats = this._conditionalFormats?.internalValue;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestFormula | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._formulaExpression = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._limit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._cellDisplayMode = value.cellDisplayMode;
      this._formulaExpression = value.formulaExpression;
      this._conditionalFormats.internalValue = value.conditionalFormats;
      this._limit.internalValue = value.limit;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cell_display_mode - computed: false, optional: true, required: false
  private _cellDisplayMode?: string; 
  public get cellDisplayMode() {
    return this.getStringAttribute('cell_display_mode');
  }
  public set cellDisplayMode(value: string) {
    this._cellDisplayMode = value;
  }
  public resetCellDisplayMode() {
    this._cellDisplayMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellDisplayModeInput() {
    return this._cellDisplayMode;
  }

  // formula_expression - computed: false, optional: false, required: true
  private _formulaExpression?: string; 
  public get formulaExpression() {
    return this.getStringAttribute('formula_expression');
  }
  public set formulaExpression(value: string) {
    this._formulaExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaExpressionInput() {
    return this._formulaExpression;
  }

  // conditional_formats - computed: false, optional: true, required: false
  private _conditionalFormats = new DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable) {
    this._conditionalFormats.internalValue = value;
  }
  public resetConditionalFormats() {
    this._conditionalFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormatsInput() {
    return this._conditionalFormats.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new DashboardWidgetQueryValueDefinitionRequestFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DashboardWidgetQueryValueDefinitionRequestFormulaLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestFormulaList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestFormula[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestFormulaOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetQueryValueDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestLogQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestLogQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestLogQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestLogQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryValueDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestLogQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetQueryValueDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestLogQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestLogQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestLogQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetQueryValueDefinitionRequestLogQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryValueDefinitionRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetQueryValueDefinitionRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestProcessQuery {
  /**
  * A list of processes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetQueryValueDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestProcessQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.filterBy),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    search_by: cdktf.stringToTerraform(struct!.searchBy),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._searchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBy = this._searchBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterBy = undefined;
      this._limit = undefined;
      this._metric = undefined;
      this._searchBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterBy = value.filterBy;
      this._limit = value.limit;
      this._metric = value.metric;
      this._searchBy = value.searchBy;
    }
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy?: string[]; 
  public get filterBy() {
    return this.getListAttribute('filter_by');
  }
  public set filterBy(value: string[]) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
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

  // search_by - computed: false, optional: true, required: false
  private _searchBy?: string; 
  public get searchBy() {
    return this.getStringAttribute('search_by');
  }
  public set searchBy(value: string) {
    this._searchBy = value;
  }
  public resetSearchBy() {
    this._searchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchByInput() {
    return this._searchBy;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery {
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_upstream Dashboard#is_upstream}
  */
  readonly isUpstream?: boolean | cdktf.IResolvable;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    env: cdktf.stringToTerraform(struct!.env),
    is_upstream: cdktf.booleanToTerraform(struct!.isUpstream),
    name: cdktf.stringToTerraform(struct!.name),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktf.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktf.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    service: cdktf.stringToTerraform(struct!.service),
    stat: cdktf.stringToTerraform(struct!.stat),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._isUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpstream = this._isUpstream;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._primaryTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagName = this._primaryTagName;
    }
    if (this._primaryTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagValue = this._primaryTagValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._env = undefined;
      this._isUpstream = undefined;
      this._name = undefined;
      this._operationName = undefined;
      this._primaryTagName = undefined;
      this._primaryTagValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._env = value.env;
      this._isUpstream = value.isUpstream;
      this._name = value.name;
      this._operationName = value.operationName;
      this._primaryTagName = value.primaryTagName;
      this._primaryTagValue = value.primaryTagValue;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._stat = value.stat;
    }
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

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // is_upstream - computed: false, optional: true, required: false
  private _isUpstream?: boolean | cdktf.IResolvable; 
  public get isUpstream() {
    return this.getBooleanAttribute('is_upstream');
  }
  public set isUpstream(value: boolean | cdktf.IResolvable) {
    this._isUpstream = value;
  }
  public resetIsUpstream() {
    this._isUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpstreamInput() {
    return this._isUpstream;
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

  // operation_name - computed: false, optional: false, required: true
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // primary_tag_name - computed: false, optional: true, required: false
  private _primaryTagName?: string; 
  public get primaryTagName() {
    return this.getStringAttribute('primary_tag_name');
  }
  public set primaryTagName(value: string) {
    this._primaryTagName = value;
  }
  public resetPrimaryTagName() {
    this._primaryTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagNameInput() {
    return this._primaryTagName;
  }

  // primary_tag_value - computed: false, optional: true, required: false
  private _primaryTagValue?: string; 
  public get primaryTagValue() {
    return this.getStringAttribute('primary_tag_value');
  }
  public set primaryTagValue(value: string) {
    this._primaryTagValue = value;
  }
  public resetPrimaryTagValue() {
    this._primaryTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagValueInput() {
    return this._primaryTagValue;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery {
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    env: cdktf.stringToTerraform(struct!.env),
    group_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupBy),
    name: cdktf.stringToTerraform(struct!.name),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktf.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktf.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    service: cdktf.stringToTerraform(struct!.service),
    stat: cdktf.stringToTerraform(struct!.stat),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._primaryTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagName = this._primaryTagName;
    }
    if (this._primaryTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagValue = this._primaryTagValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._env = undefined;
      this._groupBy = undefined;
      this._name = undefined;
      this._operationName = undefined;
      this._primaryTagName = undefined;
      this._primaryTagValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._env = value.env;
      this._groupBy = value.groupBy;
      this._name = value.name;
      this._operationName = value.operationName;
      this._primaryTagName = value.primaryTagName;
      this._primaryTagValue = value.primaryTagValue;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._stat = value.stat;
    }
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

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // primary_tag_name - computed: false, optional: true, required: false
  private _primaryTagName?: string; 
  public get primaryTagName() {
    return this.getStringAttribute('primary_tag_name');
  }
  public set primaryTagName(value: string) {
    this._primaryTagName = value;
  }
  public resetPrimaryTagName() {
    this._primaryTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagNameInput() {
    return this._primaryTagName;
  }

  // primary_tag_value - computed: false, optional: true, required: false
  private _primaryTagValue?: string; 
  public get primaryTagValue() {
    return this.getStringAttribute('primary_tag_value');
  }
  public set primaryTagValue(value: string) {
    this._primaryTagValue = value;
  }
  public resetPrimaryTagValue() {
    this._primaryTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagValueInput() {
    return this._primaryTagValue;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    interval: cdktf.numberToTerraform(struct!.interval),
    metric: cdktf.stringToTerraform(struct!.metric),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryEventQueryComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._interval = value.interval;
      this._metric = value.metric;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
}

export class DashboardWidgetQueryValueDefinitionRequestQueryEventQueryComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestQueryEventQueryComputeOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBy {
  /**
  * The event facet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: dashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort) {
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

export class DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupByOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearchToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetQueryValueDefinitionRequestQueryEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearch;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryEventQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    indexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.indexes),
    name: cdktf.stringToTerraform(struct!.name),
    compute: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestQueryEventQueryComputeToTerraform)(struct!.compute),
    group_by: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupByToTerraform)(struct!.groupBy),
    search: dashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryEventQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryEventQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._search.internalValue = value.search;
    }
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

  // compute - computed: false, optional: false, required: true
  private _compute = new DashboardWidgetQueryValueDefinitionRequestQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable) {
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
  private _search = new DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQuerySearch) {
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
export interface DashboardWidgetQueryValueDefinitionRequestQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for metrics queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryMetricQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestQueryMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryMetricQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
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

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryMetricQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
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
export interface DashboardWidgetQueryValueDefinitionRequestQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_normalized_cpu Dashboard#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktf.IResolvable;
  /**
  * The number of hits to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort Dashboard#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#tag_filters Dashboard#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#text_filter Dashboard#text_filter}
  */
  readonly textFilter?: string;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestQueryProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    is_normalized_cpu: cdktf.booleanToTerraform(struct!.isNormalizedCpu),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    sort: cdktf.stringToTerraform(struct!.sort),
    tag_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tagFilters),
    text_filter: cdktf.stringToTerraform(struct!.textFilter),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQueryProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
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

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQueryProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
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
export interface DashboardWidgetQueryValueDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetQueryValueDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetQueryValueDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetQueryValueDefinitionRequestQueryProcessQuery;
}

export function dashboardWidgetQueryValueDefinitionRequestQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: dashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: dashboardWidgetQueryValueDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetQueryValueDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetQueryValueDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestQuery | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = undefined;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
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
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
      this._processQuery.internalValue = value.processQuery;
    }
  }

  // apm_dependency_stats_query - computed: false, optional: true, required: false
  private _apmDependencyStatsQuery = new DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: DashboardWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery) {
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
  private _apmResourceStatsQuery = new DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: DashboardWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery) {
    this._apmResourceStatsQuery.internalValue = value;
  }
  public resetApmResourceStatsQuery() {
    this._apmResourceStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmResourceStatsQueryInput() {
    return this._apmResourceStatsQuery.internalValue;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery = new DashboardWidgetQueryValueDefinitionRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: DashboardWidgetQueryValueDefinitionRequestQueryEventQuery) {
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
  private _metricQuery = new DashboardWidgetQueryValueDefinitionRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: DashboardWidgetQueryValueDefinitionRequestQueryMetricQuery) {
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
  private _processQuery = new DashboardWidgetQueryValueDefinitionRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetQueryValueDefinitionRequestQueryProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestQueryOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestRumQueryComputeQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQuery;
}

export function dashboardWidgetQueryValueDefinitionRequestRumQueryGroupByToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestRumQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestRumQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestRumQueryGroupByOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestRumQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestRumQueryMultiComputeToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestRumQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestRumQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestRumQueryMultiComputeOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestRumQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetQueryValueDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryValueDefinitionRequestRumQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestRumQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetQueryValueDefinitionRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestRumQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestRumQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestRumQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetQueryValueDefinitionRequestRumQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryValueDefinitionRequestRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryValueDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetQueryValueDefinitionRequestRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetQueryValueDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupByToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupByOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionRequestSecurityQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetQueryValueDefinitionRequestSecurityQueryToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequestSecurityQueryOutputReference | DashboardWidgetQueryValueDefinitionRequestSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequestSecurityQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequestSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetQueryValueDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetQueryValueDefinitionRequest {
  /**
  * The aggregator to use for time aggregation. Valid values are `avg`, `last`, `max`, `min`, `sum`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The metric query to use for this widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetQueryValueDefinitionRequestApmQuery;
  /**
  * audit_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#audit_query Dashboard#audit_query}
  */
  readonly auditQuery?: DashboardWidgetQueryValueDefinitionRequestAuditQuery;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetQueryValueDefinitionRequestConditionalFormats[] | cdktf.IResolvable;
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetQueryValueDefinitionRequestFormula[] | cdktf.IResolvable;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetQueryValueDefinitionRequestLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetQueryValueDefinitionRequestProcessQuery;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetQueryValueDefinitionRequestQuery[] | cdktf.IResolvable;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetQueryValueDefinitionRequestRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetQueryValueDefinitionRequestSecurityQuery;
}

export function dashboardWidgetQueryValueDefinitionRequestToTerraform(struct?: DashboardWidgetQueryValueDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetQueryValueDefinitionRequestApmQueryToTerraform(struct!.apmQuery),
    audit_query: dashboardWidgetQueryValueDefinitionRequestAuditQueryToTerraform(struct!.auditQuery),
    conditional_formats: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestConditionalFormatsToTerraform)(struct!.conditionalFormats),
    formula: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestFormulaToTerraform)(struct!.formula),
    log_query: dashboardWidgetQueryValueDefinitionRequestLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetQueryValueDefinitionRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestQueryToTerraform)(struct!.query),
    rum_query: dashboardWidgetQueryValueDefinitionRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetQueryValueDefinitionRequestSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export class DashboardWidgetQueryValueDefinitionRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetQueryValueDefinitionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._apmQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmQuery = this._apmQuery?.internalValue;
    }
    if (this._auditQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditQuery = this._auditQuery?.internalValue;
    }
    if (this._conditionalFormats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalFormats = this._conditionalFormats?.internalValue;
    }
    if (this._formula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula?.internalValue;
    }
    if (this._logQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQuery = this._logQuery?.internalValue;
    }
    if (this._processQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processQuery = this._processQuery?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._rumQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rumQuery = this._rumQuery?.internalValue;
    }
    if (this._securityQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityQuery = this._securityQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator = undefined;
      this._q = undefined;
      this._apmQuery.internalValue = undefined;
      this._auditQuery.internalValue = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._formula.internalValue = undefined;
      this._logQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._query.internalValue = undefined;
      this._rumQuery.internalValue = undefined;
      this._securityQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator = value.aggregator;
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._auditQuery.internalValue = value.auditQuery;
      this._conditionalFormats.internalValue = value.conditionalFormats;
      this._formula.internalValue = value.formula;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._query.internalValue = value.query;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
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

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // apm_query - computed: false, optional: true, required: false
  private _apmQuery = new DashboardWidgetQueryValueDefinitionRequestApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetQueryValueDefinitionRequestApmQuery) {
    this._apmQuery.internalValue = value;
  }
  public resetApmQuery() {
    this._apmQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmQueryInput() {
    return this._apmQuery.internalValue;
  }

  // audit_query - computed: false, optional: true, required: false
  private _auditQuery = new DashboardWidgetQueryValueDefinitionRequestAuditQueryOutputReference(this, "audit_query");
  public get auditQuery() {
    return this._auditQuery;
  }
  public putAuditQuery(value: DashboardWidgetQueryValueDefinitionRequestAuditQuery) {
    this._auditQuery.internalValue = value;
  }
  public resetAuditQuery() {
    this._auditQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditQueryInput() {
    return this._auditQuery.internalValue;
  }

  // conditional_formats - computed: false, optional: true, required: false
  private _conditionalFormats = new DashboardWidgetQueryValueDefinitionRequestConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetQueryValueDefinitionRequestConditionalFormats[] | cdktf.IResolvable) {
    this._conditionalFormats.internalValue = value;
  }
  public resetConditionalFormats() {
    this._conditionalFormats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalFormatsInput() {
    return this._conditionalFormats.internalValue;
  }

  // formula - computed: false, optional: true, required: false
  private _formula = new DashboardWidgetQueryValueDefinitionRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: DashboardWidgetQueryValueDefinitionRequestFormula[] | cdktf.IResolvable) {
    this._formula.internalValue = value;
  }
  public resetFormula() {
    this._formula.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula.internalValue;
  }

  // log_query - computed: false, optional: true, required: false
  private _logQuery = new DashboardWidgetQueryValueDefinitionRequestLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetQueryValueDefinitionRequestLogQuery) {
    this._logQuery.internalValue = value;
  }
  public resetLogQuery() {
    this._logQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryInput() {
    return this._logQuery.internalValue;
  }

  // process_query - computed: false, optional: true, required: false
  private _processQuery = new DashboardWidgetQueryValueDefinitionRequestProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetQueryValueDefinitionRequestProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new DashboardWidgetQueryValueDefinitionRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetQueryValueDefinitionRequestQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // rum_query - computed: false, optional: true, required: false
  private _rumQuery = new DashboardWidgetQueryValueDefinitionRequestRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetQueryValueDefinitionRequestRumQuery) {
    this._rumQuery.internalValue = value;
  }
  public resetRumQuery() {
    this._rumQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumQueryInput() {
    return this._rumQuery.internalValue;
  }

  // security_query - computed: false, optional: true, required: false
  private _securityQuery = new DashboardWidgetQueryValueDefinitionRequestSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetQueryValueDefinitionRequestSecurityQuery) {
    this._securityQuery.internalValue = value;
  }
  public resetSecurityQuery() {
    this._securityQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQueryInput() {
    return this._securityQuery.internalValue;
  }
}

export class DashboardWidgetQueryValueDefinitionRequestList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetQueryValueDefinitionRequest[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetQueryValueDefinitionRequestOutputReference {
    return new DashboardWidgetQueryValueDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxis {
  /**
  * Always include zero or fit the axis to the data range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#include_zero Dashboard#include_zero}
  */
  readonly includeZero?: boolean | cdktf.IResolvable;
  /**
  * The label of the axis to display on the graph.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * Specify the maximum value to show on the Y-axis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#max Dashboard#max}
  */
  readonly max?: string;
  /**
  * Specify the minimum value to show on the Y-axis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#min Dashboard#min}
  */
  readonly min?: string;
  /**
  * Specify the scale type, options: `linear`, `log`, `pow`, `sqrt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#scale Dashboard#scale}
  */
  readonly scale?: string;
}

export function dashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxisToTerraform(struct?: DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxisOutputReference | DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_zero: cdktf.booleanToTerraform(struct!.includeZero),
    label: cdktf.stringToTerraform(struct!.label),
    max: cdktf.stringToTerraform(struct!.max),
    min: cdktf.stringToTerraform(struct!.min),
    scale: cdktf.stringToTerraform(struct!.scale),
  }
}

export class DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeZero = this._includeZero;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._scale !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeZero = undefined;
      this._label = undefined;
      this._max = undefined;
      this._min = undefined;
      this._scale = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeZero = value.includeZero;
      this._label = value.label;
      this._max = value.max;
      this._min = value.min;
      this._scale = value.scale;
    }
  }

  // include_zero - computed: false, optional: true, required: false
  private _includeZero?: boolean | cdktf.IResolvable; 
  public get includeZero() {
    return this.getBooleanAttribute('include_zero');
  }
  public set includeZero(value: boolean | cdktf.IResolvable) {
    this._includeZero = value;
  }
  public resetIncludeZero() {
    this._includeZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeZeroInput() {
    return this._includeZero;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max - computed: false, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // scale - computed: false, optional: true, required: false
  private _scale?: string; 
  public get scale() {
    return this.getStringAttribute('scale');
  }
  public set scale(value: string) {
    this._scale = value;
  }
  public resetScale() {
    this._scale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale;
  }
}
export interface DashboardWidgetQueryValueDefinitionTimeseriesBackground {
  /**
  * Whether the Timeseries is made using an area or bars. Valid values are `bars`, `area`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * yaxis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#yaxis Dashboard#yaxis}
  */
  readonly yaxis?: DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxis;
}

export function dashboardWidgetQueryValueDefinitionTimeseriesBackgroundToTerraform(struct?: DashboardWidgetQueryValueDefinitionTimeseriesBackgroundOutputReference | DashboardWidgetQueryValueDefinitionTimeseriesBackground): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    yaxis: dashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxisToTerraform(struct!.yaxis),
  }
}

export class DashboardWidgetQueryValueDefinitionTimeseriesBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinitionTimeseriesBackground | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._yaxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaxis = this._yaxis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinitionTimeseriesBackground | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._yaxis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._yaxis.internalValue = value.yaxis;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // yaxis - computed: false, optional: true, required: false
  private _yaxis = new DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxisOutputReference(this, "yaxis");
  public get yaxis() {
    return this._yaxis;
  }
  public putYaxis(value: DashboardWidgetQueryValueDefinitionTimeseriesBackgroundYaxis) {
    this._yaxis.internalValue = value;
  }
  public resetYaxis() {
    this._yaxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yaxisInput() {
    return this._yaxis.internalValue;
  }
}
export interface DashboardWidgetQueryValueDefinition {
  /**
  * A Boolean indicating whether to automatically scale the tile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#autoscale Dashboard#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * The unit for the value displayed in the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_unit Dashboard#custom_unit}
  */
  readonly customUnit?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The precision to use when displaying the tile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#precision Dashboard#precision}
  */
  readonly precision?: number;
  /**
  * The alignment of the widget's text. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#text_align Dashboard#text_align}
  */
  readonly textAlign?: string;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_link Dashboard#custom_link}
  */
  readonly customLink?: DashboardWidgetQueryValueDefinitionCustomLink[] | cdktf.IResolvable;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetQueryValueDefinitionRequest[] | cdktf.IResolvable;
  /**
  * timeseries_background block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#timeseries_background Dashboard#timeseries_background}
  */
  readonly timeseriesBackground?: DashboardWidgetQueryValueDefinitionTimeseriesBackground;
}

export function dashboardWidgetQueryValueDefinitionToTerraform(struct?: DashboardWidgetQueryValueDefinitionOutputReference | DashboardWidgetQueryValueDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale: cdktf.booleanToTerraform(struct!.autoscale),
    custom_unit: cdktf.stringToTerraform(struct!.customUnit),
    live_span: cdktf.stringToTerraform(struct!.liveSpan),
    precision: cdktf.numberToTerraform(struct!.precision),
    text_align: cdktf.stringToTerraform(struct!.textAlign),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    custom_link: cdktf.listMapper(dashboardWidgetQueryValueDefinitionCustomLinkToTerraform)(struct!.customLink),
    request: cdktf.listMapper(dashboardWidgetQueryValueDefinitionRequestToTerraform)(struct!.request),
    timeseries_background: dashboardWidgetQueryValueDefinitionTimeseriesBackgroundToTerraform(struct!.timeseriesBackground),
  }
}

export class DashboardWidgetQueryValueDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetQueryValueDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale;
    }
    if (this._customUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUnit = this._customUnit;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleAlign = this._titleAlign;
    }
    if (this._titleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleSize = this._titleSize;
    }
    if (this._customLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink = this._customLink?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._timeseriesBackground?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeseriesBackground = this._timeseriesBackground?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetQueryValueDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscale = undefined;
      this._customUnit = undefined;
      this._liveSpan = undefined;
      this._precision = undefined;
      this._textAlign = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink.internalValue = undefined;
      this._request.internalValue = undefined;
      this._timeseriesBackground.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscale = value.autoscale;
      this._customUnit = value.customUnit;
      this._liveSpan = value.liveSpan;
      this._precision = value.precision;
      this._textAlign = value.textAlign;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink.internalValue = value.customLink;
      this._request.internalValue = value.request;
      this._timeseriesBackground.internalValue = value.timeseriesBackground;
    }
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // custom_unit - computed: false, optional: true, required: false
  private _customUnit?: string; 
  public get customUnit() {
    return this.getStringAttribute('custom_unit');
  }
  public set customUnit(value: string) {
    this._customUnit = value;
  }
  public resetCustomUnit() {
    this._customUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUnitInput() {
    return this._customUnit;
  }

  // live_span - computed: false, optional: true, required: false
  private _liveSpan?: string; 
  public get liveSpan() {
    return this.getStringAttribute('live_span');
  }
  public set liveSpan(value: string) {
    this._liveSpan = value;
  }
  public resetLiveSpan() {
    this._liveSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liveSpanInput() {
    return this._liveSpan;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }

  // text_align - computed: false, optional: true, required: false
  private _textAlign?: string; 
  public get textAlign() {
    return this.getStringAttribute('text_align');
  }
  public set textAlign(value: string) {
    this._textAlign = value;
  }
  public resetTextAlign() {
    this._textAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignInput() {
    return this._textAlign;
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

  // title_align - computed: false, optional: true, required: false
  private _titleAlign?: string; 
  public get titleAlign() {
    return this.getStringAttribute('title_align');
  }
  public set titleAlign(value: string) {
    this._titleAlign = value;
  }
  public resetTitleAlign() {
    this._titleAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleAlignInput() {
    return this._titleAlign;
  }

  // title_size - computed: false, optional: true, required: false
  private _titleSize?: string; 
  public get titleSize() {
    return this.getStringAttribute('title_size');
  }
  public set titleSize(value: string) {
    this._titleSize = value;
  }
  public resetTitleSize() {
    this._titleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleSizeInput() {
    return this._titleSize;
  }

  // custom_link - computed: false, optional: true, required: false
  private _customLink = new DashboardWidgetQueryValueDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: DashboardWidgetQueryValueDefinitionCustomLink[] | cdktf.IResolvable) {
    this._customLink.internalValue = value;
  }
  public resetCustomLink() {
    this._customLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinkInput() {
    return this._customLink.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DashboardWidgetQueryValueDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DashboardWidgetQueryValueDefinitionRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // timeseries_background - computed: false, optional: true, required: false
  private _timeseriesBackground = new DashboardWidgetQueryValueDefinitionTimeseriesBackgroundOutputReference(this, "timeseries_background");
  public get timeseriesBackground() {
    return this._timeseriesBackground;
  }
  public putTimeseriesBackground(value: DashboardWidgetQueryValueDefinitionTimeseriesBackground) {
    this._timeseriesBackground.internalValue = value;
  }
  public resetTimeseriesBackground() {
    this._timeseriesBackground.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeseriesBackgroundInput() {
    return this._timeseriesBackground.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionCustomLink {
  /**
  * The flag for toggling context menu link visibility.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_hidden Dashboard#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * The label for the custom link URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#link Dashboard#link}
  */
  readonly link?: string;
  /**
  * The label id that refers to a context menu link item. When override_label is provided, the client request omits the label field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#override_label Dashboard#override_label}
  */
  readonly overrideLabel?: string;
}

export function dashboardWidgetScatterplotDefinitionCustomLinkToTerraform(struct?: DashboardWidgetScatterplotDefinitionCustomLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_hidden: cdktf.booleanToTerraform(struct!.isHidden),
    label: cdktf.stringToTerraform(struct!.label),
    link: cdktf.stringToTerraform(struct!.link),
    override_label: cdktf.stringToTerraform(struct!.overrideLabel),
  }
}

export class DashboardWidgetScatterplotDefinitionCustomLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionCustomLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isHidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHidden = this._isHidden;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._overrideLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideLabel = this._overrideLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionCustomLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isHidden = undefined;
      this._label = undefined;
      this._link = undefined;
      this._overrideLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isHidden = value.isHidden;
      this._label = value.label;
      this._link = value.link;
      this._overrideLabel = value.overrideLabel;
    }
  }

  // is_hidden - computed: false, optional: true, required: false
  private _isHidden?: boolean | cdktf.IResolvable; 
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }
  public set isHidden(value: boolean | cdktf.IResolvable) {
    this._isHidden = value;
  }
  public resetIsHidden() {
    this._isHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHiddenInput() {
    return this._isHidden;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // override_label - computed: false, optional: true, required: false
  private _overrideLabel?: string; 
  public get overrideLabel() {
    return this.getStringAttribute('override_label');
  }
  public set overrideLabel(value: string) {
    this._overrideLabel = value;
  }
  public resetOverrideLabel() {
    this._overrideLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLabelInput() {
    return this._overrideLabel;
  }
}

export class DashboardWidgetScatterplotDefinitionCustomLinkList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionCustomLink[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionCustomLinkOutputReference {
    return new DashboardWidgetScatterplotDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormula {
  /**
  * An expression alias.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * Dimension of the Scatterplot. Valid values are `x`, `y`, `radius`, `color`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#dimension Dashboard#dimension}
  */
  readonly dimension: string;
  /**
  * A string expression built from queries, formulas, and functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula_expression Dashboard#formula_expression}
  */
  readonly formulaExpression: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableFormulaToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    dimension: cdktf.stringToTerraform(struct!.dimension),
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormulaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormula | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._formulaExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.formulaExpression = this._formulaExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormula | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._dimension = undefined;
      this._formulaExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._dimension = value.dimension;
      this._formulaExpression = value.formulaExpression;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // formula_expression - computed: false, optional: false, required: true
  private _formulaExpression?: string; 
  public get formulaExpression() {
    return this.getStringAttribute('formula_expression');
  }
  public set formulaExpression(value: string) {
    this._formulaExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaExpressionInput() {
    return this._formulaExpression;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormulaList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormula[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormulaOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQuery {
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_upstream Dashboard#is_upstream}
  */
  readonly isUpstream?: boolean | cdktf.IResolvable;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    env: cdktf.stringToTerraform(struct!.env),
    is_upstream: cdktf.booleanToTerraform(struct!.isUpstream),
    name: cdktf.stringToTerraform(struct!.name),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktf.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktf.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    service: cdktf.stringToTerraform(struct!.service),
    stat: cdktf.stringToTerraform(struct!.stat),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._isUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUpstream = this._isUpstream;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._primaryTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagName = this._primaryTagName;
    }
    if (this._primaryTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagValue = this._primaryTagValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._env = undefined;
      this._isUpstream = undefined;
      this._name = undefined;
      this._operationName = undefined;
      this._primaryTagName = undefined;
      this._primaryTagValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._env = value.env;
      this._isUpstream = value.isUpstream;
      this._name = value.name;
      this._operationName = value.operationName;
      this._primaryTagName = value.primaryTagName;
      this._primaryTagValue = value.primaryTagValue;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._stat = value.stat;
    }
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

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // is_upstream - computed: false, optional: true, required: false
  private _isUpstream?: boolean | cdktf.IResolvable; 
  public get isUpstream() {
    return this.getBooleanAttribute('is_upstream');
  }
  public set isUpstream(value: boolean | cdktf.IResolvable) {
    this._isUpstream = value;
  }
  public resetIsUpstream() {
    this._isUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpstreamInput() {
    return this._isUpstream;
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

  // operation_name - computed: false, optional: false, required: true
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // primary_tag_name - computed: false, optional: true, required: false
  private _primaryTagName?: string; 
  public get primaryTagName() {
    return this.getStringAttribute('primary_tag_name');
  }
  public set primaryTagName(value: string) {
    this._primaryTagName = value;
  }
  public resetPrimaryTagName() {
    this._primaryTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagNameInput() {
    return this._primaryTagName;
  }

  // primary_tag_value - computed: false, optional: true, required: false
  private _primaryTagValue?: string; 
  public get primaryTagValue() {
    return this.getStringAttribute('primary_tag_value');
  }
  public set primaryTagValue(value: string) {
    this._primaryTagValue = value;
  }
  public resetPrimaryTagValue() {
    this._primaryTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagValueInput() {
    return this._primaryTagValue;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQuery {
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    env: cdktf.stringToTerraform(struct!.env),
    group_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupBy),
    name: cdktf.stringToTerraform(struct!.name),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktf.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktf.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    service: cdktf.stringToTerraform(struct!.service),
    stat: cdktf.stringToTerraform(struct!.stat),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationName = this._operationName;
    }
    if (this._primaryTagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagName = this._primaryTagName;
    }
    if (this._primaryTagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTagValue = this._primaryTagValue;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._env = undefined;
      this._groupBy = undefined;
      this._name = undefined;
      this._operationName = undefined;
      this._primaryTagName = undefined;
      this._primaryTagValue = undefined;
      this._resourceName = undefined;
      this._service = undefined;
      this._stat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._env = value.env;
      this._groupBy = value.groupBy;
      this._name = value.name;
      this._operationName = value.operationName;
      this._primaryTagName = value.primaryTagName;
      this._primaryTagValue = value.primaryTagValue;
      this._resourceName = value.resourceName;
      this._service = value.service;
      this._stat = value.stat;
    }
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

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // operation_name - computed: false, optional: true, required: false
  private _operationName?: string; 
  public get operationName() {
    return this.getStringAttribute('operation_name');
  }
  public set operationName(value: string) {
    this._operationName = value;
  }
  public resetOperationName() {
    this._operationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNameInput() {
    return this._operationName;
  }

  // primary_tag_name - computed: false, optional: true, required: false
  private _primaryTagName?: string; 
  public get primaryTagName() {
    return this.getStringAttribute('primary_tag_name');
  }
  public set primaryTagName(value: string) {
    this._primaryTagName = value;
  }
  public resetPrimaryTagName() {
    this._primaryTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagNameInput() {
    return this._primaryTagName;
  }

  // primary_tag_value - computed: false, optional: true, required: false
  private _primaryTagValue?: string; 
  public get primaryTagValue() {
    return this.getStringAttribute('primary_tag_value');
  }
  public set primaryTagValue(value: string) {
    this._primaryTagValue = value;
  }
  public resetPrimaryTagValue() {
    this._primaryTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagValueInput() {
    return this._primaryTagValue;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // stat - computed: false, optional: false, required: true
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    interval: cdktf.numberToTerraform(struct!.interval),
    metric: cdktf.stringToTerraform(struct!.metric),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._interval = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._interval = value.interval;
      this._metric = value.metric;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySortOutputReference | DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBy {
  /**
  * The event facet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySort;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBySort) {
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

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearch {
  /**
  * The events search string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearchToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearchOutputReference | DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryCompute[] | cdktf.IResolvable;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBy[] | cdktf.IResolvable;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearch;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    indexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.indexes),
    name: cdktf.stringToTerraform(struct!.name),
    compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryComputeToTerraform)(struct!.compute),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupByToTerraform)(struct!.groupBy),
    search: dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearchToTerraform(struct!.search),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._compute.internalValue = value.compute;
      this._groupBy.internalValue = value.groupBy;
      this._search.internalValue = value.search;
    }
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

  // compute - computed: false, optional: false, required: true
  private _compute = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryCompute[] | cdktf.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryGroupBy[] | cdktf.IResolvable) {
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
  private _search = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuerySearch) {
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
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for metrics queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
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

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
      this._dataSource = undefined;
      this._name = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregator = value.aggregator;
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
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_normalized_cpu Dashboard#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktf.IResolvable;
  /**
  * The number of hits to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort Dashboard#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#tag_filters Dashboard#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#text_filter Dashboard#text_filter}
  */
  readonly textFilter?: string;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    is_normalized_cpu: cdktf.booleanToTerraform(struct!.isNormalizedCpu),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    sort: cdktf.stringToTerraform(struct!.sort),
    tag_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tagFilters),
    text_filter: cdktf.stringToTerraform(struct!.textFilter),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
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

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregator = undefined;
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
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTableQuery {
  /**
  * apm_dependency_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQueryToTerraform(struct!.processQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQuery | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = undefined;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
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
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
      this._processQuery.internalValue = value.processQuery;
    }
  }

  // apm_dependency_stats_query - computed: false, optional: true, required: false
  private _apmDependencyStatsQuery = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmDependencyStatsQuery) {
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
  private _apmResourceStatsQuery = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryApmResourceStatsQuery) {
    this._apmResourceStatsQuery.internalValue = value;
  }
  public resetApmResourceStatsQuery() {
    this._apmResourceStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmResourceStatsQueryInput() {
    return this._apmResourceStatsQuery.internalValue;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryEventQuery) {
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
  private _metricQuery = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryMetricQuery) {
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
  private _processQuery = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestScatterplotTableQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestScatterplotTable {
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormula[] | cdktf.IResolvable;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQuery[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestScatterplotTableToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestScatterplotTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    formula: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestScatterplotTableFormulaToTerraform)(struct!.formula),
    query: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryToTerraform)(struct!.query),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestScatterplotTable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTable | cdktf.IResolvable | undefined) {
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
  private _formula = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableFormula[] | cdktf.IResolvable) {
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
  private _query = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTableQuery[] | cdktf.IResolvable) {
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

export class DashboardWidgetScatterplotDefinitionRequestScatterplotTableList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestScatterplotTable[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestScatterplotTableOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestScatterplotTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestXApmQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXApmQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXApmQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestXApmQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXApmQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXApmQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXApmQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXApmQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXApmQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestXApmQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestXLogQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXLogQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXLogQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestXLogQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXLogQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXLogQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXLogQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXLogQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestXLogQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXProcessQuery {
  /**
  * A list of processes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetScatterplotDefinitionRequestXProcessQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXProcessQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.filterBy),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    search_by: cdktf.stringToTerraform(struct!.searchBy),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._searchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBy = this._searchBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterBy = undefined;
      this._limit = undefined;
      this._metric = undefined;
      this._searchBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterBy = value.filterBy;
      this._limit = value.limit;
      this._metric = value.metric;
      this._searchBy = value.searchBy;
    }
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy?: string[]; 
  public get filterBy() {
    return this.getListAttribute('filter_by');
  }
  public set filterBy(value: string[]) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
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

  // search_by - computed: false, optional: true, required: false
  private _searchBy?: string; 
  public get searchBy() {
    return this.getStringAttribute('search_by');
  }
  public set searchBy(value: string) {
    this._searchBy = value;
  }
  public resetSearchBy() {
    this._searchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchByInput() {
    return this._searchBy;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestXRumQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXRumQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXRumQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestXRumQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXRumQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXRumQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXRumQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXRumQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestXRumQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestXSecurityQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestXSecurityQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestXSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestXSecurityQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestX {
  /**
  * Aggregator used for the request. Valid values are `avg`, `last`, `max`, `min`, `sum`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The metric query to use for this widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetScatterplotDefinitionRequestXApmQuery;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetScatterplotDefinitionRequestXLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetScatterplotDefinitionRequestXProcessQuery;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetScatterplotDefinitionRequestXRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetScatterplotDefinitionRequestXSecurityQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestXToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestX | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetScatterplotDefinitionRequestXApmQueryToTerraform(struct!.apmQuery),
    log_query: dashboardWidgetScatterplotDefinitionRequestXLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetScatterplotDefinitionRequestXProcessQueryToTerraform(struct!.processQuery),
    rum_query: dashboardWidgetScatterplotDefinitionRequestXRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetScatterplotDefinitionRequestXSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestX | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._apmQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmQuery = this._apmQuery?.internalValue;
    }
    if (this._logQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQuery = this._logQuery?.internalValue;
    }
    if (this._processQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processQuery = this._processQuery?.internalValue;
    }
    if (this._rumQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rumQuery = this._rumQuery?.internalValue;
    }
    if (this._securityQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityQuery = this._securityQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestX | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator = undefined;
      this._q = undefined;
      this._apmQuery.internalValue = undefined;
      this._logQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._rumQuery.internalValue = undefined;
      this._securityQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator = value.aggregator;
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
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

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // apm_query - computed: false, optional: true, required: false
  private _apmQuery = new DashboardWidgetScatterplotDefinitionRequestXApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetScatterplotDefinitionRequestXApmQuery) {
    this._apmQuery.internalValue = value;
  }
  public resetApmQuery() {
    this._apmQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmQueryInput() {
    return this._apmQuery.internalValue;
  }

  // log_query - computed: false, optional: true, required: false
  private _logQuery = new DashboardWidgetScatterplotDefinitionRequestXLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetScatterplotDefinitionRequestXLogQuery) {
    this._logQuery.internalValue = value;
  }
  public resetLogQuery() {
    this._logQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryInput() {
    return this._logQuery.internalValue;
  }

  // process_query - computed: false, optional: true, required: false
  private _processQuery = new DashboardWidgetScatterplotDefinitionRequestXProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetScatterplotDefinitionRequestXProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // rum_query - computed: false, optional: true, required: false
  private _rumQuery = new DashboardWidgetScatterplotDefinitionRequestXRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetScatterplotDefinitionRequestXRumQuery) {
    this._rumQuery.internalValue = value;
  }
  public resetRumQuery() {
    this._rumQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumQueryInput() {
    return this._rumQuery.internalValue;
  }

  // security_query - computed: false, optional: true, required: false
  private _securityQuery = new DashboardWidgetScatterplotDefinitionRequestXSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetScatterplotDefinitionRequestXSecurityQuery) {
    this._securityQuery.internalValue = value;
  }
  public resetSecurityQuery() {
    this._securityQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQueryInput() {
    return this._securityQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestXList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestX[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestXOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestXOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestYApmQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYApmQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYApmQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestYApmQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYApmQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYApmQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYApmQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYApmQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYApmQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestYApmQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestYLogQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYLogQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYLogQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestYLogQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYLogQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYLogQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYLogQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYLogQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestYLogQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYProcessQuery {
  /**
  * A list of processes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetScatterplotDefinitionRequestYProcessQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYProcessQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_by: cdktf.listMapper(cdktf.stringToTerraform)(struct!.filterBy),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    search_by: cdktf.stringToTerraform(struct!.searchBy),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYProcessQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._searchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBy = this._searchBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYProcessQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterBy = undefined;
      this._limit = undefined;
      this._metric = undefined;
      this._searchBy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterBy = value.filterBy;
      this._limit = value.limit;
      this._metric = value.metric;
      this._searchBy = value.searchBy;
    }
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy?: string[]; 
  public get filterBy() {
    return this.getListAttribute('filter_by');
  }
  public set filterBy(value: string[]) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
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

  // search_by - computed: false, optional: true, required: false
  private _searchBy?: string; 
  public get searchBy() {
    return this.getStringAttribute('search_by');
  }
  public set searchBy(value: string) {
    this._searchBy = value;
  }
  public resetSearchBy() {
    this._searchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchByInput() {
    return this._searchBy;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestYRumQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYRumQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYRumQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestYRumQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYRumQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYRumQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYRumQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYRumQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestYRumQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._facet = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // order - computed: false, optional: false, required: true
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupByToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBy | cdktf.IResolvable | undefined {
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
    if (this._sortQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortQuery = this._sortQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facet = undefined;
      this._limit = undefined;
      this._sortQuery.internalValue = undefined;
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
      this._sortQuery.internalValue = value.sortQuery;
    }
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
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

  // sort_query - computed: false, optional: true, required: false
  private _sortQuery = new DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBySortQuery) {
    this._sortQuery.internalValue = value;
  }
  public resetSortQuery() {
    this._sortQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortQueryInput() {
    return this._sortQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupByOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiCompute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    facet: cdktf.stringToTerraform(struct!.facet),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiCompute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiCompute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._facet = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._facet = value.facet;
      this._interval = value.interval;
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

  // facet - computed: false, optional: true, required: false
  private _facet?: string; 
  public get facet() {
    return this.getStringAttribute('facet');
  }
  public set facet(value: string) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestYSecurityQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestYSecurityQueryToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryOutputReference | DashboardWidgetScatterplotDefinitionRequestYSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestYSecurityQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._searchQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchQuery = this._searchQuery;
    }
    if (this._computeQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeQuery = this._computeQuery?.internalValue;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    if (this._multiCompute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy.internalValue = undefined;
      this._multiCompute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy.internalValue = value.groupBy;
      this._multiCompute.internalValue = value.multiCompute;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // search_query - computed: false, optional: true, required: false
  private _searchQuery?: string; 
  public get searchQuery() {
    return this.getStringAttribute('search_query');
  }
  public set searchQuery(value: string) {
    this._searchQuery = value;
  }
  public resetSearchQuery() {
    this._searchQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchQueryInput() {
    return this._searchQuery;
  }

  // compute_query - computed: false, optional: true, required: false
  private _computeQuery = new DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryComputeQuery) {
    this._computeQuery.internalValue = value;
  }
  public resetComputeQuery() {
    this._computeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeQueryInput() {
    return this._computeQuery.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute = new DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute.internalValue = value;
  }
  public resetMultiCompute() {
    this._multiCompute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute.internalValue;
  }
}
export interface DashboardWidgetScatterplotDefinitionRequestY {
  /**
  * Aggregator used for the request. Valid values are `avg`, `last`, `max`, `min`, `sum`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The metric query to use for this widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetScatterplotDefinitionRequestYApmQuery;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetScatterplotDefinitionRequestYLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetScatterplotDefinitionRequestYProcessQuery;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetScatterplotDefinitionRequestYRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetScatterplotDefinitionRequestYSecurityQuery;
}

export function dashboardWidgetScatterplotDefinitionRequestYToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetScatterplotDefinitionRequestYApmQueryToTerraform(struct!.apmQuery),
    log_query: dashboardWidgetScatterplotDefinitionRequestYLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetScatterplotDefinitionRequestYProcessQueryToTerraform(struct!.processQuery),
    rum_query: dashboardWidgetScatterplotDefinitionRequestYRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetScatterplotDefinitionRequestYSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequestY | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator;
    }
    if (this._q !== undefined) {
      hasAnyValues = true;
      internalValueResult.q = this._q;
    }
    if (this._apmQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmQuery = this._apmQuery?.internalValue;
    }
    if (this._logQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQuery = this._logQuery?.internalValue;
    }
    if (this._processQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processQuery = this._processQuery?.internalValue;
    }
    if (this._rumQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rumQuery = this._rumQuery?.internalValue;
    }
    if (this._securityQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityQuery = this._securityQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequestY | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator = undefined;
      this._q = undefined;
      this._apmQuery.internalValue = undefined;
      this._logQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._rumQuery.internalValue = undefined;
      this._securityQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator = value.aggregator;
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
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

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // apm_query - computed: false, optional: true, required: false
  private _apmQuery = new DashboardWidgetScatterplotDefinitionRequestYApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetScatterplotDefinitionRequestYApmQuery) {
    this._apmQuery.internalValue = value;
  }
  public resetApmQuery() {
    this._apmQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmQueryInput() {
    return this._apmQuery.internalValue;
  }

  // log_query - computed: false, optional: true, required: false
  private _logQuery = new DashboardWidgetScatterplotDefinitionRequestYLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetScatterplotDefinitionRequestYLogQuery) {
    this._logQuery.internalValue = value;
  }
  public resetLogQuery() {
    this._logQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryInput() {
    return this._logQuery.internalValue;
  }

  // process_query - computed: false, optional: true, required: false
  private _processQuery = new DashboardWidgetScatterplotDefinitionRequestYProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetScatterplotDefinitionRequestYProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // rum_query - computed: false, optional: true, required: false
  private _rumQuery = new DashboardWidgetScatterplotDefinitionRequestYRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetScatterplotDefinitionRequestYRumQuery) {
    this._rumQuery.internalValue = value;
  }
  public resetRumQuery() {
    this._rumQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumQueryInput() {
    return this._rumQuery.internalValue;
  }

  // security_query - computed: false, optional: true, required: false
  private _securityQuery = new DashboardWidgetScatterplotDefinitionRequestYSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetScatterplotDefinitionRequestYSecurityQuery) {
    this._securityQuery.internalValue = value;
  }
  public resetSecurityQuery() {
    this._securityQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQueryInput() {
    return this._securityQuery.internalValue;
  }
}

export class DashboardWidgetScatterplotDefinitionRequestYList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetScatterplotDefinitionRequestY[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetScatterplotDefinitionRequestYOutputReference {
    return new DashboardWidgetScatterplotDefinitionRequestYOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetScatterplotDefinitionRequest {
  /**
  * scatterplot_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#scatterplot_table Dashboard#scatterplot_table}
  */
  readonly scatterplotTable?: DashboardWidgetScatterplotDefinitionRequestScatterplotTable[] | cdktf.IResolvable;
  /**
  * x block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#x Dashboard#x}
  */
  readonly x?: DashboardWidgetScatterplotDefinitionRequestX[] | cdktf.IResolvable;
  /**
  * y block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#y Dashboard#y}
  */
  readonly y?: DashboardWidgetScatterplotDefinitionRequestY[] | cdktf.IResolvable;
}

export function dashboardWidgetScatterplotDefinitionRequestToTerraform(struct?: DashboardWidgetScatterplotDefinitionRequestOutputReference | DashboardWidgetScatterplotDefinitionRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scatterplot_table: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestScatterplotTableToTerraform)(struct!.scatterplotTable),
    x: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestXToTerraform)(struct!.x),
    y: cdktf.listMapper(dashboardWidgetScatterplotDefinitionRequestYToTerraform)(struct!.y),
  }
}

export class DashboardWidgetScatterplotDefinitionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetScatterplotDefinitionRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scatterplotTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scatterplotTable = this._scatterplotTable?.internalValue;
    }
    if (this._x?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x?.internalValue;
    }
    if (this._y?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetScatterplotDefinitionRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scatterplotTable.internalValue = undefined;
      this._x.internalValue = undefined;
      this._y.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scatterplotTable.internalValue = value.scatterplotTable;
      this._x.internalValue = value.x;
      this._y.internalValue = value.y;
    }
  }

  // scatterplot_table - computed: false, optional: true, required: false
  private _scatterplotTable = new DashboardWidgetScatterplotDefinitionRequestScatterplotTableList(this, "scatterplot_table", false);
  public get scatterplotTable() {
    return this._scatterplotTable;
  }
  public putScatterplotTable(value: DashboardWidgetScatterplotDefinitionRequestScatterplotTable[] | cdktf.IResolvable) {
    this._scatterplotTable.internalValue = value;
  }
  public resetScatterplotTable() {
    this._scatterplotTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scatterplotTableInput() {
    return this._scatterplotTable.internalValue;
  }

  // x - computed: false, optional: true, required: false
  private _x = new DashboardWidgetScatterplotDefinitionRequestXList(this, "x", false);
  public get x() {
    return this._x;
  }
  public putX(value: DashboardWidgetScatterplotDefinitionRequestX[] | cdktf.IResolvable) {
    this._x.internalValue = value;
  }
  public resetX() {
    this._x.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x.internalValue;
  }

  // y - computed: false, optional: true, required: false
  private _y = new DashboardWidgetScatterplotDefinitionRequestYList(this, "y", false);
  public get y() {
    return this._y;
  }
  public putY(value: DashboardWidgetScatterplotDefinitionRequestY[] | cdktf.IResolvable) {
    this._y.internalValue = value;
  }
  public resetY() {
    this._y.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y.internalValue;
  }
}
