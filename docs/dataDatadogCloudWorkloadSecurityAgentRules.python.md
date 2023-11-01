# `data_datadog_cloud_workload_security_agent_rules`

Refer to the Terraform Registory for docs: [`data_datadog_cloud_workload_security_agent_rules`](https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/cloud_workload_security_agent_rules).

# `dataDatadogCloudWorkloadSecurityAgentRules` Submodule <a name="`dataDatadogCloudWorkloadSecurityAgentRules` Submodule" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCloudWorkloadSecurityAgentRules <a name="DataDatadogCloudWorkloadSecurityAgentRules" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/cloud_workload_security_agent_rules datadog_cloud_workload_security_agent_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules(
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogCloudWorkloadSecurityAgentRules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogCloudWorkloadSecurityAgentRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogCloudWorkloadSecurityAgentRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogCloudWorkloadSecurityAgentRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/cloud_workload_security_agent_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogCloudWorkloadSecurityAgentRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.agentRules">agent_rules</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList">DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_rules`<sup>Required</sup> <a name="agent_rules" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.agentRules"></a>

```python
agent_rules: DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList">DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCloudWorkloadSecurityAgentRulesAgentRules <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRules" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules()
```


### DataDatadogCloudWorkloadSecurityAgentRulesConfig <a name="DataDatadogCloudWorkloadSecurityAgentRulesConfig" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig(
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.32.0/docs/data-sources/cloud_workload_security_agent_rules#id DataDatadogCloudWorkloadSecurityAgentRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference <a name="DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_cloud_workload_security_agent_rules

dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules">DataDatadogCloudWorkloadSecurityAgentRulesAgentRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogCloudWorkloadSecurityAgentRulesAgentRules
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogCloudWorkloadSecurityAgentRules.DataDatadogCloudWorkloadSecurityAgentRulesAgentRules">DataDatadogCloudWorkloadSecurityAgentRulesAgentRules</a>

---



