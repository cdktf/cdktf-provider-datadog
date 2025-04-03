# `integrationAwsLambdaArn` Submodule <a name="`integrationAwsLambdaArn` Submodule" id="@cdktf/provider-datadog.integrationAwsLambdaArn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationAwsLambdaArn <a name="IntegrationAwsLambdaArn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn datadog_integration_aws_lambda_arn}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_lambda_arn.IntegrationAwsLambdaArn;

IntegrationAwsLambdaArn.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
    .lambdaArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | The ARN of the Datadog forwarder Lambda. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#account_id IntegrationAwsLambdaArn#account_id}

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.lambdaArn"></a>

- *Type:* java.lang.String

The ARN of the Datadog forwarder Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#lambda_arn IntegrationAwsLambdaArn#lambda_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationAwsLambdaArn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_lambda_arn.IntegrationAwsLambdaArn;

IntegrationAwsLambdaArn.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_lambda_arn.IntegrationAwsLambdaArn;

IntegrationAwsLambdaArn.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_lambda_arn.IntegrationAwsLambdaArn;

IntegrationAwsLambdaArn.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_lambda_arn.IntegrationAwsLambdaArn;

IntegrationAwsLambdaArn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationAwsLambdaArn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationAwsLambdaArn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationAwsLambdaArn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationAwsLambdaArn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationAwsLambdaArn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArn.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationAwsLambdaArnConfig <a name="IntegrationAwsLambdaArnConfig" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.integration_aws_lambda_arn.IntegrationAwsLambdaArnConfig;

IntegrationAwsLambdaArnConfig.builder()
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
    .accountId(java.lang.String)
    .lambdaArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Your AWS Account ID without dashes. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | The ARN of the Datadog forwarder Lambda. |
| <code><a href="#@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Your AWS Account ID without dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#account_id IntegrationAwsLambdaArn#account_id}

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

The ARN of the Datadog forwarder Lambda.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#lambda_arn IntegrationAwsLambdaArn#lambda_arn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-datadog.integrationAwsLambdaArn.IntegrationAwsLambdaArnConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.59.0/docs/resources/integration_aws_lambda_arn#id IntegrationAwsLambdaArn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



