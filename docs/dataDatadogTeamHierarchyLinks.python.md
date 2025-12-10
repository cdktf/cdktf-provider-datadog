# `dataDatadogTeamHierarchyLinks` Submodule <a name="`dataDatadogTeamHierarchyLinks` Submodule" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeamHierarchyLinks <a name="DataDatadogTeamHierarchyLinks" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links datadog_team_hierarchy_links}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_team_hierarchy_links

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter_parent_team: str = None,
  filter_sub_team: str = None,
  link_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterParentTeam">filter_parent_team</a></code> | <code>str</code> | Filter by parent team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterSubTeam">filter_sub_team</a></code> | <code>str</code> | Filter by sub team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.linkId">link_id</a></code> | <code>str</code> | The team hierarchy link’s identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter_parent_team`<sup>Optional</sup> <a name="filter_parent_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterParentTeam"></a>

- *Type:* str

Filter by parent team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_parent_team DataDatadogTeamHierarchyLinks#filter_parent_team}

---

##### `filter_sub_team`<sup>Optional</sup> <a name="filter_sub_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.filterSubTeam"></a>

- *Type:* str

Filter by sub team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_sub_team DataDatadogTeamHierarchyLinks#filter_sub_team}

---

##### `link_id`<sup>Optional</sup> <a name="link_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.Initializer.parameter.linkId"></a>

- *Type:* str

The team hierarchy link’s identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#link_id DataDatadogTeamHierarchyLinks#link_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam">reset_filter_parent_team</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam">reset_filter_sub_team</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId">reset_link_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter_parent_team` <a name="reset_filter_parent_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterParentTeam"></a>

```python
def reset_filter_parent_team() -> None
```

##### `reset_filter_sub_team` <a name="reset_filter_sub_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetFilterSubTeam"></a>

```python
def reset_filter_sub_team() -> None
```

##### `reset_link_id` <a name="reset_link_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.resetLinkId"></a>

```python
def reset_link_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_team_hierarchy_links

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_team_hierarchy_links

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_team_hierarchy_links

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_team_hierarchy_links

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogTeamHierarchyLinks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogTeamHierarchyLinks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogTeamHierarchyLinks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogTeamHierarchyLinks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy">provisioned_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput">filter_parent_team_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput">filter_sub_team_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput">link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam">filter_parent_team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam">filter_sub_team</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provisioned_by`<sup>Required</sup> <a name="provisioned_by" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.provisionedBy"></a>

```python
provisioned_by: str
```

- *Type:* str

---

##### `filter_parent_team_input`<sup>Optional</sup> <a name="filter_parent_team_input" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeamInput"></a>

```python
filter_parent_team_input: str
```

- *Type:* str

---

##### `filter_sub_team_input`<sup>Optional</sup> <a name="filter_sub_team_input" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeamInput"></a>

```python
filter_sub_team_input: str
```

- *Type:* str

---

##### `link_id_input`<sup>Optional</sup> <a name="link_id_input" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkIdInput"></a>

```python
link_id_input: str
```

- *Type:* str

---

##### `filter_parent_team`<sup>Required</sup> <a name="filter_parent_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterParentTeam"></a>

```python
filter_parent_team: str
```

- *Type:* str

---

##### `filter_sub_team`<sup>Required</sup> <a name="filter_sub_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.filterSubTeam"></a>

```python
filter_sub_team: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamHierarchyLinksConfig <a name="DataDatadogTeamHierarchyLinksConfig" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_team_hierarchy_links

dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter_parent_team: str = None,
  filter_sub_team: str = None,
  link_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam">filter_parent_team</a></code> | <code>str</code> | Filter by parent team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam">filter_sub_team</a></code> | <code>str</code> | Filter by sub team ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId">link_id</a></code> | <code>str</code> | The team hierarchy link’s identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `filter_parent_team`<sup>Optional</sup> <a name="filter_parent_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterParentTeam"></a>

```python
filter_parent_team: str
```

- *Type:* str

Filter by parent team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_parent_team DataDatadogTeamHierarchyLinks#filter_parent_team}

---

##### `filter_sub_team`<sup>Optional</sup> <a name="filter_sub_team" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.filterSubTeam"></a>

```python
filter_sub_team: str
```

- *Type:* str

Filter by sub team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#filter_sub_team DataDatadogTeamHierarchyLinks#filter_sub_team}

---

##### `link_id`<sup>Optional</sup> <a name="link_id" id="@cdktf/provider-datadog.dataDatadogTeamHierarchyLinks.DataDatadogTeamHierarchyLinksConfig.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

The team hierarchy link’s identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/team_hierarchy_links#link_id DataDatadogTeamHierarchyLinks#link_id}

---



