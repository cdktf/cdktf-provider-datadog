# `agentlessScanningGcpScanOptions` Submodule <a name="`agentlessScanningGcpScanOptions` Submodule" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningGcpScanOptions <a name="AgentlessScanningGcpScanOptions" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options datadog_agentless_scanning_gcp_scan_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_gcp_scan_options

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gcp_project_id: str,
  vuln_containers_os: bool | IResolvable,
  vuln_host_os: bool | IResolvable
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | The GCP project ID for which agentless scanning is configured. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnContainersOs">vuln_containers_os</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnHostOs">vuln_host_os</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `gcp_project_id`<sup>Required</sup> <a name="gcp_project_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.gcpProjectId"></a>

- *Type:* str

The GCP project ID for which agentless scanning is configured.

Must be a valid GCP project ID: 6–30 characters, start with a lowercase letter, and include only lowercase letters, digits, or hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options#gcp_project_id AgentlessScanningGcpScanOptions#gcp_project_id}

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnContainersOs"></a>

- *Type:* bool | cdktf.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_containers_os AgentlessScanningGcpScanOptions#vuln_containers_os}

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.Initializer.parameter.vulnHostOs"></a>

- *Type:* bool | cdktf.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_host_os AgentlessScanningGcpScanOptions#vuln_host_os}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_gcp_scan_options

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_gcp_scan_options

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_gcp_scan_options

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_gcp_scan_options

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AgentlessScanningGcpScanOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentlessScanningGcpScanOptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentlessScanningGcpScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AgentlessScanningGcpScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput">gcp_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput">vuln_containers_os_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput">vuln_host_os_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs">vuln_containers_os</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs">vuln_host_os</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `gcp_project_id_input`<sup>Optional</sup> <a name="gcp_project_id_input" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectIdInput"></a>

```python
gcp_project_id_input: str
```

- *Type:* str

---

##### `vuln_containers_os_input`<sup>Optional</sup> <a name="vuln_containers_os_input" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOsInput"></a>

```python
vuln_containers_os_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `vuln_host_os_input`<sup>Optional</sup> <a name="vuln_host_os_input" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOsInput"></a>

```python
vuln_host_os_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `gcp_project_id`<sup>Required</sup> <a name="gcp_project_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.gcpProjectId"></a>

```python
gcp_project_id: str
```

- *Type:* str

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnContainersOs"></a>

```python
vuln_containers_os: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.vulnHostOs"></a>

```python
vuln_host_os: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningGcpScanOptionsConfig <a name="AgentlessScanningGcpScanOptionsConfig" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_gcp_scan_options

agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gcp_project_id: str,
  vuln_containers_os: bool | IResolvable,
  vuln_host_os: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId">gcp_project_id</a></code> | <code>str</code> | The GCP project ID for which agentless scanning is configured. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs">vuln_containers_os</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs">vuln_host_os</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `gcp_project_id`<sup>Required</sup> <a name="gcp_project_id" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.gcpProjectId"></a>

```python
gcp_project_id: str
```

- *Type:* str

The GCP project ID for which agentless scanning is configured.

Must be a valid GCP project ID: 6–30 characters, start with a lowercase letter, and include only lowercase letters, digits, or hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options#gcp_project_id AgentlessScanningGcpScanOptions#gcp_project_id}

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnContainersOs"></a>

```python
vuln_containers_os: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_containers_os AgentlessScanningGcpScanOptions#vuln_containers_os}

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktf/provider-datadog.agentlessScanningGcpScanOptions.AgentlessScanningGcpScanOptionsConfig.property.vulnHostOs"></a>

```python
vuln_host_os: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/agentless_scanning_gcp_scan_options#vuln_host_os AgentlessScanningGcpScanOptions#vuln_host_os}

---



