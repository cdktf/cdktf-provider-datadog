# `sloCorrection` Submodule <a name="`sloCorrection` Submodule" id="@cdktf/provider-datadog.sloCorrection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SloCorrection <a name="SloCorrection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction datadog_slo_correction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import slo_correction

sloCorrection.SloCorrection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  slo_id: str,
  start: typing.Union[int, float],
  description: str = None,
  duration: typing.Union[int, float] = None,
  end: typing.Union[int, float] = None,
  id: str = None,
  rrule: str = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.category">category</a></code> | <code>str</code> | Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.sloId">slo_id</a></code> | <code>str</code> | ID of the SLO that this correction will be applied to. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.start">start</a></code> | <code>typing.Union[int, float]</code> | Starting time of the correction in epoch seconds. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the correction being made. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`). |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.end">end</a></code> | <code>typing.Union[int, float]</code> | Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#id SloCorrection#id}. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.rrule">rrule</a></code> | <code>str</code> | Recurrence rules as defined in the iCalendar RFC 5545. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | The timezone to display in the UI for the correction times (defaults to "UTC"). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.category"></a>

- *Type:* str

Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#category SloCorrection#category}

---

##### `slo_id`<sup>Required</sup> <a name="slo_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.sloId"></a>

- *Type:* str

ID of the SLO that this correction will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#slo_id SloCorrection#slo_id}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.start"></a>

- *Type:* typing.Union[int, float]

Starting time of the correction in epoch seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#start SloCorrection#start}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.description"></a>

- *Type:* str

Description of the correction being made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#description SloCorrection#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#duration SloCorrection#duration}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.end"></a>

- *Type:* typing.Union[int, float]

Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#end SloCorrection#end}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#id SloCorrection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.rrule"></a>

- *Type:* str

Recurrence rules as defined in the iCalendar RFC 5545.

Supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#rrule SloCorrection#rrule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.Initializer.parameter.timezone"></a>

- *Type:* str

The timezone to display in the UI for the correction times (defaults to "UTC").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#timezone SloCorrection#timezone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd">reset_end</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule">reset_rrule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_end` <a name="reset_end" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetEnd"></a>

```python
def reset_end() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rrule` <a name="reset_rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetRrule"></a>

```python
def reset_rrule() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SloCorrection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import slo_correction

sloCorrection.SloCorrection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import slo_correction

sloCorrection.SloCorrection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import slo_correction

sloCorrection.SloCorrection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import slo_correction

sloCorrection.SloCorrection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SloCorrection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SloCorrection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SloCorrection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SloCorrection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput">rrule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput">slo_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule">rrule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId">slo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rrule_input`<sup>Optional</sup> <a name="rrule_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rruleInput"></a>

```python
rrule_input: str
```

- *Type:* str

---

##### `slo_id_input`<sup>Optional</sup> <a name="slo_id_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloIdInput"></a>

```python
slo_id_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `rrule`<sup>Required</sup> <a name="rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

---

##### `slo_id`<sup>Required</sup> <a name="slo_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.sloId"></a>

```python
slo_id: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.sloCorrection.SloCorrection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SloCorrectionConfig <a name="SloCorrectionConfig" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import slo_correction

sloCorrection.SloCorrectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  category: str,
  slo_id: str,
  start: typing.Union[int, float],
  description: str = None,
  duration: typing.Union[int, float] = None,
  end: typing.Union[int, float] = None,
  id: str = None,
  rrule: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category">category</a></code> | <code>str</code> | Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId">slo_id</a></code> | <code>str</code> | ID of the SLO that this correction will be applied to. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Starting time of the correction in epoch seconds. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description">description</a></code> | <code>str</code> | Description of the correction being made. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`). |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end">end</a></code> | <code>typing.Union[int, float]</code> | Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#id SloCorrection#id}. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule">rrule</a></code> | <code>str</code> | Recurrence rules as defined in the iCalendar RFC 5545. |
| <code><a href="#@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone">timezone</a></code> | <code>str</code> | The timezone to display in the UI for the correction times (defaults to "UTC"). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.category"></a>

```python
category: str
```

- *Type:* str

Category the SLO correction belongs to. Valid values are `Scheduled Maintenance`, `Outside Business Hours`, `Deployment`, `Other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#category SloCorrection#category}

---

##### `slo_id`<sup>Required</sup> <a name="slo_id" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.sloId"></a>

```python
slo_id: str
```

- *Type:* str

ID of the SLO that this correction will be applied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#slo_id SloCorrection#slo_id}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Starting time of the correction in epoch seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#start SloCorrection#start}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the correction being made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#description SloCorrection#description}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length of time in seconds for a specified `rrule` recurring SLO correction (required if specifying `rrule`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#duration SloCorrection#duration}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Ending time of the correction in epoch seconds. Required for one time corrections, but optional if `rrule` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#end SloCorrection#end}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#id SloCorrection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rrule`<sup>Optional</sup> <a name="rrule" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.rrule"></a>

```python
rrule: str
```

- *Type:* str

Recurrence rules as defined in the iCalendar RFC 5545.

Supported rules for SLO corrections are `FREQ`, `INTERVAL`, `COUNT` and `UNTIL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#rrule SloCorrection#rrule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-datadog.sloCorrection.SloCorrectionConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The timezone to display in the UI for the correction times (defaults to "UTC").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/slo_correction#timezone SloCorrection#timezone}

---



