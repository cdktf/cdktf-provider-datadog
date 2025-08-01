# `monitorConfigPolicy` Submodule <a name="`monitorConfigPolicy` Submodule" id="@cdktf/provider-datadog.monitorConfigPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorConfigPolicy <a name="MonitorConfigPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy datadog_monitor_config_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_type: str,
  id: str = None,
  tag_policy: MonitorConfigPolicyTagPolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.policyType">policy_type</a></code> | <code>str</code> | The monitor config policy type Valid values are `tag`. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.tagPolicy">tag_policy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | tag_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.policyType"></a>

- *Type:* str

The monitor config policy type Valid values are `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#policy_type MonitorConfigPolicy#policy_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tag_policy`<sup>Optional</sup> <a name="tag_policy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.Initializer.parameter.tagPolicy"></a>

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

tag_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#tag_policy MonitorConfigPolicy#tag_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy">put_tag_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy">reset_tag_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tag_policy` <a name="put_tag_policy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy"></a>

```python
def put_tag_policy(
  tag_key: str,
  tag_key_required: typing.Union[bool, IResolvable],
  valid_tag_values: typing.List[str]
) -> None
```

###### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy.parameter.tagKey"></a>

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#tag_key MonitorConfigPolicy#tag_key}

---

###### `tag_key_required`<sup>Required</sup> <a name="tag_key_required" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy.parameter.tagKeyRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a tag key is required for monitor creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#tag_key_required MonitorConfigPolicy#tag_key_required}

---

###### `valid_tag_values`<sup>Required</sup> <a name="valid_tag_values" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.putTagPolicy.parameter.validTagValues"></a>

- *Type:* typing.List[str]

Valid values for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#valid_tag_values MonitorConfigPolicy#valid_tag_values}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tag_policy` <a name="reset_tag_policy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.resetTagPolicy"></a>

```python
def reset_tag_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MonitorConfigPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MonitorConfigPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MonitorConfigPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MonitorConfigPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorConfigPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy">tag_policy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput">tag_policy_input</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tag_policy`<sup>Required</sup> <a name="tag_policy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicy"></a>

```python
tag_policy: MonitorConfigPolicyTagPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference">MonitorConfigPolicyTagPolicyOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `tag_policy_input`<sup>Optional</sup> <a name="tag_policy_input" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tagPolicyInput"></a>

```python
tag_policy_input: MonitorConfigPolicyTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorConfigPolicyConfig <a name="MonitorConfigPolicyConfig" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_type: str,
  id: str = None,
  tag_policy: MonitorConfigPolicyTagPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType">policy_type</a></code> | <code>str</code> | The monitor config policy type Valid values are `tag`. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy">tag_policy</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | tag_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

The monitor config policy type Valid values are `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#policy_type MonitorConfigPolicy#policy_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#id MonitorConfigPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tag_policy`<sup>Optional</sup> <a name="tag_policy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyConfig.property.tagPolicy"></a>

```python
tag_policy: MonitorConfigPolicyTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

tag_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#tag_policy MonitorConfigPolicy#tag_policy}

---

### MonitorConfigPolicyTagPolicy <a name="MonitorConfigPolicyTagPolicy" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicyTagPolicy(
  tag_key: str,
  tag_key_required: typing.Union[bool, IResolvable],
  valid_tag_values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey">tag_key</a></code> | <code>str</code> | The key of the tag. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired">tag_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a tag key is required for monitor creation. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues">valid_tag_values</a></code> | <code>typing.List[str]</code> | Valid values for the tag. |

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#tag_key MonitorConfigPolicy#tag_key}

---

##### `tag_key_required`<sup>Required</sup> <a name="tag_key_required" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.tagKeyRequired"></a>

```python
tag_key_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a tag key is required for monitor creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#tag_key_required MonitorConfigPolicy#tag_key_required}

---

##### `valid_tag_values`<sup>Required</sup> <a name="valid_tag_values" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy.property.validTagValues"></a>

```python
valid_tag_values: typing.List[str]
```

- *Type:* typing.List[str]

Valid values for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/monitor_config_policy#valid_tag_values MonitorConfigPolicy#valid_tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorConfigPolicyTagPolicyOutputReference <a name="MonitorConfigPolicyTagPolicyOutputReference" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import monitor_config_policy

monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput">tag_key_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput">valid_tag_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired">tag_key_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues">valid_tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_key_required_input`<sup>Optional</sup> <a name="tag_key_required_input" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequiredInput"></a>

```python
tag_key_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_tag_values_input`<sup>Optional</sup> <a name="valid_tag_values_input" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValuesInput"></a>

```python
valid_tag_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_key_required`<sup>Required</sup> <a name="tag_key_required" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.tagKeyRequired"></a>

```python
tag_key_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `valid_tag_values`<sup>Required</sup> <a name="valid_tag_values" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.validTagValues"></a>

```python
valid_tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MonitorConfigPolicyTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.monitorConfigPolicy.MonitorConfigPolicyTagPolicy">MonitorConfigPolicyTagPolicy</a>

---



