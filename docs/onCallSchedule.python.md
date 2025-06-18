# `onCallSchedule` Submodule <a name="`onCallSchedule` Submodule" id="@cdktf/provider-datadog.onCallSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallSchedule <a name="OnCallSchedule" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule datadog_on_call_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallSchedule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  time_zone: str,
  layer: typing.Union[IResolvable, typing.List[OnCallScheduleLayer]] = None,
  teams: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.name">name</a></code> | <code>str</code> | A human-readable name for the new schedule. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone in which the schedule is defined. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.layer">layer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]</code> | layer block. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.teams">teams</a></code> | <code>typing.List[str]</code> | A list of team ids associated with the schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.name"></a>

- *Type:* str

A human-readable name for the new schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#name OnCallSchedule#name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone in which the schedule is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#time_zone OnCallSchedule#time_zone}

---

##### `layer`<sup>Optional</sup> <a name="layer" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.layer"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]

layer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#layer OnCallSchedule#layer}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.Initializer.parameter.teams"></a>

- *Type:* typing.List[str]

A list of team ids associated with the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#teams OnCallSchedule#teams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.putLayer">put_layer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetLayer">reset_layer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_layer` <a name="put_layer" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.putLayer"></a>

```python
def put_layer(
  value: typing.Union[IResolvable, typing.List[OnCallScheduleLayer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.putLayer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]

---

##### `reset_layer` <a name="reset_layer" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetLayer"></a>

```python
def reset_layer() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.resetTeams"></a>

```python
def reset_teams() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OnCallSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallSchedule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallSchedule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallSchedule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallSchedule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OnCallSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OnCallSchedule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OnCallSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OnCallSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layer">layer</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList">OnCallScheduleLayerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layerInput">layer_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `layer`<sup>Required</sup> <a name="layer" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layer"></a>

```python
layer: OnCallScheduleLayerList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList">OnCallScheduleLayerList</a>

---

##### `layer_input`<sup>Optional</sup> <a name="layer_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.layerInput"></a>

```python
layer_input: typing.Union[IResolvable, typing.List[OnCallScheduleLayer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.onCallSchedule.OnCallSchedule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallScheduleConfig <a name="OnCallScheduleConfig" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  time_zone: str,
  layer: typing.Union[IResolvable, typing.List[OnCallScheduleLayer]] = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.name">name</a></code> | <code>str</code> | A human-readable name for the new schedule. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone in which the schedule is defined. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.layer">layer</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]</code> | layer block. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.teams">teams</a></code> | <code>typing.List[str]</code> | A list of team ids associated with the schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A human-readable name for the new schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#name OnCallSchedule#name}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone in which the schedule is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#time_zone OnCallSchedule#time_zone}

---

##### `layer`<sup>Optional</sup> <a name="layer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.layer"></a>

```python
layer: typing.Union[IResolvable, typing.List[OnCallScheduleLayer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]

layer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#layer OnCallSchedule#layer}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleConfig.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

A list of team ids associated with the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#teams OnCallSchedule#teams}

---

### OnCallScheduleLayer <a name="OnCallScheduleLayer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayer(
  effective_date: str,
  name: str,
  users: typing.List[str],
  end_date: str = None,
  interval: OnCallScheduleLayerInterval = None,
  restriction: typing.Union[IResolvable, typing.List[OnCallScheduleLayerRestriction]] = None,
  rotation_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.effectiveDate">effective_date</a></code> | <code>str</code> | The date/time when this layer should become active (in ISO 8601). |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.name">name</a></code> | <code>str</code> | The name of this layer. Should be unique within the schedule. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.users">users</a></code> | <code>typing.List[str]</code> | List of user IDs for the layer. Can either be a valid user id or null. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.endDate">end_date</a></code> | <code>str</code> | The date/time after which this layer no longer applies (in ISO 8601). |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a></code> | interval block. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.restriction">restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]]</code> | restriction block. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.rotationStart">rotation_start</a></code> | <code>str</code> | The date/time when the rotation for this layer starts (in ISO 8601). |

---

##### `effective_date`<sup>Required</sup> <a name="effective_date" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.effectiveDate"></a>

```python
effective_date: str
```

- *Type:* str

The date/time when this layer should become active (in ISO 8601).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#effective_date OnCallSchedule#effective_date}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this layer. Should be unique within the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#name OnCallSchedule#name}

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

List of user IDs for the layer. Can either be a valid user id or null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#users OnCallSchedule#users}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

The date/time after which this layer no longer applies (in ISO 8601).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#end_date OnCallSchedule#end_date}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.interval"></a>

```python
interval: OnCallScheduleLayerInterval
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>

interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#interval OnCallSchedule#interval}

---

##### `restriction`<sup>Optional</sup> <a name="restriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.restriction"></a>

```python
restriction: typing.Union[IResolvable, typing.List[OnCallScheduleLayerRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]]

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#restriction OnCallSchedule#restriction}

---

##### `rotation_start`<sup>Optional</sup> <a name="rotation_start" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer.property.rotationStart"></a>

```python
rotation_start: str
```

- *Type:* str

The date/time when the rotation for this layer starts (in ISO 8601).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#rotation_start OnCallSchedule#rotation_start}

---

### OnCallScheduleLayerInterval <a name="OnCallScheduleLayerInterval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayerInterval(
  days: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.days">days</a></code> | <code>typing.Union[int, float]</code> | The number of full days in each rotation period. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | For intervals that are not expressible in whole days, this will be added to `days`. Defaults to `0`. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of full days in each rotation period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#days OnCallSchedule#days}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For intervals that are not expressible in whole days, this will be added to `days`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#seconds OnCallSchedule#seconds}

---

### OnCallScheduleLayerRestriction <a name="OnCallScheduleLayerRestriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayerRestriction(
  end_day: str = None,
  end_time: str = None,
  start_day: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endDay">end_day</a></code> | <code>str</code> | The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endTime">end_time</a></code> | <code>str</code> | The time of day when the restriction ends (hh:mm:ss). |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startDay">start_day</a></code> | <code>str</code> | The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startTime">start_time</a></code> | <code>str</code> | The time of day when the restriction begins (hh:mm:ss). |

---

##### `end_day`<sup>Optional</sup> <a name="end_day" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endDay"></a>

```python
end_day: str
```

- *Type:* str

The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#end_day OnCallSchedule#end_day}

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The time of day when the restriction ends (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#end_time OnCallSchedule#end_time}

---

##### `start_day`<sup>Optional</sup> <a name="start_day" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startDay"></a>

```python
start_day: str
```

- *Type:* str

The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#start_day OnCallSchedule#start_day}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The time of day when the restriction begins (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#start_time OnCallSchedule#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallScheduleLayerIntervalOutputReference <a name="OnCallScheduleLayerIntervalOutputReference" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayerIntervalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OnCallScheduleLayerInterval]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>]

---


### OnCallScheduleLayerList <a name="OnCallScheduleLayerList" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnCallScheduleLayerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OnCallScheduleLayer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]]

---


### OnCallScheduleLayerOutputReference <a name="OnCallScheduleLayerOutputReference" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putInterval">put_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putRestriction">put_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetRestriction">reset_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetRotationStart">reset_rotation_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_interval` <a name="put_interval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putInterval"></a>

```python
def put_interval(
  days: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putInterval.parameter.days"></a>

- *Type:* typing.Union[int, float]

The number of full days in each rotation period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#days OnCallSchedule#days}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putInterval.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

For intervals that are not expressible in whole days, this will be added to `days`. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.66.0/docs/resources/on_call_schedule#seconds OnCallSchedule#seconds}

---

##### `put_restriction` <a name="put_restriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putRestriction"></a>

```python
def put_restriction(
  value: typing.Union[IResolvable, typing.List[OnCallScheduleLayerRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.putRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]]

---

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_restriction` <a name="reset_restriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetRestriction"></a>

```python
def reset_restriction() -> None
```

##### `reset_rotation_start` <a name="reset_rotation_start" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.resetRotationStart"></a>

```python
def reset_rotation_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference">OnCallScheduleLayerIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restriction">restriction</a></code> | <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList">OnCallScheduleLayerRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDateInput">effective_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDateInput">end_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restrictionInput">restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStartInput">rotation_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDate">effective_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStart">rotation_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.interval"></a>

```python
interval: OnCallScheduleLayerIntervalOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerIntervalOutputReference">OnCallScheduleLayerIntervalOutputReference</a>

---

##### `restriction`<sup>Required</sup> <a name="restriction" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restriction"></a>

```python
restriction: OnCallScheduleLayerRestrictionList
```

- *Type:* <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList">OnCallScheduleLayerRestrictionList</a>

---

##### `effective_date_input`<sup>Optional</sup> <a name="effective_date_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDateInput"></a>

```python
effective_date_input: str
```

- *Type:* str

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDateInput"></a>

```python
end_date_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[IResolvable, OnCallScheduleLayerInterval]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerInterval">OnCallScheduleLayerInterval</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `restriction_input`<sup>Optional</sup> <a name="restriction_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.restrictionInput"></a>

```python
restriction_input: typing.Union[IResolvable, typing.List[OnCallScheduleLayerRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]]

---

##### `rotation_start_input`<sup>Optional</sup> <a name="rotation_start_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStartInput"></a>

```python
rotation_start_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effective_date`<sup>Required</sup> <a name="effective_date" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.effectiveDate"></a>

```python
effective_date: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rotation_start`<sup>Required</sup> <a name="rotation_start" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.rotationStart"></a>

```python
rotation_start: str
```

- *Type:* str

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OnCallScheduleLayer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayer">OnCallScheduleLayer</a>]

---


### OnCallScheduleLayerRestrictionList <a name="OnCallScheduleLayerRestrictionList" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayerRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OnCallScheduleLayerRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OnCallScheduleLayerRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]]

---


### OnCallScheduleLayerRestrictionOutputReference <a name="OnCallScheduleLayerRestrictionOutputReference" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import on_call_schedule

onCallSchedule.OnCallScheduleLayerRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetEndDay">reset_end_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetStartDay">reset_start_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_end_day` <a name="reset_end_day" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetEndDay"></a>

```python
def reset_end_day() -> None
```

##### `reset_end_time` <a name="reset_end_time" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_start_day` <a name="reset_start_day" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetStartDay"></a>

```python
def reset_start_day() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDayInput">end_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDayInput">start_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDay">end_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDay">start_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_day_input`<sup>Optional</sup> <a name="end_day_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDayInput"></a>

```python
end_day_input: str
```

- *Type:* str

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `start_day_input`<sup>Optional</sup> <a name="start_day_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDayInput"></a>

```python
start_day_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `end_day`<sup>Required</sup> <a name="end_day" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endDay"></a>

```python
end_day: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_day`<sup>Required</sup> <a name="start_day" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startDay"></a>

```python
start_day: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OnCallScheduleLayerRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.onCallSchedule.OnCallScheduleLayerRestriction">OnCallScheduleLayerRestriction</a>]

---



