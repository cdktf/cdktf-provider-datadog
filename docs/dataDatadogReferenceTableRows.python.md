# `dataDatadogReferenceTableRows` Submodule <a name="`dataDatadogReferenceTableRows` Submodule" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogReferenceTableRows <a name="DataDatadogReferenceTableRows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows datadog_reference_table_rows}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  row_ids: typing.List[str],
  table_id: str,
  rows: IResolvable | typing.List[DataDatadogReferenceTableRowsRows] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rowIds">row_ids</a></code> | <code>typing.List[str]</code> | List of primary key values (row IDs) to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.tableId">table_id</a></code> | <code>str</code> | The UUID of the reference table to query rows from. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rows">rows</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]</code> | rows block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `row_ids`<sup>Required</sup> <a name="row_ids" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rowIds"></a>

- *Type:* typing.List[str]

List of primary key values (row IDs) to retrieve.

These are the values of the table's primary key field(s). Maximum 250 IDs per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#row_ids DataDatadogReferenceTableRows#row_ids}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.tableId"></a>

- *Type:* str

The UUID of the reference table to query rows from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#table_id DataDatadogReferenceTableRows#table_id}

---

##### `rows`<sup>Optional</sup> <a name="rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.Initializer.parameter.rows"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]

rows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#rows DataDatadogReferenceTableRows#rows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows">put_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetRows">reset_rows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rows` <a name="put_rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows"></a>

```python
def put_rows(
  value: IResolvable | typing.List[DataDatadogReferenceTableRowsRows]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.putRows.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]

---

##### `reset_rows` <a name="reset_rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.resetRows"></a>

```python
def reset_rows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatadogReferenceTableRows resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatadogReferenceTableRows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatadogReferenceTableRows to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatadogReferenceTableRows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatadogReferenceTableRows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rows">rows</a></code> | <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList">DataDatadogReferenceTableRowsRowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIdsInput">row_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowsInput">rows_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIds">row_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rows"></a>

```python
rows: DataDatadogReferenceTableRowsRowsList
```

- *Type:* <a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList">DataDatadogReferenceTableRowsRowsList</a>

---

##### `row_ids_input`<sup>Optional</sup> <a name="row_ids_input" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIdsInput"></a>

```python
row_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowsInput"></a>

```python
rows_input: IResolvable | typing.List[DataDatadogReferenceTableRowsRows]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `row_ids`<sup>Required</sup> <a name="row_ids" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.rowIds"></a>

```python
row_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRows.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogReferenceTableRowsConfig <a name="DataDatadogReferenceTableRowsConfig" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  row_ids: typing.List[str],
  table_id: str,
  rows: IResolvable | typing.List[DataDatadogReferenceTableRowsRows] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rowIds">row_ids</a></code> | <code>typing.List[str]</code> | List of primary key values (row IDs) to retrieve. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.tableId">table_id</a></code> | <code>str</code> | The UUID of the reference table to query rows from. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rows">rows</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]</code> | rows block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `row_ids`<sup>Required</sup> <a name="row_ids" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rowIds"></a>

```python
row_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of primary key values (row IDs) to retrieve.

These are the values of the table's primary key field(s). Maximum 250 IDs per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#row_ids DataDatadogReferenceTableRows#row_ids}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The UUID of the reference table to query rows from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#table_id DataDatadogReferenceTableRows#table_id}

---

##### `rows`<sup>Optional</sup> <a name="rows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsConfig.property.rows"></a>

```python
rows: IResolvable | typing.List[DataDatadogReferenceTableRowsRows]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]

rows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/data-sources/reference_table_rows#rows DataDatadogReferenceTableRows#rows}

---

### DataDatadogReferenceTableRowsRows <a name="DataDatadogReferenceTableRowsRows" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogReferenceTableRowsRowsList <a name="DataDatadogReferenceTableRowsRowsList" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatadogReferenceTableRowsRowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatadogReferenceTableRowsRows]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>]

---


### DataDatadogReferenceTableRowsRowsOutputReference <a name="DataDatadogReferenceTableRowsRowsOutputReference" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import data_datadog_reference_table_rows

dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.values">values</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.values"></a>

```python
values: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRowsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatadogReferenceTableRowsRows
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.dataDatadogReferenceTableRows.DataDatadogReferenceTableRowsRows">DataDatadogReferenceTableRowsRows</a>

---



