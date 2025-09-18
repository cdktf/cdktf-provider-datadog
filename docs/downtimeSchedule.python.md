# `downtimeSchedule` Submodule <a name="`downtimeSchedule` Submodule" id="@cdktf/provider-datadog.downtimeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DowntimeSchedule <a name="DowntimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule datadog_downtime_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: str,
  display_timezone: str = None,
  message: str = None,
  monitor_identifier: DowntimeScheduleMonitorIdentifier = None,
  mute_first_recovery_notification: typing.Union[bool, IResolvable] = None,
  notify_end_states: typing.List[str] = None,
  notify_end_types: typing.List[str] = None,
  one_time_schedule: DowntimeScheduleOneTimeSchedule = None,
  recurring_schedule: DowntimeScheduleRecurringSchedule = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/). |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.displayTimezone">display_timezone</a></code> | <code>str</code> | The timezone in which to display the downtime's start and end times in Datadog applications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.message">message</a></code> | <code>str</code> | A message to include with notifications for this downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.monitorIdentifier">monitor_identifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a></code> | monitor_identifier block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.muteFirstRecoveryNotification">mute_first_recovery_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the first recovery notification during a downtime should be muted. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndStates">notify_end_states</a></code> | <code>typing.List[str]</code> | States that will trigger a monitor notification when the `notify_end_types` action occurs. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndTypes">notify_end_types</a></code> | <code>typing.List[str]</code> | Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.oneTimeSchedule">one_time_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.recurringSchedule">recurring_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a></code> | recurring_schedule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.scope"></a>

- *Type:* str

The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#scope DowntimeSchedule#scope}

---

##### `display_timezone`<sup>Optional</sup> <a name="display_timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.displayTimezone"></a>

- *Type:* str

The timezone in which to display the downtime's start and end times in Datadog applications.

This is not used as an offset for scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#display_timezone DowntimeSchedule#display_timezone}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.message"></a>

- *Type:* str

A message to include with notifications for this downtime.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#message DowntimeSchedule#message}

---

##### `monitor_identifier`<sup>Optional</sup> <a name="monitor_identifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.monitorIdentifier"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

monitor_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#monitor_identifier DowntimeSchedule#monitor_identifier}

---

##### `mute_first_recovery_notification`<sup>Optional</sup> <a name="mute_first_recovery_notification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.muteFirstRecoveryNotification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the first recovery notification during a downtime should be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#mute_first_recovery_notification DowntimeSchedule#mute_first_recovery_notification}

---

##### `notify_end_states`<sup>Optional</sup> <a name="notify_end_states" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndStates"></a>

- *Type:* typing.List[str]

States that will trigger a monitor notification when the `notify_end_types` action occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#notify_end_states DowntimeSchedule#notify_end_states}

---

##### `notify_end_types`<sup>Optional</sup> <a name="notify_end_types" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.notifyEndTypes"></a>

- *Type:* typing.List[str]

Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#notify_end_types DowntimeSchedule#notify_end_types}

---

##### `one_time_schedule`<sup>Optional</sup> <a name="one_time_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.oneTimeSchedule"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#one_time_schedule DowntimeSchedule#one_time_schedule}

---

##### `recurring_schedule`<sup>Optional</sup> <a name="recurring_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.Initializer.parameter.recurringSchedule"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#recurring_schedule DowntimeSchedule#recurring_schedule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier">put_monitor_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule">put_one_time_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule">put_recurring_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetDisplayTimezone">reset_display_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMonitorIdentifier">reset_monitor_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMuteFirstRecoveryNotification">reset_mute_first_recovery_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndStates">reset_notify_end_states</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndTypes">reset_notify_end_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOneTimeSchedule">reset_one_time_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetRecurringSchedule">reset_recurring_schedule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_monitor_identifier` <a name="put_monitor_identifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier"></a>

```python
def put_monitor_identifier(
  monitor_id: typing.Union[int, float] = None,
  monitor_tags: typing.List[str] = None
) -> None
```

###### `monitor_id`<sup>Optional</sup> <a name="monitor_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier.parameter.monitorId"></a>

- *Type:* typing.Union[int, float]

ID of the monitor to prevent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#monitor_id DowntimeSchedule#monitor_id}

---

###### `monitor_tags`<sup>Optional</sup> <a name="monitor_tags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putMonitorIdentifier.parameter.monitorTags"></a>

- *Type:* typing.List[str]

A list of monitor tags.

For example, tags that are applied directly to monitors, not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies. The resulting downtime applies to monitors that match **all** provided monitor tags. Setting `monitor_tags` to `[*]` configures the downtime to mute all monitors for the given scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#monitor_tags DowntimeSchedule#monitor_tags}

---

##### `put_one_time_schedule` <a name="put_one_time_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule"></a>

```python
def put_one_time_schedule(
  end: str = None,
  start: str = None
) -> None
```

###### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule.parameter.end"></a>

- *Type:* str

ISO-8601 Datetime to end the downtime.

Must include a UTC offset of zero. If not provided, the downtime never ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#end DowntimeSchedule#end}

---

###### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putOneTimeSchedule.parameter.start"></a>

- *Type:* str

ISO-8601 Datetime to start the downtime.

Must include a UTC offset of zero. If not provided, the downtime starts the moment it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#start DowntimeSchedule#start}

---

##### `put_recurring_schedule` <a name="put_recurring_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule"></a>

```python
def put_recurring_schedule(
  recurrence: typing.Union[IResolvable, typing.List[DowntimeScheduleRecurringScheduleRecurrence]] = None,
  timezone: str = None
) -> None
```

###### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule.parameter.recurrence"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#recurrence DowntimeSchedule#recurrence}

---

###### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.putRecurringSchedule.parameter.timezone"></a>

- *Type:* str

The timezone in which to schedule the downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#timezone DowntimeSchedule#timezone}

---

##### `reset_display_timezone` <a name="reset_display_timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetDisplayTimezone"></a>

```python
def reset_display_timezone() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_monitor_identifier` <a name="reset_monitor_identifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMonitorIdentifier"></a>

```python
def reset_monitor_identifier() -> None
```

##### `reset_mute_first_recovery_notification` <a name="reset_mute_first_recovery_notification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetMuteFirstRecoveryNotification"></a>

```python
def reset_mute_first_recovery_notification() -> None
```

##### `reset_notify_end_states` <a name="reset_notify_end_states" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndStates"></a>

```python
def reset_notify_end_states() -> None
```

##### `reset_notify_end_types` <a name="reset_notify_end_types" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetNotifyEndTypes"></a>

```python
def reset_notify_end_types() -> None
```

##### `reset_one_time_schedule` <a name="reset_one_time_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetOneTimeSchedule"></a>

```python
def reset_one_time_schedule() -> None
```

##### `reset_recurring_schedule` <a name="reset_recurring_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.resetRecurringSchedule"></a>

```python
def reset_recurring_schedule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DowntimeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DowntimeSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DowntimeSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DowntimeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DowntimeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifier">monitor_identifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference">DowntimeScheduleMonitorIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeSchedule">one_time_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference">DowntimeScheduleOneTimeScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringSchedule">recurring_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference">DowntimeScheduleRecurringScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezoneInput">display_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifierInput">monitor_identifier_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotificationInput">mute_first_recovery_notification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStatesInput">notify_end_states_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypesInput">notify_end_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeScheduleInput">one_time_schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringScheduleInput">recurring_schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezone">display_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotification">mute_first_recovery_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStates">notify_end_states</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypes">notify_end_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitor_identifier`<sup>Required</sup> <a name="monitor_identifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifier"></a>

```python
monitor_identifier: DowntimeScheduleMonitorIdentifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference">DowntimeScheduleMonitorIdentifierOutputReference</a>

---

##### `one_time_schedule`<sup>Required</sup> <a name="one_time_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeSchedule"></a>

```python
one_time_schedule: DowntimeScheduleOneTimeScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference">DowntimeScheduleOneTimeScheduleOutputReference</a>

---

##### `recurring_schedule`<sup>Required</sup> <a name="recurring_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringSchedule"></a>

```python
recurring_schedule: DowntimeScheduleRecurringScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference">DowntimeScheduleRecurringScheduleOutputReference</a>

---

##### `display_timezone_input`<sup>Optional</sup> <a name="display_timezone_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezoneInput"></a>

```python
display_timezone_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `monitor_identifier_input`<sup>Optional</sup> <a name="monitor_identifier_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.monitorIdentifierInput"></a>

```python
monitor_identifier_input: typing.Union[IResolvable, DowntimeScheduleMonitorIdentifier]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>]

---

##### `mute_first_recovery_notification_input`<sup>Optional</sup> <a name="mute_first_recovery_notification_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotificationInput"></a>

```python
mute_first_recovery_notification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_end_states_input`<sup>Optional</sup> <a name="notify_end_states_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStatesInput"></a>

```python
notify_end_states_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notify_end_types_input`<sup>Optional</sup> <a name="notify_end_types_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypesInput"></a>

```python
notify_end_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `one_time_schedule_input`<sup>Optional</sup> <a name="one_time_schedule_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.oneTimeScheduleInput"></a>

```python
one_time_schedule_input: typing.Union[IResolvable, DowntimeScheduleOneTimeSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>]

---

##### `recurring_schedule_input`<sup>Optional</sup> <a name="recurring_schedule_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.recurringScheduleInput"></a>

```python
recurring_schedule_input: typing.Union[IResolvable, DowntimeScheduleRecurringSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `display_timezone`<sup>Required</sup> <a name="display_timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.displayTimezone"></a>

```python
display_timezone: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `mute_first_recovery_notification`<sup>Required</sup> <a name="mute_first_recovery_notification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.muteFirstRecoveryNotification"></a>

```python
mute_first_recovery_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `notify_end_states`<sup>Required</sup> <a name="notify_end_states" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndStates"></a>

```python
notify_end_states: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notify_end_types`<sup>Required</sup> <a name="notify_end_types" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.notifyEndTypes"></a>

```python
notify_end_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeScheduleConfig <a name="DowntimeScheduleConfig" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: str,
  display_timezone: str = None,
  message: str = None,
  monitor_identifier: DowntimeScheduleMonitorIdentifier = None,
  mute_first_recovery_notification: typing.Union[bool, IResolvable] = None,
  notify_end_states: typing.List[str] = None,
  notify_end_types: typing.List[str] = None,
  one_time_schedule: DowntimeScheduleOneTimeSchedule = None,
  recurring_schedule: DowntimeScheduleRecurringSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.scope">scope</a></code> | <code>str</code> | The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/). |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.displayTimezone">display_timezone</a></code> | <code>str</code> | The timezone in which to display the downtime's start and end times in Datadog applications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.message">message</a></code> | <code>str</code> | A message to include with notifications for this downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.monitorIdentifier">monitor_identifier</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a></code> | monitor_identifier block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.muteFirstRecoveryNotification">mute_first_recovery_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the first recovery notification during a downtime should be muted. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndStates">notify_end_states</a></code> | <code>typing.List[str]</code> | States that will trigger a monitor notification when the `notify_end_types` action occurs. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndTypes">notify_end_types</a></code> | <code>typing.List[str]</code> | Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.oneTimeSchedule">one_time_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a></code> | one_time_schedule block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.recurringSchedule">recurring_schedule</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a></code> | recurring_schedule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope to which the downtime applies. Must follow the [common search syntax](https://docs.datadoghq.com/logs/explorer/search_syntax/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#scope DowntimeSchedule#scope}

---

##### `display_timezone`<sup>Optional</sup> <a name="display_timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.displayTimezone"></a>

```python
display_timezone: str
```

- *Type:* str

The timezone in which to display the downtime's start and end times in Datadog applications.

This is not used as an offset for scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#display_timezone DowntimeSchedule#display_timezone}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.message"></a>

```python
message: str
```

- *Type:* str

A message to include with notifications for this downtime.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#message DowntimeSchedule#message}

---

##### `monitor_identifier`<sup>Optional</sup> <a name="monitor_identifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.monitorIdentifier"></a>

```python
monitor_identifier: DowntimeScheduleMonitorIdentifier
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>

monitor_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#monitor_identifier DowntimeSchedule#monitor_identifier}

---

##### `mute_first_recovery_notification`<sup>Optional</sup> <a name="mute_first_recovery_notification" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.muteFirstRecoveryNotification"></a>

```python
mute_first_recovery_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the first recovery notification during a downtime should be muted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#mute_first_recovery_notification DowntimeSchedule#mute_first_recovery_notification}

---

##### `notify_end_states`<sup>Optional</sup> <a name="notify_end_states" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndStates"></a>

```python
notify_end_states: typing.List[str]
```

- *Type:* typing.List[str]

States that will trigger a monitor notification when the `notify_end_types` action occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#notify_end_states DowntimeSchedule#notify_end_states}

---

##### `notify_end_types`<sup>Optional</sup> <a name="notify_end_types" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.notifyEndTypes"></a>

```python
notify_end_types: typing.List[str]
```

- *Type:* typing.List[str]

Actions that will trigger a monitor notification if the downtime is in the `notify_end_types` state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#notify_end_types DowntimeSchedule#notify_end_types}

---

##### `one_time_schedule`<sup>Optional</sup> <a name="one_time_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.oneTimeSchedule"></a>

```python
one_time_schedule: DowntimeScheduleOneTimeSchedule
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>

one_time_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#one_time_schedule DowntimeSchedule#one_time_schedule}

---

##### `recurring_schedule`<sup>Optional</sup> <a name="recurring_schedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleConfig.property.recurringSchedule"></a>

```python
recurring_schedule: DowntimeScheduleRecurringSchedule
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>

recurring_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#recurring_schedule DowntimeSchedule#recurring_schedule}

---

### DowntimeScheduleMonitorIdentifier <a name="DowntimeScheduleMonitorIdentifier" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleMonitorIdentifier(
  monitor_id: typing.Union[int, float] = None,
  monitor_tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorId">monitor_id</a></code> | <code>typing.Union[int, float]</code> | ID of the monitor to prevent notifications. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorTags">monitor_tags</a></code> | <code>typing.List[str]</code> | A list of monitor tags. |

---

##### `monitor_id`<sup>Optional</sup> <a name="monitor_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorId"></a>

```python
monitor_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ID of the monitor to prevent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#monitor_id DowntimeSchedule#monitor_id}

---

##### `monitor_tags`<sup>Optional</sup> <a name="monitor_tags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier.property.monitorTags"></a>

```python
monitor_tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of monitor tags.

For example, tags that are applied directly to monitors, not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies. The resulting downtime applies to monitors that match **all** provided monitor tags. Setting `monitor_tags` to `[*]` configures the downtime to mute all monitors for the given scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#monitor_tags DowntimeSchedule#monitor_tags}

---

### DowntimeScheduleOneTimeSchedule <a name="DowntimeScheduleOneTimeSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleOneTimeSchedule(
  end: str = None,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.end">end</a></code> | <code>str</code> | ISO-8601 Datetime to end the downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.start">start</a></code> | <code>str</code> | ISO-8601 Datetime to start the downtime. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.end"></a>

```python
end: str
```

- *Type:* str

ISO-8601 Datetime to end the downtime.

Must include a UTC offset of zero. If not provided, the downtime never ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#end DowntimeSchedule#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule.property.start"></a>

```python
start: str
```

- *Type:* str

ISO-8601 Datetime to start the downtime.

Must include a UTC offset of zero. If not provided, the downtime starts the moment it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#start DowntimeSchedule#start}

---

### DowntimeScheduleRecurringSchedule <a name="DowntimeScheduleRecurringSchedule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleRecurringSchedule(
  recurrence: typing.Union[IResolvable, typing.List[DowntimeScheduleRecurringScheduleRecurrence]] = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.recurrence">recurrence</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]</code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.timezone">timezone</a></code> | <code>str</code> | The timezone in which to schedule the downtime. |

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.recurrence"></a>

```python
recurrence: typing.Union[IResolvable, typing.List[DowntimeScheduleRecurringScheduleRecurrence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#recurrence DowntimeSchedule#recurrence}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The timezone in which to schedule the downtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#timezone DowntimeSchedule#timezone}

---

### DowntimeScheduleRecurringScheduleRecurrence <a name="DowntimeScheduleRecurringScheduleRecurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence(
  duration: str,
  rrule: str,
  start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.duration">duration</a></code> | <code>str</code> | The length of the downtime. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.rrule">rrule</a></code> | <code>str</code> | The `RRULE` standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.start">start</a></code> | <code>str</code> | ISO-8601 Datetime to start the downtime. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.duration"></a>

```python
duration: str
```

- *Type:* str

The length of the downtime.

Must begin with an integer and end with one of 'm', 'h', d', or 'w'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#duration DowntimeSchedule#duration}

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

The `RRULE` standard for defining recurring events.

For example, to have a recurring event on the first day of each month, set the type to `rrule` and set the `FREQ` to `MONTHLY` and `BYMONTHDAY` to `1`. Most common `rrule` options from the [iCalendar Spec](https://tools.ietf.org/html/rfc5545) are supported.  **Note**: Attributes specifying the duration in `RRULE` are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). More examples available in this [downtime guide](https://docs.datadoghq.com/monitors/guide/suppress-alert-with-downtimes/?tab=api).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#rrule DowntimeSchedule#rrule}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence.property.start"></a>

```python
start: str
```

- *Type:* str

ISO-8601 Datetime to start the downtime.

Must not include a UTC offset. If not provided, the downtime starts the moment it is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.74.0/docs/resources/downtime_schedule#start DowntimeSchedule#start}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeScheduleMonitorIdentifierOutputReference <a name="DowntimeScheduleMonitorIdentifierOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorId">reset_monitor_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorTags">reset_monitor_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_monitor_id` <a name="reset_monitor_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorId"></a>

```python
def reset_monitor_id() -> None
```

##### `reset_monitor_tags` <a name="reset_monitor_tags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.resetMonitorTags"></a>

```python
def reset_monitor_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorIdInput">monitor_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTagsInput">monitor_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorId">monitor_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTags">monitor_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monitor_id_input`<sup>Optional</sup> <a name="monitor_id_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorIdInput"></a>

```python
monitor_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_tags_input`<sup>Optional</sup> <a name="monitor_tags_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTagsInput"></a>

```python
monitor_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorId"></a>

```python
monitor_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_tags`<sup>Required</sup> <a name="monitor_tags" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.monitorTags"></a>

```python
monitor_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DowntimeScheduleMonitorIdentifier]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleMonitorIdentifier">DowntimeScheduleMonitorIdentifier</a>]

---


### DowntimeScheduleOneTimeScheduleOutputReference <a name="DowntimeScheduleOneTimeScheduleOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end` <a name="reset_end" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DowntimeScheduleOneTimeSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleOneTimeSchedule">DowntimeScheduleOneTimeSchedule</a>]

---


### DowntimeScheduleRecurringScheduleOutputReference <a name="DowntimeScheduleRecurringScheduleOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetRecurrence">reset_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence"></a>

```python
def put_recurrence(
  value: typing.Union[IResolvable, typing.List[DowntimeScheduleRecurringScheduleRecurrence]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.putRecurrence.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]

---

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList">DowntimeScheduleRecurringScheduleRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrenceInput">recurrence_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrence"></a>

```python
recurrence: DowntimeScheduleRecurringScheduleRecurrenceList
```

- *Type:* <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList">DowntimeScheduleRecurringScheduleRecurrenceList</a>

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.recurrenceInput"></a>

```python
recurrence_input: typing.Union[IResolvable, typing.List[DowntimeScheduleRecurringScheduleRecurrence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DowntimeScheduleRecurringSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringSchedule">DowntimeScheduleRecurringSchedule</a>]

---


### DowntimeScheduleRecurringScheduleRecurrenceList <a name="DowntimeScheduleRecurringScheduleRecurrenceList" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DowntimeScheduleRecurringScheduleRecurrenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DowntimeScheduleRecurringScheduleRecurrence]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]]

---


### DowntimeScheduleRecurringScheduleRecurrenceOutputReference <a name="DowntimeScheduleRecurringScheduleRecurrenceOutputReference" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime_schedule

downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resetStart">reset_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_start` <a name="reset_start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.resetStart"></a>

```python
def reset_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rruleInput">rrule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `rrule_input`<sup>Optional</sup> <a name="rrule_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rruleInput"></a>

```python
rrule_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DowntimeScheduleRecurringScheduleRecurrence]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.downtimeSchedule.DowntimeScheduleRecurringScheduleRecurrence">DowntimeScheduleRecurringScheduleRecurrence</a>]

---



