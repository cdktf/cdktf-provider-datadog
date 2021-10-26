// https://www.terraform.io/docs/providers/datadog/r/monitor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean indicating whether or not to include a list of log values which triggered the alert. This is only used by log monitors. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#enable_logs_sample Monitor#enable_logs_sample}
  */
  readonly enableLogsSample?: boolean | cdktf.IResolvable;
  /**
  * A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#escalation_message Monitor#escalation_message}
  */
  readonly escalationMessage?: string;
  /**
  * (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#evaluation_delay Monitor#evaluation_delay}
  */
  readonly evaluationDelay?: number;
  /**
  * A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#force_delete Monitor#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to trigger one alert if any source breaches a threshold. This is only used by log monitors. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#groupby_simple_monitor Monitor#groupby_simple_monitor}
  */
  readonly groupbySimpleMonitor?: boolean | cdktf.IResolvable;
  /**
  * A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#include_tags Monitor#include_tags}
  */
  readonly includeTags?: boolean | cdktf.IResolvable;
  /**
  * A boolean indicating whether changes to to this monitor should be restricted to the creator or admins. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#locked Monitor#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#message Monitor#message}
  */
  readonly message: string;
  /**
  * Name of Datadog monitor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#name Monitor#name}
  */
  readonly name: string;
  /**
  * Time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

To disable group delay for monitors grouped by host, `new_host_delay` must be set to zero due to the default value of `300` for that field (`new_group_delay` defaults to zero, so setting it to zero is not required).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#new_group_delay Monitor#new_group_delay}
  */
  readonly newGroupDelay?: number;
  /**
  * Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. Defaults to `300` (this default will be removed in a major version release and `new_host_delay` will be removed entirely in a subsequent major version release). **Deprecated.** Prefer using new_group_delay (except when setting `new_host_delay` to zero).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#new_host_delay Monitor#new_host_delay}
  */
  readonly newHostDelay?: number;
  /**
  * The number of minutes before a monitor will notify when data stops reporting. Provider defaults to 10 minutes.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#no_data_timeframe Monitor#no_data_timeframe}
  */
  readonly noDataTimeframe?: number;
  /**
  * A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#notify_audit Monitor#notify_audit}
  */
  readonly notifyAudit?: boolean | cdktf.IResolvable;
  /**
  * A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#notify_no_data Monitor#notify_no_data}
  */
  readonly notifyNoData?: boolean | cdktf.IResolvable;
  /**
  * Integer from 1 (high) to 5 (low) indicating alert severity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#priority Monitor#priority}
  */
  readonly priority?: number;
  /**
  * The monitor query to notify on. Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#query Monitor#query}
  */
  readonly query: string;
  /**
  * The number of minutes after the last notification before a monitor will re-notify on the current status. It will only re-notify if it's not resolved.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#renotify_interval Monitor#renotify_interval}
  */
  readonly renotifyInterval?: number;
  /**
  * The number of re-notification messages that should be sent on the current status.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#renotify_occurrences Monitor#renotify_occurrences}
  */
  readonly renotifyOccurrences?: number;
  /**
  * The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#renotify_statuses Monitor#renotify_statuses}
  */
  readonly renotifyStatuses?: string[];
  /**
  * A boolean indicating whether this monitor needs a full window of data before it's evaluated.

We highly recommend you set this to `false` for sparse metrics, otherwise some evaluations will be skipped. Default: `true` for `on average`, `at all times` and `in total` aggregation. `false` otherwise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#require_full_window Monitor#require_full_window}
  */
  readonly requireFullWindow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#restricted_roles Monitor#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * A list of tags to associate with your monitor. This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#tags Monitor#tags}
  */
  readonly tags?: string[];
  /**
  * The number of hours of the monitor not reporting data before it will automatically resolve from a triggered state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#timeout_h Monitor#timeout_h}
  */
  readonly timeoutH?: number;
  /**
  * The type of the monitor. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#type Monitor#type}
  */
  readonly type: string;
  /**
  * If set to `false`, skip the validation call done during plan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#validate Monitor#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * monitor_threshold_windows block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#monitor_threshold_windows Monitor#monitor_threshold_windows}
  */
  readonly monitorThresholdWindows?: MonitorMonitorThresholdWindows;
  /**
  * monitor_thresholds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#monitor_thresholds Monitor#monitor_thresholds}
  */
  readonly monitorThresholds?: MonitorMonitorThresholds;
}
export interface MonitorMonitorThresholdWindows {
  /**
  * Describes how long an anomalous metric must be normal before the alert recovers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#recovery_window Monitor#recovery_window}
  */
  readonly recoveryWindow?: string;
  /**
  * Describes how long a metric must be anomalous before an alert triggers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#trigger_window Monitor#trigger_window}
  */
  readonly triggerWindow?: string;
}

function monitorMonitorThresholdWindowsToTerraform(struct?: MonitorMonitorThresholdWindowsOutputReference | MonitorMonitorThresholdWindows): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window: cdktf.stringToTerraform(struct!.recoveryWindow),
    trigger_window: cdktf.stringToTerraform(struct!.triggerWindow),
  }
}

export class MonitorMonitorThresholdWindowsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // recovery_window - computed: false, optional: true, required: false
  private _recoveryWindow?: string | undefined; 
  public get recoveryWindow() {
    return this.getStringAttribute('recovery_window');
  }
  public set recoveryWindow(value: string | undefined) {
    this._recoveryWindow = value;
  }
  public resetRecoveryWindow() {
    this._recoveryWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInput() {
    return this._recoveryWindow
  }

  // trigger_window - computed: false, optional: true, required: false
  private _triggerWindow?: string | undefined; 
  public get triggerWindow() {
    return this.getStringAttribute('trigger_window');
  }
  public set triggerWindow(value: string | undefined) {
    this._triggerWindow = value;
  }
  public resetTriggerWindow() {
    this._triggerWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWindowInput() {
    return this._triggerWindow
  }
}
export interface MonitorMonitorThresholds {
  /**
  * The monitor `CRITICAL` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#critical Monitor#critical}
  */
  readonly critical?: string;
  /**
  * The monitor `CRITICAL` recovery threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#critical_recovery Monitor#critical_recovery}
  */
  readonly criticalRecovery?: string;
  /**
  * The monitor `OK` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#ok Monitor#ok}
  */
  readonly ok?: string;
  /**
  * The monitor `UNKNOWN` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#unknown Monitor#unknown}
  */
  readonly unknown?: string;
  /**
  * The monitor `WARNING` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#warning Monitor#warning}
  */
  readonly warning?: string;
  /**
  * The monitor `WARNING` recovery threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html#warning_recovery Monitor#warning_recovery}
  */
  readonly warningRecovery?: string;
}

function monitorMonitorThresholdsToTerraform(struct?: MonitorMonitorThresholdsOutputReference | MonitorMonitorThresholds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.stringToTerraform(struct!.critical),
    critical_recovery: cdktf.stringToTerraform(struct!.criticalRecovery),
    ok: cdktf.stringToTerraform(struct!.ok),
    unknown: cdktf.stringToTerraform(struct!.unknown),
    warning: cdktf.stringToTerraform(struct!.warning),
    warning_recovery: cdktf.stringToTerraform(struct!.warningRecovery),
  }
}

export class MonitorMonitorThresholdsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string | undefined; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string | undefined) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical
  }

  // critical_recovery - computed: false, optional: true, required: false
  private _criticalRecovery?: string | undefined; 
  public get criticalRecovery() {
    return this.getStringAttribute('critical_recovery');
  }
  public set criticalRecovery(value: string | undefined) {
    this._criticalRecovery = value;
  }
  public resetCriticalRecovery() {
    this._criticalRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalRecoveryInput() {
    return this._criticalRecovery
  }

  // ok - computed: false, optional: true, required: false
  private _ok?: string | undefined; 
  public get ok() {
    return this.getStringAttribute('ok');
  }
  public set ok(value: string | undefined) {
    this._ok = value;
  }
  public resetOk() {
    this._ok = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okInput() {
    return this._ok
  }

  // unknown - computed: false, optional: true, required: false
  private _unknown?: string | undefined; 
  public get unknown() {
    return this.getStringAttribute('unknown');
  }
  public set unknown(value: string | undefined) {
    this._unknown = value;
  }
  public resetUnknown() {
    this._unknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownInput() {
    return this._unknown
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string | undefined; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string | undefined) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning
  }

  // warning_recovery - computed: false, optional: true, required: false
  private _warningRecovery?: string | undefined; 
  public get warningRecovery() {
    return this.getStringAttribute('warning_recovery');
  }
  public set warningRecovery(value: string | undefined) {
    this._warningRecovery = value;
  }
  public resetWarningRecovery() {
    this._warningRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRecoveryInput() {
    return this._warningRecovery
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html datadog_monitor}
*/
export class Monitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/monitor.html datadog_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableLogsSample = config.enableLogsSample;
    this._escalationMessage = config.escalationMessage;
    this._evaluationDelay = config.evaluationDelay;
    this._forceDelete = config.forceDelete;
    this._groupbySimpleMonitor = config.groupbySimpleMonitor;
    this._includeTags = config.includeTags;
    this._locked = config.locked;
    this._message = config.message;
    this._name = config.name;
    this._newGroupDelay = config.newGroupDelay;
    this._newHostDelay = config.newHostDelay;
    this._noDataTimeframe = config.noDataTimeframe;
    this._notifyAudit = config.notifyAudit;
    this._notifyNoData = config.notifyNoData;
    this._priority = config.priority;
    this._query = config.query;
    this._renotifyInterval = config.renotifyInterval;
    this._renotifyOccurrences = config.renotifyOccurrences;
    this._renotifyStatuses = config.renotifyStatuses;
    this._requireFullWindow = config.requireFullWindow;
    this._restrictedRoles = config.restrictedRoles;
    this._tags = config.tags;
    this._timeoutH = config.timeoutH;
    this._type = config.type;
    this._validate = config.validate;
    this._monitorThresholdWindows = config.monitorThresholdWindows;
    this._monitorThresholds = config.monitorThresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_logs_sample - computed: false, optional: true, required: false
  private _enableLogsSample?: boolean | cdktf.IResolvable | undefined; 
  public get enableLogsSample() {
    return this.getBooleanAttribute('enable_logs_sample') as any;
  }
  public set enableLogsSample(value: boolean | cdktf.IResolvable | undefined) {
    this._enableLogsSample = value;
  }
  public resetEnableLogsSample() {
    this._enableLogsSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogsSampleInput() {
    return this._enableLogsSample
  }

  // escalation_message - computed: false, optional: true, required: false
  private _escalationMessage?: string | undefined; 
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }
  public set escalationMessage(value: string | undefined) {
    this._escalationMessage = value;
  }
  public resetEscalationMessage() {
    this._escalationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationMessageInput() {
    return this._escalationMessage
  }

  // evaluation_delay - computed: true, optional: true, required: false
  private _evaluationDelay?: number | undefined; 
  public get evaluationDelay() {
    return this.getNumberAttribute('evaluation_delay');
  }
  public set evaluationDelay(value: number | undefined) {
    this._evaluationDelay = value;
  }
  public resetEvaluationDelay() {
    this._evaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationDelayInput() {
    return this._evaluationDelay
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable | undefined; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete') as any;
  }
  public set forceDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete
  }

  // groupby_simple_monitor - computed: false, optional: true, required: false
  private _groupbySimpleMonitor?: boolean | cdktf.IResolvable | undefined; 
  public get groupbySimpleMonitor() {
    return this.getBooleanAttribute('groupby_simple_monitor') as any;
  }
  public set groupbySimpleMonitor(value: boolean | cdktf.IResolvable | undefined) {
    this._groupbySimpleMonitor = value;
  }
  public resetGroupbySimpleMonitor() {
    this._groupbySimpleMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupbySimpleMonitorInput() {
    return this._groupbySimpleMonitor
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: boolean | cdktf.IResolvable | undefined; 
  public get includeTags() {
    return this.getBooleanAttribute('include_tags') as any;
  }
  public set includeTags(value: boolean | cdktf.IResolvable | undefined) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable | undefined; 
  public get locked() {
    return this.getBooleanAttribute('locked') as any;
  }
  public set locked(value: boolean | cdktf.IResolvable | undefined) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
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
    return this._name
  }

  // new_group_delay - computed: false, optional: true, required: false
  private _newGroupDelay?: number | undefined; 
  public get newGroupDelay() {
    return this.getNumberAttribute('new_group_delay');
  }
  public set newGroupDelay(value: number | undefined) {
    this._newGroupDelay = value;
  }
  public resetNewGroupDelay() {
    this._newGroupDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGroupDelayInput() {
    return this._newGroupDelay
  }

  // new_host_delay - computed: false, optional: true, required: false
  private _newHostDelay?: number | undefined; 
  public get newHostDelay() {
    return this.getNumberAttribute('new_host_delay');
  }
  public set newHostDelay(value: number | undefined) {
    this._newHostDelay = value;
  }
  public resetNewHostDelay() {
    this._newHostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHostDelayInput() {
    return this._newHostDelay
  }

  // no_data_timeframe - computed: false, optional: true, required: false
  private _noDataTimeframe?: number | undefined; 
  public get noDataTimeframe() {
    return this.getNumberAttribute('no_data_timeframe');
  }
  public set noDataTimeframe(value: number | undefined) {
    this._noDataTimeframe = value;
  }
  public resetNoDataTimeframe() {
    this._noDataTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataTimeframeInput() {
    return this._noDataTimeframe
  }

  // notify_audit - computed: false, optional: true, required: false
  private _notifyAudit?: boolean | cdktf.IResolvable | undefined; 
  public get notifyAudit() {
    return this.getBooleanAttribute('notify_audit') as any;
  }
  public set notifyAudit(value: boolean | cdktf.IResolvable | undefined) {
    this._notifyAudit = value;
  }
  public resetNotifyAudit() {
    this._notifyAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAuditInput() {
    return this._notifyAudit
  }

  // notify_no_data - computed: false, optional: true, required: false
  private _notifyNoData?: boolean | cdktf.IResolvable | undefined; 
  public get notifyNoData() {
    return this.getBooleanAttribute('notify_no_data') as any;
  }
  public set notifyNoData(value: boolean | cdktf.IResolvable | undefined) {
    this._notifyNoData = value;
  }
  public resetNotifyNoData() {
    this._notifyNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyNoDataInput() {
    return this._notifyNoData
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number | undefined; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
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
    return this._query
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: number | undefined; 
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }
  public set renotifyInterval(value: number | undefined) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval
  }

  // renotify_occurrences - computed: false, optional: true, required: false
  private _renotifyOccurrences?: number | undefined; 
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
  public set renotifyOccurrences(value: number | undefined) {
    this._renotifyOccurrences = value;
  }
  public resetRenotifyOccurrences() {
    this._renotifyOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyOccurrencesInput() {
    return this._renotifyOccurrences
  }

  // renotify_statuses - computed: false, optional: true, required: false
  private _renotifyStatuses?: string[] | undefined; 
  public get renotifyStatuses() {
    return this.getListAttribute('renotify_statuses');
  }
  public set renotifyStatuses(value: string[] | undefined) {
    this._renotifyStatuses = value;
  }
  public resetRenotifyStatuses() {
    this._renotifyStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyStatusesInput() {
    return this._renotifyStatuses
  }

  // require_full_window - computed: false, optional: true, required: false
  private _requireFullWindow?: boolean | cdktf.IResolvable | undefined; 
  public get requireFullWindow() {
    return this.getBooleanAttribute('require_full_window') as any;
  }
  public set requireFullWindow(value: boolean | cdktf.IResolvable | undefined) {
    this._requireFullWindow = value;
  }
  public resetRequireFullWindow() {
    this._requireFullWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireFullWindowInput() {
    return this._requireFullWindow
  }

  // restricted_roles - computed: false, optional: true, required: false
  private _restrictedRoles?: string[] | undefined; 
  public get restrictedRoles() {
    return this.getListAttribute('restricted_roles');
  }
  public set restrictedRoles(value: string[] | undefined) {
    this._restrictedRoles = value;
  }
  public resetRestrictedRoles() {
    this._restrictedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRolesInput() {
    return this._restrictedRoles
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeout_h - computed: false, optional: true, required: false
  private _timeoutH?: number | undefined; 
  public get timeoutH() {
    return this.getNumberAttribute('timeout_h');
  }
  public set timeoutH(value: number | undefined) {
    this._timeoutH = value;
  }
  public resetTimeoutH() {
    this._timeoutH = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutHInput() {
    return this._timeoutH
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
    return this._type
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable | undefined; 
  public get validate() {
    return this.getBooleanAttribute('validate') as any;
  }
  public set validate(value: boolean | cdktf.IResolvable | undefined) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate
  }

  // monitor_threshold_windows - computed: false, optional: true, required: false
  private _monitorThresholdWindows?: MonitorMonitorThresholdWindows | undefined; 
  private __monitorThresholdWindowsOutput = new MonitorMonitorThresholdWindowsOutputReference(this as any, "monitor_threshold_windows", true);
  public get monitorThresholdWindows() {
    return this.__monitorThresholdWindowsOutput;
  }
  public putMonitorThresholdWindows(value: MonitorMonitorThresholdWindows | undefined) {
    this._monitorThresholdWindows = value;
  }
  public resetMonitorThresholdWindows() {
    this._monitorThresholdWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorThresholdWindowsInput() {
    return this._monitorThresholdWindows
  }

  // monitor_thresholds - computed: false, optional: true, required: false
  private _monitorThresholds?: MonitorMonitorThresholds | undefined; 
  private __monitorThresholdsOutput = new MonitorMonitorThresholdsOutputReference(this as any, "monitor_thresholds", true);
  public get monitorThresholds() {
    return this.__monitorThresholdsOutput;
  }
  public putMonitorThresholds(value: MonitorMonitorThresholds | undefined) {
    this._monitorThresholds = value;
  }
  public resetMonitorThresholds() {
    this._monitorThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorThresholdsInput() {
    return this._monitorThresholds
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_logs_sample: cdktf.booleanToTerraform(this._enableLogsSample),
      escalation_message: cdktf.stringToTerraform(this._escalationMessage),
      evaluation_delay: cdktf.numberToTerraform(this._evaluationDelay),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      groupby_simple_monitor: cdktf.booleanToTerraform(this._groupbySimpleMonitor),
      include_tags: cdktf.booleanToTerraform(this._includeTags),
      locked: cdktf.booleanToTerraform(this._locked),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      new_group_delay: cdktf.numberToTerraform(this._newGroupDelay),
      new_host_delay: cdktf.numberToTerraform(this._newHostDelay),
      no_data_timeframe: cdktf.numberToTerraform(this._noDataTimeframe),
      notify_audit: cdktf.booleanToTerraform(this._notifyAudit),
      notify_no_data: cdktf.booleanToTerraform(this._notifyNoData),
      priority: cdktf.numberToTerraform(this._priority),
      query: cdktf.stringToTerraform(this._query),
      renotify_interval: cdktf.numberToTerraform(this._renotifyInterval),
      renotify_occurrences: cdktf.numberToTerraform(this._renotifyOccurrences),
      renotify_statuses: cdktf.listMapper(cdktf.stringToTerraform)(this._renotifyStatuses),
      require_full_window: cdktf.booleanToTerraform(this._requireFullWindow),
      restricted_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._restrictedRoles),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      timeout_h: cdktf.numberToTerraform(this._timeoutH),
      type: cdktf.stringToTerraform(this._type),
      validate: cdktf.booleanToTerraform(this._validate),
      monitor_threshold_windows: monitorMonitorThresholdWindowsToTerraform(this._monitorThresholdWindows),
      monitor_thresholds: monitorMonitorThresholdsToTerraform(this._monitorThresholds),
    };
  }
}
