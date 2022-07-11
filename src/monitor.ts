// https://www.terraform.io/docs/providers/datadog/r/monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean indicating whether or not to include a list of log values which triggered the alert. This is only used by log monitors. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#enable_logs_sample Monitor#enable_logs_sample}
  */
  readonly enableLogsSample?: boolean | cdktf.IResolvable;
  /**
  * A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#escalation_message Monitor#escalation_message}
  */
  readonly escalationMessage?: string;
  /**
  * (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#evaluation_delay Monitor#evaluation_delay}
  */
  readonly evaluationDelay?: number;
  /**
  * A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#force_delete Monitor#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to trigger one alert if any source breaches a threshold. This is only used by log monitors. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}
  */
  readonly groupbySimpleMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#id Monitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#include_tags Monitor#include_tags}
  */
  readonly includeTags?: boolean | cdktf.IResolvable;
  /**
  * A boolean indicating whether changes to this monitor should be restricted to the creator or admins. Defaults to `false`. **Deprecated.** Use `restricted_roles`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#locked Monitor#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#message Monitor#message}
  */
  readonly message: string;
  /**
  * Name of Datadog monitor.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#name Monitor#name}
  */
  readonly name: string;
  /**
  * The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#new_group_delay Monitor#new_group_delay}
  */
  readonly newGroupDelay?: number;
  /**
  * **Deprecated**. See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. Defaults to `300`. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#new_host_delay Monitor#new_host_delay}
  */
  readonly newHostDelay?: number;
  /**
  * The number of minutes before a monitor will notify when data stops reporting. Provider defaults to 10 minutes.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#no_data_timeframe Monitor#no_data_timeframe}
  */
  readonly noDataTimeframe?: number;
  /**
  * A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#notify_audit Monitor#notify_audit}
  */
  readonly notifyAudit?: boolean | cdktf.IResolvable;
  /**
  * A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#notify_no_data Monitor#notify_no_data}
  */
  readonly notifyNoData?: boolean | cdktf.IResolvable;
  /**
  * Integer from 1 (high) to 5 (low) indicating alert severity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#priority Monitor#priority}
  */
  readonly priority?: number;
  /**
  * The monitor query to notify on. Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#query Monitor#query}
  */
  readonly query: string;
  /**
  * The number of minutes after the last notification before a monitor will re-notify on the current status. It will only re-notify if it's not resolved.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#renotify_interval Monitor#renotify_interval}
  */
  readonly renotifyInterval?: number;
  /**
  * The number of re-notification messages that should be sent on the current status.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#renotify_occurrences Monitor#renotify_occurrences}
  */
  readonly renotifyOccurrences?: number;
  /**
  * The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#renotify_statuses Monitor#renotify_statuses}
  */
  readonly renotifyStatuses?: string[];
  /**
  * A boolean indicating whether this monitor needs a full window of data before it's evaluated.

We highly recommend you set this to `false` for sparse metrics, otherwise some evaluations will be skipped. Default: `true` for `on average`, `at all times` and `in total` aggregation. `false` otherwise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#require_full_window Monitor#require_full_window}
  */
  readonly requireFullWindow?: boolean | cdktf.IResolvable;
  /**
  * A list of unique role identifiers to define which roles are allowed to edit the monitor. Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#restricted_roles Monitor#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * A list of tags to associate with your monitor. This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#tags Monitor#tags}
  */
  readonly tags?: string[];
  /**
  * The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#timeout_h Monitor#timeout_h}
  */
  readonly timeoutH?: number;
  /**
  * The type of the monitor. The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#type Monitor#type}
  */
  readonly type: string;
  /**
  * If set to `false`, skip the validation call done during plan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#validate Monitor#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * monitor_threshold_windows block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}
  */
  readonly monitorThresholdWindows?: MonitorMonitorThresholdWindows;
  /**
  * monitor_thresholds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#monitor_thresholds Monitor#monitor_thresholds}
  */
  readonly monitorThresholds?: MonitorMonitorThresholds;
}
export interface MonitorMonitorThresholdWindows {
  /**
  * Describes how long an anomalous metric must be normal before the alert recovers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#recovery_window Monitor#recovery_window}
  */
  readonly recoveryWindow?: string;
  /**
  * Describes how long a metric must be anomalous before an alert triggers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#trigger_window Monitor#trigger_window}
  */
  readonly triggerWindow?: string;
}

export function monitorMonitorThresholdWindowsToTerraform(struct?: MonitorMonitorThresholdWindowsOutputReference | MonitorMonitorThresholdWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_window: cdktf.stringToTerraform(struct!.recoveryWindow),
    trigger_window: cdktf.stringToTerraform(struct!.triggerWindow),
  }
}

export class MonitorMonitorThresholdWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorMonitorThresholdWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recoveryWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryWindow = this._recoveryWindow;
    }
    if (this._triggerWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerWindow = this._triggerWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorMonitorThresholdWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recoveryWindow = undefined;
      this._triggerWindow = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recoveryWindow = value.recoveryWindow;
      this._triggerWindow = value.triggerWindow;
    }
  }

  // recovery_window - computed: false, optional: true, required: false
  private _recoveryWindow?: string; 
  public get recoveryWindow() {
    return this.getStringAttribute('recovery_window');
  }
  public set recoveryWindow(value: string) {
    this._recoveryWindow = value;
  }
  public resetRecoveryWindow() {
    this._recoveryWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInput() {
    return this._recoveryWindow;
  }

  // trigger_window - computed: false, optional: true, required: false
  private _triggerWindow?: string; 
  public get triggerWindow() {
    return this.getStringAttribute('trigger_window');
  }
  public set triggerWindow(value: string) {
    this._triggerWindow = value;
  }
  public resetTriggerWindow() {
    this._triggerWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWindowInput() {
    return this._triggerWindow;
  }
}
export interface MonitorMonitorThresholds {
  /**
  * The monitor `CRITICAL` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#critical Monitor#critical}
  */
  readonly critical?: string;
  /**
  * The monitor `CRITICAL` recovery threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#critical_recovery Monitor#critical_recovery}
  */
  readonly criticalRecovery?: string;
  /**
  * The monitor `OK` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#ok Monitor#ok}
  */
  readonly ok?: string;
  /**
  * The monitor `UNKNOWN` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#unknown Monitor#unknown}
  */
  readonly unknown?: string;
  /**
  * The monitor `WARNING` threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#warning Monitor#warning}
  */
  readonly warning?: string;
  /**
  * The monitor `WARNING` recovery threshold. Must be a number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/monitor#warning_recovery Monitor#warning_recovery}
  */
  readonly warningRecovery?: string;
}

export function monitorMonitorThresholdsToTerraform(struct?: MonitorMonitorThresholdsOutputReference | MonitorMonitorThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorMonitorThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._criticalRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalRecovery = this._criticalRecovery;
    }
    if (this._ok !== undefined) {
      hasAnyValues = true;
      internalValueResult.ok = this._ok;
    }
    if (this._unknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknown = this._unknown;
    }
    if (this._warning !== undefined) {
      hasAnyValues = true;
      internalValueResult.warning = this._warning;
    }
    if (this._warningRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningRecovery = this._warningRecovery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorMonitorThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._criticalRecovery = undefined;
      this._ok = undefined;
      this._unknown = undefined;
      this._warning = undefined;
      this._warningRecovery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._criticalRecovery = value.criticalRecovery;
      this._ok = value.ok;
      this._unknown = value.unknown;
      this._warning = value.warning;
      this._warningRecovery = value.warningRecovery;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string; 
  public get critical() {
    return this.getStringAttribute('critical');
  }
  public set critical(value: string) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // critical_recovery - computed: false, optional: true, required: false
  private _criticalRecovery?: string; 
  public get criticalRecovery() {
    return this.getStringAttribute('critical_recovery');
  }
  public set criticalRecovery(value: string) {
    this._criticalRecovery = value;
  }
  public resetCriticalRecovery() {
    this._criticalRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalRecoveryInput() {
    return this._criticalRecovery;
  }

  // ok - computed: false, optional: true, required: false
  private _ok?: string; 
  public get ok() {
    return this.getStringAttribute('ok');
  }
  public set ok(value: string) {
    this._ok = value;
  }
  public resetOk() {
    this._ok = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get okInput() {
    return this._ok;
  }

  // unknown - computed: false, optional: true, required: false
  private _unknown?: string; 
  public get unknown() {
    return this.getStringAttribute('unknown');
  }
  public set unknown(value: string) {
    this._unknown = value;
  }
  public resetUnknown() {
    this._unknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownInput() {
    return this._unknown;
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // warning_recovery - computed: false, optional: true, required: false
  private _warningRecovery?: string; 
  public get warningRecovery() {
    return this.getStringAttribute('warning_recovery');
  }
  public set warningRecovery(value: string) {
    this._warningRecovery = value;
  }
  public resetWarningRecovery() {
    this._warningRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningRecoveryInput() {
    return this._warningRecovery;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/monitor datadog_monitor}
*/
export class Monitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_monitor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/monitor datadog_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.13.1',
        providerVersionConstraint: '~> 3.0'
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
    this._id = config.id;
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
    this._monitorThresholdWindows.internalValue = config.monitorThresholdWindows;
    this._monitorThresholds.internalValue = config.monitorThresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_logs_sample - computed: false, optional: true, required: false
  private _enableLogsSample?: boolean | cdktf.IResolvable; 
  public get enableLogsSample() {
    return this.getBooleanAttribute('enable_logs_sample');
  }
  public set enableLogsSample(value: boolean | cdktf.IResolvable) {
    this._enableLogsSample = value;
  }
  public resetEnableLogsSample() {
    this._enableLogsSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogsSampleInput() {
    return this._enableLogsSample;
  }

  // escalation_message - computed: false, optional: true, required: false
  private _escalationMessage?: string; 
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }
  public set escalationMessage(value: string) {
    this._escalationMessage = value;
  }
  public resetEscalationMessage() {
    this._escalationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationMessageInput() {
    return this._escalationMessage;
  }

  // evaluation_delay - computed: true, optional: true, required: false
  private _evaluationDelay?: number; 
  public get evaluationDelay() {
    return this.getNumberAttribute('evaluation_delay');
  }
  public set evaluationDelay(value: number) {
    this._evaluationDelay = value;
  }
  public resetEvaluationDelay() {
    this._evaluationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationDelayInput() {
    return this._evaluationDelay;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // groupby_simple_monitor - computed: false, optional: true, required: false
  private _groupbySimpleMonitor?: boolean | cdktf.IResolvable; 
  public get groupbySimpleMonitor() {
    return this.getBooleanAttribute('groupby_simple_monitor');
  }
  public set groupbySimpleMonitor(value: boolean | cdktf.IResolvable) {
    this._groupbySimpleMonitor = value;
  }
  public resetGroupbySimpleMonitor() {
    this._groupbySimpleMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupbySimpleMonitorInput() {
    return this._groupbySimpleMonitor;
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

  // include_tags - computed: false, optional: true, required: false
  private _includeTags?: boolean | cdktf.IResolvable; 
  public get includeTags() {
    return this.getBooleanAttribute('include_tags');
  }
  public set includeTags(value: boolean | cdktf.IResolvable) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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
    return this._message;
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

  // new_group_delay - computed: false, optional: true, required: false
  private _newGroupDelay?: number; 
  public get newGroupDelay() {
    return this.getNumberAttribute('new_group_delay');
  }
  public set newGroupDelay(value: number) {
    this._newGroupDelay = value;
  }
  public resetNewGroupDelay() {
    this._newGroupDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGroupDelayInput() {
    return this._newGroupDelay;
  }

  // new_host_delay - computed: false, optional: true, required: false
  private _newHostDelay?: number; 
  public get newHostDelay() {
    return this.getNumberAttribute('new_host_delay');
  }
  public set newHostDelay(value: number) {
    this._newHostDelay = value;
  }
  public resetNewHostDelay() {
    this._newHostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newHostDelayInput() {
    return this._newHostDelay;
  }

  // no_data_timeframe - computed: false, optional: true, required: false
  private _noDataTimeframe?: number; 
  public get noDataTimeframe() {
    return this.getNumberAttribute('no_data_timeframe');
  }
  public set noDataTimeframe(value: number) {
    this._noDataTimeframe = value;
  }
  public resetNoDataTimeframe() {
    this._noDataTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataTimeframeInput() {
    return this._noDataTimeframe;
  }

  // notify_audit - computed: false, optional: true, required: false
  private _notifyAudit?: boolean | cdktf.IResolvable; 
  public get notifyAudit() {
    return this.getBooleanAttribute('notify_audit');
  }
  public set notifyAudit(value: boolean | cdktf.IResolvable) {
    this._notifyAudit = value;
  }
  public resetNotifyAudit() {
    this._notifyAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAuditInput() {
    return this._notifyAudit;
  }

  // notify_no_data - computed: false, optional: true, required: false
  private _notifyNoData?: boolean | cdktf.IResolvable; 
  public get notifyNoData() {
    return this.getBooleanAttribute('notify_no_data');
  }
  public set notifyNoData(value: boolean | cdktf.IResolvable) {
    this._notifyNoData = value;
  }
  public resetNotifyNoData() {
    this._notifyNoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyNoDataInput() {
    return this._notifyNoData;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: number; 
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }
  public set renotifyInterval(value: number) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval;
  }

  // renotify_occurrences - computed: false, optional: true, required: false
  private _renotifyOccurrences?: number; 
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
  public set renotifyOccurrences(value: number) {
    this._renotifyOccurrences = value;
  }
  public resetRenotifyOccurrences() {
    this._renotifyOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyOccurrencesInput() {
    return this._renotifyOccurrences;
  }

  // renotify_statuses - computed: false, optional: true, required: false
  private _renotifyStatuses?: string[]; 
  public get renotifyStatuses() {
    return cdktf.Fn.tolist(this.getListAttribute('renotify_statuses'));
  }
  public set renotifyStatuses(value: string[]) {
    this._renotifyStatuses = value;
  }
  public resetRenotifyStatuses() {
    this._renotifyStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyStatusesInput() {
    return this._renotifyStatuses;
  }

  // require_full_window - computed: false, optional: true, required: false
  private _requireFullWindow?: boolean | cdktf.IResolvable; 
  public get requireFullWindow() {
    return this.getBooleanAttribute('require_full_window');
  }
  public set requireFullWindow(value: boolean | cdktf.IResolvable) {
    this._requireFullWindow = value;
  }
  public resetRequireFullWindow() {
    this._requireFullWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireFullWindowInput() {
    return this._requireFullWindow;
  }

  // restricted_roles - computed: false, optional: true, required: false
  private _restrictedRoles?: string[]; 
  public get restrictedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_roles'));
  }
  public set restrictedRoles(value: string[]) {
    this._restrictedRoles = value;
  }
  public resetRestrictedRoles() {
    this._restrictedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRolesInput() {
    return this._restrictedRoles;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout_h - computed: false, optional: true, required: false
  private _timeoutH?: number; 
  public get timeoutH() {
    return this.getNumberAttribute('timeout_h');
  }
  public set timeoutH(value: number) {
    this._timeoutH = value;
  }
  public resetTimeoutH() {
    this._timeoutH = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutHInput() {
    return this._timeoutH;
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

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // monitor_threshold_windows - computed: false, optional: true, required: false
  private _monitorThresholdWindows = new MonitorMonitorThresholdWindowsOutputReference(this, "monitor_threshold_windows");
  public get monitorThresholdWindows() {
    return this._monitorThresholdWindows;
  }
  public putMonitorThresholdWindows(value: MonitorMonitorThresholdWindows) {
    this._monitorThresholdWindows.internalValue = value;
  }
  public resetMonitorThresholdWindows() {
    this._monitorThresholdWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorThresholdWindowsInput() {
    return this._monitorThresholdWindows.internalValue;
  }

  // monitor_thresholds - computed: false, optional: true, required: false
  private _monitorThresholds = new MonitorMonitorThresholdsOutputReference(this, "monitor_thresholds");
  public get monitorThresholds() {
    return this._monitorThresholds;
  }
  public putMonitorThresholds(value: MonitorMonitorThresholds) {
    this._monitorThresholds.internalValue = value;
  }
  public resetMonitorThresholds() {
    this._monitorThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorThresholdsInput() {
    return this._monitorThresholds.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
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
      monitor_threshold_windows: monitorMonitorThresholdWindowsToTerraform(this._monitorThresholdWindows.internalValue),
      monitor_thresholds: monitorMonitorThresholdsToTerraform(this._monitorThresholds.internalValue),
    };
  }
}
