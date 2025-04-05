# `syntheticsPrivateLocation` Submodule <a name="`syntheticsPrivateLocation` Submodule" id="@cdktf/provider-datadog.syntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsPrivateLocation <a name="SyntheticsPrivateLocation" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location datadog_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation(
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
  description: str = None,
  metadata: typing.Union[IResolvable, typing.List[SyntheticsPrivateLocationMetadata]] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Synthetics private location name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the private location. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your synthetics private location. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.name"></a>

- *Type:* str

Synthetics private location name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#name SyntheticsPrivateLocation#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.description"></a>

- *Type:* str

Description of the private location. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#description SyntheticsPrivateLocation#description}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.metadata"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#metadata SyntheticsPrivateLocation#metadata}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tags to associate with your synthetics private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#tags SyntheticsPrivateLocation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.putMetadata"></a>

```python
def put_metadata(
  value: typing.Union[IResolvable, typing.List[SyntheticsPrivateLocationMetadata]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.putMetadata.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SyntheticsPrivateLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SyntheticsPrivateLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SyntheticsPrivateLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsPrivateLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.config">config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList">SyntheticsPrivateLocationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadataInput">metadata_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.config"></a>

```python
config: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadata"></a>

```python
metadata: SyntheticsPrivateLocationMetadataList
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList">SyntheticsPrivateLocationMetadataList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadataInput"></a>

```python
metadata_input: typing.Union[IResolvable, typing.List[SyntheticsPrivateLocationMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsPrivateLocationConfig <a name="SyntheticsPrivateLocationConfig" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  metadata: typing.Union[IResolvable, typing.List[SyntheticsPrivateLocationMetadata]] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name">name</a></code> | <code>str</code> | Synthetics private location name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description">description</a></code> | <code>str</code> | Description of the private location. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your synthetics private location. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Synthetics private location name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#name SyntheticsPrivateLocation#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the private location. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#description SyntheticsPrivateLocation#description}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.metadata"></a>

```python
metadata: typing.Union[IResolvable, typing.List[SyntheticsPrivateLocationMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#metadata SyntheticsPrivateLocation#metadata}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags to associate with your synthetics private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#tags SyntheticsPrivateLocation#tags}

---

### SyntheticsPrivateLocationMetadata <a name="SyntheticsPrivateLocationMetadata" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata(
  restricted_roles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | A set of role identifiers pulled from the Roles API to restrict read and write access. |

---

##### `restricted_roles`<sup>Optional</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

A set of role identifiers pulled from the Roles API to restrict read and write access.

**Deprecated.** This field is no longer supported by the Datadog API. Please use `datadog_restriction_policy` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.1/docs/resources/synthetics_private_location#restricted_roles SyntheticsPrivateLocation#restricted_roles}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsPrivateLocationMetadataList <a name="SyntheticsPrivateLocationMetadataList" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SyntheticsPrivateLocationMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SyntheticsPrivateLocationMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]]

---


### SyntheticsPrivateLocationMetadataOutputReference <a name="SyntheticsPrivateLocationMetadataOutputReference" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_private_location

syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resetRestrictedRoles">reset_restricted_roles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_restricted_roles` <a name="reset_restricted_roles" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resetRestrictedRoles"></a>

```python
def reset_restricted_roles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRolesInput">restricted_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restricted_roles_input`<sup>Optional</sup> <a name="restricted_roles_input" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRolesInput"></a>

```python
restricted_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_roles`<sup>Required</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SyntheticsPrivateLocationMetadata]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>]

---



