# `integrationAzure` Submodule <a name="`integrationAzure` Submodule" id="@cdktf/provider-datadog.integrationAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAzure <a name="IntegrationAzure" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure datadog_integration_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzure(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  client_id: str,
  client_secret: str,
  tenant_name: str,
  app_service_plan_filters: str = None,
  automute: bool | IResolvable = None,
  container_app_filters: str = None,
  cspm_enabled: bool | IResolvable = None,
  custom_metrics_enabled: bool | IResolvable = None,
  host_filters: str = None,
  metrics_enabled: bool | IResolvable = None,
  metrics_enabled_default: bool | IResolvable = None,
  resource_collection_enabled: bool | IResolvable = None,
  resource_provider_configs: IResolvable | typing.List[IntegrationAzureResourceProviderConfigs] = None,
  usage_metrics_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Your Azure web application ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | (Required for Initial Creation) Your Azure web application secret key. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.tenantName">tenant_name</a></code> | <code>str</code> | Your Azure Active Directory ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.appServicePlanFilters">app_service_plan_filters</a></code> | <code>str</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.automute">automute</a></code> | <code>bool \| cdktf.IResolvable</code> | Silence monitors for expected Azure VM shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.containerAppFilters">container_app_filters</a></code> | <code>str</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.cspmEnabled">cspm_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.customMetricsEnabled">custom_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable custom metrics for your organization. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.hostFilters">host_filters</a></code> | <code>str</code> | String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable Azure metrics for your organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabledDefault">metrics_enabled_default</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceCollectionEnabled">resource_collection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceProviderConfigs">resource_provider_configs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]</code> | Configuration settings applied to resources from the specified Azure resource providers. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.usageMetricsEnabled">usage_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable azure.usage metrics for your organization. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientId"></a>

- *Type:* str

Your Azure web application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#client_id IntegrationAzure#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientSecret"></a>

- *Type:* str

(Required for Initial Creation) Your Azure web application secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#client_secret IntegrationAzure#client_secret}

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.tenantName"></a>

- *Type:* str

Your Azure Active Directory ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#tenant_name IntegrationAzure#tenant_name}

---

##### `app_service_plan_filters`<sup>Optional</sup> <a name="app_service_plan_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.appServicePlanFilters"></a>

- *Type:* str

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans.

Only App Service Plans that match one of the defined tags are imported into Datadog. The rest, including the apps and functions running on them, are ignored. This also filters the metrics for any App or Function running on the App Service Plan(s). Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#app_service_plan_filters IntegrationAzure#app_service_plan_filters}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.automute"></a>

- *Type:* bool | cdktf.IResolvable

Silence monitors for expected Azure VM shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#automute IntegrationAzure#automute}

---

##### `container_app_filters`<sup>Optional</sup> <a name="container_app_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.containerAppFilters"></a>

- *Type:* str

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps.

Only Container Apps that match one of the defined tags are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#container_app_filters IntegrationAzure#container_app_filters}

---

##### `cspm_enabled`<sup>Optional</sup> <a name="cspm_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.cspmEnabled"></a>

- *Type:* bool | cdktf.IResolvable

When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.

Note: This requires `resource_collection_enabled` to be set to true. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#cspm_enabled IntegrationAzure#cspm_enabled}

---

##### `custom_metrics_enabled`<sup>Optional</sup> <a name="custom_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.customMetricsEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Enable custom metrics for your organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#custom_metrics_enabled IntegrationAzure#custom_metrics_enabled}

---

##### `host_filters`<sup>Optional</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.hostFilters"></a>

- *Type:* str

String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure.

Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red` Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#host_filters IntegrationAzure#host_filters}

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Enable Azure metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}

---

##### `metrics_enabled_default`<sup>Optional</sup> <a name="metrics_enabled_default" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabledDefault"></a>

- *Type:* bool | cdktf.IResolvable

Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#metrics_enabled_default IntegrationAzure#metrics_enabled_default}

---

##### `resource_collection_enabled`<sup>Optional</sup> <a name="resource_collection_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceCollectionEnabled"></a>

- *Type:* bool | cdktf.IResolvable

When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#resource_collection_enabled IntegrationAzure#resource_collection_enabled}

---

##### `resource_provider_configs`<sup>Optional</sup> <a name="resource_provider_configs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceProviderConfigs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]

Configuration settings applied to resources from the specified Azure resource providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#resource_provider_configs IntegrationAzure#resource_provider_configs}

---

##### `usage_metrics_enabled`<sup>Optional</sup> <a name="usage_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.usageMetricsEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Enable azure.usage metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#usage_metrics_enabled IntegrationAzure#usage_metrics_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs">put_resource_provider_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters">reset_app_service_plan_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute">reset_automute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters">reset_container_app_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled">reset_cspm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled">reset_custom_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters">reset_host_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabledDefault">reset_metrics_enabled_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceCollectionEnabled">reset_resource_collection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceProviderConfigs">reset_resource_provider_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetUsageMetricsEnabled">reset_usage_metrics_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_provider_configs` <a name="put_resource_provider_configs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs"></a>

```python
def put_resource_provider_configs(
  value: IResolvable | typing.List[IntegrationAzureResourceProviderConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]

---

##### `reset_app_service_plan_filters` <a name="reset_app_service_plan_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters"></a>

```python
def reset_app_service_plan_filters() -> None
```

##### `reset_automute` <a name="reset_automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute"></a>

```python
def reset_automute() -> None
```

##### `reset_container_app_filters` <a name="reset_container_app_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters"></a>

```python
def reset_container_app_filters() -> None
```

##### `reset_cspm_enabled` <a name="reset_cspm_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled"></a>

```python
def reset_cspm_enabled() -> None
```

##### `reset_custom_metrics_enabled` <a name="reset_custom_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled"></a>

```python
def reset_custom_metrics_enabled() -> None
```

##### `reset_host_filters` <a name="reset_host_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters"></a>

```python
def reset_host_filters() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_metrics_enabled_default` <a name="reset_metrics_enabled_default" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabledDefault"></a>

```python
def reset_metrics_enabled_default() -> None
```

##### `reset_resource_collection_enabled` <a name="reset_resource_collection_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceCollectionEnabled"></a>

```python
def reset_resource_collection_enabled() -> None
```

##### `reset_resource_provider_configs` <a name="reset_resource_provider_configs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceProviderConfigs"></a>

```python
def reset_resource_provider_configs() -> None
```

##### `reset_usage_metrics_enabled` <a name="reset_usage_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetUsageMetricsEnabled"></a>

```python
def reset_usage_metrics_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationAzure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigs">resource_provider_configs</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList">IntegrationAzureResourceProviderConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput">app_service_plan_filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput">automute_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput">container_app_filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput">cspm_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput">custom_metrics_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput">host_filters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefaultInput">metrics_enabled_default_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabledInput">resource_collection_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigsInput">resource_provider_configs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput">tenant_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabledInput">usage_metrics_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters">app_service_plan_filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute">automute</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters">container_app_filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled">cspm_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled">custom_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters">host_filters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefault">metrics_enabled_default</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabled">resource_collection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName">tenant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabled">usage_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_provider_configs`<sup>Required</sup> <a name="resource_provider_configs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigs"></a>

```python
resource_provider_configs: IntegrationAzureResourceProviderConfigsList
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList">IntegrationAzureResourceProviderConfigsList</a>

---

##### `app_service_plan_filters_input`<sup>Optional</sup> <a name="app_service_plan_filters_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput"></a>

```python
app_service_plan_filters_input: str
```

- *Type:* str

---

##### `automute_input`<sup>Optional</sup> <a name="automute_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput"></a>

```python
automute_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `container_app_filters_input`<sup>Optional</sup> <a name="container_app_filters_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput"></a>

```python
container_app_filters_input: str
```

- *Type:* str

---

##### `cspm_enabled_input`<sup>Optional</sup> <a name="cspm_enabled_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput"></a>

```python
cspm_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `custom_metrics_enabled_input`<sup>Optional</sup> <a name="custom_metrics_enabled_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput"></a>

```python
custom_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host_filters_input`<sup>Optional</sup> <a name="host_filters_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput"></a>

```python
host_filters_input: str
```

- *Type:* str

---

##### `metrics_enabled_default_input`<sup>Optional</sup> <a name="metrics_enabled_default_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefaultInput"></a>

```python
metrics_enabled_default_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `resource_collection_enabled_input`<sup>Optional</sup> <a name="resource_collection_enabled_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabledInput"></a>

```python
resource_collection_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `resource_provider_configs_input`<sup>Optional</sup> <a name="resource_provider_configs_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigsInput"></a>

```python
resource_provider_configs_input: IResolvable | typing.List[IntegrationAzureResourceProviderConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]

---

##### `tenant_name_input`<sup>Optional</sup> <a name="tenant_name_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput"></a>

```python
tenant_name_input: str
```

- *Type:* str

---

##### `usage_metrics_enabled_input`<sup>Optional</sup> <a name="usage_metrics_enabled_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabledInput"></a>

```python
usage_metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `app_service_plan_filters`<sup>Required</sup> <a name="app_service_plan_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters"></a>

```python
app_service_plan_filters: str
```

- *Type:* str

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute"></a>

```python
automute: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `container_app_filters`<sup>Required</sup> <a name="container_app_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters"></a>

```python
container_app_filters: str
```

- *Type:* str

---

##### `cspm_enabled`<sup>Required</sup> <a name="cspm_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled"></a>

```python
cspm_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `custom_metrics_enabled`<sup>Required</sup> <a name="custom_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled"></a>

```python
custom_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `host_filters`<sup>Required</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters"></a>

```python
host_filters: str
```

- *Type:* str

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `metrics_enabled_default`<sup>Required</sup> <a name="metrics_enabled_default" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefault"></a>

```python
metrics_enabled_default: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `resource_collection_enabled`<sup>Required</sup> <a name="resource_collection_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabled"></a>

```python
resource_collection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

---

##### `usage_metrics_enabled`<sup>Required</sup> <a name="usage_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabled"></a>

```python
usage_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAzureConfig <a name="IntegrationAzureConfig" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  client_id: str,
  client_secret: str,
  tenant_name: str,
  app_service_plan_filters: str = None,
  automute: bool | IResolvable = None,
  container_app_filters: str = None,
  cspm_enabled: bool | IResolvable = None,
  custom_metrics_enabled: bool | IResolvable = None,
  host_filters: str = None,
  metrics_enabled: bool | IResolvable = None,
  metrics_enabled_default: bool | IResolvable = None,
  resource_collection_enabled: bool | IResolvable = None,
  resource_provider_configs: IResolvable | typing.List[IntegrationAzureResourceProviderConfigs] = None,
  usage_metrics_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId">client_id</a></code> | <code>str</code> | Your Azure web application ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | (Required for Initial Creation) Your Azure web application secret key. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName">tenant_name</a></code> | <code>str</code> | Your Azure Active Directory ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters">app_service_plan_filters</a></code> | <code>str</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute">automute</a></code> | <code>bool \| cdktf.IResolvable</code> | Silence monitors for expected Azure VM shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters">container_app_filters</a></code> | <code>str</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled">cspm_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled">custom_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable custom metrics for your organization. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters">host_filters</a></code> | <code>str</code> | String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable Azure metrics for your organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabledDefault">metrics_enabled_default</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceCollectionEnabled">resource_collection_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceProviderConfigs">resource_provider_configs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]</code> | Configuration settings applied to resources from the specified Azure resource providers. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.usageMetricsEnabled">usage_metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable azure.usage metrics for your organization. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Your Azure web application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#client_id IntegrationAzure#client_id}

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

(Required for Initial Creation) Your Azure web application secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#client_secret IntegrationAzure#client_secret}

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

Your Azure Active Directory ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#tenant_name IntegrationAzure#tenant_name}

---

##### `app_service_plan_filters`<sup>Optional</sup> <a name="app_service_plan_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters"></a>

```python
app_service_plan_filters: str
```

- *Type:* str

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans.

Only App Service Plans that match one of the defined tags are imported into Datadog. The rest, including the apps and functions running on them, are ignored. This also filters the metrics for any App or Function running on the App Service Plan(s). Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#app_service_plan_filters IntegrationAzure#app_service_plan_filters}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute"></a>

```python
automute: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Silence monitors for expected Azure VM shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#automute IntegrationAzure#automute}

---

##### `container_app_filters`<sup>Optional</sup> <a name="container_app_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters"></a>

```python
container_app_filters: str
```

- *Type:* str

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps.

Only Container Apps that match one of the defined tags are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#container_app_filters IntegrationAzure#container_app_filters}

---

##### `cspm_enabled`<sup>Optional</sup> <a name="cspm_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled"></a>

```python
cspm_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.

Note: This requires `resource_collection_enabled` to be set to true. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#cspm_enabled IntegrationAzure#cspm_enabled}

---

##### `custom_metrics_enabled`<sup>Optional</sup> <a name="custom_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled"></a>

```python
custom_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable custom metrics for your organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#custom_metrics_enabled IntegrationAzure#custom_metrics_enabled}

---

##### `host_filters`<sup>Optional</sup> <a name="host_filters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters"></a>

```python
host_filters: str
```

- *Type:* str

String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure.

Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red` Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#host_filters IntegrationAzure#host_filters}

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable Azure metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}

---

##### `metrics_enabled_default`<sup>Optional</sup> <a name="metrics_enabled_default" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabledDefault"></a>

```python
metrics_enabled_default: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#metrics_enabled_default IntegrationAzure#metrics_enabled_default}

---

##### `resource_collection_enabled`<sup>Optional</sup> <a name="resource_collection_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceCollectionEnabled"></a>

```python
resource_collection_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#resource_collection_enabled IntegrationAzure#resource_collection_enabled}

---

##### `resource_provider_configs`<sup>Optional</sup> <a name="resource_provider_configs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceProviderConfigs"></a>

```python
resource_provider_configs: IResolvable | typing.List[IntegrationAzureResourceProviderConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]

Configuration settings applied to resources from the specified Azure resource providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#resource_provider_configs IntegrationAzure#resource_provider_configs}

---

##### `usage_metrics_enabled`<sup>Optional</sup> <a name="usage_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.usageMetricsEnabled"></a>

```python
usage_metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable azure.usage metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#usage_metrics_enabled IntegrationAzure#usage_metrics_enabled}

---

### IntegrationAzureResourceProviderConfigs <a name="IntegrationAzureResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzureResourceProviderConfigs(
  metrics_enabled: bool | IResolvable = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#namespace IntegrationAzure#namespace}. |

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.81.0/docs/resources/integration_azure#namespace IntegrationAzure#namespace}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAzureResourceProviderConfigsList <a name="IntegrationAzureResourceProviderConfigsList" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzureResourceProviderConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IntegrationAzureResourceProviderConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IntegrationAzureResourceProviderConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>]

---


### IntegrationAzureResourceProviderConfigsOutputReference <a name="IntegrationAzureResourceProviderConfigsOutputReference" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_datadog import integration_azure

integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IntegrationAzureResourceProviderConfigs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>

---



