# `integrationAws` Submodule <a name="`integrationAws` Submodule" id="@cdktf/provider-datadog.integrationAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAws <a name="IntegrationAws" id="@cdktf/provider-datadog.integrationAws.IntegrationAws"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws datadog_integration_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws.IntegrationAws;

IntegrationAws.Builder.create(Construct scope, java.lang.String id)
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
//  .accessKeyId(java.lang.String)
//  .accountId(java.lang.String)
//  .accountSpecificNamespaceRules(java.util.Map<java.lang.String, java.lang.Boolean)
//  .accountSpecificNamespaceRules(IResolvable>)
//  .cspmResourceCollectionEnabled(java.lang.String)
//  .excludedRegions(java.util.List<java.lang.String>)
//  .extendedResourceCollectionEnabled(java.lang.String)
//  .filterTags(java.util.List<java.lang.String>)
//  .hostTags(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .metricsCollectionEnabled(java.lang.String)
//  .resourceCollectionEnabled(java.lang.String)
//  .roleName(java.lang.String)
//  .secretAccessKey(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Your AWS access key ID. Only required if your AWS account is a GovCloud or China account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountSpecificNamespaceRules">accountSpecificNamespaceRules</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Enables or disables metric collection for specific AWS namespaces for this AWS account only. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects cloud security posture management resources from your AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.excludedRegions">excludedRegions</a></code> | <code>java.util.List<java.lang.String></code> | An array of AWS regions to exclude from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.extendedResourceCollectionEnabled">extendedResourceCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.filterTags">filterTags</a></code> | <code>java.util.List<java.lang.String></code> | Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.hostTags">hostTags</a></code> | <code>java.util.List<java.lang.String></code> | Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#id IntegrationAws#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.metricsCollectionEnabled">metricsCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects metrics for this AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Your Datadog role delegation name. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Your AWS secret access key. Only required if your AWS account is a GovCloud or China account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accessKeyId"></a>

- *Type:* java.lang.String

Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#access_key_id IntegrationAws#access_key_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#account_id IntegrationAws#account_id}

---

##### `accountSpecificNamespaceRules`<sup>Optional</sup> <a name="accountSpecificNamespaceRules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.accountSpecificNamespaceRules"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Enables or disables metric collection for specific AWS namespaces for this AWS account only.

A list of namespaces can be found at the [available namespace rules API endpoint](https://docs.datadoghq.com/api/v1/aws-integration/#list-namespace-rules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#account_specific_namespace_rules IntegrationAws#account_specific_namespace_rules}

---

##### `cspmResourceCollectionEnabled`<sup>Optional</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.cspmResourceCollectionEnabled"></a>

- *Type:* java.lang.String

Whether Datadog collects cloud security posture management resources from your AWS account.

This includes additional resources not covered under the general resource_collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#cspm_resource_collection_enabled IntegrationAws#cspm_resource_collection_enabled}

---

##### `excludedRegions`<sup>Optional</sup> <a name="excludedRegions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.excludedRegions"></a>

- *Type:* java.util.List<java.lang.String>

An array of AWS regions to exclude from metrics collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#excluded_regions IntegrationAws#excluded_regions}

---

##### `extendedResourceCollectionEnabled`<sup>Optional</sup> <a name="extendedResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.extendedResourceCollectionEnabled"></a>

- *Type:* java.lang.String

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#extended_resource_collection_enabled IntegrationAws#extended_resource_collection_enabled}

---

##### `filterTags`<sup>Optional</sup> <a name="filterTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.filterTags"></a>

- *Type:* java.util.List<java.lang.String>

Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2.

Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. e.x. `env:production,instance-type:c1.*,!region:us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#filter_tags IntegrationAws#filter_tags}

---

##### `hostTags`<sup>Optional</sup> <a name="hostTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.hostTags"></a>

- *Type:* java.util.List<java.lang.String>

Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#host_tags IntegrationAws#host_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#id IntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsCollectionEnabled`<sup>Optional</sup> <a name="metricsCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.metricsCollectionEnabled"></a>

- *Type:* java.lang.String

Whether Datadog collects metrics for this AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#metrics_collection_enabled IntegrationAws#metrics_collection_enabled}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.resourceCollectionEnabled"></a>

- *Type:* java.lang.String

Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#resource_collection_enabled IntegrationAws#resource_collection_enabled}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Your Datadog role delegation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#role_name IntegrationAws#role_name}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.Initializer.parameter.secretAccessKey"></a>

- *Type:* java.lang.String

Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#secret_access_key IntegrationAws#secret_access_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules">resetAccountSpecificNamespaceRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled">resetCspmResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions">resetExcludedRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled">resetExtendedResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetFilterTags">resetFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetHostTags">resetHostTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled">resetMetricsCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled">resetResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetAccountSpecificNamespaceRules` <a name="resetAccountSpecificNamespaceRules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetAccountSpecificNamespaceRules"></a>

```java
public void resetAccountSpecificNamespaceRules()
```

##### `resetCspmResourceCollectionEnabled` <a name="resetCspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetCspmResourceCollectionEnabled"></a>

```java
public void resetCspmResourceCollectionEnabled()
```

##### `resetExcludedRegions` <a name="resetExcludedRegions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExcludedRegions"></a>

```java
public void resetExcludedRegions()
```

##### `resetExtendedResourceCollectionEnabled` <a name="resetExtendedResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetExtendedResourceCollectionEnabled"></a>

```java
public void resetExtendedResourceCollectionEnabled()
```

##### `resetFilterTags` <a name="resetFilterTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetFilterTags"></a>

```java
public void resetFilterTags()
```

##### `resetHostTags` <a name="resetHostTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetHostTags"></a>

```java
public void resetHostTags()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetId"></a>

```java
public void resetId()
```

##### `resetMetricsCollectionEnabled` <a name="resetMetricsCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetMetricsCollectionEnabled"></a>

```java
public void resetMetricsCollectionEnabled()
```

##### `resetResourceCollectionEnabled` <a name="resetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetResourceCollectionEnabled"></a>

```java
public void resetResourceCollectionEnabled()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.resetSecretAccessKey"></a>

```java
public void resetSecretAccessKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAws resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws.IntegrationAws;

IntegrationAws.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws.IntegrationAws;

IntegrationAws.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws.IntegrationAws;

IntegrationAws.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws.IntegrationAws;

IntegrationAws.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationAws.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationAws resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationAws to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationAws that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAws to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput">accountSpecificNamespaceRulesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput">cspmResourceCollectionEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput">excludedRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput">extendedResourceCollectionEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput">filterTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput">hostTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput">metricsCollectionEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput">resourceCollectionEnabledInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules">accountSpecificNamespaceRules</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions">excludedRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled">extendedResourceCollectionEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTags">filterTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTags">hostTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled">metricsCollectionEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accountSpecificNamespaceRulesInput`<sup>Optional</sup> <a name="accountSpecificNamespaceRulesInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRulesInput"></a>

```java
public java.lang.Object getAccountSpecificNamespaceRulesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `cspmResourceCollectionEnabledInput`<sup>Optional</sup> <a name="cspmResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabledInput"></a>

```java
public java.lang.String getCspmResourceCollectionEnabledInput();
```

- *Type:* java.lang.String

---

##### `excludedRegionsInput`<sup>Optional</sup> <a name="excludedRegionsInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegionsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `extendedResourceCollectionEnabledInput`<sup>Optional</sup> <a name="extendedResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabledInput"></a>

```java
public java.lang.String getExtendedResourceCollectionEnabledInput();
```

- *Type:* java.lang.String

---

##### `filterTagsInput`<sup>Optional</sup> <a name="filterTagsInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTagsInput"></a>

```java
public java.util.List<java.lang.String> getFilterTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostTagsInput`<sup>Optional</sup> <a name="hostTagsInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTagsInput"></a>

```java
public java.util.List<java.lang.String> getHostTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricsCollectionEnabledInput`<sup>Optional</sup> <a name="metricsCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabledInput"></a>

```java
public java.lang.String getMetricsCollectionEnabledInput();
```

- *Type:* java.lang.String

---

##### `resourceCollectionEnabledInput`<sup>Optional</sup> <a name="resourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabledInput"></a>

```java
public java.lang.String getResourceCollectionEnabledInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `accountSpecificNamespaceRules`<sup>Required</sup> <a name="accountSpecificNamespaceRules" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.accountSpecificNamespaceRules"></a>

```java
public java.lang.Object getAccountSpecificNamespaceRules();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

---

##### `cspmResourceCollectionEnabled`<sup>Required</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.cspmResourceCollectionEnabled"></a>

```java
public java.lang.String getCspmResourceCollectionEnabled();
```

- *Type:* java.lang.String

---

##### `excludedRegions`<sup>Required</sup> <a name="excludedRegions" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.excludedRegions"></a>

```java
public java.util.List<java.lang.String> getExcludedRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `extendedResourceCollectionEnabled`<sup>Required</sup> <a name="extendedResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.extendedResourceCollectionEnabled"></a>

```java
public java.lang.String getExtendedResourceCollectionEnabled();
```

- *Type:* java.lang.String

---

##### `filterTags`<sup>Required</sup> <a name="filterTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.filterTags"></a>

```java
public java.util.List<java.lang.String> getFilterTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hostTags`<sup>Required</sup> <a name="hostTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.hostTags"></a>

```java
public java.util.List<java.lang.String> getHostTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricsCollectionEnabled`<sup>Required</sup> <a name="metricsCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.metricsCollectionEnabled"></a>

```java
public java.lang.String getMetricsCollectionEnabled();
```

- *Type:* java.lang.String

---

##### `resourceCollectionEnabled`<sup>Required</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.resourceCollectionEnabled"></a>

```java
public java.lang.String getResourceCollectionEnabled();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAws.IntegrationAws.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsConfig <a name="IntegrationAwsConfig" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws.IntegrationAwsConfig;

IntegrationAwsConfig.builder()
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
//  .accessKeyId(java.lang.String)
//  .accountId(java.lang.String)
//  .accountSpecificNamespaceRules(java.util.Map<java.lang.String, java.lang.Boolean)
//  .accountSpecificNamespaceRules(IResolvable>)
//  .cspmResourceCollectionEnabled(java.lang.String)
//  .excludedRegions(java.util.List<java.lang.String>)
//  .extendedResourceCollectionEnabled(java.lang.String)
//  .filterTags(java.util.List<java.lang.String>)
//  .hostTags(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .metricsCollectionEnabled(java.lang.String)
//  .resourceCollectionEnabled(java.lang.String)
//  .roleName(java.lang.String)
//  .secretAccessKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Your AWS access key ID. Only required if your AWS account is a GovCloud or China account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules">accountSpecificNamespaceRules</a></code> | <code>java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable></code> | Enables or disables metric collection for specific AWS namespaces for this AWS account only. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects cloud security posture management resources from your AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions">excludedRegions</a></code> | <code>java.util.List<java.lang.String></code> | An array of AWS regions to exclude from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled">extendedResourceCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags">filterTags</a></code> | <code>java.util.List<java.lang.String></code> | Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags">hostTags</a></code> | <code>java.util.List<java.lang.String></code> | Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#id IntegrationAws#id}. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled">metricsCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects metrics for this AWS account. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.String</code> | Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Your Datadog role delegation name. |
| <code><a href="#@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Your AWS secret access key. Only required if your AWS account is a GovCloud or China account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#access_key_id IntegrationAws#access_key_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#account_id IntegrationAws#account_id}

---

##### `accountSpecificNamespaceRules`<sup>Optional</sup> <a name="accountSpecificNamespaceRules" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.accountSpecificNamespaceRules"></a>

```java
public java.lang.Object getAccountSpecificNamespaceRules();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Boolean OR com.hashicorp.cdktf.IResolvable>

Enables or disables metric collection for specific AWS namespaces for this AWS account only.

A list of namespaces can be found at the [available namespace rules API endpoint](https://docs.datadoghq.com/api/v1/aws-integration/#list-namespace-rules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#account_specific_namespace_rules IntegrationAws#account_specific_namespace_rules}

---

##### `cspmResourceCollectionEnabled`<sup>Optional</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.cspmResourceCollectionEnabled"></a>

```java
public java.lang.String getCspmResourceCollectionEnabled();
```

- *Type:* java.lang.String

Whether Datadog collects cloud security posture management resources from your AWS account.

This includes additional resources not covered under the general resource_collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#cspm_resource_collection_enabled IntegrationAws#cspm_resource_collection_enabled}

---

##### `excludedRegions`<sup>Optional</sup> <a name="excludedRegions" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.excludedRegions"></a>

```java
public java.util.List<java.lang.String> getExcludedRegions();
```

- *Type:* java.util.List<java.lang.String>

An array of AWS regions to exclude from metrics collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#excluded_regions IntegrationAws#excluded_regions}

---

##### `extendedResourceCollectionEnabled`<sup>Optional</sup> <a name="extendedResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.extendedResourceCollectionEnabled"></a>

```java
public java.lang.String getExtendedResourceCollectionEnabled();
```

- *Type:* java.lang.String

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. Required for `cspm_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#extended_resource_collection_enabled IntegrationAws#extended_resource_collection_enabled}

---

##### `filterTags`<sup>Optional</sup> <a name="filterTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.filterTags"></a>

```java
public java.util.List<java.lang.String> getFilterTags();
```

- *Type:* java.util.List<java.lang.String>

Array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2.

Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. e.x. `env:production,instance-type:c1.*,!region:us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#filter_tags IntegrationAws#filter_tags}

---

##### `hostTags`<sup>Optional</sup> <a name="hostTags" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.hostTags"></a>

```java
public java.util.List<java.lang.String> getHostTags();
```

- *Type:* java.util.List<java.lang.String>

Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#host_tags IntegrationAws#host_tags}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#id IntegrationAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricsCollectionEnabled`<sup>Optional</sup> <a name="metricsCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.metricsCollectionEnabled"></a>

```java
public java.lang.String getMetricsCollectionEnabled();
```

- *Type:* java.lang.String

Whether Datadog collects metrics for this AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#metrics_collection_enabled IntegrationAws#metrics_collection_enabled}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.resourceCollectionEnabled"></a>

```java
public java.lang.String getResourceCollectionEnabled();
```

- *Type:* java.lang.String

Whether Datadog collects a standard set of resources from your AWS account. **Deprecated.** Deprecated in favor of `extended_resource_collection_enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#resource_collection_enabled IntegrationAws#resource_collection_enabled}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Your Datadog role delegation name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#role_name IntegrationAws#role_name}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktf/provider-datadog.integrationAws.IntegrationAwsConfig.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.48.1/docs/resources/integration_aws#secret_access_key IntegrationAws#secret_access_key}

---



