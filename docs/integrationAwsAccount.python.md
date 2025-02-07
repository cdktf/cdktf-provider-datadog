# `integrationAwsAccount` Submodule <a name="`integrationAwsAccount` Submodule" id="@cdktf/provider-datadog.integrationAwsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccount <a name="IntegrationAwsAccount" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account datadog_integration_aws_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccount(
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
  aws_partition: str,
  account_tags: typing.List[str] = None,
  auth_config: IntegrationAwsAccountAuthConfig = None,
  aws_regions: IntegrationAwsAccountAwsRegions = None,
  logs_config: IntegrationAwsAccountLogsConfig = None,
  metrics_config: IntegrationAwsAccountMetricsConfig = None,
  resources_config: IntegrationAwsAccountResourcesConfig = None,
  traces_config: IntegrationAwsAccountTracesConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsPartition">aws_partition</a></code> | <code>str</code> | AWS Account partition. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.accountTags">account_tags</a></code> | <code>typing.List[str]</code> | Tags to apply to all metrics in the account. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsRegions">aws_regions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | aws_regions block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.logsConfig">logs_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.resourcesConfig">resources_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | resources_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.tracesConfig">traces_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | traces_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}

---

##### `aws_partition`<sup>Required</sup> <a name="aws_partition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsPartition"></a>

- *Type:* str

AWS Account partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}

---

##### `account_tags`<sup>Optional</sup> <a name="account_tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.accountTags"></a>

- *Type:* typing.List[str]

Tags to apply to all metrics in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsRegions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

aws_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}

---

##### `logs_config`<sup>Optional</sup> <a name="logs_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.logsConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.metricsConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}

---

##### `resources_config`<sup>Optional</sup> <a name="resources_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.resourcesConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

resources_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}

---

##### `traces_config`<sup>Optional</sup> <a name="traces_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.tracesConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

traces_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig">put_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions">put_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig">put_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig">put_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig">put_resources_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig">put_traces_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags">reset_account_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig">reset_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions">reset_aws_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig">reset_logs_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig">reset_metrics_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig">reset_resources_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig">reset_traces_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_config` <a name="put_auth_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig"></a>

```python
def put_auth_config(
  aws_auth_config_keys: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys = None,
  aws_auth_config_role: IntegrationAwsAccountAuthConfigAwsAuthConfigRole = None
) -> None
```

###### `aws_auth_config_keys`<sup>Optional</sup> <a name="aws_auth_config_keys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig.parameter.awsAuthConfigKeys"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

aws_auth_config_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_auth_config_keys IntegrationAwsAccount#aws_auth_config_keys}

---

###### `aws_auth_config_role`<sup>Optional</sup> <a name="aws_auth_config_role" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig.parameter.awsAuthConfigRole"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

aws_auth_config_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_auth_config_role IntegrationAwsAccount#aws_auth_config_role}

---

##### `put_aws_regions` <a name="put_aws_regions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions"></a>

```python
def put_aws_regions(
  include_all: typing.Union[bool, IResolvable] = None,
  include_only: typing.List[str] = None
) -> None
```

###### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions.parameter.includeAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include all regions. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

###### `include_only`<sup>Optional</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions.parameter.includeOnly"></a>

- *Type:* typing.List[str]

Include only these regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

##### `put_logs_config` <a name="put_logs_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig"></a>

```python
def put_logs_config(
  lambda_forwarder: IntegrationAwsAccountLogsConfigLambdaForwarder = None
) -> None
```

###### `lambda_forwarder`<sup>Optional</sup> <a name="lambda_forwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig.parameter.lambdaForwarder"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

lambda_forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#lambda_forwarder IntegrationAwsAccount#lambda_forwarder}

---

##### `put_metrics_config` <a name="put_metrics_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig"></a>

```python
def put_metrics_config(
  automute_enabled: typing.Union[bool, IResolvable] = None,
  collect_cloudwatch_alarms: typing.Union[bool, IResolvable] = None,
  collect_custom_metrics: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  namespace_filters: IntegrationAwsAccountMetricsConfigNamespaceFilters = None,
  tag_filters: typing.Union[IResolvable, typing.List[IntegrationAwsAccountMetricsConfigTagFilters]] = None
) -> None
```

###### `automute_enabled`<sup>Optional</sup> <a name="automute_enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.automuteEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable EC2 automute for AWS metrics Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#automute_enabled IntegrationAwsAccount#automute_enabled}

---

###### `collect_cloudwatch_alarms`<sup>Optional</sup> <a name="collect_cloudwatch_alarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.collectCloudwatchAlarms"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CloudWatch alarms collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#collect_cloudwatch_alarms IntegrationAwsAccount#collect_cloudwatch_alarms}

---

###### `collect_custom_metrics`<sup>Optional</sup> <a name="collect_custom_metrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.collectCustomMetrics"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable custom metrics collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#collect_custom_metrics IntegrationAwsAccount#collect_custom_metrics}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable AWS metrics collection Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#enabled IntegrationAwsAccount#enabled}

---

###### `namespace_filters`<sup>Optional</sup> <a name="namespace_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.namespaceFilters"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

namespace_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#namespace_filters IntegrationAwsAccount#namespace_filters}

---

###### `tag_filters`<sup>Optional</sup> <a name="tag_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.tagFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}

---

##### `put_resources_config` <a name="put_resources_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig"></a>

```python
def put_resources_config(
  cloud_security_posture_management_collection: typing.Union[bool, IResolvable] = None,
  extended_collection: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cloud_security_posture_management_collection`<sup>Optional</sup> <a name="cloud_security_posture_management_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig.parameter.cloudSecurityPostureManagementCollection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations.

Requires `extended_collection` to be set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#cloud_security_posture_management_collection IntegrationAwsAccount#cloud_security_posture_management_collection}

---

###### `extended_collection`<sup>Optional</sup> <a name="extended_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig.parameter.extendedCollection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account.

Required for `cloud_security_posture_management_collection`. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#extended_collection IntegrationAwsAccount#extended_collection}

---

##### `put_traces_config` <a name="put_traces_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig"></a>

```python
def put_traces_config(
  xray_services: IntegrationAwsAccountTracesConfigXrayServices = None
) -> None
```

###### `xray_services`<sup>Optional</sup> <a name="xray_services" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig.parameter.xrayServices"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

xray_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#xray_services IntegrationAwsAccount#xray_services}

---

##### `reset_account_tags` <a name="reset_account_tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags"></a>

```python
def reset_account_tags() -> None
```

##### `reset_auth_config` <a name="reset_auth_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig"></a>

```python
def reset_auth_config() -> None
```

##### `reset_aws_regions` <a name="reset_aws_regions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions"></a>

```python
def reset_aws_regions() -> None
```

##### `reset_logs_config` <a name="reset_logs_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig"></a>

```python
def reset_logs_config() -> None
```

##### `reset_metrics_config` <a name="reset_metrics_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig"></a>

```python
def reset_metrics_config() -> None
```

##### `reset_resources_config` <a name="reset_resources_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig"></a>

```python
def reset_resources_config() -> None
```

##### `reset_traces_config` <a name="reset_traces_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig"></a>

```python
def reset_traces_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationAwsAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationAwsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions">aws_regions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig">logs_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig">resources_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig">traces_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput">account_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput">auth_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput">aws_partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput">aws_regions_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput">logs_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput">metrics_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput">resources_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput">traces_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags">account_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition">aws_partition</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig"></a>

```python
auth_config: IntegrationAwsAccountAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a>

---

##### `aws_regions`<sup>Required</sup> <a name="aws_regions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions"></a>

```python
aws_regions: IntegrationAwsAccountAwsRegionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logs_config`<sup>Required</sup> <a name="logs_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig"></a>

```python
logs_config: IntegrationAwsAccountLogsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a>

---

##### `metrics_config`<sup>Required</sup> <a name="metrics_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig"></a>

```python
metrics_config: IntegrationAwsAccountMetricsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a>

---

##### `resources_config`<sup>Required</sup> <a name="resources_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig"></a>

```python
resources_config: IntegrationAwsAccountResourcesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a>

---

##### `traces_config`<sup>Required</sup> <a name="traces_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig"></a>

```python
traces_config: IntegrationAwsAccountTracesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a>

---

##### `account_tags_input`<sup>Optional</sup> <a name="account_tags_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput"></a>

```python
account_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auth_config_input`<sup>Optional</sup> <a name="auth_config_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput"></a>

```python
auth_config_input: typing.Union[IResolvable, IntegrationAwsAccountAuthConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>]

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `aws_partition_input`<sup>Optional</sup> <a name="aws_partition_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput"></a>

```python
aws_partition_input: str
```

- *Type:* str

---

##### `aws_regions_input`<sup>Optional</sup> <a name="aws_regions_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput"></a>

```python
aws_regions_input: typing.Union[IResolvable, IntegrationAwsAccountAwsRegions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>]

---

##### `logs_config_input`<sup>Optional</sup> <a name="logs_config_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput"></a>

```python
logs_config_input: typing.Union[IResolvable, IntegrationAwsAccountLogsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>]

---

##### `metrics_config_input`<sup>Optional</sup> <a name="metrics_config_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput"></a>

```python
metrics_config_input: typing.Union[IResolvable, IntegrationAwsAccountMetricsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>]

---

##### `resources_config_input`<sup>Optional</sup> <a name="resources_config_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput"></a>

```python
resources_config_input: typing.Union[IResolvable, IntegrationAwsAccountResourcesConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>]

---

##### `traces_config_input`<sup>Optional</sup> <a name="traces_config_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput"></a>

```python
traces_config_input: typing.Union[IResolvable, IntegrationAwsAccountTracesConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>]

---

##### `account_tags`<sup>Required</sup> <a name="account_tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags"></a>

```python
account_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_partition`<sup>Required</sup> <a name="aws_partition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition"></a>

```python
aws_partition: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountAuthConfig <a name="IntegrationAwsAccountAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAuthConfig(
  aws_auth_config_keys: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys = None,
  aws_auth_config_role: IntegrationAwsAccountAuthConfigAwsAuthConfigRole = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys">aws_auth_config_keys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | aws_auth_config_keys block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole">aws_auth_config_role</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | aws_auth_config_role block. |

---

##### `aws_auth_config_keys`<sup>Optional</sup> <a name="aws_auth_config_keys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys"></a>

```python
aws_auth_config_keys: IntegrationAwsAccountAuthConfigAwsAuthConfigKeys
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

aws_auth_config_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_auth_config_keys IntegrationAwsAccount#aws_auth_config_keys}

---

##### `aws_auth_config_role`<sup>Optional</sup> <a name="aws_auth_config_role" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole"></a>

```python
aws_auth_config_role: IntegrationAwsAccountAuthConfigAwsAuthConfigRole
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

aws_auth_config_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_auth_config_role IntegrationAwsAccount#aws_auth_config_role}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeys <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys(
  access_key_id: str = None,
  secret_access_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId">access_key_id</a></code> | <code>str</code> | AWS Access Key ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | AWS Secret Access Key. This value is write-only; changes made outside of Terraform will not be drift-detected. |

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

AWS Access Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#access_key_id IntegrationAwsAccount#access_key_id}

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

AWS Secret Access Key. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#secret_access_key IntegrationAwsAccount#secret_access_key}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigRole <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole(
  external_id: str = None,
  role_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId">external_id</a></code> | <code>str</code> | AWS IAM External ID for associated role. If omitted, one will be generated. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName">role_name</a></code> | <code>str</code> | AWS IAM Role name. |

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

AWS IAM External ID for associated role. If omitted, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#external_id IntegrationAwsAccount#external_id}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

AWS IAM Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#role_name IntegrationAwsAccount#role_name}

---

### IntegrationAwsAccountAwsRegions <a name="IntegrationAwsAccountAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAwsRegions(
  include_all: typing.Union[bool, IResolvable] = None,
  include_only: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include all regions. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly">include_only</a></code> | <code>typing.List[str]</code> | Include only these regions. |

---

##### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include all regions. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `include_only`<sup>Optional</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly"></a>

```python
include_only: typing.List[str]
```

- *Type:* typing.List[str]

Include only these regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountConfig <a name="IntegrationAwsAccountConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str,
  aws_partition: str,
  account_tags: typing.List[str] = None,
  auth_config: IntegrationAwsAccountAuthConfig = None,
  aws_regions: IntegrationAwsAccountAwsRegions = None,
  logs_config: IntegrationAwsAccountLogsConfig = None,
  metrics_config: IntegrationAwsAccountMetricsConfig = None,
  resources_config: IntegrationAwsAccountResourcesConfig = None,
  traces_config: IntegrationAwsAccountTracesConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition">aws_partition</a></code> | <code>str</code> | AWS Account partition. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags">account_tags</a></code> | <code>typing.List[str]</code> | Tags to apply to all metrics in the account. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig">auth_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions">aws_regions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | aws_regions block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig">logs_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig">metrics_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig">resources_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | resources_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig">traces_config</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | traces_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}

---

##### `aws_partition`<sup>Required</sup> <a name="aws_partition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition"></a>

```python
aws_partition: str
```

- *Type:* str

AWS Account partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}

---

##### `account_tags`<sup>Optional</sup> <a name="account_tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags"></a>

```python
account_tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags to apply to all metrics in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}

---

##### `auth_config`<sup>Optional</sup> <a name="auth_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig"></a>

```python
auth_config: IntegrationAwsAccountAuthConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}

---

##### `aws_regions`<sup>Optional</sup> <a name="aws_regions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions"></a>

```python
aws_regions: IntegrationAwsAccountAwsRegions
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

aws_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}

---

##### `logs_config`<sup>Optional</sup> <a name="logs_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig"></a>

```python
logs_config: IntegrationAwsAccountLogsConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}

---

##### `metrics_config`<sup>Optional</sup> <a name="metrics_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig"></a>

```python
metrics_config: IntegrationAwsAccountMetricsConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}

---

##### `resources_config`<sup>Optional</sup> <a name="resources_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig"></a>

```python
resources_config: IntegrationAwsAccountResourcesConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

resources_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}

---

##### `traces_config`<sup>Optional</sup> <a name="traces_config" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig"></a>

```python
traces_config: IntegrationAwsAccountTracesConfig
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

traces_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}

---

### IntegrationAwsAccountLogsConfig <a name="IntegrationAwsAccountLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountLogsConfig(
  lambda_forwarder: IntegrationAwsAccountLogsConfigLambdaForwarder = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder">lambda_forwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | lambda_forwarder block. |

---

##### `lambda_forwarder`<sup>Optional</sup> <a name="lambda_forwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder"></a>

```python
lambda_forwarder: IntegrationAwsAccountLogsConfigLambdaForwarder
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

lambda_forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#lambda_forwarder IntegrationAwsAccount#lambda_forwarder}

---

### IntegrationAwsAccountLogsConfigLambdaForwarder <a name="IntegrationAwsAccountLogsConfigLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder(
  lambdas: typing.List[str] = None,
  sources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas">lambdas</a></code> | <code>typing.List[str]</code> | List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources">sources</a></code> | <code>typing.List[str]</code> | List of service IDs set to enable automatic log collection. |

---

##### `lambdas`<sup>Optional</sup> <a name="lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas"></a>

```python
lambdas: typing.List[str]
```

- *Type:* typing.List[str]

List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#lambdas IntegrationAwsAccount#lambdas}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

List of service IDs set to enable automatic log collection.

Use [`datadog_integration_aws_available_logs_services` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_logs_services) to get allowed values. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#sources IntegrationAwsAccount#sources}

---

### IntegrationAwsAccountMetricsConfig <a name="IntegrationAwsAccountMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountMetricsConfig(
  automute_enabled: typing.Union[bool, IResolvable] = None,
  collect_cloudwatch_alarms: typing.Union[bool, IResolvable] = None,
  collect_custom_metrics: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  namespace_filters: IntegrationAwsAccountMetricsConfigNamespaceFilters = None,
  tag_filters: typing.Union[IResolvable, typing.List[IntegrationAwsAccountMetricsConfigTagFilters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled">automute_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable EC2 automute for AWS metrics Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms">collect_cloudwatch_alarms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable CloudWatch alarms collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics">collect_custom_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable custom metrics collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable AWS metrics collection Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters">namespace_filters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | namespace_filters block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters">tag_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]</code> | tag_filters block. |

---

##### `automute_enabled`<sup>Optional</sup> <a name="automute_enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled"></a>

```python
automute_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable EC2 automute for AWS metrics Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#automute_enabled IntegrationAwsAccount#automute_enabled}

---

##### `collect_cloudwatch_alarms`<sup>Optional</sup> <a name="collect_cloudwatch_alarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms"></a>

```python
collect_cloudwatch_alarms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable CloudWatch alarms collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#collect_cloudwatch_alarms IntegrationAwsAccount#collect_cloudwatch_alarms}

---

##### `collect_custom_metrics`<sup>Optional</sup> <a name="collect_custom_metrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics"></a>

```python
collect_custom_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable custom metrics collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#collect_custom_metrics IntegrationAwsAccount#collect_custom_metrics}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable AWS metrics collection Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#enabled IntegrationAwsAccount#enabled}

---

##### `namespace_filters`<sup>Optional</sup> <a name="namespace_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters"></a>

```python
namespace_filters: IntegrationAwsAccountMetricsConfigNamespaceFilters
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

namespace_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#namespace_filters IntegrationAwsAccount#namespace_filters}

---

##### `tag_filters`<sup>Optional</sup> <a name="tag_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters"></a>

```python
tag_filters: typing.Union[IResolvable, typing.List[IntegrationAwsAccountMetricsConfigTagFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}

---

### IntegrationAwsAccountMetricsConfigNamespaceFilters <a name="IntegrationAwsAccountMetricsConfigNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters(
  exclude_only: typing.List[str] = None,
  include_only: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly">exclude_only</a></code> | <code>typing.List[str]</code> | Exclude only these namespaces from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly">include_only</a></code> | <code>typing.List[str]</code> | Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. |

---

##### `exclude_only`<sup>Optional</sup> <a name="exclude_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly"></a>

```python
exclude_only: typing.List[str]
```

- *Type:* typing.List[str]

Exclude only these namespaces from metrics collection.

Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`. `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}

---

##### `include_only`<sup>Optional</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly"></a>

```python
include_only: typing.List[str]
```

- *Type:* typing.List[str]

Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountMetricsConfigTagFilters <a name="IntegrationAwsAccountMetricsConfigTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters(
  namespace: str,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace">namespace</a></code> | <code>str</code> | The AWS service for which the tag filters defined in `tags` will be applied. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags">tags</a></code> | <code>typing.List[str]</code> | The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The AWS service for which the tag filters defined in `tags` will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#namespace IntegrationAwsAccount#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#tags IntegrationAwsAccount#tags}

---

### IntegrationAwsAccountResourcesConfig <a name="IntegrationAwsAccountResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountResourcesConfig(
  cloud_security_posture_management_collection: typing.Union[bool, IResolvable] = None,
  extended_collection: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection">cloud_security_posture_management_collection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection">extended_collection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. |

---

##### `cloud_security_posture_management_collection`<sup>Optional</sup> <a name="cloud_security_posture_management_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection"></a>

```python
cloud_security_posture_management_collection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations.

Requires `extended_collection` to be set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#cloud_security_posture_management_collection IntegrationAwsAccount#cloud_security_posture_management_collection}

---

##### `extended_collection`<sup>Optional</sup> <a name="extended_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection"></a>

```python
extended_collection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account.

Required for `cloud_security_posture_management_collection`. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#extended_collection IntegrationAwsAccount#extended_collection}

---

### IntegrationAwsAccountTracesConfig <a name="IntegrationAwsAccountTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountTracesConfig(
  xray_services: IntegrationAwsAccountTracesConfigXrayServices = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices">xray_services</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | xray_services block. |

---

##### `xray_services`<sup>Optional</sup> <a name="xray_services" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices"></a>

```python
xray_services: IntegrationAwsAccountTracesConfigXrayServices
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

xray_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#xray_services IntegrationAwsAccount#xray_services}

---

### IntegrationAwsAccountTracesConfigXrayServices <a name="IntegrationAwsAccountTracesConfigXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices(
  include_all: typing.Union[bool, IResolvable] = None,
  include_only: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include all services. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly">include_only</a></code> | <code>typing.List[str]</code> | Include only these services. Defaults to `[]`. |

---

##### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `include_only`<sup>Optional</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly"></a>

```python
include_only: typing.List[str]
```

- *Type:* typing.List[str]

Include only these services. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_key_id` <a name="reset_access_key_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountAuthConfigAwsAuthConfigKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>]

---


### IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName">reset_role_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName"></a>

```python
def reset_role_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountAuthConfigAwsAuthConfigRole]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>]

---


### IntegrationAwsAccountAuthConfigOutputReference <a name="IntegrationAwsAccountAuthConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys">put_aws_auth_config_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole">put_aws_auth_config_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys">reset_aws_auth_config_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole">reset_aws_auth_config_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_auth_config_keys` <a name="put_aws_auth_config_keys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys"></a>

```python
def put_aws_auth_config_keys(
  access_key_id: str = None,
  secret_access_key: str = None
) -> None
```

###### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys.parameter.accessKeyId"></a>

- *Type:* str

AWS Access Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#access_key_id IntegrationAwsAccount#access_key_id}

---

###### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys.parameter.secretAccessKey"></a>

- *Type:* str

AWS Secret Access Key. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#secret_access_key IntegrationAwsAccount#secret_access_key}

---

##### `put_aws_auth_config_role` <a name="put_aws_auth_config_role" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole"></a>

```python
def put_aws_auth_config_role(
  external_id: str = None,
  role_name: str = None
) -> None
```

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole.parameter.externalId"></a>

- *Type:* str

AWS IAM External ID for associated role. If omitted, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#external_id IntegrationAwsAccount#external_id}

---

###### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole.parameter.roleName"></a>

- *Type:* str

AWS IAM Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#role_name IntegrationAwsAccount#role_name}

---

##### `reset_aws_auth_config_keys` <a name="reset_aws_auth_config_keys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys"></a>

```python
def reset_aws_auth_config_keys() -> None
```

##### `reset_aws_auth_config_role` <a name="reset_aws_auth_config_role" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole"></a>

```python
def reset_aws_auth_config_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys">aws_auth_config_keys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole">aws_auth_config_role</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput">aws_auth_config_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput">aws_auth_config_role_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_auth_config_keys`<sup>Required</sup> <a name="aws_auth_config_keys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys"></a>

```python
aws_auth_config_keys: IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a>

---

##### `aws_auth_config_role`<sup>Required</sup> <a name="aws_auth_config_role" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole"></a>

```python
aws_auth_config_role: IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a>

---

##### `aws_auth_config_keys_input`<sup>Optional</sup> <a name="aws_auth_config_keys_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput"></a>

```python
aws_auth_config_keys_input: typing.Union[IResolvable, IntegrationAwsAccountAuthConfigAwsAuthConfigKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>]

---

##### `aws_auth_config_role_input`<sup>Optional</sup> <a name="aws_auth_config_role_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput"></a>

```python
aws_auth_config_role_input: typing.Union[IResolvable, IntegrationAwsAccountAuthConfigAwsAuthConfigRole]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountAuthConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>]

---


### IntegrationAwsAccountAwsRegionsOutputReference <a name="IntegrationAwsAccountAwsRegionsOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll">reset_include_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly">reset_include_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_all` <a name="reset_include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll"></a>

```python
def reset_include_all() -> None
```

##### `reset_include_only` <a name="reset_include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly"></a>

```python
def reset_include_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput">include_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput">include_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly">include_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_all_input`<sup>Optional</sup> <a name="include_all_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput"></a>

```python
include_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_only_input`<sup>Optional</sup> <a name="include_only_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput"></a>

```python
include_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_all`<sup>Required</sup> <a name="include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_only`<sup>Required</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly"></a>

```python
include_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountAwsRegions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>]

---


### IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference <a name="IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas">reset_lambdas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lambdas` <a name="reset_lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas"></a>

```python
def reset_lambdas() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput">lambdas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas">lambdas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources">sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambdas_input`<sup>Optional</sup> <a name="lambdas_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput"></a>

```python
lambdas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lambdas`<sup>Required</sup> <a name="lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas"></a>

```python
lambdas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountLogsConfigLambdaForwarder]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>]

---


### IntegrationAwsAccountLogsConfigOutputReference <a name="IntegrationAwsAccountLogsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder">put_lambda_forwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder">reset_lambda_forwarder</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_forwarder` <a name="put_lambda_forwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder"></a>

```python
def put_lambda_forwarder(
  lambdas: typing.List[str] = None,
  sources: typing.List[str] = None
) -> None
```

###### `lambdas`<sup>Optional</sup> <a name="lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder.parameter.lambdas"></a>

- *Type:* typing.List[str]

List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#lambdas IntegrationAwsAccount#lambdas}

---

###### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder.parameter.sources"></a>

- *Type:* typing.List[str]

List of service IDs set to enable automatic log collection.

Use [`datadog_integration_aws_available_logs_services` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_logs_services) to get allowed values. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#sources IntegrationAwsAccount#sources}

---

##### `reset_lambda_forwarder` <a name="reset_lambda_forwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder"></a>

```python
def reset_lambda_forwarder() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder">lambda_forwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput">lambda_forwarder_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_forwarder`<sup>Required</sup> <a name="lambda_forwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder"></a>

```python
lambda_forwarder: IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a>

---

##### `lambda_forwarder_input`<sup>Optional</sup> <a name="lambda_forwarder_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput"></a>

```python
lambda_forwarder_input: typing.Union[IResolvable, IntegrationAwsAccountLogsConfigLambdaForwarder]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountLogsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>]

---


### IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly">reset_exclude_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly">reset_include_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_only` <a name="reset_exclude_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly"></a>

```python
def reset_exclude_only() -> None
```

##### `reset_include_only` <a name="reset_include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly"></a>

```python
def reset_include_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput">exclude_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput">include_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly">exclude_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly">include_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_only_input`<sup>Optional</sup> <a name="exclude_only_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput"></a>

```python
exclude_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_only_input`<sup>Optional</sup> <a name="include_only_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput"></a>

```python
include_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_only`<sup>Required</sup> <a name="exclude_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly"></a>

```python
exclude_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_only`<sup>Required</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly"></a>

```python
include_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountMetricsConfigNamespaceFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>]

---


### IntegrationAwsAccountMetricsConfigOutputReference <a name="IntegrationAwsAccountMetricsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters">put_namespace_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters">put_tag_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled">reset_automute_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms">reset_collect_cloudwatch_alarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics">reset_collect_custom_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters">reset_namespace_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters">reset_tag_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespace_filters` <a name="put_namespace_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters"></a>

```python
def put_namespace_filters(
  exclude_only: typing.List[str] = None,
  include_only: typing.List[str] = None
) -> None
```

###### `exclude_only`<sup>Optional</sup> <a name="exclude_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters.parameter.excludeOnly"></a>

- *Type:* typing.List[str]

Exclude only these namespaces from metrics collection.

Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`. `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}

---

###### `include_only`<sup>Optional</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters.parameter.includeOnly"></a>

- *Type:* typing.List[str]

Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

##### `put_tag_filters` <a name="put_tag_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters"></a>

```python
def put_tag_filters(
  value: typing.Union[IResolvable, typing.List[IntegrationAwsAccountMetricsConfigTagFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]

---

##### `reset_automute_enabled` <a name="reset_automute_enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled"></a>

```python
def reset_automute_enabled() -> None
```

##### `reset_collect_cloudwatch_alarms` <a name="reset_collect_cloudwatch_alarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms"></a>

```python
def reset_collect_cloudwatch_alarms() -> None
```

##### `reset_collect_custom_metrics` <a name="reset_collect_custom_metrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics"></a>

```python
def reset_collect_custom_metrics() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_namespace_filters` <a name="reset_namespace_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters"></a>

```python
def reset_namespace_filters() -> None
```

##### `reset_tag_filters` <a name="reset_tag_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters"></a>

```python
def reset_tag_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters">namespace_filters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters">tag_filters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput">automute_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput">collect_cloudwatch_alarms_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput">collect_custom_metrics_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput">namespace_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput">tag_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled">automute_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms">collect_cloudwatch_alarms</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics">collect_custom_metrics</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_filters`<sup>Required</sup> <a name="namespace_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters"></a>

```python
namespace_filters: IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a>

---

##### `tag_filters`<sup>Required</sup> <a name="tag_filters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters"></a>

```python
tag_filters: IntegrationAwsAccountMetricsConfigTagFiltersList
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a>

---

##### `automute_enabled_input`<sup>Optional</sup> <a name="automute_enabled_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput"></a>

```python
automute_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collect_cloudwatch_alarms_input`<sup>Optional</sup> <a name="collect_cloudwatch_alarms_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput"></a>

```python
collect_cloudwatch_alarms_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collect_custom_metrics_input`<sup>Optional</sup> <a name="collect_custom_metrics_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput"></a>

```python
collect_custom_metrics_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace_filters_input`<sup>Optional</sup> <a name="namespace_filters_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput"></a>

```python
namespace_filters_input: typing.Union[IResolvable, IntegrationAwsAccountMetricsConfigNamespaceFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>]

---

##### `tag_filters_input`<sup>Optional</sup> <a name="tag_filters_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput"></a>

```python
tag_filters_input: typing.Union[IResolvable, typing.List[IntegrationAwsAccountMetricsConfigTagFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]

---

##### `automute_enabled`<sup>Required</sup> <a name="automute_enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled"></a>

```python
automute_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collect_cloudwatch_alarms`<sup>Required</sup> <a name="collect_cloudwatch_alarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms"></a>

```python
collect_cloudwatch_alarms: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collect_custom_metrics`<sup>Required</sup> <a name="collect_custom_metrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics"></a>

```python
collect_custom_metrics: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountMetricsConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>]

---


### IntegrationAwsAccountMetricsConfigTagFiltersList <a name="IntegrationAwsAccountMetricsConfigTagFiltersList" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationAwsAccountMetricsConfigTagFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IntegrationAwsAccountMetricsConfigTagFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]]

---


### IntegrationAwsAccountMetricsConfigTagFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigTagFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountMetricsConfigTagFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>]

---


### IntegrationAwsAccountResourcesConfigOutputReference <a name="IntegrationAwsAccountResourcesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection">reset_cloud_security_posture_management_collection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection">reset_extended_collection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_security_posture_management_collection` <a name="reset_cloud_security_posture_management_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection"></a>

```python
def reset_cloud_security_posture_management_collection() -> None
```

##### `reset_extended_collection` <a name="reset_extended_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection"></a>

```python
def reset_extended_collection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput">cloud_security_posture_management_collection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput">extended_collection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection">cloud_security_posture_management_collection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection">extended_collection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_security_posture_management_collection_input`<sup>Optional</sup> <a name="cloud_security_posture_management_collection_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput"></a>

```python
cloud_security_posture_management_collection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_collection_input`<sup>Optional</sup> <a name="extended_collection_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput"></a>

```python
extended_collection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloud_security_posture_management_collection`<sup>Required</sup> <a name="cloud_security_posture_management_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection"></a>

```python
cloud_security_posture_management_collection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_collection`<sup>Required</sup> <a name="extended_collection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection"></a>

```python
extended_collection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountResourcesConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>]

---


### IntegrationAwsAccountTracesConfigOutputReference <a name="IntegrationAwsAccountTracesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices">put_xray_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices">reset_xray_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_xray_services` <a name="put_xray_services" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices"></a>

```python
def put_xray_services(
  include_all: typing.Union[bool, IResolvable] = None,
  include_only: typing.List[str] = None
) -> None
```

###### `include_all`<sup>Optional</sup> <a name="include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices.parameter.includeAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

###### `include_only`<sup>Optional</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices.parameter.includeOnly"></a>

- *Type:* typing.List[str]

Include only these services. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.54.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

##### `reset_xray_services` <a name="reset_xray_services" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices"></a>

```python
def reset_xray_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices">xray_services</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput">xray_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `xray_services`<sup>Required</sup> <a name="xray_services" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices"></a>

```python
xray_services: IntegrationAwsAccountTracesConfigXrayServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a>

---

##### `xray_services_input`<sup>Optional</sup> <a name="xray_services_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput"></a>

```python
xray_services_input: typing.Union[IResolvable, IntegrationAwsAccountTracesConfigXrayServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountTracesConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>]

---


### IntegrationAwsAccountTracesConfigXrayServicesOutputReference <a name="IntegrationAwsAccountTracesConfigXrayServicesOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws_account

integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll">reset_include_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly">reset_include_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_all` <a name="reset_include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll"></a>

```python
def reset_include_all() -> None
```

##### `reset_include_only` <a name="reset_include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly"></a>

```python
def reset_include_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput">include_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput">include_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll">include_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly">include_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_all_input`<sup>Optional</sup> <a name="include_all_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput"></a>

```python
include_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_only_input`<sup>Optional</sup> <a name="include_only_input" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput"></a>

```python
include_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_all`<sup>Required</sup> <a name="include_all" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll"></a>

```python
include_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_only`<sup>Required</sup> <a name="include_only" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly"></a>

```python
include_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationAwsAccountTracesConfigXrayServices]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>]

---



