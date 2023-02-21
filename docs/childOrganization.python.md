# `childOrganization` Submodule <a name="`childOrganization` Submodule" id="@cdktf/provider-datadog.childOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChildOrganization <a name="ChildOrganization" id="@cdktf/provider-datadog.childOrganization.ChildOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/child_organization datadog_child_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.name">name</a></code> | <code>str</code> | Name for Child Organization after creation. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/child_organization#id ChildOrganization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.name"></a>

- *Type:* str

Name for Child Organization after creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/child_organization#name ChildOrganization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/child_organization#id ChildOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.apiKey">api_key</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList">ChildOrganizationApiKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.applicationKey">application_key</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList">ChildOrganizationApplicationKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.publicId">public_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList">ChildOrganizationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.user">user</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList">ChildOrganizationUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.apiKey"></a>

```python
api_key: ChildOrganizationApiKeyList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList">ChildOrganizationApiKeyList</a>

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.applicationKey"></a>

```python
application_key: ChildOrganizationApplicationKeyList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList">ChildOrganizationApplicationKeyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `public_id`<sup>Required</sup> <a name="public_id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.publicId"></a>

```python
public_id: str
```

- *Type:* str

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.settings"></a>

```python
settings: ChildOrganizationSettingsList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList">ChildOrganizationSettingsList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.user"></a>

```python
user: ChildOrganizationUserList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList">ChildOrganizationUserList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.childOrganization.ChildOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChildOrganizationApiKey <a name="ChildOrganizationApiKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationApiKey()
```


### ChildOrganizationApplicationKey <a name="ChildOrganizationApplicationKey" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationApplicationKey()
```


### ChildOrganizationConfig <a name="ChildOrganizationConfig" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.name">name</a></code> | <code>str</code> | Name for Child Organization after creation. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/child_organization#id ChildOrganization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name for Child Organization after creation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/child_organization#name ChildOrganization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/child_organization#id ChildOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChildOrganizationSettings <a name="ChildOrganizationSettings" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettings()
```


### ChildOrganizationSettingsSaml <a name="ChildOrganizationSettingsSaml" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSaml()
```


### ChildOrganizationSettingsSamlAutocreateUsersDomains <a name="ChildOrganizationSettingsSamlAutocreateUsersDomains" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains()
```


### ChildOrganizationSettingsSamlIdpInitiatedLogin <a name="ChildOrganizationSettingsSamlIdpInitiatedLogin" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin()
```


### ChildOrganizationSettingsSamlStrictMode <a name="ChildOrganizationSettingsSamlStrictMode" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlStrictMode()
```


### ChildOrganizationUser <a name="ChildOrganizationUser" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUser.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationUser()
```


## Classes <a name="Classes" id="Classes"></a>

### ChildOrganizationApiKeyList <a name="ChildOrganizationApiKeyList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationApiKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationApiKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationApiKeyOutputReference <a name="ChildOrganizationApiKeyOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey">ChildOrganizationApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationApiKey
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApiKey">ChildOrganizationApiKey</a>

---


### ChildOrganizationApplicationKeyList <a name="ChildOrganizationApplicationKeyList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationApplicationKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationApplicationKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationApplicationKeyOutputReference <a name="ChildOrganizationApplicationKeyOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationApplicationKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.hash">hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey">ChildOrganizationApplicationKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.hash"></a>

```python
hash: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKeyOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationApplicationKey
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationApplicationKey">ChildOrganizationApplicationKey</a>

---


### ChildOrganizationSettingsList <a name="ChildOrganizationSettingsList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationSettingsOutputReference <a name="ChildOrganizationSettingsOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.privateWidgetShare">private_widget_share</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList">ChildOrganizationSettingsSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateAccessRole">saml_autocreate_access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateUsersDomains">saml_autocreate_users_domains</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList">ChildOrganizationSettingsSamlAutocreateUsersDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlCanBeEnabled">saml_can_be_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpEndpoint">saml_idp_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpInitiatedLogin">saml_idp_initiated_login</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList">ChildOrganizationSettingsSamlIdpInitiatedLoginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpMetadataUploaded">saml_idp_metadata_uploaded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlLoginUrl">saml_login_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlStrictMode">saml_strict_mode</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList">ChildOrganizationSettingsSamlStrictModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings">ChildOrganizationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_widget_share`<sup>Required</sup> <a name="private_widget_share" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.privateWidgetShare"></a>

```python
private_widget_share: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.saml"></a>

```python
saml: ChildOrganizationSettingsSamlList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList">ChildOrganizationSettingsSamlList</a>

---

##### `saml_autocreate_access_role`<sup>Required</sup> <a name="saml_autocreate_access_role" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```python
saml_autocreate_access_role: str
```

- *Type:* str

---

##### `saml_autocreate_users_domains`<sup>Required</sup> <a name="saml_autocreate_users_domains" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```python
saml_autocreate_users_domains: ChildOrganizationSettingsSamlAutocreateUsersDomainsList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList">ChildOrganizationSettingsSamlAutocreateUsersDomainsList</a>

---

##### `saml_can_be_enabled`<sup>Required</sup> <a name="saml_can_be_enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlCanBeEnabled"></a>

```python
saml_can_be_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `saml_idp_endpoint`<sup>Required</sup> <a name="saml_idp_endpoint" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpEndpoint"></a>

```python
saml_idp_endpoint: str
```

- *Type:* str

---

##### `saml_idp_initiated_login`<sup>Required</sup> <a name="saml_idp_initiated_login" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```python
saml_idp_initiated_login: ChildOrganizationSettingsSamlIdpInitiatedLoginList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList">ChildOrganizationSettingsSamlIdpInitiatedLoginList</a>

---

##### `saml_idp_metadata_uploaded`<sup>Required</sup> <a name="saml_idp_metadata_uploaded" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```python
saml_idp_metadata_uploaded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `saml_login_url`<sup>Required</sup> <a name="saml_login_url" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlLoginUrl"></a>

```python
saml_login_url: str
```

- *Type:* str

---

##### `saml_strict_mode`<sup>Required</sup> <a name="saml_strict_mode" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.samlStrictMode"></a>

```python
saml_strict_mode: ChildOrganizationSettingsSamlStrictModeList
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList">ChildOrganizationSettingsSamlStrictModeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationSettings
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettings">ChildOrganizationSettings</a>

---


### ChildOrganizationSettingsSamlAutocreateUsersDomainsList <a name="ChildOrganizationSettingsSamlAutocreateUsersDomainsList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference <a name="ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains">ChildOrganizationSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationSettingsSamlAutocreateUsersDomains
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlAutocreateUsersDomains">ChildOrganizationSettingsSamlAutocreateUsersDomains</a>

---


### ChildOrganizationSettingsSamlIdpInitiatedLoginList <a name="ChildOrganizationSettingsSamlIdpInitiatedLoginList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference <a name="ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin">ChildOrganizationSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationSettingsSamlIdpInitiatedLogin
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlIdpInitiatedLogin">ChildOrganizationSettingsSamlIdpInitiatedLogin</a>

---


### ChildOrganizationSettingsSamlList <a name="ChildOrganizationSettingsSamlList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationSettingsSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationSettingsSamlOutputReference <a name="ChildOrganizationSettingsSamlOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml">ChildOrganizationSettingsSaml</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationSettingsSaml
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSaml">ChildOrganizationSettingsSaml</a>

---


### ChildOrganizationSettingsSamlStrictModeList <a name="ChildOrganizationSettingsSamlStrictModeList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlStrictModeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationSettingsSamlStrictModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationSettingsSamlStrictModeOutputReference <a name="ChildOrganizationSettingsSamlStrictModeOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode">ChildOrganizationSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationSettingsSamlStrictMode
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationSettingsSamlStrictMode">ChildOrganizationSettingsSamlStrictMode</a>

---


### ChildOrganizationUserList <a name="ChildOrganizationUserList" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChildOrganizationUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChildOrganizationUserOutputReference <a name="ChildOrganizationUserOutputReference" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import child_organization

childOrganization.ChildOrganizationUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.accessRole">access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUser">ChildOrganizationUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.childOrganization.ChildOrganizationUserOutputReference.property.internalValue"></a>

```python
internal_value: ChildOrganizationUser
```

- *Type:* <a href="#@cdktf/provider-datadog.childOrganization.ChildOrganizationUser">ChildOrganizationUser</a>

---



