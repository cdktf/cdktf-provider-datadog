# `monitor` Submodule <a name="`monitor` Submodule" id="@cdktf/provider-datadog.monitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Monitor <a name="Monitor" id="@cdktf/provider-datadog.monitor.Monitor"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor datadog_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.Monitor.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.Monitor(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  message: str,
  name: str,
  query: str,
  type: str,
  enable_logs_sample: typing.Union[bool, IResolvable] = None,
  escalation_message: str = None,
  evaluation_delay: typing.Union[int, float] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  groupby_simple_monitor: typing.Union[bool, IResolvable] = None,
  group_retention_duration: str = None,
  id: str = None,
  include_tags: typing.Union[bool, IResolvable] = None,
  locked: typing.Union[bool, IResolvable] = None,
  monitor_thresholds: MonitorMonitorThresholds = None,
  monitor_threshold_windows: MonitorMonitorThresholdWindows = None,
  new_group_delay: typing.Union[int, float] = None,
  new_host_delay: typing.Union[int, float] = None,
  no_data_timeframe: typing.Union[int, float] = None,
  notification_preset_name: str = None,
  notify_audit: typing.Union[bool, IResolvable] = None,
  notify_by: typing.List[str] = None,
  notify_no_data: typing.Union[bool, IResolvable] = None,
  on_missing_data: str = None,
  priority: typing.Union[int, float] = None,
  renotify_interval: typing.Union[int, float] = None,
  renotify_occurrences: typing.Union[int, float] = None,
  renotify_statuses: typing.List[str] = None,
  require_full_window: typing.Union[bool, IResolvable] = None,
  restricted_roles: typing.List[str] = None,
  scheduling_options: MonitorSchedulingOptions = None,
  tags: typing.List[str] = None,
  timeout_h: typing.Union[int, float] = None,
  validate: typing.Union[bool, IResolvable] = None,
  variables: MonitorVariables = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.message">message</a></code> | <code>str</code> | A message to include with notifications for this monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of Datadog monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.query">query</a></code> | <code>str</code> | The monitor query to notify on. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.enableLogsSample">enable_logs_sample</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether or not to include a list of log values which triggered the alert. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.escalationMessage">escalation_message</a></code> | <code>str</code> | A message to include with a re-notification. Supports the `@username` notification allowed elsewhere. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.evaluationDelay">evaluation_delay</a></code> | <code>typing.Union[int, float]</code> | (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor). |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.groupbySimpleMonitor">groupby_simple_monitor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to trigger one alert if any source breaches a threshold. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.groupRetentionDuration">group_retention_duration</a></code> | <code>str</code> | The time span after which groups with missing data are dropped from the monitor state. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#id Monitor#id}. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.includeTags">include_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether changes to this monitor should be restricted to the creator or admins. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholds">monitor_thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | monitor_thresholds block. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholdWindows">monitor_threshold_windows</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | monitor_threshold_windows block. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.newGroupDelay">new_group_delay</a></code> | <code>typing.Union[int, float]</code> | The time (in seconds) to skip evaluations for new groups. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.newHostDelay">new_host_delay</a></code> | <code>typing.Union[int, float]</code> | **Deprecated**. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.noDataTimeframe">no_data_timeframe</a></code> | <code>typing.Union[int, float]</code> | The number of minutes before a monitor will notify when data stops reporting. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notificationPresetName">notification_preset_name</a></code> | <code>str</code> | Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notifyAudit">notify_audit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notifyBy">notify_by</a></code> | <code>typing.List[str]</code> | Controls what granularity a monitor alerts on. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notifyNoData">notify_no_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.onMissingData">on_missing_data</a></code> | <code>str</code> | Controls how groups or monitors are treated if an evaluation does not return any data points. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Integer from 1 (high) to 5 (low) indicating alert severity. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyInterval">renotify_interval</a></code> | <code>typing.Union[int, float]</code> | The number of minutes after the last notification before a monitor will re-notify on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyOccurrences">renotify_occurrences</a></code> | <code>typing.Union[int, float]</code> | The number of re-notification messages that should be sent on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyStatuses">renotify_statuses</a></code> | <code>typing.List[str]</code> | The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.requireFullWindow">require_full_window</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor needs a full window of data before it's evaluated. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | A list of unique role identifiers to define which roles are allowed to edit the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.schedulingOptions">scheduling_options</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.timeoutH">timeout_h</a></code> | <code>typing.Union[int, float]</code> | The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `false`, skip the validation call done during plan. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.variables">variables</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | variables block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.message"></a>

- *Type:* str

A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#message Monitor#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.name"></a>

- *Type:* str

Name of Datadog monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#name Monitor#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.query"></a>

- *Type:* str

The monitor query to notify on.

Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#query Monitor#query}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.type"></a>

- *Type:* str

The type of the monitor.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#type Monitor#type}

---

##### `enable_logs_sample`<sup>Optional</sup> <a name="enable_logs_sample" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.enableLogsSample"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether or not to include a list of log values which triggered the alert.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}

---

##### `escalation_message`<sup>Optional</sup> <a name="escalation_message" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.escalationMessage"></a>

- *Type:* str

A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#escalation_message Monitor#escalation_message}

---

##### `evaluation_delay`<sup>Optional</sup> <a name="evaluation_delay" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.evaluationDelay"></a>

- *Type:* typing.Union[int, float]

(Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#force_delete Monitor#force_delete}

---

##### `groupby_simple_monitor`<sup>Optional</sup> <a name="groupby_simple_monitor" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.groupbySimpleMonitor"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to trigger one alert if any source breaches a threshold.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}

---

##### `group_retention_duration`<sup>Optional</sup> <a name="group_retention_duration" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.groupRetentionDuration"></a>

- *Type:* str

The time span after which groups with missing data are dropped from the monitor state.

The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#id Monitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_tags`<sup>Optional</sup> <a name="include_tags" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.includeTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#include_tags Monitor#include_tags}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.locked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether changes to this monitor should be restricted to the creator or admins.

Defaults to `false`. **Deprecated.** Use `restricted_roles`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#locked Monitor#locked}

---

##### `monitor_thresholds`<sup>Optional</sup> <a name="monitor_thresholds" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholds"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

monitor_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}

---

##### `monitor_threshold_windows`<sup>Optional</sup> <a name="monitor_threshold_windows" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.monitorThresholdWindows"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

monitor_threshold_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}

---

##### `new_group_delay`<sup>Optional</sup> <a name="new_group_delay" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.newGroupDelay"></a>

- *Type:* typing.Union[int, float]

The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}

---

##### `new_host_delay`<sup>Optional</sup> <a name="new_host_delay" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.newHostDelay"></a>

- *Type:* typing.Union[int, float]

**Deprecated**.

See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}

---

##### `no_data_timeframe`<sup>Optional</sup> <a name="no_data_timeframe" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.noDataTimeframe"></a>

- *Type:* typing.Union[int, float]

The number of minutes before a monitor will notify when data stops reporting.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}

---

##### `notification_preset_name`<sup>Optional</sup> <a name="notification_preset_name" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notificationPresetName"></a>

- *Type:* str

Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}

---

##### `notify_audit`<sup>Optional</sup> <a name="notify_audit" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notifyAudit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notify_audit Monitor#notify_audit}

---

##### `notify_by`<sup>Optional</sup> <a name="notify_by" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notifyBy"></a>

- *Type:* typing.List[str]

Controls what granularity a monitor alerts on.

Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notify_by Monitor#notify_by}

---

##### `notify_no_data`<sup>Optional</sup> <a name="notify_no_data" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.notifyNoData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}

---

##### `on_missing_data`<sup>Optional</sup> <a name="on_missing_data" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.onMissingData"></a>

- *Type:* str

Controls how groups or monitors are treated if an evaluation does not return any data points.

The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Integer from 1 (high) to 5 (low) indicating alert severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#priority Monitor#priority}

---

##### `renotify_interval`<sup>Optional</sup> <a name="renotify_interval" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyInterval"></a>

- *Type:* typing.Union[int, float]

The number of minutes after the last notification before a monitor will re-notify on the current status.

It will only re-notify if it's not resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}

---

##### `renotify_occurrences`<sup>Optional</sup> <a name="renotify_occurrences" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyOccurrences"></a>

- *Type:* typing.Union[int, float]

The number of re-notification messages that should be sent on the current status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}

---

##### `renotify_statuses`<sup>Optional</sup> <a name="renotify_statuses" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.renotifyStatuses"></a>

- *Type:* typing.List[str]

The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}

---

##### `require_full_window`<sup>Optional</sup> <a name="require_full_window" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.requireFullWindow"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor needs a full window of data before it's evaluated.

Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#require_full_window Monitor#require_full_window}

---

##### `restricted_roles`<sup>Optional</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.restrictedRoles"></a>

- *Type:* typing.List[str]

A list of unique role identifiers to define which roles are allowed to edit the monitor.

Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}

---

##### `scheduling_options`<sup>Optional</sup> <a name="scheduling_options" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.schedulingOptions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tags to associate with your monitor.

This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#tags Monitor#tags}

---

##### `timeout_h`<sup>Optional</sup> <a name="timeout_h" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.timeoutH"></a>

- *Type:* typing.Union[int, float]

The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.

The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#timeout_h Monitor#timeout_h}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.validate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `false`, skip the validation call done during plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#validate Monitor#validate}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-datadog.monitor.Monitor.Initializer.parameter.variables"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#variables Monitor#variables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds">put_monitor_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows">put_monitor_threshold_windows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions">put_scheduling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.putVariables">put_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEnableLogsSample">reset_enable_logs_sample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEscalationMessage">reset_escalation_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetEvaluationDelay">reset_evaluation_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor">reset_groupby_simple_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetGroupRetentionDuration">reset_group_retention_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetIncludeTags">reset_include_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetLocked">reset_locked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholds">reset_monitor_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows">reset_monitor_threshold_windows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNewGroupDelay">reset_new_group_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNewHostDelay">reset_new_host_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNoDataTimeframe">reset_no_data_timeframe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotificationPresetName">reset_notification_preset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyAudit">reset_notify_audit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyBy">reset_notify_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetNotifyNoData">reset_notify_no_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetOnMissingData">reset_on_missing_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyInterval">reset_renotify_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyOccurrences">reset_renotify_occurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRenotifyStatuses">reset_renotify_statuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRequireFullWindow">reset_require_full_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetRestrictedRoles">reset_restricted_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetSchedulingOptions">reset_scheduling_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetTimeoutH">reset_timeout_h</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetValidate">reset_validate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.Monitor.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.monitor.Monitor.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.monitor.Monitor.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.Monitor.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.monitor.Monitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.monitor.Monitor.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.monitor.Monitor.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.monitor.Monitor.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.monitor.Monitor.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.monitor.Monitor.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.monitor.Monitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.monitor.Monitor.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.monitor.Monitor.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.Monitor.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.Monitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.monitor.Monitor.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.monitor.Monitor.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.monitor.Monitor.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.monitor.Monitor.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.monitor.Monitor.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_monitor_thresholds` <a name="put_monitor_thresholds" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds"></a>

```python
def put_monitor_thresholds(
  critical: str = None,
  critical_recovery: str = None,
  ok: str = None,
  unknown: str = None,
  warning: str = None,
  warning_recovery: str = None
) -> None
```

###### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.critical"></a>

- *Type:* str

The monitor `CRITICAL` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#critical Monitor#critical}

---

###### `critical_recovery`<sup>Optional</sup> <a name="critical_recovery" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.criticalRecovery"></a>

- *Type:* str

The monitor `CRITICAL` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#critical_recovery Monitor#critical_recovery}

---

###### `ok`<sup>Optional</sup> <a name="ok" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.ok"></a>

- *Type:* str

The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#ok Monitor#ok}

---

###### `unknown`<sup>Optional</sup> <a name="unknown" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.unknown"></a>

- *Type:* str

The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#unknown Monitor#unknown}

---

###### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.warning"></a>

- *Type:* str

The monitor `WARNING` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#warning Monitor#warning}

---

###### `warning_recovery`<sup>Optional</sup> <a name="warning_recovery" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholds.parameter.warningRecovery"></a>

- *Type:* str

The monitor `WARNING` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#warning_recovery Monitor#warning_recovery}

---

##### `put_monitor_threshold_windows` <a name="put_monitor_threshold_windows" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows"></a>

```python
def put_monitor_threshold_windows(
  recovery_window: str = None,
  trigger_window: str = None
) -> None
```

###### `recovery_window`<sup>Optional</sup> <a name="recovery_window" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows.parameter.recoveryWindow"></a>

- *Type:* str

Describes how long an anomalous metric must be normal before the alert recovers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#recovery_window Monitor#recovery_window}

---

###### `trigger_window`<sup>Optional</sup> <a name="trigger_window" id="@cdktf/provider-datadog.monitor.Monitor.putMonitorThresholdWindows.parameter.triggerWindow"></a>

- *Type:* str

Describes how long a metric must be anomalous before an alert triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#trigger_window Monitor#trigger_window}

---

##### `put_scheduling_options` <a name="put_scheduling_options" id="@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions"></a>

```python
def put_scheduling_options(
  custom_schedule: MonitorSchedulingOptionsCustomSchedule = None,
  evaluation_window: MonitorSchedulingOptionsEvaluationWindow = None
) -> None
```

###### `custom_schedule`<sup>Optional</sup> <a name="custom_schedule" id="@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions.parameter.customSchedule"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

custom_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#custom_schedule Monitor#custom_schedule}

---

###### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktf/provider-datadog.monitor.Monitor.putSchedulingOptions.parameter.evaluationWindow"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

evaluation_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#evaluation_window Monitor#evaluation_window}

---

##### `put_variables` <a name="put_variables" id="@cdktf/provider-datadog.monitor.Monitor.putVariables"></a>

```python
def put_variables(
  event_query: typing.Union[IResolvable, typing.List[MonitorVariablesEventQuery]] = None
) -> None
```

###### `event_query`<sup>Optional</sup> <a name="event_query" id="@cdktf/provider-datadog.monitor.Monitor.putVariables.parameter.eventQuery"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]

event_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#event_query Monitor#event_query}

---

##### `reset_enable_logs_sample` <a name="reset_enable_logs_sample" id="@cdktf/provider-datadog.monitor.Monitor.resetEnableLogsSample"></a>

```python
def reset_enable_logs_sample() -> None
```

##### `reset_escalation_message` <a name="reset_escalation_message" id="@cdktf/provider-datadog.monitor.Monitor.resetEscalationMessage"></a>

```python
def reset_escalation_message() -> None
```

##### `reset_evaluation_delay` <a name="reset_evaluation_delay" id="@cdktf/provider-datadog.monitor.Monitor.resetEvaluationDelay"></a>

```python
def reset_evaluation_delay() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-datadog.monitor.Monitor.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_groupby_simple_monitor` <a name="reset_groupby_simple_monitor" id="@cdktf/provider-datadog.monitor.Monitor.resetGroupbySimpleMonitor"></a>

```python
def reset_groupby_simple_monitor() -> None
```

##### `reset_group_retention_duration` <a name="reset_group_retention_duration" id="@cdktf/provider-datadog.monitor.Monitor.resetGroupRetentionDuration"></a>

```python
def reset_group_retention_duration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.monitor.Monitor.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_tags` <a name="reset_include_tags" id="@cdktf/provider-datadog.monitor.Monitor.resetIncludeTags"></a>

```python
def reset_include_tags() -> None
```

##### `reset_locked` <a name="reset_locked" id="@cdktf/provider-datadog.monitor.Monitor.resetLocked"></a>

```python
def reset_locked() -> None
```

##### `reset_monitor_thresholds` <a name="reset_monitor_thresholds" id="@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholds"></a>

```python
def reset_monitor_thresholds() -> None
```

##### `reset_monitor_threshold_windows` <a name="reset_monitor_threshold_windows" id="@cdktf/provider-datadog.monitor.Monitor.resetMonitorThresholdWindows"></a>

```python
def reset_monitor_threshold_windows() -> None
```

##### `reset_new_group_delay` <a name="reset_new_group_delay" id="@cdktf/provider-datadog.monitor.Monitor.resetNewGroupDelay"></a>

```python
def reset_new_group_delay() -> None
```

##### `reset_new_host_delay` <a name="reset_new_host_delay" id="@cdktf/provider-datadog.monitor.Monitor.resetNewHostDelay"></a>

```python
def reset_new_host_delay() -> None
```

##### `reset_no_data_timeframe` <a name="reset_no_data_timeframe" id="@cdktf/provider-datadog.monitor.Monitor.resetNoDataTimeframe"></a>

```python
def reset_no_data_timeframe() -> None
```

##### `reset_notification_preset_name` <a name="reset_notification_preset_name" id="@cdktf/provider-datadog.monitor.Monitor.resetNotificationPresetName"></a>

```python
def reset_notification_preset_name() -> None
```

##### `reset_notify_audit` <a name="reset_notify_audit" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyAudit"></a>

```python
def reset_notify_audit() -> None
```

##### `reset_notify_by` <a name="reset_notify_by" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyBy"></a>

```python
def reset_notify_by() -> None
```

##### `reset_notify_no_data` <a name="reset_notify_no_data" id="@cdktf/provider-datadog.monitor.Monitor.resetNotifyNoData"></a>

```python
def reset_notify_no_data() -> None
```

##### `reset_on_missing_data` <a name="reset_on_missing_data" id="@cdktf/provider-datadog.monitor.Monitor.resetOnMissingData"></a>

```python
def reset_on_missing_data() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-datadog.monitor.Monitor.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_renotify_interval` <a name="reset_renotify_interval" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyInterval"></a>

```python
def reset_renotify_interval() -> None
```

##### `reset_renotify_occurrences` <a name="reset_renotify_occurrences" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyOccurrences"></a>

```python
def reset_renotify_occurrences() -> None
```

##### `reset_renotify_statuses` <a name="reset_renotify_statuses" id="@cdktf/provider-datadog.monitor.Monitor.resetRenotifyStatuses"></a>

```python
def reset_renotify_statuses() -> None
```

##### `reset_require_full_window` <a name="reset_require_full_window" id="@cdktf/provider-datadog.monitor.Monitor.resetRequireFullWindow"></a>

```python
def reset_require_full_window() -> None
```

##### `reset_restricted_roles` <a name="reset_restricted_roles" id="@cdktf/provider-datadog.monitor.Monitor.resetRestrictedRoles"></a>

```python
def reset_restricted_roles() -> None
```

##### `reset_scheduling_options` <a name="reset_scheduling_options" id="@cdktf/provider-datadog.monitor.Monitor.resetSchedulingOptions"></a>

```python
def reset_scheduling_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.monitor.Monitor.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout_h` <a name="reset_timeout_h" id="@cdktf/provider-datadog.monitor.Monitor.resetTimeoutH"></a>

```python
def reset_timeout_h() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktf/provider-datadog.monitor.Monitor.resetValidate"></a>

```python
def reset_validate() -> None
```

##### `reset_variables` <a name="reset_variables" id="@cdktf/provider-datadog.monitor.Monitor.resetVariables"></a>

```python
def reset_variables() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.monitor.Monitor.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.Monitor.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitor.Monitor.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.Monitor.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.Monitor.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitor.Monitor.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.Monitor.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Monitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Monitor to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Monitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.Monitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Monitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableSamples">enable_samples</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholds">monitor_thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindows">monitor_threshold_windows</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptions">scheduling_options</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.variables">variables</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSampleInput">enable_logs_sample_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.escalationMessageInput">escalation_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelayInput">evaluation_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput">groupby_simple_monitor_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput">group_retention_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.includeTagsInput">include_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.lockedInput">locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdsInput">monitor_thresholds_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput">monitor_threshold_windows_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelayInput">new_group_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newHostDelayInput">new_host_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframeInput">no_data_timeframe_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetNameInput">notification_preset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyAuditInput">notify_audit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyByInput">notify_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyNoDataInput">notify_no_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.onMissingDataInput">on_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyIntervalInput">renotify_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput">renotify_occurrences_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatusesInput">renotify_statuses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindowInput">require_full_window_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.restrictedRolesInput">restricted_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptionsInput">scheduling_options_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.timeoutHInput">timeout_h_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.validateInput">validate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.variablesInput">variables_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSample">enable_logs_sample</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.escalationMessage">escalation_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelay">evaluation_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor">groupby_simple_monitor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDuration">group_retention_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.includeTags">include_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelay">new_group_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.newHostDelay">new_host_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframe">no_data_timeframe</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetName">notification_preset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyAudit">notify_audit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyBy">notify_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.notifyNoData">notify_no_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.onMissingData">on_missing_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyInterval">renotify_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrences">renotify_occurrences</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatuses">renotify_statuses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindow">require_full_window</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.timeoutH">timeout_h</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.monitor.Monitor.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.monitor.Monitor.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.Monitor.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.monitor.Monitor.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.monitor.Monitor.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitor.Monitor.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitor.Monitor.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.monitor.Monitor.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.monitor.Monitor.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitor.Monitor.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.Monitor.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitor.Monitor.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_samples`<sup>Required</sup> <a name="enable_samples" id="@cdktf/provider-datadog.monitor.Monitor.property.enableSamples"></a>

```python
enable_samples: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monitor_thresholds`<sup>Required</sup> <a name="monitor_thresholds" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholds"></a>

```python
monitor_thresholds: MonitorMonitorThresholdsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference">MonitorMonitorThresholdsOutputReference</a>

---

##### `monitor_threshold_windows`<sup>Required</sup> <a name="monitor_threshold_windows" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindows"></a>

```python
monitor_threshold_windows: MonitorMonitorThresholdWindowsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference">MonitorMonitorThresholdWindowsOutputReference</a>

---

##### `scheduling_options`<sup>Required</sup> <a name="scheduling_options" id="@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptions"></a>

```python
scheduling_options: MonitorSchedulingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference">MonitorSchedulingOptionsOutputReference</a>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-datadog.monitor.Monitor.property.variables"></a>

```python
variables: MonitorVariablesOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference">MonitorVariablesOutputReference</a>

---

##### `enable_logs_sample_input`<sup>Optional</sup> <a name="enable_logs_sample_input" id="@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSampleInput"></a>

```python
enable_logs_sample_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `escalation_message_input`<sup>Optional</sup> <a name="escalation_message_input" id="@cdktf/provider-datadog.monitor.Monitor.property.escalationMessageInput"></a>

```python
escalation_message_input: str
```

- *Type:* str

---

##### `evaluation_delay_input`<sup>Optional</sup> <a name="evaluation_delay_input" id="@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelayInput"></a>

```python
evaluation_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-datadog.monitor.Monitor.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groupby_simple_monitor_input`<sup>Optional</sup> <a name="groupby_simple_monitor_input" id="@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitorInput"></a>

```python
groupby_simple_monitor_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_retention_duration_input`<sup>Optional</sup> <a name="group_retention_duration_input" id="@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDurationInput"></a>

```python
group_retention_duration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.monitor.Monitor.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_tags_input`<sup>Optional</sup> <a name="include_tags_input" id="@cdktf/provider-datadog.monitor.Monitor.property.includeTagsInput"></a>

```python
include_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locked_input`<sup>Optional</sup> <a name="locked_input" id="@cdktf/provider-datadog.monitor.Monitor.property.lockedInput"></a>

```python
locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-datadog.monitor.Monitor.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `monitor_thresholds_input`<sup>Optional</sup> <a name="monitor_thresholds_input" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdsInput"></a>

```python
monitor_thresholds_input: MonitorMonitorThresholds
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---

##### `monitor_threshold_windows_input`<sup>Optional</sup> <a name="monitor_threshold_windows_input" id="@cdktf/provider-datadog.monitor.Monitor.property.monitorThresholdWindowsInput"></a>

```python
monitor_threshold_windows_input: MonitorMonitorThresholdWindows
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.monitor.Monitor.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `new_group_delay_input`<sup>Optional</sup> <a name="new_group_delay_input" id="@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelayInput"></a>

```python
new_group_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_host_delay_input`<sup>Optional</sup> <a name="new_host_delay_input" id="@cdktf/provider-datadog.monitor.Monitor.property.newHostDelayInput"></a>

```python
new_host_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_data_timeframe_input`<sup>Optional</sup> <a name="no_data_timeframe_input" id="@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframeInput"></a>

```python
no_data_timeframe_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notification_preset_name_input`<sup>Optional</sup> <a name="notification_preset_name_input" id="@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetNameInput"></a>

```python
notification_preset_name_input: str
```

- *Type:* str

---

##### `notify_audit_input`<sup>Optional</sup> <a name="notify_audit_input" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyAuditInput"></a>

```python
notify_audit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_by_input`<sup>Optional</sup> <a name="notify_by_input" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyByInput"></a>

```python
notify_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notify_no_data_input`<sup>Optional</sup> <a name="notify_no_data_input" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyNoDataInput"></a>

```python
notify_no_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_missing_data_input`<sup>Optional</sup> <a name="on_missing_data_input" id="@cdktf/provider-datadog.monitor.Monitor.property.onMissingDataInput"></a>

```python
on_missing_data_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-datadog.monitor.Monitor.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.monitor.Monitor.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `renotify_interval_input`<sup>Optional</sup> <a name="renotify_interval_input" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyIntervalInput"></a>

```python
renotify_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renotify_occurrences_input`<sup>Optional</sup> <a name="renotify_occurrences_input" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrencesInput"></a>

```python
renotify_occurrences_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renotify_statuses_input`<sup>Optional</sup> <a name="renotify_statuses_input" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatusesInput"></a>

```python
renotify_statuses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_full_window_input`<sup>Optional</sup> <a name="require_full_window_input" id="@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindowInput"></a>

```python
require_full_window_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restricted_roles_input`<sup>Optional</sup> <a name="restricted_roles_input" id="@cdktf/provider-datadog.monitor.Monitor.property.restrictedRolesInput"></a>

```python
restricted_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduling_options_input`<sup>Optional</sup> <a name="scheduling_options_input" id="@cdktf/provider-datadog.monitor.Monitor.property.schedulingOptionsInput"></a>

```python
scheduling_options_input: MonitorSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.monitor.Monitor.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_h_input`<sup>Optional</sup> <a name="timeout_h_input" id="@cdktf/provider-datadog.monitor.Monitor.property.timeoutHInput"></a>

```python
timeout_h_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.monitor.Monitor.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktf/provider-datadog.monitor.Monitor.property.validateInput"></a>

```python
validate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktf/provider-datadog.monitor.Monitor.property.variablesInput"></a>

```python
variables_input: MonitorVariables
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---

##### `enable_logs_sample`<sup>Required</sup> <a name="enable_logs_sample" id="@cdktf/provider-datadog.monitor.Monitor.property.enableLogsSample"></a>

```python
enable_logs_sample: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `escalation_message`<sup>Required</sup> <a name="escalation_message" id="@cdktf/provider-datadog.monitor.Monitor.property.escalationMessage"></a>

```python
escalation_message: str
```

- *Type:* str

---

##### `evaluation_delay`<sup>Required</sup> <a name="evaluation_delay" id="@cdktf/provider-datadog.monitor.Monitor.property.evaluationDelay"></a>

```python
evaluation_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-datadog.monitor.Monitor.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `groupby_simple_monitor`<sup>Required</sup> <a name="groupby_simple_monitor" id="@cdktf/provider-datadog.monitor.Monitor.property.groupbySimpleMonitor"></a>

```python
groupby_simple_monitor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_retention_duration`<sup>Required</sup> <a name="group_retention_duration" id="@cdktf/provider-datadog.monitor.Monitor.property.groupRetentionDuration"></a>

```python
group_retention_duration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitor.Monitor.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_tags`<sup>Required</sup> <a name="include_tags" id="@cdktf/provider-datadog.monitor.Monitor.property.includeTags"></a>

```python
include_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-datadog.monitor.Monitor.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.monitor.Monitor.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.Monitor.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `new_group_delay`<sup>Required</sup> <a name="new_group_delay" id="@cdktf/provider-datadog.monitor.Monitor.property.newGroupDelay"></a>

```python
new_group_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `new_host_delay`<sup>Required</sup> <a name="new_host_delay" id="@cdktf/provider-datadog.monitor.Monitor.property.newHostDelay"></a>

```python
new_host_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_data_timeframe`<sup>Required</sup> <a name="no_data_timeframe" id="@cdktf/provider-datadog.monitor.Monitor.property.noDataTimeframe"></a>

```python
no_data_timeframe: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notification_preset_name`<sup>Required</sup> <a name="notification_preset_name" id="@cdktf/provider-datadog.monitor.Monitor.property.notificationPresetName"></a>

```python
notification_preset_name: str
```

- *Type:* str

---

##### `notify_audit`<sup>Required</sup> <a name="notify_audit" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyAudit"></a>

```python
notify_audit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_by`<sup>Required</sup> <a name="notify_by" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyBy"></a>

```python
notify_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notify_no_data`<sup>Required</sup> <a name="notify_no_data" id="@cdktf/provider-datadog.monitor.Monitor.property.notifyNoData"></a>

```python
notify_no_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_missing_data`<sup>Required</sup> <a name="on_missing_data" id="@cdktf/provider-datadog.monitor.Monitor.property.onMissingData"></a>

```python
on_missing_data: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-datadog.monitor.Monitor.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.Monitor.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `renotify_interval`<sup>Required</sup> <a name="renotify_interval" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyInterval"></a>

```python
renotify_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renotify_occurrences`<sup>Required</sup> <a name="renotify_occurrences" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyOccurrences"></a>

```python
renotify_occurrences: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `renotify_statuses`<sup>Required</sup> <a name="renotify_statuses" id="@cdktf/provider-datadog.monitor.Monitor.property.renotifyStatuses"></a>

```python
renotify_statuses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_full_window`<sup>Required</sup> <a name="require_full_window" id="@cdktf/provider-datadog.monitor.Monitor.property.requireFullWindow"></a>

```python
require_full_window: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `restricted_roles`<sup>Required</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.monitor.Monitor.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.monitor.Monitor.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_h`<sup>Required</sup> <a name="timeout_h" id="@cdktf/provider-datadog.monitor.Monitor.property.timeoutH"></a>

```python
timeout_h: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.monitor.Monitor.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-datadog.monitor.Monitor.property.validate"></a>

```python
validate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.Monitor.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.monitor.Monitor.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorConfig <a name="MonitorConfig" id="@cdktf/provider-datadog.monitor.MonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  message: str,
  name: str,
  query: str,
  type: str,
  enable_logs_sample: typing.Union[bool, IResolvable] = None,
  escalation_message: str = None,
  evaluation_delay: typing.Union[int, float] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  groupby_simple_monitor: typing.Union[bool, IResolvable] = None,
  group_retention_duration: str = None,
  id: str = None,
  include_tags: typing.Union[bool, IResolvable] = None,
  locked: typing.Union[bool, IResolvable] = None,
  monitor_thresholds: MonitorMonitorThresholds = None,
  monitor_threshold_windows: MonitorMonitorThresholdWindows = None,
  new_group_delay: typing.Union[int, float] = None,
  new_host_delay: typing.Union[int, float] = None,
  no_data_timeframe: typing.Union[int, float] = None,
  notification_preset_name: str = None,
  notify_audit: typing.Union[bool, IResolvable] = None,
  notify_by: typing.List[str] = None,
  notify_no_data: typing.Union[bool, IResolvable] = None,
  on_missing_data: str = None,
  priority: typing.Union[int, float] = None,
  renotify_interval: typing.Union[int, float] = None,
  renotify_occurrences: typing.Union[int, float] = None,
  renotify_statuses: typing.List[str] = None,
  require_full_window: typing.Union[bool, IResolvable] = None,
  restricted_roles: typing.List[str] = None,
  scheduling_options: MonitorSchedulingOptions = None,
  tags: typing.List[str] = None,
  timeout_h: typing.Union[int, float] = None,
  validate: typing.Union[bool, IResolvable] = None,
  variables: MonitorVariables = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.message">message</a></code> | <code>str</code> | A message to include with notifications for this monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.name">name</a></code> | <code>str</code> | Name of Datadog monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.query">query</a></code> | <code>str</code> | The monitor query to notify on. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.type">type</a></code> | <code>str</code> | The type of the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.enableLogsSample">enable_logs_sample</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether or not to include a list of log values which triggered the alert. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.escalationMessage">escalation_message</a></code> | <code>str</code> | A message to include with a re-notification. Supports the `@username` notification allowed elsewhere. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.evaluationDelay">evaluation_delay</a></code> | <code>typing.Union[int, float]</code> | (Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor). |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor">groupby_simple_monitor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to trigger one alert if any source breaches a threshold. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration">group_retention_duration</a></code> | <code>str</code> | The time span after which groups with missing data are dropped from the monitor state. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#id Monitor#id}. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.includeTags">include_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.locked">locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether changes to this monitor should be restricted to the creator or admins. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholds">monitor_thresholds</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | monitor_thresholds block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows">monitor_threshold_windows</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | monitor_threshold_windows block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.newGroupDelay">new_group_delay</a></code> | <code>typing.Union[int, float]</code> | The time (in seconds) to skip evaluations for new groups. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.newHostDelay">new_host_delay</a></code> | <code>typing.Union[int, float]</code> | **Deprecated**. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe">no_data_timeframe</a></code> | <code>typing.Union[int, float]</code> | The number of minutes before a monitor will notify when data stops reporting. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notificationPresetName">notification_preset_name</a></code> | <code>str</code> | Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyAudit">notify_audit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyBy">notify_by</a></code> | <code>typing.List[str]</code> | Controls what granularity a monitor alerts on. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyNoData">notify_no_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.onMissingData">on_missing_data</a></code> | <code>str</code> | Controls how groups or monitors are treated if an evaluation does not return any data points. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Integer from 1 (high) to 5 (low) indicating alert severity. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyInterval">renotify_interval</a></code> | <code>typing.Union[int, float]</code> | The number of minutes after the last notification before a monitor will re-notify on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences">renotify_occurrences</a></code> | <code>typing.Union[int, float]</code> | The number of re-notification messages that should be sent on the current status. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses">renotify_statuses</a></code> | <code>typing.List[str]</code> | The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.requireFullWindow">require_full_window</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean indicating whether this monitor needs a full window of data before it's evaluated. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | A list of unique role identifiers to define which roles are allowed to edit the monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.schedulingOptions">scheduling_options</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | scheduling_options block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your monitor. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.timeoutH">timeout_h</a></code> | <code>typing.Union[int, float]</code> | The number of hours of the monitor not reporting data before it automatically resolves from a triggered state. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to `false`, skip the validation call done during plan. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorConfig.property.variables">variables</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | variables block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.message"></a>

```python
message: str
```

- *Type:* str

A message to include with notifications for this monitor.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#message Monitor#message}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of Datadog monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#name Monitor#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The monitor query to notify on.

Note this is not the same query you see in the UI and the syntax is different depending on the monitor type, please see the [API Reference](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor) for details. `terraform plan` will validate query contents unless `validate` is set to `false`.

**Note:** APM latency data is now available as Distribution Metrics. Existing monitors have been migrated automatically but all terraformed monitors can still use the existing metrics. We strongly recommend updating monitor definitions to query the new metrics. To learn more, or to see examples of how to update your terraform definitions to utilize the new distribution metrics, see the [detailed doc](https://docs.datadoghq.com/tracing/guide/ddsketch_trace_metrics/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#query Monitor#query}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the monitor.

The mapping from these types to the types found in the Datadog Web UI can be found in the Datadog API [documentation page](https://docs.datadoghq.com/api/v1/monitors/#create-a-monitor). Note: The monitor type cannot be changed after a monitor is created. Valid values are `composite`, `event alert`, `log alert`, `metric alert`, `process alert`, `query alert`, `rum alert`, `service check`, `synthetics alert`, `trace-analytics alert`, `slo alert`, `event-v2 alert`, `audit alert`, `ci-pipelines alert`, `ci-tests alert`, `error-tracking alert`, `database-monitoring alert`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#type Monitor#type}

---

##### `enable_logs_sample`<sup>Optional</sup> <a name="enable_logs_sample" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.enableLogsSample"></a>

```python
enable_logs_sample: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether or not to include a list of log values which triggered the alert.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#enable_logs_sample Monitor#enable_logs_sample}

---

##### `escalation_message`<sup>Optional</sup> <a name="escalation_message" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.escalationMessage"></a>

```python
escalation_message: str
```

- *Type:* str

A message to include with a re-notification. Supports the `@username` notification allowed elsewhere.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#escalation_message Monitor#escalation_message}

---

##### `evaluation_delay`<sup>Optional</sup> <a name="evaluation_delay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.evaluationDelay"></a>

```python
evaluation_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Only applies to metric alert) Time (in seconds) to delay evaluation, as a non-negative integer.

For example, if the value is set to `300` (5min), the `timeframe` is set to `last_5m` and the time is 7:00, the monitor will evaluate data from 6:50 to 6:55. This is useful for AWS CloudWatch and other backfilled metrics to ensure the monitor will always have data during evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#evaluation_delay Monitor#evaluation_delay}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor can be deleted even if it’s referenced by other resources (e.g. SLO, composite monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#force_delete Monitor#force_delete}

---

##### `groupby_simple_monitor`<sup>Optional</sup> <a name="groupby_simple_monitor" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.groupbySimpleMonitor"></a>

```python
groupby_simple_monitor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to trigger one alert if any source breaches a threshold.

This is only used by log monitors. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#groupby_simple_monitor Monitor#groupby_simple_monitor}

---

##### `group_retention_duration`<sup>Optional</sup> <a name="group_retention_duration" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.groupRetentionDuration"></a>

```python
group_retention_duration: str
```

- *Type:* str

The time span after which groups with missing data are dropped from the monitor state.

The minimum value is one hour, and the maximum value is 72 hours. Example values are: 60m, 1h, and 2d. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#group_retention_duration Monitor#group_retention_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#id Monitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_tags`<sup>Optional</sup> <a name="include_tags" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.includeTags"></a>

```python
include_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether notifications from this monitor automatically insert its triggering tags into the title. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#include_tags Monitor#include_tags}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.locked"></a>

```python
locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether changes to this monitor should be restricted to the creator or admins.

Defaults to `false`. **Deprecated.** Use `restricted_roles`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#locked Monitor#locked}

---

##### `monitor_thresholds`<sup>Optional</sup> <a name="monitor_thresholds" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholds"></a>

```python
monitor_thresholds: MonitorMonitorThresholds
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

monitor_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#monitor_thresholds Monitor#monitor_thresholds}

---

##### `monitor_threshold_windows`<sup>Optional</sup> <a name="monitor_threshold_windows" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.monitorThresholdWindows"></a>

```python
monitor_threshold_windows: MonitorMonitorThresholdWindows
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

monitor_threshold_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#monitor_threshold_windows Monitor#monitor_threshold_windows}

---

##### `new_group_delay`<sup>Optional</sup> <a name="new_group_delay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.newGroupDelay"></a>

```python
new_group_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time (in seconds) to skip evaluations for new groups.

`new_group_delay` overrides `new_host_delay` if it is set to a nonzero value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#new_group_delay Monitor#new_group_delay}

---

##### `new_host_delay`<sup>Optional</sup> <a name="new_host_delay" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.newHostDelay"></a>

```python
new_host_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

**Deprecated**.

See `new_group_delay`. Time (in seconds) to allow a host to boot and applications to fully start before starting the evaluation of monitor results. Should be a non-negative integer. This value is ignored for simple monitors and monitors not grouped by host. The only case when this should be used is to override the default and set `new_host_delay` to zero for monitors grouped by host. **Deprecated.** Use `new_group_delay` except when setting `new_host_delay` to zero. Defaults to `300`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#new_host_delay Monitor#new_host_delay}

---

##### `no_data_timeframe`<sup>Optional</sup> <a name="no_data_timeframe" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.noDataTimeframe"></a>

```python
no_data_timeframe: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes before a monitor will notify when data stops reporting.

We recommend at least 2x the monitor timeframe for metric alerts or 2 minutes for service checks. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#no_data_timeframe Monitor#no_data_timeframe}

---

##### `notification_preset_name`<sup>Optional</sup> <a name="notification_preset_name" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notificationPresetName"></a>

```python
notification_preset_name: str
```

- *Type:* str

Toggles the display of additional content sent in the monitor notification. Valid values are `show_all`, `hide_query`, `hide_handles`, `hide_all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notification_preset_name Monitor#notification_preset_name}

---

##### `notify_audit`<sup>Optional</sup> <a name="notify_audit" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyAudit"></a>

```python
notify_audit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether tagged users will be notified on changes to this monitor. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notify_audit Monitor#notify_audit}

---

##### `notify_by`<sup>Optional</sup> <a name="notify_by" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyBy"></a>

```python
notify_by: typing.List[str]
```

- *Type:* typing.List[str]

Controls what granularity a monitor alerts on.

Only available for monitors with groupings. For instance, a monitor grouped by `cluster`, `namespace`, and `pod` can be configured to only notify on each new `cluster` violating the alert conditions by setting `notify_by` to `['cluster']`. Tags mentioned in `notify_by` must be a subset of the grouping tags in the query. For example, a query grouped by `cluster` and `namespace` cannot notify on `region`. Setting `notify_by` to `[*]` configures the monitor to notify as a simple-alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notify_by Monitor#notify_by}

---

##### `notify_no_data`<sup>Optional</sup> <a name="notify_no_data" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.notifyNoData"></a>

```python
notify_no_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor will notify when data stops reporting. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#notify_no_data Monitor#notify_no_data}

---

##### `on_missing_data`<sup>Optional</sup> <a name="on_missing_data" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.onMissingData"></a>

```python
on_missing_data: str
```

- *Type:* str

Controls how groups or monitors are treated if an evaluation does not return any data points.

The default option results in different behavior depending on the monitor query type. For monitors using `Count` queries, an empty monitor evaluation is treated as 0 and is compared to the threshold conditions. For monitors using any query type other than `Count`, for example `Gauge`, `Measure`, or `Rate`, the monitor shows the last known status. This option is only available for APM Trace Analytics, Audit Trail, CI, Error Tracking, Event, Logs, and RUM monitors. Valid values are: `show_no_data`, `show_and_notify_no_data`, `resolve`, and `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#on_missing_data Monitor#on_missing_data}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Integer from 1 (high) to 5 (low) indicating alert severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#priority Monitor#priority}

---

##### `renotify_interval`<sup>Optional</sup> <a name="renotify_interval" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyInterval"></a>

```python
renotify_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes after the last notification before a monitor will re-notify on the current status.

It will only re-notify if it's not resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#renotify_interval Monitor#renotify_interval}

---

##### `renotify_occurrences`<sup>Optional</sup> <a name="renotify_occurrences" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyOccurrences"></a>

```python
renotify_occurrences: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of re-notification messages that should be sent on the current status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#renotify_occurrences Monitor#renotify_occurrences}

---

##### `renotify_statuses`<sup>Optional</sup> <a name="renotify_statuses" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.renotifyStatuses"></a>

```python
renotify_statuses: typing.List[str]
```

- *Type:* typing.List[str]

The types of statuses for which re-notification messages should be sent. Valid values are `alert`, `warn`, `no data`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#renotify_statuses Monitor#renotify_statuses}

---

##### `require_full_window`<sup>Optional</sup> <a name="require_full_window" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.requireFullWindow"></a>

```python
require_full_window: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean indicating whether this monitor needs a full window of data before it's evaluated.

Datadog strongly recommends you set this to `false` for sparse metrics, otherwise some evaluations may be skipped. If there's a custom_schedule set, `require_full_window` must be false and will be ignored. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#require_full_window Monitor#require_full_window}

---

##### `restricted_roles`<sup>Optional</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

A list of unique role identifiers to define which roles are allowed to edit the monitor.

Editing a monitor includes any updates to the monitor configuration, monitor deletion, and muting of the monitor for any amount of time. Roles unique identifiers can be pulled from the [Roles API](https://docs.datadoghq.com/api/latest/roles/#list-roles) in the `data.id` field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#restricted_roles Monitor#restricted_roles}

---

##### `scheduling_options`<sup>Optional</sup> <a name="scheduling_options" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.schedulingOptions"></a>

```python
scheduling_options: MonitorSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

scheduling_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#scheduling_options Monitor#scheduling_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags to associate with your monitor.

This can help you categorize and filter monitors in the manage monitors page of the UI. Note: it's not currently possible to filter by these tags when querying via the API

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#tags Monitor#tags}

---

##### `timeout_h`<sup>Optional</sup> <a name="timeout_h" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.timeoutH"></a>

```python
timeout_h: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of hours of the monitor not reporting data before it automatically resolves from a triggered state.

The minimum allowed value is 0 hours. The maximum allowed value is 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#timeout_h Monitor#timeout_h}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.validate"></a>

```python
validate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to `false`, skip the validation call done during plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#validate Monitor#validate}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/provider-datadog.monitor.MonitorConfig.property.variables"></a>

```python
variables: MonitorVariables
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#variables Monitor#variables}

---

### MonitorMonitorThresholds <a name="MonitorMonitorThresholds" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorMonitorThresholds(
  critical: str = None,
  critical_recovery: str = None,
  ok: str = None,
  unknown: str = None,
  warning: str = None,
  warning_recovery: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.critical">critical</a></code> | <code>str</code> | The monitor `CRITICAL` threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery">critical_recovery</a></code> | <code>str</code> | The monitor `CRITICAL` recovery threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.ok">ok</a></code> | <code>str</code> | The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown">unknown</a></code> | <code>str</code> | The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warning">warning</a></code> | <code>str</code> | The monitor `WARNING` threshold. Must be a number. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery">warning_recovery</a></code> | <code>str</code> | The monitor `WARNING` recovery threshold. Must be a number. |

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.critical"></a>

```python
critical: str
```

- *Type:* str

The monitor `CRITICAL` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#critical Monitor#critical}

---

##### `critical_recovery`<sup>Optional</sup> <a name="critical_recovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.criticalRecovery"></a>

```python
critical_recovery: str
```

- *Type:* str

The monitor `CRITICAL` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#critical_recovery Monitor#critical_recovery}

---

##### `ok`<sup>Optional</sup> <a name="ok" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.ok"></a>

```python
ok: str
```

- *Type:* str

The monitor `OK` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#ok Monitor#ok}

---

##### `unknown`<sup>Optional</sup> <a name="unknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.unknown"></a>

```python
unknown: str
```

- *Type:* str

The monitor `UNKNOWN` threshold. Only supported in monitor type `service check`. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#unknown Monitor#unknown}

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warning"></a>

```python
warning: str
```

- *Type:* str

The monitor `WARNING` threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#warning Monitor#warning}

---

##### `warning_recovery`<sup>Optional</sup> <a name="warning_recovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholds.property.warningRecovery"></a>

```python
warning_recovery: str
```

- *Type:* str

The monitor `WARNING` recovery threshold. Must be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#warning_recovery Monitor#warning_recovery}

---

### MonitorMonitorThresholdWindows <a name="MonitorMonitorThresholdWindows" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorMonitorThresholdWindows(
  recovery_window: str = None,
  trigger_window: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow">recovery_window</a></code> | <code>str</code> | Describes how long an anomalous metric must be normal before the alert recovers. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow">trigger_window</a></code> | <code>str</code> | Describes how long a metric must be anomalous before an alert triggers. |

---

##### `recovery_window`<sup>Optional</sup> <a name="recovery_window" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.recoveryWindow"></a>

```python
recovery_window: str
```

- *Type:* str

Describes how long an anomalous metric must be normal before the alert recovers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#recovery_window Monitor#recovery_window}

---

##### `trigger_window`<sup>Optional</sup> <a name="trigger_window" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows.property.triggerWindow"></a>

```python
trigger_window: str
```

- *Type:* str

Describes how long a metric must be anomalous before an alert triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#trigger_window Monitor#trigger_window}

---

### MonitorSchedulingOptions <a name="MonitorSchedulingOptions" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptions(
  custom_schedule: MonitorSchedulingOptionsCustomSchedule = None,
  evaluation_window: MonitorSchedulingOptionsEvaluationWindow = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule">custom_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | custom_schedule block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow">evaluation_window</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | evaluation_window block. |

---

##### `custom_schedule`<sup>Optional</sup> <a name="custom_schedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.customSchedule"></a>

```python
custom_schedule: MonitorSchedulingOptionsCustomSchedule
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

custom_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#custom_schedule Monitor#custom_schedule}

---

##### `evaluation_window`<sup>Optional</sup> <a name="evaluation_window" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptions.property.evaluationWindow"></a>

```python
evaluation_window: MonitorSchedulingOptionsEvaluationWindow
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

evaluation_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#evaluation_window Monitor#evaluation_window}

---

### MonitorSchedulingOptionsCustomSchedule <a name="MonitorSchedulingOptionsCustomSchedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptionsCustomSchedule(
  recurrence: MonitorSchedulingOptionsCustomScheduleRecurrence
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | recurrence block. |

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule.property.recurrence"></a>

```python
recurrence: MonitorSchedulingOptionsCustomScheduleRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#recurrence Monitor#recurrence}

---

### MonitorSchedulingOptionsCustomScheduleRecurrence <a name="MonitorSchedulingOptionsCustomScheduleRecurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptionsCustomScheduleRecurrence(
  rrule: str,
  timezone: str,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule">rrule</a></code> | <code>str</code> | Must be a valid `rrule`. See API docs for supported fields. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone">timezone</a></code> | <code>str</code> | 'tz database' format. Example: `America/New_York` or `UTC`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start">start</a></code> | <code>str</code> | Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'. |

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

Must be a valid `rrule`. See API docs for supported fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#rrule Monitor#rrule}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

'tz database' format. Example: `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#timezone Monitor#timezone}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence.property.start"></a>

```python
start: str
```

- *Type:* str

Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#start Monitor#start}

---

### MonitorSchedulingOptionsEvaluationWindow <a name="MonitorSchedulingOptionsEvaluationWindow" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptionsEvaluationWindow(
  day_starts: str = None,
  hour_starts: typing.Union[int, float] = None,
  month_starts: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts">day_starts</a></code> | <code>str</code> | The time of the day at which a one day cumulative evaluation window starts. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts">hour_starts</a></code> | <code>typing.Union[int, float]</code> | The minute of the hour at which a one hour cumulative evaluation window starts. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts">month_starts</a></code> | <code>typing.Union[int, float]</code> | The day of the month at which a one month cumulative evaluation window starts. |

---

##### `day_starts`<sup>Optional</sup> <a name="day_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.dayStarts"></a>

```python
day_starts: str
```

- *Type:* str

The time of the day at which a one day cumulative evaluation window starts.

Must be defined in UTC time in `HH:mm` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#day_starts Monitor#day_starts}

---

##### `hour_starts`<sup>Optional</sup> <a name="hour_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.hourStarts"></a>

```python
hour_starts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minute of the hour at which a one hour cumulative evaluation window starts.

Must be between 0 and 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#hour_starts Monitor#hour_starts}

---

##### `month_starts`<sup>Optional</sup> <a name="month_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow.property.monthStarts"></a>

```python
month_starts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The day of the month at which a one month cumulative evaluation window starts.

Must be a value of 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#month_starts Monitor#month_starts}

---

### MonitorVariables <a name="MonitorVariables" id="@cdktf/provider-datadog.monitor.MonitorVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariables.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariables(
  event_query: typing.Union[IResolvable, typing.List[MonitorVariablesEventQuery]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables.property.eventQuery">event_query</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]</code> | event_query block. |

---

##### `event_query`<sup>Optional</sup> <a name="event_query" id="@cdktf/provider-datadog.monitor.MonitorVariables.property.eventQuery"></a>

```python
event_query: typing.Union[IResolvable, typing.List[MonitorVariablesEventQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]

event_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#event_query Monitor#event_query}

---

### MonitorVariablesEventQuery <a name="MonitorVariablesEventQuery" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQuery(
  compute: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryCompute]],
  data_source: str,
  name: str,
  search: MonitorVariablesEventQuerySearch,
  group_by: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryGroupBy]] = None,
  indexes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute">compute</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]]</code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource">data_source</a></code> | <code>str</code> | The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.name">name</a></code> | <code>str</code> | The name of query for use in formulas. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.search">search</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | search block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy">group_by</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]]</code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes">indexes</a></code> | <code>typing.List[str]</code> | An array of index names to query in the stream. |

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.compute"></a>

```python
compute: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryCompute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]]

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#compute Monitor#compute}

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

The data source for event platform-based queries. Valid values are `rum`, `ci_pipelines`, `ci_tests`, `audit`, `events`, `logs`, `spans`, `database_queries`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#data_source Monitor#data_source}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.name"></a>

```python
name: str
```

- *Type:* str

The name of query for use in formulas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#name Monitor#name}

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.search"></a>

```python
search: MonitorVariablesEventQuerySearch
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#search Monitor#search}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.groupBy"></a>

```python
group_by: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryGroupBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]]

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#group_by Monitor#group_by}

---

##### `indexes`<sup>Optional</sup> <a name="indexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery.property.indexes"></a>

```python
indexes: typing.List[str]
```

- *Type:* typing.List[str]

An array of index names to query in the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#indexes Monitor#indexes}

---

### MonitorVariablesEventQueryCompute <a name="MonitorVariablesEventQueryCompute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryCompute(
  aggregation: str,
  interval: typing.Union[int, float] = None,
  metric: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation">aggregation</a></code> | <code>str</code> | The aggregation methods for event platform queries. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | A time interval in milliseconds. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric">metric</a></code> | <code>str</code> | The measurable attribute to compute. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

The aggregation methods for event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A time interval in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#interval Monitor#interval}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute.property.metric"></a>

```python
metric: str
```

- *Type:* str

The measurable attribute to compute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#metric Monitor#metric}

---

### MonitorVariablesEventQueryGroupBy <a name="MonitorVariablesEventQueryGroupBy" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryGroupBy(
  facet: str,
  limit: typing.Union[int, float] = None,
  sort: MonitorVariablesEventQueryGroupBySort = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet">facet</a></code> | <code>str</code> | The event facet. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | The number of groups to return. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | sort block. |

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.facet"></a>

```python
facet: str
```

- *Type:* str

The event facet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#facet Monitor#facet}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of groups to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#limit Monitor#limit}

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy.property.sort"></a>

```python
sort: MonitorVariablesEventQueryGroupBySort
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

sort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#sort Monitor#sort}

---

### MonitorVariablesEventQueryGroupBySort <a name="MonitorVariablesEventQueryGroupBySort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryGroupBySort(
  aggregation: str,
  metric: str = None,
  order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation">aggregation</a></code> | <code>str</code> | The aggregation methods for the event platform queries. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric">metric</a></code> | <code>str</code> | The metric used for sorting group by results. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order">order</a></code> | <code>str</code> | Direction of sort. Valid values are `asc`, `desc`. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

The aggregation methods for the event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.metric"></a>

```python
metric: str
```

- *Type:* str

The metric used for sorting group by results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#metric Monitor#metric}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort.property.order"></a>

```python
order: str
```

- *Type:* str

Direction of sort. Valid values are `asc`, `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#order Monitor#order}

---

### MonitorVariablesEventQuerySearch <a name="MonitorVariablesEventQuerySearch" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQuerySearch(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query">query</a></code> | <code>str</code> | The events search string. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch.property.query"></a>

```python
query: str
```

- *Type:* str

The events search string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#query Monitor#query}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorMonitorThresholdsOutputReference <a name="MonitorMonitorThresholdsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorMonitorThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical">reset_critical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery">reset_critical_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk">reset_ok</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown">reset_unknown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning">reset_warning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery">reset_warning_recovery</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_critical` <a name="reset_critical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCritical"></a>

```python
def reset_critical() -> None
```

##### `reset_critical_recovery` <a name="reset_critical_recovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetCriticalRecovery"></a>

```python
def reset_critical_recovery() -> None
```

##### `reset_ok` <a name="reset_ok" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetOk"></a>

```python
def reset_ok() -> None
```

##### `reset_unknown` <a name="reset_unknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetUnknown"></a>

```python
def reset_unknown() -> None
```

##### `reset_warning` <a name="reset_warning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarning"></a>

```python
def reset_warning() -> None
```

##### `reset_warning_recovery` <a name="reset_warning_recovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.resetWarningRecovery"></a>

```python
def reset_warning_recovery() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput">critical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput">critical_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput">ok_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput">unknown_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput">warning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput">warning_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical">critical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery">critical_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok">ok</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown">unknown</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery">warning_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `critical_input`<sup>Optional</sup> <a name="critical_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalInput"></a>

```python
critical_input: str
```

- *Type:* str

---

##### `critical_recovery_input`<sup>Optional</sup> <a name="critical_recovery_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecoveryInput"></a>

```python
critical_recovery_input: str
```

- *Type:* str

---

##### `ok_input`<sup>Optional</sup> <a name="ok_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.okInput"></a>

```python
ok_input: str
```

- *Type:* str

---

##### `unknown_input`<sup>Optional</sup> <a name="unknown_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknownInput"></a>

```python
unknown_input: str
```

- *Type:* str

---

##### `warning_input`<sup>Optional</sup> <a name="warning_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningInput"></a>

```python
warning_input: str
```

- *Type:* str

---

##### `warning_recovery_input`<sup>Optional</sup> <a name="warning_recovery_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecoveryInput"></a>

```python
warning_recovery_input: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.critical"></a>

```python
critical: str
```

- *Type:* str

---

##### `critical_recovery`<sup>Required</sup> <a name="critical_recovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.criticalRecovery"></a>

```python
critical_recovery: str
```

- *Type:* str

---

##### `ok`<sup>Required</sup> <a name="ok" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.ok"></a>

```python
ok: str
```

- *Type:* str

---

##### `unknown`<sup>Required</sup> <a name="unknown" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.unknown"></a>

```python
unknown: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `warning_recovery`<sup>Required</sup> <a name="warning_recovery" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.warningRecovery"></a>

```python
warning_recovery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: MonitorMonitorThresholds
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholds">MonitorMonitorThresholds</a>

---


### MonitorMonitorThresholdWindowsOutputReference <a name="MonitorMonitorThresholdWindowsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorMonitorThresholdWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow">reset_recovery_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow">reset_trigger_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recovery_window` <a name="reset_recovery_window" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetRecoveryWindow"></a>

```python
def reset_recovery_window() -> None
```

##### `reset_trigger_window` <a name="reset_trigger_window" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.resetTriggerWindow"></a>

```python
def reset_trigger_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput">recovery_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput">trigger_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow">recovery_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow">trigger_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recovery_window_input`<sup>Optional</sup> <a name="recovery_window_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindowInput"></a>

```python
recovery_window_input: str
```

- *Type:* str

---

##### `trigger_window_input`<sup>Optional</sup> <a name="trigger_window_input" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindowInput"></a>

```python
trigger_window_input: str
```

- *Type:* str

---

##### `recovery_window`<sup>Required</sup> <a name="recovery_window" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.recoveryWindow"></a>

```python
recovery_window: str
```

- *Type:* str

---

##### `trigger_window`<sup>Required</sup> <a name="trigger_window" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.triggerWindow"></a>

```python
trigger_window: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindowsOutputReference.property.internalValue"></a>

```python
internal_value: MonitorMonitorThresholdWindows
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorMonitorThresholdWindows">MonitorMonitorThresholdWindows</a>

---


### MonitorSchedulingOptionsCustomScheduleOutputReference <a name="MonitorSchedulingOptionsCustomScheduleOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptionsCustomScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence">put_recurrence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence"></a>

```python
def put_recurrence(
  rrule: str,
  timezone: str,
  start: str = None
) -> None
```

###### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence.parameter.rrule"></a>

- *Type:* str

Must be a valid `rrule`. See API docs for supported fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#rrule Monitor#rrule}

---

###### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence.parameter.timezone"></a>

- *Type:* str

'tz database' format. Example: `America/New_York` or `UTC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#timezone Monitor#timezone}

---

###### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.putRecurrence.parameter.start"></a>

- *Type:* str

Time to start recurrence cycle. Similar to DTSTART. Expected format 'YYYY-MM-DDThh:mm:ss'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#start Monitor#start}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrence"></a>

```python
recurrence: MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference">MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference</a>

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: MonitorSchedulingOptionsCustomScheduleRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference.property.internalValue"></a>

```python
internal_value: MonitorSchedulingOptionsCustomSchedule
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---


### MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference <a name="MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start` <a name="reset_start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput">rrule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rrule_input`<sup>Optional</sup> <a name="rrule_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rruleInput"></a>

```python
rrule_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: MonitorSchedulingOptionsCustomScheduleRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

---


### MonitorSchedulingOptionsEvaluationWindowOutputReference <a name="MonitorSchedulingOptionsEvaluationWindowOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts">reset_day_starts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts">reset_hour_starts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts">reset_month_starts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_starts` <a name="reset_day_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetDayStarts"></a>

```python
def reset_day_starts() -> None
```

##### `reset_hour_starts` <a name="reset_hour_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetHourStarts"></a>

```python
def reset_hour_starts() -> None
```

##### `reset_month_starts` <a name="reset_month_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.resetMonthStarts"></a>

```python
def reset_month_starts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput">day_starts_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput">hour_starts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput">month_starts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts">day_starts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts">hour_starts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts">month_starts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_starts_input`<sup>Optional</sup> <a name="day_starts_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStartsInput"></a>

```python
day_starts_input: str
```

- *Type:* str

---

##### `hour_starts_input`<sup>Optional</sup> <a name="hour_starts_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStartsInput"></a>

```python
hour_starts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_starts_input`<sup>Optional</sup> <a name="month_starts_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStartsInput"></a>

```python
month_starts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_starts`<sup>Required</sup> <a name="day_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.dayStarts"></a>

```python
day_starts: str
```

- *Type:* str

---

##### `hour_starts`<sup>Required</sup> <a name="hour_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.hourStarts"></a>

```python
hour_starts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_starts`<sup>Required</sup> <a name="month_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.monthStarts"></a>

```python
month_starts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference.property.internalValue"></a>

```python
internal_value: MonitorSchedulingOptionsEvaluationWindow
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---


### MonitorSchedulingOptionsOutputReference <a name="MonitorSchedulingOptionsOutputReference" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorSchedulingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule">put_custom_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow">put_evaluation_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule">reset_custom_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow">reset_evaluation_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_schedule` <a name="put_custom_schedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule"></a>

```python
def put_custom_schedule(
  recurrence: MonitorSchedulingOptionsCustomScheduleRecurrence
) -> None
```

###### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putCustomSchedule.parameter.recurrence"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleRecurrence">MonitorSchedulingOptionsCustomScheduleRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#recurrence Monitor#recurrence}

---

##### `put_evaluation_window` <a name="put_evaluation_window" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow"></a>

```python
def put_evaluation_window(
  day_starts: str = None,
  hour_starts: typing.Union[int, float] = None,
  month_starts: typing.Union[int, float] = None
) -> None
```

###### `day_starts`<sup>Optional</sup> <a name="day_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow.parameter.dayStarts"></a>

- *Type:* str

The time of the day at which a one day cumulative evaluation window starts.

Must be defined in UTC time in `HH:mm` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#day_starts Monitor#day_starts}

---

###### `hour_starts`<sup>Optional</sup> <a name="hour_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow.parameter.hourStarts"></a>

- *Type:* typing.Union[int, float]

The minute of the hour at which a one hour cumulative evaluation window starts.

Must be between 0 and 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#hour_starts Monitor#hour_starts}

---

###### `month_starts`<sup>Optional</sup> <a name="month_starts" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.putEvaluationWindow.parameter.monthStarts"></a>

- *Type:* typing.Union[int, float]

The day of the month at which a one month cumulative evaluation window starts.

Must be a value of 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#month_starts Monitor#month_starts}

---

##### `reset_custom_schedule` <a name="reset_custom_schedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetCustomSchedule"></a>

```python
def reset_custom_schedule() -> None
```

##### `reset_evaluation_window` <a name="reset_evaluation_window" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.resetEvaluationWindow"></a>

```python
def reset_evaluation_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule">custom_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow">evaluation_window</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput">custom_schedule_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput">evaluation_window_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_schedule`<sup>Required</sup> <a name="custom_schedule" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customSchedule"></a>

```python
custom_schedule: MonitorSchedulingOptionsCustomScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomScheduleOutputReference">MonitorSchedulingOptionsCustomScheduleOutputReference</a>

---

##### `evaluation_window`<sup>Required</sup> <a name="evaluation_window" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindow"></a>

```python
evaluation_window: MonitorSchedulingOptionsEvaluationWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindowOutputReference">MonitorSchedulingOptionsEvaluationWindowOutputReference</a>

---

##### `custom_schedule_input`<sup>Optional</sup> <a name="custom_schedule_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.customScheduleInput"></a>

```python
custom_schedule_input: MonitorSchedulingOptionsCustomSchedule
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsCustomSchedule">MonitorSchedulingOptionsCustomSchedule</a>

---

##### `evaluation_window_input`<sup>Optional</sup> <a name="evaluation_window_input" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.evaluationWindowInput"></a>

```python
evaluation_window_input: MonitorSchedulingOptionsEvaluationWindow
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsEvaluationWindow">MonitorSchedulingOptionsEvaluationWindow</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorSchedulingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: MonitorSchedulingOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorSchedulingOptions">MonitorSchedulingOptions</a>

---


### MonitorVariablesEventQueryComputeList <a name="MonitorVariablesEventQueryComputeList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryComputeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorVariablesEventQueryComputeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryCompute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]]

---


### MonitorVariablesEventQueryComputeOutputReference <a name="MonitorVariablesEventQueryComputeOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric">reset_metric</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorVariablesEventQueryCompute]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]

---


### MonitorVariablesEventQueryGroupByList <a name="MonitorVariablesEventQueryGroupByList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryGroupByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorVariablesEventQueryGroupByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryGroupBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]]

---


### MonitorVariablesEventQueryGroupByOutputReference <a name="MonitorVariablesEventQueryGroupByOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryGroupByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort">put_sort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort">reset_sort</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sort` <a name="put_sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort"></a>

```python
def put_sort(
  aggregation: str,
  metric: str = None,
  order: str = None
) -> None
```

###### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort.parameter.aggregation"></a>

- *Type:* str

The aggregation methods for the event platform queries.

Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#aggregation Monitor#aggregation}

---

###### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort.parameter.metric"></a>

- *Type:* str

The metric used for sorting group by results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#metric Monitor#metric}

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.putSort.parameter.order"></a>

- *Type:* str

Direction of sort. Valid values are `asc`, `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#order Monitor#order}

---

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_sort` <a name="reset_sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.resetSort"></a>

```python
def reset_sort() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort">sort</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput">facet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput">sort_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet">facet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sort"></a>

```python
sort: MonitorVariablesEventQueryGroupBySortOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference">MonitorVariablesEventQueryGroupBySortOutputReference</a>

---

##### `facet_input`<sup>Optional</sup> <a name="facet_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facetInput"></a>

```python
facet_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_input`<sup>Optional</sup> <a name="sort_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.sortInput"></a>

```python
sort_input: MonitorVariablesEventQueryGroupBySort
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.facet"></a>

```python
facet: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorVariablesEventQueryGroupBy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]

---


### MonitorVariablesEventQueryGroupBySortOutputReference <a name="MonitorVariablesEventQueryGroupBySortOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryGroupBySortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder">reset_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput">metric_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metricInput"></a>

```python
metric_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySortOutputReference.property.internalValue"></a>

```python
internal_value: MonitorVariablesEventQueryGroupBySort
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBySort">MonitorVariablesEventQueryGroupBySort</a>

---


### MonitorVariablesEventQueryList <a name="MonitorVariablesEventQueryList" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MonitorVariablesEventQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MonitorVariablesEventQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]

---


### MonitorVariablesEventQueryOutputReference <a name="MonitorVariablesEventQueryOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute">put_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy">put_group_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch">put_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes">reset_indexes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_compute` <a name="put_compute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute"></a>

```python
def put_compute(
  value: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryCompute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putCompute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]]

---

##### `put_group_by` <a name="put_group_by" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy"></a>

```python
def put_group_by(
  value: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryGroupBy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putGroupBy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]]

---

##### `put_search` <a name="put_search" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch"></a>

```python
def put_search(
  query: str
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.putSearch.parameter.query"></a>

- *Type:* str

The events search string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.39.0/docs/resources/monitor#query Monitor#query}

---

##### `reset_group_by` <a name="reset_group_by" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_indexes` <a name="reset_indexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.resetIndexes"></a>

```python
def reset_indexes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy">group_by</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search">search</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput">compute_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput">group_by_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput">indexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput">search_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes">indexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.compute"></a>

```python
compute: MonitorVariablesEventQueryComputeList
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryComputeList">MonitorVariablesEventQueryComputeList</a>

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupBy"></a>

```python
group_by: MonitorVariablesEventQueryGroupByList
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupByList">MonitorVariablesEventQueryGroupByList</a>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.search"></a>

```python
search: MonitorVariablesEventQuerySearchOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference">MonitorVariablesEventQuerySearchOutputReference</a>

---

##### `compute_input`<sup>Optional</sup> <a name="compute_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.computeInput"></a>

```python
compute_input: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryCompute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryCompute">MonitorVariablesEventQueryCompute</a>]]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.groupByInput"></a>

```python
group_by_input: typing.Union[IResolvable, typing.List[MonitorVariablesEventQueryGroupBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryGroupBy">MonitorVariablesEventQueryGroupBy</a>]]

---

##### `indexes_input`<sup>Optional</sup> <a name="indexes_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexesInput"></a>

```python
indexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.searchInput"></a>

```python
search_input: MonitorVariablesEventQuerySearch
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `indexes`<sup>Required</sup> <a name="indexes" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.indexes"></a>

```python
indexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MonitorVariablesEventQuery]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]

---


### MonitorVariablesEventQuerySearchOutputReference <a name="MonitorVariablesEventQuerySearchOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesEventQuerySearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearchOutputReference.property.internalValue"></a>

```python
internal_value: MonitorVariablesEventQuerySearch
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuerySearch">MonitorVariablesEventQuerySearch</a>

---


### MonitorVariablesOutputReference <a name="MonitorVariablesOutputReference" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor

monitor.MonitorVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery">put_event_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery">reset_event_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event_query` <a name="put_event_query" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery"></a>

```python
def put_event_query(
  value: typing.Union[IResolvable, typing.List[MonitorVariablesEventQuery]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.putEventQuery.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]

---

##### `reset_event_query` <a name="reset_event_query" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.resetEventQuery"></a>

```python
def reset_event_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery">event_query</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput">event_query_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_query`<sup>Required</sup> <a name="event_query" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQuery"></a>

```python
event_query: MonitorVariablesEventQueryList
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQueryList">MonitorVariablesEventQueryList</a>

---

##### `event_query_input`<sup>Optional</sup> <a name="event_query_input" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.eventQueryInput"></a>

```python
event_query_input: typing.Union[IResolvable, typing.List[MonitorVariablesEventQuery]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.monitor.MonitorVariablesEventQuery">MonitorVariablesEventQuery</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitor.MonitorVariablesOutputReference.property.internalValue"></a>

```python
internal_value: MonitorVariables
```

- *Type:* <a href="#@cdktf/provider-datadog.monitor.MonitorVariables">MonitorVariables</a>

---



