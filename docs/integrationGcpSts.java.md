# `integrationGcpSts` Submodule <a name="`integrationGcpSts` Submodule" id="@cdktf/provider-datadog.integrationGcpSts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationGcpSts <a name="IntegrationGcpSts" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts datadog_integration_gcp_sts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp_sts.IntegrationGcpSts;

IntegrationGcpSts.Builder.create(Construct scope, java.lang.String id)
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
    .clientEmail(java.lang.String)
//  .accountTags(java.util.List<java.lang.String>)
//  .automute(java.lang.Boolean)
//  .automute(IResolvable)
//  .hostFilters(java.util.List<java.lang.String>)
//  .isCspmEnabled(java.lang.Boolean)
//  .isCspmEnabled(IResolvable)
//  .isSecurityCommandCenterEnabled(java.lang.Boolean)
//  .isSecurityCommandCenterEnabled(IResolvable)
//  .resourceCollectionEnabled(java.lang.Boolean)
//  .resourceCollectionEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Your service account email address. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.accountTags">accountTags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to be associated with GCP metrics and service checks from your account. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.automute">automute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.hostFilters">hostFilters</a></code> | <code>java.util.List<java.lang.String></code> | Your Host Filters. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.isCspmEnabled">isCspmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog will attempt to collect Security Command Center Findings. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog scans for all resources in your GCP environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.clientEmail"></a>

- *Type:* java.lang.String

Your service account email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}

---

##### `accountTags`<sup>Optional</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.accountTags"></a>

- *Type:* java.util.List<java.lang.String>

Tags to be associated with GCP metrics and service checks from your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#account_tags IntegrationGcpSts#account_tags}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.automute"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.hostFilters"></a>

- *Type:* java.util.List<java.lang.String>

Your Host Filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}

---

##### `isCspmEnabled`<sup>Optional</sup> <a name="isCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.isCspmEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Datadog collects cloud security posture management resources from your GCP project.

If enabled, requires `resource_collection_enabled` to also be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}

---

##### `isSecurityCommandCenterEnabled`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.isSecurityCommandCenterEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog will attempt to collect Security Command Center Findings.

Note: This requires additional permissions on the service account. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#is_security_command_center_enabled IntegrationGcpSts#is_security_command_center_enabled}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.Initializer.parameter.resourceCollectionEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog scans for all resources in your GCP environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#resource_collection_enabled IntegrationGcpSts#resource_collection_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAccountTags">resetAccountTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute">resetAutomute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters">resetHostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled">resetIsCspmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsSecurityCommandCenterEnabled">resetIsSecurityCommandCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetResourceCollectionEnabled">resetResourceCollectionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountTags` <a name="resetAccountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAccountTags"></a>

```java
public void resetAccountTags()
```

##### `resetAutomute` <a name="resetAutomute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetAutomute"></a>

```java
public void resetAutomute()
```

##### `resetHostFilters` <a name="resetHostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetHostFilters"></a>

```java
public void resetHostFilters()
```

##### `resetIsCspmEnabled` <a name="resetIsCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsCspmEnabled"></a>

```java
public void resetIsCspmEnabled()
```

##### `resetIsSecurityCommandCenterEnabled` <a name="resetIsSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetIsSecurityCommandCenterEnabled"></a>

```java
public void resetIsSecurityCommandCenterEnabled()
```

##### `resetResourceCollectionEnabled` <a name="resetResourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.resetResourceCollectionEnabled"></a>

```java
public void resetResourceCollectionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationGcpSts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp_sts.IntegrationGcpSts;

IntegrationGcpSts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp_sts.IntegrationGcpSts;

IntegrationGcpSts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp_sts.IntegrationGcpSts;

IntegrationGcpSts.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp_sts.IntegrationGcpSts;

IntegrationGcpSts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationGcpSts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationGcpSts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationGcpSts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationGcpSts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationGcpSts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail">delegateAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTagsInput">accountTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput">automuteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput">clientEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput">hostFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput">isCspmEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabledInput">isSecurityCommandCenterEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabledInput">resourceCollectionEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTags">accountTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute">automute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters">hostFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled">isCspmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `delegateAccountEmail`<sup>Required</sup> <a name="delegateAccountEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.delegateAccountEmail"></a>

```java
public java.lang.String getDelegateAccountEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountTagsInput`<sup>Optional</sup> <a name="accountTagsInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTagsInput"></a>

```java
public java.util.List<java.lang.String> getAccountTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `automuteInput`<sup>Optional</sup> <a name="automuteInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automuteInput"></a>

```java
public java.lang.Object getAutomuteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientEmailInput`<sup>Optional</sup> <a name="clientEmailInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmailInput"></a>

```java
public java.lang.String getClientEmailInput();
```

- *Type:* java.lang.String

---

##### `hostFiltersInput`<sup>Optional</sup> <a name="hostFiltersInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFiltersInput"></a>

```java
public java.util.List<java.lang.String> getHostFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isCspmEnabledInput`<sup>Optional</sup> <a name="isCspmEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabledInput"></a>

```java
public java.lang.Object getIsCspmEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabledInput`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabledInput"></a>

```java
public java.lang.Object getIsSecurityCommandCenterEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceCollectionEnabledInput`<sup>Optional</sup> <a name="resourceCollectionEnabledInput" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabledInput"></a>

```java
public java.lang.Object getResourceCollectionEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accountTags`<sup>Required</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.accountTags"></a>

```java
public java.util.List<java.lang.String> getAccountTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `automute`<sup>Required</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.automute"></a>

```java
public java.lang.Object getAutomute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

---

##### `hostFilters`<sup>Required</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.hostFilters"></a>

```java
public java.util.List<java.lang.String> getHostFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isCspmEnabled`<sup>Required</sup> <a name="isCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isCspmEnabled"></a>

```java
public java.lang.Object getIsCspmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSecurityCommandCenterEnabled`<sup>Required</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.isSecurityCommandCenterEnabled"></a>

```java
public java.lang.Object getIsSecurityCommandCenterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceCollectionEnabled`<sup>Required</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.resourceCollectionEnabled"></a>

```java
public java.lang.Object getResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpSts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationGcpStsConfig <a name="IntegrationGcpStsConfig" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_gcp_sts.IntegrationGcpStsConfig;

IntegrationGcpStsConfig.builder()
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
    .clientEmail(java.lang.String)
//  .accountTags(java.util.List<java.lang.String>)
//  .automute(java.lang.Boolean)
//  .automute(IResolvable)
//  .hostFilters(java.util.List<java.lang.String>)
//  .isCspmEnabled(java.lang.Boolean)
//  .isCspmEnabled(IResolvable)
//  .isSecurityCommandCenterEnabled(java.lang.Boolean)
//  .isSecurityCommandCenterEnabled(IResolvable)
//  .resourceCollectionEnabled(java.lang.Boolean)
//  .resourceCollectionEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail">clientEmail</a></code> | <code>java.lang.String</code> | Your service account email address. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.accountTags">accountTags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to be associated with GCP metrics and service checks from your account. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute">automute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Silence monitors for expected GCE instance shutdowns. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters">hostFilters</a></code> | <code>java.util.List<java.lang.String></code> | Your Host Filters. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled">isCspmEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Datadog collects cloud security posture management resources from your GCP project. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isSecurityCommandCenterEnabled">isSecurityCommandCenterEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog will attempt to collect Security Command Center Findings. |
| <code><a href="#@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.resourceCollectionEnabled">resourceCollectionEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When enabled, Datadog scans for all resources in your GCP environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.clientEmail"></a>

```java
public java.lang.String getClientEmail();
```

- *Type:* java.lang.String

Your service account email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#client_email IntegrationGcpSts#client_email}

---

##### `accountTags`<sup>Optional</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.accountTags"></a>

```java
public java.util.List<java.lang.String> getAccountTags();
```

- *Type:* java.util.List<java.lang.String>

Tags to be associated with GCP metrics and service checks from your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#account_tags IntegrationGcpSts#account_tags}

---

##### `automute`<sup>Optional</sup> <a name="automute" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.automute"></a>

```java
public java.lang.Object getAutomute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Silence monitors for expected GCE instance shutdowns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#automute IntegrationGcpSts#automute}

---

##### `hostFilters`<sup>Optional</sup> <a name="hostFilters" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.hostFilters"></a>

```java
public java.util.List<java.lang.String> getHostFilters();
```

- *Type:* java.util.List<java.lang.String>

Your Host Filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#host_filters IntegrationGcpSts#host_filters}

---

##### `isCspmEnabled`<sup>Optional</sup> <a name="isCspmEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isCspmEnabled"></a>

```java
public java.lang.Object getIsCspmEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Datadog collects cloud security posture management resources from your GCP project.

If enabled, requires `resource_collection_enabled` to also be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#is_cspm_enabled IntegrationGcpSts#is_cspm_enabled}

---

##### `isSecurityCommandCenterEnabled`<sup>Optional</sup> <a name="isSecurityCommandCenterEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.isSecurityCommandCenterEnabled"></a>

```java
public java.lang.Object getIsSecurityCommandCenterEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog will attempt to collect Security Command Center Findings.

Note: This requires additional permissions on the service account. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#is_security_command_center_enabled IntegrationGcpSts#is_security_command_center_enabled}

---

##### `resourceCollectionEnabled`<sup>Optional</sup> <a name="resourceCollectionEnabled" id="@cdktf/provider-datadog.integrationGcpSts.IntegrationGcpStsConfig.property.resourceCollectionEnabled"></a>

```java
public java.lang.Object getResourceCollectionEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When enabled, Datadog scans for all resources in your GCP environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.46.0/docs/resources/integration_gcp_sts#resource_collection_enabled IntegrationGcpSts#resource_collection_enabled}

---



