# `integrationAwsAccount` Submodule <a name="`integrationAwsAccount` Submodule" id="@cdktf/provider-datadog.integrationAwsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsAccount <a name="IntegrationAwsAccount" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account datadog_integration_aws_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccount;

IntegrationAwsAccount.Builder.create(Construct scope, java.lang.String id)
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
    .awsAccountId(java.lang.String)
    .awsPartition(java.lang.String)
//  .accountTags(java.util.List<java.lang.String>)
//  .authConfig(IntegrationAwsAccountAuthConfig)
//  .awsRegions(IntegrationAwsAccountAwsRegions)
//  .logsConfig(IntegrationAwsAccountLogsConfig)
//  .metricsConfig(IntegrationAwsAccountMetricsConfig)
//  .resourcesConfig(IntegrationAwsAccountResourcesConfig)
//  .tracesConfig(IntegrationAwsAccountTracesConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. Invalid aws_account_id. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsPartition">awsPartition</a></code> | <code>java.lang.String</code> | AWS Account partition. Valid values are `aws`, `aws-cn`, `aws-us-gov`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.accountTags">accountTags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to apply to all metrics in the account. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsRegions">awsRegions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | aws_regions block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.logsConfig">logsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.resourcesConfig">resourcesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | resources_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.tracesConfig">tracesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | traces_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Your AWS Account ID without dashes. Invalid aws_account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsPartition"></a>

- *Type:* java.lang.String

AWS Account partition. Valid values are `aws`, `aws-cn`, `aws-us-gov`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}

---

##### `accountTags`<sup>Optional</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.accountTags"></a>

- *Type:* java.util.List<java.lang.String>

Tags to apply to all metrics in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.authConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.awsRegions"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

aws_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}

---

##### `logsConfig`<sup>Optional</sup> <a name="logsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.logsConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.metricsConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}

---

##### `resourcesConfig`<sup>Optional</sup> <a name="resourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.resourcesConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

resources_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}

---

##### `tracesConfig`<sup>Optional</sup> <a name="tracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.Initializer.parameter.tracesConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

traces_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions">putAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig">putLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig">putMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig">putResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig">putTracesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags">resetAccountTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig">resetLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig">resetResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig">resetTracesConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig"></a>

```java
public void putAuthConfig(IntegrationAwsAccountAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

---

##### `putAwsRegions` <a name="putAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions"></a>

```java
public void putAwsRegions(IntegrationAwsAccountAwsRegions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putAwsRegions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

---

##### `putLogsConfig` <a name="putLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig"></a>

```java
public void putLogsConfig(IntegrationAwsAccountLogsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

---

##### `putMetricsConfig` <a name="putMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig"></a>

```java
public void putMetricsConfig(IntegrationAwsAccountMetricsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

---

##### `putResourcesConfig` <a name="putResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig"></a>

```java
public void putResourcesConfig(IntegrationAwsAccountResourcesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putResourcesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

---

##### `putTracesConfig` <a name="putTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig"></a>

```java
public void putTracesConfig(IntegrationAwsAccountTracesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.putTracesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

---

##### `resetAccountTags` <a name="resetAccountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAccountTags"></a>

```java
public void resetAccountTags()
```

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAuthConfig"></a>

```java
public void resetAuthConfig()
```

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetLogsConfig` <a name="resetLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetLogsConfig"></a>

```java
public void resetLogsConfig()
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetMetricsConfig"></a>

```java
public void resetMetricsConfig()
```

##### `resetResourcesConfig` <a name="resetResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetResourcesConfig"></a>

```java
public void resetResourcesConfig()
```

##### `resetTracesConfig` <a name="resetTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.resetTracesConfig"></a>

```java
public void resetTracesConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccount;

IntegrationAwsAccount.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccount;

IntegrationAwsAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccount;

IntegrationAwsAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccount;

IntegrationAwsAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationAwsAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationAwsAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationAwsAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationAwsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions">awsRegions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig">logsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig">resourcesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig">tracesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput">accountTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput">authConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput">awsPartitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput">awsRegionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput">logsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput">metricsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput">resourcesConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput">tracesConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags">accountTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition">awsPartition</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfig"></a>

```java
public IntegrationAwsAccountAuthConfigOutputReference getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference">IntegrationAwsAccountAuthConfigOutputReference</a>

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegions"></a>

```java
public IntegrationAwsAccountAwsRegionsOutputReference getAwsRegions();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference">IntegrationAwsAccountAwsRegionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logsConfig`<sup>Required</sup> <a name="logsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfig"></a>

```java
public IntegrationAwsAccountLogsConfigOutputReference getLogsConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference">IntegrationAwsAccountLogsConfigOutputReference</a>

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfig"></a>

```java
public IntegrationAwsAccountMetricsConfigOutputReference getMetricsConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference">IntegrationAwsAccountMetricsConfigOutputReference</a>

---

##### `resourcesConfig`<sup>Required</sup> <a name="resourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfig"></a>

```java
public IntegrationAwsAccountResourcesConfigOutputReference getResourcesConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference">IntegrationAwsAccountResourcesConfigOutputReference</a>

---

##### `tracesConfig`<sup>Required</sup> <a name="tracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfig"></a>

```java
public IntegrationAwsAccountTracesConfigOutputReference getTracesConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference">IntegrationAwsAccountTracesConfigOutputReference</a>

---

##### `accountTagsInput`<sup>Optional</sup> <a name="accountTagsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTagsInput"></a>

```java
public java.util.List<java.lang.String> getAccountTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.authConfigInput"></a>

```java
public java.lang.Object getAuthConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsPartitionInput`<sup>Optional</sup> <a name="awsPartitionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartitionInput"></a>

```java
public java.lang.String getAwsPartitionInput();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsRegionsInput"></a>

```java
public java.lang.Object getAwsRegionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

---

##### `logsConfigInput`<sup>Optional</sup> <a name="logsConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.logsConfigInput"></a>

```java
public java.lang.Object getLogsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.metricsConfigInput"></a>

```java
public java.lang.Object getMetricsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

---

##### `resourcesConfigInput`<sup>Optional</sup> <a name="resourcesConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.resourcesConfigInput"></a>

```java
public java.lang.Object getResourcesConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

---

##### `tracesConfigInput`<sup>Optional</sup> <a name="tracesConfigInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tracesConfigInput"></a>

```java
public java.lang.Object getTracesConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

---

##### `accountTags`<sup>Required</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.accountTags"></a>

```java
public java.util.List<java.lang.String> getAccountTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.awsPartition"></a>

```java
public java.lang.String getAwsPartition();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsAccountAuthConfig <a name="IntegrationAwsAccountAuthConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAuthConfig;

IntegrationAwsAccountAuthConfig.builder()
//  .awsAuthConfigKeys(IntegrationAwsAccountAuthConfigAwsAuthConfigKeys)
//  .awsAuthConfigRole(IntegrationAwsAccountAuthConfigAwsAuthConfigRole)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys">awsAuthConfigKeys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | aws_auth_config_keys block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole">awsAuthConfigRole</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | aws_auth_config_role block. |

---

##### `awsAuthConfigKeys`<sup>Optional</sup> <a name="awsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigKeys"></a>

```java
public IntegrationAwsAccountAuthConfigAwsAuthConfigKeys getAwsAuthConfigKeys();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

aws_auth_config_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_auth_config_keys IntegrationAwsAccount#aws_auth_config_keys}

---

##### `awsAuthConfigRole`<sup>Optional</sup> <a name="awsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig.property.awsAuthConfigRole"></a>

```java
public IntegrationAwsAccountAuthConfigAwsAuthConfigRole getAwsAuthConfigRole();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

aws_auth_config_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_auth_config_role IntegrationAwsAccount#aws_auth_config_role}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeys <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys;

IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.builder()
//  .accessKeyId(java.lang.String)
//  .secretAccessKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | AWS Access Key ID. Invalid access_key_id. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | AWS Secret Access Key. |

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

AWS Access Key ID. Invalid access_key_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#access_key_id IntegrationAwsAccount#access_key_id}

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

AWS Secret Access Key.

This value is write-only; changes made outside of Terraform will not be drift-detected. Secret_access_key must be non-empty and not contain whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#secret_access_key IntegrationAwsAccount#secret_access_key}

---

### IntegrationAwsAccountAuthConfigAwsAuthConfigRole <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAuthConfigAwsAuthConfigRole;

IntegrationAwsAccountAuthConfigAwsAuthConfigRole.builder()
//  .externalId(java.lang.String)
//  .roleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId">externalId</a></code> | <code>java.lang.String</code> | AWS IAM External ID for associated role. If omitted, one will be generated. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName">roleName</a></code> | <code>java.lang.String</code> | AWS IAM Role name. |

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

AWS IAM External ID for associated role. If omitted, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#external_id IntegrationAwsAccount#external_id}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

AWS IAM Role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#role_name IntegrationAwsAccount#role_name}

---

### IntegrationAwsAccountAwsRegions <a name="IntegrationAwsAccountAwsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAwsRegions;

IntegrationAwsAccountAwsRegions.builder()
//  .includeAll(java.lang.Boolean)
//  .includeAll(IResolvable)
//  .includeOnly(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include all regions. Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly">includeOnly</a></code> | <code>java.util.List<java.lang.String></code> | Include only these regions. |

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeAll"></a>

```java
public java.lang.Object getIncludeAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include all regions. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions.property.includeOnly"></a>

```java
public java.util.List<java.lang.String> getIncludeOnly();
```

- *Type:* java.util.List<java.lang.String>

Include only these regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountConfig <a name="IntegrationAwsAccountConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountConfig;

IntegrationAwsAccountConfig.builder()
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
    .awsAccountId(java.lang.String)
    .awsPartition(java.lang.String)
//  .accountTags(java.util.List<java.lang.String>)
//  .authConfig(IntegrationAwsAccountAuthConfig)
//  .awsRegions(IntegrationAwsAccountAwsRegions)
//  .logsConfig(IntegrationAwsAccountLogsConfig)
//  .metricsConfig(IntegrationAwsAccountMetricsConfig)
//  .resourcesConfig(IntegrationAwsAccountResourcesConfig)
//  .tracesConfig(IntegrationAwsAccountTracesConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. Invalid aws_account_id. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition">awsPartition</a></code> | <code>java.lang.String</code> | AWS Account partition. Valid values are `aws`, `aws-cn`, `aws-us-gov`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags">accountTags</a></code> | <code>java.util.List<java.lang.String></code> | Tags to apply to all metrics in the account. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions">awsRegions</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | aws_regions block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig">logsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig">resourcesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | resources_config block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig">tracesConfig</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | traces_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Your AWS Account ID without dashes. Invalid aws_account_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_account_id IntegrationAwsAccount#aws_account_id}

---

##### `awsPartition`<sup>Required</sup> <a name="awsPartition" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsPartition"></a>

```java
public java.lang.String getAwsPartition();
```

- *Type:* java.lang.String

AWS Account partition. Valid values are `aws`, `aws-cn`, `aws-us-gov`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_partition IntegrationAwsAccount#aws_partition}

---

##### `accountTags`<sup>Optional</sup> <a name="accountTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.accountTags"></a>

```java
public java.util.List<java.lang.String> getAccountTags();
```

- *Type:* java.util.List<java.lang.String>

Tags to apply to all metrics in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#account_tags IntegrationAwsAccount#account_tags}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.authConfig"></a>

```java
public IntegrationAwsAccountAuthConfig getAuthConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#auth_config IntegrationAwsAccount#auth_config}

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.awsRegions"></a>

```java
public IntegrationAwsAccountAwsRegions getAwsRegions();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

aws_regions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#aws_regions IntegrationAwsAccount#aws_regions}

---

##### `logsConfig`<sup>Optional</sup> <a name="logsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.logsConfig"></a>

```java
public IntegrationAwsAccountLogsConfig getLogsConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#logs_config IntegrationAwsAccount#logs_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.metricsConfig"></a>

```java
public IntegrationAwsAccountMetricsConfig getMetricsConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#metrics_config IntegrationAwsAccount#metrics_config}

---

##### `resourcesConfig`<sup>Optional</sup> <a name="resourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.resourcesConfig"></a>

```java
public IntegrationAwsAccountResourcesConfig getResourcesConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

resources_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#resources_config IntegrationAwsAccount#resources_config}

---

##### `tracesConfig`<sup>Optional</sup> <a name="tracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountConfig.property.tracesConfig"></a>

```java
public IntegrationAwsAccountTracesConfig getTracesConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

traces_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#traces_config IntegrationAwsAccount#traces_config}

---

### IntegrationAwsAccountLogsConfig <a name="IntegrationAwsAccountLogsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountLogsConfig;

IntegrationAwsAccountLogsConfig.builder()
//  .lambdaForwarder(IntegrationAwsAccountLogsConfigLambdaForwarder)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder">lambdaForwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | lambda_forwarder block. |

---

##### `lambdaForwarder`<sup>Optional</sup> <a name="lambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig.property.lambdaForwarder"></a>

```java
public IntegrationAwsAccountLogsConfigLambdaForwarder getLambdaForwarder();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

lambda_forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#lambda_forwarder IntegrationAwsAccount#lambda_forwarder}

---

### IntegrationAwsAccountLogsConfigLambdaForwarder <a name="IntegrationAwsAccountLogsConfigLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountLogsConfigLambdaForwarder;

IntegrationAwsAccountLogsConfigLambdaForwarder.builder()
//  .lambdas(java.util.List<java.lang.String>)
//  .sources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas">lambdas</a></code> | <code>java.util.List<java.lang.String></code> | List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | List of service IDs set to enable automatic log collection. |

---

##### `lambdas`<sup>Optional</sup> <a name="lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.lambdas"></a>

```java
public java.util.List<java.lang.String> getLambdas();
```

- *Type:* java.util.List<java.lang.String>

List of Datadog Lambda Log Forwarder ARNs in your AWS account. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#lambdas IntegrationAwsAccount#lambdas}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder.property.sources"></a>

```java
public java.util.List<java.lang.String> getSources();
```

- *Type:* java.util.List<java.lang.String>

List of service IDs set to enable automatic log collection.

Use [`datadog_integration_aws_available_logs_services` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_logs_services) to get allowed values. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#sources IntegrationAwsAccount#sources}

---

### IntegrationAwsAccountMetricsConfig <a name="IntegrationAwsAccountMetricsConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountMetricsConfig;

IntegrationAwsAccountMetricsConfig.builder()
//  .automuteEnabled(java.lang.Boolean)
//  .automuteEnabled(IResolvable)
//  .collectCloudwatchAlarms(java.lang.Boolean)
//  .collectCloudwatchAlarms(IResolvable)
//  .collectCustomMetrics(java.lang.Boolean)
//  .collectCustomMetrics(IResolvable)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .namespaceFilters(IntegrationAwsAccountMetricsConfigNamespaceFilters)
//  .tagFilters(IResolvable)
//  .tagFilters(java.util.List<IntegrationAwsAccountMetricsConfigTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled">automuteEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable EC2 automute for AWS metrics Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms">collectCloudwatchAlarms</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable CloudWatch alarms collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics">collectCustomMetrics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable custom metrics collection Defaults to `false`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable AWS metrics collection Defaults to `true`. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters">namespaceFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | namespace_filters block. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters">tagFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>></code> | tag_filters block. |

---

##### `automuteEnabled`<sup>Optional</sup> <a name="automuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.automuteEnabled"></a>

```java
public java.lang.Object getAutomuteEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable EC2 automute for AWS metrics Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#automute_enabled IntegrationAwsAccount#automute_enabled}

---

##### `collectCloudwatchAlarms`<sup>Optional</sup> <a name="collectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCloudwatchAlarms"></a>

```java
public java.lang.Object getCollectCloudwatchAlarms();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable CloudWatch alarms collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#collect_cloudwatch_alarms IntegrationAwsAccount#collect_cloudwatch_alarms}

---

##### `collectCustomMetrics`<sup>Optional</sup> <a name="collectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.collectCustomMetrics"></a>

```java
public java.lang.Object getCollectCustomMetrics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable custom metrics collection Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#collect_custom_metrics IntegrationAwsAccount#collect_custom_metrics}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable AWS metrics collection Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#enabled IntegrationAwsAccount#enabled}

---

##### `namespaceFilters`<sup>Optional</sup> <a name="namespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.namespaceFilters"></a>

```java
public IntegrationAwsAccountMetricsConfigNamespaceFilters getNamespaceFilters();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

namespace_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#namespace_filters IntegrationAwsAccount#namespace_filters}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig.property.tagFilters"></a>

```java
public java.lang.Object getTagFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#tag_filters IntegrationAwsAccount#tag_filters}

---

### IntegrationAwsAccountMetricsConfigNamespaceFilters <a name="IntegrationAwsAccountMetricsConfigNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountMetricsConfigNamespaceFilters;

IntegrationAwsAccountMetricsConfigNamespaceFilters.builder()
//  .excludeOnly(java.util.List<java.lang.String>)
//  .includeOnly(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly">excludeOnly</a></code> | <code>java.util.List<java.lang.String></code> | Exclude only these namespaces from metrics collection. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly">includeOnly</a></code> | <code>java.util.List<java.lang.String></code> | Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. |

---

##### `excludeOnly`<sup>Optional</sup> <a name="excludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.excludeOnly"></a>

```java
public java.util.List<java.lang.String> getExcludeOnly();
```

- *Type:* java.util.List<java.lang.String>

Exclude only these namespaces from metrics collection.

Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values. Defaults to `["AWS/SQS", "AWS/ElasticMapReduce"]`. `AWS/SQS` and `AWS/ElasticMapReduce` are excluded by default to reduce your AWS CloudWatch costs from `GetMetricData` API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#exclude_only IntegrationAwsAccount#exclude_only}

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters.property.includeOnly"></a>

```java
public java.util.List<java.lang.String> getIncludeOnly();
```

- *Type:* java.util.List<java.lang.String>

Include only these namespaces for metrics collection. Use [`datadog_integration_aws_available_namespaces` data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/integration_aws_available_namespaces) to get allowed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

### IntegrationAwsAccountMetricsConfigTagFilters <a name="IntegrationAwsAccountMetricsConfigTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountMetricsConfigTagFilters;

IntegrationAwsAccountMetricsConfigTagFilters.builder()
    .namespace(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The AWS service for which the tag filters defined in `tags` will be applied. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The AWS service for which the tag filters defined in `tags` will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#namespace IntegrationAwsAccount#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

The AWS resource tags to filter on for the service specified by `namespace`. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#tags IntegrationAwsAccount#tags}

---

### IntegrationAwsAccountResourcesConfig <a name="IntegrationAwsAccountResourcesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountResourcesConfig;

IntegrationAwsAccountResourcesConfig.builder()
//  .cloudSecurityPostureManagementCollection(java.lang.Boolean)
//  .cloudSecurityPostureManagementCollection(IResolvable)
//  .extendedCollection(java.lang.Boolean)
//  .extendedCollection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection">cloudSecurityPostureManagementCollection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection">extendedCollection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether Datadog collects additional attributes and configuration information about the resources in your AWS account. |

---

##### `cloudSecurityPostureManagementCollection`<sup>Optional</sup> <a name="cloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.cloudSecurityPostureManagementCollection"></a>

```java
public java.lang.Object getCloudSecurityPostureManagementCollection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Cloud Security Management to scan AWS resources for vulnerabilities, misconfigurations, identity risks, and compliance violations.

Requires `extended_collection` to be set to `true`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#cloud_security_posture_management_collection IntegrationAwsAccount#cloud_security_posture_management_collection}

---

##### `extendedCollection`<sup>Optional</sup> <a name="extendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig.property.extendedCollection"></a>

```java
public java.lang.Object getExtendedCollection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether Datadog collects additional attributes and configuration information about the resources in your AWS account.

Required for `cloud_security_posture_management_collection`. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#extended_collection IntegrationAwsAccount#extended_collection}

---

### IntegrationAwsAccountTracesConfig <a name="IntegrationAwsAccountTracesConfig" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountTracesConfig;

IntegrationAwsAccountTracesConfig.builder()
//  .xrayServices(IntegrationAwsAccountTracesConfigXrayServices)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices">xrayServices</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | xray_services block. |

---

##### `xrayServices`<sup>Optional</sup> <a name="xrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig.property.xrayServices"></a>

```java
public IntegrationAwsAccountTracesConfigXrayServices getXrayServices();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

xray_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#xray_services IntegrationAwsAccount#xray_services}

---

### IntegrationAwsAccountTracesConfigXrayServices <a name="IntegrationAwsAccountTracesConfigXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountTracesConfigXrayServices;

IntegrationAwsAccountTracesConfigXrayServices.builder()
//  .includeAll(java.lang.Boolean)
//  .includeAll(IResolvable)
//  .includeOnly(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Include all services. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly">includeOnly</a></code> | <code>java.util.List<java.lang.String></code> | Include only these services. Defaults to `[]`. |

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeAll"></a>

```java
public java.lang.Object getIncludeAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Include all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#include_all IntegrationAwsAccount#include_all}

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices.property.includeOnly"></a>

```java
public java.util.List<java.lang.String> getIncludeOnly();
```

- *Type:* java.util.List<java.lang.String>

Include only these services. Defaults to `[]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.62.0/docs/resources/integration_aws_account#include_only IntegrationAwsAccount#include_only}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference;

new IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetAccessKeyId"></a>

```java
public void resetAccessKeyId()
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.resetSecretAccessKey"></a>

```java
public void resetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

---


### IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference <a name="IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference;

new IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.resetRoleName"></a>

```java
public void resetRoleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

---


### IntegrationAwsAccountAuthConfigOutputReference <a name="IntegrationAwsAccountAuthConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAuthConfigOutputReference;

new IntegrationAwsAccountAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys">putAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole">putAwsAuthConfigRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys">resetAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole">resetAwsAuthConfigRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsAuthConfigKeys` <a name="putAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys"></a>

```java
public void putAwsAuthConfigKeys(IntegrationAwsAccountAuthConfigAwsAuthConfigKeys value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

---

##### `putAwsAuthConfigRole` <a name="putAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole"></a>

```java
public void putAwsAuthConfigRole(IntegrationAwsAccountAuthConfigAwsAuthConfigRole value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.putAwsAuthConfigRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

---

##### `resetAwsAuthConfigKeys` <a name="resetAwsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigKeys"></a>

```java
public void resetAwsAuthConfigKeys()
```

##### `resetAwsAuthConfigRole` <a name="resetAwsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.resetAwsAuthConfigRole"></a>

```java
public void resetAwsAuthConfigRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys">awsAuthConfigKeys</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole">awsAuthConfigRole</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput">awsAuthConfigKeysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput">awsAuthConfigRoleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsAuthConfigKeys`<sup>Required</sup> <a name="awsAuthConfigKeys" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeys"></a>

```java
public IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference getAwsAuthConfigKeys();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigKeysOutputReference</a>

---

##### `awsAuthConfigRole`<sup>Required</sup> <a name="awsAuthConfigRole" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRole"></a>

```java
public IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference getAwsAuthConfigRole();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference">IntegrationAwsAccountAuthConfigAwsAuthConfigRoleOutputReference</a>

---

##### `awsAuthConfigKeysInput`<sup>Optional</sup> <a name="awsAuthConfigKeysInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigKeysInput"></a>

```java
public java.lang.Object getAwsAuthConfigKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigKeys">IntegrationAwsAccountAuthConfigAwsAuthConfigKeys</a>

---

##### `awsAuthConfigRoleInput`<sup>Optional</sup> <a name="awsAuthConfigRoleInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.awsAuthConfigRoleInput"></a>

```java
public java.lang.Object getAwsAuthConfigRoleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigAwsAuthConfigRole">IntegrationAwsAccountAuthConfigAwsAuthConfigRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAuthConfig">IntegrationAwsAccountAuthConfig</a>

---


### IntegrationAwsAccountAwsRegionsOutputReference <a name="IntegrationAwsAccountAwsRegionsOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountAwsRegionsOutputReference;

new IntegrationAwsAccountAwsRegionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeAll"></a>

```java
public void resetIncludeAll()
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.resetIncludeOnly"></a>

```java
public void resetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly">includeOnly</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAllInput"></a>

```java
public java.lang.Object getIncludeAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnlyInput"></a>

```java
public java.util.List<java.lang.String> getIncludeOnlyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeAll"></a>

```java
public java.lang.Object getIncludeAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.includeOnly"></a>

```java
public java.util.List<java.lang.String> getIncludeOnly();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountAwsRegions">IntegrationAwsAccountAwsRegions</a>

---


### IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference <a name="IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference;

new IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas">resetLambdas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdas` <a name="resetLambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetLambdas"></a>

```java
public void resetLambdas()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput">lambdasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas">lambdas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources">sources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdasInput`<sup>Optional</sup> <a name="lambdasInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdasInput"></a>

```java
public java.util.List<java.lang.String> getLambdasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sourcesInput"></a>

```java
public java.util.List<java.lang.String> getSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lambdas`<sup>Required</sup> <a name="lambdas" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.lambdas"></a>

```java
public java.util.List<java.lang.String> getLambdas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.sources"></a>

```java
public java.util.List<java.lang.String> getSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

---


### IntegrationAwsAccountLogsConfigOutputReference <a name="IntegrationAwsAccountLogsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountLogsConfigOutputReference;

new IntegrationAwsAccountLogsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder">putLambdaForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder">resetLambdaForwarder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaForwarder` <a name="putLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder"></a>

```java
public void putLambdaForwarder(IntegrationAwsAccountLogsConfigLambdaForwarder value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.putLambdaForwarder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

---

##### `resetLambdaForwarder` <a name="resetLambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.resetLambdaForwarder"></a>

```java
public void resetLambdaForwarder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder">lambdaForwarder</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput">lambdaForwarderInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaForwarder`<sup>Required</sup> <a name="lambdaForwarder" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarder"></a>

```java
public IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference getLambdaForwarder();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference">IntegrationAwsAccountLogsConfigLambdaForwarderOutputReference</a>

---

##### `lambdaForwarderInput`<sup>Optional</sup> <a name="lambdaForwarderInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.lambdaForwarderInput"></a>

```java
public java.lang.Object getLambdaForwarderInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigLambdaForwarder">IntegrationAwsAccountLogsConfigLambdaForwarder</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountLogsConfig">IntegrationAwsAccountLogsConfig</a>

---


### IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference;

new IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly">resetExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeOnly` <a name="resetExcludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetExcludeOnly"></a>

```java
public void resetExcludeOnly()
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.resetIncludeOnly"></a>

```java
public void resetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput">excludeOnlyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly">excludeOnly</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly">includeOnly</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeOnlyInput`<sup>Optional</sup> <a name="excludeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnlyInput"></a>

```java
public java.util.List<java.lang.String> getExcludeOnlyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnlyInput"></a>

```java
public java.util.List<java.lang.String> getIncludeOnlyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeOnly`<sup>Required</sup> <a name="excludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.excludeOnly"></a>

```java
public java.util.List<java.lang.String> getExcludeOnly();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.includeOnly"></a>

```java
public java.util.List<java.lang.String> getIncludeOnly();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

---


### IntegrationAwsAccountMetricsConfigOutputReference <a name="IntegrationAwsAccountMetricsConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountMetricsConfigOutputReference;

new IntegrationAwsAccountMetricsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters">putNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled">resetAutomuteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms">resetCollectCloudwatchAlarms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics">resetCollectCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters">resetNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaceFilters` <a name="putNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters"></a>

```java
public void putNamespaceFilters(IntegrationAwsAccountMetricsConfigNamespaceFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putNamespaceFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

---

##### `putTagFilters` <a name="putTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable OR java.util.List<IntegrationAwsAccountMetricsConfigTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.putTagFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>>

---

##### `resetAutomuteEnabled` <a name="resetAutomuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetAutomuteEnabled"></a>

```java
public void resetAutomuteEnabled()
```

##### `resetCollectCloudwatchAlarms` <a name="resetCollectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCloudwatchAlarms"></a>

```java
public void resetCollectCloudwatchAlarms()
```

##### `resetCollectCustomMetrics` <a name="resetCollectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetCollectCustomMetrics"></a>

```java
public void resetCollectCustomMetrics()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetNamespaceFilters` <a name="resetNamespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetNamespaceFilters"></a>

```java
public void resetNamespaceFilters()
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters">namespaceFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput">automuteEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput">collectCloudwatchAlarmsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput">collectCustomMetricsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput">namespaceFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled">automuteEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms">collectCloudwatchAlarms</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics">collectCustomMetrics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceFilters`<sup>Required</sup> <a name="namespaceFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFilters"></a>

```java
public IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference getNamespaceFilters();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference">IntegrationAwsAccountMetricsConfigNamespaceFiltersOutputReference</a>

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFilters"></a>

```java
public IntegrationAwsAccountMetricsConfigTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList">IntegrationAwsAccountMetricsConfigTagFiltersList</a>

---

##### `automuteEnabledInput`<sup>Optional</sup> <a name="automuteEnabledInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabledInput"></a>

```java
public java.lang.Object getAutomuteEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collectCloudwatchAlarmsInput`<sup>Optional</sup> <a name="collectCloudwatchAlarmsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarmsInput"></a>

```java
public java.lang.Object getCollectCloudwatchAlarmsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collectCustomMetricsInput`<sup>Optional</sup> <a name="collectCustomMetricsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetricsInput"></a>

```java
public java.lang.Object getCollectCustomMetricsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespaceFiltersInput`<sup>Optional</sup> <a name="namespaceFiltersInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.namespaceFiltersInput"></a>

```java
public java.lang.Object getNamespaceFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigNamespaceFilters">IntegrationAwsAccountMetricsConfigNamespaceFilters</a>

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.tagFiltersInput"></a>

```java
public java.lang.Object getTagFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>>

---

##### `automuteEnabled`<sup>Required</sup> <a name="automuteEnabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.automuteEnabled"></a>

```java
public java.lang.Object getAutomuteEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collectCloudwatchAlarms`<sup>Required</sup> <a name="collectCloudwatchAlarms" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCloudwatchAlarms"></a>

```java
public java.lang.Object getCollectCloudwatchAlarms();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collectCustomMetrics`<sup>Required</sup> <a name="collectCustomMetrics" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.collectCustomMetrics"></a>

```java
public java.lang.Object getCollectCustomMetrics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfig">IntegrationAwsAccountMetricsConfig</a>

---


### IntegrationAwsAccountMetricsConfigTagFiltersList <a name="IntegrationAwsAccountMetricsConfigTagFiltersList" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountMetricsConfigTagFiltersList;

new IntegrationAwsAccountMetricsConfigTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get"></a>

```java
public IntegrationAwsAccountMetricsConfigTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>>

---


### IntegrationAwsAccountMetricsConfigTagFiltersOutputReference <a name="IntegrationAwsAccountMetricsConfigTagFiltersOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference;

new IntegrationAwsAccountMetricsConfigTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTags` <a name="resetTags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountMetricsConfigTagFilters">IntegrationAwsAccountMetricsConfigTagFilters</a>

---


### IntegrationAwsAccountResourcesConfigOutputReference <a name="IntegrationAwsAccountResourcesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountResourcesConfigOutputReference;

new IntegrationAwsAccountResourcesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection">resetCloudSecurityPostureManagementCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection">resetExtendedCollection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudSecurityPostureManagementCollection` <a name="resetCloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetCloudSecurityPostureManagementCollection"></a>

```java
public void resetCloudSecurityPostureManagementCollection()
```

##### `resetExtendedCollection` <a name="resetExtendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.resetExtendedCollection"></a>

```java
public void resetExtendedCollection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput">cloudSecurityPostureManagementCollectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput">extendedCollectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection">cloudSecurityPostureManagementCollection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection">extendedCollection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudSecurityPostureManagementCollectionInput`<sup>Optional</sup> <a name="cloudSecurityPostureManagementCollectionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollectionInput"></a>

```java
public java.lang.Object getCloudSecurityPostureManagementCollectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedCollectionInput`<sup>Optional</sup> <a name="extendedCollectionInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollectionInput"></a>

```java
public java.lang.Object getExtendedCollectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cloudSecurityPostureManagementCollection`<sup>Required</sup> <a name="cloudSecurityPostureManagementCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.cloudSecurityPostureManagementCollection"></a>

```java
public java.lang.Object getCloudSecurityPostureManagementCollection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extendedCollection`<sup>Required</sup> <a name="extendedCollection" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.extendedCollection"></a>

```java
public java.lang.Object getExtendedCollection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountResourcesConfig">IntegrationAwsAccountResourcesConfig</a>

---


### IntegrationAwsAccountTracesConfigOutputReference <a name="IntegrationAwsAccountTracesConfigOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountTracesConfigOutputReference;

new IntegrationAwsAccountTracesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices">putXrayServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices">resetXrayServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putXrayServices` <a name="putXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices"></a>

```java
public void putXrayServices(IntegrationAwsAccountTracesConfigXrayServices value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.putXrayServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

---

##### `resetXrayServices` <a name="resetXrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.resetXrayServices"></a>

```java
public void resetXrayServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices">xrayServices</a></code> | <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput">xrayServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `xrayServices`<sup>Required</sup> <a name="xrayServices" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServices"></a>

```java
public IntegrationAwsAccountTracesConfigXrayServicesOutputReference getXrayServices();
```

- *Type:* <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference">IntegrationAwsAccountTracesConfigXrayServicesOutputReference</a>

---

##### `xrayServicesInput`<sup>Optional</sup> <a name="xrayServicesInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.xrayServicesInput"></a>

```java
public java.lang.Object getXrayServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfig">IntegrationAwsAccountTracesConfig</a>

---


### IntegrationAwsAccountTracesConfigXrayServicesOutputReference <a name="IntegrationAwsAccountTracesConfigXrayServicesOutputReference" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_account.IntegrationAwsAccountTracesConfigXrayServicesOutputReference;

new IntegrationAwsAccountTracesConfigXrayServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeAll"></a>

```java
public void resetIncludeAll()
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.resetIncludeOnly"></a>

```java
public void resetIncludeOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll">includeAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly">includeOnly</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAllInput"></a>

```java
public java.lang.Object getIncludeAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnlyInput"></a>

```java
public java.util.List<java.lang.String> getIncludeOnlyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeAll"></a>

```java
public java.lang.Object getIncludeAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.includeOnly"></a>

```java
public java.util.List<java.lang.String> getIncludeOnly();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.integrationAwsAccount.IntegrationAwsAccountTracesConfigXrayServices">IntegrationAwsAccountTracesConfigXrayServices</a>

---



