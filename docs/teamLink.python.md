# `datadog_team_link`

Refer to the Terraform Registory for docs: [`datadog_team_link`](https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link).

# `teamLink` Submodule <a name="`teamLink` Submodule" id="@cdktf/provider-datadog.teamLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamLink <a name="TeamLink" id="@cdktf/provider-datadog.teamLink.TeamLink"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link datadog_team_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import team_link

teamLink.TeamLink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  team_id: str,
  url: str,
  position: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.label">label</a></code> | <code>str</code> | The link's label. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | ID of the team the link is associated with. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.url">url</a></code> | <code>str</code> | The URL for the link. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.position">position</a></code> | <code>typing.Union[int, float]</code> | The link's position, used to sort links for the team. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.label"></a>

- *Type:* str

The link's label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#label TeamLink#label}

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.teamId"></a>

- *Type:* str

ID of the team the link is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#team_id TeamLink#team_id}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.url"></a>

- *Type:* str

The URL for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#url TeamLink#url}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-datadog.teamLink.TeamLink.Initializer.parameter.position"></a>

- *Type:* typing.Union[int, float]

The link's position, used to sort links for the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#position TeamLink#position}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.resetPosition">reset_position</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.teamLink.TeamLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.teamLink.TeamLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.teamLink.TeamLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.teamLink.TeamLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.teamLink.TeamLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.teamLink.TeamLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.teamLink.TeamLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.teamLink.TeamLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.teamLink.TeamLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.teamLink.TeamLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_position` <a name="reset_position" id="@cdktf/provider-datadog.teamLink.TeamLink.resetPosition"></a>

```python
def reset_position() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.teamLink.TeamLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import team_link

teamLink.TeamLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.teamLink.TeamLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.teamLink.TeamLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import team_link

teamLink.TeamLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.teamLink.TeamLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.teamLink.TeamLink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import team_link

teamLink.TeamLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.teamLink.TeamLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.teamLink.TeamLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.teamLink.TeamLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.teamLink.TeamLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.teamLink.TeamLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.teamLink.TeamLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.teamLink.TeamLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.teamLink.TeamLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.teamLink.TeamLink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.teamLink.TeamLink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.teamLink.TeamLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.teamLink.TeamLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.teamLink.TeamLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.teamLink.TeamLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.teamLink.TeamLink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.teamLink.TeamLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-datadog.teamLink.TeamLink.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-datadog.teamLink.TeamLink.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-datadog.teamLink.TeamLink.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-datadog.teamLink.TeamLink.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-datadog.teamLink.TeamLink.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-datadog.teamLink.TeamLink.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-datadog.teamLink.TeamLink.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.teamLink.TeamLink.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.teamLink.TeamLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamLinkConfig <a name="TeamLinkConfig" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import team_link

teamLink.TeamLinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  team_id: str,
  url: str,
  position: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.label">label</a></code> | <code>str</code> | The link's label. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.teamId">team_id</a></code> | <code>str</code> | ID of the team the link is associated with. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.url">url</a></code> | <code>str</code> | The URL for the link. |
| <code><a href="#@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.position">position</a></code> | <code>typing.Union[int, float]</code> | The link's position, used to sort links for the team. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.label"></a>

```python
label: str
```

- *Type:* str

The link's label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#label TeamLink#label}

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

ID of the team the link is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#team_id TeamLink#team_id}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The URL for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#url TeamLink#url}

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-datadog.teamLink.TeamLinkConfig.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The link's position, used to sort links for the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.26.0/docs/resources/team_link#position TeamLink#position}

---


