import * as cdktf from 'cdktf';
import { DashboardWidgetTimeseriesDefinitionCustomLink,
dashboardWidgetTimeseriesDefinitionCustomLinkToTerraform,
DashboardWidgetTimeseriesDefinitionEvent,
dashboardWidgetTimeseriesDefinitionEventToTerraform,
DashboardWidgetTimeseriesDefinitionMarker,
dashboardWidgetTimeseriesDefinitionMarkerToTerraform,
DashboardWidgetTimeseriesDefinitionRequest,
dashboardWidgetTimeseriesDefinitionRequestToTerraform,
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
export interface DashboardWidgetTimeseriesDefinitionRightYaxis {
  /**
  * Always include zero or fit the axis to the data range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#include_zero Dashboard#include_zero}
  */
  readonly includeZero?: boolean | cdktf.IResolvable;
  /**
  * The label of the axis to display on the graph.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * Specify the maximum value to show on the Y-axis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#max Dashboard#max}
  */
  readonly max?: string;
  /**
  * Specify the minimum value to show on the Y-axis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#min Dashboard#min}
  */
  readonly min?: string;
  /**
  * Specify the scale type, options: `linear`, `log`, `pow`, `sqrt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#scale Dashboard#scale}
  */
  readonly scale?: string;
}

export function dashboardWidgetTimeseriesDefinitionRightYaxisToTerraform(struct?: DashboardWidgetTimeseriesDefinitionRightYaxisOutputReference | DashboardWidgetTimeseriesDefinitionRightYaxis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
    return this.getBooleanAttribute('include_zero') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#include_zero Dashboard#include_zero}
  */
  readonly includeZero?: boolean | cdktf.IResolvable;
  /**
  * The label of the axis to display on the graph.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * Specify the maximum value to show on the Y-axis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#max Dashboard#max}
  */
  readonly max?: string;
  /**
  * Specify the minimum value to show on the Y-axis.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#min Dashboard#min}
  */
  readonly min?: string;
  /**
  * Specify the scale type, options: `linear`, `log`, `pow`, `sqrt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#scale Dashboard#scale}
  */
  readonly scale?: string;
}

export function dashboardWidgetTimeseriesDefinitionYaxisToTerraform(struct?: DashboardWidgetTimeseriesDefinitionYaxisOutputReference | DashboardWidgetTimeseriesDefinitionYaxis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
    return this.getBooleanAttribute('include_zero') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#legend_columns Dashboard#legend_columns}
  */
  readonly legendColumns?: string[];
  /**
  * The layout of the legend displayed in the widget. Valid values are `auto`, `horizontal`, `vertical`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#legend_layout Dashboard#legend_layout}
  */
  readonly legendLayout?: string;
  /**
  * The size of the legend displayed in the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#legend_size Dashboard#legend_size}
  */
  readonly legendSize?: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * Whether or not to show the legend on this widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#show_legend Dashboard#show_legend}
  */
  readonly showLegend?: boolean | cdktf.IResolvable;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#custom_link Dashboard#custom_link}
  */
  readonly customLink?: DashboardWidgetTimeseriesDefinitionCustomLink[];
  /**
  * event block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#event Dashboard#event}
  */
  readonly event?: DashboardWidgetTimeseriesDefinitionEvent[];
  /**
  * marker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#marker Dashboard#marker}
  */
  readonly marker?: DashboardWidgetTimeseriesDefinitionMarker[];
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#request Dashboard#request}
  */
  readonly request?: DashboardWidgetTimeseriesDefinitionRequest[];
  /**
  * right_yaxis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#right_yaxis Dashboard#right_yaxis}
  */
  readonly rightYaxis?: DashboardWidgetTimeseriesDefinitionRightYaxis;
  /**
  * yaxis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#yaxis Dashboard#yaxis}
  */
  readonly yaxis?: DashboardWidgetTimeseriesDefinitionYaxis;
}

export function dashboardWidgetTimeseriesDefinitionToTerraform(struct?: DashboardWidgetTimeseriesDefinitionOutputReference | DashboardWidgetTimeseriesDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
    return this.getListAttribute('legend_columns');
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
    return this.getBooleanAttribute('show_legend') as any;
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
  private _customLink?: DashboardWidgetTimeseriesDefinitionCustomLink[]; 
  public get customLink() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_link') as any;
  }
  public set customLink(value: DashboardWidgetTimeseriesDefinitionCustomLink[]) {
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
  private _event?: DashboardWidgetTimeseriesDefinitionEvent[]; 
  public get event() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event') as any;
  }
  public set event(value: DashboardWidgetTimeseriesDefinitionEvent[]) {
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
  private _marker?: DashboardWidgetTimeseriesDefinitionMarker[]; 
  public get marker() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('marker') as any;
  }
  public set marker(value: DashboardWidgetTimeseriesDefinitionMarker[]) {
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
  private _request?: DashboardWidgetTimeseriesDefinitionRequest[]; 
  public get request() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request') as any;
  }
  public set request(value: DashboardWidgetTimeseriesDefinitionRequest[]) {
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
  private _rightYaxis = new DashboardWidgetTimeseriesDefinitionRightYaxisOutputReference(this as any, "right_yaxis", true);
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
  private _yaxis = new DashboardWidgetTimeseriesDefinitionYaxisOutputReference(this as any, "yaxis", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#is_hidden Dashboard#is_hidden}
  */
  readonly isHidden?: boolean | cdktf.IResolvable;
  /**
  * The label for the custom link URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#link Dashboard#link}
  */
  readonly link?: string;
  /**
  * The label id that refers to a context menu link item. When override_label is provided, the client request omits the label field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#override_label Dashboard#override_label}
  */
  readonly overrideLabel?: string;
}

export function dashboardWidgetToplistDefinitionCustomLinkToTerraform(struct?: DashboardWidgetToplistDefinitionCustomLink): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestApmQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestApmQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestApmQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestApmQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy[];
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute[];
}

export function dashboardWidgetToplistDefinitionRequestApmQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestApmQueryOutputReference | DashboardWidgetToplistDefinitionRequestApmQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestApmQueryComputeQueryOutputReference(this as any, "compute_query", true);
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy[]; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestApmQueryGroupBy[]) {
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
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute[]; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute') as any;
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestApmQueryMultiCompute[]) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestAuditQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestAuditQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestAuditQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy[];
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute[];
}

export function dashboardWidgetToplistDefinitionRequestAuditQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestAuditQueryOutputReference | DashboardWidgetToplistDefinitionRequestAuditQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestAuditQueryComputeQueryOutputReference(this as any, "compute_query", true);
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy[]; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestAuditQueryGroupBy[]) {
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
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute[]; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute') as any;
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestAuditQueryMultiCompute[]) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetToplistDefinitionRequestConditionalFormatsToTerraform(struct?: DashboardWidgetToplistDefinitionRequestConditionalFormats): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#comparator Dashboard#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#custom_bg_color Dashboard#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#custom_fg_color Dashboard#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#hide_value Dashboard#hide_value}
  */
  readonly hideValue?: boolean | cdktf.IResolvable;
  /**
  * Displays an image as the background.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#image_url Dashboard#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#palette Dashboard#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#value Dashboard#value}
  */
  readonly value: number;
}

export function dashboardWidgetToplistDefinitionRequestFormulaConditionalFormatsToTerraform(struct?: DashboardWidgetToplistDefinitionRequestFormulaConditionalFormats): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#count Dashboard#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetToplistDefinitionRequestFormulaLimitToTerraform(struct?: DashboardWidgetToplistDefinitionRequestFormulaLimitOutputReference | DashboardWidgetToplistDefinitionRequestFormulaLimit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#alias Dashboard#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#cell_display_mode Dashboard#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#formula_expression Dashboard#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetToplistDefinitionRequestFormulaConditionalFormats[];
  /**
  * limit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: DashboardWidgetToplistDefinitionRequestFormulaLimit;
}

export function dashboardWidgetToplistDefinitionRequestFormulaToTerraform(struct?: DashboardWidgetToplistDefinitionRequestFormula): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestLogQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestLogQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestLogQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestLogQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy[];
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute[];
}

export function dashboardWidgetToplistDefinitionRequestLogQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestLogQueryOutputReference | DashboardWidgetToplistDefinitionRequestLogQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestLogQueryComputeQueryOutputReference(this as any, "compute_query", true);
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy[]; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestLogQueryGroupBy[]) {
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
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute[]; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute') as any;
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestLogQueryMultiCompute[]) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#filter_by Dashboard#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#search_by Dashboard#search_by}
  */
  readonly searchBy?: string;
}

export function dashboardWidgetToplistDefinitionRequestProcessQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestProcessQueryOutputReference | DashboardWidgetToplistDefinitionRequestProcessQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#is_upstream Dashboard#is_upstream}
  */
  readonly isUpstream?: boolean | cdktf.IResolvable;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#operation_name Dashboard#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#resource_name Dashboard#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
    return this.getBooleanAttribute('is_upstream') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * APM Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#env Dashboard#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_by Dashboard#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#operation_name Dashboard#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#primary_tag_name Dashboard#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#primary_tag_value Dashboard#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#resource_name Dashboard#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#service Dashboard#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#stat Dashboard#stat}
  */
  readonly stat: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#metric Dashboard#metric}
  */
  readonly metric?: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#order Dashboard#order}
  */
  readonly order?: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySortToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySortOutputReference | DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#sort Dashboard#sort}
  */
  readonly sort?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBySort;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQuerySearchToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQuerySearchOutputReference | DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#indexes Dashboard#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#name Dashboard#name}
  */
  readonly name: string;
  /**
  * compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#compute Dashboard#compute}
  */
  readonly compute: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute[];
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy[];
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#search Dashboard#search}
  */
  readonly search?: DashboardWidgetToplistDefinitionRequestQueryEventQuerySearch;
}

export function dashboardWidgetToplistDefinitionRequestQueryEventQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryEventQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryEventQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  private _compute?: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute[]; 
  public get compute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('compute') as any;
  }
  public set compute(value: DashboardWidgetToplistDefinitionRequestQueryEventQueryCompute[]) {
    this._compute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy[]; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestQueryEventQueryGroupBy[]) {
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
  private _search = new DashboardWidgetToplistDefinitionRequestQueryEventQuerySearchOutputReference(this as any, "search", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for metrics queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#data_source Dashboard#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#query Dashboard#query}
  */
  readonly query: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryMetricQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryMetricQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryMetricQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregator Dashboard#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#data_source Dashboard#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#is_normalized_cpu Dashboard#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktf.IResolvable;
  /**
  * The number of hits to return.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#sort Dashboard#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#tag_filters Dashboard#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#text_filter Dashboard#text_filter}
  */
  readonly textFilter?: string;
}

export function dashboardWidgetToplistDefinitionRequestQueryProcessQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQueryProcessQueryOutputReference | DashboardWidgetToplistDefinitionRequestQueryProcessQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
    return this.getBooleanAttribute('is_normalized_cpu') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#apm_dependency_stats_query Dashboard#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: DashboardWidgetToplistDefinitionRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#apm_resource_stats_query Dashboard#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: DashboardWidgetToplistDefinitionRequestQueryApmResourceStatsQuery;
  /**
  * event_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#event_query Dashboard#event_query}
  */
  readonly eventQuery?: DashboardWidgetToplistDefinitionRequestQueryEventQuery;
  /**
  * metric_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#metric_query Dashboard#metric_query}
  */
  readonly metricQuery?: DashboardWidgetToplistDefinitionRequestQueryMetricQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetToplistDefinitionRequestQueryProcessQuery;
}

export function dashboardWidgetToplistDefinitionRequestQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestRumQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestRumQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestRumQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestRumQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy[];
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute[];
}

export function dashboardWidgetToplistDefinitionRequestRumQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestRumQueryOutputReference | DashboardWidgetToplistDefinitionRequestRumQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestRumQueryComputeQueryOutputReference(this as any, "compute_query", true);
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy[]; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestRumQueryGroupBy[]) {
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
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute[]; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute') as any;
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestRumQueryMultiCompute[]) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryOutputReference | DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#order Dashboard#order}
  */
  readonly order: string;
}

export function dashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQueryOutputReference | DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#sort_query Dashboard#sort_query}
  */
  readonly sortQuery?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBySortQuery;
}

export function dashboardWidgetToplistDefinitionRequestSecurityQueryGroupByToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#facet Dashboard#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#interval Dashboard#interval}
  */
  readonly interval?: number;
}

export function dashboardWidgetToplistDefinitionRequestSecurityQueryMultiComputeToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#index Dashboard#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#search_query Dashboard#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#compute_query Dashboard#compute_query}
  */
  readonly computeQuery?: DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_by Dashboard#group_by}
  */
  readonly groupBy?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy[];
  /**
  * multi_compute block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#multi_compute Dashboard#multi_compute}
  */
  readonly multiCompute?: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute[];
}

export function dashboardWidgetToplistDefinitionRequestSecurityQueryToTerraform(struct?: DashboardWidgetToplistDefinitionRequestSecurityQueryOutputReference | DashboardWidgetToplistDefinitionRequestSecurityQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  private _computeQuery = new DashboardWidgetToplistDefinitionRequestSecurityQueryComputeQueryOutputReference(this as any, "compute_query", true);
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
  private _groupBy?: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy[]; 
  public get groupBy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_by') as any;
  }
  public set groupBy(value: DashboardWidgetToplistDefinitionRequestSecurityQueryGroupBy[]) {
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
  private _multiCompute?: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute[]; 
  public get multiCompute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('multi_compute') as any;
  }
  public set multiCompute(value: DashboardWidgetToplistDefinitionRequestSecurityQueryMultiCompute[]) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#palette Dashboard#palette}
  */
  readonly palette?: string;
}

export function dashboardWidgetToplistDefinitionRequestStyleToTerraform(struct?: DashboardWidgetToplistDefinitionRequestStyleOutputReference | DashboardWidgetToplistDefinitionRequestStyle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#q Dashboard#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#apm_query Dashboard#apm_query}
  */
  readonly apmQuery?: DashboardWidgetToplistDefinitionRequestApmQuery;
  /**
  * audit_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#audit_query Dashboard#audit_query}
  */
  readonly auditQuery?: DashboardWidgetToplistDefinitionRequestAuditQuery;
  /**
  * conditional_formats block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#conditional_formats Dashboard#conditional_formats}
  */
  readonly conditionalFormats?: DashboardWidgetToplistDefinitionRequestConditionalFormats[];
  /**
  * formula block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#formula Dashboard#formula}
  */
  readonly formula?: DashboardWidgetToplistDefinitionRequestFormula[];
  /**
  * log_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#log_query Dashboard#log_query}
  */
  readonly logQuery?: DashboardWidgetToplistDefinitionRequestLogQuery;
  /**
  * process_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#process_query Dashboard#process_query}
  */
  readonly processQuery?: DashboardWidgetToplistDefinitionRequestProcessQuery;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#query Dashboard#query}
  */
  readonly query?: DashboardWidgetToplistDefinitionRequestQuery[];
  /**
  * rum_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#rum_query Dashboard#rum_query}
  */
  readonly rumQuery?: DashboardWidgetToplistDefinitionRequestRumQuery;
  /**
  * security_query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#security_query Dashboard#security_query}
  */
  readonly securityQuery?: DashboardWidgetToplistDefinitionRequestSecurityQuery;
  /**
  * style block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#style Dashboard#style}
  */
  readonly style?: DashboardWidgetToplistDefinitionRequestStyle;
}

export function dashboardWidgetToplistDefinitionRequestToTerraform(struct?: DashboardWidgetToplistDefinitionRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_link block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#custom_link Dashboard#custom_link}
  */
  readonly customLink?: DashboardWidgetToplistDefinitionCustomLink[];
  /**
  * request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#request Dashboard#request}
  */
  readonly request?: DashboardWidgetToplistDefinitionRequest[];
}

export function dashboardWidgetToplistDefinitionToTerraform(struct?: DashboardWidgetToplistDefinitionOutputReference | DashboardWidgetToplistDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
  private _customLink?: DashboardWidgetToplistDefinitionCustomLink[]; 
  public get customLink() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_link') as any;
  }
  public set customLink(value: DashboardWidgetToplistDefinitionCustomLink[]) {
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
  private _request?: DashboardWidgetToplistDefinitionRequest[]; 
  public get request() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request') as any;
  }
  public set request(value: DashboardWidgetToplistDefinitionRequest[]) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#display_format Dashboard#display_format}
  */
  readonly displayFormat?: string;
  /**
  * APM environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#env Dashboard#env}
  */
  readonly env: string;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `1y`, `alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#live_span Dashboard#live_span}
  */
  readonly liveSpan?: string;
  /**
  * APM service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#service Dashboard#service}
  */
  readonly service: string;
  /**
  * Whether to show the latency breakdown or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#show_breakdown Dashboard#show_breakdown}
  */
  readonly showBreakdown?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the latency distribution or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#show_distribution Dashboard#show_distribution}
  */
  readonly showDistribution?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the error metrics or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#show_errors Dashboard#show_errors}
  */
  readonly showErrors?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the hits metrics or not
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#show_hits Dashboard#show_hits}
  */
  readonly showHits?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the latency metrics or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#show_latency Dashboard#show_latency}
  */
  readonly showLatency?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the resource list or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#show_resource_list Dashboard#show_resource_list}
  */
  readonly showResourceList?: boolean | cdktf.IResolvable;
  /**
  * The size of the widget. Valid values are `small`, `medium`, `large`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#size_format Dashboard#size_format}
  */
  readonly sizeFormat?: string;
  /**
  * APM span name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#span_name Dashboard#span_name}
  */
  readonly spanName: string;
  /**
  * The title of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title_align Dashboard#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#title_size Dashboard#title_size}
  */
  readonly titleSize?: string;
}

export function dashboardWidgetTraceServiceDefinitionToTerraform(struct?: DashboardWidgetTraceServiceDefinitionOutputReference | DashboardWidgetTraceServiceDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
    return this.getBooleanAttribute('show_breakdown') as any;
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
    return this.getBooleanAttribute('show_distribution') as any;
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
    return this.getBooleanAttribute('show_errors') as any;
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
    return this.getBooleanAttribute('show_hits') as any;
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
    return this.getBooleanAttribute('show_latency') as any;
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
    return this.getBooleanAttribute('show_resource_list') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#height Dashboard#height}
  */
  readonly height: number;
  /**
  * Whether the widget should be the first one on the second column in high density or not. Only for the new dashboard layout and only one widget in the dashboard should have this property set to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#is_column_break Dashboard#is_column_break}
  */
  readonly isColumnBreak?: boolean | cdktf.IResolvable;
  /**
  * The width of the widget.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#width Dashboard#width}
  */
  readonly width: number;
  /**
  * The position of the widget on the x (horizontal) axis. Should be greater than or equal to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#x Dashboard#x}
  */
  readonly x: number;
  /**
  * The position of the widget on the y (vertical) axis. Should be greater than or equal to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#y Dashboard#y}
  */
  readonly y: number;
}

export function dashboardWidgetWidgetLayoutToTerraform(struct?: DashboardWidgetWidgetLayoutOutputReference | DashboardWidgetWidgetLayout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
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
    return this.getBooleanAttribute('is_column_break') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#alert_graph_definition Dashboard#alert_graph_definition}
  */
  readonly alertGraphDefinition?: DashboardWidgetAlertGraphDefinition;
  /**
  * alert_value_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#alert_value_definition Dashboard#alert_value_definition}
  */
  readonly alertValueDefinition?: DashboardWidgetAlertValueDefinition;
  /**
  * change_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#change_definition Dashboard#change_definition}
  */
  readonly changeDefinition?: DashboardWidgetChangeDefinition;
  /**
  * check_status_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#check_status_definition Dashboard#check_status_definition}
  */
  readonly checkStatusDefinition?: DashboardWidgetCheckStatusDefinition;
  /**
  * distribution_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#distribution_definition Dashboard#distribution_definition}
  */
  readonly distributionDefinition?: DashboardWidgetDistributionDefinition;
  /**
  * event_stream_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#event_stream_definition Dashboard#event_stream_definition}
  */
  readonly eventStreamDefinition?: DashboardWidgetEventStreamDefinition;
  /**
  * event_timeline_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#event_timeline_definition Dashboard#event_timeline_definition}
  */
  readonly eventTimelineDefinition?: DashboardWidgetEventTimelineDefinition;
  /**
  * free_text_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#free_text_definition Dashboard#free_text_definition}
  */
  readonly freeTextDefinition?: DashboardWidgetFreeTextDefinition;
  /**
  * geomap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#geomap_definition Dashboard#geomap_definition}
  */
  readonly geomapDefinition?: DashboardWidgetGeomapDefinition;
  /**
  * group_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#group_definition Dashboard#group_definition}
  */
  readonly groupDefinition?: DashboardWidgetGroupDefinition;
  /**
  * heatmap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#heatmap_definition Dashboard#heatmap_definition}
  */
  readonly heatmapDefinition?: DashboardWidgetHeatmapDefinition;
  /**
  * hostmap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#hostmap_definition Dashboard#hostmap_definition}
  */
  readonly hostmapDefinition?: DashboardWidgetHostmapDefinition;
  /**
  * iframe_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#iframe_definition Dashboard#iframe_definition}
  */
  readonly iframeDefinition?: DashboardWidgetIframeDefinition;
  /**
  * image_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#image_definition Dashboard#image_definition}
  */
  readonly imageDefinition?: DashboardWidgetImageDefinition;
  /**
  * log_stream_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#log_stream_definition Dashboard#log_stream_definition}
  */
  readonly logStreamDefinition?: DashboardWidgetLogStreamDefinition;
  /**
  * manage_status_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#manage_status_definition Dashboard#manage_status_definition}
  */
  readonly manageStatusDefinition?: DashboardWidgetManageStatusDefinition;
  /**
  * note_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#note_definition Dashboard#note_definition}
  */
  readonly noteDefinition?: DashboardWidgetNoteDefinition;
  /**
  * query_table_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#query_table_definition Dashboard#query_table_definition}
  */
  readonly queryTableDefinition?: DashboardWidgetQueryTableDefinition;
  /**
  * query_value_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#query_value_definition Dashboard#query_value_definition}
  */
  readonly queryValueDefinition?: DashboardWidgetQueryValueDefinition;
  /**
  * scatterplot_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#scatterplot_definition Dashboard#scatterplot_definition}
  */
  readonly scatterplotDefinition?: DashboardWidgetScatterplotDefinition;
  /**
  * service_level_objective_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#service_level_objective_definition Dashboard#service_level_objective_definition}
  */
  readonly serviceLevelObjectiveDefinition?: DashboardWidgetServiceLevelObjectiveDefinition;
  /**
  * servicemap_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#servicemap_definition Dashboard#servicemap_definition}
  */
  readonly servicemapDefinition?: DashboardWidgetServicemapDefinition;
  /**
  * timeseries_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#timeseries_definition Dashboard#timeseries_definition}
  */
  readonly timeseriesDefinition?: DashboardWidgetTimeseriesDefinition;
  /**
  * toplist_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#toplist_definition Dashboard#toplist_definition}
  */
  readonly toplistDefinition?: DashboardWidgetToplistDefinition;
  /**
  * trace_service_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#trace_service_definition Dashboard#trace_service_definition}
  */
  readonly traceServiceDefinition?: DashboardWidgetTraceServiceDefinition;
  /**
  * widget_layout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/dashboard.html#widget_layout Dashboard#widget_layout}
  */
  readonly widgetLayout?: DashboardWidgetWidgetLayout;
}

export function dashboardWidgetToTerraform(struct?: DashboardWidget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    timeseries_definition: dashboardWidgetTimeseriesDefinitionToTerraform(struct!.timeseriesDefinition),
    toplist_definition: dashboardWidgetToplistDefinitionToTerraform(struct!.toplistDefinition),
    trace_service_definition: dashboardWidgetTraceServiceDefinitionToTerraform(struct!.traceServiceDefinition),
    widget_layout: dashboardWidgetWidgetLayoutToTerraform(struct!.widgetLayout),
  }
}

