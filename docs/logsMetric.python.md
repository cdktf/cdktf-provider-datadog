# `logsMetric` Submodule <a name="`logsMetric` Submodule" id="@cdktf/provider-datadog.logsMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsMetric <a name="LogsMetric" id="@cdktf/provider-datadog.logsMetric.LogsMetric"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric datadog_logs_metric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetric(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute: LogsMetricCompute,
  filter: LogsMetricFilter,
  name: str,
  group_by: typing.Union[IResolvable, typing.List[LogsMetricGroupBy]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the log-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.groupBy">group_by</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]</code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#id LogsMetric#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.compute"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#compute LogsMetric#compute}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#filter LogsMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.name"></a>

- *Type:* str

The name of the log-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#name LogsMetric#name}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.groupBy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#group_by LogsMetric#group_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#id LogsMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute">put_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.putGroupBy">put_group_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsMetric.LogsMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.logsMetric.LogsMetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.logsMetric.LogsMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.logsMetric.LogsMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsMetric.LogsMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.logsMetric.LogsMetric.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute` <a name="put_compute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute"></a>

```python
def put_compute(
  aggregation_type: str,
  include_percentiles: typing.Union[bool, IResolvable] = None,
  path: str = None
) -> None
```

###### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute.parameter.aggregationType"></a>

- *Type:* str

The type of aggregation to use. This field can't be updated after creation. Valid values are `count`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#aggregation_type LogsMetric#aggregation_type}

---

###### `include_percentiles`<sup>Optional</sup> <a name="include_percentiles" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute.parameter.includePercentiles"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have an `aggregation_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#include_percentiles LogsMetric#include_percentiles}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putCompute.parameter.path"></a>

- *Type:* str

The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution").

This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#path LogsMetric#path}

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putFilter"></a>

```python
def put_filter(
  query: str
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putFilter.parameter.query"></a>

- *Type:* str

The search query - following the log search syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#query LogsMetric#query}

---

##### `put_group_by` <a name="put_group_by" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putGroupBy"></a>

```python
def put_group_by(
  value: typing.Union[IResolvable, typing.List[LogsMetricGroupBy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsMetric.LogsMetric.putGroupBy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]

---

##### `reset_group_by` <a name="reset_group_by" id="@cdktf/provider-datadog.logsMetric.LogsMetric.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogsMetric resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetric.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsMetric.LogsMetric.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogsMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsMetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogsMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference">LogsMetricComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference">LogsMetricFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupBy">group_by</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList">LogsMetricGroupByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.computeInput">compute_input</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupByInput">group_by_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.compute"></a>

```python
compute: LogsMetricComputeOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference">LogsMetricComputeOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.filter"></a>

```python
filter: LogsMetricFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference">LogsMetricFilterOutputReference</a>

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupBy"></a>

```python
group_by: LogsMetricGroupByList
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList">LogsMetricGroupByList</a>

---

##### `compute_input`<sup>Optional</sup> <a name="compute_input" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.computeInput"></a>

```python
compute_input: LogsMetricCompute
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.filterInput"></a>

```python
filter_input: LogsMetricFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.groupByInput"></a>

```python
group_by_input: typing.Union[IResolvable, typing.List[LogsMetricGroupBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsMetric.LogsMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsMetricCompute <a name="LogsMetricCompute" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricCompute(
  aggregation_type: str,
  include_percentiles: typing.Union[bool, IResolvable] = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.aggregationType">aggregation_type</a></code> | <code>str</code> | The type of aggregation to use. This field can't be updated after creation. Valid values are `count`, `distribution`. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.includePercentiles">include_percentiles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Toggle to include/exclude percentiles for a distribution metric. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.path">path</a></code> | <code>str</code> | The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution"). |

---

##### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.aggregationType"></a>

```python
aggregation_type: str
```

- *Type:* str

The type of aggregation to use. This field can't be updated after creation. Valid values are `count`, `distribution`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#aggregation_type LogsMetric#aggregation_type}

---

##### `include_percentiles`<sup>Optional</sup> <a name="include_percentiles" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.includePercentiles"></a>

```python
include_percentiles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Toggle to include/exclude percentiles for a distribution metric.

Defaults to false. Can only be applied to metrics that have an `aggregation_type` of distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#include_percentiles LogsMetric#include_percentiles}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricCompute.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution").

This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#path LogsMetric#path}

---

### LogsMetricConfig <a name="LogsMetricConfig" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute: LogsMetricCompute,
  filter: LogsMetricFilter,
  name: str,
  group_by: typing.Union[IResolvable, typing.List[LogsMetricGroupBy]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.name">name</a></code> | <code>str</code> | The name of the log-based metric. This field can't be updated after creation. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.groupBy">group_by</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]</code> | group_by block. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#id LogsMetric#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.compute"></a>

```python
compute: LogsMetricCompute
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#compute LogsMetric#compute}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.filter"></a>

```python
filter: LogsMetricFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#filter LogsMetric#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the log-based metric. This field can't be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#name LogsMetric#name}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.groupBy"></a>

```python
group_by: typing.Union[IResolvable, typing.List[LogsMetricGroupBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]

group_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#group_by LogsMetric#group_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsMetric.LogsMetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#id LogsMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LogsMetricFilter <a name="LogsMetricFilter" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricFilter(
  query: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter.property.query">query</a></code> | <code>str</code> | The search query - following the log search syntax. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilter.property.query"></a>

```python
query: str
```

- *Type:* str

The search query - following the log search syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#query LogsMetric#query}

---

### LogsMetricGroupBy <a name="LogsMetricGroupBy" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricGroupBy(
  path: str,
  tag_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.path">path</a></code> | <code>str</code> | The path to the value the log-based metric will be aggregated over. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.tagName">tag_name</a></code> | <code>str</code> | Name of the tag that gets created. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.path"></a>

```python
path: str
```

- *Type:* str

The path to the value the log-based metric will be aggregated over.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#path LogsMetric#path}

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

Name of the tag that gets created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.42.0/docs/resources/logs_metric#tag_name LogsMetric#tag_name}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsMetricComputeOutputReference <a name="LogsMetricComputeOutputReference" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricComputeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetIncludePercentiles">reset_include_percentiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_percentiles` <a name="reset_include_percentiles" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetIncludePercentiles"></a>

```python
def reset_include_percentiles() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationTypeInput">aggregation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentilesInput">include_percentiles_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationType">aggregation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentiles">include_percentiles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_type_input`<sup>Optional</sup> <a name="aggregation_type_input" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationTypeInput"></a>

```python
aggregation_type_input: str
```

- *Type:* str

---

##### `include_percentiles_input`<sup>Optional</sup> <a name="include_percentiles_input" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentilesInput"></a>

```python
include_percentiles_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `aggregation_type`<sup>Required</sup> <a name="aggregation_type" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.aggregationType"></a>

```python
aggregation_type: str
```

- *Type:* str

---

##### `include_percentiles`<sup>Required</sup> <a name="include_percentiles" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.includePercentiles"></a>

```python
include_percentiles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsMetric.LogsMetricComputeOutputReference.property.internalValue"></a>

```python
internal_value: LogsMetricCompute
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricCompute">LogsMetricCompute</a>

---


### LogsMetricFilterOutputReference <a name="LogsMetricFilterOutputReference" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsMetric.LogsMetricFilterOutputReference.property.internalValue"></a>

```python
internal_value: LogsMetricFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricFilter">LogsMetricFilter</a>

---


### LogsMetricGroupByList <a name="LogsMetricGroupByList" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricGroupByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LogsMetricGroupByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LogsMetricGroupBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]]

---


### LogsMetricGroupByOutputReference <a name="LogsMetricGroupByOutputReference" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_metric

logsMetric.LogsMetricGroupByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagNameInput">tag_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `tag_name_input`<sup>Optional</sup> <a name="tag_name_input" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagNameInput"></a>

```python
tag_name_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsMetric.LogsMetricGroupByOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LogsMetricGroupBy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.logsMetric.LogsMetricGroupBy">LogsMetricGroupBy</a>]

---



