# `integrationAzure` Submodule <a name="`integrationAzure` Submodule" id="@cdktf/provider-datadog.integrationAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAzure <a name="IntegrationAzure" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure datadog_integration_azure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzure;

IntegrationAzure.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .tenantName(java.lang.String)
//  .appServicePlanFilters(java.lang.String)
//  .automute(java.lang.Boolean)
//  .automute(IResolvable)
//  .containerAppFilters(java.lang.String)
//  .cspmEnabled(java.lang.Boolean)
//  .cspmEnabled(IResolvable)
//  .customMetricsEnabled(java.lang.Boolean)
//  .customMetricsEnabled(IResolvable)
//  .hostFilters(java.lang.String)
//  .metricsEnabled(java.lang.Boolean)
//  .metricsEnabled(IResolvable)
//  .metricsEnabledDefault(java.lang.Boolean)
//  .metricsEnabledDefault(IResolvable)
//  .resourceCollectionEnabled(java.lang.Boolean)
//  .resourceCollectionEnabled(IResolvable)
//  .resourceProviderConfigs(IResolvable)
//  .resourceProviderConfigs(java.util.List<IntegrationAzureResourceProviderConfigs>)
//  .usageMetricsEnabled(java.lang.Boolean)
//  .usageMetricsEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Your Azure web application ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | (Required for Initial Creation) Your Azure web application secret key. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.tenantName">tenantName</a></code> | <code>java.lang.String</code> | Your Azure Active Directory ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.appServicePlanFilters">appServicePlanFilters</a></code> | <code>java.lang.String</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.automute">automute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Silence monitors for expected Azure VM shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.containerAppFilters">containerAppFilters</a></code> | <code>java.lang.String</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.cspmEnabled">cspmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.customMetricsEnabled">customMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable custom metrics for your organization. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.hostFilters">hostFilters</a></code> | <code>java.lang.String</code> | String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Azure metrics for your organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabledDefault">metricsEnabledDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceProviderConfigs">resourceProviderConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>></code> | Configuration settings applied to resources from the specified Azure resource providers. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.usageMetricsEnabled">usageMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable azure.usage metrics for your organization. Defaults to `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Your Azure web application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#client_id IntegrationAzure#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

(Required for Initial Creation) Your Azure web application secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#client_secret IntegrationAzure#client_secret}

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.tenantName"></a>

- *Type:* java.lang.String

Your Azure Active Directory ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#tenant_name IntegrationAzure#tenant_name}

---

##### `appServicePlanFilters`<sup>Optional</sup> <a name="appServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.appServicePlanFilters"></a>

- *Type:* java.lang.String

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans.

Only App Service Plans that match one of the defined tags are imported into Datadog. The rest, including the apps and functions running on them, are ignored. This also filters the metrics for any App or Function running on the App Service Plan(s). Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#app_service_plan_filters IntegrationAzure#app_service_plan_filters}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.automute"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Silence monitors for expected Azure VM shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#automute IntegrationAzure#automute}

---

##### `containerAppFilters`<sup>Optional</sup> <a name="containerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.containerAppFilters"></a>

- *Type:* java.lang.String

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps.

Only Container Apps that match one of the defined tags are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#container_app_filters IntegrationAzure#container_app_filters}

---

##### `cspmEnabled`<sup>Optional</sup> <a name="cspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.cspmEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.

Note: This requires `resource_collection_enabled` to be set to true. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#cspm_enabled IntegrationAzure#cspm_enabled}

---

##### `customMetricsEnabled`<sup>Optional</sup> <a name="customMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.customMetricsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable custom metrics for your organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#custom_metrics_enabled IntegrationAzure#custom_metrics_enabled}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.hostFilters"></a>

- *Type:* java.lang.String

String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure.

Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red` Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#host_filters IntegrationAzure#host_filters}

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Azure metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}

---

##### `metricsEnabledDefault`<sup>Optional</sup> <a name="metricsEnabledDefault" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.metricsEnabledDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#metrics_enabled_default IntegrationAzure#metrics_enabled_default}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceCollectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#resource_collection_enabled IntegrationAzure#resource_collection_enabled}

---

##### `resourceProviderConfigs`<sup>Optional</sup> <a name="resourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.resourceProviderConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>>

Configuration settings applied to resources from the specified Azure resource providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#resource_provider_configs IntegrationAzure#resource_provider_configs}

---

##### `usageMetricsEnabled`<sup>Optional</sup> <a name="usageMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.Initializer.parameter.usageMetricsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable azure.usage metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#usage_metrics_enabled IntegrationAzure#usage_metrics_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs">putResourceProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters">resetAppServicePlanFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute">resetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters">resetContainerAppFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled">resetCspmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled">resetCustomMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters">resetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabledDefault">resetMetricsEnabledDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceCollectionEnabled">resetResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceProviderConfigs">resetResourceProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetUsageMetricsEnabled">resetUsageMetricsEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceProviderConfigs` <a name="putResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs"></a>

```java
public void putResourceProviderConfigs(IResolvable OR java.util.List<IntegrationAzureResourceProviderConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.putResourceProviderConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>>

---

##### `resetAppServicePlanFilters` <a name="resetAppServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAppServicePlanFilters"></a>

```java
public void resetAppServicePlanFilters()
```

##### `resetAutomute` <a name="resetAutomute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetAutomute"></a>

```java
public void resetAutomute()
```

##### `resetContainerAppFilters` <a name="resetContainerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetContainerAppFilters"></a>

```java
public void resetContainerAppFilters()
```

##### `resetCspmEnabled` <a name="resetCspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCspmEnabled"></a>

```java
public void resetCspmEnabled()
```

##### `resetCustomMetricsEnabled` <a name="resetCustomMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetCustomMetricsEnabled"></a>

```java
public void resetCustomMetricsEnabled()
```

##### `resetHostFilters` <a name="resetHostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetHostFilters"></a>

```java
public void resetHostFilters()
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabled"></a>

```java
public void resetMetricsEnabled()
```

##### `resetMetricsEnabledDefault` <a name="resetMetricsEnabledDefault" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetMetricsEnabledDefault"></a>

```java
public void resetMetricsEnabledDefault()
```

##### `resetResourceCollectionEnabled` <a name="resetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceCollectionEnabled"></a>

```java
public void resetResourceCollectionEnabled()
```

##### `resetResourceProviderConfigs` <a name="resetResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetResourceProviderConfigs"></a>

```java
public void resetResourceProviderConfigs()
```

##### `resetUsageMetricsEnabled` <a name="resetUsageMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.resetUsageMetricsEnabled"></a>

```java
public void resetUsageMetricsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzure;

IntegrationAzure.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzure;

IntegrationAzure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzure;

IntegrationAzure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzure;

IntegrationAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationAzure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationAzure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigs">resourceProviderConfigs</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList">IntegrationAzureResourceProviderConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput">appServicePlanFiltersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput">automuteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput">containerAppFiltersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput">cspmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput">customMetricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput">hostFiltersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefaultInput">metricsEnabledDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabledInput">resourceCollectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigsInput">resourceProviderConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput">tenantNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabledInput">usageMetricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters">appServicePlanFilters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute">automute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters">containerAppFilters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled">cspmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled">customMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters">hostFilters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefault">metricsEnabledDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabled">usageMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceProviderConfigs`<sup>Required</sup> <a name="resourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigs"></a>

```java
public IntegrationAzureResourceProviderConfigsList getResourceProviderConfigs();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList">IntegrationAzureResourceProviderConfigsList</a>

---

##### `appServicePlanFiltersInput`<sup>Optional</sup> <a name="appServicePlanFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFiltersInput"></a>

```java
public java.lang.String getAppServicePlanFiltersInput();
```

- *Type:* java.lang.String

---

##### `automuteInput`<sup>Optional</sup> <a name="automuteInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automuteInput"></a>

```java
public java.lang.Object getAutomuteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `containerAppFiltersInput`<sup>Optional</sup> <a name="containerAppFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFiltersInput"></a>

```java
public java.lang.String getContainerAppFiltersInput();
```

- *Type:* java.lang.String

---

##### `cspmEnabledInput`<sup>Optional</sup> <a name="cspmEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabledInput"></a>

```java
public java.lang.Object getCspmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customMetricsEnabledInput`<sup>Optional</sup> <a name="customMetricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabledInput"></a>

```java
public java.lang.Object getCustomMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostFiltersInput`<sup>Optional</sup> <a name="hostFiltersInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFiltersInput"></a>

```java
public java.lang.String getHostFiltersInput();
```

- *Type:* java.lang.String

---

##### `metricsEnabledDefaultInput`<sup>Optional</sup> <a name="metricsEnabledDefaultInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefaultInput"></a>

```java
public java.lang.Object getMetricsEnabledDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledInput"></a>

```java
public java.lang.Object getMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceCollectionEnabledInput`<sup>Optional</sup> <a name="resourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabledInput"></a>

```java
public java.lang.Object getResourceCollectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceProviderConfigsInput`<sup>Optional</sup> <a name="resourceProviderConfigsInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceProviderConfigsInput"></a>

```java
public java.lang.Object getResourceProviderConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>>

---

##### `tenantNameInput`<sup>Optional</sup> <a name="tenantNameInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantNameInput"></a>

```java
public java.lang.String getTenantNameInput();
```

- *Type:* java.lang.String

---

##### `usageMetricsEnabledInput`<sup>Optional</sup> <a name="usageMetricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabledInput"></a>

```java
public java.lang.Object getUsageMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appServicePlanFilters`<sup>Required</sup> <a name="appServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.appServicePlanFilters"></a>

```java
public java.lang.String getAppServicePlanFilters();
```

- *Type:* java.lang.String

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.automute"></a>

```java
public java.lang.Object getAutomute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `containerAppFilters`<sup>Required</sup> <a name="containerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.containerAppFilters"></a>

```java
public java.lang.String getContainerAppFilters();
```

- *Type:* java.lang.String

---

##### `cspmEnabled`<sup>Required</sup> <a name="cspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.cspmEnabled"></a>

```java
public java.lang.Object getCspmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `customMetricsEnabled`<sup>Required</sup> <a name="customMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.customMetricsEnabled"></a>

```java
public java.lang.Object getCustomMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostFilters`<sup>Required</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.hostFilters"></a>

```java
public java.lang.String getHostFilters();
```

- *Type:* java.lang.String

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabled"></a>

```java
public java.lang.Object getMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `metricsEnabledDefault`<sup>Required</sup> <a name="metricsEnabledDefault" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.metricsEnabledDefault"></a>

```java
public java.lang.Object getMetricsEnabledDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceCollectionEnabled`<sup>Required</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.resourceCollectionEnabled"></a>

```java
public java.lang.Object getResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

---

##### `usageMetricsEnabled`<sup>Required</sup> <a name="usageMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.usageMetricsEnabled"></a>

```java
public java.lang.Object getUsageMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAzureConfig <a name="IntegrationAzureConfig" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzureConfig;

IntegrationAzureConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .tenantName(java.lang.String)
//  .appServicePlanFilters(java.lang.String)
//  .automute(java.lang.Boolean)
//  .automute(IResolvable)
//  .containerAppFilters(java.lang.String)
//  .cspmEnabled(java.lang.Boolean)
//  .cspmEnabled(IResolvable)
//  .customMetricsEnabled(java.lang.Boolean)
//  .customMetricsEnabled(IResolvable)
//  .hostFilters(java.lang.String)
//  .metricsEnabled(java.lang.Boolean)
//  .metricsEnabled(IResolvable)
//  .metricsEnabledDefault(java.lang.Boolean)
//  .metricsEnabledDefault(IResolvable)
//  .resourceCollectionEnabled(java.lang.Boolean)
//  .resourceCollectionEnabled(IResolvable)
//  .resourceProviderConfigs(IResolvable)
//  .resourceProviderConfigs(java.util.List<IntegrationAzureResourceProviderConfigs>)
//  .usageMetricsEnabled(java.lang.Boolean)
//  .usageMetricsEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Your Azure web application ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | (Required for Initial Creation) Your Azure web application secret key. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName">tenantName</a></code> | <code>java.lang.String</code> | Your Azure Active Directory ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters">appServicePlanFilters</a></code> | <code>java.lang.String</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute">automute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Silence monitors for expected Azure VM shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters">containerAppFilters</a></code> | <code>java.lang.String</code> | This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled">cspmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled">customMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable custom metrics for your organization. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters">hostFilters</a></code> | <code>java.lang.String</code> | String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Azure metrics for your organization. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabledDefault">metricsEnabledDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceProviderConfigs">resourceProviderConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>></code> | Configuration settings applied to resources from the specified Azure resource providers. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.usageMetricsEnabled">usageMetricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable azure.usage metrics for your organization. Defaults to `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Your Azure web application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#client_id IntegrationAzure#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

(Required for Initial Creation) Your Azure web application secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#client_secret IntegrationAzure#client_secret}

---

##### `tenantName`<sup>Required</sup> <a name="tenantName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.tenantName"></a>

```java
public java.lang.String getTenantName();
```

- *Type:* java.lang.String

Your Azure Active Directory ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#tenant_name IntegrationAzure#tenant_name}

---

##### `appServicePlanFilters`<sup>Optional</sup> <a name="appServicePlanFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.appServicePlanFilters"></a>

```java
public java.lang.String getAppServicePlanFilters();
```

- *Type:* java.lang.String

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure App Service Plans.

Only App Service Plans that match one of the defined tags are imported into Datadog. The rest, including the apps and functions running on them, are ignored. This also filters the metrics for any App or Function running on the App Service Plan(s). Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#app_service_plan_filters IntegrationAzure#app_service_plan_filters}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.automute"></a>

```java
public java.lang.Object getAutomute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Silence monitors for expected Azure VM shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#automute IntegrationAzure#automute}

---

##### `containerAppFilters`<sup>Optional</sup> <a name="containerAppFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.containerAppFilters"></a>

```java
public java.lang.String getContainerAppFilters();
```

- *Type:* java.lang.String

This comma-separated list of tags (in the form `key:value,key:value`) defines a filter that Datadog uses when collecting metrics from Azure Container Apps.

Only Container Apps that match one of the defined tags are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#container_app_filters IntegrationAzure#container_app_filters}

---

##### `cspmEnabled`<sup>Optional</sup> <a name="cspmEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.cspmEnabled"></a>

```java
public java.lang.Object getCspmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog’s Cloud Security Management product scans resource configurations monitored by this app registration.

Note: This requires `resource_collection_enabled` to be set to true. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#cspm_enabled IntegrationAzure#cspm_enabled}

---

##### `customMetricsEnabled`<sup>Optional</sup> <a name="customMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.customMetricsEnabled"></a>

```java
public java.lang.Object getCustomMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable custom metrics for your organization. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#custom_metrics_enabled IntegrationAzure#custom_metrics_enabled}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.hostFilters"></a>

```java
public java.lang.String getHostFilters();
```

- *Type:* java.lang.String

String of host tag(s) (in the form `key:value,key:value`) defines a filter that Datadog will use when collecting metrics from Azure.

Limit the Azure instances that are pulled into Datadog by using tags. Only hosts that match one of the defined tags are imported into Datadog. e.x. `env:production,deploymentgroup:red` Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#host_filters IntegrationAzure#host_filters}

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabled"></a>

```java
public java.lang.Object getMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Azure metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}

---

##### `metricsEnabledDefault`<sup>Optional</sup> <a name="metricsEnabledDefault" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.metricsEnabledDefault"></a>

```java
public java.lang.Object getMetricsEnabledDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Azure metrics for your organization for resource providers where no resource provider config is specified. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#metrics_enabled_default IntegrationAzure#metrics_enabled_default}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceCollectionEnabled"></a>

```java
public java.lang.Object getResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog collects metadata and configuration info from cloud resources (such as compute instances, databases, and load balancers) monitored by this app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#resource_collection_enabled IntegrationAzure#resource_collection_enabled}

---

##### `resourceProviderConfigs`<sup>Optional</sup> <a name="resourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.resourceProviderConfigs"></a>

```java
public java.lang.Object getResourceProviderConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>>

Configuration settings applied to resources from the specified Azure resource providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#resource_provider_configs IntegrationAzure#resource_provider_configs}

---

##### `usageMetricsEnabled`<sup>Optional</sup> <a name="usageMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureConfig.property.usageMetricsEnabled"></a>

```java
public java.lang.Object getUsageMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable azure.usage metrics for your organization. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#usage_metrics_enabled IntegrationAzure#usage_metrics_enabled}

---

### IntegrationAzureResourceProviderConfigs <a name="IntegrationAzureResourceProviderConfigs" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzureResourceProviderConfigs;

IntegrationAzureResourceProviderConfigs.builder()
//  .metricsEnabled(java.lang.Boolean)
//  .metricsEnabled(IResolvable)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#namespace IntegrationAzure#namespace}. |

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.metricsEnabled"></a>

```java
public java.lang.Object getMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#metrics_enabled IntegrationAzure#metrics_enabled}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.69.0/docs/resources/integration_azure#namespace IntegrationAzure#namespace}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAzureResourceProviderConfigsList <a name="IntegrationAzureResourceProviderConfigsList" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzureResourceProviderConfigsList;

new IntegrationAzureResourceProviderConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get"></a>

```java
public IntegrationAzureResourceProviderConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>>

---


### IntegrationAzureResourceProviderConfigsOutputReference <a name="IntegrationAzureResourceProviderConfigsOutputReference" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_azure.IntegrationAzureResourceProviderConfigsOutputReference;

new IntegrationAzureResourceProviderConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetMetricsEnabled"></a>

```java
public void resetMetricsEnabled()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabledInput"></a>

```java
public java.lang.Object getMetricsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.metricsEnabled"></a>

```java
public java.lang.Object getMetricsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAzure.IntegrationAzureResourceProviderConfigs">IntegrationAzureResourceProviderConfigs</a>

---



