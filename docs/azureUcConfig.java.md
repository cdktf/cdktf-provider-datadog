# `azureUcConfig` Submodule <a name="`azureUcConfig` Submodule" id="@cdktf/provider-datadog.azureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureUcConfig <a name="AzureUcConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfig;

AzureUcConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .actualBillConfig(AzureUcConfigActualBillConfig)
    .amortizedBillConfig(AzureUcConfigAmortizedBillConfig)
    .clientId(java.lang.String)
    .scope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The tenant ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | actual_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | amortized_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope of your observed subscription. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The tenant ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#account_id AzureUcConfig#account_id}

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.actualBillConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

actual_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#actual_bill_config AzureUcConfig#actual_bill_config}

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.amortizedBillConfig"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

amortized_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#amortized_bill_config AzureUcConfig#amortized_bill_config}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The client ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#client_id AzureUcConfig#client_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope of your observed subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#scope AzureUcConfig#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig">putActualBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig">putAmortizedBillConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActualBillConfig` <a name="putActualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig"></a>

```java
public void putActualBillConfig(AzureUcConfigActualBillConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putActualBillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---

##### `putAmortizedBillConfig` <a name="putAmortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig"></a>

```java
public void putAmortizedBillConfig(AzureUcConfigAmortizedBillConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.putAmortizedBillConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureUcConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfig;

AzureUcConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfig;

AzureUcConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfig;

AzureUcConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfig;

AzureUcConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzureUcConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzureUcConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzureUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages">errorMessages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput">actualBillConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput">amortizedBillConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfig"></a>

```java
public AzureUcConfigActualBillConfigOutputReference getActualBillConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference">AzureUcConfigActualBillConfigOutputReference</a>

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfig"></a>

```java
public AzureUcConfigAmortizedBillConfigOutputReference getAmortizedBillConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference">AzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.errorMessages"></a>

```java
public java.util.List<java.lang.String> getErrorMessages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.statusUpdatedAt"></a>

```java
public java.lang.String getStatusUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `actualBillConfigInput`<sup>Optional</sup> <a name="actualBillConfigInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.actualBillConfigInput"></a>

```java
public IResolvable|AzureUcConfigActualBillConfig getActualBillConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---

##### `amortizedBillConfigInput`<sup>Optional</sup> <a name="amortizedBillConfigInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.amortizedBillConfigInput"></a>

```java
public IResolvable|AzureUcConfigAmortizedBillConfig getAmortizedBillConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureUcConfigActualBillConfig <a name="AzureUcConfigActualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfigActualBillConfig;

AzureUcConfigActualBillConfig.builder()
    .exportName(java.lang.String)
    .exportPath(java.lang.String)
    .storageAccount(java.lang.String)
    .storageContainer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName">exportName</a></code> | <code>java.lang.String</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | The name of the storage container where the Azure Export is saved. |

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigAmortizedBillConfig <a name="AzureUcConfigAmortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfigAmortizedBillConfig;

AzureUcConfigAmortizedBillConfig.builder()
    .exportName(java.lang.String)
    .exportPath(java.lang.String)
    .storageAccount(java.lang.String)
    .storageContainer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName">exportName</a></code> | <code>java.lang.String</code> | The name of the configured Azure Export. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | The path where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | The name of the storage account where the Azure Export is saved. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | The name of the storage container where the Azure Export is saved. |

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

The name of the configured Azure Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#export_name AzureUcConfig#export_name}

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

The path where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#export_path AzureUcConfig#export_path}

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

The name of the storage account where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#storage_account AzureUcConfig#storage_account}

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

The name of the storage container where the Azure Export is saved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#storage_container AzureUcConfig#storage_container}

---

### AzureUcConfigConfig <a name="AzureUcConfigConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfigConfig;

AzureUcConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .actualBillConfig(AzureUcConfigActualBillConfig)
    .amortizedBillConfig(AzureUcConfigAmortizedBillConfig)
    .clientId(java.lang.String)
    .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The tenant ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | actual_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | amortized_bill_config block. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID of the Azure account. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope of your observed subscription. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The tenant ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#account_id AzureUcConfig#account_id}

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.actualBillConfig"></a>

```java
public AzureUcConfigActualBillConfig getActualBillConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

actual_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#actual_bill_config AzureUcConfig#actual_bill_config}

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.amortizedBillConfig"></a>

```java
public AzureUcConfigAmortizedBillConfig getAmortizedBillConfig();
```

- *Type:* <a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

amortized_bill_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#amortized_bill_config AzureUcConfig#amortized_bill_config}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID of the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#client_id AzureUcConfig#client_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope of your observed subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.80.0/docs/resources/azure_uc_config#scope AzureUcConfig#scope}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureUcConfigActualBillConfigOutputReference <a name="AzureUcConfigActualBillConfigOutputReference" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfigActualBillConfigOutputReference;

new AzureUcConfigActualBillConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput">exportNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput">exportPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput">storageContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName">exportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportNameInput`<sup>Optional</sup> <a name="exportNameInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportNameInput"></a>

```java
public java.lang.String getExportNameInput();
```

- *Type:* java.lang.String

---

##### `exportPathInput`<sup>Optional</sup> <a name="exportPathInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPathInput"></a>

```java
public java.lang.String getExportPathInput();
```

- *Type:* java.lang.String

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccountInput"></a>

```java
public java.lang.String getStorageAccountInput();
```

- *Type:* java.lang.String

---

##### `storageContainerInput`<sup>Optional</sup> <a name="storageContainerInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainerInput"></a>

```java
public java.lang.String getStorageContainerInput();
```

- *Type:* java.lang.String

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AzureUcConfigActualBillConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigActualBillConfig">AzureUcConfigActualBillConfig</a>

---


### AzureUcConfigAmortizedBillConfigOutputReference <a name="AzureUcConfigAmortizedBillConfigOutputReference" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.azure_uc_config.AzureUcConfigAmortizedBillConfigOutputReference;

new AzureUcConfigAmortizedBillConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput">exportNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput">exportPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput">storageAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput">storageContainerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName">exportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportNameInput`<sup>Optional</sup> <a name="exportNameInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportNameInput"></a>

```java
public java.lang.String getExportNameInput();
```

- *Type:* java.lang.String

---

##### `exportPathInput`<sup>Optional</sup> <a name="exportPathInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPathInput"></a>

```java
public java.lang.String getExportPathInput();
```

- *Type:* java.lang.String

---

##### `storageAccountInput`<sup>Optional</sup> <a name="storageAccountInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccountInput"></a>

```java
public java.lang.String getStorageAccountInput();
```

- *Type:* java.lang.String

---

##### `storageContainerInput`<sup>Optional</sup> <a name="storageContainerInput" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainerInput"></a>

```java
public java.lang.String getStorageContainerInput();
```

- *Type:* java.lang.String

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AzureUcConfigAmortizedBillConfig getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-datadog.azureUcConfig.AzureUcConfigAmortizedBillConfig">AzureUcConfigAmortizedBillConfig</a>

---



