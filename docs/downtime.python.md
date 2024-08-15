# `downtime` Submodule <a name="`downtime` Submodule" id="@cdktf/provider-datadog.downtime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Downtime <a name="Downtime" id="@cdktf/provider-datadog.downtime.Downtime"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime datadog_downtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.Downtime.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.Downtime(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: typing.List[str],
  end: typing.Union[int, float] = None,
  end_date: str = None,
  id: str = None,
  message: str = None,
  monitor_id: typing.Union[int, float] = None,
  monitor_tags: typing.List[str] = None,
  mute_first_recovery_notification: typing.Union[bool, IResolvable] = None,
  recurrence: DowntimeRecurrence = None,
  start: typing.Union[int, float] = None,
  start_date: str = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope">scope</a></code> | <code>typing.List[str]</code> | specify the group scope to which this downtime applies. For everything use '*'. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.end">end</a></code> | <code>typing.Union[int, float]</code> | Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.endDate">end_date</a></code> | <code>str</code> | String representing date and time to end the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#id Downtime#id}. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.message">message</a></code> | <code>str</code> | An optional message to provide when creating the downtime, can include notification handles. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorId">monitor_id</a></code> | <code>typing.Union[int, float]</code> | When specified, this downtime will only apply to this monitor. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorTags">monitor_tags</a></code> | <code>typing.List[str]</code> | A list of monitor tags (up to 32) to base the scheduled downtime on. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.muteFirstRecoveryNotification">mute_first_recovery_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true the first recovery notification during the downtime will be muted Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.start">start</a></code> | <code>typing.Union[int, float]</code> | Specify when this downtime should start. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.startDate">start_date</a></code> | <code>str</code> | String representing date and time to start the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.scope"></a>

- *Type:* typing.List[str]

specify the group scope to which this downtime applies. For everything use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#scope Downtime#scope}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.end"></a>

- *Type:* typing.Union[int, float]

Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#end Downtime#end}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.endDate"></a>

- *Type:* str

String representing date and time to end the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#end_date Downtime#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#id Downtime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.message"></a>

- *Type:* str

An optional message to provide when creating the downtime, can include notification handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#message Downtime#message}

---

##### `monitor_id`<sup>Optional</sup> <a name="monitor_id" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorId"></a>

- *Type:* typing.Union[int, float]

When specified, this downtime will only apply to this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#monitor_id Downtime#monitor_id}

---

##### `monitor_tags`<sup>Optional</sup> <a name="monitor_tags" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.monitorTags"></a>

- *Type:* typing.List[str]

A list of monitor tags (up to 32) to base the scheduled downtime on.

Only monitors that have all selected tags are silenced

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}

---

##### `mute_first_recovery_notification`<sup>Optional</sup> <a name="mute_first_recovery_notification" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.muteFirstRecoveryNotification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true the first recovery notification during the downtime will be muted Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.recurrence"></a>

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#recurrence Downtime#recurrence}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.start"></a>

- *Type:* typing.Union[int, float]

Specify when this downtime should start. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#start Downtime#start}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.startDate"></a>

- *Type:* str

String representing date and time to start the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#start_date Downtime#start_date}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.Downtime.Initializer.parameter.timezone"></a>

- *Type:* str

The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#timezone Downtime#timezone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.putRecurrence">put_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorId">reset_monitor_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags">reset_monitor_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification">reset_mute_first_recovery_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetRecurrence">reset_recurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStart">reset_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetStartDate">reset_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtime.Downtime.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.downtime.Downtime.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.downtime.Downtime.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.downtime.Downtime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.downtime.Downtime.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.downtime.Downtime.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.downtime.Downtime.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.downtime.Downtime.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.downtime.Downtime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.downtime.Downtime.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.downtime.Downtime.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.Downtime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.downtime.Downtime.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.downtime.Downtime.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.downtime.Downtime.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.downtime.Downtime.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recurrence` <a name="put_recurrence" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence"></a>

```python
def put_recurrence(
  type: str,
  period: typing.Union[int, float] = None,
  rrule: str = None,
  until_date: typing.Union[int, float] = None,
  until_occurrences: typing.Union[int, float] = None,
  week_days: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.type"></a>

- *Type:* str

One of `days`, `weeks`, `months`, `years`, or `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#type Downtime#type}

---

###### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.period"></a>

- *Type:* typing.Union[int, float]

How often to repeat as an integer.

For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#period Downtime#period}

---

###### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.rrule"></a>

- *Type:* str

The RRULE standard for defining recurring events.

For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). Only applicable when `type` is `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#rrule Downtime#rrule}

---

###### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.untilDate"></a>

- *Type:* typing.Union[int, float]

The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#until_date Downtime#until_date}

---

###### `until_occurrences`<sup>Optional</sup> <a name="until_occurrences" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.untilOccurrences"></a>

- *Type:* typing.Union[int, float]

How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#until_occurrences Downtime#until_occurrences}

---

###### `week_days`<sup>Optional</sup> <a name="week_days" id="@cdktf/provider-datadog.downtime.Downtime.putRecurrence.parameter.weekDays"></a>

- *Type:* typing.List[str]

A list of week days to repeat on.

Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#week_days Downtime#week_days}

---

##### `reset_end` <a name="reset_end" id="@cdktf/provider-datadog.downtime.Downtime.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-datadog.downtime.Downtime.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.downtime.Downtime.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_message` <a name="reset_message" id="@cdktf/provider-datadog.downtime.Downtime.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_monitor_id` <a name="reset_monitor_id" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorId"></a>

```python
def reset_monitor_id() -> None
```

##### `reset_monitor_tags` <a name="reset_monitor_tags" id="@cdktf/provider-datadog.downtime.Downtime.resetMonitorTags"></a>

```python
def reset_monitor_tags() -> None
```

##### `reset_mute_first_recovery_notification` <a name="reset_mute_first_recovery_notification" id="@cdktf/provider-datadog.downtime.Downtime.resetMuteFirstRecoveryNotification"></a>

```python
def reset_mute_first_recovery_notification() -> None
```

##### `reset_recurrence` <a name="reset_recurrence" id="@cdktf/provider-datadog.downtime.Downtime.resetRecurrence"></a>

```python
def reset_recurrence() -> None
```

##### `reset_start` <a name="reset_start" id="@cdktf/provider-datadog.downtime.Downtime.resetStart"></a>

```python
def reset_start() -> None
```

##### `reset_start_date` <a name="reset_start_date" id="@cdktf/provider-datadog.downtime.Downtime.resetStartDate"></a>

```python
def reset_start_date() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-datadog.downtime.Downtime.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.Downtime.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.Downtime.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.Downtime.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.downtime.Downtime.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.Downtime.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Downtime resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Downtime to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Downtime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Downtime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.activeChildId">active_child_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput">monitor_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput">monitor_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput">mute_first_recovery_notification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput">recurrence_input</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scopeInput">scope_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDateInput">start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorId">monitor_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.monitorTags">monitor_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification">mute_first_recovery_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.scope">scope</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.downtime.Downtime.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.downtime.Downtime.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtime.Downtime.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.downtime.Downtime.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.downtime.Downtime.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.Downtime.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.Downtime.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.downtime.Downtime.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.downtime.Downtime.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.Downtime.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.Downtime.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.Downtime.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-datadog.downtime.Downtime.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `active_child_id`<sup>Required</sup> <a name="active_child_id" id="@cdktf/provider-datadog.downtime.Downtime.property.activeChildId"></a>

```python
active_child_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-datadog.downtime.Downtime.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrence"></a>

```python
recurrence: DowntimeRecurrenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference">DowntimeRecurrenceOutputReference</a>

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-datadog.downtime.Downtime.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-datadog.downtime.Downtime.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.downtime.Downtime.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="@cdktf/provider-datadog.downtime.Downtime.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `monitor_id_input`<sup>Optional</sup> <a name="monitor_id_input" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorIdInput"></a>

```python
monitor_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_tags_input`<sup>Optional</sup> <a name="monitor_tags_input" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTagsInput"></a>

```python
monitor_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mute_first_recovery_notification_input`<sup>Optional</sup> <a name="mute_first_recovery_notification_input" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotificationInput"></a>

```python
mute_first_recovery_notification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recurrence_input`<sup>Optional</sup> <a name="recurrence_input" id="@cdktf/provider-datadog.downtime.Downtime.property.recurrenceInput"></a>

```python
recurrence_input: DowntimeRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-datadog.downtime.Downtime.property.scopeInput"></a>

```python
scope_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-datadog.downtime.Downtime.property.startDateInput"></a>

```python
start_date_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-datadog.downtime.Downtime.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-datadog.downtime.Downtime.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-datadog.downtime.Downtime.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-datadog.downtime.Downtime.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.downtime.Downtime.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-datadog.downtime.Downtime.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `monitor_id`<sup>Required</sup> <a name="monitor_id" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorId"></a>

```python
monitor_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitor_tags`<sup>Required</sup> <a name="monitor_tags" id="@cdktf/provider-datadog.downtime.Downtime.property.monitorTags"></a>

```python
monitor_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mute_first_recovery_notification`<sup>Required</sup> <a name="mute_first_recovery_notification" id="@cdktf/provider-datadog.downtime.Downtime.property.muteFirstRecoveryNotification"></a>

```python
mute_first_recovery_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.Downtime.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.downtime.Downtime.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-datadog.downtime.Downtime.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.Downtime.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.downtime.Downtime.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DowntimeConfig <a name="DowntimeConfig" id="@cdktf/provider-datadog.downtime.DowntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.DowntimeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scope: typing.List[str],
  end: typing.Union[int, float] = None,
  end_date: str = None,
  id: str = None,
  message: str = None,
  monitor_id: typing.Union[int, float] = None,
  monitor_tags: typing.List[str] = None,
  mute_first_recovery_notification: typing.Union[bool, IResolvable] = None,
  recurrence: DowntimeRecurrence = None,
  start: typing.Union[int, float] = None,
  start_date: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope">scope</a></code> | <code>typing.List[str]</code> | specify the group scope to which this downtime applies. For everything use '*'. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.end">end</a></code> | <code>typing.Union[int, float]</code> | Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate">end_date</a></code> | <code>str</code> | String representing date and time to end the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#id Downtime#id}. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.message">message</a></code> | <code>str</code> | An optional message to provide when creating the downtime, can include notification handles. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId">monitor_id</a></code> | <code>typing.Union[int, float]</code> | When specified, this downtime will only apply to this monitor. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags">monitor_tags</a></code> | <code>typing.List[str]</code> | A list of monitor tags (up to 32) to base the scheduled downtime on. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification">mute_first_recovery_notification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true the first recovery notification during the downtime will be muted Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence">recurrence</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | recurrence block. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Specify when this downtime should start. Accepts a Unix timestamp in UTC. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate">start_date</a></code> | <code>str</code> | String representing date and time to start the downtime in RFC3339 format. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone">timezone</a></code> | <code>str</code> | The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.scope"></a>

```python
scope: typing.List[str]
```

- *Type:* typing.List[str]

specify the group scope to which this downtime applies. For everything use '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#scope Downtime#scope}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optionally specify an end date when this downtime should expire. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#end Downtime#end}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

String representing date and time to end the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#end_date Downtime#end_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#id Downtime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.message"></a>

```python
message: str
```

- *Type:* str

An optional message to provide when creating the downtime, can include notification handles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#message Downtime#message}

---

##### `monitor_id`<sup>Optional</sup> <a name="monitor_id" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorId"></a>

```python
monitor_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When specified, this downtime will only apply to this monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#monitor_id Downtime#monitor_id}

---

##### `monitor_tags`<sup>Optional</sup> <a name="monitor_tags" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.monitorTags"></a>

```python
monitor_tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of monitor tags (up to 32) to base the scheduled downtime on.

Only monitors that have all selected tags are silenced

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#monitor_tags Downtime#monitor_tags}

---

##### `mute_first_recovery_notification`<sup>Optional</sup> <a name="mute_first_recovery_notification" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.muteFirstRecoveryNotification"></a>

```python
mute_first_recovery_notification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true the first recovery notification during the downtime will be muted Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#mute_first_recovery_notification Downtime#mute_first_recovery_notification}

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.recurrence"></a>

```python
recurrence: DowntimeRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#recurrence Downtime#recurrence}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specify when this downtime should start. Accepts a Unix timestamp in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#start Downtime#start}

---

##### `start_date`<sup>Optional</sup> <a name="start_date" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

String representing date and time to start the downtime in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#start_date Downtime#start_date}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.downtime.DowntimeConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The timezone for the downtime. Follows IANA timezone database identifiers. Defaults to `"UTC"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#timezone Downtime#timezone}

---

### DowntimeRecurrence <a name="DowntimeRecurrence" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.DowntimeRecurrence(
  type: str,
  period: typing.Union[int, float] = None,
  rrule: str = None,
  until_date: typing.Union[int, float] = None,
  until_occurrences: typing.Union[int, float] = None,
  week_days: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type">type</a></code> | <code>str</code> | One of `days`, `weeks`, `months`, `years`, or `rrule`. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period">period</a></code> | <code>typing.Union[int, float]</code> | How often to repeat as an integer. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule">rrule</a></code> | <code>str</code> | The RRULE standard for defining recurring events. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate">until_date</a></code> | <code>typing.Union[int, float]</code> | The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences">until_occurrences</a></code> | <code>typing.Union[int, float]</code> | How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays">week_days</a></code> | <code>typing.List[str]</code> | A list of week days to repeat on. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.type"></a>

```python
type: str
```

- *Type:* str

One of `days`, `weeks`, `months`, `years`, or `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#type Downtime#type}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often to repeat as an integer.

For example to repeat every 3 days, select a `type` of `days` and a `period` of `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#period Downtime#period}

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

The RRULE standard for defining recurring events.

For example, to have a recurring event on the first day of each month, use `FREQ=MONTHLY;INTERVAL=1`. Most common rrule options from the iCalendar Spec are supported. Attributes specifying the duration in RRULE are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). Only applicable when `type` is `rrule`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#rrule Downtime#rrule}

---

##### `until_date`<sup>Optional</sup> <a name="until_date" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilDate"></a>

```python
until_date: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The date at which the recurrence should end as a POSIX timestamp. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#until_date Downtime#until_date}

---

##### `until_occurrences`<sup>Optional</sup> <a name="until_occurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.untilOccurrences"></a>

```python
until_occurrences: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How many times the downtime will be rescheduled. `until_occurrences` and `until_date` are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#until_occurrences Downtime#until_occurrences}

---

##### `week_days`<sup>Optional</sup> <a name="week_days" id="@cdktf/provider-datadog.downtime.DowntimeRecurrence.property.weekDays"></a>

```python
week_days: typing.List[str]
```

- *Type:* typing.List[str]

A list of week days to repeat on.

Choose from: `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when `type` is `weeks`. First letter must be capitalized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.43.0/docs/resources/downtime#week_days Downtime#week_days}

---

## Classes <a name="Classes" id="Classes"></a>

### DowntimeRecurrenceOutputReference <a name="DowntimeRecurrenceOutputReference" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import downtime

downtime.DowntimeRecurrenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule">reset_rrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate">reset_until_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences">reset_until_occurrences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays">reset_week_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period` <a name="reset_period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_rrule` <a name="reset_rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetRrule"></a>

```python
def reset_rrule() -> None
```

##### `reset_until_date` <a name="reset_until_date" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilDate"></a>

```python
def reset_until_date() -> None
```

##### `reset_until_occurrences` <a name="reset_until_occurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetUntilOccurrences"></a>

```python
def reset_until_occurrences() -> None
```

##### `reset_week_days` <a name="reset_week_days" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.resetWeekDays"></a>

```python
def reset_week_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput">rrule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput">until_date_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput">until_occurrences_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput">week_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule">rrule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate">until_date</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences">until_occurrences</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays">week_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rrule_input`<sup>Optional</sup> <a name="rrule_input" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rruleInput"></a>

```python
rrule_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `until_date_input`<sup>Optional</sup> <a name="until_date_input" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDateInput"></a>

```python
until_date_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `until_occurrences_input`<sup>Optional</sup> <a name="until_occurrences_input" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrencesInput"></a>

```python
until_occurrences_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week_days_input`<sup>Optional</sup> <a name="week_days_input" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDaysInput"></a>

```python
week_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `until_date`<sup>Required</sup> <a name="until_date" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilDate"></a>

```python
until_date: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `until_occurrences`<sup>Required</sup> <a name="until_occurrences" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.untilOccurrences"></a>

```python
until_occurrences: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week_days`<sup>Required</sup> <a name="week_days" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.weekDays"></a>

```python
week_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.downtime.DowntimeRecurrenceOutputReference.property.internalValue"></a>

```python
internal_value: DowntimeRecurrence
```

- *Type:* <a href="#@cdktf/provider-datadog.downtime.DowntimeRecurrence">DowntimeRecurrence</a>

---



