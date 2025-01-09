# `integrationAws` Submodule <a name="`integrationAws` Submodule" id="@cdktf/provider-datadog.integrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAws <a name="IntegrationAws" id="@cdktf/provider-datadog.integrationAws.IntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws datadog_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws

integrationAws.IntegrationAws(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key_id: str = None,
  account_id: str = None,
  account_specific_namespace_rules: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  cspm_resource_collection_enabled: str = None,
  excluded_regions: typing.List[str] = None,
  extended_resource_collection_enabled: str = None,
  filter_tags: typing.List[str] = None,
  host_tags: typing.List[str] = None,
  id: str = None,
  metrics_collection_enabled: str = None,
  resource_collection_enabled: str = None,
  role_name: str = None,
  secret_access_key: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accessKeyId">access_key_id</a></code> | <code>str</code> | Your AWS access key ID. Only required if your AWS account is a GovCloud or China account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountSpecificNamespaceRules">account_specific_namespace_rules</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | Enables or disables metric collection for specific AWS namespaces for this AWS account only. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.cspmResourceCollectionEnabled">cspm_resource_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects cloud security posture management resources from your AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.excludedRegions">excluded_regions</a></code> | <code>typing.List[str]</code> | An array of AWS regions to exclude from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.extendedResourceCollectionEnabled">extended_resource_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.filterTags">filter_tags</a></code> | <code>typing.List[str]</code> | Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.hostTags">host_tags</a></code> | <code>typing.List[str]</code> | Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#id IntegrationAws#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.metricsCollectionEnabled">metrics_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects metrics for this AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.resourceCollectionEnabled">resource_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Your Datadog role delegation name. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Your AWS secret access key. Only required if your AWS account is a GovCloud or China account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accessKeyId"></a>

- *Type:* str

Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#access_key_id IntegrationAws#access_key_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountId"></a>

- *Type:* str

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#account_id IntegrationAws#account_id}

---

##### `account_specific_namespace_rules`<sup>Optional</sup> <a name="account_specific_namespace_rules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountSpecificNamespaceRules"></a>

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

Enables or disables metric collection for specific AWS namespaces for this AWS account only.

A list of namespaces can be found at the [available namespace rules API endpoint](https://docs.datadoghq.com/api/v1/aws-integration/#list-namespace-rules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#account_specific_namespace_rules IntegrationAws#account_specific_namespace_rules}

---

##### `cspm_resource_collection_enabled`<sup>Optional</sup> <a name="cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.cspmResourceCollectionEnabled"></a>

- *Type:* str

Whether Datadog collects cloud security posture management resources from your AWS account.

This includes additional resources not covered under the general resource_collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#cspm_resource_collection_enabled IntegrationAws#cspm_resource_collection_enabled}

---

##### `excluded_regions`<sup>Optional</sup> <a name="excluded_regions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.excludedRegions"></a>

- *Type:* typing.List[str]

An array of AWS regions to exclude from metrics collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#excluded_regions IntegrationAws#excluded_regions}

---

##### `extended_resource_collection_enabled`<sup>Optional</sup> <a name="extended_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.extendedResourceCollectionEnabled"></a>

- *Type:* str

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#extended_resource_collection_enabled IntegrationAws#extended_resource_collection_enabled}

---

##### `filter_tags`<sup>Optional</sup> <a name="filter_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.filterTags"></a>

- *Type:* typing.List[str]

Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2.

Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. e.x. `env:production,instance-type:c1.*,!region:us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#filter_tags IntegrationAws#filter_tags}

---

##### `host_tags`<sup>Optional</sup> <a name="host_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.hostTags"></a>

- *Type:* typing.List[str]

Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#host_tags IntegrationAws#host_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#id IntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics_collection_enabled`<sup>Optional</sup> <a name="metrics_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.metricsCollectionEnabled"></a>

- *Type:* str

Whether Datadog collects metrics for this AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#metrics_collection_enabled IntegrationAws#metrics_collection_enabled}

---

##### `resource_collection_enabled`<sup>Optional</sup> <a name="resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.resourceCollectionEnabled"></a>

- *Type:* str

Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#resource_collection_enabled IntegrationAws#resource_collection_enabled}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.roleName"></a>

- *Type:* str

Your Datadog role delegation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#role_name IntegrationAws#role_name}

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.secretAccessKey"></a>

- *Type:* str

Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#secret_access_key IntegrationAws#secret_access_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules">reset_account_specific_namespace_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled">reset_cspm_resource_collection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions">reset_excluded_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled">reset_extended_resource_collection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetFilterTags">reset_filter_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetHostTags">reset_host_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled">reset_metrics_collection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled">reset_resource_collection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_key_id` <a name="reset_access_key_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_account_specific_namespace_rules` <a name="reset_account_specific_namespace_rules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules"></a>

```python
def reset_account_specific_namespace_rules() -> None
```

##### `reset_cspm_resource_collection_enabled` <a name="reset_cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled"></a>

```python
def reset_cspm_resource_collection_enabled() -> None
```

##### `reset_excluded_regions` <a name="reset_excluded_regions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions"></a>

```python
def reset_excluded_regions() -> None
```

##### `reset_extended_resource_collection_enabled` <a name="reset_extended_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled"></a>

```python
def reset_extended_resource_collection_enabled() -> None
```

##### `reset_filter_tags` <a name="reset_filter_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetFilterTags"></a>

```python
def reset_filter_tags() -> None
```

##### `reset_host_tags` <a name="reset_host_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetHostTags"></a>

```python
def reset_host_tags() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metrics_collection_enabled` <a name="reset_metrics_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled"></a>

```python
def reset_metrics_collection_enabled() -> None
```

##### `reset_resource_collection_enabled` <a name="reset_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled"></a>

```python
def reset_resource_collection_enabled() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationAws resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws

integrationAws.IntegrationAws.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws

integrationAws.IntegrationAws.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws

integrationAws.IntegrationAws.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws

integrationAws.IntegrationAws.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationAws to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput">account_specific_namespace_rules_input</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput">cspm_resource_collection_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput">excluded_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput">extended_resource_collection_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput">filter_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput">host_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput">metrics_collection_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput">resource_collection_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules">account_specific_namespace_rules</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled">cspm_resource_collection_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions">excluded_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled">extended_resource_collection_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTags">filter_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTags">host_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled">metrics_collection_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled">resource_collection_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_specific_namespace_rules_input`<sup>Optional</sup> <a name="account_specific_namespace_rules_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput"></a>

```python
account_specific_namespace_rules_input: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `cspm_resource_collection_enabled_input`<sup>Optional</sup> <a name="cspm_resource_collection_enabled_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput"></a>

```python
cspm_resource_collection_enabled_input: str
```

- *Type:* str

---

##### `excluded_regions_input`<sup>Optional</sup> <a name="excluded_regions_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput"></a>

```python
excluded_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extended_resource_collection_enabled_input`<sup>Optional</sup> <a name="extended_resource_collection_enabled_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput"></a>

```python
extended_resource_collection_enabled_input: str
```

- *Type:* str

---

##### `filter_tags_input`<sup>Optional</sup> <a name="filter_tags_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput"></a>

```python
filter_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_tags_input`<sup>Optional</sup> <a name="host_tags_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput"></a>

```python
host_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metrics_collection_enabled_input`<sup>Optional</sup> <a name="metrics_collection_enabled_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput"></a>

```python
metrics_collection_enabled_input: str
```

- *Type:* str

---

##### `resource_collection_enabled_input`<sup>Optional</sup> <a name="resource_collection_enabled_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput"></a>

```python
resource_collection_enabled_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_specific_namespace_rules`<sup>Required</sup> <a name="account_specific_namespace_rules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules"></a>

```python
account_specific_namespace_rules: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

---

##### `cspm_resource_collection_enabled`<sup>Required</sup> <a name="cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled"></a>

```python
cspm_resource_collection_enabled: str
```

- *Type:* str

---

##### `excluded_regions`<sup>Required</sup> <a name="excluded_regions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions"></a>

```python
excluded_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `extended_resource_collection_enabled`<sup>Required</sup> <a name="extended_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled"></a>

```python
extended_resource_collection_enabled: str
```

- *Type:* str

---

##### `filter_tags`<sup>Required</sup> <a name="filter_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTags"></a>

```python
filter_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_tags`<sup>Required</sup> <a name="host_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTags"></a>

```python
host_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metrics_collection_enabled`<sup>Required</sup> <a name="metrics_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled"></a>

```python
metrics_collection_enabled: str
```

- *Type:* str

---

##### `resource_collection_enabled`<sup>Required</sup> <a name="resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled"></a>

```python
resource_collection_enabled: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsConfig <a name="IntegrationAwsConfig" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_aws

integrationAws.IntegrationAwsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key_id: str = None,
  account_id: str = None,
  account_specific_namespace_rules: typing.Mapping[typing.Union[bool, IResolvable]] = None,
  cspm_resource_collection_enabled: str = None,
  excluded_regions: typing.List[str] = None,
  extended_resource_collection_enabled: str = None,
  filter_tags: typing.List[str] = None,
  host_tags: typing.List[str] = None,
  id: str = None,
  metrics_collection_enabled: str = None,
  resource_collection_enabled: str = None,
  role_name: str = None,
  secret_access_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Your AWS access key ID. Only required if your AWS account is a GovCloud or China account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId">account_id</a></code> | <code>str</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules">account_specific_namespace_rules</a></code> | <code>typing.Mapping[typing.Union[bool, cdktf.IResolvable]]</code> | Enables or disables metric collection for specific AWS namespaces for this AWS account only. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled">cspm_resource_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects cloud security posture management resources from your AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions">excluded_regions</a></code> | <code>typing.List[str]</code> | An array of AWS regions to exclude from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled">extended_resource_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags">filter_tags</a></code> | <code>typing.List[str]</code> | Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags">host_tags</a></code> | <code>typing.List[str]</code> | Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#id IntegrationAws#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled">metrics_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects metrics for this AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled">resource_collection_enabled</a></code> | <code>str</code> | Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName">role_name</a></code> | <code>str</code> | Your Datadog role delegation name. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Your AWS secret access key. Only required if your AWS account is a GovCloud or China account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#access_key_id IntegrationAws#access_key_id}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#account_id IntegrationAws#account_id}

---

##### `account_specific_namespace_rules`<sup>Optional</sup> <a name="account_specific_namespace_rules" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules"></a>

```python
account_specific_namespace_rules: typing.Mapping[typing.Union[bool, IResolvable]]
```

- *Type:* typing.Mapping[typing.Union[bool, cdktf.IResolvable]]

Enables or disables metric collection for specific AWS namespaces for this AWS account only.

A list of namespaces can be found at the [available namespace rules API endpoint](https://docs.datadoghq.com/api/v1/aws-integration/#list-namespace-rules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#account_specific_namespace_rules IntegrationAws#account_specific_namespace_rules}

---

##### `cspm_resource_collection_enabled`<sup>Optional</sup> <a name="cspm_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled"></a>

```python
cspm_resource_collection_enabled: str
```

- *Type:* str

Whether Datadog collects cloud security posture management resources from your AWS account.

This includes additional resources not covered under the general resource_collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#cspm_resource_collection_enabled IntegrationAws#cspm_resource_collection_enabled}

---

##### `excluded_regions`<sup>Optional</sup> <a name="excluded_regions" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions"></a>

```python
excluded_regions: typing.List[str]
```

- *Type:* typing.List[str]

An array of AWS regions to exclude from metrics collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#excluded_regions IntegrationAws#excluded_regions}

---

##### `extended_resource_collection_enabled`<sup>Optional</sup> <a name="extended_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled"></a>

```python
extended_resource_collection_enabled: str
```

- *Type:* str

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#extended_resource_collection_enabled IntegrationAws#extended_resource_collection_enabled}

---

##### `filter_tags`<sup>Optional</sup> <a name="filter_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags"></a>

```python
filter_tags: typing.List[str]
```

- *Type:* typing.List[str]

Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2.

Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. e.x. `env:production,instance-type:c1.*,!region:us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#filter_tags IntegrationAws#filter_tags}

---

##### `host_tags`<sup>Optional</sup> <a name="host_tags" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags"></a>

```python
host_tags: typing.List[str]
```

- *Type:* typing.List[str]

Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#host_tags IntegrationAws#host_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#id IntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics_collection_enabled`<sup>Optional</sup> <a name="metrics_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled"></a>

```python
metrics_collection_enabled: str
```

- *Type:* str

Whether Datadog collects metrics for this AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#metrics_collection_enabled IntegrationAws#metrics_collection_enabled}

---

##### `resource_collection_enabled`<sup>Optional</sup> <a name="resource_collection_enabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled"></a>

```python
resource_collection_enabled: str
```

- *Type:* str

Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#resource_collection_enabled IntegrationAws#resource_collection_enabled}

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Your Datadog role delegation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#role_name IntegrationAws#role_name}

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.51.0/docs/resources/integration_aws#secret_access_key IntegrationAws#secret_access_key}

---



