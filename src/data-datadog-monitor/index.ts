// https://www.terraform.io/docs/providers/datadog/d/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitor#id DataDatadogMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitor#monitor_tags_filter DataDatadogMonitor#monitor_tags_filter}
  */
  readonly monitorTagsFilter?: string[];
  /**
  * A monitor name to limit the search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitor#name_filter DataDatadogMonitor#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * A list of tags to limit the search. This filters on the monitor scope.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/monitor#tags_filter DataDatadogMonitor#tags_filter}
  */
  readonly tagsFilter?: string[];
}
export interface DataDatadogMonitorMonitorThresholdWindows {
}

export function dataDatadogMonitorMonitorThresholdWindowsToTerraform(struct?: DataDatadogMonitorMonitorThresholdWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogMonitorMonitorThresholdWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogMonitorMonitorThresholdWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogMonitorMonitorThresholdWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recovery_window - computed: true, optional: false, required: false
  public get recoveryWindow() {
    return this.getStringAttribute('recovery_window');
  }

  // trigger_window - computed: true, optional: false, required: false
  public get triggerWindow() {
    return this.getStringAttribute('trigger_window');
  }
}

export class DataDatadogMonitorMonitorThresholdWindowsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogMonitorMonitorThresholdWindowsOutputReference {
    return new DataDatadogMonitorMonitorThresholdWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogMonitorMonitorThresholds {
}

export function dataDatadogMonitorMonitorThresholdsToTerraform(struct?: DataDatadogMonitorMonitorThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogMonitorMonitorThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogMonitorMonitorThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogMonitorMonitorThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getStringAttribute('critical');
  }

  // critical_recovery - computed: true, optional: false, required: false
  public get criticalRecovery() {
    return this.getStringAttribute('critical_recovery');
  }

  // ok - computed: true, optional: false, required: false
  public get ok() {
    return this.getStringAttribute('ok');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getStringAttribute('unknown');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // warning_recovery - computed: true, optional: false, required: false
  public get warningRecovery() {
    return this.getStringAttribute('warning_recovery');
  }
}

export class DataDatadogMonitorMonitorThresholdsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogMonitorMonitorThresholdsOutputReference {
    return new DataDatadogMonitorMonitorThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogMonitorSchedulingOptionsEvaluationWindow {
}

export function dataDatadogMonitorSchedulingOptionsEvaluationWindowToTerraform(struct?: DataDatadogMonitorSchedulingOptionsEvaluationWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogMonitorSchedulingOptionsEvaluationWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogMonitorSchedulingOptionsEvaluationWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_starts - computed: true, optional: false, required: false
  public get dayStarts() {
    return this.getStringAttribute('day_starts');
  }

  // hour_starts - computed: true, optional: false, required: false
  public get hourStarts() {
    return this.getNumberAttribute('hour_starts');
  }

  // month_starts - computed: true, optional: false, required: false
  public get monthStarts() {
    return this.getNumberAttribute('month_starts');
  }
}

export class DataDatadogMonitorSchedulingOptionsEvaluationWindowList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference {
    return new DataDatadogMonitorSchedulingOptionsEvaluationWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogMonitorSchedulingOptions {
}

export function dataDatadogMonitorSchedulingOptionsToTerraform(struct?: DataDatadogMonitorSchedulingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataDatadogMonitorSchedulingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDatadogMonitorSchedulingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogMonitorSchedulingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // evaluation_window - computed: true, optional: false, required: false
  private _evaluationWindow = new DataDatadogMonitorSchedulingOptionsEvaluationWindowList(this, "evaluation_window", false);
  public get evaluationWindow() {
    return this._evaluationWindow;
  }
}

export class DataDatadogMonitorSchedulingOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataDatadogMonitorSchedulingOptionsOutputReference {
    return new DataDatadogMonitorSchedulingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/monitor datadog_monitor}
*/
export class DataDatadogMonitor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/monitor datadog_monitor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogMonitorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogMonitorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.23.0',
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
    this._id = config.id;
    this._monitorTagsFilter = config.monitorTagsFilter;
    this._nameFilter = config.nameFilter;
    this._tagsFilter = config.tagsFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_logs_sample - computed: true, optional: false, required: false
  public get enableLogsSample() {
    return this.getBooleanAttribute('enable_logs_sample');
  }

  // enable_samples - computed: true, optional: false, required: false
  public get enableSamples() {
    return this.getBooleanAttribute('enable_samples');
  }

  // escalation_message - computed: true, optional: false, required: false
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }

  // evaluation_delay - computed: true, optional: false, required: false
  public get evaluationDelay() {
    return this.getNumberAttribute('evaluation_delay');
  }

  // group_retention_duration - computed: true, optional: false, required: false
  public get groupRetentionDuration() {
    return this.getStringAttribute('group_retention_duration');
  }

  // groupby_simple_monitor - computed: true, optional: false, required: false
  public get groupbySimpleMonitor() {
    return this.getBooleanAttribute('groupby_simple_monitor');
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

  // include_tags - computed: true, optional: false, required: false
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // monitor_tags_filter - computed: false, optional: true, required: false
  private _monitorTagsFilter?: string[]; 
  public get monitorTagsFilter() {
    return this.getListAttribute('monitor_tags_filter');
  }
  public set monitorTagsFilter(value: string[]) {
    this._monitorTagsFilter = value;
  }
  public resetMonitorTagsFilter() {
    this._monitorTagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTagsFilterInput() {
    return this._monitorTagsFilter;
  }

  // monitor_threshold_windows - computed: true, optional: false, required: false
  private _monitorThresholdWindows = new DataDatadogMonitorMonitorThresholdWindowsList(this, "monitor_threshold_windows", false);
  public get monitorThresholdWindows() {
    return this._monitorThresholdWindows;
  }

  // monitor_thresholds - computed: true, optional: false, required: false
  private _monitorThresholds = new DataDatadogMonitorMonitorThresholdsList(this, "monitor_thresholds", false);
  public get monitorThresholds() {
    return this._monitorThresholds;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string; 
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // new_group_delay - computed: true, optional: false, required: false
  public get newGroupDelay() {
    return this.getNumberAttribute('new_group_delay');
  }

  // new_host_delay - computed: true, optional: false, required: false
  public get newHostDelay() {
    return this.getNumberAttribute('new_host_delay');
  }

  // no_data_timeframe - computed: true, optional: false, required: false
  public get noDataTimeframe() {
    return this.getNumberAttribute('no_data_timeframe');
  }

  // notification_preset_name - computed: true, optional: false, required: false
  public get notificationPresetName() {
    return this.getStringAttribute('notification_preset_name');
  }

  // notify_audit - computed: true, optional: false, required: false
  public get notifyAudit() {
    return this.getBooleanAttribute('notify_audit');
  }

  // notify_by - computed: true, optional: false, required: false
  public get notifyBy() {
    return cdktf.Fn.tolist(this.getListAttribute('notify_by'));
  }

  // notify_no_data - computed: true, optional: false, required: false
  public get notifyNoData() {
    return this.getBooleanAttribute('notify_no_data');
  }

  // on_missing_data - computed: true, optional: false, required: false
  public get onMissingData() {
    return this.getStringAttribute('on_missing_data');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // renotify_interval - computed: true, optional: false, required: false
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }

  // renotify_occurrences - computed: true, optional: false, required: false
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }

  // renotify_statuses - computed: true, optional: false, required: false
  public get renotifyStatuses() {
    return cdktf.Fn.tolist(this.getListAttribute('renotify_statuses'));
  }

  // require_full_window - computed: true, optional: false, required: false
  public get requireFullWindow() {
    return this.getBooleanAttribute('require_full_window');
  }

  // restricted_roles - computed: true, optional: false, required: false
  public get restrictedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_roles'));
  }

  // scheduling_options - computed: true, optional: false, required: false
  private _schedulingOptions = new DataDatadogMonitorSchedulingOptionsList(this, "scheduling_options", false);
  public get schedulingOptions() {
    return this._schedulingOptions;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // tags_filter - computed: false, optional: true, required: false
  private _tagsFilter?: string[]; 
  public get tagsFilter() {
    return this.getListAttribute('tags_filter');
  }
  public set tagsFilter(value: string[]) {
    this._tagsFilter = value;
  }
  public resetTagsFilter() {
    this._tagsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsFilterInput() {
    return this._tagsFilter;
  }

  // timeout_h - computed: true, optional: false, required: false
  public get timeoutH() {
    return this.getNumberAttribute('timeout_h');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      monitor_tags_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorTagsFilter),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      tags_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagsFilter),
    };
  }
}
