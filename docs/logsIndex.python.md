# `logsIndex` Submodule <a name="`logsIndex` Submodule" id="@cdktf/provider-datadog.logsIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsIndex <a name="LogsIndex" id="@cdktf/provider-datadog.logsIndex.LogsIndex"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index datadog_logs_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndex(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: LogsIndexFilter,
  name: str,
  daily_limit: typing.Union[int, float] = None,
  daily_limit_reset: LogsIndexDailyLimitReset = None,
  daily_limit_warning_threshold_percentage: typing.Union[int, float] = None,
  disable_daily_limit: typing.Union[bool, IResolvable] = None,
  exclusion_filter: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilter]] = None,
  flex_retention_days: typing.Union[int, float] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the index. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dailyLimit">daily_limit</a></code> | <code>typing.Union[int, float]</code> | The number of log events you can send in this index per day before you are rate-limited. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dailyLimitReset">daily_limit_reset</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a></code> | daily_limit_reset block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dailyLimitWarningThresholdPercentage">daily_limit_warning_threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | A percentage threshold of the daily quota at which a Datadog warning event is generated. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.disableDailyLimit">disable_daily_limit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored). |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.exclusionFilter">exclusion_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]</code> | exclusion_filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.flexRetentionDays">flex_retention_days</a></code> | <code>typing.Union[int, float]</code> | The total number of days logs are stored in Standard and Flex Tier before being deleted from the index. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#id LogsIndex#id}. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#filter LogsIndex#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.name"></a>

- *Type:* str

The name of the index.

Index names cannot be modified after creation. If this value is changed, a new index will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#name LogsIndex#name}

---

##### `daily_limit`<sup>Optional</sup> <a name="daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dailyLimit"></a>

- *Type:* typing.Union[int, float]

The number of log events you can send in this index per day before you are rate-limited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#daily_limit LogsIndex#daily_limit}

---

##### `daily_limit_reset`<sup>Optional</sup> <a name="daily_limit_reset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dailyLimitReset"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

daily_limit_reset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#daily_limit_reset LogsIndex#daily_limit_reset}

---

##### `daily_limit_warning_threshold_percentage`<sup>Optional</sup> <a name="daily_limit_warning_threshold_percentage" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.dailyLimitWarningThresholdPercentage"></a>

- *Type:* typing.Union[int, float]

A percentage threshold of the daily quota at which a Datadog warning event is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#daily_limit_warning_threshold_percentage LogsIndex#daily_limit_warning_threshold_percentage}

---

##### `disable_daily_limit`<sup>Optional</sup> <a name="disable_daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.disableDailyLimit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored).

If false or omitted, the index's current daily_limit is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#disable_daily_limit LogsIndex#disable_daily_limit}

---

##### `exclusion_filter`<sup>Optional</sup> <a name="exclusion_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.exclusionFilter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]

exclusion_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#exclusion_filter LogsIndex#exclusion_filter}

---

##### `flex_retention_days`<sup>Optional</sup> <a name="flex_retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.flexRetentionDays"></a>

- *Type:* typing.Union[int, float]

The total number of days logs are stored in Standard and Flex Tier before being deleted from the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#flex_retention_days LogsIndex#flex_retention_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#id LogsIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndex.Initializer.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#retention_days LogsIndex#retention_days}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.putDailyLimitReset">put_daily_limit_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.putExclusionFilter">put_exclusion_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimit">reset_daily_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitReset">reset_daily_limit_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitWarningThresholdPercentage">reset_daily_limit_warning_threshold_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetDisableDailyLimit">reset_disable_daily_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetExclusionFilter">reset_exclusion_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetFlexRetentionDays">reset_flex_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.resetRetentionDays">reset_retention_days</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.logsIndex.LogsIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsIndex.LogsIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.logsIndex.LogsIndex.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_daily_limit_reset` <a name="put_daily_limit_reset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putDailyLimitReset"></a>

```python
def put_daily_limit_reset(
  reset_time: str,
  reset_utc_offset: str
) -> None
```

###### `reset_time`<sup>Required</sup> <a name="reset_time" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putDailyLimitReset.parameter.resetTime"></a>

- *Type:* str

String in `HH:00` format representing the time of day the daily limit should be reset.

The hours must be between 00 and 23 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#reset_time LogsIndex#reset_time}

---

###### `reset_utc_offset`<sup>Required</sup> <a name="reset_utc_offset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putDailyLimitReset.parameter.resetUtcOffset"></a>

- *Type:* str

String in `(-|+)HH:00` format representing the UTC offset to apply to the given reset time.

The hours must be between -12 and +14 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#reset_utc_offset LogsIndex#reset_utc_offset}

---

##### `put_exclusion_filter` <a name="put_exclusion_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putExclusionFilter"></a>

```python
def put_exclusion_filter(
  value: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putExclusionFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putFilter"></a>

```python
def put_filter(
  query: str
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndex.putFilter.parameter.query"></a>

- *Type:* str

Logs filter criteria. Only logs matching this filter criteria are considered for this index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#query LogsIndex#query}

---

##### `reset_daily_limit` <a name="reset_daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimit"></a>

```python
def reset_daily_limit() -> None
```

##### `reset_daily_limit_reset` <a name="reset_daily_limit_reset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitReset"></a>

```python
def reset_daily_limit_reset() -> None
```

##### `reset_daily_limit_warning_threshold_percentage` <a name="reset_daily_limit_warning_threshold_percentage" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDailyLimitWarningThresholdPercentage"></a>

```python
def reset_daily_limit_warning_threshold_percentage() -> None
```

##### `reset_disable_daily_limit` <a name="reset_disable_daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetDisableDailyLimit"></a>

```python
def reset_disable_daily_limit() -> None
```

##### `reset_exclusion_filter` <a name="reset_exclusion_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetExclusionFilter"></a>

```python
def reset_exclusion_filter() -> None
```

##### `reset_flex_retention_days` <a name="reset_flex_retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetFlexRetentionDays"></a>

```python
def reset_flex_retention_days() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndex.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogsIndex resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsIndex.LogsIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogsIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogsIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitReset">daily_limit_reset</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference">LogsIndexDailyLimitResetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilter">exclusion_filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList">LogsIndexExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference">LogsIndexFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitInput">daily_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitResetInput">daily_limit_reset_input</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentageInput">daily_limit_warning_threshold_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimitInput">disable_daily_limit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilterInput">exclusion_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDaysInput">flex_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimit">daily_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentage">daily_limit_warning_threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimit">disable_daily_limit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDays">flex_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `daily_limit_reset`<sup>Required</sup> <a name="daily_limit_reset" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitReset"></a>

```python
daily_limit_reset: LogsIndexDailyLimitResetOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference">LogsIndexDailyLimitResetOutputReference</a>

---

##### `exclusion_filter`<sup>Required</sup> <a name="exclusion_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilter"></a>

```python
exclusion_filter: LogsIndexExclusionFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList">LogsIndexExclusionFilterList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.filter"></a>

```python
filter: LogsIndexFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference">LogsIndexFilterOutputReference</a>

---

##### `daily_limit_input`<sup>Optional</sup> <a name="daily_limit_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitInput"></a>

```python
daily_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_limit_reset_input`<sup>Optional</sup> <a name="daily_limit_reset_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitResetInput"></a>

```python
daily_limit_reset_input: LogsIndexDailyLimitReset
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

---

##### `daily_limit_warning_threshold_percentage_input`<sup>Optional</sup> <a name="daily_limit_warning_threshold_percentage_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentageInput"></a>

```python
daily_limit_warning_threshold_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_daily_limit_input`<sup>Optional</sup> <a name="disable_daily_limit_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimitInput"></a>

```python
disable_daily_limit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exclusion_filter_input`<sup>Optional</sup> <a name="exclusion_filter_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.exclusionFilterInput"></a>

```python
exclusion_filter_input: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.filterInput"></a>

```python
filter_input: LogsIndexFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

---

##### `flex_retention_days_input`<sup>Optional</sup> <a name="flex_retention_days_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDaysInput"></a>

```python
flex_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_limit`<sup>Required</sup> <a name="daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimit"></a>

```python
daily_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_limit_warning_threshold_percentage`<sup>Required</sup> <a name="daily_limit_warning_threshold_percentage" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.dailyLimitWarningThresholdPercentage"></a>

```python
daily_limit_warning_threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_daily_limit`<sup>Required</sup> <a name="disable_daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.disableDailyLimit"></a>

```python
disable_daily_limit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `flex_retention_days`<sup>Required</sup> <a name="flex_retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.flexRetentionDays"></a>

```python
flex_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsIndex.LogsIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsIndexConfig <a name="LogsIndexConfig" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: LogsIndexFilter,
  name: str,
  daily_limit: typing.Union[int, float] = None,
  daily_limit_reset: LogsIndexDailyLimitReset = None,
  daily_limit_warning_threshold_percentage: typing.Union[int, float] = None,
  disable_daily_limit: typing.Union[bool, IResolvable] = None,
  exclusion_filter: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilter]] = None,
  flex_retention_days: typing.Union[int, float] = None,
  id: str = None,
  retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.name">name</a></code> | <code>str</code> | The name of the index. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimit">daily_limit</a></code> | <code>typing.Union[int, float]</code> | The number of log events you can send in this index per day before you are rate-limited. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitReset">daily_limit_reset</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a></code> | daily_limit_reset block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitWarningThresholdPercentage">daily_limit_warning_threshold_percentage</a></code> | <code>typing.Union[int, float]</code> | A percentage threshold of the daily quota at which a Datadog warning event is generated. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.disableDailyLimit">disable_daily_limit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored). |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.exclusionFilter">exclusion_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]</code> | exclusion_filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.flexRetentionDays">flex_retention_days</a></code> | <code>typing.Union[int, float]</code> | The total number of days logs are stored in Standard and Flex Tier before being deleted from the index. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#id LogsIndex#id}. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.filter"></a>

```python
filter: LogsIndexFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#filter LogsIndex#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the index.

Index names cannot be modified after creation. If this value is changed, a new index will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#name LogsIndex#name}

---

##### `daily_limit`<sup>Optional</sup> <a name="daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimit"></a>

```python
daily_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of log events you can send in this index per day before you are rate-limited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#daily_limit LogsIndex#daily_limit}

---

##### `daily_limit_reset`<sup>Optional</sup> <a name="daily_limit_reset" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitReset"></a>

```python
daily_limit_reset: LogsIndexDailyLimitReset
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

daily_limit_reset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#daily_limit_reset LogsIndex#daily_limit_reset}

---

##### `daily_limit_warning_threshold_percentage`<sup>Optional</sup> <a name="daily_limit_warning_threshold_percentage" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.dailyLimitWarningThresholdPercentage"></a>

```python
daily_limit_warning_threshold_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A percentage threshold of the daily quota at which a Datadog warning event is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#daily_limit_warning_threshold_percentage LogsIndex#daily_limit_warning_threshold_percentage}

---

##### `disable_daily_limit`<sup>Optional</sup> <a name="disable_daily_limit" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.disableDailyLimit"></a>

```python
disable_daily_limit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, sets the daily_limit value to null and the index is not limited on a daily basis (any specified daily_limit value in the request is ignored).

If false or omitted, the index's current daily_limit is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#disable_daily_limit LogsIndex#disable_daily_limit}

---

##### `exclusion_filter`<sup>Optional</sup> <a name="exclusion_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.exclusionFilter"></a>

```python
exclusion_filter: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]

exclusion_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#exclusion_filter LogsIndex#exclusion_filter}

---

##### `flex_retention_days`<sup>Optional</sup> <a name="flex_retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.flexRetentionDays"></a>

```python
flex_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of days logs are stored in Standard and Flex Tier before being deleted from the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#flex_retention_days LogsIndex#flex_retention_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#id LogsIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-datadog.logsIndex.LogsIndexConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days logs are stored in Standard Tier before aging into the Flex Tier or being deleted from the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#retention_days LogsIndex#retention_days}

---

### LogsIndexDailyLimitReset <a name="LogsIndexDailyLimitReset" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexDailyLimitReset(
  reset_time: str,
  reset_utc_offset: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetTime">reset_time</a></code> | <code>str</code> | String in `HH:00` format representing the time of day the daily limit should be reset. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetUtcOffset">reset_utc_offset</a></code> | <code>str</code> | String in `(-\|+)HH:00` format representing the UTC offset to apply to the given reset time. |

---

##### `reset_time`<sup>Required</sup> <a name="reset_time" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetTime"></a>

```python
reset_time: str
```

- *Type:* str

String in `HH:00` format representing the time of day the daily limit should be reset.

The hours must be between 00 and 23 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#reset_time LogsIndex#reset_time}

---

##### `reset_utc_offset`<sup>Required</sup> <a name="reset_utc_offset" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset.property.resetUtcOffset"></a>

```python
reset_utc_offset: str
```

- *Type:* str

String in `(-|+)HH:00` format representing the UTC offset to apply to the given reset time.

The hours must be between -12 and +14 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#reset_utc_offset LogsIndex#reset_utc_offset}

---

### LogsIndexExclusionFilter <a name="LogsIndexExclusionFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexExclusionFilter(
  filter: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilterFilter]] = None,
  is_enabled: typing.Union[bool, IResolvable] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean stating if the exclusion is active or not. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.name">name</a></code> | <code>str</code> | The name of the exclusion filter. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilterFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#filter LogsIndex#filter}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean stating if the exclusion is active or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#is_enabled LogsIndex#is_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#name LogsIndex#name}

---

### LogsIndexExclusionFilterFilter <a name="LogsIndexExclusionFilterFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexExclusionFilterFilter(
  query: str = None,
  sample_rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.query">query</a></code> | <code>str</code> | Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | The fraction of logs excluded by the exclusion filter, when active. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.query"></a>

```python
query: str
```

- *Type:* str

Only logs matching the filter criteria and the query of the parent index will be considered for this exclusion filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#query LogsIndex#query}

---

##### `sample_rate`<sup>Optional</sup> <a name="sample_rate" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of logs excluded by the exclusion filter, when active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#sample_rate LogsIndex#sample_rate}

---

### LogsIndexFilter <a name="LogsIndexFilter" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexFilter(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter.property.query">query</a></code> | <code>str</code> | Logs filter criteria. Only logs matching this filter criteria are considered for this index. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilter.property.query"></a>

```python
query: str
```

- *Type:* str

Logs filter criteria. Only logs matching this filter criteria are considered for this index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.65.0/docs/resources/logs_index#query LogsIndex#query}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsIndexDailyLimitResetOutputReference <a name="LogsIndexDailyLimitResetOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexDailyLimitResetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTimeInput">reset_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffsetInput">reset_utc_offset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTime">reset_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffset">reset_utc_offset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `reset_time_input`<sup>Optional</sup> <a name="reset_time_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTimeInput"></a>

```python
reset_time_input: str
```

- *Type:* str

---

##### `reset_utc_offset_input`<sup>Optional</sup> <a name="reset_utc_offset_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffsetInput"></a>

```python
reset_utc_offset_input: str
```

- *Type:* str

---

##### `reset_time`<sup>Required</sup> <a name="reset_time" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetTime"></a>

```python
reset_time: str
```

- *Type:* str

---

##### `reset_utc_offset`<sup>Required</sup> <a name="reset_utc_offset" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.resetUtcOffset"></a>

```python
reset_utc_offset: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitResetOutputReference.property.internalValue"></a>

```python
internal_value: LogsIndexDailyLimitReset
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexDailyLimitReset">LogsIndexDailyLimitReset</a>

---


### LogsIndexExclusionFilterFilterList <a name="LogsIndexExclusionFilterFilterList" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexExclusionFilterFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsIndexExclusionFilterFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilterFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]]

---


### LogsIndexExclusionFilterFilterOutputReference <a name="LogsIndexExclusionFilterFilterOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexExclusionFilterFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetSampleRate">reset_sample_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_sample_rate` <a name="reset_sample_rate" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.resetSampleRate"></a>

```python
def reset_sample_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRateInput">sample_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRate">sample_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `sample_rate_input`<sup>Optional</sup> <a name="sample_rate_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRateInput"></a>

```python
sample_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `sample_rate`<sup>Required</sup> <a name="sample_rate" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.sampleRate"></a>

```python
sample_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsIndexExclusionFilterFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]

---


### LogsIndexExclusionFilterList <a name="LogsIndexExclusionFilterList" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexExclusionFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsIndexExclusionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]]

---


### LogsIndexExclusionFilterOutputReference <a name="LogsIndexExclusionFilterOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexExclusionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilterFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList">LogsIndexExclusionFilterFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filter"></a>

```python
filter: LogsIndexExclusionFilterFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilterList">LogsIndexExclusionFilterFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[LogsIndexExclusionFilterFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterFilter">LogsIndexExclusionFilterFilter</a>]]

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsIndexExclusionFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexExclusionFilter">LogsIndexExclusionFilter</a>]

---


### LogsIndexFilterOutputReference <a name="LogsIndexFilterOutputReference" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_index

logsIndex.LogsIndexFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsIndex.LogsIndexFilterOutputReference.property.internalValue"></a>

```python
internal_value: LogsIndexFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.logsIndex.LogsIndexFilter">LogsIndexFilter</a>

---



