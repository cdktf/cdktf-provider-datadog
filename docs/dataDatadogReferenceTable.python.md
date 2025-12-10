# `dataDatadogReferenceTable` Submodule <a name="`dataDatadogReferenceTable` Submodule" id="@cdktf/provider-datadog.dataDatadogReferenceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogReferenceTable <a name="DataDatadogReferenceTable" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table datadog_reference_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  schema: DataDatadogReferenceTableSchema = None,
  table_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The UUID of the reference table. Either id or table_name must be specified, but not both. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The name of the reference table. Either id or table_name must be specified, but not both. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.id"></a>

- *Type:* str

The UUID of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#id DataDatadogReferenceTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#schema DataDatadogReferenceTable#schema}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.Initializer.parameter.tableName"></a>

- *Type:* str

The name of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#table_name DataDatadogReferenceTable#table_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_schema` <a name="put_schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema"></a>

```python
def put_schema(
  fields: IResolvable | typing.List[DataDatadogReferenceTableSchemaFields] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.putSchema.parameter.fields"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#fields DataDatadogReferenceTable#fields}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.resetTableName"></a>

```python
def reset_table_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogReferenceTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogReferenceTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogReferenceTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogReferenceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogReferenceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata">file_metadata</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount">row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput">schema_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `file_metadata`<sup>Required</sup> <a name="file_metadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.fileMetadata"></a>

```python
file_metadata: DataDatadogReferenceTableFileMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference">DataDatadogReferenceTableFileMetadataOutputReference</a>

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `row_count`<sup>Required</sup> <a name="row_count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.rowCount"></a>

```python
row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schema"></a>

```python
schema: DataDatadogReferenceTableSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference">DataDatadogReferenceTableSchemaOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.schemaInput"></a>

```python
schema_input: IResolvable | DataDatadogReferenceTableSchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogReferenceTableConfig <a name="DataDatadogReferenceTableConfig" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  schema: DataDatadogReferenceTableSchema = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id">id</a></code> | <code>str</code> | The UUID of the reference table. Either id or table_name must be specified, but not both. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName">table_name</a></code> | <code>str</code> | The name of the reference table. Either id or table_name must be specified, but not both. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The UUID of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#id DataDatadogReferenceTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.schema"></a>

```python
schema: DataDatadogReferenceTableSchema
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#schema DataDatadogReferenceTable#schema}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the reference table. Either id or table_name must be specified, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#table_name DataDatadogReferenceTable#table_name}

---

### DataDatadogReferenceTableFileMetadata <a name="DataDatadogReferenceTableFileMetadata" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata()
```


### DataDatadogReferenceTableFileMetadataAccessDetails <a name="DataDatadogReferenceTableFileMetadataAccessDetails" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails()
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail()
```


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail()
```


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail()
```


### DataDatadogReferenceTableSchema <a name="DataDatadogReferenceTableSchema" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableSchema(
  fields: IResolvable | typing.List[DataDatadogReferenceTableSchemaFields] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields">fields</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]</code> | fields block. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema.property.fields"></a>

```python
fields: IResolvable | typing.List[DataDatadogReferenceTableSchemaFields]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table#fields DataDatadogReferenceTable#fields}

---

### DataDatadogReferenceTableSchemaFields <a name="DataDatadogReferenceTableSchemaFields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName">aws_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_bucket_name`<sup>Required</sup> <a name="aws_bucket_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName"></a>

```python
aws_bucket_name: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId">azure_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName">azure_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName">azure_storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_client_id`<sup>Required</sup> <a name="azure_client_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId"></a>

```python
azure_client_id: str
```

- *Type:* str

---

##### `azure_container_name`<sup>Required</sup> <a name="azure_container_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName"></a>

```python
azure_container_name: str
```

- *Type:* str

---

##### `azure_storage_account_name`<sup>Required</sup> <a name="azure_storage_account_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName"></a>

```python
azure_storage_account_name: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName">gcp_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `gcp_bucket_name`<sup>Required</sup> <a name="gcp_bucket_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName"></a>

```python
gcp_bucket_name: str
```

- *Type:* str

---

##### `gcp_project_id`<sup>Required</sup> <a name="gcp_project_id" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId"></a>

```python
gcp_project_id: str
```

- *Type:* str

---

##### `gcp_service_account_email`<sup>Required</sup> <a name="gcp_service_account_email" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---


### DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference <a name="DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail">aws_detail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail">azure_detail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail">gcp_detail</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails">DataDatadogReferenceTableFileMetadataAccessDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_detail`<sup>Required</sup> <a name="aws_detail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail"></a>

```python
aws_detail: DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a>

---

##### `azure_detail`<sup>Required</sup> <a name="azure_detail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail"></a>

```python
azure_detail: DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a>

---

##### `gcp_detail`<sup>Required</sup> <a name="gcp_detail" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail"></a>

```python
gcp_detail: DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableFileMetadataAccessDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetails">DataDatadogReferenceTableFileMetadataAccessDetails</a>

---


### DataDatadogReferenceTableFileMetadataOutputReference <a name="DataDatadogReferenceTableFileMetadataOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails">access_details</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount">error_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType">error_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled">sync_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata">DataDatadogReferenceTableFileMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_details`<sup>Required</sup> <a name="access_details" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.accessDetails"></a>

```python
access_details: DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference">DataDatadogReferenceTableFileMetadataAccessDetailsOutputReference</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `error_row_count`<sup>Required</sup> <a name="error_row_count" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorRowCount"></a>

```python
error_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_type`<sup>Required</sup> <a name="error_type" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.errorType"></a>

```python
error_type: str
```

- *Type:* str

---

##### `sync_enabled`<sup>Required</sup> <a name="sync_enabled" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.syncEnabled"></a>

```python
sync_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableFileMetadata
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableFileMetadata">DataDatadogReferenceTableFileMetadata</a>

---


### DataDatadogReferenceTableSchemaFieldsList <a name="DataDatadogReferenceTableSchemaFieldsList" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogReferenceTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogReferenceTableSchemaFields]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]

---


### DataDatadogReferenceTableSchemaFieldsOutputReference <a name="DataDatadogReferenceTableSchemaFieldsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableSchemaFields
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>

---


### DataDatadogReferenceTableSchemaOutputReference <a name="DataDatadogReferenceTableSchemaOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table

dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields">reset_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[DataDatadogReferenceTableSchemaFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys">primary_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fields"></a>

```python
fields: DataDatadogReferenceTableSchemaFieldsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFieldsList">DataDatadogReferenceTableSchemaFieldsList</a>

---

##### `primary_keys`<sup>Required</sup> <a name="primary_keys" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.primaryKeys"></a>

```python
primary_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[DataDatadogReferenceTableSchemaFields]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaFields">DataDatadogReferenceTableSchemaFields</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableSchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTable.DataDatadogReferenceTableSchema">DataDatadogReferenceTableSchema</a>

---



