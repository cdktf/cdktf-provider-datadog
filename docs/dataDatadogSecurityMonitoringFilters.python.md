# `dataDatadogSecurityMonitoringFilters` Submodule <a name="`dataDatadogSecurityMonitoringFilters` Submodule" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringFilters <a name="DataDatadogSecurityMonitoringFilters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/data-sources/security_monitoring_filters datadog_security_monitoring_filters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters(
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogSecurityMonitoringFilters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogSecurityMonitoringFilters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogSecurityMonitoringFilters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogSecurityMonitoringFilters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/data-sources/security_monitoring_filters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringFilters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList">DataDatadogSecurityMonitoringFiltersFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filtersIds">filters_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filters"></a>

```python
filters: DataDatadogSecurityMonitoringFiltersFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList">DataDatadogSecurityMonitoringFiltersFiltersList</a>

---

##### `filters_ids`<sup>Required</sup> <a name="filters_ids" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.filtersIds"></a>

```python
filters_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFilters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringFiltersConfig <a name="DataDatadogSecurityMonitoringFiltersConfig" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig(
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.38.0/docs/data-sources/security_monitoring_filters#id DataDatadogSecurityMonitoringFilters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogSecurityMonitoringFiltersFilters <a name="DataDatadogSecurityMonitoringFiltersFilters" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters()
```


### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference <a name="DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilter</a>

---


### DataDatadogSecurityMonitoringFiltersFiltersList <a name="DataDatadogSecurityMonitoringFiltersFiltersList" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogSecurityMonitoringFiltersFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogSecurityMonitoringFiltersFiltersOutputReference <a name="DataDatadogSecurityMonitoringFiltersFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_security_monitoring_filters

dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.exclusionFilter">exclusion_filter</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.filteredDataType">filtered_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters">DataDatadogSecurityMonitoringFiltersFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusion_filter`<sup>Required</sup> <a name="exclusion_filter" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.exclusionFilter"></a>

```python
exclusion_filter: DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList">DataDatadogSecurityMonitoringFiltersFiltersExclusionFilterList</a>

---

##### `filtered_data_type`<sup>Required</sup> <a name="filtered_data_type" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.filteredDataType"></a>

```python
filtered_data_type: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogSecurityMonitoringFiltersFilters
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogSecurityMonitoringFilters.DataDatadogSecurityMonitoringFiltersFilters">DataDatadogSecurityMonitoringFiltersFilters</a>

---



