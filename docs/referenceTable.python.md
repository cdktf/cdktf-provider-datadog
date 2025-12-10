# `referenceTable` Submodule <a name="`referenceTable` Submodule" id="@cdktf/provider-datadog.referenceTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ReferenceTable <a name="ReferenceTable" id="@cdktf/provider-datadog.referenceTable.ReferenceTable"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table datadog_reference_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source: str,
  table_name: str,
  description: str = None,
  file_metadata: ReferenceTableFileMetadata = None,
  schema: ReferenceTableSchema = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.source">source</a></code> | <code>str</code> | The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | The name of the reference table. This must be unique within your organization. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the reference table. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.fileMetadata">file_metadata</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | file_metadata block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with the reference table. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.source"></a>

- *Type:* str

The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#source ReferenceTable#source}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.tableName"></a>

- *Type:* str

The name of the reference table. This must be unique within your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#table_name ReferenceTable#table_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.description"></a>

- *Type:* str

The description of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#description ReferenceTable#description}

---

##### `file_metadata`<sup>Optional</sup> <a name="file_metadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.fileMetadata"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

file_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_metadata ReferenceTable#file_metadata}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#schema ReferenceTable#schema}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

A list of tags to associate with the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#tags ReferenceTable#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata">put_file_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetFileMetadata">reset_file_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_file_metadata` <a name="put_file_metadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata"></a>

```python
def put_file_metadata(
  sync_enabled: bool | IResolvable,
  access_details: ReferenceTableFileMetadataAccessDetails = None
) -> None
```

###### `sync_enabled`<sup>Required</sup> <a name="sync_enabled" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata.parameter.syncEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Whether this table should automatically sync with the cloud storage source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#sync_enabled ReferenceTable#sync_enabled}

---

###### `access_details`<sup>Optional</sup> <a name="access_details" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putFileMetadata.parameter.accessDetails"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#access_details ReferenceTable#access_details}

---

##### `put_schema` <a name="put_schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema"></a>

```python
def put_schema(
  fields: IResolvable | typing.List[ReferenceTableSchemaFields] = None,
  primary_keys: typing.List[str] = None
) -> None
```

###### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema.parameter.fields"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#fields ReferenceTable#fields}

---

###### `primary_keys`<sup>Optional</sup> <a name="primary_keys" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.putSchema.parameter.primaryKeys"></a>

- *Type:* typing.List[str]

List of field names that serve as primary keys for the table. Currently only one primary key is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#primary_keys ReferenceTable#primary_keys}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_file_metadata` <a name="reset_file_metadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetFileMetadata"></a>

```python
def reset_file_metadata() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ReferenceTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ReferenceTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ReferenceTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ReferenceTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ReferenceTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadata">file_metadata</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference">ReferenceTableFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.rowCount">row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference">ReferenceTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadataInput">file_metadata_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schemaInput">schema_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `file_metadata`<sup>Required</sup> <a name="file_metadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadata"></a>

```python
file_metadata: ReferenceTableFileMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference">ReferenceTableFileMetadataOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `row_count`<sup>Required</sup> <a name="row_count" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.rowCount"></a>

```python
row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schema"></a>

```python
schema: ReferenceTableSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference">ReferenceTableSchemaOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `file_metadata_input`<sup>Optional</sup> <a name="file_metadata_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.fileMetadataInput"></a>

```python
file_metadata_input: IResolvable | ReferenceTableFileMetadata
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.schemaInput"></a>

```python
schema_input: IResolvable | ReferenceTableSchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.referenceTable.ReferenceTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ReferenceTableConfig <a name="ReferenceTableConfig" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  source: str,
  table_name: str,
  description: str = None,
  file_metadata: ReferenceTableFileMetadata = None,
  schema: ReferenceTableSchema = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.source">source</a></code> | <code>str</code> | The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tableName">table_name</a></code> | <code>str</code> | The name of the reference table. This must be unique within your organization. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.description">description</a></code> | <code>str</code> | The description of the reference table. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.fileMetadata">file_metadata</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | file_metadata block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | A list of tags to associate with the reference table. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.source"></a>

```python
source: str
```

- *Type:* str

The source type for the reference table. Valid values are `S3`, `GCS`, `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#source ReferenceTable#source}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the reference table. This must be unique within your organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#table_name ReferenceTable#table_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#description ReferenceTable#description}

---

##### `file_metadata`<sup>Optional</sup> <a name="file_metadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.fileMetadata"></a>

```python
file_metadata: ReferenceTableFileMetadata
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

file_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_metadata ReferenceTable#file_metadata}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.schema"></a>

```python
schema: ReferenceTableSchema
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#schema ReferenceTable#schema}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.referenceTable.ReferenceTableConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

A list of tags to associate with the reference table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#tags ReferenceTable#tags}

---

### ReferenceTableFileMetadata <a name="ReferenceTableFileMetadata" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadata(
  sync_enabled: bool | IResolvable,
  access_details: ReferenceTableFileMetadataAccessDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.syncEnabled">sync_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether this table should automatically sync with the cloud storage source. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.accessDetails">access_details</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a></code> | access_details block. |

---

##### `sync_enabled`<sup>Required</sup> <a name="sync_enabled" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.syncEnabled"></a>

```python
sync_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether this table should automatically sync with the cloud storage source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#sync_enabled ReferenceTable#sync_enabled}

---

##### `access_details`<sup>Optional</sup> <a name="access_details" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata.property.accessDetails"></a>

```python
access_details: ReferenceTableFileMetadataAccessDetails
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

access_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#access_details ReferenceTable#access_details}

---

### ReferenceTableFileMetadataAccessDetails <a name="ReferenceTableFileMetadataAccessDetails" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetails(
  aws_detail: ReferenceTableFileMetadataAccessDetailsAwsDetail = None,
  azure_detail: ReferenceTableFileMetadataAccessDetailsAzureDetail = None,
  gcp_detail: ReferenceTableFileMetadataAccessDetailsGcpDetail = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.awsDetail">aws_detail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | aws_detail block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.azureDetail">azure_detail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | azure_detail block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.gcpDetail">gcp_detail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | gcp_detail block. |

---

##### `aws_detail`<sup>Optional</sup> <a name="aws_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.awsDetail"></a>

```python
aws_detail: ReferenceTableFileMetadataAccessDetailsAwsDetail
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

aws_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_detail ReferenceTable#aws_detail}

---

##### `azure_detail`<sup>Optional</sup> <a name="azure_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.azureDetail"></a>

```python
azure_detail: ReferenceTableFileMetadataAccessDetailsAzureDetail
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

azure_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_detail ReferenceTable#azure_detail}

---

##### `gcp_detail`<sup>Optional</sup> <a name="gcp_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails.property.gcpDetail"></a>

```python
gcp_detail: ReferenceTableFileMetadataAccessDetailsGcpDetail
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

gcp_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_detail ReferenceTable#gcp_detail}

---

### ReferenceTableFileMetadataAccessDetailsAwsDetail <a name="ReferenceTableFileMetadataAccessDetailsAwsDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail(
  aws_account_id: str = None,
  aws_bucket_name: str = None,
  file_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | The ID of the AWS account. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsBucketName">aws_bucket_name</a></code> | <code>str</code> | The name of the AWS S3 bucket. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.filePath">file_path</a></code> | <code>str</code> | The relative file path from the AWS S3 bucket root to the CSV file. |

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

The ID of the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_account_id ReferenceTable#aws_account_id}

---

##### `aws_bucket_name`<sup>Optional</sup> <a name="aws_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.awsBucketName"></a>

```python
aws_bucket_name: str
```

- *Type:* str

The name of the AWS S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_bucket_name ReferenceTable#aws_bucket_name}

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

The relative file path from the AWS S3 bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

### ReferenceTableFileMetadataAccessDetailsAzureDetail <a name="ReferenceTableFileMetadataAccessDetailsAzureDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail(
  azure_client_id: str = None,
  azure_container_name: str = None,
  azure_storage_account_name: str = None,
  azure_tenant_id: str = None,
  file_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureClientId">azure_client_id</a></code> | <code>str</code> | The Azure client ID (application ID). |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureContainerName">azure_container_name</a></code> | <code>str</code> | The name of the Azure container. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureStorageAccountName">azure_storage_account_name</a></code> | <code>str</code> | The name of the Azure storage account. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | The ID of the Azure tenant. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.filePath">file_path</a></code> | <code>str</code> | The relative file path from the Azure container root to the CSV file. |

---

##### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureClientId"></a>

```python
azure_client_id: str
```

- *Type:* str

The Azure client ID (application ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_client_id ReferenceTable#azure_client_id}

---

##### `azure_container_name`<sup>Optional</sup> <a name="azure_container_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureContainerName"></a>

```python
azure_container_name: str
```

- *Type:* str

The name of the Azure container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_container_name ReferenceTable#azure_container_name}

---

##### `azure_storage_account_name`<sup>Optional</sup> <a name="azure_storage_account_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureStorageAccountName"></a>

```python
azure_storage_account_name: str
```

- *Type:* str

The name of the Azure storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_storage_account_name ReferenceTable#azure_storage_account_name}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

The ID of the Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_tenant_id ReferenceTable#azure_tenant_id}

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

The relative file path from the Azure container root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

### ReferenceTableFileMetadataAccessDetailsGcpDetail <a name="ReferenceTableFileMetadataAccessDetailsGcpDetail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail(
  file_path: str = None,
  gcp_bucket_name: str = None,
  gcp_project_id: str = None,
  gcp_service_account_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.filePath">file_path</a></code> | <code>str</code> | The relative file path from the GCS bucket root to the CSV file. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpBucketName">gcp_bucket_name</a></code> | <code>str</code> | The name of the GCP bucket. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | The ID of the GCP project. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | The email of the GCP service account used to access the bucket. |

---

##### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

The relative file path from the GCS bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

##### `gcp_bucket_name`<sup>Optional</sup> <a name="gcp_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpBucketName"></a>

```python
gcp_bucket_name: str
```

- *Type:* str

The name of the GCP bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_bucket_name ReferenceTable#gcp_bucket_name}

---

##### `gcp_project_id`<sup>Optional</sup> <a name="gcp_project_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpProjectId"></a>

```python
gcp_project_id: str
```

- *Type:* str

The ID of the GCP project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_project_id ReferenceTable#gcp_project_id}

---

##### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

The email of the GCP service account used to access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_service_account_email ReferenceTable#gcp_service_account_email}

---

### ReferenceTableSchema <a name="ReferenceTableSchema" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableSchema(
  fields: IResolvable | typing.List[ReferenceTableSchemaFields] = None,
  primary_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.fields">fields</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]</code> | fields block. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.primaryKeys">primary_keys</a></code> | <code>typing.List[str]</code> | List of field names that serve as primary keys for the table. Currently only one primary key is supported. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.fields"></a>

```python
fields: IResolvable | typing.List[ReferenceTableSchemaFields]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#fields ReferenceTable#fields}

---

##### `primary_keys`<sup>Optional</sup> <a name="primary_keys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchema.property.primaryKeys"></a>

```python
primary_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of field names that serve as primary keys for the table. Currently only one primary key is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#primary_keys ReferenceTable#primary_keys}

---

### ReferenceTableSchemaFields <a name="ReferenceTableSchemaFields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableSchemaFields(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.name">name</a></code> | <code>str</code> | The name of the field. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.type">type</a></code> | <code>str</code> | The data type of the field. Must be one of: STRING, INT32. Valid values are `STRING`, `INT32`. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#name ReferenceTable#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields.property.type"></a>

```python
type: str
```

- *Type:* str

The data type of the field. Must be one of: STRING, INT32. Valid values are `STRING`, `INT32`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#type ReferenceTable#type}

---

## Classes <a name="Classes" id="Classes"></a>

### ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsBucketName">reset_aws_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetFilePath">reset_file_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_aws_bucket_name` <a name="reset_aws_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetAwsBucketName"></a>

```python
def reset_aws_bucket_name() -> None
```

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.resetFilePath"></a>

```python
def reset_file_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketNameInput">aws_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName">aws_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `aws_bucket_name_input`<sup>Optional</sup> <a name="aws_bucket_name_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketNameInput"></a>

```python
aws_bucket_name_input: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_bucket_name`<sup>Required</sup> <a name="aws_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.awsBucketName"></a>

```python
aws_bucket_name: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReferenceTableFileMetadataAccessDetailsAwsDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---


### ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureClientId">reset_azure_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureContainerName">reset_azure_container_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureStorageAccountName">reset_azure_storage_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetFilePath">reset_file_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_client_id` <a name="reset_azure_client_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureClientId"></a>

```python
def reset_azure_client_id() -> None
```

##### `reset_azure_container_name` <a name="reset_azure_container_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureContainerName"></a>

```python
def reset_azure_container_name() -> None
```

##### `reset_azure_storage_account_name` <a name="reset_azure_storage_account_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureStorageAccountName"></a>

```python
def reset_azure_storage_account_name() -> None
```

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.resetFilePath"></a>

```python
def reset_file_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientIdInput">azure_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerNameInput">azure_container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountNameInput">azure_storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId">azure_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName">azure_container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName">azure_storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_client_id_input`<sup>Optional</sup> <a name="azure_client_id_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientIdInput"></a>

```python
azure_client_id_input: str
```

- *Type:* str

---

##### `azure_container_name_input`<sup>Optional</sup> <a name="azure_container_name_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerNameInput"></a>

```python
azure_container_name_input: str
```

- *Type:* str

---

##### `azure_storage_account_name_input`<sup>Optional</sup> <a name="azure_storage_account_name_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountNameInput"></a>

```python
azure_storage_account_name_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `azure_client_id`<sup>Required</sup> <a name="azure_client_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureClientId"></a>

```python
azure_client_id: str
```

- *Type:* str

---

##### `azure_container_name`<sup>Required</sup> <a name="azure_container_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureContainerName"></a>

```python
azure_container_name: str
```

- *Type:* str

---

##### `azure_storage_account_name`<sup>Required</sup> <a name="azure_storage_account_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureStorageAccountName"></a>

```python
azure_storage_account_name: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReferenceTableFileMetadataAccessDetailsAzureDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---


### ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference <a name="ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetFilePath">reset_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpBucketName">reset_gcp_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpProjectId">reset_gcp_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpServiceAccountEmail">reset_gcp_service_account_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_file_path` <a name="reset_file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetFilePath"></a>

```python
def reset_file_path() -> None
```

##### `reset_gcp_bucket_name` <a name="reset_gcp_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpBucketName"></a>

```python
def reset_gcp_bucket_name() -> None
```

##### `reset_gcp_project_id` <a name="reset_gcp_project_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpProjectId"></a>

```python
def reset_gcp_project_id() -> None
```

##### `reset_gcp_service_account_email` <a name="reset_gcp_service_account_email" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.resetGcpServiceAccountEmail"></a>

```python
def reset_gcp_service_account_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePathInput">file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketNameInput">gcp_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectIdInput">gcp_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmailInput">gcp_service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName">gcp_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail">gcp_service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_path_input`<sup>Optional</sup> <a name="file_path_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePathInput"></a>

```python
file_path_input: str
```

- *Type:* str

---

##### `gcp_bucket_name_input`<sup>Optional</sup> <a name="gcp_bucket_name_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketNameInput"></a>

```python
gcp_bucket_name_input: str
```

- *Type:* str

---

##### `gcp_project_id_input`<sup>Optional</sup> <a name="gcp_project_id_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectIdInput"></a>

```python
gcp_project_id_input: str
```

- *Type:* str

---

##### `gcp_service_account_email_input`<sup>Optional</sup> <a name="gcp_service_account_email_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmailInput"></a>

```python
gcp_service_account_email_input: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `gcp_bucket_name`<sup>Required</sup> <a name="gcp_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpBucketName"></a>

```python
gcp_bucket_name: str
```

- *Type:* str

---

##### `gcp_project_id`<sup>Required</sup> <a name="gcp_project_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpProjectId"></a>

```python
gcp_project_id: str
```

- *Type:* str

---

##### `gcp_service_account_email`<sup>Required</sup> <a name="gcp_service_account_email" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.gcpServiceAccountEmail"></a>

```python
gcp_service_account_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReferenceTableFileMetadataAccessDetailsGcpDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---


### ReferenceTableFileMetadataAccessDetailsOutputReference <a name="ReferenceTableFileMetadataAccessDetailsOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail">put_aws_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail">put_azure_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail">put_gcp_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAwsDetail">reset_aws_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAzureDetail">reset_azure_detail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetGcpDetail">reset_gcp_detail</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_detail` <a name="put_aws_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail"></a>

```python
def put_aws_detail(
  aws_account_id: str = None,
  aws_bucket_name: str = None,
  file_path: str = None
) -> None
```

###### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail.parameter.awsAccountId"></a>

- *Type:* str

The ID of the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_account_id ReferenceTable#aws_account_id}

---

###### `aws_bucket_name`<sup>Optional</sup> <a name="aws_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail.parameter.awsBucketName"></a>

- *Type:* str

The name of the AWS S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_bucket_name ReferenceTable#aws_bucket_name}

---

###### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAwsDetail.parameter.filePath"></a>

- *Type:* str

The relative file path from the AWS S3 bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

##### `put_azure_detail` <a name="put_azure_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail"></a>

```python
def put_azure_detail(
  azure_client_id: str = None,
  azure_container_name: str = None,
  azure_storage_account_name: str = None,
  azure_tenant_id: str = None,
  file_path: str = None
) -> None
```

###### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail.parameter.azureClientId"></a>

- *Type:* str

The Azure client ID (application ID).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_client_id ReferenceTable#azure_client_id}

---

###### `azure_container_name`<sup>Optional</sup> <a name="azure_container_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail.parameter.azureContainerName"></a>

- *Type:* str

The name of the Azure container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_container_name ReferenceTable#azure_container_name}

---

###### `azure_storage_account_name`<sup>Optional</sup> <a name="azure_storage_account_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail.parameter.azureStorageAccountName"></a>

- *Type:* str

The name of the Azure storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_storage_account_name ReferenceTable#azure_storage_account_name}

---

###### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail.parameter.azureTenantId"></a>

- *Type:* str

The ID of the Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_tenant_id ReferenceTable#azure_tenant_id}

---

###### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putAzureDetail.parameter.filePath"></a>

- *Type:* str

The relative file path from the Azure container root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

##### `put_gcp_detail` <a name="put_gcp_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail"></a>

```python
def put_gcp_detail(
  file_path: str = None,
  gcp_bucket_name: str = None,
  gcp_project_id: str = None,
  gcp_service_account_email: str = None
) -> None
```

###### `file_path`<sup>Optional</sup> <a name="file_path" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail.parameter.filePath"></a>

- *Type:* str

The relative file path from the GCS bucket root to the CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#file_path ReferenceTable#file_path}

---

###### `gcp_bucket_name`<sup>Optional</sup> <a name="gcp_bucket_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail.parameter.gcpBucketName"></a>

- *Type:* str

The name of the GCP bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_bucket_name ReferenceTable#gcp_bucket_name}

---

###### `gcp_project_id`<sup>Optional</sup> <a name="gcp_project_id" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail.parameter.gcpProjectId"></a>

- *Type:* str

The ID of the GCP project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_project_id ReferenceTable#gcp_project_id}

---

###### `gcp_service_account_email`<sup>Optional</sup> <a name="gcp_service_account_email" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.putGcpDetail.parameter.gcpServiceAccountEmail"></a>

- *Type:* str

The email of the GCP service account used to access the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_service_account_email ReferenceTable#gcp_service_account_email}

---

##### `reset_aws_detail` <a name="reset_aws_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAwsDetail"></a>

```python
def reset_aws_detail() -> None
```

##### `reset_azure_detail` <a name="reset_azure_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetAzureDetail"></a>

```python
def reset_azure_detail() -> None
```

##### `reset_gcp_detail` <a name="reset_gcp_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.resetGcpDetail"></a>

```python
def reset_gcp_detail() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail">aws_detail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail">azure_detail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail">gcp_detail</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetailInput">aws_detail_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetailInput">azure_detail_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetailInput">gcp_detail_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_detail`<sup>Required</sup> <a name="aws_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetail"></a>

```python
aws_detail: ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAwsDetailOutputReference</a>

---

##### `azure_detail`<sup>Required</sup> <a name="azure_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetail"></a>

```python
azure_detail: ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference">ReferenceTableFileMetadataAccessDetailsAzureDetailOutputReference</a>

---

##### `gcp_detail`<sup>Required</sup> <a name="gcp_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetail"></a>

```python
gcp_detail: ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference">ReferenceTableFileMetadataAccessDetailsGcpDetailOutputReference</a>

---

##### `aws_detail_input`<sup>Optional</sup> <a name="aws_detail_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.awsDetailInput"></a>

```python
aws_detail_input: IResolvable | ReferenceTableFileMetadataAccessDetailsAwsDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

---

##### `azure_detail_input`<sup>Optional</sup> <a name="azure_detail_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.azureDetailInput"></a>

```python
azure_detail_input: IResolvable | ReferenceTableFileMetadataAccessDetailsAzureDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

---

##### `gcp_detail_input`<sup>Optional</sup> <a name="gcp_detail_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.gcpDetailInput"></a>

```python
gcp_detail_input: IResolvable | ReferenceTableFileMetadataAccessDetailsGcpDetail
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReferenceTableFileMetadataAccessDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

---


### ReferenceTableFileMetadataOutputReference <a name="ReferenceTableFileMetadataOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableFileMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails">put_access_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resetAccessDetails">reset_access_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_details` <a name="put_access_details" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails"></a>

```python
def put_access_details(
  aws_detail: ReferenceTableFileMetadataAccessDetailsAwsDetail = None,
  azure_detail: ReferenceTableFileMetadataAccessDetailsAzureDetail = None,
  gcp_detail: ReferenceTableFileMetadataAccessDetailsGcpDetail = None
) -> None
```

###### `aws_detail`<sup>Optional</sup> <a name="aws_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails.parameter.awsDetail"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAwsDetail">ReferenceTableFileMetadataAccessDetailsAwsDetail</a>

aws_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#aws_detail ReferenceTable#aws_detail}

---

###### `azure_detail`<sup>Optional</sup> <a name="azure_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails.parameter.azureDetail"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsAzureDetail">ReferenceTableFileMetadataAccessDetailsAzureDetail</a>

azure_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#azure_detail ReferenceTable#azure_detail}

---

###### `gcp_detail`<sup>Optional</sup> <a name="gcp_detail" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.putAccessDetails.parameter.gcpDetail"></a>

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsGcpDetail">ReferenceTableFileMetadataAccessDetailsGcpDetail</a>

gcp_detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.82.0/docs/resources/reference_table#gcp_detail ReferenceTable#gcp_detail}

---

##### `reset_access_details` <a name="reset_access_details" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.resetAccessDetails"></a>

```python
def reset_access_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetails">access_details</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference">ReferenceTableFileMetadataAccessDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorRowCount">error_row_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorType">error_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetailsInput">access_details_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabledInput">sync_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabled">sync_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_details`<sup>Required</sup> <a name="access_details" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetails"></a>

```python
access_details: ReferenceTableFileMetadataAccessDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetailsOutputReference">ReferenceTableFileMetadataAccessDetailsOutputReference</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `error_row_count`<sup>Required</sup> <a name="error_row_count" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorRowCount"></a>

```python
error_row_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_type`<sup>Required</sup> <a name="error_type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.errorType"></a>

```python
error_type: str
```

- *Type:* str

---

##### `access_details_input`<sup>Optional</sup> <a name="access_details_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.accessDetailsInput"></a>

```python
access_details_input: IResolvable | ReferenceTableFileMetadataAccessDetails
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataAccessDetails">ReferenceTableFileMetadataAccessDetails</a>

---

##### `sync_enabled_input`<sup>Optional</sup> <a name="sync_enabled_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabledInput"></a>

```python
sync_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `sync_enabled`<sup>Required</sup> <a name="sync_enabled" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.syncEnabled"></a>

```python
sync_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReferenceTableFileMetadata
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableFileMetadata">ReferenceTableFileMetadata</a>

---


### ReferenceTableSchemaFieldsList <a name="ReferenceTableSchemaFieldsList" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ReferenceTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ReferenceTableSchemaFields]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]

---


### ReferenceTableSchemaFieldsOutputReference <a name="ReferenceTableSchemaFieldsOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReferenceTableSchemaFields
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>

---


### ReferenceTableSchemaOutputReference <a name="ReferenceTableSchemaOutputReference" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import reference_table

referenceTable.ReferenceTableSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetPrimaryKeys">reset_primary_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fields` <a name="put_fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields"></a>

```python
def put_fields(
  value: IResolvable | typing.List[ReferenceTableSchemaFields]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]

---

##### `reset_fields` <a name="reset_fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_primary_keys` <a name="reset_primary_keys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.resetPrimaryKeys"></a>

```python
def reset_primary_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList">ReferenceTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fieldsInput">fields_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeysInput">primary_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeys">primary_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fields"></a>

```python
fields: ReferenceTableSchemaFieldsList
```

- *Type:* <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFieldsList">ReferenceTableSchemaFieldsList</a>

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.fieldsInput"></a>

```python
fields_input: IResolvable | typing.List[ReferenceTableSchemaFields]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaFields">ReferenceTableSchemaFields</a>]

---

##### `primary_keys_input`<sup>Optional</sup> <a name="primary_keys_input" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeysInput"></a>

```python
primary_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `primary_keys`<sup>Required</sup> <a name="primary_keys" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.primaryKeys"></a>

```python
primary_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.referenceTable.ReferenceTableSchemaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ReferenceTableSchema
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.referenceTable.ReferenceTableSchema">ReferenceTableSchema</a>

---



