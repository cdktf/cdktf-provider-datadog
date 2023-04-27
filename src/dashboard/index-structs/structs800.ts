import * as cdktf from 'cdktf';
import { DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBySortQuery,
dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBySortQueryToTerraform,
DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBySortQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryComputeQuery,
dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryComputeQueryToTerraform,
DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryComputeQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillApmQuery,
dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillApmQueryToTerraform,
DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillApmQueryOutputReference,
DashboardWidgetGroupDefinitionWidgetHostmapDefinitionCustomLink,
dashboardWidgetGroupDefinitionWidgetHostmapDefinitionCustomLinkToTerraform,
DashboardWidgetGroupDefinitionWidgetHostmapDefinitionCustomLinkList } from './structs400'
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQuery {
  /**
  * A list of processes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterBy),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    search_by: cdktf.stringToTerraform(struct!.searchBy),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFill {
  /**
  * The metric query to use for this widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillApmQuery;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQuery;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFill | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillApmQueryToTerraform(struct!.apmQuery),
    log_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQueryToTerraform(struct!.processQuery),
    rum_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFill | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFill | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
    }
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
  private _apmQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillApmQuery) {
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
  private _logQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillLogQuery) {
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
  private _processQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillProcessQuery) {
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
  private _rumQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillRumQuery) {
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
  private _securityQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillSecurityQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFill[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQuery {
  /**
  * A list of processes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterBy),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    search_by: cdktf.stringToTerraform(struct!.searchBy),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSize {
  /**
  * The metric query to use for this widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQuery;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQuery;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQuery;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryToTerraform(struct!.apmQuery),
    log_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQueryToTerraform(struct!.processQuery),
    rum_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._q = value.q;
      this._apmQuery.internalValue = value.apmQuery;
      this._logQuery.internalValue = value.logQuery;
      this._processQuery.internalValue = value.processQuery;
      this._rumQuery.internalValue = value.rumQuery;
      this._securityQuery.internalValue = value.securityQuery;
    }
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
  private _apmQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeApmQuery) {
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
  private _logQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeLogQuery) {
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
  private _processQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeProcessQuery) {
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
  private _rumQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeRumQuery) {
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
  private _securityQuery = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeSecurityQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSize[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequest {
  /**
  * fill block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#fill Dashboard#fill}
  */
  readonly fill?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFill[] | cdktf.IResolvable;
  /**
  * size block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#size Dashboard#size}
  */
  readonly size?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSize[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fill: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillToTerraform, true)(struct!.fill),
    size: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeToTerraform, true)(struct!.size),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fill?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fill = this._fill?.internalValue;
    }
    if (this._size?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fill.internalValue = undefined;
      this._size.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fill.internalValue = value.fill;
      this._size.internalValue = value.size;
    }
  }

  // fill - computed: false, optional: true, required: false
  private _fill = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFillList(this, "fill", false);
  public get fill() {
    return this._fill;
  }
  public putFill(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestFill[] | cdktf.IResolvable) {
    this._fill.internalValue = value;
  }
  public resetFill() {
    this._fill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillInput() {
    return this._fill.internalValue;
  }

  // size - computed: false, optional: true, required: false
  private _size = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSizeList(this, "size", false);
  public get size() {
    return this._size;
  }
  public putSize(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestSize[] | cdktf.IResolvable) {
    this._size.internalValue = value;
  }
  public resetSize() {
    this._size.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyle {
  /**
  * The max value to use to color the map.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#fill_max Dashboard#fill_max}
  */
  readonly fillMax?: string;
  /**
  * The min value to use to color the map.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#fill_min Dashboard#fill_min}
  */
  readonly fillMin?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette?: string;
  /**
  * A Boolean indicating whether to flip the palette tones.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette_flip Dashboard#palette_flip}
  */
  readonly paletteFlip?: boolean | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyleToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyleOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fill_max: cdktf.stringToTerraform(struct!.fillMax),
    fill_min: cdktf.stringToTerraform(struct!.fillMin),
    palette: cdktf.stringToTerraform(struct!.palette),
    palette_flip: cdktf.booleanToTerraform(struct!.paletteFlip),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fillMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillMax = this._fillMax;
    }
    if (this._fillMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillMin = this._fillMin;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._paletteFlip !== undefined) {
      hasAnyValues = true;
      internalValueResult.paletteFlip = this._paletteFlip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fillMax = undefined;
      this._fillMin = undefined;
      this._palette = undefined;
      this._paletteFlip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fillMax = value.fillMax;
      this._fillMin = value.fillMin;
      this._palette = value.palette;
      this._paletteFlip = value.paletteFlip;
    }
  }

  // fill_max - computed: false, optional: true, required: false
  private _fillMax?: string; 
  public get fillMax() {
    return this.getStringAttribute('fill_max');
  }
  public set fillMax(value: string) {
    this._fillMax = value;
  }
  public resetFillMax() {
    this._fillMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillMaxInput() {
    return this._fillMax;
  }

  // fill_min - computed: false, optional: true, required: false
  private _fillMin?: string; 
  public get fillMin() {
    return this.getStringAttribute('fill_min');
  }
  public set fillMin(value: string) {
    this._fillMin = value;
  }
  public resetFillMin() {
    this._fillMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillMinInput() {
    return this._fillMin;
  }

  // palette - computed: false, optional: true, required: false
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  public resetPalette() {
    this._palette = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // palette_flip - computed: false, optional: true, required: false
  private _paletteFlip?: boolean | cdktf.IResolvable; 
  public get paletteFlip() {
    return this.getBooleanAttribute('palette_flip');
  }
  public set paletteFlip(value: boolean | cdktf.IResolvable) {
    this._paletteFlip = value;
  }
  public resetPaletteFlip() {
    this._paletteFlip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteFlipInput() {
    return this._paletteFlip;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetHostmapDefinition {
  /**
  * The list of tags to group nodes by.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group Dashboard#group}
  */
  readonly group?: string[];
  /**
  * A Boolean indicating whether to show ungrouped nodes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#no_group_hosts Dashboard#no_group_hosts}
  */
  readonly noGroupHosts?: boolean | cdktf.IResolvable;
  /**
  * A Boolean indicating whether to show nodes with no metrics.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#no_metric_hosts Dashboard#no_metric_hosts}
  */
  readonly noMetricHosts?: boolean | cdktf.IResolvable;
  /**
  * The type of node used. Valid values are `host`, `container`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#node_type Dashboard#node_type}
  */
  readonly nodeType?: string;
  /**
  * The list of tags to filter nodes by.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#scope Dashboard#scope}
  */
  readonly scope?: string[];
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_link Dashboard#custom_link}
  */
  readonly customLink?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionCustomLink[] | cdktf.IResolvable;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequest;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyle;
}

export function dashboardWidgetGroupDefinitionWidgetHostmapDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetHostmapDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    no_group_hosts: cdktf.booleanToTerraform(struct!.noGroupHosts),
    no_metric_hosts: cdktf.booleanToTerraform(struct!.noMetricHosts),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    custom_link: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetHostmapDefinitionCustomLinkToTerraform, true)(struct!.customLink),
    request: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestToTerraform(struct!.request),
    style: dashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyleToTerraform(struct!.style),
  }
}

export class DashboardWidgetGroupDefinitionWidgetHostmapDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetHostmapDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._noGroupHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGroupHosts = this._noGroupHosts;
    }
    if (this._noMetricHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMetricHosts = this._noMetricHosts;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
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
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._noGroupHosts = undefined;
      this._noMetricHosts = undefined;
      this._nodeType = undefined;
      this._scope = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink.internalValue = undefined;
      this._request.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._noGroupHosts = value.noGroupHosts;
      this._noMetricHosts = value.noMetricHosts;
      this._nodeType = value.nodeType;
      this._scope = value.scope;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink.internalValue = value.customLink;
      this._request.internalValue = value.request;
      this._style.internalValue = value.style;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // no_group_hosts - computed: false, optional: true, required: false
  private _noGroupHosts?: boolean | cdktf.IResolvable; 
  public get noGroupHosts() {
    return this.getBooleanAttribute('no_group_hosts');
  }
  public set noGroupHosts(value: boolean | cdktf.IResolvable) {
    this._noGroupHosts = value;
  }
  public resetNoGroupHosts() {
    this._noGroupHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGroupHostsInput() {
    return this._noGroupHosts;
  }

  // no_metric_hosts - computed: false, optional: true, required: false
  private _noMetricHosts?: boolean | cdktf.IResolvable; 
  public get noMetricHosts() {
    return this.getBooleanAttribute('no_metric_hosts');
  }
  public set noMetricHosts(value: boolean | cdktf.IResolvable) {
    this._noMetricHosts = value;
  }
  public resetNoMetricHosts() {
    this._noMetricHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMetricHostsInput() {
    return this._noMetricHosts;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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
  private _customLink = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionCustomLink[] | cdktf.IResolvable) {
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
  private _request = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: DashboardWidgetGroupDefinitionWidgetHostmapDefinitionStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetIframeDefinition {
  /**
  * The URL to use as a data source for the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#url Dashboard#url}
  */
  readonly url: string;
}

export function dashboardWidgetGroupDefinitionWidgetIframeDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetIframeDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetIframeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class DashboardWidgetGroupDefinitionWidgetIframeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetIframeDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetIframeDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetImageDefinition {
  /**
  * Whether to display a background or not.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#has_background Dashboard#has_background}
  */
  readonly hasBackground?: boolean | cdktf.IResolvable;
  /**
  * Whether to display a border or not.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#has_border Dashboard#has_border}
  */
  readonly hasBorder?: boolean | cdktf.IResolvable;
  /**
  * The horizontal alignment for the widget. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#horizontal_align Dashboard#horizontal_align}
  */
  readonly horizontalAlign?: string;
  /**
  * The margins to use around the image. Note: `small` and `large` values are deprecated. Valid values are `sm`, `md`, `lg`, `small`, `large`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#margin Dashboard#margin}
  */
  readonly margin?: string;
  /**
  * The preferred method to adapt the dimensions of the image. The values are based on the image `object-fit` CSS properties. Note: `zoom`, `fit` and `center` values are deprecated. Valid values are `fill`, `contain`, `cover`, `none`, `scale-down`, `zoom`, `fit`, `center`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sizing Dashboard#sizing}
  */
  readonly sizing?: string;
  /**
  * The URL to use as a data source for the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#url Dashboard#url}
  */
  readonly url: string;
  /**
  * The URL in dark mode to use as a data source for the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#url_dark_theme Dashboard#url_dark_theme}
  */
  readonly urlDarkTheme?: string;
  /**
  * The vertical alignment for the widget. Valid values are `center`, `top`, `bottom`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#vertical_align Dashboard#vertical_align}
  */
  readonly verticalAlign?: string;
}

export function dashboardWidgetGroupDefinitionWidgetImageDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetImageDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetImageDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    has_background: cdktf.booleanToTerraform(struct!.hasBackground),
    has_border: cdktf.booleanToTerraform(struct!.hasBorder),
    horizontal_align: cdktf.stringToTerraform(struct!.horizontalAlign),
    margin: cdktf.stringToTerraform(struct!.margin),
    sizing: cdktf.stringToTerraform(struct!.sizing),
    url: cdktf.stringToTerraform(struct!.url),
    url_dark_theme: cdktf.stringToTerraform(struct!.urlDarkTheme),
    vertical_align: cdktf.stringToTerraform(struct!.verticalAlign),
  }
}

export class DashboardWidgetGroupDefinitionWidgetImageDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetImageDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hasBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasBackground = this._hasBackground;
    }
    if (this._hasBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasBorder = this._hasBorder;
    }
    if (this._horizontalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalAlign = this._horizontalAlign;
    }
    if (this._margin !== undefined) {
      hasAnyValues = true;
      internalValueResult.margin = this._margin;
    }
    if (this._sizing !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizing = this._sizing;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urlDarkTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlDarkTheme = this._urlDarkTheme;
    }
    if (this._verticalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalAlign = this._verticalAlign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetImageDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hasBackground = undefined;
      this._hasBorder = undefined;
      this._horizontalAlign = undefined;
      this._margin = undefined;
      this._sizing = undefined;
      this._url = undefined;
      this._urlDarkTheme = undefined;
      this._verticalAlign = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hasBackground = value.hasBackground;
      this._hasBorder = value.hasBorder;
      this._horizontalAlign = value.horizontalAlign;
      this._margin = value.margin;
      this._sizing = value.sizing;
      this._url = value.url;
      this._urlDarkTheme = value.urlDarkTheme;
      this._verticalAlign = value.verticalAlign;
    }
  }

  // has_background - computed: false, optional: true, required: false
  private _hasBackground?: boolean | cdktf.IResolvable; 
  public get hasBackground() {
    return this.getBooleanAttribute('has_background');
  }
  public set hasBackground(value: boolean | cdktf.IResolvable) {
    this._hasBackground = value;
  }
  public resetHasBackground() {
    this._hasBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasBackgroundInput() {
    return this._hasBackground;
  }

  // has_border - computed: false, optional: true, required: false
  private _hasBorder?: boolean | cdktf.IResolvable; 
  public get hasBorder() {
    return this.getBooleanAttribute('has_border');
  }
  public set hasBorder(value: boolean | cdktf.IResolvable) {
    this._hasBorder = value;
  }
  public resetHasBorder() {
    this._hasBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasBorderInput() {
    return this._hasBorder;
  }

  // horizontal_align - computed: false, optional: true, required: false
  private _horizontalAlign?: string; 
  public get horizontalAlign() {
    return this.getStringAttribute('horizontal_align');
  }
  public set horizontalAlign(value: string) {
    this._horizontalAlign = value;
  }
  public resetHorizontalAlign() {
    this._horizontalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalAlignInput() {
    return this._horizontalAlign;
  }

  // margin - computed: false, optional: true, required: false
  private _margin?: string; 
  public get margin() {
    return this.getStringAttribute('margin');
  }
  public set margin(value: string) {
    this._margin = value;
  }
  public resetMargin() {
    this._margin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginInput() {
    return this._margin;
  }

  // sizing - computed: false, optional: true, required: false
  private _sizing?: string; 
  public get sizing() {
    return this.getStringAttribute('sizing');
  }
  public set sizing(value: string) {
    this._sizing = value;
  }
  public resetSizing() {
    this._sizing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizingInput() {
    return this._sizing;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_dark_theme - computed: false, optional: true, required: false
  private _urlDarkTheme?: string; 
  public get urlDarkTheme() {
    return this.getStringAttribute('url_dark_theme');
  }
  public set urlDarkTheme(value: string) {
    this._urlDarkTheme = value;
  }
  public resetUrlDarkTheme() {
    this._urlDarkTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlDarkThemeInput() {
    return this._urlDarkTheme;
  }

  // vertical_align - computed: false, optional: true, required: false
  private _verticalAlign?: string; 
  public get verticalAlign() {
    return this.getStringAttribute('vertical_align');
  }
  public set verticalAlign(value: string) {
    this._verticalAlign = value;
  }
  public resetVerticalAlign() {
    this._verticalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalAlignInput() {
    return this._verticalAlign;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumns {
  /**
  * Widget column field.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#field Dashboard#field}
  */
  readonly field: string;
  /**
  * Widget column width. Valid values are `auto`, `compact`, `full`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width: string;
}

export function dashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumnsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    width: cdktf.stringToTerraform(struct!.width),
  }
}

export class DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._width = value.width;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // width - computed: false, optional: false, required: true
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumnsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumns[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumnsOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQuery {
  /**
  * Source from which to query items to display in the stream. Valid values are `logs_stream`, `audit_stream`, `ci_pipeline_stream`, `ci_test_stream`, `rum_issue_stream`, `apm_issue_stream`, `logs_issue_stream`, `logs_pattern_stream`, `logs_transaction_stream`, `event_stream`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Size of events displayed in widget. Required if `data_source` is `event_stream`. Valid values are `s`, `l`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#event_size Dashboard#event_size}
  */
  readonly eventSize?: string;
  /**
  * List of indexes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * Widget query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#query_string Dashboard#query_string}
  */
  readonly queryString?: string;
  /**
  * Storage location (private beta).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#storage Dashboard#storage}
  */
  readonly storage?: string;
}

export function dashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQueryOutputReference | DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    event_size: cdktf.stringToTerraform(struct!.eventSize),
    indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexes),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}

export class DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource;
    }
    if (this._eventSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventSize = this._eventSize;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._eventSize = undefined;
      this._indexes = undefined;
      this._queryString = undefined;
      this._storage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._eventSize = value.eventSize;
      this._indexes = value.indexes;
      this._queryString = value.queryString;
      this._storage = value.storage;
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

  // event_size - computed: false, optional: true, required: false
  private _eventSize?: string; 
  public get eventSize() {
    return this.getStringAttribute('event_size');
  }
  public set eventSize(value: string) {
    this._eventSize = value;
  }
  public resetEventSize() {
    this._eventSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSizeInput() {
    return this._eventSize;
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

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
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
}
export interface DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequest {
  /**
  * Widget response format. Valid values are `event_list`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#response_format Dashboard#response_format}
  */
  readonly responseFormat: string;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#columns Dashboard#columns}
  */
  readonly columns: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumns[] | cdktf.IResolvable;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQuery;
}

export function dashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_format: cdktf.stringToTerraform(struct!.responseFormat),
    columns: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumnsToTerraform, true)(struct!.columns),
    query: dashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQueryToTerraform(struct!.query),
  }
}

export class DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFormat = this._responseFormat;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responseFormat = undefined;
      this._columns.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responseFormat = value.responseFormat;
      this._columns.internalValue = value.columns;
      this._query.internalValue = value.query;
    }
  }

  // response_format - computed: false, optional: false, required: true
  private _responseFormat?: string; 
  public get responseFormat() {
    return this.getStringAttribute('response_format');
  }
  public set responseFormat(value: string) {
    this._responseFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFormatInput() {
    return this._responseFormat;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequest[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetListStreamDefinition {
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title. Default is 16.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#request Dashboard#request}
  */
  readonly request: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequest[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetListStreamDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetListStreamDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    request: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestToTerraform, true)(struct!.request),
  }
}

export class DashboardWidgetGroupDefinitionWidgetListStreamDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetListStreamDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetListStreamDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
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

  // request - computed: false, optional: false, required: true
  private _request = new DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DashboardWidgetGroupDefinitionWidgetListStreamDefinitionRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSort {
  /**
  * The facet path for the column.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#column Dashboard#column}
  */
  readonly column: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSortOutputReference | DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column = undefined;
      this._order = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column = value.column;
      this._order = value.order;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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
export interface DashboardWidgetGroupDefinitionWidgetLogStreamDefinition {
  /**
  * Stringified list of columns to use, for example: `["column1","column2","column3"]`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#columns Dashboard#columns}
  */
  readonly columns?: string[];
  /**
  * An array of index names to query in the stream.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The number of log lines to display. Valid values are `inline`, `expanded-md`, `expanded-lg`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#message_display Dashboard#message_display}
  */
  readonly messageDisplay?: string;
  /**
  * The query to use in the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
  /**
  * If the date column should be displayed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#show_date_column Dashboard#show_date_column}
  */
  readonly showDateColumn?: boolean | cdktf.IResolvable;
  /**
  * If the message column should be displayed.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#show_message_column Dashboard#show_message_column}
  */
  readonly showMessageColumn?: boolean | cdktf.IResolvable;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSort;
}

export function dashboardWidgetGroupDefinitionWidgetLogStreamDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetLogStreamDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexes),
    live_span: cdktf.stringToTerraform(struct!.liveSpan),
    message_display: cdktf.stringToTerraform(struct!.messageDisplay),
    query: cdktf.stringToTerraform(struct!.query),
    show_date_column: cdktf.booleanToTerraform(struct!.showDateColumn),
    show_message_column: cdktf.booleanToTerraform(struct!.showMessageColumn),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    sort: dashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSortToTerraform(struct!.sort),
  }
}

export class DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetLogStreamDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._indexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._messageDisplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDisplay = this._messageDisplay;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._showDateColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDateColumn = this._showDateColumn;
    }
    if (this._showMessageColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMessageColumn = this._showMessageColumn;
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
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetLogStreamDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._indexes = undefined;
      this._liveSpan = undefined;
      this._messageDisplay = undefined;
      this._query = undefined;
      this._showDateColumn = undefined;
      this._showMessageColumn = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._sort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._indexes = value.indexes;
      this._liveSpan = value.liveSpan;
      this._messageDisplay = value.messageDisplay;
      this._query = value.query;
      this._showDateColumn = value.showDateColumn;
      this._showMessageColumn = value.showMessageColumn;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._sort.internalValue = value.sort;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
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

  // message_display - computed: false, optional: true, required: false
  private _messageDisplay?: string; 
  public get messageDisplay() {
    return this.getStringAttribute('message_display');
  }
  public set messageDisplay(value: string) {
    this._messageDisplay = value;
  }
  public resetMessageDisplay() {
    this._messageDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDisplayInput() {
    return this._messageDisplay;
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

  // show_date_column - computed: false, optional: true, required: false
  private _showDateColumn?: boolean | cdktf.IResolvable; 
  public get showDateColumn() {
    return this.getBooleanAttribute('show_date_column');
  }
  public set showDateColumn(value: boolean | cdktf.IResolvable) {
    this._showDateColumn = value;
  }
  public resetShowDateColumn() {
    this._showDateColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDateColumnInput() {
    return this._showDateColumn;
  }

  // show_message_column - computed: false, optional: true, required: false
  private _showMessageColumn?: boolean | cdktf.IResolvable; 
  public get showMessageColumn() {
    return this.getBooleanAttribute('show_message_column');
  }
  public set showMessageColumn(value: boolean | cdktf.IResolvable) {
    this._showMessageColumn = value;
  }
  public resetShowMessageColumn() {
    this._showMessageColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMessageColumnInput() {
    return this._showMessageColumn;
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

  // sort - computed: false, optional: true, required: false
  private _sort = new DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetLogStreamDefinitionSort) {
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
export interface DashboardWidgetGroupDefinitionWidgetManageStatusDefinition {
  /**
  * Whether to colorize text or background. Valid values are `background`, `text`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#color_preference Dashboard#color_preference}
  */
  readonly colorPreference?: string;
  /**
  * The display setting to use. Valid values are `counts`, `countsAndList`, `list`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#display_format Dashboard#display_format}
  */
  readonly displayFormat?: string;
  /**
  * A Boolean indicating whether to hide empty categories.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#hide_zero_counts Dashboard#hide_zero_counts}
  */
  readonly hideZeroCounts?: boolean | cdktf.IResolvable;
  /**
  * The query to use in the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
  /**
  * A Boolean indicating whether to show when monitors/groups last triggered.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#show_last_triggered Dashboard#show_last_triggered}
  */
  readonly showLastTriggered?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the priorities column.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#show_priority Dashboard#show_priority}
  */
  readonly showPriority?: boolean | cdktf.IResolvable;
  /**
  * The method to sort the monitors. Valid values are `name`, `group`, `status`, `tags`, `triggered`, `group,asc`, `group,desc`, `name,asc`, `name,desc`, `status,asc`, `status,desc`, `tags,asc`, `tags,desc`, `triggered,asc`, `triggered,desc`, `priority,asc`, `priority,desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: string;
  /**
  * The summary type to use. Valid values are `monitors`, `groups`, `combined`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#summary_type Dashboard#summary_type}
  */
  readonly summaryType?: string;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
}

export function dashboardWidgetGroupDefinitionWidgetManageStatusDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetManageStatusDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetManageStatusDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color_preference: cdktf.stringToTerraform(struct!.colorPreference),
    display_format: cdktf.stringToTerraform(struct!.displayFormat),
    hide_zero_counts: cdktf.booleanToTerraform(struct!.hideZeroCounts),
    query: cdktf.stringToTerraform(struct!.query),
    show_last_triggered: cdktf.booleanToTerraform(struct!.showLastTriggered),
    show_priority: cdktf.booleanToTerraform(struct!.showPriority),
    sort: cdktf.stringToTerraform(struct!.sort),
    summary_type: cdktf.stringToTerraform(struct!.summaryType),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
  }
}

export class DashboardWidgetGroupDefinitionWidgetManageStatusDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetManageStatusDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colorPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.colorPreference = this._colorPreference;
    }
    if (this._displayFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormat = this._displayFormat;
    }
    if (this._hideZeroCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideZeroCounts = this._hideZeroCounts;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._showLastTriggered !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLastTriggered = this._showLastTriggered;
    }
    if (this._showPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPriority = this._showPriority;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._summaryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryType = this._summaryType;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetManageStatusDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colorPreference = undefined;
      this._displayFormat = undefined;
      this._hideZeroCounts = undefined;
      this._query = undefined;
      this._showLastTriggered = undefined;
      this._showPriority = undefined;
      this._sort = undefined;
      this._summaryType = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colorPreference = value.colorPreference;
      this._displayFormat = value.displayFormat;
      this._hideZeroCounts = value.hideZeroCounts;
      this._query = value.query;
      this._showLastTriggered = value.showLastTriggered;
      this._showPriority = value.showPriority;
      this._sort = value.sort;
      this._summaryType = value.summaryType;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
    }
  }

  // color_preference - computed: false, optional: true, required: false
  private _colorPreference?: string; 
  public get colorPreference() {
    return this.getStringAttribute('color_preference');
  }
  public set colorPreference(value: string) {
    this._colorPreference = value;
  }
  public resetColorPreference() {
    this._colorPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorPreferenceInput() {
    return this._colorPreference;
  }

  // display_format - computed: false, optional: true, required: false
  private _displayFormat?: string; 
  public get displayFormat() {
    return this.getStringAttribute('display_format');
  }
  public set displayFormat(value: string) {
    this._displayFormat = value;
  }
  public resetDisplayFormat() {
    this._displayFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayFormatInput() {
    return this._displayFormat;
  }

  // hide_zero_counts - computed: false, optional: true, required: false
  private _hideZeroCounts?: boolean | cdktf.IResolvable; 
  public get hideZeroCounts() {
    return this.getBooleanAttribute('hide_zero_counts');
  }
  public set hideZeroCounts(value: boolean | cdktf.IResolvable) {
    this._hideZeroCounts = value;
  }
  public resetHideZeroCounts() {
    this._hideZeroCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideZeroCountsInput() {
    return this._hideZeroCounts;
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

  // show_last_triggered - computed: false, optional: true, required: false
  private _showLastTriggered?: boolean | cdktf.IResolvable; 
  public get showLastTriggered() {
    return this.getBooleanAttribute('show_last_triggered');
  }
  public set showLastTriggered(value: boolean | cdktf.IResolvable) {
    this._showLastTriggered = value;
  }
  public resetShowLastTriggered() {
    this._showLastTriggered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLastTriggeredInput() {
    return this._showLastTriggered;
  }

  // show_priority - computed: false, optional: true, required: false
  private _showPriority?: boolean | cdktf.IResolvable; 
  public get showPriority() {
    return this.getBooleanAttribute('show_priority');
  }
  public set showPriority(value: boolean | cdktf.IResolvable) {
    this._showPriority = value;
  }
  public resetShowPriority() {
    this._showPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPriorityInput() {
    return this._showPriority;
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

  // summary_type - computed: false, optional: true, required: false
  private _summaryType?: string; 
  public get summaryType() {
    return this.getStringAttribute('summary_type');
  }
  public set summaryType(value: string) {
    this._summaryType = value;
  }
  public resetSummaryType() {
    this._summaryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryTypeInput() {
    return this._summaryType;
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
}
export interface DashboardWidgetGroupDefinitionWidgetNoteDefinition {
  /**
  * The background color of the note.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#background_color Dashboard#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The content of the note.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#content Dashboard#content}
  */
  readonly content: string;
  /**
  * The size of the text.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#font_size Dashboard#font_size}
  */
  readonly fontSize?: string;
  /**
  * Whether to add padding or not.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#has_padding Dashboard#has_padding}
  */
  readonly hasPadding?: boolean | cdktf.IResolvable;
  /**
  * Whether to show a tick or not.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#show_tick Dashboard#show_tick}
  */
  readonly showTick?: boolean | cdktf.IResolvable;
  /**
  * The alignment of the widget's text. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#text_align Dashboard#text_align}
  */
  readonly textAlign?: string;
  /**
  * When `tick = true`, a string indicating on which side of the widget the tick should be displayed. Valid values are `bottom`, `left`, `right`, `top`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#tick_edge Dashboard#tick_edge}
  */
  readonly tickEdge?: string;
  /**
  * When `tick = true`, a string with a percent sign indicating the position of the tick, for example: `tick_pos = "50%"` is centered alignment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#tick_pos Dashboard#tick_pos}
  */
  readonly tickPos?: string;
  /**
  * The vertical alignment for the widget. Valid values are `center`, `top`, `bottom`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#vertical_align Dashboard#vertical_align}
  */
  readonly verticalAlign?: string;
}

export function dashboardWidgetGroupDefinitionWidgetNoteDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetNoteDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetNoteDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    content: cdktf.stringToTerraform(struct!.content),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    has_padding: cdktf.booleanToTerraform(struct!.hasPadding),
    show_tick: cdktf.booleanToTerraform(struct!.showTick),
    text_align: cdktf.stringToTerraform(struct!.textAlign),
    tick_edge: cdktf.stringToTerraform(struct!.tickEdge),
    tick_pos: cdktf.stringToTerraform(struct!.tickPos),
    vertical_align: cdktf.stringToTerraform(struct!.verticalAlign),
  }
}

export class DashboardWidgetGroupDefinitionWidgetNoteDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetNoteDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._hasPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasPadding = this._hasPadding;
    }
    if (this._showTick !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTick = this._showTick;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    if (this._tickEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickEdge = this._tickEdge;
    }
    if (this._tickPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickPos = this._tickPos;
    }
    if (this._verticalAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.verticalAlign = this._verticalAlign;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetNoteDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backgroundColor = undefined;
      this._content = undefined;
      this._fontSize = undefined;
      this._hasPadding = undefined;
      this._showTick = undefined;
      this._textAlign = undefined;
      this._tickEdge = undefined;
      this._tickPos = undefined;
      this._verticalAlign = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backgroundColor = value.backgroundColor;
      this._content = value.content;
      this._fontSize = value.fontSize;
      this._hasPadding = value.hasPadding;
      this._showTick = value.showTick;
      this._textAlign = value.textAlign;
      this._tickEdge = value.tickEdge;
      this._tickPos = value.tickPos;
      this._verticalAlign = value.verticalAlign;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // has_padding - computed: false, optional: true, required: false
  private _hasPadding?: boolean | cdktf.IResolvable; 
  public get hasPadding() {
    return this.getBooleanAttribute('has_padding');
  }
  public set hasPadding(value: boolean | cdktf.IResolvable) {
    this._hasPadding = value;
  }
  public resetHasPadding() {
    this._hasPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasPaddingInput() {
    return this._hasPadding;
  }

  // show_tick - computed: false, optional: true, required: false
  private _showTick?: boolean | cdktf.IResolvable; 
  public get showTick() {
    return this.getBooleanAttribute('show_tick');
  }
  public set showTick(value: boolean | cdktf.IResolvable) {
    this._showTick = value;
  }
  public resetShowTick() {
    this._showTick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTickInput() {
    return this._showTick;
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

  // tick_edge - computed: false, optional: true, required: false
  private _tickEdge?: string; 
  public get tickEdge() {
    return this.getStringAttribute('tick_edge');
  }
  public set tickEdge(value: string) {
    this._tickEdge = value;
  }
  public resetTickEdge() {
    this._tickEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickEdgeInput() {
    return this._tickEdge;
  }

  // tick_pos - computed: false, optional: true, required: false
  private _tickPos?: string; 
  public get tickPos() {
    return this.getStringAttribute('tick_pos');
  }
  public set tickPos(value: string) {
    this._tickPos = value;
  }
  public resetTickPos() {
    this._tickPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tickPosInput() {
    return this._tickPos;
  }

  // vertical_align - computed: false, optional: true, required: false
  private _verticalAlign?: string; 
  public get verticalAlign() {
    return this.getStringAttribute('vertical_align');
  }
  public set verticalAlign(value: string) {
    this._verticalAlign = value;
  }
  public resetVerticalAlign() {
    this._verticalAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalAlignInput() {
    return this._verticalAlign;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink {
  /**
  * The flag for toggling context menu link visibility.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#is_hidden Dashboard#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * The label for the custom link URL.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#link Dashboard#link}
  */
  readonly link?: string;
  /**
  * The label ID that refers to a context menu link item. When `override_label` is provided, the client request omits the label field.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#override_label Dashboard#override_label}
  */
  readonly overrideLabel?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumns {
  /**
  * A user-assigned alias for the column.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * The column name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumnsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.stringToTerraform(struct!.cellDisplayMode),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumns | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._name = undefined;
      this._order = undefined;
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
      this._name = value.name;
      this._order = value.order;
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumnsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumns[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumnsOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery {
  /**
  * The environment name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * The operation name associated with the service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The organization's host group name and value.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag Dashboard#primary_tag}
  */
  readonly primaryTag: string;
  /**
  * The resource name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#resource Dashboard#resource}
  */
  readonly resource?: string;
  /**
  * The level of detail for the request. Valid values are `service`, `resource`, `span`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#row_type Dashboard#row_type}
  */
  readonly rowType: string;
  /**
  * The service name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#columns Dashboard#columns}
  */
  readonly columns?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumns[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.stringToTerraform(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    primary_tag: cdktf.stringToTerraform(struct!.primaryTag),
    resource: cdktf.stringToTerraform(struct!.resource),
    row_type: cdktf.stringToTerraform(struct!.rowType),
    service: cdktf.stringToTerraform(struct!.service),
    columns: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumnsToTerraform, true)(struct!.columns),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryTag = this._primaryTag;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._rowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowType = this._rowType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._env = undefined;
      this._name = undefined;
      this._primaryTag = undefined;
      this._resource = undefined;
      this._rowType = undefined;
      this._service = undefined;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._env = value.env;
      this._name = value.name;
      this._primaryTag = value.primaryTag;
      this._resource = value.resource;
      this._rowType = value.rowType;
      this._service = value.service;
      this._columns.internalValue = value.columns;
    }
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

  // primary_tag - computed: false, optional: false, required: true
  private _primaryTag?: string; 
  public get primaryTag() {
    return this.getStringAttribute('primary_tag');
  }
  public set primaryTag(value: string) {
    this._primaryTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryTagInput() {
    return this._primaryTag;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // row_type - computed: false, optional: false, required: true
  private _rowType?: string; 
  public get rowType() {
    return this.getStringAttribute('row_type');
  }
  public set rowType(value: string) {
    this._rowType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowTypeInput() {
    return this._rowType;
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

  // columns - computed: false, optional: true, required: false
  private _columns = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats {
  /**
  * The comparator to use. Valid values are `>`, `>=`, `<`, `<=`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormats {
  /**
  * The comparator to use. Valid values are `>`, `>=`, `<`, `<=`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormatsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormatsOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimit {
  /**
  * The number of results to return
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#count Dashboard#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimitOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimit | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimit | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyle {
  /**
  * The color palette used to display the formula. A guide to the available color palettes can be found at https://docs.datadoghq.com/dashboards/guide/widget_colors
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette?: string;
  /**
  * Index specifying which color to use within the palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette_index Dashboard#palette_index}
  */
  readonly paletteIndex?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyleToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyleOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    palette: cdktf.stringToTerraform(struct!.palette),
    palette_index: cdktf.numberToTerraform(struct!.paletteIndex),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._paletteIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.paletteIndex = this._paletteIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._palette = undefined;
      this._paletteIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._palette = value.palette;
      this._paletteIndex = value.paletteIndex;
    }
  }

  // palette - computed: false, optional: true, required: false
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  public resetPalette() {
    this._palette = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // palette_index - computed: false, optional: true, required: false
  private _paletteIndex?: number; 
  public get paletteIndex() {
    return this.getNumberAttribute('palette_index');
  }
  public set paletteIndex(value: number) {
    this._paletteIndex = value;
  }
  public resetPaletteIndex() {
    this._paletteIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteIndexInput() {
    return this._paletteIndex;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula {
  /**
  * An expression alias.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#formula_expression Dashboard#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable;
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimit;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyle;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
    conditional_formats: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    limit: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimitToTerraform(struct!.limit),
    style: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyleToTerraform(struct!.style),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula | cdktf.IResolvable | undefined {
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
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._formulaExpression = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._limit.internalValue = undefined;
      this._style.internalValue = undefined;
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
      this._style.internalValue = value.style;
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
  private _conditionalFormats = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable) {
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
  private _limit = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery {
  /**
  * A list of processes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterBy),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    search_by: cdktf.stringToTerraform(struct!.searchBy),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery {
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#is_upstream Dashboard#is_upstream}
  */
  readonly isUpstream?: boolean | cdktf.IResolvable;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery {
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    env: cdktf.stringToTerraform(struct!.env),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    name: cdktf.stringToTerraform(struct!.name),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktf.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktf.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    service: cdktf.stringToTerraform(struct!.service),
    stat: cdktf.stringToTerraform(struct!.stat),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy {
  /**
  * The event facet.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sort = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBySort) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery {
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`, `ci_tests`, `ci_pipelines`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Storage location (private beta).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#storage Dashboard#storage}
  */
  readonly storage?: string;
  /**
  * compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    indexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.indexes),
    name: cdktf.stringToTerraform(struct!.name),
    storage: cdktf.stringToTerraform(struct!.storage),
    compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    search: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._storage = value.storage;
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
  private _compute = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable) {
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
  private _search = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuerySearch) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for metrics queries.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#is_normalized_cpu Dashboard#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktf.IResolvable;
  /**
  * The number of hits to return.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort Dashboard#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#tag_filters Dashboard#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#text_filter Dashboard#text_filter}
  */
  readonly textFilter?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery): any {
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
    tag_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagFilters),
    text_filter: cdktf.stringToTerraform(struct!.textFilter),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery | cdktf.IResolvable | undefined) {
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
  private _apmDependencyStatsQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmDependencyStatsQuery) {
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
  private _apmResourceStatsQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryApmResourceStatsQuery) {
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
  private _eventQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryEventQuery) {
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
  private _metricQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryMetricQuery) {
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
  private _processQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryProcessQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequest {
  /**
  * The aggregator to use for time aggregation. Valid values are `avg`, `last`, `max`, `min`, `sum`, `percentile`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The alias for the column name (defaults to metric name).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. List items one of `number`, `bar`. Valid values are `number`, `bar`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string[];
  /**
  * The number of lines to show in the table.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The sort order for the rows. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
  /**
  * The metric query to use for this widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery;
  /**
  * apm_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#apm_stats_query Dashboard#apm_stats_query}
  */
  readonly apmStatsQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats[] | cdktf.IResolvable;
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula[] | cdktf.IResolvable;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery[] | cdktf.IResolvable;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: cdktf.stringToTerraform(struct!.aggregator),
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cellDisplayMode),
    limit: cdktf.numberToTerraform(struct!.limit),
    order: cdktf.stringToTerraform(struct!.order),
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryToTerraform(struct!.apmQuery),
    apm_stats_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryToTerraform(struct!.apmStatsQuery),
    conditional_formats: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    formula: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaToTerraform, true)(struct!.formula),
    log_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryToTerraform, true)(struct!.query),
    rum_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequest | cdktf.IResolvable | undefined) {
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
  private _apmQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmQuery) {
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
  private _apmStatsQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQueryOutputReference(this, "apm_stats_query");
  public get apmStatsQuery() {
    return this._apmStatsQuery;
  }
  public putApmStatsQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestApmStatsQuery) {
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
  private _conditionalFormats = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestConditionalFormats[] | cdktf.IResolvable) {
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
  private _formula = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestFormula[] | cdktf.IResolvable) {
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
  private _logQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestLogQuery) {
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
  private _processQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestProcessQuery) {
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
  private _query = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestQuery[] | cdktf.IResolvable) {
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
  private _rumQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestRumQuery) {
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
  private _securityQuery = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestSecurityQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequest[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryTableDefinition {
  /**
  * Controls the display of the search bar. Valid values are `always`, `never`, `auto`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#has_search_bar Dashboard#has_search_bar}
  */
  readonly hasSearchBar?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_link Dashboard#custom_link}
  */
  readonly customLink?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink[] | cdktf.IResolvable;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequest[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionOutputReference | DashboardWidgetGroupDefinitionWidgetQueryTableDefinition): any {
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
    custom_link: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkToTerraform, true)(struct!.customLink),
    request: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestToTerraform, true)(struct!.request),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryTableDefinition | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinition | undefined) {
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
  private _customLink = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLinkList(this, "custom_link", false);
  public get customLink() {
    return this._customLink;
  }
  public putCustomLink(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionCustomLink[] | cdktf.IResolvable) {
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
  private _request = new DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DashboardWidgetGroupDefinitionWidgetQueryTableDefinitionRequest[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink {
  /**
  * The flag for toggling context menu link visibility.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#is_hidden Dashboard#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * The label for the custom link URL.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#link Dashboard#link}
  */
  readonly link?: string;
  /**
  * The label ID that refers to a context menu link item. When `override_label` is provided, the client request omits the label field.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#override_label Dashboard#override_label}
  */
  readonly overrideLabel?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLink[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats {
  /**
  * The comparator to use. Valid values are `>`, `>=`, `<`, `<=`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormats[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats {
  /**
  * The comparator to use. Valid values are `>`, `>=`, `<`, `<=`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit {
  /**
  * The number of results to return
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#count Dashboard#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle {
  /**
  * The color palette used to display the formula. A guide to the available color palettes can be found at https://docs.datadoghq.com/dashboards/guide/widget_colors
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette Dashboard#palette}
  */
  readonly palette?: string;
  /**
  * Index specifying which color to use within the palette.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#palette_index Dashboard#palette_index}
  */
  readonly paletteIndex?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    palette: cdktf.stringToTerraform(struct!.palette),
    palette_index: cdktf.numberToTerraform(struct!.paletteIndex),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    if (this._paletteIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.paletteIndex = this._paletteIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._palette = undefined;
      this._paletteIndex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._palette = value.palette;
      this._paletteIndex = value.paletteIndex;
    }
  }

  // palette - computed: false, optional: true, required: false
  private _palette?: string; 
  public get palette() {
    return this.getStringAttribute('palette');
  }
  public set palette(value: string) {
    this._palette = value;
  }
  public resetPalette() {
    this._palette = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteInput() {
    return this._palette;
  }

  // palette_index - computed: false, optional: true, required: false
  private _paletteIndex?: number; 
  public get paletteIndex() {
    return this.getNumberAttribute('palette_index');
  }
  public set paletteIndex(value: number) {
    this._paletteIndex = value;
  }
  public resetPaletteIndex() {
    this._paletteIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paletteIndexInput() {
    return this._paletteIndex;
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula {
  /**
  * An expression alias.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#formula_expression Dashboard#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable;
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
    conditional_formats: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    limit: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitToTerraform(struct!.limit),
    style: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleToTerraform(struct!.style),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula | cdktf.IResolvable | undefined {
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
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._cellDisplayMode = undefined;
      this._formulaExpression = undefined;
      this._conditionalFormats.internalValue = undefined;
      this._limit.internalValue = undefined;
      this._style.internalValue = undefined;
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
      this._style.internalValue = value.style;
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
  private _conditionalFormats = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable) {
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
  private _limit = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaStyle) {
    this._style.internalValue = value;
  }
  public resetStyle() {
    this._style.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style.internalValue;
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormula[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy {
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy | cdktf.IResolvable | undefined) {
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
  private _sortQuery = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBySortQuery) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute {
  /**
  * The aggregation method.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery {
  /**
  * The name of the index to query.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQuery | undefined) {
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
  private _computeQuery = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryComputeQuery) {
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
  private _groupBy = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable) {
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
  private _multiCompute = new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery {
  /**
  * A list of processes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterBy),
    limit: cdktf.numberToTerraform(struct!.limit),
    metric: cdktf.stringToTerraform(struct!.metric),
    search_by: cdktf.stringToTerraform(struct!.searchBy),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestProcessQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery {
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#is_upstream Dashboard#is_upstream}
  */
  readonly isUpstream?: boolean | cdktf.IResolvable;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery {
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#operation_name Dashboard#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#resource_name Dashboard#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    env: cdktf.stringToTerraform(struct!.env),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    name: cdktf.stringToTerraform(struct!.name),
    operation_name: cdktf.stringToTerraform(struct!.operationName),
    primary_tag_name: cdktf.stringToTerraform(struct!.primaryTagName),
    primary_tag_value: cdktf.stringToTerraform(struct!.primaryTagValue),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    service: cdktf.stringToTerraform(struct!.service),
    stat: cdktf.stringToTerraform(struct!.stat),
  }
}

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryApmResourceStatsQuery | undefined) {
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
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryComputeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable | undefined) {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryComputeList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryComputeOutputReference {
    return new DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs/resources/dashboard#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetGroupDefinitionWidgetQueryValueDefinitionRequestQueryEventQueryGroupBySort | undefined) {
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
