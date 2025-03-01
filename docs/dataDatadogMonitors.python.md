# `dataDatadogMonitors` Submodule <a name="`dataDatadogMonitors` Submodule" id="@cdktf/provider-datadog.dataDatadogMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMonitors <a name="DataDatadogMonitors" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors datadog_monitors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitors(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  monitor_tags_filter: typing.List[str] = None,
  name_filter: str = None,
  tags_filter: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#id DataDatadogMonitors#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.monitorTagsFilter">monitor_tags_filter</a></code> | <code>typing.List[str]</code> | A list of monitor tags to limit the search. This filters on the tags set on the monitor itself. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.nameFilter">name_filter</a></code> | <code>str</code> | A monitor name to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.tagsFilter">tags_filter</a></code> | <code>typing.List[str]</code> | A list of tags to limit the search. This filters on the monitor scope. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#id DataDatadogMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor_tags_filter`<sup>Optional</sup> <a name="monitor_tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.monitorTagsFilter"></a>

- *Type:* typing.List[str]

A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#monitor_tags_filter DataDatadogMonitors#monitor_tags_filter}

---

##### `name_filter`<sup>Optional</sup> <a name="name_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.nameFilter"></a>

- *Type:* str

A monitor name to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#name_filter DataDatadogMonitors#name_filter}

---

##### `tags_filter`<sup>Optional</sup> <a name="tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.Initializer.parameter.tagsFilter"></a>

- *Type:* typing.List[str]

A list of tags to limit the search. This filters on the monitor scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#tags_filter DataDatadogMonitors#tags_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetMonitorTagsFilter">reset_monitor_tags_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetNameFilter">reset_name_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetTagsFilter">reset_tags_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_monitor_tags_filter` <a name="reset_monitor_tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetMonitorTagsFilter"></a>

```python
def reset_monitor_tags_filter() -> None
```

##### `reset_name_filter` <a name="reset_name_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetNameFilter"></a>

```python
def reset_name_filter() -> None
```

##### `reset_tags_filter` <a name="reset_tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.resetTagsFilter"></a>

```python
def reset_tags_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogMonitors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitors">monitors</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList">DataDatadogMonitorsMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilterInput">monitor_tags_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilterInput">name_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilterInput">tags_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilter">monitor_tags_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilter">name_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilter">tags_filter</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitors"></a>

```python
monitors: DataDatadogMonitorsMonitorsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList">DataDatadogMonitorsMonitorsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `monitor_tags_filter_input`<sup>Optional</sup> <a name="monitor_tags_filter_input" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilterInput"></a>

```python
monitor_tags_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_filter_input`<sup>Optional</sup> <a name="name_filter_input" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilterInput"></a>

```python
name_filter_input: str
```

- *Type:* str

---

##### `tags_filter_input`<sup>Optional</sup> <a name="tags_filter_input" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilterInput"></a>

```python
tags_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `monitor_tags_filter`<sup>Required</sup> <a name="monitor_tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.monitorTagsFilter"></a>

```python
monitor_tags_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_filter`<sup>Required</sup> <a name="name_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.nameFilter"></a>

```python
name_filter: str
```

- *Type:* str

---

##### `tags_filter`<sup>Required</sup> <a name="tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tagsFilter"></a>

```python
tags_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMonitorsConfig <a name="DataDatadogMonitorsConfig" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  monitor_tags_filter: typing.List[str] = None,
  name_filter: str = None,
  tags_filter: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#id DataDatadogMonitors#id}. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.monitorTagsFilter">monitor_tags_filter</a></code> | <code>typing.List[str]</code> | A list of monitor tags to limit the search. This filters on the tags set on the monitor itself. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.nameFilter">name_filter</a></code> | <code>str</code> | A monitor name to limit the search. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.tagsFilter">tags_filter</a></code> | <code>typing.List[str]</code> | A list of tags to limit the search. This filters on the monitor scope. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#id DataDatadogMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor_tags_filter`<sup>Optional</sup> <a name="monitor_tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.monitorTagsFilter"></a>

```python
monitor_tags_filter: typing.List[str]
```

- *Type:* typing.List[str]

A list of monitor tags to limit the search. This filters on the tags set on the monitor itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#monitor_tags_filter DataDatadogMonitors#monitor_tags_filter}

---

##### `name_filter`<sup>Optional</sup> <a name="name_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.nameFilter"></a>

```python
name_filter: str
```

- *Type:* str

A monitor name to limit the search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#name_filter DataDatadogMonitors#name_filter}

---

##### `tags_filter`<sup>Optional</sup> <a name="tags_filter" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsConfig.property.tagsFilter"></a>

```python
tags_filter: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags to limit the search. This filters on the monitor scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.57.0/docs/data-sources/monitors#tags_filter DataDatadogMonitors#tags_filter}

---

### DataDatadogMonitorsMonitors <a name="DataDatadogMonitorsMonitors" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitorsMonitors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMonitorsMonitorsList <a name="DataDatadogMonitorsMonitorsList" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitorsMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogMonitorsMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogMonitorsMonitorsOutputReference <a name="DataDatadogMonitorsMonitorsOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitors

dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors">DataDatadogMonitorsMonitors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogMonitorsMonitors
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitors.DataDatadogMonitorsMonitors">DataDatadogMonitorsMonitors</a>

---



