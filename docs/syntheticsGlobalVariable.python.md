# `syntheticsGlobalVariable` Submodule <a name="`syntheticsGlobalVariable` Submodule" id="@cdktf/provider-datadog.syntheticsGlobalVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsGlobalVariable <a name="SyntheticsGlobalVariable" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable datadog_synthetics_global_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariable(
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
  value: str,
  description: str = None,
  id: str = None,
  options: SyntheticsGlobalVariableOptions = None,
  parse_test_id: str = None,
  parse_test_options: SyntheticsGlobalVariableParseTestOptions = None,
  restricted_roles: typing.List[str] = None,
  secure: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.name">name</a></code> | <code>str</code> | Synthetics global variable name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.value">value</a></code> | <code>str</code> | The value of the global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#id SyntheticsGlobalVariable#id}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.parseTestId">parse_test_id</a></code> | <code>str</code> | Id of the Synthetics test to use for a variable from test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.parseTestOptions">parse_test_options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a></code> | parse_test_options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | A list of role identifiers to associate with the Synthetics global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.secure">secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the value of the global variable is hidden. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your synthetics global variable. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.name"></a>

- *Type:* str

Synthetics global variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#name SyntheticsGlobalVariable#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.value"></a>

- *Type:* str

The value of the global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.description"></a>

- *Type:* str

Description of the global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#description SyntheticsGlobalVariable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#id SyntheticsGlobalVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#options SyntheticsGlobalVariable#options}

---

##### `parse_test_id`<sup>Optional</sup> <a name="parse_test_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.parseTestId"></a>

- *Type:* str

Id of the Synthetics test to use for a variable from test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#parse_test_id SyntheticsGlobalVariable#parse_test_id}

---

##### `parse_test_options`<sup>Optional</sup> <a name="parse_test_options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.parseTestOptions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>

parse_test_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#parse_test_options SyntheticsGlobalVariable#parse_test_options}

---

##### `restricted_roles`<sup>Optional</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.restrictedRoles"></a>

- *Type:* typing.List[str]

A list of role identifiers to associate with the Synthetics global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#restricted_roles SyntheticsGlobalVariable#restricted_roles}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.secure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the value of the global variable is hidden. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#secure SyntheticsGlobalVariable#secure}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tags to associate with your synthetics global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#tags SyntheticsGlobalVariable#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions">put_parse_test_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestId">reset_parse_test_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestOptions">reset_parse_test_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetRestrictedRoles">reset_restricted_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetSecure">reset_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_options` <a name="put_options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions"></a>

```python
def put_options(
  totp_parameters: SyntheticsGlobalVariableOptionsTotpParameters = None
) -> None
```

###### `totp_parameters`<sup>Optional</sup> <a name="totp_parameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putOptions.parameter.totpParameters"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>

totp_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#totp_parameters SyntheticsGlobalVariable#totp_parameters}

---

##### `put_parse_test_options` <a name="put_parse_test_options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions"></a>

```python
def put_parse_test_options(
  type: str,
  field: str = None,
  local_variable_name: str = None,
  parser: SyntheticsGlobalVariableParseTestOptionsParser = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions.parameter.type"></a>

- *Type:* str

Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions.parameter.field"></a>

- *Type:* str

Required when type = `http_header`. Defines the header to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#field SyntheticsGlobalVariable#field}

---

###### `local_variable_name`<sup>Optional</sup> <a name="local_variable_name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions.parameter.localVariableName"></a>

- *Type:* str

When type is `local_variable`, name of the local variable to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#local_variable_name SyntheticsGlobalVariable#local_variable_name}

---

###### `parser`<sup>Optional</sup> <a name="parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.putParseTestOptions.parameter.parser"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>

parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#parser SyntheticsGlobalVariable#parser}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_parse_test_id` <a name="reset_parse_test_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestId"></a>

```python
def reset_parse_test_id() -> None
```

##### `reset_parse_test_options` <a name="reset_parse_test_options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetParseTestOptions"></a>

```python
def reset_parse_test_options() -> None
```

##### `reset_restricted_roles` <a name="reset_restricted_roles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetRestrictedRoles"></a>

```python
def reset_restricted_roles() -> None
```

##### `reset_secure` <a name="reset_secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetSecure"></a>

```python
def reset_secure() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SyntheticsGlobalVariable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SyntheticsGlobalVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SyntheticsGlobalVariable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SyntheticsGlobalVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsGlobalVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference">SyntheticsGlobalVariableOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptions">parse_test_options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference">SyntheticsGlobalVariableParseTestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.optionsInput">options_input</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestIdInput">parse_test_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptionsInput">parse_test_options_input</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRolesInput">restricted_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secureInput">secure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestId">parse_test_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secure">secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.options"></a>

```python
options: SyntheticsGlobalVariableOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference">SyntheticsGlobalVariableOptionsOutputReference</a>

---

##### `parse_test_options`<sup>Required</sup> <a name="parse_test_options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptions"></a>

```python
parse_test_options: SyntheticsGlobalVariableParseTestOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference">SyntheticsGlobalVariableParseTestOptionsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.optionsInput"></a>

```python
options_input: SyntheticsGlobalVariableOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>

---

##### `parse_test_id_input`<sup>Optional</sup> <a name="parse_test_id_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestIdInput"></a>

```python
parse_test_id_input: str
```

- *Type:* str

---

##### `parse_test_options_input`<sup>Optional</sup> <a name="parse_test_options_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestOptionsInput"></a>

```python
parse_test_options_input: SyntheticsGlobalVariableParseTestOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>

---

##### `restricted_roles_input`<sup>Optional</sup> <a name="restricted_roles_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRolesInput"></a>

```python
restricted_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure_input`<sup>Optional</sup> <a name="secure_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secureInput"></a>

```python
secure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parse_test_id`<sup>Required</sup> <a name="parse_test_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.parseTestId"></a>

```python
parse_test_id: str
```

- *Type:* str

---

##### `restricted_roles`<sup>Required</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.secure"></a>

```python
secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsGlobalVariableConfig <a name="SyntheticsGlobalVariableConfig" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  value: str,
  description: str = None,
  id: str = None,
  options: SyntheticsGlobalVariableOptions = None,
  parse_test_id: str = None,
  parse_test_options: SyntheticsGlobalVariableParseTestOptions = None,
  restricted_roles: typing.List[str] = None,
  secure: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.name">name</a></code> | <code>str</code> | Synthetics global variable name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.value">value</a></code> | <code>str</code> | The value of the global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.description">description</a></code> | <code>str</code> | Description of the global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#id SyntheticsGlobalVariable#id}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.options">options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestId">parse_test_id</a></code> | <code>str</code> | Id of the Synthetics test to use for a variable from test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestOptions">parse_test_options</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a></code> | parse_test_options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.restrictedRoles">restricted_roles</a></code> | <code>typing.List[str]</code> | A list of role identifiers to associate with the Synthetics global variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.secure">secure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the value of the global variable is hidden. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with your synthetics global variable. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Synthetics global variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#name SyntheticsGlobalVariable#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#description SyntheticsGlobalVariable#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#id SyntheticsGlobalVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.options"></a>

```python
options: SyntheticsGlobalVariableOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#options SyntheticsGlobalVariable#options}

---

##### `parse_test_id`<sup>Optional</sup> <a name="parse_test_id" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestId"></a>

```python
parse_test_id: str
```

- *Type:* str

Id of the Synthetics test to use for a variable from test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#parse_test_id SyntheticsGlobalVariable#parse_test_id}

---

##### `parse_test_options`<sup>Optional</sup> <a name="parse_test_options" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.parseTestOptions"></a>

```python
parse_test_options: SyntheticsGlobalVariableParseTestOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>

parse_test_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#parse_test_options SyntheticsGlobalVariable#parse_test_options}

---

##### `restricted_roles`<sup>Optional</sup> <a name="restricted_roles" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.restrictedRoles"></a>

```python
restricted_roles: typing.List[str]
```

- *Type:* typing.List[str]

A list of role identifiers to associate with the Synthetics global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#restricted_roles SyntheticsGlobalVariable#restricted_roles}

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.secure"></a>

```python
secure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the value of the global variable is hidden. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#secure SyntheticsGlobalVariable#secure}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags to associate with your synthetics global variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#tags SyntheticsGlobalVariable#tags}

---

### SyntheticsGlobalVariableOptions <a name="SyntheticsGlobalVariableOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableOptions(
  totp_parameters: SyntheticsGlobalVariableOptionsTotpParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.property.totpParameters">totp_parameters</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a></code> | totp_parameters block. |

---

##### `totp_parameters`<sup>Optional</sup> <a name="totp_parameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions.property.totpParameters"></a>

```python
totp_parameters: SyntheticsGlobalVariableOptionsTotpParameters
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>

totp_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#totp_parameters SyntheticsGlobalVariable#totp_parameters}

---

### SyntheticsGlobalVariableOptionsTotpParameters <a name="SyntheticsGlobalVariableOptionsTotpParameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters(
  digits: typing.Union[int, float],
  refresh_interval: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | Number of digits for the OTP. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.refreshInterval">refresh_interval</a></code> | <code>typing.Union[int, float]</code> | Interval for which to refresh the token (in seconds). |

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of digits for the OTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#digits SyntheticsGlobalVariable#digits}

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters.property.refreshInterval"></a>

```python
refresh_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Interval for which to refresh the token (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#refresh_interval SyntheticsGlobalVariable#refresh_interval}

---

### SyntheticsGlobalVariableParseTestOptions <a name="SyntheticsGlobalVariableParseTestOptions" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions(
  type: str,
  field: str = None,
  local_variable_name: str = None,
  parser: SyntheticsGlobalVariableParseTestOptionsParser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.type">type</a></code> | <code>str</code> | Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.field">field</a></code> | <code>str</code> | Required when type = `http_header`. Defines the header to use to extract the value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.localVariableName">local_variable_name</a></code> | <code>str</code> | When type is `local_variable`, name of the local variable to use to extract the value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.parser">parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a></code> | parser block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.type"></a>

```python
type: str
```

- *Type:* str

Defines the source to use to extract the value. Valid values are `http_body`, `http_header`, `http_status_code`, `local_variable`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.field"></a>

```python
field: str
```

- *Type:* str

Required when type = `http_header`. Defines the header to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#field SyntheticsGlobalVariable#field}

---

##### `local_variable_name`<sup>Optional</sup> <a name="local_variable_name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.localVariableName"></a>

```python
local_variable_name: str
```

- *Type:* str

When type is `local_variable`, name of the local variable to use to extract the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#local_variable_name SyntheticsGlobalVariable#local_variable_name}

---

##### `parser`<sup>Optional</sup> <a name="parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions.property.parser"></a>

```python
parser: SyntheticsGlobalVariableParseTestOptionsParser
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>

parser block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#parser SyntheticsGlobalVariable#parser}

---

### SyntheticsGlobalVariableParseTestOptionsParser <a name="SyntheticsGlobalVariableParseTestOptionsParser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser(
  type: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.type">type</a></code> | <code>str</code> | Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.value">value</a></code> | <code>str</code> | Value for the parser to use, required for type `json_path` or `regex`. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.type"></a>

```python
type: str
```

- *Type:* str

Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser.property.value"></a>

```python
value: str
```

- *Type:* str

Value for the parser to use, required for type `json_path` or `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsGlobalVariableOptionsOutputReference <a name="SyntheticsGlobalVariableOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters">put_totp_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resetTotpParameters">reset_totp_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_totp_parameters` <a name="put_totp_parameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters"></a>

```python
def put_totp_parameters(
  digits: typing.Union[int, float],
  refresh_interval: typing.Union[int, float]
) -> None
```

###### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters.parameter.digits"></a>

- *Type:* typing.Union[int, float]

Number of digits for the OTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#digits SyntheticsGlobalVariable#digits}

---

###### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.putTotpParameters.parameter.refreshInterval"></a>

- *Type:* typing.Union[int, float]

Interval for which to refresh the token (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#refresh_interval SyntheticsGlobalVariable#refresh_interval}

---

##### `reset_totp_parameters` <a name="reset_totp_parameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.resetTotpParameters"></a>

```python
def reset_totp_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParameters">totp_parameters</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference">SyntheticsGlobalVariableOptionsTotpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParametersInput">totp_parameters_input</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `totp_parameters`<sup>Required</sup> <a name="totp_parameters" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParameters"></a>

```python
totp_parameters: SyntheticsGlobalVariableOptionsTotpParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference">SyntheticsGlobalVariableOptionsTotpParametersOutputReference</a>

---

##### `totp_parameters_input`<sup>Optional</sup> <a name="totp_parameters_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.totpParametersInput"></a>

```python
totp_parameters_input: SyntheticsGlobalVariableOptionsTotpParameters
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SyntheticsGlobalVariableOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptions">SyntheticsGlobalVariableOptions</a>

---


### SyntheticsGlobalVariableOptionsTotpParametersOutputReference <a name="SyntheticsGlobalVariableOptionsTotpParametersOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digitsInput">digits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshIntervalInput">refresh_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshInterval">refresh_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digits_input`<sup>Optional</sup> <a name="digits_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digitsInput"></a>

```python
digits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_interval_input`<sup>Optional</sup> <a name="refresh_interval_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshIntervalInput"></a>

```python
refresh_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.refreshInterval"></a>

```python
refresh_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParametersOutputReference.property.internalValue"></a>

```python
internal_value: SyntheticsGlobalVariableOptionsTotpParameters
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableOptionsTotpParameters">SyntheticsGlobalVariableOptionsTotpParameters</a>

---


### SyntheticsGlobalVariableParseTestOptionsOutputReference <a name="SyntheticsGlobalVariableParseTestOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser">put_parser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetField">reset_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetLocalVariableName">reset_local_variable_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetParser">reset_parser</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parser` <a name="put_parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser"></a>

```python
def put_parser(
  type: str,
  value: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser.parameter.type"></a>

- *Type:* str

Type of parser to extract the value. Valid values are `raw`, `json_path`, `regex`, `x_path`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#type SyntheticsGlobalVariable#type}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.putParser.parameter.value"></a>

- *Type:* str

Value for the parser to use, required for type `json_path` or `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.50.0/docs/resources/synthetics_global_variable#value SyntheticsGlobalVariable#value}

---

##### `reset_field` <a name="reset_field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetField"></a>

```python
def reset_field() -> None
```

##### `reset_local_variable_name` <a name="reset_local_variable_name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetLocalVariableName"></a>

```python
def reset_local_variable_name() -> None
```

##### `reset_parser` <a name="reset_parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.resetParser"></a>

```python
def reset_parser() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parser">parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference">SyntheticsGlobalVariableParseTestOptionsParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableNameInput">local_variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parserInput">parser_input</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableName">local_variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parser"></a>

```python
parser: SyntheticsGlobalVariableParseTestOptionsParserOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference">SyntheticsGlobalVariableParseTestOptionsParserOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `local_variable_name_input`<sup>Optional</sup> <a name="local_variable_name_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableNameInput"></a>

```python
local_variable_name_input: str
```

- *Type:* str

---

##### `parser_input`<sup>Optional</sup> <a name="parser_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.parserInput"></a>

```python
parser_input: SyntheticsGlobalVariableParseTestOptionsParser
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `local_variable_name`<sup>Required</sup> <a name="local_variable_name" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.localVariableName"></a>

```python
local_variable_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsOutputReference.property.internalValue"></a>

```python
internal_value: SyntheticsGlobalVariableParseTestOptions
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptions">SyntheticsGlobalVariableParseTestOptions</a>

---


### SyntheticsGlobalVariableParseTestOptionsParserOutputReference <a name="SyntheticsGlobalVariableParseTestOptionsParserOutputReference" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import synthetics_global_variable

syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParserOutputReference.property.internalValue"></a>

```python
internal_value: SyntheticsGlobalVariableParseTestOptionsParser
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsGlobalVariable.SyntheticsGlobalVariableParseTestOptionsParser">SyntheticsGlobalVariableParseTestOptionsParser</a>

---



