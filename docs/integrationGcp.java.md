# `integrationGcp` Submodule <a name="`integrationGcp` Submodule" id="@cdktf/provider-datadog.integrationGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcp <a name="IntegrationGcp" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp datadog_integration_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcp;

IntegrationGcp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clientEmail(java.lang.String)
    .clientId(java.lang.String)
    .privateKey(java.lang.String)
    .privateKeyId(java.lang.String)
    .projectId(java.lang.String)
//  .automute(java.lang.Boolean|IResolvable)
//  .cloudRunRevisionFilters(java.util.List<java.lang.String>)
//  .cspmResourceCollectionEnabled(java.lang.Boolean|IResolvable)
//  .hostFilters(java.lang.String)
//  .isResourceChangeCollectionEnabled(java.lang.Boolean|IResolvable)
//  .isSecurityCommandCenterEnabled(java.lang.Boolean|IResolvable)
//  .monitoredResourceConfigs(IResolvable|java.util.List<IntegrationGcpMonitoredResourceConfigs>)
//  .resourceCollectionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Your email found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | Your ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Your private key name found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Your private key ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Your Google Cloud project ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.automute">automute</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Silence monitors for expected GCE instance shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.cloudRunRevisionFilters">cloudRunRevisionFilters</a></code> | <code>java.util.List<java.lang.String></code> | List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.hostFilters">hostFilters</a></code> | <code>java.lang.String</code> | List of filters to limit the VM instances that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.isResourceChangeCollectionEnabled">isResourceChangeCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog scans for all resource change data in your Google Cloud environment. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog will attempt to collect Security Command Center Findings. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.monitoredResourceConfigs">monitoredResourceConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>></code> | Configurations for GCP monitored resources. Only monitored resources that apply to specified filters are imported into Datadog. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog scans for all resources in your GCP environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientEmail"></a>

- *Type:* java.lang.String

Your email found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#client_email IntegrationGcp#client_email}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

Your ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#client_id IntegrationGcp#client_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

Your private key name found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#private_key IntegrationGcp#private_key}

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.privateKeyId"></a>

- *Type:* java.lang.String

Your private key ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#private_key_id IntegrationGcp#private_key_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Your Google Cloud project ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#project_id IntegrationGcp#project_id}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.automute"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Silence monitors for expected GCE instance shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#automute IntegrationGcp#automute}

---

##### `cloudRunRevisionFilters`<sup>Optional</sup> <a name="cloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.cloudRunRevisionFilters"></a>

- *Type:* java.util.List<java.lang.String>

List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags.

Only Cloud Run revision resources that apply to specified filters are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#cloud_run_revision_filters IntegrationGcp#cloud_run_revision_filters}

---

##### `cspmResourceCollectionEnabled`<sup>Optional</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.cspmResourceCollectionEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether Datadog collects cloud security posture management resources from your GCP project.

If enabled, requires `resource_collection_enabled` to also be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#cspm_resource_collection_enabled IntegrationGcp#cspm_resource_collection_enabled}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.hostFilters"></a>

- *Type:* java.lang.String

List of filters to limit the VM instances that are pulled into Datadog by using tags.

Only VM instance resources that apply to specified filters are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#host_filters IntegrationGcp#host_filters}

---

##### `isResourceChangeCollectionEnabled`<sup>Optional</sup> <a name="isResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.isResourceChangeCollectionEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, Datadog scans for all resource change data in your Google Cloud environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#is_resource_change_collection_enabled IntegrationGcp#is_resource_change_collection_enabled}

---

##### `isSecurityCommandCenterEnabled`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.isSecurityCommandCenterEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, Datadog will attempt to collect Security Command Center Findings.

Note: This requires additional permissions on the service account. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#is_security_command_center_enabled IntegrationGcp#is_security_command_center_enabled}

---

##### `monitoredResourceConfigs`<sup>Optional</sup> <a name="monitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.monitoredResourceConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>>

Configurations for GCP monitored resources. Only monitored resources that apply to specified filters are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#monitored_resource_configs IntegrationGcp#monitored_resource_configs}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.Initializer.parameter.resourceCollectionEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, Datadog scans for all resources in your GCP environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#resource_collection_enabled IntegrationGcp#resource_collection_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.putMonitoredResourceConfigs">putMonitoredResourceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute">resetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCloudRunRevisionFilters">resetCloudRunRevisionFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled">resetCspmResourceCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters">resetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsResourceChangeCollectionEnabled">resetIsResourceChangeCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsSecurityCommandCenterEnabled">resetIsSecurityCommandCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetMonitoredResourceConfigs">resetMonitoredResourceConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetResourceCollectionEnabled">resetResourceCollectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMonitoredResourceConfigs` <a name="putMonitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.putMonitoredResourceConfigs"></a>

```java
public void putMonitoredResourceConfigs(IResolvable|java.util.List<IntegrationGcpMonitoredResourceConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.putMonitoredResourceConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>>

---

##### `resetAutomute` <a name="resetAutomute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetAutomute"></a>

```java
public void resetAutomute()
```

##### `resetCloudRunRevisionFilters` <a name="resetCloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCloudRunRevisionFilters"></a>

```java
public void resetCloudRunRevisionFilters()
```

##### `resetCspmResourceCollectionEnabled` <a name="resetCspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetCspmResourceCollectionEnabled"></a>

```java
public void resetCspmResourceCollectionEnabled()
```

##### `resetHostFilters` <a name="resetHostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetHostFilters"></a>

```java
public void resetHostFilters()
```

##### `resetIsResourceChangeCollectionEnabled` <a name="resetIsResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsResourceChangeCollectionEnabled"></a>

```java
public void resetIsResourceChangeCollectionEnabled()
```

##### `resetIsSecurityCommandCenterEnabled` <a name="resetIsSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetIsSecurityCommandCenterEnabled"></a>

```java
public void resetIsSecurityCommandCenterEnabled()
```

##### `resetMonitoredResourceConfigs` <a name="resetMonitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetMonitoredResourceConfigs"></a>

```java
public void resetMonitoredResourceConfigs()
```

##### `resetResourceCollectionEnabled` <a name="resetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.resetResourceCollectionEnabled"></a>

```java
public void resetResourceCollectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationGcp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcp;

IntegrationGcp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcp;

IntegrationGcp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcp;

IntegrationGcp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcp;

IntegrationGcp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationGcp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationGcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationGcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigs">monitoredResourceConfigs</a></code> | <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList">IntegrationGcpMonitoredResourceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput">automuteInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput">clientEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFiltersInput">cloudRunRevisionFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput">cspmResourceCollectionEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput">hostFiltersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabledInput">isResourceChangeCollectionEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabledInput">isSecurityCommandCenterEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigsInput">monitoredResourceConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput">privateKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabledInput">resourceCollectionEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute">automute</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFilters">cloudRunRevisionFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters">hostFilters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabled">isResourceChangeCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `monitoredResourceConfigs`<sup>Required</sup> <a name="monitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigs"></a>

```java
public IntegrationGcpMonitoredResourceConfigsList getMonitoredResourceConfigs();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList">IntegrationGcpMonitoredResourceConfigsList</a>

---

##### `automuteInput`<sup>Optional</sup> <a name="automuteInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automuteInput"></a>

```java
public java.lang.Boolean|IResolvable getAutomuteInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmailInput"></a>

```java
public java.lang.String getClientEmailInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `cloudRunRevisionFiltersInput`<sup>Optional</sup> <a name="cloudRunRevisionFiltersInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFiltersInput"></a>

```java
public java.util.List<java.lang.String> getCloudRunRevisionFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cspmResourceCollectionEnabledInput`<sup>Optional</sup> <a name="cspmResourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCspmResourceCollectionEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hostFiltersInput`<sup>Optional</sup> <a name="hostFiltersInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFiltersInput"></a>

```java
public java.lang.String getHostFiltersInput();
```

- *Type:* java.lang.String

---

##### `isResourceChangeCollectionEnabledInput`<sup>Optional</sup> <a name="isResourceChangeCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsResourceChangeCollectionEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabledInput`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsSecurityCommandCenterEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `monitoredResourceConfigsInput`<sup>Optional</sup> <a name="monitoredResourceConfigsInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.monitoredResourceConfigsInput"></a>

```java
public IResolvable|java.util.List<IntegrationGcpMonitoredResourceConfigs> getMonitoredResourceConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>>

---

##### `privateKeyIdInput`<sup>Optional</sup> <a name="privateKeyIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyIdInput"></a>

```java
public java.lang.String getPrivateKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `resourceCollectionEnabledInput`<sup>Optional</sup> <a name="resourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getResourceCollectionEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.automute"></a>

```java
public java.lang.Boolean|IResolvable getAutomute();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `cloudRunRevisionFilters`<sup>Required</sup> <a name="cloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cloudRunRevisionFilters"></a>

```java
public java.util.List<java.lang.String> getCloudRunRevisionFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cspmResourceCollectionEnabled`<sup>Required</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.cspmResourceCollectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCspmResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `hostFilters`<sup>Required</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.hostFilters"></a>

```java
public java.lang.String getHostFilters();
```

- *Type:* java.lang.String

---

##### `isResourceChangeCollectionEnabled`<sup>Required</sup> <a name="isResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isResourceChangeCollectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsResourceChangeCollectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabled`<sup>Required</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.isSecurityCommandCenterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsSecurityCommandCenterEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `resourceCollectionEnabled`<sup>Required</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.resourceCollectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpConfig <a name="IntegrationGcpConfig" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcpConfig;

IntegrationGcpConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clientEmail(java.lang.String)
    .clientId(java.lang.String)
    .privateKey(java.lang.String)
    .privateKeyId(java.lang.String)
    .projectId(java.lang.String)
//  .automute(java.lang.Boolean|IResolvable)
//  .cloudRunRevisionFilters(java.util.List<java.lang.String>)
//  .cspmResourceCollectionEnabled(java.lang.Boolean|IResolvable)
//  .hostFilters(java.lang.String)
//  .isResourceChangeCollectionEnabled(java.lang.Boolean|IResolvable)
//  .isSecurityCommandCenterEnabled(java.lang.Boolean|IResolvable)
//  .monitoredResourceConfigs(IResolvable|java.util.List<IntegrationGcpMonitoredResourceConfigs>)
//  .resourceCollectionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Your email found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Your ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Your private key name found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId">privateKeyId</a></code> | <code>java.lang.String</code> | Your private key ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Your Google Cloud project ID found in your JSON service account key. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute">automute</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Silence monitors for expected GCE instance shutdowns. Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cloudRunRevisionFilters">cloudRunRevisionFilters</a></code> | <code>java.util.List<java.lang.String></code> | List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled">cspmResourceCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters">hostFilters</a></code> | <code>java.lang.String</code> | List of filters to limit the VM instances that are pulled into Datadog by using tags. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isResourceChangeCollectionEnabled">isResourceChangeCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog scans for all resource change data in your Google Cloud environment. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog will attempt to collect Security Command Center Findings. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.monitoredResourceConfigs">monitoredResourceConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>></code> | Configurations for GCP monitored resources. Only monitored resources that apply to specified filters are imported into Datadog. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog scans for all resources in your GCP environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

Your email found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#client_email IntegrationGcp#client_email}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Your ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#client_id IntegrationGcp#client_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Your private key name found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#private_key IntegrationGcp#private_key}

---

##### `privateKeyId`<sup>Required</sup> <a name="privateKeyId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.privateKeyId"></a>

```java
public java.lang.String getPrivateKeyId();
```

- *Type:* java.lang.String

Your private key ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#private_key_id IntegrationGcp#private_key_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Your Google Cloud project ID found in your JSON service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#project_id IntegrationGcp#project_id}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.automute"></a>

```java
public java.lang.Boolean|IResolvable getAutomute();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Silence monitors for expected GCE instance shutdowns. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#automute IntegrationGcp#automute}

---

##### `cloudRunRevisionFilters`<sup>Optional</sup> <a name="cloudRunRevisionFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cloudRunRevisionFilters"></a>

```java
public java.util.List<java.lang.String> getCloudRunRevisionFilters();
```

- *Type:* java.util.List<java.lang.String>

List of filters to limit the Cloud Run revisions that are pulled into Datadog by using tags.

Only Cloud Run revision resources that apply to specified filters are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#cloud_run_revision_filters IntegrationGcp#cloud_run_revision_filters}

---

##### `cspmResourceCollectionEnabled`<sup>Optional</sup> <a name="cspmResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.cspmResourceCollectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCspmResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether Datadog collects cloud security posture management resources from your GCP project.

If enabled, requires `resource_collection_enabled` to also be enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#cspm_resource_collection_enabled IntegrationGcp#cspm_resource_collection_enabled}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.hostFilters"></a>

```java
public java.lang.String getHostFilters();
```

- *Type:* java.lang.String

List of filters to limit the VM instances that are pulled into Datadog by using tags.

Only VM instance resources that apply to specified filters are imported into Datadog. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#host_filters IntegrationGcp#host_filters}

---

##### `isResourceChangeCollectionEnabled`<sup>Optional</sup> <a name="isResourceChangeCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isResourceChangeCollectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsResourceChangeCollectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, Datadog scans for all resource change data in your Google Cloud environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#is_resource_change_collection_enabled IntegrationGcp#is_resource_change_collection_enabled}

---

##### `isSecurityCommandCenterEnabled`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.isSecurityCommandCenterEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsSecurityCommandCenterEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, Datadog will attempt to collect Security Command Center Findings.

Note: This requires additional permissions on the service account. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#is_security_command_center_enabled IntegrationGcp#is_security_command_center_enabled}

---

##### `monitoredResourceConfigs`<sup>Optional</sup> <a name="monitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.monitoredResourceConfigs"></a>

```java
public IResolvable|java.util.List<IntegrationGcpMonitoredResourceConfigs> getMonitoredResourceConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>>

Configurations for GCP monitored resources. Only monitored resources that apply to specified filters are imported into Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#monitored_resource_configs IntegrationGcp#monitored_resource_configs}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpConfig.property.resourceCollectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

When enabled, Datadog scans for all resources in your GCP environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#resource_collection_enabled IntegrationGcp#resource_collection_enabled}

---

### IntegrationGcpMonitoredResourceConfigs <a name="IntegrationGcpMonitoredResourceConfigs" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcpMonitoredResourceConfigs;

IntegrationGcpMonitoredResourceConfigs.builder()
//  .filters(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#filters IntegrationGcp#filters}. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#type IntegrationGcp#type}. |

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#filters IntegrationGcp#filters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/integration_gcp#type IntegrationGcp#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationGcpMonitoredResourceConfigsList <a name="IntegrationGcpMonitoredResourceConfigsList" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcpMonitoredResourceConfigsList;

new IntegrationGcpMonitoredResourceConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.get"></a>

```java
public IntegrationGcpMonitoredResourceConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IntegrationGcpMonitoredResourceConfigs> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>>

---


### IntegrationGcpMonitoredResourceConfigsOutputReference <a name="IntegrationGcpMonitoredResourceConfigsOutputReference" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp.IntegrationGcpMonitoredResourceConfigsOutputReference;

new IntegrationGcpMonitoredResourceConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilters` <a name="resetFilters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filtersInput">filtersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filters">filters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filtersInput"></a>

```java
public java.util.List<java.lang.String> getFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.filters"></a>

```java
public java.util.List<java.lang.String> getFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|IntegrationGcpMonitoredResourceConfigs getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.integrationGcp.IntegrationGcpMonitoredResourceConfigs">IntegrationGcpMonitoredResourceConfigs</a>

---



