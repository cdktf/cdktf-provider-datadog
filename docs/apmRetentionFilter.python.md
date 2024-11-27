# `apmRetentionFilter` Submodule <a name="`apmRetentionFilter` Submodule" id="@cdktf/provider-datadog.apmRetentionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmRetentionFilter <a name="ApmRetentionFilter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter datadog_apm_retention_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  filter_type: str,
  name: str,
  rate: str,
  filter: ApmRetentionFilterFilter = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | the status of the retention filter. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filterType">filter_type</a></code> | <code>str</code> | The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the retention filter. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.rate">rate</a></code> | <code>str</code> | Sample rate to apply to spans going through this retention filter as a string, a value of 1.0 keeps all spans matching the query. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | filter block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

the status of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#enabled ApmRetentionFilter#enabled}

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filterType"></a>

- *Type:* str

The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#filter_type ApmRetentionFilter#filter_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.name"></a>

- *Type:* str

The name of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#name ApmRetentionFilter#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.rate"></a>

- *Type:* str

Sample rate to apply to spans going through this retention filter as a string, a value of 1.0 keeps all spans matching the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#rate ApmRetentionFilter#rate}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#filter ApmRetentionFilter#filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter"></a>

```python
def put_filter(
  query: str = None
) -> None
```

###### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter.parameter.query"></a>

- *Type:* str

The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration.

Defaults to `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#query ApmRetentionFilter#query}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApmRetentionFilter resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApmRetentionFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApmRetentionFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApmRetentionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmRetentionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference">ApmRetentionFilterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rateInput">rate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rate">rate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filter"></a>

```python
filter: ApmRetentionFilterFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference">ApmRetentionFilterFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, ApmRetentionFilterFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>]

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rateInput"></a>

```python
rate_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rate"></a>

```python
rate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApmRetentionFilterConfig <a name="ApmRetentionFilterConfig" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  filter_type: str,
  name: str,
  rate: str,
  filter: ApmRetentionFilterFilter = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | the status of the retention filter. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filterType">filter_type</a></code> | <code>str</code> | The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.name">name</a></code> | <code>str</code> | The name of the retention filter. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.rate">rate</a></code> | <code>str</code> | Sample rate to apply to spans going through this retention filter as a string, a value of 1.0 keeps all spans matching the query. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

the status of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#enabled ApmRetentionFilter#enabled}

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#filter_type ApmRetentionFilter#filter_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#name ApmRetentionFilter#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.rate"></a>

```python
rate: str
```

- *Type:* str

Sample rate to apply to spans going through this retention filter as a string, a value of 1.0 keeps all spans matching the query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#rate ApmRetentionFilter#rate}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filter"></a>

```python
filter: ApmRetentionFilterFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#filter ApmRetentionFilter#filter}

---

### ApmRetentionFilterFilter <a name="ApmRetentionFilterFilter" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilterFilter(
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.property.query">query</a></code> | <code>str</code> | The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.property.query"></a>

```python
query: str
```

- *Type:* str

The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration.

Defaults to `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.49.0/docs/resources/apm_retention_filter#query ApmRetentionFilter#query}

---

## Classes <a name="Classes" id="Classes"></a>

### ApmRetentionFilterFilterOutputReference <a name="ApmRetentionFilterFilterOutputReference" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import apm_retention_filter

apmRetentionFilter.ApmRetentionFilterFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query` <a name="reset_query" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmRetentionFilterFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>]

---



