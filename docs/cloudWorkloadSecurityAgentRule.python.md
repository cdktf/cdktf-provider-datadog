# `cloudWorkloadSecurityAgentRule` Submodule <a name="`cloudWorkloadSecurityAgentRule` Submodule" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudWorkloadSecurityAgentRule <a name="CloudWorkloadSecurityAgentRule" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule datadog_cloud_workload_security_agent_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_workload_security_agent_rule

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expression: str,
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.expression">expression</a></code> | <code>str</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Agent rule. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the Agent rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.expression"></a>

- *Type:* str

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#expression CloudWorkloadSecurityAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#name CloudWorkloadSecurityAgentRule#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.description"></a>

- *Type:* str

The description of the Agent rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#description CloudWorkloadSecurityAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the Agent rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#enabled CloudWorkloadSecurityAgentRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudWorkloadSecurityAgentRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_workload_security_agent_rule

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_workload_security_agent_rule

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_workload_security_agent_rule

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_workload_security_agent_rule

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudWorkloadSecurityAgentRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudWorkloadSecurityAgentRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudWorkloadSecurityAgentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudWorkloadSecurityAgentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudWorkloadSecurityAgentRuleConfig <a name="CloudWorkloadSecurityAgentRuleConfig" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import cloud_workload_security_agent_rule

cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expression: str,
  name: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression">expression</a></code> | <code>str</code> | The SECL expression of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the Agent rule. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description">description</a></code> | <code>str</code> | The description of the Agent rule. Defaults to `""`. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the Agent rule is enabled. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.expression"></a>

```python
expression: str
```

- *Type:* str

The SECL expression of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#expression CloudWorkloadSecurityAgentRule#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Agent rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#name CloudWorkloadSecurityAgentRule#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Agent rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#description CloudWorkloadSecurityAgentRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the Agent rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#enabled CloudWorkloadSecurityAgentRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.cloudWorkloadSecurityAgentRule.CloudWorkloadSecurityAgentRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/cloud_workload_security_agent_rule#id CloudWorkloadSecurityAgentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



