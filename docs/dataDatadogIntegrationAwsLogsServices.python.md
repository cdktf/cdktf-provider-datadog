# `dataDatadogIntegrationAwsLogsServices` Submodule <a name="`dataDatadogIntegrationAwsLogsServices` Submodule" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogIntegrationAwsLogsServices <a name="DataDatadogIntegrationAwsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/d/integration_aws_logs_services datadog_integration_aws_logs_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.awsLogsServices">aws_logs_services</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList">DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `aws_logs_services`<sup>Required</sup> <a name="aws_logs_services" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.awsLogsServices"></a>

```python
aws_logs_services: DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList">DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogIntegrationAwsLogsServicesAwsLogsServices <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServices" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices()
```


### DataDatadogIntegrationAwsLogsServicesConfig <a name="DataDatadogIntegrationAwsLogsServicesConfig" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/integration_aws_logs_services#id DataDatadogIntegrationAwsLogsServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference <a name="DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_integration_aws_logs_services

dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices">DataDatadogIntegrationAwsLogsServicesAwsLogsServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatadogIntegrationAwsLogsServicesAwsLogsServices
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogIntegrationAwsLogsServices.DataDatadogIntegrationAwsLogsServicesAwsLogsServices">DataDatadogIntegrationAwsLogsServicesAwsLogsServices</a>

---



