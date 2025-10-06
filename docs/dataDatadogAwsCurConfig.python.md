# `dataDatadogAwsCurConfig` Submodule <a name="`dataDatadogAwsCurConfig` Submodule" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAwsCurConfig <a name="DataDatadogAwsCurConfig" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/aws_cur_config datadog_aws_cur_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig(
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.cloudAccountId">cloud_account_id</a></code> | <code>typing.Union[int, float]</code> | The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.cloudAccountId"></a>

- *Type:* typing.Union[int, float]

The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/aws_cur_config#cloud_account_id DataDatadogAwsCurConfig#cloud_account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogAwsCurConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogAwsCurConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogAwsCurConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogAwsCurConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/aws_cur_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogAwsCurConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountFilters">account_filters</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference">DataDatadogAwsCurConfigAccountFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.errorMessages">error_messages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportName">report_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportPrefix">report_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.statusUpdatedAt">status_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountIdInput">cloud_account_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountId">cloud_account_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_filters`<sup>Required</sup> <a name="account_filters" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountFilters"></a>

```python
account_filters: DataDatadogAwsCurConfigAccountFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference">DataDatadogAwsCurConfigAccountFiltersOutputReference</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.errorMessages"></a>

```python
error_messages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

---

##### `report_prefix`<sup>Required</sup> <a name="report_prefix" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportPrefix"></a>

```python
report_prefix: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_updated_at`<sup>Required</sup> <a name="status_updated_at" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.statusUpdatedAt"></a>

```python
status_updated_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `cloud_account_id_input`<sup>Optional</sup> <a name="cloud_account_id_input" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountIdInput"></a>

```python
cloud_account_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountId"></a>

```python
cloud_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAwsCurConfigAccountFilters <a name="DataDatadogAwsCurConfigAccountFilters" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters()
```


### DataDatadogAwsCurConfigConfig <a name="DataDatadogAwsCurConfigConfig" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig(
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
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.cloudAccountId">cloud_account_id</a></code> | <code>typing.Union[int, float]</code> | The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `cloud_account_id`<sup>Required</sup> <a name="cloud_account_id" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.cloudAccountId"></a>

```python
cloud_account_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.75.0/docs/data-sources/aws_cur_config#cloud_account_id DataDatadogAwsCurConfig#cloud_account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogAwsCurConfigAccountFiltersOutputReference <a name="DataDatadogAwsCurConfigAccountFiltersOutputReference" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_aws_cur_config

dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includedAccounts">included_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts">include_new_accounts</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters">DataDatadogAwsCurConfigAccountFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_accounts`<sup>Required</sup> <a name="included_accounts" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includedAccounts"></a>

```python
included_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_new_accounts`<sup>Required</sup> <a name="include_new_accounts" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts"></a>

```python
include_new_accounts: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogAwsCurConfigAccountFilters
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters">DataDatadogAwsCurConfigAccountFilters</a>

---



