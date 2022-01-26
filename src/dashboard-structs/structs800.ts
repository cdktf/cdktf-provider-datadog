import * as cdktf from 'cdktf';
import { DashboardWidgetSunburstDefinitionCustomLink,
dashboardWidgetSunburstDefinitionCustomLinkToTerraform,
DashboardWidgetGroupDefinition,
dashboardWidgetGroupDefinitionToTerraform,
DashboardWidgetHeatmapDefinition,
dashboardWidgetHeatmapDefinitionToTerraform,
DashboardWidgetHostmapDefinition,
dashboardWidgetHostmapDefinitionToTerraform,
DashboardWidgetIframeDefinition,
dashboardWidgetIframeDefinitionToTerraform,
DashboardWidgetImageDefinition,
dashboardWidgetImageDefinitionToTerraform,
DashboardWidgetLogStreamDefinition,
dashboardWidgetLogStreamDefinitionToTerraform,
DashboardWidgetManageStatusDefinition,
dashboardWidgetManageStatusDefinitionToTerraform,
DashboardWidgetNoteDefinition,
dashboardWidgetNoteDefinitionToTerraform,
DashboardWidgetQueryTableDefinition,
dashboardWidgetQueryTableDefinitionToTerraform,
DashboardWidgetQueryValueDefinition,
dashboardWidgetQueryValueDefinitionToTerraform,
DashboardWidgetScatterplotDefinition,
dashboardWidgetScatterplotDefinitionToTerraform,
DashboardWidgetServiceLevelObjectiveDefinition,
dashboardWidgetServiceLevelObjectiveDefinitionToTerraform,
DashboardWidgetServicemapDefinition,
dashboardWidgetServicemapDefinitionToTerraform } from './structs400'
import { DashboardWidgetAlertGraphDefinition,
dashboardWidgetAlertGraphDefinitionToTerraform,
DashboardWidgetAlertValueDefinition,
dashboardWidgetAlertValueDefinitionToTerraform,
DashboardWidgetChangeDefinition,
dashboardWidgetChangeDefinitionToTerraform,
DashboardWidgetCheckStatusDefinition,
dashboardWidgetCheckStatusDefinitionToTerraform,
DashboardWidgetDistributionDefinition,
dashboardWidgetDistributionDefinitionToTerraform,
DashboardWidgetEventStreamDefinition,
dashboardWidgetEventStreamDefinitionToTerraform,
DashboardWidgetEventTimelineDefinition,
dashboardWidgetEventTimelineDefinitionToTerraform,
DashboardWidgetFreeTextDefinition,
dashboardWidgetFreeTextDefinitionToTerraform,
DashboardWidgetGeomapDefinition,
dashboardWidgetGeomapDefinitionToTerraform } from './structs0'
export interface DashboardWidgetSunburstDefinitionLegendInline {
  /**
  * Whether to hide the percentages of the groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#hide_percent Dashboard#hide_percent}
  */
  readonly hidePercent?: boolean | cdktf.IResolvable;
  /**
  * Whether to hide the values of the groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * The type of legend (inline or automatic). Valid values are `inline`, `automatic`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardWidgetSunburstDefinitionLegendInlineToTerraform(struct?: DashboardWidgetSunburstDefinitionLegendInlineOutputReference | DashboardWidgetSunburstDefinitionLegendInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_percent: cdktf.booleanToTerraform(struct!.hidePercent),
    hide_value: cdktf.booleanToTerraform(struct!.hideValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DashboardWidgetSunburstDefinitionLegendInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionLegendInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hidePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidePercent = this._hidePercent;
    }
    if (this._hideValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideValue = this._hideValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionLegendInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hidePercent = undefined;
      this._hideValue = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hidePercent = value.hidePercent;
      this._hideValue = value.hideValue;
      this._type = value.type;
    }
  }

  // hide_percent - computed: false, optional: true, required: false
  private _hidePercent?: boolean | cdktf.IResolvable; 
  public get hidePercent() {
    return this.getBooleanAttribute('hide_percent');
  }
  public set hidePercent(value: boolean | cdktf.IResolvable) {
    this._hidePercent = value;
  }
  public resetHidePercent() {
    this._hidePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePercentInput() {
    return this._hidePercent;
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
}
export interface DashboardWidgetSunburstDefinitionLegendTable {
  /**
  * The type of legend (table or none). Valid values are `table`, `none`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#type Dashboard#type}
  */
  readonly type: string;
}

export function dashboardWidgetSunburstDefinitionLegendTableToTerraform(struct?: DashboardWidgetSunburstDefinitionLegendTableOutputReference | DashboardWidgetSunburstDefinitionLegendTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DashboardWidgetSunburstDefinitionLegendTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionLegendTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionLegendTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
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
}
export interface DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestApmQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestApmQueryOutputReference | DashboardWidgetSunburstDefinitionRequestApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestApmQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestApmQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetSunburstDefinitionRequestApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestApmQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestApmQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestApmQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetSunburstDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetSunburstDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestAuditQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestAuditQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestAuditQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestAuditQueryOutputReference | DashboardWidgetSunburstDefinitionRequestAuditQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestAuditQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestAuditQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetSunburstDefinitionRequestAuditQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestAuditQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestAuditQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestAuditQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetSunburstDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetSunburstDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats {
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

export function dashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestFormulaLimit {
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

export function dashboardWidgetSunburstDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormulaLimitOutputReference | DashboardWidgetSunburstDefinitionRequestFormulaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetSunburstDefinitionRequestFormulaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestFormulaLimit | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestFormulaLimit | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestFormula {
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
  readonly conditionalFormats?: DashboardWidgetSunburstDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable;
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetSunburstDefinitionRequestFormulaLimit;
}

export function dashboardWidgetSunburstDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
    conditional_formats: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestFormulaConditionalFormatsToTerraform)(struct!.conditionalFormats),
    limit: dashboardWidgetSunburstDefinitionRequestFormulaLimitToTerraform(struct!.limit),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestLogQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestLogQueryOutputReference | DashboardWidgetSunburstDefinitionRequestLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestLogQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestLogQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetSunburstDefinitionRequestLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestLogQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestLogQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetSunburstDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetSunburstDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestNetworkQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestNetworkQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestNetworkQueryOutputReference | DashboardWidgetSunburstDefinitionRequestNetworkQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestNetworkQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestNetworkQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetSunburstDefinitionRequestNetworkQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestNetworkQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestNetworkQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetSunburstDefinitionRequestNetworkQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetSunburstDefinitionRequestProcessQuery {
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

export function dashboardWidgetSunburstDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestProcessQueryOutputReference | DashboardWidgetSunburstDefinitionRequestProcessQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestProcessQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery {
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
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute {
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

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort {
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

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy {
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
  readonly sort?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySort;
}

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryEventQuery {
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
  readonly compute: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch;
}

export function dashboardWidgetSunburstDefinitionRequestQueryEventQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    indexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.indexes),
    name: cdktf.stringToTerraform(struct!.name),
    compute: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestQueryEventQueryComputeToTerraform)(struct!.compute),
    group_by: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupByToTerraform)(struct!.groupBy),
    search: dashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}

export class DashboardWidgetSunburstDefinitionRequestQueryEventQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryEventQuery | undefined {
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
    if (this._compute !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute = undefined;
      this._groupBy = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._compute = value.compute;
      this._groupBy = value.groupBy;
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
  private _compute?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable; 
  public get compute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('compute');
  }
  public set compute(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable) {
    this._compute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetSunburstDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // search - computed: false, optional: true, required: false
  private _search = new DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearchOutputReference(this, "search", true);
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetSunburstDefinitionRequestQueryEventQuerySearch) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryMetricQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryMetricQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryMetricQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryMetricQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryMetricQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQueryProcessQuery {
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

export function dashboardWidgetSunburstDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetSunburstDefinitionRequestQueryProcessQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestQueryProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestQueryProcessQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetSunburstDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetSunburstDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetSunburstDefinitionRequestQueryProcessQuery;
}

export function dashboardWidgetSunburstDefinitionRequestQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetSunburstDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: dashboardWidgetSunburstDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: dashboardWidgetSunburstDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetSunburstDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetSunburstDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestRumQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestRumQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestRumQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestRumQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestRumQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestRumQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestRumQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestRumQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestRumQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestRumQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestRumQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestRumQueryOutputReference | DashboardWidgetSunburstDefinitionRequestRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestRumQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestRumQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetSunburstDefinitionRequestRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestRumQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestRumQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestRumQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetSunburstDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetSunburstDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetSunburstDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetSunburstDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQuery {
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

export function dashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQueryOutputReference | DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQuery {
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

export function dashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQuery): any {
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

export class DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetSunburstDefinitionRequestSecurityQueryGroupByToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetSunburstDefinitionRequestSecurityQueryMultiCompute {
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

export function dashboardWidgetSunburstDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetSunburstDefinitionRequestSecurityQuery {
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
  readonly computeQuery?: DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetSunburstDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetSunburstDefinitionRequestSecurityQueryToTerraform(struct?: DashboardWidgetSunburstDefinitionRequestSecurityQueryOutputReference | DashboardWidgetSunburstDefinitionRequestSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestSecurityQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestSecurityQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetSunburstDefinitionRequestSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinitionRequestSecurityQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinitionRequestSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetSunburstDefinitionRequestSecurityQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetSunburstDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetSunburstDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetSunburstDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetSunburstDefinitionRequest {
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
  readonly apmQuery?: DashboardWidgetSunburstDefinitionRequestApmQuery;
  /**
  * audit_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#audit_query Dashboard#audit_query}
  */
  readonly auditQuery?: DashboardWidgetSunburstDefinitionRequestAuditQuery;
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetSunburstDefinitionRequestFormula[] | cdktf.IResolvable;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetSunburstDefinitionRequestLogQuery;
  /**
  * network_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#network_query Dashboard#network_query}
  */
  readonly networkQuery?: DashboardWidgetSunburstDefinitionRequestNetworkQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetSunburstDefinitionRequestProcessQuery;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetSunburstDefinitionRequestQuery[] | cdktf.IResolvable;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetSunburstDefinitionRequestRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetSunburstDefinitionRequestSecurityQuery;
}

export function dashboardWidgetSunburstDefinitionRequestToTerraform(struct?: DashboardWidgetSunburstDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetSunburstDefinitionRequestApmQueryToTerraform(struct!.apmQuery),
    audit_query: dashboardWidgetSunburstDefinitionRequestAuditQueryToTerraform(struct!.auditQuery),
    formula: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestFormulaToTerraform)(struct!.formula),
    log_query: dashboardWidgetSunburstDefinitionRequestLogQueryToTerraform(struct!.logQuery),
    network_query: dashboardWidgetSunburstDefinitionRequestNetworkQueryToTerraform(struct!.networkQuery),
    process_query: dashboardWidgetSunburstDefinitionRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestQueryToTerraform)(struct!.query),
    rum_query: dashboardWidgetSunburstDefinitionRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetSunburstDefinitionRequestSecurityQueryToTerraform(struct!.securityQuery),
  }
}

export interface DashboardWidgetSunburstDefinition {
  /**
  * Whether or not to show the total value in the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#hide_total Dashboard#hide_total}
  */
  readonly hideTotal?: boolean | cdktf.IResolvable;
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
  * The alignment of the widget's title. One of `left`, `center`, or `right`. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title. Default is 16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#custom_link Dashboard#custom_link}
  */
  readonly customLink?: DashboardWidgetSunburstDefinitionCustomLink[] | cdktf.IResolvable;
  /**
  * legend_inline block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#legend_inline Dashboard#legend_inline}
  */
  readonly legendInline?: DashboardWidgetSunburstDefinitionLegendInline;
  /**
  * legend_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#legend_table Dashboard#legend_table}
  */
  readonly legendTable?: DashboardWidgetSunburstDefinitionLegendTable;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetSunburstDefinitionRequest[] | cdktf.IResolvable;
}

export function dashboardWidgetSunburstDefinitionToTerraform(struct?: DashboardWidgetSunburstDefinitionOutputReference | DashboardWidgetSunburstDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hide_total: cdktf.booleanToTerraform(struct!.hideTotal),
    live_span: cdktf.stringToTerraform(struct!.liveSpan),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    custom_link: cdktf.listMapper(dashboardWidgetSunburstDefinitionCustomLinkToTerraform)(struct!.customLink),
    legend_inline: dashboardWidgetSunburstDefinitionLegendInlineToTerraform(struct!.legendInline),
    legend_table: dashboardWidgetSunburstDefinitionLegendTableToTerraform(struct!.legendTable),
    request: cdktf.listMapper(dashboardWidgetSunburstDefinitionRequestToTerraform)(struct!.request),
  }
}

export class DashboardWidgetSunburstDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetSunburstDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hideTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideTotal = this._hideTotal;
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
    if (this._customLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink = this._customLink;
    }
    if (this._legendInline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendInline = this._legendInline?.internalValue;
    }
    if (this._legendTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendTable = this._legendTable?.internalValue;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSunburstDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hideTotal = undefined;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink = undefined;
      this._legendInline.internalValue = undefined;
      this._legendTable.internalValue = undefined;
      this._request = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hideTotal = value.hideTotal;
      this._liveSpan = value.liveSpan;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink = value.customLink;
      this._legendInline.internalValue = value.legendInline;
      this._legendTable.internalValue = value.legendTable;
      this._request = value.request;
    }
  }

  // hide_total - computed: false, optional: true, required: false
  private _hideTotal?: boolean | cdktf.IResolvable; 
  public get hideTotal() {
    return this.getBooleanAttribute('hide_total');
  }
  public set hideTotal(value: boolean | cdktf.IResolvable) {
    this._hideTotal = value;
  }
  public resetHideTotal() {
    this._hideTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideTotalInput() {
    return this._hideTotal;
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
  private _customLink?: DashboardWidgetSunburstDefinitionCustomLink[] | cdktf.IResolvable; 
  public get customLink() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_link');
  }
  public set customLink(value: DashboardWidgetSunburstDefinitionCustomLink[] | cdktf.IResolvable) {
    this._customLink = value;
  }
  public resetCustomLink() {
    this._customLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinkInput() {
    return this._customLink;
  }

  // legend_inline - computed: false, optional: true, required: false
  private _legendInline = new DashboardWidgetSunburstDefinitionLegendInlineOutputReference(this, "legend_inline", true);
  public get legendInline() {
    return this._legendInline;
  }
  public putLegendInline(value: DashboardWidgetSunburstDefinitionLegendInline) {
    this._legendInline.internalValue = value;
  }
  public resetLegendInline() {
    this._legendInline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInlineInput() {
    return this._legendInline.internalValue;
  }

  // legend_table - computed: false, optional: true, required: false
  private _legendTable = new DashboardWidgetSunburstDefinitionLegendTableOutputReference(this, "legend_table", true);
  public get legendTable() {
    return this._legendTable;
  }
  public putLegendTable(value: DashboardWidgetSunburstDefinitionLegendTable) {
    this._legendTable.internalValue = value;
  }
  public resetLegendTable() {
    this._legendTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendTableInput() {
    return this._legendTable.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request?: DashboardWidgetSunburstDefinitionRequest[] | cdktf.IResolvable; 
  public get request() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request');
  }
  public set request(value: DashboardWidgetSunburstDefinitionRequest[] | cdktf.IResolvable) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface DashboardWidgetTimeseriesDefinitionCustomLink {
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

export function dashboardWidgetTimeseriesDefinitionCustomLinkToTerraform(struct?: DashboardWidgetTimeseriesDefinitionCustomLink | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionEvent {
  /**
  * The event query to use in the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#q Dashboard#q}
  */
  readonly q: string;
  /**
  * The execution method for multi-value filters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#tags_execution Dashboard#tags_execution}
  */
  readonly tagsExecution?: string;
}

export function dashboardWidgetTimeseriesDefinitionEventToTerraform(struct?: DashboardWidgetTimeseriesDefinitionEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    q: cdktf.stringToTerraform(struct!.q),
    tags_execution: cdktf.stringToTerraform(struct!.tagsExecution),
  }
}

export interface DashboardWidgetTimeseriesDefinitionMarker {
  /**
  * How the marker lines are displayed, options are one of {`error`, `warning`, `info`, `ok`} combined with one of {`dashed`, `solid`, `bold`}. Example: `error dashed`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#display_type Dashboard#display_type}
  */
  readonly displayType?: string;
  /**
  * A label for the line or range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * A mathematical expression describing the marker, for example: `y > 1`, `-5 < y < 0`, `y = 19`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardWidgetTimeseriesDefinitionMarkerToTerraform(struct?: DashboardWidgetTimeseriesDefinitionMarker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_type: cdktf.stringToTerraform(struct!.displayType),
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetTimeseriesDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestApmQueryMultiCompute {
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

export function dashboardWidgetTimeseriesDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestApmQuery {
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
  readonly computeQuery?: DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetTimeseriesDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetTimeseriesDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestApmQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestApmQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestApmQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestApmQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestApmQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetTimeseriesDefinitionRequestApmQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetTimeseriesDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetTimeseriesDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetTimeseriesDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQuery;
}

export function dashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupByToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestAuditQueryMultiCompute {
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

export function dashboardWidgetTimeseriesDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestAuditQuery {
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
  readonly computeQuery?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetTimeseriesDefinitionRequestAuditQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestAuditQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestAuditQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestAuditQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestAuditQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestAuditQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetTimeseriesDefinitionRequestAuditQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetTimeseriesDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetTimeseriesDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetTimeseriesDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetTimeseriesDefinitionRequestFormulaConditionalFormats {
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

export function dashboardWidgetTimeseriesDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestFormulaLimit {
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

export function dashboardWidgetTimeseriesDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestFormulaLimitOutputReference | DashboardWidgetTimeseriesDefinitionRequestFormulaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestFormulaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestFormulaLimit | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestFormulaLimit | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestFormula {
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
  readonly conditionalFormats?: DashboardWidgetTimeseriesDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable;
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetTimeseriesDefinitionRequestFormulaLimit;
}

export function dashboardWidgetTimeseriesDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
    conditional_formats: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestFormulaConditionalFormatsToTerraform)(struct!.conditionalFormats),
    limit: dashboardWidgetTimeseriesDefinitionRequestFormulaLimitToTerraform(struct!.limit),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetTimeseriesDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestLogQueryMultiCompute {
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

export function dashboardWidgetTimeseriesDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestLogQuery {
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
  readonly computeQuery?: DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetTimeseriesDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetTimeseriesDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestLogQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestLogQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestLogQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestLogQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetTimeseriesDefinitionRequestLogQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetTimeseriesDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetTimeseriesDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetTimeseriesDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetTimeseriesDefinitionRequestMetadata {
  /**
  * The expression alias.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#alias_name Dashboard#alias_name}
  */
  readonly aliasName?: string;
  /**
  * The expression name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#expression Dashboard#expression}
  */
  readonly expression: string;
}

export function dashboardWidgetTimeseriesDefinitionRequestMetadataToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_name: cdktf.stringToTerraform(struct!.aliasName),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQuery;
}

export function dashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupByToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestNetworkQueryMultiCompute {
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

export function dashboardWidgetTimeseriesDefinitionRequestNetworkQueryMultiComputeToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestNetworkQuery {
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
  readonly computeQuery?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetTimeseriesDefinitionRequestNetworkQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestNetworkQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestNetworkQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestNetworkQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestNetworkQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestNetworkQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetTimeseriesDefinitionRequestNetworkQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetTimeseriesDefinitionRequestProcessQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestProcessQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestProcessQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestProcessQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQuery {
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
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryCompute {
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

export function dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySort {
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

export function dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBy {
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
  readonly sort?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySort;
}

export function dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearchToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQueryEventQuery {
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
  readonly compute: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearch;
}

export function dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    indexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.indexes),
    name: cdktf.stringToTerraform(struct!.name),
    compute: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryComputeToTerraform)(struct!.compute),
    group_by: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupByToTerraform)(struct!.groupBy),
    search: dashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestQueryEventQuery | undefined {
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
    if (this._compute !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute = undefined;
      this._groupBy = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._compute = value.compute;
      this._groupBy = value.groupBy;
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
  private _compute?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable; 
  public get compute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('compute');
  }
  public set compute(value: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable) {
    this._compute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetTimeseriesDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // search - computed: false, optional: true, required: false
  private _search = new DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearchOutputReference(this, "search", true);
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetTimeseriesDefinitionRequestQueryEventQuerySearch) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQueryMetricQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestQueryMetricQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestQueryMetricQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestQueryMetricQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestQueryMetricQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQueryProcessQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestQueryProcessQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestQueryProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestQueryProcessQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetTimeseriesDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetTimeseriesDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetTimeseriesDefinitionRequestQueryProcessQuery;
}

export function dashboardWidgetTimeseriesDefinitionRequestQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetTimeseriesDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: dashboardWidgetTimeseriesDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: dashboardWidgetTimeseriesDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetTimeseriesDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetTimeseriesDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQuery;
}

export function dashboardWidgetTimeseriesDefinitionRequestRumQueryGroupByToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestRumQueryMultiCompute {
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

export function dashboardWidgetTimeseriesDefinitionRequestRumQueryMultiComputeToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestRumQuery {
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
  readonly computeQuery?: DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetTimeseriesDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetTimeseriesDefinitionRequestRumQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestRumQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestRumQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestRumQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestRumQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetTimeseriesDefinitionRequestRumQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetTimeseriesDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetTimeseriesDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetTimeseriesDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQuery {
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

export function dashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQuery): any {
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

export class DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupByToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRequestSecurityQueryMultiCompute {
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

export function dashboardWidgetTimeseriesDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetTimeseriesDefinitionRequestSecurityQuery {
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
  readonly computeQuery?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetTimeseriesDefinitionRequestSecurityQueryToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryOutputReference | DashboardWidgetTimeseriesDefinitionRequestSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestSecurityQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestSecurityQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetTimeseriesDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetTimeseriesDefinitionRequestStyle {
  /**
  * The type of lines displayed. Valid values are `dashed`, `dotted`, `solid`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#line_type Dashboard#line_type}
  */
  readonly lineType?: string;
  /**
  * The width of line displayed. Valid values are `normal`, `thick`, `thin`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#line_width Dashboard#line_width}
  */
  readonly lineWidth?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#palette Dashboard#palette}
  */
  readonly palette?: string;
}

export function dashboardWidgetTimeseriesDefinitionRequestStyleToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequestStyleOutputReference | DashboardWidgetTimeseriesDefinitionRequestStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    line_type: cdktf.stringToTerraform(struct!.lineType),
    line_width: cdktf.stringToTerraform(struct!.lineWidth),
    palette: cdktf.stringToTerraform(struct!.palette),
  }
}

export class DashboardWidgetTimeseriesDefinitionRequestStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRequestStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineType = this._lineType;
    }
    if (this._lineWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineWidth = this._lineWidth;
    }
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRequestStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lineType = undefined;
      this._lineWidth = undefined;
      this._palette = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lineType = value.lineType;
      this._lineWidth = value.lineWidth;
      this._palette = value.palette;
    }
  }

  // line_type - computed: false, optional: true, required: false
  private _lineType?: string; 
  public get lineType() {
    return this.getStringAttribute('line_type');
  }
  public set lineType(value: string) {
    this._lineType = value;
  }
  public resetLineType() {
    this._lineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTypeInput() {
    return this._lineType;
  }

  // line_width - computed: false, optional: true, required: false
  private _lineWidth?: string; 
  public get lineWidth() {
    return this.getStringAttribute('line_width');
  }
  public set lineWidth(value: string) {
    this._lineWidth = value;
  }
  public resetLineWidth() {
    this._lineWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineWidthInput() {
    return this._lineWidth;
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
}
export interface DashboardWidgetTimeseriesDefinitionRequest {
  /**
  * How to display the marker lines. Valid values are `area`, `bars`, `line`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#display_type Dashboard#display_type}
  */
  readonly displayType?: string;
  /**
  * A Boolean indicating whether the request uses the right or left Y-Axis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#on_right_yaxis Dashboard#on_right_yaxis}
  */
  readonly onRightYaxis?: boolean | cdktf.IResolvable;
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
  readonly apmQuery?: DashboardWidgetTimeseriesDefinitionRequestApmQuery;
  /**
  * audit_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#audit_query Dashboard#audit_query}
  */
  readonly auditQuery?: DashboardWidgetTimeseriesDefinitionRequestAuditQuery;
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetTimeseriesDefinitionRequestFormula[] | cdktf.IResolvable;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetTimeseriesDefinitionRequestLogQuery;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metadata Dashboard#metadata}
  */
  readonly metadata?: DashboardWidgetTimeseriesDefinitionRequestMetadata[] | cdktf.IResolvable;
  /**
  * network_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#network_query Dashboard#network_query}
  */
  readonly networkQuery?: DashboardWidgetTimeseriesDefinitionRequestNetworkQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetTimeseriesDefinitionRequestProcessQuery;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetTimeseriesDefinitionRequestQuery[] | cdktf.IResolvable;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetTimeseriesDefinitionRequestRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetTimeseriesDefinitionRequestSecurityQuery;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetTimeseriesDefinitionRequestStyle;
}

export function dashboardWidgetTimeseriesDefinitionRequestToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_type: cdktf.stringToTerraform(struct!.displayType),
    on_right_yaxis: cdktf.booleanToTerraform(struct!.onRightYaxis),
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetTimeseriesDefinitionRequestApmQueryToTerraform(struct!.apmQuery),
    audit_query: dashboardWidgetTimeseriesDefinitionRequestAuditQueryToTerraform(struct!.auditQuery),
    formula: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestFormulaToTerraform)(struct!.formula),
    log_query: dashboardWidgetTimeseriesDefinitionRequestLogQueryToTerraform(struct!.logQuery),
    metadata: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestMetadataToTerraform)(struct!.metadata),
    network_query: dashboardWidgetTimeseriesDefinitionRequestNetworkQueryToTerraform(struct!.networkQuery),
    process_query: dashboardWidgetTimeseriesDefinitionRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestQueryToTerraform)(struct!.query),
    rum_query: dashboardWidgetTimeseriesDefinitionRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetTimeseriesDefinitionRequestSecurityQueryToTerraform(struct!.securityQuery),
    style: dashboardWidgetTimeseriesDefinitionRequestStyleToTerraform(struct!.style),
  }
}

export interface DashboardWidgetTimeseriesDefinitionRightYaxis {
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

export function dashboardWidgetTimeseriesDefinitionRightYaxisToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRightYaxisOutputReference | DashboardWidgetTimeseriesDefinitionRightYaxis): any {
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

export class DashboardWidgetTimeseriesDefinitionRightYaxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionRightYaxis | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionRightYaxis | undefined) {
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
export interface DashboardWidgetTimeseriesDefinitionYaxis {
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

export function dashboardWidgetTimeseriesDefinitionYaxisToTerraform(struct?: DashboardWidgetTimeseriesDefinitionYaxisOutputReference | DashboardWidgetTimeseriesDefinitionYaxis): any {
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

export class DashboardWidgetTimeseriesDefinitionYaxisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinitionYaxis | undefined {
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

  public set internalValue(value: DashboardWidgetTimeseriesDefinitionYaxis | undefined) {
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
export interface DashboardWidgetTimeseriesDefinition {
  /**
  * A list of columns to display in the legend. Valid values are `value`, `avg`, `sum`, `min`, `max`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#legend_columns Dashboard#legend_columns}
  */
  readonly legendColumns?: string[];
  /**
  * The layout of the legend displayed in the widget. Valid values are `auto`, `horizontal`, `vertical`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#legend_layout Dashboard#legend_layout}
  */
  readonly legendLayout?: string;
  /**
  * The size of the legend displayed in the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#legend_size Dashboard#legend_size}
  */
  readonly legendSize?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * Whether or not to show the legend on this widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#show_legend Dashboard#show_legend}
  */
  readonly showLegend?: boolean | cdktf.IResolvable;
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
  readonly customLink?: DashboardWidgetTimeseriesDefinitionCustomLink[] | cdktf.IResolvable;
  /**
  * event block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event Dashboard#event}
  */
  readonly event?: DashboardWidgetTimeseriesDefinitionEvent[] | cdktf.IResolvable;
  /**
  * marker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#marker Dashboard#marker}
  */
  readonly marker?: DashboardWidgetTimeseriesDefinitionMarker[] | cdktf.IResolvable;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetTimeseriesDefinitionRequest[] | cdktf.IResolvable;
  /**
  * right_yaxis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#right_yaxis Dashboard#right_yaxis}
  */
  readonly rightYaxis?: DashboardWidgetTimeseriesDefinitionRightYaxis;
  /**
  * yaxis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#yaxis Dashboard#yaxis}
  */
  readonly yaxis?: DashboardWidgetTimeseriesDefinitionYaxis;
}

export function dashboardWidgetTimeseriesDefinitionToTerraform(struct?: DashboardWidgetTimeseriesDefinitionOutputReference | DashboardWidgetTimeseriesDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    legend_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.legendColumns),
    legend_layout: cdktf.stringToTerraform(struct!.legendLayout),
    legend_size: cdktf.stringToTerraform(struct!.legendSize),
    live_span: cdktf.stringToTerraform(struct!.liveSpan),
    show_legend: cdktf.booleanToTerraform(struct!.showLegend),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    custom_link: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionCustomLinkToTerraform)(struct!.customLink),
    event: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionEventToTerraform)(struct!.event),
    marker: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionMarkerToTerraform)(struct!.marker),
    request: cdktf.listMapper(dashboardWidgetTimeseriesDefinitionRequestToTerraform)(struct!.request),
    right_yaxis: dashboardWidgetTimeseriesDefinitionRightYaxisToTerraform(struct!.rightYaxis),
    yaxis: dashboardWidgetTimeseriesDefinitionYaxisToTerraform(struct!.yaxis),
  }
}

export class DashboardWidgetTimeseriesDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTimeseriesDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._legendColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendColumns = this._legendColumns;
    }
    if (this._legendLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendLayout = this._legendLayout;
    }
    if (this._legendSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.legendSize = this._legendSize;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._showLegend !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLegend = this._showLegend;
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
    if (this._customLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink = this._customLink;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._marker !== undefined) {
      hasAnyValues = true;
      internalValueResult.marker = this._marker;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._rightYaxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightYaxis = this._rightYaxis?.internalValue;
    }
    if (this._yaxis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaxis = this._yaxis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetTimeseriesDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._legendColumns = undefined;
      this._legendLayout = undefined;
      this._legendSize = undefined;
      this._liveSpan = undefined;
      this._showLegend = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink = undefined;
      this._event = undefined;
      this._marker = undefined;
      this._request = undefined;
      this._rightYaxis.internalValue = undefined;
      this._yaxis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._legendColumns = value.legendColumns;
      this._legendLayout = value.legendLayout;
      this._legendSize = value.legendSize;
      this._liveSpan = value.liveSpan;
      this._showLegend = value.showLegend;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink = value.customLink;
      this._event = value.event;
      this._marker = value.marker;
      this._request = value.request;
      this._rightYaxis.internalValue = value.rightYaxis;
      this._yaxis.internalValue = value.yaxis;
    }
  }

  // legend_columns - computed: false, optional: true, required: false
  private _legendColumns?: string[]; 
  public get legendColumns() {
    return cdktf.Fn.tolist(this.getListAttribute('legend_columns'));
  }
  public set legendColumns(value: string[]) {
    this._legendColumns = value;
  }
  public resetLegendColumns() {
    this._legendColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendColumnsInput() {
    return this._legendColumns;
  }

  // legend_layout - computed: false, optional: true, required: false
  private _legendLayout?: string; 
  public get legendLayout() {
    return this.getStringAttribute('legend_layout');
  }
  public set legendLayout(value: string) {
    this._legendLayout = value;
  }
  public resetLegendLayout() {
    this._legendLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendLayoutInput() {
    return this._legendLayout;
  }

  // legend_size - computed: false, optional: true, required: false
  private _legendSize?: string; 
  public get legendSize() {
    return this.getStringAttribute('legend_size');
  }
  public set legendSize(value: string) {
    this._legendSize = value;
  }
  public resetLegendSize() {
    this._legendSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendSizeInput() {
    return this._legendSize;
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

  // show_legend - computed: false, optional: true, required: false
  private _showLegend?: boolean | cdktf.IResolvable; 
  public get showLegend() {
    return this.getBooleanAttribute('show_legend');
  }
  public set showLegend(value: boolean | cdktf.IResolvable) {
    this._showLegend = value;
  }
  public resetShowLegend() {
    this._showLegend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLegendInput() {
    return this._showLegend;
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
  private _customLink?: DashboardWidgetTimeseriesDefinitionCustomLink[] | cdktf.IResolvable; 
  public get customLink() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_link');
  }
  public set customLink(value: DashboardWidgetTimeseriesDefinitionCustomLink[] | cdktf.IResolvable) {
    this._customLink = value;
  }
  public resetCustomLink() {
    this._customLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinkInput() {
    return this._customLink;
  }

  // event - computed: false, optional: true, required: false
  private _event?: DashboardWidgetTimeseriesDefinitionEvent[] | cdktf.IResolvable; 
  public get event() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event');
  }
  public set event(value: DashboardWidgetTimeseriesDefinitionEvent[] | cdktf.IResolvable) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // marker - computed: false, optional: true, required: false
  private _marker?: DashboardWidgetTimeseriesDefinitionMarker[] | cdktf.IResolvable; 
  public get marker() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('marker');
  }
  public set marker(value: DashboardWidgetTimeseriesDefinitionMarker[] | cdktf.IResolvable) {
    this._marker = value;
  }
  public resetMarker() {
    this._marker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markerInput() {
    return this._marker;
  }

  // request - computed: false, optional: true, required: false
  private _request?: DashboardWidgetTimeseriesDefinitionRequest[] | cdktf.IResolvable; 
  public get request() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request');
  }
  public set request(value: DashboardWidgetTimeseriesDefinitionRequest[] | cdktf.IResolvable) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // right_yaxis - computed: false, optional: true, required: false
  private _rightYaxis = new DashboardWidgetTimeseriesDefinitionRightYaxisOutputReference(this, "right_yaxis", true);
  public get rightYaxis() {
    return this._rightYaxis;
  }
  public putRightYaxis(value: DashboardWidgetTimeseriesDefinitionRightYaxis) {
    this._rightYaxis.internalValue = value;
  }
  public resetRightYaxis() {
    this._rightYaxis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightYaxisInput() {
    return this._rightYaxis.internalValue;
  }

  // yaxis - computed: false, optional: true, required: false
  private _yaxis = new DashboardWidgetTimeseriesDefinitionYaxisOutputReference(this, "yaxis", true);
  public get yaxis() {
    return this._yaxis;
  }
  public putYaxis(value: DashboardWidgetTimeseriesDefinitionYaxis) {
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
export interface DashboardWidgetToplistDefinitionCustomLink {
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

export function dashboardWidgetToplistDefinitionCustomLinkToTerraform(struct?: DashboardWidgetToplistDefinitionCustomLink | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery {
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

export function dashboardWidgetToplistDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestApmQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQuery {
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

export function dashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestApmQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute {
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

export function dashboardWidgetToplistDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestApmQuery {
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
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetToplistDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryOutputReference | DashboardWidgetToplistDefinitionRequestApmQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetToplistDefinitionRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestApmQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestApmQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetToplistDefinitionRequestApmQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestApmQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestApmQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestApmQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery {
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

export function dashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQuery {
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

export function dashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestAuditQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute {
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

export function dashboardWidgetToplistDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestAuditQuery {
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
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetToplistDefinitionRequestAuditQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryOutputReference | DashboardWidgetToplistDefinitionRequestAuditQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestAuditQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestAuditQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetToplistDefinitionRequestAuditQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestAuditQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestAuditQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetToplistDefinitionRequestConditionalFormats {
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

export function dashboardWidgetToplistDefinitionRequestConditionalFormatsToTerraform(struct?: DashboardWidgetToplistDefinitionRequestConditionalFormats | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestFormulaConditionalFormats {
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

export function dashboardWidgetToplistDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetToplistDefinitionRequestFormulaConditionalFormats | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestFormulaLimit {
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

export function dashboardWidgetToplistDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetToplistDefinitionRequestFormulaLimitOutputReference | DashboardWidgetToplistDefinitionRequestFormulaLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    order: cdktf.stringToTerraform(struct!.order),
  }
}

export class DashboardWidgetToplistDefinitionRequestFormulaLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestFormulaLimit | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestFormulaLimit | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestFormula {
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
  readonly conditionalFormats?: DashboardWidgetToplistDefinitionRequestFormulaConditionalFormats[] | cdktf.IResolvable;
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetToplistDefinitionRequestFormulaLimit;
}

export function dashboardWidgetToplistDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetToplistDefinitionRequestFormula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cell_display_mode: cdktf.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktf.stringToTerraform(struct!.formulaExpression),
    conditional_formats: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestFormulaConditionalFormatsToTerraform)(struct!.conditionalFormats),
    limit: dashboardWidgetToplistDefinitionRequestFormulaLimitToTerraform(struct!.limit),
  }
}

export interface DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery {
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

export function dashboardWidgetToplistDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestLogQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQuery {
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

export function dashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestLogQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute {
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

export function dashboardWidgetToplistDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestLogQuery {
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
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetToplistDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryOutputReference | DashboardWidgetToplistDefinitionRequestLogQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetToplistDefinitionRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestLogQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestLogQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetToplistDefinitionRequestLogQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestLogQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestLogQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestLogQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetToplistDefinitionRequestProcessQuery {
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

export function dashboardWidgetToplistDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestProcessQueryOutputReference | DashboardWidgetToplistDefinitionRequestProcessQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestProcessQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQuery {
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

export function dashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQuery {
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
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute {
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

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySort {
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

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySort): any {
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

export class DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySort | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy {
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
  readonly sort?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySort;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: dashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}

export interface DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch {
  /**
  * The events search string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQuerySearchToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export class DashboardWidgetToplistDefinitionRequestQueryEventQuerySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestQueryEventQuery {
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
  readonly compute: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#search Dashboard#search}
  */
  readonly search?: DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source: cdktf.stringToTerraform(struct!.dataSource),
    indexes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.indexes),
    name: cdktf.stringToTerraform(struct!.name),
    compute: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestQueryEventQueryComputeToTerraform)(struct!.compute),
    group_by: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestQueryEventQueryGroupByToTerraform)(struct!.groupBy),
    search: dashboardWidgetToplistDefinitionRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}

export class DashboardWidgetToplistDefinitionRequestQueryEventQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestQueryEventQuery | undefined {
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
    if (this._compute !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestQueryEventQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSource = undefined;
      this._indexes = undefined;
      this._name = undefined;
      this._compute = undefined;
      this._groupBy = undefined;
      this._search.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSource = value.dataSource;
      this._indexes = value.indexes;
      this._name = value.name;
      this._compute = value.compute;
      this._groupBy = value.groupBy;
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
  private _compute?: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable; 
  public get compute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('compute');
  }
  public set compute(value: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute[] | cdktf.IResolvable) {
    this._compute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // search - computed: false, optional: true, required: false
  private _search = new DashboardWidgetToplistDefinitionRequestQueryEventQuerySearchOutputReference(this, "search", true);
  public get search() {
    return this._search;
  }
  public putSearch(value: DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch) {
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
export interface DashboardWidgetToplistDefinitionRequestQueryMetricQuery {
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

export function dashboardWidgetToplistDefinitionRequestQueryMetricQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryMetricQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestQueryMetricQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestQueryMetricQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestQueryMetricQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestQueryProcessQuery {
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

export function dashboardWidgetToplistDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryProcessQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestQueryProcessQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestQueryProcessQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestQueryProcessQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestQuery {
  /**
  * apm_dependency_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetToplistDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetToplistDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetToplistDefinitionRequestQueryProcessQuery;
}

export function dashboardWidgetToplistDefinitionRequestQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_dependency_stats_query: dashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: dashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: dashboardWidgetToplistDefinitionRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: dashboardWidgetToplistDefinitionRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: dashboardWidgetToplistDefinitionRequestQueryProcessQueryToTerraform(struct!.processQuery),
  }
}

export interface DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery {
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

export function dashboardWidgetToplistDefinitionRequestRumQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestRumQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQuery {
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

export function dashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestRumQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestRumQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute {
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

export function dashboardWidgetToplistDefinitionRequestRumQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestRumQuery {
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
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetToplistDefinitionRequestRumQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryOutputReference | DashboardWidgetToplistDefinitionRequestRumQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetToplistDefinitionRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestRumQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestRumQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetToplistDefinitionRequestRumQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestRumQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestRumQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestRumQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery {
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

export function dashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQuery {
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

export function dashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQuery): any {
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

export class DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQuery | undefined) {
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
export interface DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy {
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
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestSecurityQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facet: cdktf.stringToTerraform(struct!.facet),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort_query: dashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}

export interface DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute {
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

export function dashboardWidgetToplistDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute | cdktf.IResolvable): any {
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

export interface DashboardWidgetToplistDefinitionRequestSecurityQuery {
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
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable;
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable;
}

export function dashboardWidgetToplistDefinitionRequestSecurityQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryOutputReference | DashboardWidgetToplistDefinitionRequestSecurityQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    search_query: cdktf.stringToTerraform(struct!.searchQuery),
    compute_query: dashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestSecurityQueryGroupByToTerraform)(struct!.groupBy),
    multi_compute: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestSecurityQueryMultiComputeToTerraform)(struct!.multiCompute),
  }
}

export class DashboardWidgetToplistDefinitionRequestSecurityQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestSecurityQuery | undefined {
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
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._multiCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCompute = this._multiCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestSecurityQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._searchQuery = undefined;
      this._computeQuery.internalValue = undefined;
      this._groupBy = undefined;
      this._multiCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._searchQuery = value.searchQuery;
      this._computeQuery.internalValue = value.computeQuery;
      this._groupBy = value.groupBy;
      this._multiCompute = value.multiCompute;
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryOutputReference(this, "compute_query", true);
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery) {
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by');
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy[] | cdktf.IResolvable) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // multi_compute - computed: false, optional: true, required: false
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute');
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute[] | cdktf.IResolvable) {
    this._multiCompute = value;
  }
  public resetMultiCompute() {
    this._multiCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiComputeInput() {
    return this._multiCompute;
  }
}
export interface DashboardWidgetToplistDefinitionRequestStyle {
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#palette Dashboard#palette}
  */
  readonly palette?: string;
}

export function dashboardWidgetToplistDefinitionRequestStyleToTerraform(struct?: DashboardWidgetToplistDefinitionRequestStyleOutputReference | DashboardWidgetToplistDefinitionRequestStyle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    palette: cdktf.stringToTerraform(struct!.palette),
  }
}

export class DashboardWidgetToplistDefinitionRequestStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinitionRequestStyle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._palette !== undefined) {
      hasAnyValues = true;
      internalValueResult.palette = this._palette;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinitionRequestStyle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._palette = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._palette = value.palette;
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
}
export interface DashboardWidgetToplistDefinitionRequest {
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
  readonly apmQuery?: DashboardWidgetToplistDefinitionRequestApmQuery;
  /**
  * audit_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#audit_query Dashboard#audit_query}
  */
  readonly auditQuery?: DashboardWidgetToplistDefinitionRequestAuditQuery;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetToplistDefinitionRequestConditionalFormats[] | cdktf.IResolvable;
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetToplistDefinitionRequestFormula[] | cdktf.IResolvable;
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetToplistDefinitionRequestLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetToplistDefinitionRequestProcessQuery;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query Dashboard#query}
  */
  readonly query?: DashboardWidgetToplistDefinitionRequestQuery[] | cdktf.IResolvable;
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetToplistDefinitionRequestRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetToplistDefinitionRequestSecurityQuery;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#style Dashboard#style}
  */
  readonly style?: DashboardWidgetToplistDefinitionRequestStyle;
}

export function dashboardWidgetToplistDefinitionRequestToTerraform(struct?: DashboardWidgetToplistDefinitionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    q: cdktf.stringToTerraform(struct!.q),
    apm_query: dashboardWidgetToplistDefinitionRequestApmQueryToTerraform(struct!.apmQuery),
    audit_query: dashboardWidgetToplistDefinitionRequestAuditQueryToTerraform(struct!.auditQuery),
    conditional_formats: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestConditionalFormatsToTerraform)(struct!.conditionalFormats),
    formula: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestFormulaToTerraform)(struct!.formula),
    log_query: dashboardWidgetToplistDefinitionRequestLogQueryToTerraform(struct!.logQuery),
    process_query: dashboardWidgetToplistDefinitionRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestQueryToTerraform)(struct!.query),
    rum_query: dashboardWidgetToplistDefinitionRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: dashboardWidgetToplistDefinitionRequestSecurityQueryToTerraform(struct!.securityQuery),
    style: dashboardWidgetToplistDefinitionRequestStyleToTerraform(struct!.style),
  }
}

export interface DashboardWidgetToplistDefinition {
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
  readonly customLink?: DashboardWidgetToplistDefinitionCustomLink[] | cdktf.IResolvable;
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#request Dashboard#request}
  */
  readonly request?: DashboardWidgetToplistDefinitionRequest[] | cdktf.IResolvable;
}

export function dashboardWidgetToplistDefinitionToTerraform(struct?: DashboardWidgetToplistDefinitionOutputReference | DashboardWidgetToplistDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    live_span: cdktf.stringToTerraform(struct!.liveSpan),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
    custom_link: cdktf.listMapper(dashboardWidgetToplistDefinitionCustomLinkToTerraform)(struct!.customLink),
    request: cdktf.listMapper(dashboardWidgetToplistDefinitionRequestToTerraform)(struct!.request),
  }
}

export class DashboardWidgetToplistDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetToplistDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._customLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink = this._customLink;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetToplistDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._liveSpan = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
      this._customLink = undefined;
      this._request = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._liveSpan = value.liveSpan;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
      this._customLink = value.customLink;
      this._request = value.request;
    }
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
  private _customLink?: DashboardWidgetToplistDefinitionCustomLink[] | cdktf.IResolvable; 
  public get customLink() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_link');
  }
  public set customLink(value: DashboardWidgetToplistDefinitionCustomLink[] | cdktf.IResolvable) {
    this._customLink = value;
  }
  public resetCustomLink() {
    this._customLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLinkInput() {
    return this._customLink;
  }

  // request - computed: false, optional: true, required: false
  private _request?: DashboardWidgetToplistDefinitionRequest[] | cdktf.IResolvable; 
  public get request() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request');
  }
  public set request(value: DashboardWidgetToplistDefinitionRequest[] | cdktf.IResolvable) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}
export interface DashboardWidgetTraceServiceDefinition {
  /**
  * The number of columns to display. Valid values are `one_column`, `two_column`, `three_column`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#display_format Dashboard#display_format}
  */
  readonly displayFormat?: string;
  /**
  * APM environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#env Dashboard#env}
  */
  readonly env: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#service Dashboard#service}
  */
  readonly service: string;
  /**
  * Whether to show the latency breakdown or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#show_breakdown Dashboard#show_breakdown}
  */
  readonly showBreakdown?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the latency distribution or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#show_distribution Dashboard#show_distribution}
  */
  readonly showDistribution?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the error metrics or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#show_errors Dashboard#show_errors}
  */
  readonly showErrors?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the hits metrics or not
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#show_hits Dashboard#show_hits}
  */
  readonly showHits?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the latency metrics or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#show_latency Dashboard#show_latency}
  */
  readonly showLatency?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the resource list or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#show_resource_list Dashboard#show_resource_list}
  */
  readonly showResourceList?: boolean | cdktf.IResolvable;
  /**
  * The size of the widget. Valid values are `small`, `medium`, `large`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#size_format Dashboard#size_format}
  */
  readonly sizeFormat?: string;
  /**
  * APM span name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#span_name Dashboard#span_name}
  */
  readonly spanName: string;
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
}

export function dashboardWidgetTraceServiceDefinitionToTerraform(struct?: DashboardWidgetTraceServiceDefinitionOutputReference | DashboardWidgetTraceServiceDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_format: cdktf.stringToTerraform(struct!.displayFormat),
    env: cdktf.stringToTerraform(struct!.env),
    live_span: cdktf.stringToTerraform(struct!.liveSpan),
    service: cdktf.stringToTerraform(struct!.service),
    show_breakdown: cdktf.booleanToTerraform(struct!.showBreakdown),
    show_distribution: cdktf.booleanToTerraform(struct!.showDistribution),
    show_errors: cdktf.booleanToTerraform(struct!.showErrors),
    show_hits: cdktf.booleanToTerraform(struct!.showHits),
    show_latency: cdktf.booleanToTerraform(struct!.showLatency),
    show_resource_list: cdktf.booleanToTerraform(struct!.showResourceList),
    size_format: cdktf.stringToTerraform(struct!.sizeFormat),
    span_name: cdktf.stringToTerraform(struct!.spanName),
    title: cdktf.stringToTerraform(struct!.title),
    title_align: cdktf.stringToTerraform(struct!.titleAlign),
    title_size: cdktf.stringToTerraform(struct!.titleSize),
  }
}

export class DashboardWidgetTraceServiceDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetTraceServiceDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayFormat = this._displayFormat;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._liveSpan !== undefined) {
      hasAnyValues = true;
      internalValueResult.liveSpan = this._liveSpan;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._showBreakdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.showBreakdown = this._showBreakdown;
    }
    if (this._showDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDistribution = this._showDistribution;
    }
    if (this._showErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.showErrors = this._showErrors;
    }
    if (this._showHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHits = this._showHits;
    }
    if (this._showLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLatency = this._showLatency;
    }
    if (this._showResourceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.showResourceList = this._showResourceList;
    }
    if (this._sizeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeFormat = this._sizeFormat;
    }
    if (this._spanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanName = this._spanName;
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

  public set internalValue(value: DashboardWidgetTraceServiceDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayFormat = undefined;
      this._env = undefined;
      this._liveSpan = undefined;
      this._service = undefined;
      this._showBreakdown = undefined;
      this._showDistribution = undefined;
      this._showErrors = undefined;
      this._showHits = undefined;
      this._showLatency = undefined;
      this._showResourceList = undefined;
      this._sizeFormat = undefined;
      this._spanName = undefined;
      this._title = undefined;
      this._titleAlign = undefined;
      this._titleSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayFormat = value.displayFormat;
      this._env = value.env;
      this._liveSpan = value.liveSpan;
      this._service = value.service;
      this._showBreakdown = value.showBreakdown;
      this._showDistribution = value.showDistribution;
      this._showErrors = value.showErrors;
      this._showHits = value.showHits;
      this._showLatency = value.showLatency;
      this._showResourceList = value.showResourceList;
      this._sizeFormat = value.sizeFormat;
      this._spanName = value.spanName;
      this._title = value.title;
      this._titleAlign = value.titleAlign;
      this._titleSize = value.titleSize;
    }
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

  // show_breakdown - computed: false, optional: true, required: false
  private _showBreakdown?: boolean | cdktf.IResolvable; 
  public get showBreakdown() {
    return this.getBooleanAttribute('show_breakdown');
  }
  public set showBreakdown(value: boolean | cdktf.IResolvable) {
    this._showBreakdown = value;
  }
  public resetShowBreakdown() {
    this._showBreakdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBreakdownInput() {
    return this._showBreakdown;
  }

  // show_distribution - computed: false, optional: true, required: false
  private _showDistribution?: boolean | cdktf.IResolvable; 
  public get showDistribution() {
    return this.getBooleanAttribute('show_distribution');
  }
  public set showDistribution(value: boolean | cdktf.IResolvable) {
    this._showDistribution = value;
  }
  public resetShowDistribution() {
    this._showDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDistributionInput() {
    return this._showDistribution;
  }

  // show_errors - computed: false, optional: true, required: false
  private _showErrors?: boolean | cdktf.IResolvable; 
  public get showErrors() {
    return this.getBooleanAttribute('show_errors');
  }
  public set showErrors(value: boolean | cdktf.IResolvable) {
    this._showErrors = value;
  }
  public resetShowErrors() {
    this._showErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showErrorsInput() {
    return this._showErrors;
  }

  // show_hits - computed: false, optional: true, required: false
  private _showHits?: boolean | cdktf.IResolvable; 
  public get showHits() {
    return this.getBooleanAttribute('show_hits');
  }
  public set showHits(value: boolean | cdktf.IResolvable) {
    this._showHits = value;
  }
  public resetShowHits() {
    this._showHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHitsInput() {
    return this._showHits;
  }

  // show_latency - computed: false, optional: true, required: false
  private _showLatency?: boolean | cdktf.IResolvable; 
  public get showLatency() {
    return this.getBooleanAttribute('show_latency');
  }
  public set showLatency(value: boolean | cdktf.IResolvable) {
    this._showLatency = value;
  }
  public resetShowLatency() {
    this._showLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLatencyInput() {
    return this._showLatency;
  }

  // show_resource_list - computed: false, optional: true, required: false
  private _showResourceList?: boolean | cdktf.IResolvable; 
  public get showResourceList() {
    return this.getBooleanAttribute('show_resource_list');
  }
  public set showResourceList(value: boolean | cdktf.IResolvable) {
    this._showResourceList = value;
  }
  public resetShowResourceList() {
    this._showResourceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showResourceListInput() {
    return this._showResourceList;
  }

  // size_format - computed: false, optional: true, required: false
  private _sizeFormat?: string; 
  public get sizeFormat() {
    return this.getStringAttribute('size_format');
  }
  public set sizeFormat(value: string) {
    this._sizeFormat = value;
  }
  public resetSizeFormat() {
    this._sizeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeFormatInput() {
    return this._sizeFormat;
  }

  // span_name - computed: false, optional: false, required: true
  private _spanName?: string; 
  public get spanName() {
    return this.getStringAttribute('span_name');
  }
  public set spanName(value: string) {
    this._spanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spanNameInput() {
    return this._spanName;
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
export interface DashboardWidgetWidgetLayout {
  /**
  * The height of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#height Dashboard#height}
  */
  readonly height: number;
  /**
  * Whether the widget should be the first one on the second column in high density or not. Only for the new dashboard layout and only one widget in the dashboard should have this property set to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#is_column_break Dashboard#is_column_break}
  */
  readonly isColumnBreak?: boolean | cdktf.IResolvable;
  /**
  * The width of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#width Dashboard#width}
  */
  readonly width: number;
  /**
  * The position of the widget on the x (horizontal) axis. Should be greater than or equal to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#x Dashboard#x}
  */
  readonly x: number;
  /**
  * The position of the widget on the y (vertical) axis. Should be greater than or equal to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#y Dashboard#y}
  */
  readonly y: number;
}

export function dashboardWidgetWidgetLayoutToTerraform(struct?: DashboardWidgetWidgetLayoutOutputReference | DashboardWidgetWidgetLayout): any {
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

export class DashboardWidgetWidgetLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DashboardWidgetWidgetLayout | undefined {
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

  public set internalValue(value: DashboardWidgetWidgetLayout | undefined) {
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
export interface DashboardWidget {
  /**
  * alert_graph_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#alert_graph_definition Dashboard#alert_graph_definition}
  */
  readonly alertGraphDefinition?: DashboardWidgetAlertGraphDefinition;
  /**
  * alert_value_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#alert_value_definition Dashboard#alert_value_definition}
  */
  readonly alertValueDefinition?: DashboardWidgetAlertValueDefinition;
  /**
  * change_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#change_definition Dashboard#change_definition}
  */
  readonly changeDefinition?: DashboardWidgetChangeDefinition;
  /**
  * check_status_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#check_status_definition Dashboard#check_status_definition}
  */
  readonly checkStatusDefinition?: DashboardWidgetCheckStatusDefinition;
  /**
  * distribution_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#distribution_definition Dashboard#distribution_definition}
  */
  readonly distributionDefinition?: DashboardWidgetDistributionDefinition;
  /**
  * event_stream_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_stream_definition Dashboard#event_stream_definition}
  */
  readonly eventStreamDefinition?: DashboardWidgetEventStreamDefinition;
  /**
  * event_timeline_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#event_timeline_definition Dashboard#event_timeline_definition}
  */
  readonly eventTimelineDefinition?: DashboardWidgetEventTimelineDefinition;
  /**
  * free_text_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#free_text_definition Dashboard#free_text_definition}
  */
  readonly freeTextDefinition?: DashboardWidgetFreeTextDefinition;
  /**
  * geomap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#geomap_definition Dashboard#geomap_definition}
  */
  readonly geomapDefinition?: DashboardWidgetGeomapDefinition;
  /**
  * group_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#group_definition Dashboard#group_definition}
  */
  readonly groupDefinition?: DashboardWidgetGroupDefinition;
  /**
  * heatmap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#heatmap_definition Dashboard#heatmap_definition}
  */
  readonly heatmapDefinition?: DashboardWidgetHeatmapDefinition;
  /**
  * hostmap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#hostmap_definition Dashboard#hostmap_definition}
  */
  readonly hostmapDefinition?: DashboardWidgetHostmapDefinition;
  /**
  * iframe_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#iframe_definition Dashboard#iframe_definition}
  */
  readonly iframeDefinition?: DashboardWidgetIframeDefinition;
  /**
  * image_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#image_definition Dashboard#image_definition}
  */
  readonly imageDefinition?: DashboardWidgetImageDefinition;
  /**
  * log_stream_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#log_stream_definition Dashboard#log_stream_definition}
  */
  readonly logStreamDefinition?: DashboardWidgetLogStreamDefinition;
  /**
  * manage_status_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#manage_status_definition Dashboard#manage_status_definition}
  */
  readonly manageStatusDefinition?: DashboardWidgetManageStatusDefinition;
  /**
  * note_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#note_definition Dashboard#note_definition}
  */
  readonly noteDefinition?: DashboardWidgetNoteDefinition;
  /**
  * query_table_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query_table_definition Dashboard#query_table_definition}
  */
  readonly queryTableDefinition?: DashboardWidgetQueryTableDefinition;
  /**
  * query_value_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#query_value_definition Dashboard#query_value_definition}
  */
  readonly queryValueDefinition?: DashboardWidgetQueryValueDefinition;
  /**
  * scatterplot_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#scatterplot_definition Dashboard#scatterplot_definition}
  */
  readonly scatterplotDefinition?: DashboardWidgetScatterplotDefinition;
  /**
  * service_level_objective_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#service_level_objective_definition Dashboard#service_level_objective_definition}
  */
  readonly serviceLevelObjectiveDefinition?: DashboardWidgetServiceLevelObjectiveDefinition;
  /**
  * servicemap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#servicemap_definition Dashboard#servicemap_definition}
  */
  readonly servicemapDefinition?: DashboardWidgetServicemapDefinition;
  /**
  * sunburst_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#sunburst_definition Dashboard#sunburst_definition}
  */
  readonly sunburstDefinition?: DashboardWidgetSunburstDefinition;
  /**
  * timeseries_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#timeseries_definition Dashboard#timeseries_definition}
  */
  readonly timeseriesDefinition?: DashboardWidgetTimeseriesDefinition;
  /**
  * toplist_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#toplist_definition Dashboard#toplist_definition}
  */
  readonly toplistDefinition?: DashboardWidgetToplistDefinition;
  /**
  * trace_service_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#trace_service_definition Dashboard#trace_service_definition}
  */
  readonly traceServiceDefinition?: DashboardWidgetTraceServiceDefinition;
  /**
  * widget_layout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard#widget_layout Dashboard#widget_layout}
  */
  readonly widgetLayout?: DashboardWidgetWidgetLayout;
}

export function dashboardWidgetToTerraform(struct?: DashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_graph_definition: dashboardWidgetAlertGraphDefinitionToTerraform(struct!.alertGraphDefinition),
    alert_value_definition: dashboardWidgetAlertValueDefinitionToTerraform(struct!.alertValueDefinition),
    change_definition: dashboardWidgetChangeDefinitionToTerraform(struct!.changeDefinition),
    check_status_definition: dashboardWidgetCheckStatusDefinitionToTerraform(struct!.checkStatusDefinition),
    distribution_definition: dashboardWidgetDistributionDefinitionToTerraform(struct!.distributionDefinition),
    event_stream_definition: dashboardWidgetEventStreamDefinitionToTerraform(struct!.eventStreamDefinition),
    event_timeline_definition: dashboardWidgetEventTimelineDefinitionToTerraform(struct!.eventTimelineDefinition),
    free_text_definition: dashboardWidgetFreeTextDefinitionToTerraform(struct!.freeTextDefinition),
    geomap_definition: dashboardWidgetGeomapDefinitionToTerraform(struct!.geomapDefinition),
    group_definition: dashboardWidgetGroupDefinitionToTerraform(struct!.groupDefinition),
    heatmap_definition: dashboardWidgetHeatmapDefinitionToTerraform(struct!.heatmapDefinition),
    hostmap_definition: dashboardWidgetHostmapDefinitionToTerraform(struct!.hostmapDefinition),
    iframe_definition: dashboardWidgetIframeDefinitionToTerraform(struct!.iframeDefinition),
    image_definition: dashboardWidgetImageDefinitionToTerraform(struct!.imageDefinition),
    log_stream_definition: dashboardWidgetLogStreamDefinitionToTerraform(struct!.logStreamDefinition),
    manage_status_definition: dashboardWidgetManageStatusDefinitionToTerraform(struct!.manageStatusDefinition),
    note_definition: dashboardWidgetNoteDefinitionToTerraform(struct!.noteDefinition),
    query_table_definition: dashboardWidgetQueryTableDefinitionToTerraform(struct!.queryTableDefinition),
    query_value_definition: dashboardWidgetQueryValueDefinitionToTerraform(struct!.queryValueDefinition),
    scatterplot_definition: dashboardWidgetScatterplotDefinitionToTerraform(struct!.scatterplotDefinition),
    service_level_objective_definition: dashboardWidgetServiceLevelObjectiveDefinitionToTerraform(struct!.serviceLevelObjectiveDefinition),
    servicemap_definition: dashboardWidgetServicemapDefinitionToTerraform(struct!.servicemapDefinition),
    sunburst_definition: dashboardWidgetSunburstDefinitionToTerraform(struct!.sunburstDefinition),
    timeseries_definition: dashboardWidgetTimeseriesDefinitionToTerraform(struct!.timeseriesDefinition),
    toplist_definition: dashboardWidgetToplistDefinitionToTerraform(struct!.toplistDefinition),
    trace_service_definition: dashboardWidgetTraceServiceDefinitionToTerraform(struct!.traceServiceDefinition),
    widget_layout: dashboardWidgetWidgetLayoutToTerraform(struct!.widgetLayout),
  }
}

