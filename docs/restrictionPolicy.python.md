# `datadog_restriction_policy`

Refer to the Terraform Registory for docs: [`datadog_restriction_policy`](https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy).

# `restrictionPolicy` Submodule <a name="`restrictionPolicy` Submodule" id="@cdktf/provider-datadog.restrictionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RestrictionPolicy <a name="RestrictionPolicy" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy datadog_restriction_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_id: str,
  bindings: typing.Union[IResolvable, typing.List[RestrictionPolicyBindings]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Identifier for the resource, formatted as resource_type:resource_id. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.bindings">bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]</code> | bindings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.resourceId"></a>

- *Type:* str

Identifier for the resource, formatted as resource_type:resource_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy#resource_id RestrictionPolicy#resource_id}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.Initializer.parameter.bindings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]

bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy#bindings RestrictionPolicy#bindings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.putBindings">put_bindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetBindings">reset_bindings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_bindings` <a name="put_bindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.putBindings"></a>

```python
def put_bindings(
  value: typing.Union[IResolvable, typing.List[RestrictionPolicyBindings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.putBindings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]

---

##### `reset_bindings` <a name="reset_bindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.resetBindings"></a>

```python
def reset_bindings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList">RestrictionPolicyBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindingsInput">bindings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindings"></a>

```python
bindings: RestrictionPolicyBindingsList
```

- *Type:* <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList">RestrictionPolicyBindingsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `bindings_input`<sup>Optional</sup> <a name="bindings_input" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.bindingsInput"></a>

```python
bindings_input: typing.Union[IResolvable, typing.List[RestrictionPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RestrictionPolicyBindings <a name="RestrictionPolicyBindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicyBindings(
  principals: typing.List[str] = None,
  relation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.principals">principals</a></code> | <code>typing.List[str]</code> | An array of principals. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.relation">relation</a></code> | <code>str</code> | The role/level of access. |

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

An array of principals.

A principal is a subject or group of subjects. Each principal is formatted as `type:id`. Supported types: `role` and `org`. The org ID can be obtained through the api/v2/users API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy#principals RestrictionPolicy#principals}

---

##### `relation`<sup>Optional</sup> <a name="relation" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings.property.relation"></a>

```python
relation: str
```

- *Type:* str

The role/level of access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy#relation RestrictionPolicy#relation}

---

### RestrictionPolicyConfig <a name="RestrictionPolicyConfig" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_id: str,
  bindings: typing.Union[IResolvable, typing.List[RestrictionPolicyBindings]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Identifier for the resource, formatted as resource_type:resource_id. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.bindings">bindings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]</code> | bindings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Identifier for the resource, formatted as resource_type:resource_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy#resource_id RestrictionPolicy#resource_id}

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyConfig.property.bindings"></a>

```python
bindings: typing.Union[IResolvable, typing.List[RestrictionPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]

bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.27.0/docs/resources/restriction_policy#bindings RestrictionPolicy#bindings}

---

## Classes <a name="Classes" id="Classes"></a>

### RestrictionPolicyBindingsList <a name="RestrictionPolicyBindingsList" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicyBindingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RestrictionPolicyBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RestrictionPolicyBindings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]]

---


### RestrictionPolicyBindingsOutputReference <a name="RestrictionPolicyBindingsOutputReference" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import restriction_policy

restrictionPolicy.RestrictionPolicyBindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resetPrincipals">reset_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resetRelation">reset_relation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principals` <a name="reset_principals" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resetPrincipals"></a>

```python
def reset_principals() -> None
```

##### `reset_relation` <a name="reset_relation" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.resetRelation"></a>

```python
def reset_relation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relationInput">relation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relation">relation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation_input`<sup>Optional</sup> <a name="relation_input" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relationInput"></a>

```python
relation_input: str
```

- *Type:* str

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relation`<sup>Required</sup> <a name="relation" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.relation"></a>

```python
relation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RestrictionPolicyBindings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.restrictionPolicy.RestrictionPolicyBindings">RestrictionPolicyBindings</a>]

---


