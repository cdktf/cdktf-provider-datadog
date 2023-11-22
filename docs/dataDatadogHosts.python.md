# `data_datadog_hosts`

Refer to the Terraform Registory for docs: [`data_datadog_hosts`](https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts).

# `dataDatadogHosts` Submodule <a name="`dataDatadogHosts` Submodule" id="@cdktf/provider-datadog.dataDatadogHosts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogHosts <a name="DataDatadogHosts" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts datadog_hosts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHosts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  from: typing.Union[int, float] = None,
  include_muted_hosts_data: typing.Union[bool, IResolvable] = None,
  sort_dir: str = None,
  sort_field: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.filter">filter</a></code> | <code>str</code> | String to filter search results. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.from">from</a></code> | <code>typing.Union[int, float]</code> | Number of seconds since UNIX epoch from which you want to search your hosts. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.includeMutedHostsData">include_muted_hosts_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include information on the muted status of hosts and when the mute expires. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortDir">sort_dir</a></code> | <code>str</code> | Direction of sort. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortField">sort_field</a></code> | <code>str</code> | Sort hosts by this field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.filter"></a>

- *Type:* str

String to filter search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#filter DataDatadogHosts#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.from"></a>

- *Type:* typing.Union[int, float]

Number of seconds since UNIX epoch from which you want to search your hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#from DataDatadogHosts#from}

---

##### `include_muted_hosts_data`<sup>Optional</sup> <a name="include_muted_hosts_data" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.includeMutedHostsData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include information on the muted status of hosts and when the mute expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#include_muted_hosts_data DataDatadogHosts#include_muted_hosts_data}

---

##### `sort_dir`<sup>Optional</sup> <a name="sort_dir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortDir"></a>

- *Type:* str

Direction of sort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#sort_dir DataDatadogHosts#sort_dir}

---

##### `sort_field`<sup>Optional</sup> <a name="sort_field" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.Initializer.parameter.sortField"></a>

- *Type:* str

Sort hosts by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#sort_field DataDatadogHosts#sort_field}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetIncludeMutedHostsData">reset_include_muted_hosts_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortDir">reset_sort_dir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortField">reset_sort_field</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_from` <a name="reset_from" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_include_muted_hosts_data` <a name="reset_include_muted_hosts_data" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetIncludeMutedHostsData"></a>

```python
def reset_include_muted_hosts_data() -> None
```

##### `reset_sort_dir` <a name="reset_sort_dir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortDir"></a>

```python
def reset_sort_dir() -> None
```

##### `reset_sort_field` <a name="reset_sort_field" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.resetSortField"></a>

```python
def reset_sort_field() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogHosts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHosts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHosts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHosts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHosts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogHosts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogHosts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogHosts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogHosts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.hostList">host_list</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList">DataDatadogHostsHostListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalMatching">total_matching</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalReturned">total_returned</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsDataInput">include_muted_hosts_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDirInput">sort_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortFieldInput">sort_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsData">include_muted_hosts_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDir">sort_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortField">sort_field</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `host_list`<sup>Required</sup> <a name="host_list" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.hostList"></a>

```python
host_list: DataDatadogHostsHostListStructList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList">DataDatadogHostsHostListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `total_matching`<sup>Required</sup> <a name="total_matching" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalMatching"></a>

```python
total_matching: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_returned`<sup>Required</sup> <a name="total_returned" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.totalReturned"></a>

```python
total_returned: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_muted_hosts_data_input`<sup>Optional</sup> <a name="include_muted_hosts_data_input" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsDataInput"></a>

```python
include_muted_hosts_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sort_dir_input`<sup>Optional</sup> <a name="sort_dir_input" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDirInput"></a>

```python
sort_dir_input: str
```

- *Type:* str

---

##### `sort_field_input`<sup>Optional</sup> <a name="sort_field_input" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortFieldInput"></a>

```python
sort_field_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `include_muted_hosts_data`<sup>Required</sup> <a name="include_muted_hosts_data" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.includeMutedHostsData"></a>

```python
include_muted_hosts_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sort_dir`<sup>Required</sup> <a name="sort_dir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortDir"></a>

```python
sort_dir: str
```

- *Type:* str

---

##### `sort_field`<sup>Required</sup> <a name="sort_field" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.sortField"></a>

```python
sort_field: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHosts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogHostsConfig <a name="DataDatadogHostsConfig" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: str = None,
  from: typing.Union[int, float] = None,
  include_muted_hosts_data: typing.Union[bool, IResolvable] = None,
  sort_dir: str = None,
  sort_field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.filter">filter</a></code> | <code>str</code> | String to filter search results. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.from">from</a></code> | <code>typing.Union[int, float]</code> | Number of seconds since UNIX epoch from which you want to search your hosts. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.includeMutedHostsData">include_muted_hosts_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include information on the muted status of hosts and when the mute expires. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortDir">sort_dir</a></code> | <code>str</code> | Direction of sort. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortField">sort_field</a></code> | <code>str</code> | Sort hosts by this field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

String to filter search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#filter DataDatadogHosts#filter}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds since UNIX epoch from which you want to search your hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#from DataDatadogHosts#from}

---

##### `include_muted_hosts_data`<sup>Optional</sup> <a name="include_muted_hosts_data" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.includeMutedHostsData"></a>

```python
include_muted_hosts_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include information on the muted status of hosts and when the mute expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#include_muted_hosts_data DataDatadogHosts#include_muted_hosts_data}

---

##### `sort_dir`<sup>Optional</sup> <a name="sort_dir" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortDir"></a>

```python
sort_dir: str
```

- *Type:* str

Direction of sort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#sort_dir DataDatadogHosts#sort_dir}

---

##### `sort_field`<sup>Optional</sup> <a name="sort_field" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsConfig.property.sortField"></a>

```python
sort_field: str
```

- *Type:* str

Sort hosts by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.33.0/docs/data-sources/hosts#sort_field DataDatadogHosts#sort_field}

---

### DataDatadogHostsHostListMeta <a name="DataDatadogHostsHostListMeta" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsHostListMeta()
```


### DataDatadogHostsHostListMetrics <a name="DataDatadogHostsHostListMetrics" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsHostListMetrics()
```


### DataDatadogHostsHostListStruct <a name="DataDatadogHostsHostListStruct" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsHostListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogHostsHostListMetaOutputReference <a name="DataDatadogHostsHostListMetaOutputReference" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.cpuCores">cpu_cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.gohai">gohai</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.machine">machine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.processor">processor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketFqdn">socket_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketHostname">socket_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta">DataDatadogHostsHostListMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `cpu_cores`<sup>Required</sup> <a name="cpu_cores" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.cpuCores"></a>

```python
cpu_cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gohai`<sup>Required</sup> <a name="gohai" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.gohai"></a>

```python
gohai: str
```

- *Type:* str

---

##### `machine`<sup>Required</sup> <a name="machine" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.machine"></a>

```python
machine: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `processor`<sup>Required</sup> <a name="processor" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.processor"></a>

```python
processor: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `socket_fqdn`<sup>Required</sup> <a name="socket_fqdn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketFqdn"></a>

```python
socket_fqdn: str
```

- *Type:* str

---

##### `socket_hostname`<sup>Required</sup> <a name="socket_hostname" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.socketHostname"></a>

```python
socket_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogHostsHostListMeta
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMeta">DataDatadogHostsHostListMeta</a>

---


### DataDatadogHostsHostListMetricsOutputReference <a name="DataDatadogHostsHostListMetricsOutputReference" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.iowait">iowait</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.load">load</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics">DataDatadogHostsHostListMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iowait`<sup>Required</sup> <a name="iowait" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.iowait"></a>

```python
iowait: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `load`<sup>Required</sup> <a name="load" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.load"></a>

```python
load: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogHostsHostListMetrics
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetrics">DataDatadogHostsHostListMetrics</a>

---


### DataDatadogHostsHostListStructList <a name="DataDatadogHostsHostListStructList" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsHostListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogHostsHostListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogHostsHostListStructOutputReference <a name="DataDatadogHostsHostListStructOutputReference" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_hosts

dataDatadogHosts.DataDatadogHostsHostListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.apps">apps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.awsName">aws_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.isMuted">is_muted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.lastReportedTime">last_reported_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.meta">meta</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference">DataDatadogHostsHostListMetaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference">DataDatadogHostsHostListMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.muteTimeout">mute_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.sources">sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.up">up</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct">DataDatadogHostsHostListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.apps"></a>

```python
apps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aws_name`<sup>Required</sup> <a name="aws_name" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.awsName"></a>

```python
aws_name: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_muted`<sup>Required</sup> <a name="is_muted" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.isMuted"></a>

```python
is_muted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_reported_time`<sup>Required</sup> <a name="last_reported_time" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.lastReportedTime"></a>

```python
last_reported_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `meta`<sup>Required</sup> <a name="meta" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.meta"></a>

```python
meta: DataDatadogHostsHostListMetaOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetaOutputReference">DataDatadogHostsHostListMetaOutputReference</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.metrics"></a>

```python
metrics: DataDatadogHostsHostListMetricsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListMetricsOutputReference">DataDatadogHostsHostListMetricsOutputReference</a>

---

##### `mute_timeout`<sup>Required</sup> <a name="mute_timeout" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.muteTimeout"></a>

```python
mute_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `up`<sup>Required</sup> <a name="up" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.up"></a>

```python
up: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogHostsHostListStruct
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogHosts.DataDatadogHostsHostListStruct">DataDatadogHostsHostListStruct</a>

---



