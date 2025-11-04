# `logsArchive` Submodule <a name="`logsArchive` Submodule" id="@cdktf/provider-datadog.logsArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsArchive <a name="LogsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchive"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive datadog_logs_archive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchive(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  query: str,
  azure_archive: LogsArchiveAzureArchive = None,
  gcs_archive: LogsArchiveGcsArchive = None,
  id: str = None,
  include_tags: bool | IResolvable = None,
  rehydration_max_scan_size_in_gb: typing.Union[int, float] = None,
  rehydration_tags: typing.List[str] = None,
  s3_archive: LogsArchiveS3Archive = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.name">name</a></code> | <code>str</code> | Your archive name. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.query">query</a></code> | <code>str</code> | The archive query/filter. Logs matching this query are included in the archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.azureArchive">azure_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | azure_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.gcsArchive">gcs_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | gcs_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#id LogsArchive#id}. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.includeTags">include_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | To store the tags in the archive, set the value `true`. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationMaxScanSizeInGb">rehydration_max_scan_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | To limit the rehydration scan size for the archive, set a value in GB. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationTags">rehydration_tags</a></code> | <code>typing.List[str]</code> | An array of tags to add to rehydrated logs from an archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.s3Archive">s3_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | s3_archive block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.name"></a>

- *Type:* str

Your archive name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#name LogsArchive#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.query"></a>

- *Type:* str

The archive query/filter. Logs matching this query are included in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#query LogsArchive#query}

---

##### `azure_archive`<sup>Optional</sup> <a name="azure_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.azureArchive"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

azure_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#azure_archive LogsArchive#azure_archive}

---

##### `gcs_archive`<sup>Optional</sup> <a name="gcs_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.gcsArchive"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

gcs_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#gcs_archive LogsArchive#gcs_archive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#id LogsArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_tags`<sup>Optional</sup> <a name="include_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.includeTags"></a>

- *Type:* bool | cdktf.IResolvable

To store the tags in the archive, set the value `true`.

If it is set to `false`, the tags will be dropped when the logs are sent to the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#include_tags LogsArchive#include_tags}

---

##### `rehydration_max_scan_size_in_gb`<sup>Optional</sup> <a name="rehydration_max_scan_size_in_gb" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationMaxScanSizeInGb"></a>

- *Type:* typing.Union[int, float]

To limit the rehydration scan size for the archive, set a value in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#rehydration_max_scan_size_in_gb LogsArchive#rehydration_max_scan_size_in_gb}

---

##### `rehydration_tags`<sup>Optional</sup> <a name="rehydration_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.rehydrationTags"></a>

- *Type:* typing.List[str]

An array of tags to add to rehydrated logs from an archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#rehydration_tags LogsArchive#rehydration_tags}

---

##### `s3_archive`<sup>Optional</sup> <a name="s3_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.Initializer.parameter.s3Archive"></a>

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

s3_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#s3_archive LogsArchive#s3_archive}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive">put_azure_archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive">put_gcs_archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive">put_s3_archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetAzureArchive">reset_azure_archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetGcsArchive">reset_gcs_archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetIncludeTags">reset_include_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb">reset_rehydration_max_scan_size_in_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags">reset_rehydration_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.resetS3Archive">reset_s3_archive</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.logsArchive.LogsArchive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsArchive.LogsArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.logsArchive.LogsArchive.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azure_archive` <a name="put_azure_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive"></a>

```python
def put_azure_archive(
  client_id: str,
  container: str,
  storage_account: str,
  tenant_id: str,
  path: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.clientId"></a>

- *Type:* str

Your client id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#client_id LogsArchive#client_id}

---

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.container"></a>

- *Type:* str

The container where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#container LogsArchive#container}

---

###### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.storageAccount"></a>

- *Type:* str

The associated storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#storage_account LogsArchive#storage_account}

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.tenantId"></a>

- *Type:* str

Your tenant id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#tenant_id LogsArchive#tenant_id}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putAzureArchive.parameter.path"></a>

- *Type:* str

The path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#path LogsArchive#path}

---

##### `put_gcs_archive` <a name="put_gcs_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive"></a>

```python
def put_gcs_archive(
  bucket: str,
  client_email: str,
  path: str = None,
  project_id: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive.parameter.bucket"></a>

- *Type:* str

Name of your GCS bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

###### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive.parameter.clientEmail"></a>

- *Type:* str

Your client email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#client_email LogsArchive#client_email}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive.parameter.path"></a>

- *Type:* str

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#path LogsArchive#path}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putGcsArchive.parameter.projectId"></a>

- *Type:* str

Your project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#project_id LogsArchive#project_id}

---

##### `put_s3_archive` <a name="put_s3_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive"></a>

```python
def put_s3_archive(
  account_id: str,
  bucket: str,
  role_name: str,
  encryption_key: str = None,
  encryption_type: str = None,
  path: str = None,
  storage_class: str = None
) -> None
```

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.accountId"></a>

- *Type:* str

Your AWS account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#account_id LogsArchive#account_id}

---

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.bucket"></a>

- *Type:* str

Name of your s3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

###### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.roleName"></a>

- *Type:* str

Your AWS role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#role_name LogsArchive#role_name}

---

###### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.encryptionKey"></a>

- *Type:* str

The AWS KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#encryption_key LogsArchive#encryption_key}

---

###### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.encryptionType"></a>

- *Type:* str

The type of encryption on your archive. Valid values are `NO_OVERRIDE`, `SSE_S3`, `SSE_KMS`. Defaults to `"NO_OVERRIDE"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#encryption_type LogsArchive#encryption_type}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.path"></a>

- *Type:* str

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#path LogsArchive#path}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-datadog.logsArchive.LogsArchive.putS3Archive.parameter.storageClass"></a>

- *Type:* str

The AWS S3 storage class used to upload the logs.

Valid values are `STANDARD`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `GLACIER_IR`. Defaults to `"STANDARD"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#storage_class LogsArchive#storage_class}

---

##### `reset_azure_archive` <a name="reset_azure_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetAzureArchive"></a>

```python
def reset_azure_archive() -> None
```

##### `reset_gcs_archive` <a name="reset_gcs_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetGcsArchive"></a>

```python
def reset_gcs_archive() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_tags` <a name="reset_include_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetIncludeTags"></a>

```python
def reset_include_tags() -> None
```

##### `reset_rehydration_max_scan_size_in_gb` <a name="reset_rehydration_max_scan_size_in_gb" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationMaxScanSizeInGb"></a>

```python
def reset_rehydration_max_scan_size_in_gb() -> None
```

##### `reset_rehydration_tags` <a name="reset_rehydration_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetRehydrationTags"></a>

```python
def reset_rehydration_tags() -> None
```

##### `reset_s3_archive` <a name="reset_s3_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.resetS3Archive"></a>

```python
def reset_s3_archive() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LogsArchive resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.logsArchive.LogsArchive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LogsArchive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogsArchive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogsArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LogsArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchive">azure_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchive">gcs_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3Archive">s3_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput">azure_archive_input</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput">gcs_archive_input</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput">include_tags_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput">rehydration_max_scan_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput">rehydration_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput">s3_archive_input</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTags">include_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb">rehydration_max_scan_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags">rehydration_tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `azure_archive`<sup>Required</sup> <a name="azure_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchive"></a>

```python
azure_archive: LogsArchiveAzureArchiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference">LogsArchiveAzureArchiveOutputReference</a>

---

##### `gcs_archive`<sup>Required</sup> <a name="gcs_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchive"></a>

```python
gcs_archive: LogsArchiveGcsArchiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference">LogsArchiveGcsArchiveOutputReference</a>

---

##### `s3_archive`<sup>Required</sup> <a name="s3_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3Archive"></a>

```python
s3_archive: LogsArchiveS3ArchiveOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference">LogsArchiveS3ArchiveOutputReference</a>

---

##### `azure_archive_input`<sup>Optional</sup> <a name="azure_archive_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.azureArchiveInput"></a>

```python
azure_archive_input: LogsArchiveAzureArchive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---

##### `gcs_archive_input`<sup>Optional</sup> <a name="gcs_archive_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.gcsArchiveInput"></a>

```python
gcs_archive_input: LogsArchiveGcsArchive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_tags_input`<sup>Optional</sup> <a name="include_tags_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTagsInput"></a>

```python
include_tags_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `rehydration_max_scan_size_in_gb_input`<sup>Optional</sup> <a name="rehydration_max_scan_size_in_gb_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGbInput"></a>

```python
rehydration_max_scan_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rehydration_tags_input`<sup>Optional</sup> <a name="rehydration_tags_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTagsInput"></a>

```python
rehydration_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_archive_input`<sup>Optional</sup> <a name="s3_archive_input" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.s3ArchiveInput"></a>

```python
s3_archive_input: LogsArchiveS3Archive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_tags`<sup>Required</sup> <a name="include_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.includeTags"></a>

```python
include_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `rehydration_max_scan_size_in_gb`<sup>Required</sup> <a name="rehydration_max_scan_size_in_gb" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationMaxScanSizeInGb"></a>

```python
rehydration_max_scan_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rehydration_tags`<sup>Required</sup> <a name="rehydration_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.rehydrationTags"></a>

```python
rehydration_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.logsArchive.LogsArchive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogsArchiveAzureArchive <a name="LogsArchiveAzureArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchiveAzureArchive(
  client_id: str,
  container: str,
  storage_account: str,
  tenant_id: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId">client_id</a></code> | <code>str</code> | Your client id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container">container</a></code> | <code>str</code> | The container where the archive is stored. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount">storage_account</a></code> | <code>str</code> | The associated storage account. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId">tenant_id</a></code> | <code>str</code> | Your tenant id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path">path</a></code> | <code>str</code> | The path where the archive is stored. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Your client id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#client_id LogsArchive#client_id}

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.container"></a>

```python
container: str
```

- *Type:* str

The container where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#container LogsArchive#container}

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

The associated storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#storage_account LogsArchive#storage_account}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Your tenant id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#tenant_id LogsArchive#tenant_id}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive.property.path"></a>

```python
path: str
```

- *Type:* str

The path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#path LogsArchive#path}

---

### LogsArchiveConfig <a name="LogsArchiveConfig" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchiveConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  query: str,
  azure_archive: LogsArchiveAzureArchive = None,
  gcs_archive: LogsArchiveGcsArchive = None,
  id: str = None,
  include_tags: bool | IResolvable = None,
  rehydration_max_scan_size_in_gb: typing.Union[int, float] = None,
  rehydration_tags: typing.List[str] = None,
  s3_archive: LogsArchiveS3Archive = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.name">name</a></code> | <code>str</code> | Your archive name. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.query">query</a></code> | <code>str</code> | The archive query/filter. Logs matching this query are included in the archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive">azure_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | azure_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive">gcs_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | gcs_archive block. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#id LogsArchive#id}. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags">include_tags</a></code> | <code>bool \| cdktf.IResolvable</code> | To store the tags in the archive, set the value `true`. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb">rehydration_max_scan_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | To limit the rehydration scan size for the archive, set a value in GB. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags">rehydration_tags</a></code> | <code>typing.List[str]</code> | An array of tags to add to rehydrated logs from an archive. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive">s3_archive</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | s3_archive block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Your archive name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#name LogsArchive#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.query"></a>

```python
query: str
```

- *Type:* str

The archive query/filter. Logs matching this query are included in the archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#query LogsArchive#query}

---

##### `azure_archive`<sup>Optional</sup> <a name="azure_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.azureArchive"></a>

```python
azure_archive: LogsArchiveAzureArchive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

azure_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#azure_archive LogsArchive#azure_archive}

---

##### `gcs_archive`<sup>Optional</sup> <a name="gcs_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.gcsArchive"></a>

```python
gcs_archive: LogsArchiveGcsArchive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

gcs_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#gcs_archive LogsArchive#gcs_archive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#id LogsArchive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_tags`<sup>Optional</sup> <a name="include_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.includeTags"></a>

```python
include_tags: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

To store the tags in the archive, set the value `true`.

If it is set to `false`, the tags will be dropped when the logs are sent to the archive. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#include_tags LogsArchive#include_tags}

---

##### `rehydration_max_scan_size_in_gb`<sup>Optional</sup> <a name="rehydration_max_scan_size_in_gb" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationMaxScanSizeInGb"></a>

```python
rehydration_max_scan_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

To limit the rehydration scan size for the archive, set a value in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#rehydration_max_scan_size_in_gb LogsArchive#rehydration_max_scan_size_in_gb}

---

##### `rehydration_tags`<sup>Optional</sup> <a name="rehydration_tags" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.rehydrationTags"></a>

```python
rehydration_tags: typing.List[str]
```

- *Type:* typing.List[str]

An array of tags to add to rehydrated logs from an archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#rehydration_tags LogsArchive#rehydration_tags}

---

##### `s3_archive`<sup>Optional</sup> <a name="s3_archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveConfig.property.s3Archive"></a>

```python
s3_archive: LogsArchiveS3Archive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

s3_archive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#s3_archive LogsArchive#s3_archive}

---

### LogsArchiveGcsArchive <a name="LogsArchiveGcsArchive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchiveGcsArchive(
  bucket: str,
  client_email: str,
  path: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket">bucket</a></code> | <code>str</code> | Name of your GCS bucket. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail">client_email</a></code> | <code>str</code> | Your client email. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path">path</a></code> | <code>str</code> | Path where the archive is stored. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId">project_id</a></code> | <code>str</code> | Your project id. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Name of your GCS bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Your client email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#client_email LogsArchive#client_email}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.path"></a>

```python
path: str
```

- *Type:* str

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#path LogsArchive#path}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Your project id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#project_id LogsArchive#project_id}

---

### LogsArchiveS3Archive <a name="LogsArchiveS3Archive" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchiveS3Archive(
  account_id: str,
  bucket: str,
  role_name: str,
  encryption_key: str = None,
  encryption_type: str = None,
  path: str = None,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId">account_id</a></code> | <code>str</code> | Your AWS account id. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket">bucket</a></code> | <code>str</code> | Name of your s3 bucket. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName">role_name</a></code> | <code>str</code> | Your AWS role name. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionKey">encryption_key</a></code> | <code>str</code> | The AWS KMS encryption key. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionType">encryption_type</a></code> | <code>str</code> | The type of encryption on your archive. Valid values are `NO_OVERRIDE`, `SSE_S3`, `SSE_KMS`. Defaults to `"NO_OVERRIDE"`. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path">path</a></code> | <code>str</code> | Path where the archive is stored. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.storageClass">storage_class</a></code> | <code>str</code> | The AWS S3 storage class used to upload the logs. |

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Your AWS account id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#account_id LogsArchive#account_id}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Name of your s3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#bucket LogsArchive#bucket}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Your AWS role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#role_name LogsArchive#role_name}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

The AWS KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#encryption_key LogsArchive#encryption_key}

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

The type of encryption on your archive. Valid values are `NO_OVERRIDE`, `SSE_S3`, `SSE_KMS`. Defaults to `"NO_OVERRIDE"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#encryption_type LogsArchive#encryption_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.path"></a>

```python
path: str
```

- *Type:* str

Path where the archive is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#path LogsArchive#path}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The AWS S3 storage class used to upload the logs.

Valid values are `STANDARD`, `STANDARD_IA`, `ONEZONE_IA`, `INTELLIGENT_TIERING`, `GLACIER_IR`. Defaults to `"STANDARD"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.79.0/docs/resources/logs_archive#storage_class LogsArchive#storage_class}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsArchiveAzureArchiveOutputReference <a name="LogsArchiveAzureArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchiveAzureArchiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput">storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccountInput"></a>

```python
storage_account_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchiveOutputReference.property.internalValue"></a>

```python
internal_value: LogsArchiveAzureArchive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveAzureArchive">LogsArchiveAzureArchive</a>

---


### LogsArchiveGcsArchiveOutputReference <a name="LogsArchiveGcsArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchiveGcsArchiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchiveOutputReference.property.internalValue"></a>

```python
internal_value: LogsArchiveGcsArchive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveGcsArchive">LogsArchiveGcsArchive</a>

---


### LogsArchiveS3ArchiveOutputReference <a name="LogsArchiveS3ArchiveOutputReference" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import logs_archive

logsArchive.LogsArchiveS3ArchiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.logsArchive.LogsArchiveS3ArchiveOutputReference.property.internalValue"></a>

```python
internal_value: LogsArchiveS3Archive
```

- *Type:* <a href="#@cdktf/provider-datadog.logsArchive.LogsArchiveS3Archive">LogsArchiveS3Archive</a>

---



