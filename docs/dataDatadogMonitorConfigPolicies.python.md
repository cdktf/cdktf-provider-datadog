# `data_datadog_monitor_config_policies`

Refer to the Terraform Registory for docs: [`data_datadog_monitor_config_policies`](https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/monitor_config_policies).

# `dataDatadogMonitorConfigPolicies` Submodule <a name="`dataDatadogMonitorConfigPolicies` Submodule" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogMonitorConfigPolicies <a name="DataDatadogMonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/monitor_config_policies datadog_monitor_config_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogMonitorConfigPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogMonitorConfigPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogMonitorConfigPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogMonitorConfigPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/monitor_config_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogMonitorConfigPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.monitorConfigPolicies">monitor_config_policies</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `monitor_config_policies`<sup>Required</sup> <a name="monitor_config_policies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.monitorConfigPolicies"></a>

```python
monitor_config_policies: DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogMonitorConfigPoliciesConfig <a name="DataDatadogMonitorConfigPoliciesConfig" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/monitor_config_policies#id DataDatadogMonitorConfigPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogMonitorConfigPoliciesMonitorConfigPolicies <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPolicies" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies()
```


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.tagPolicy">tag_policy</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies">DataDatadogMonitorConfigPoliciesMonitorConfigPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `tag_policy`<sup>Required</sup> <a name="tag_policy" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.tagPolicy"></a>

```python
tag_policy: DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogMonitorConfigPoliciesMonitorConfigPolicies
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPolicies">DataDatadogMonitorConfigPoliciesMonitorConfigPolicies</a>

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference <a name="DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_monitor_config_policies

dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKeyRequired">tag_key_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.validTagValues">valid_tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_key_required`<sup>Required</sup> <a name="tag_key_required" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.tagKeyRequired"></a>

```python
tag_key_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `valid_tag_values`<sup>Required</sup> <a name="valid_tag_values" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.validTagValues"></a>

```python
valid_tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogMonitorConfigPolicies.DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy">DataDatadogMonitorConfigPoliciesMonitorConfigPoliciesTagPolicy</a>

---



