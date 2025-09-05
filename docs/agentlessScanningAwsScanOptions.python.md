# `agentlessScanningAwsScanOptions` Submodule <a name="`agentlessScanningAwsScanOptions` Submodule" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentlessScanningAwsScanOptions <a name="AgentlessScanningAwsScanOptions" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options datadog_agentless_scanning_aws_scan_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_aws_scan_options

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str,
  lambda: typing.Union[bool, IResolvable],
  sensitive_data: typing.Union[bool, IResolvable],
  vuln_containers_os: typing.Union[bool, IResolvable],
  vuln_host_os: typing.Union[bool, IResolvable]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.lambda">lambda</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning of Lambda functions is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.sensitiveData">sensitive_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning for sensitive data is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.vulnContainersOs">vuln_containers_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.vulnHostOs">vuln_host_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.awsAccountId"></a>

- *Type:* str

The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#aws_account_id AgentlessScanningAwsScanOptions#aws_account_id}

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.lambda"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning of Lambda functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#lambda AgentlessScanningAwsScanOptions#lambda}

---

##### `sensitive_data`<sup>Required</sup> <a name="sensitive_data" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.sensitiveData"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning for sensitive data is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#sensitive_data AgentlessScanningAwsScanOptions#sensitive_data}

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.vulnContainersOs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#vuln_containers_os AgentlessScanningAwsScanOptions#vuln_containers_os}

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.Initializer.parameter.vulnHostOs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#vuln_host_os AgentlessScanningAwsScanOptions#vuln_host_os}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_aws_scan_options

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_aws_scan_options

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_aws_scan_options

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_aws_scan_options

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AgentlessScanningAwsScanOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AgentlessScanningAwsScanOptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AgentlessScanningAwsScanOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AgentlessScanningAwsScanOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput">lambda_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput">sensitive_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput">vuln_containers_os_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput">vuln_host_os_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda">lambda</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData">sensitive_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs">vuln_containers_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs">vuln_host_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambdaInput"></a>

```python
lambda_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sensitive_data_input`<sup>Optional</sup> <a name="sensitive_data_input" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveDataInput"></a>

```python
sensitive_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vuln_containers_os_input`<sup>Optional</sup> <a name="vuln_containers_os_input" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOsInput"></a>

```python
vuln_containers_os_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vuln_host_os_input`<sup>Optional</sup> <a name="vuln_host_os_input" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOsInput"></a>

```python
vuln_host_os_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.lambda"></a>

```python
lambda: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sensitive_data`<sup>Required</sup> <a name="sensitive_data" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.sensitiveData"></a>

```python
sensitive_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnContainersOs"></a>

```python
vuln_containers_os: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.vulnHostOs"></a>

```python
vuln_host_os: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AgentlessScanningAwsScanOptionsConfig <a name="AgentlessScanningAwsScanOptionsConfig" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import agentless_scanning_aws_scan_options

agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str,
  lambda: typing.Union[bool, IResolvable],
  sensitive_data: typing.Union[bool, IResolvable],
  vuln_containers_os: typing.Union[bool, IResolvable],
  vuln_host_os: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda">lambda</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning of Lambda functions is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData">sensitive_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning for sensitive data is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs">vuln_containers_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning for vulnerabilities in containers is enabled. |
| <code><a href="#@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs">vuln_host_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if scanning for vulnerabilities in hosts is enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

The AWS account ID for which agentless scanning is configured. Must be a valid AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#aws_account_id AgentlessScanningAwsScanOptions#aws_account_id}

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.lambda"></a>

```python
lambda: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning of Lambda functions is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#lambda AgentlessScanningAwsScanOptions#lambda}

---

##### `sensitive_data`<sup>Required</sup> <a name="sensitive_data" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.sensitiveData"></a>

```python
sensitive_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning for sensitive data is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#sensitive_data AgentlessScanningAwsScanOptions#sensitive_data}

---

##### `vuln_containers_os`<sup>Required</sup> <a name="vuln_containers_os" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnContainersOs"></a>

```python
vuln_containers_os: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning for vulnerabilities in containers is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#vuln_containers_os AgentlessScanningAwsScanOptions#vuln_containers_os}

---

##### `vuln_host_os`<sup>Required</sup> <a name="vuln_host_os" id="@cdktf/provider-datadog.agentlessScanningAwsScanOptions.AgentlessScanningAwsScanOptionsConfig.property.vulnHostOs"></a>

```python
vuln_host_os: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if scanning for vulnerabilities in hosts is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.73.0/docs/resources/agentless_scanning_aws_scan_options#vuln_host_os AgentlessScanningAwsScanOptions#vuln_host_os}

---



