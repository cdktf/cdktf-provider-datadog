# `integrationCloudflareAccount` Submodule <a name="`integrationCloudflareAccount` Submodule" id="@cdktf/provider-datadog.integrationCloudflareAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationCloudflareAccount <a name="IntegrationCloudflareAccount" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account datadog_integration_cloudflare_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.Builder.create(Construct scope, java.lang.String id)
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
    .apiKey(java.lang.String)
    .name(java.lang.String)
//  .email(java.lang.String)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key (or token) for the Cloudflare account. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Cloudflare account. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The email associated with the Cloudflare account. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

The API key (or token) for the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#api_key IntegrationCloudflareAccount#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#name IntegrationCloudflareAccount#name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The email associated with the Cloudflare account.

If an API key is provided (and not a token), this field is also required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#email IntegrationCloudflareAccount#email}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.resources"></a>

- *Type:* java.util.List<java.lang.String>

An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#resources IntegrationCloudflareAccount#resources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetResources">resetResources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetResources"></a>

```java
public void resetResources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationCloudflareAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationCloudflareAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationCloudflareAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationCloudflareAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationCloudflareAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationCloudflareAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationCloudflareAccountConfig <a name="IntegrationCloudflareAccountConfig" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccountConfig;

IntegrationCloudflareAccountConfig.builder()
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
    .apiKey(java.lang.String)
    .name(java.lang.String)
//  .email(java.lang.String)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key (or token) for the Cloudflare account. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Cloudflare account. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.email">email</a></code> | <code>java.lang.String</code> | The email associated with the Cloudflare account. |
| <code><a href="#@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

The API key (or token) for the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#api_key IntegrationCloudflareAccount#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#name IntegrationCloudflareAccount#name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The email associated with the Cloudflare account.

If an API key is provided (and not a token), this field is also required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#email IntegrationCloudflareAccount#email}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.61.0/docs/resources/integration_cloudflare_account#resources IntegrationCloudflareAccount#resources}

---



