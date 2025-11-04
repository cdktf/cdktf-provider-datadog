# `dataDatadogAzureUcConfig` Submodule <a name="`dataDatadogAzureUcConfig` Submodule" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAzureUcConfig <a name="DataDatadogAzureUcConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_account_id: typing.Union[int, float]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.cloudAccountId">cloud_account_id</a></code> | <code>typing.Union[int, float]</code> | The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.cloudAccountId"></a>

- *Type:* typing.Union[int, float]

The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogAzureUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogAzureUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogAzureUcConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogAzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogAzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig">actual_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig">amortized_bill_config</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages">error_messages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt">status_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput">cloud_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId">cloud_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `actual_bill_config`<sup>Required</sup> <a name="actual_bill_config" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig"></a>

```python
actual_bill_config: DataDatadogAzureUcConfigActualBillConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a>

---

##### `amortized_bill_config`<sup>Required</sup> <a name="amortized_bill_config" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig"></a>

```python
amortized_bill_config: DataDatadogAzureUcConfigAmortizedBillConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages"></a>

```python
error_messages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_updated_at`<sup>Required</sup> <a name="status_updated_at" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt"></a>

```python
status_updated_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `cloud_account_id_input`<sup>Optional</sup> <a name="cloud_account_id_input" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput"></a>

```python
cloud_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId"></a>

```python
cloud_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAzureUcConfigActualBillConfig <a name="DataDatadogAzureUcConfigActualBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig()
```


### DataDatadogAzureUcConfigAmortizedBillConfig <a name="DataDatadogAzureUcConfigAmortizedBillConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig()
```


### DataDatadogAzureUcConfigConfig <a name="DataDatadogAzureUcConfigConfig" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cloud_account_id: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId">cloud_account_id</a></code> | <code>typing.Union[int, float]</code> | The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId"></a>

```python
cloud_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogAzureUcConfigActualBillConfigOutputReference <a name="DataDatadogAzureUcConfigActualBillConfigOutputReference" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName">export_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath">export_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer">storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```python
export_name: str
```

- *Type:* str

---

##### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```python
export_path: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```python
storage_container: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogAzureUcConfigActualBillConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a>

---


### DataDatadogAzureUcConfigAmortizedBillConfigOutputReference <a name="DataDatadogAzureUcConfigAmortizedBillConfigOutputReference" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_azure_uc_config

dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName">export_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">export_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">storage_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_name`<sup>Required</sup> <a name="export_name" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```python
export_name: str
```

- *Type:* str

---

##### `export_path`<sup>Required</sup> <a name="export_path" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```python
export_path: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `storage_container`<sup>Required</sup> <a name="storage_container" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```python
storage_container: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogAzureUcConfigAmortizedBillConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a>

---



