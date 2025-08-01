# `dataDatadogRoleUsers` Submodule <a name="`dataDatadogRoleUsers` Submodule" id="@cdktf/provider-datadog.dataDatadogRoleUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogRoleUsers <a name="DataDatadogRoleUsers" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users datadog_role_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_id: str,
  exact_match: typing.Union[bool, IResolvable] = None,
  filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.roleId">role_id</a></code> | <code>str</code> | The role's identifier. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.exactMatch">exact_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, `filter_keyword` string is exact matched against the user's `name`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Search query, can be user name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.roleId"></a>

- *Type:* str

The role's identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users#role_id DataDatadogRoleUsers#role_id}

---

##### `exact_match`<sup>Optional</sup> <a name="exact_match" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.exactMatch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, `filter_keyword` string is exact matched against the user's `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users#exact_match DataDatadogRoleUsers#exact_match}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.Initializer.parameter.filter"></a>

- *Type:* str

Search query, can be user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users#filter DataDatadogRoleUsers#filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.resetExactMatch">reset_exact_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_exact_match` <a name="reset_exact_match" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.resetExactMatch"></a>

```python
def reset_exact_match() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogRoleUsers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogRoleUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogRoleUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogRoleUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogRoleUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.roleUsers">role_users</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList">DataDatadogRoleUsersRoleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.exactMatchInput">exact_match_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.exactMatch">exact_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_users`<sup>Required</sup> <a name="role_users" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.roleUsers"></a>

```python
role_users: DataDatadogRoleUsersRoleUsersList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList">DataDatadogRoleUsersRoleUsersList</a>

---

##### `exact_match_input`<sup>Optional</sup> <a name="exact_match_input" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.exactMatchInput"></a>

```python
exact_match_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `exact_match`<sup>Required</sup> <a name="exact_match" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.exactMatch"></a>

```python
exact_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogRoleUsersConfig <a name="DataDatadogRoleUsersConfig" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_id: str,
  exact_match: typing.Union[bool, IResolvable] = None,
  filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.roleId">role_id</a></code> | <code>str</code> | The role's identifier. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.exactMatch">exact_match</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, `filter_keyword` string is exact matched against the user's `name`. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.filter">filter</a></code> | <code>str</code> | Search query, can be user name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

The role's identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users#role_id DataDatadogRoleUsers#role_id}

---

##### `exact_match`<sup>Optional</sup> <a name="exact_match" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.exactMatch"></a>

```python
exact_match: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, `filter_keyword` string is exact matched against the user's `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users#exact_match DataDatadogRoleUsers#exact_match}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Search query, can be user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/data-sources/role_users#filter DataDatadogRoleUsers#filter}

---

### DataDatadogRoleUsersRoleUsers <a name="DataDatadogRoleUsersRoleUsers" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogRoleUsersRoleUsersList <a name="DataDatadogRoleUsersRoleUsersList" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogRoleUsersRoleUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogRoleUsersRoleUsersOutputReference <a name="DataDatadogRoleUsersRoleUsersOutputReference" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_role_users

dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsers">DataDatadogRoleUsersRoleUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogRoleUsersRoleUsers
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogRoleUsers.DataDatadogRoleUsersRoleUsers">DataDatadogRoleUsersRoleUsers</a>

---



