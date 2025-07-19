# `complianceCustomFramework` Submodule <a name="`complianceCustomFramework` Submodule" id="@cdktf/provider-datadog.complianceCustomFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceCustomFramework <a name="ComplianceCustomFramework" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework datadog_compliance_custom_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFramework;

ComplianceCustomFramework.Builder.create(Construct scope, java.lang.String id)
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
    .handle(java.lang.String)
    .name(java.lang.String)
    .version(java.lang.String)
//  .iconUrl(java.lang.String)
//  .requirements(IResolvable)
//  .requirements(java.util.List<ComplianceCustomFrameworkRequirements>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.handle">handle</a></code> | <code>java.lang.String</code> | The framework handle. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The framework name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The framework version. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | The URL of the icon representing the framework. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.requirements">requirements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>></code> | requirements block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.handle"></a>

- *Type:* java.lang.String

The framework handle. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#handle ComplianceCustomFramework#handle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The framework name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The framework version. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#version ComplianceCustomFramework#version}

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.iconUrl"></a>

- *Type:* java.lang.String

The URL of the icon representing the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#icon_url ComplianceCustomFramework#icon_url}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.Initializer.parameter.requirements"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>>

requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#requirements ComplianceCustomFramework#requirements}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements">putRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl">resetIconUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements">resetRequirements</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequirements` <a name="putRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements"></a>

```java
public void putRequirements(IResolvable OR java.util.List<ComplianceCustomFrameworkRequirements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.putRequirements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>>

---

##### `resetIconUrl` <a name="resetIconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetIconUrl"></a>

```java
public void resetIconUrl()
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.resetRequirements"></a>

```java
public void resetRequirements()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFramework;

ComplianceCustomFramework.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFramework;

ComplianceCustomFramework.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFramework;

ComplianceCustomFramework.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFramework;

ComplianceCustomFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComplianceCustomFramework.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComplianceCustomFramework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComplianceCustomFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComplianceCustomFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceCustomFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements">requirements</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput">handleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput">iconUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput">requirementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle">handle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirements"></a>

```java
public ComplianceCustomFrameworkRequirementsList getRequirements();
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList">ComplianceCustomFrameworkRequirementsList</a>

---

##### `handleInput`<sup>Optional</sup> <a name="handleInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handleInput"></a>

```java
public java.lang.String getHandleInput();
```

- *Type:* java.lang.String

---

##### `iconUrlInput`<sup>Optional</sup> <a name="iconUrlInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrlInput"></a>

```java
public java.lang.String getIconUrlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.requirementsInput"></a>

```java
public java.lang.Object getRequirementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

---

##### `iconUrl`<sup>Required</sup> <a name="iconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFramework.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceCustomFrameworkConfig <a name="ComplianceCustomFrameworkConfig" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFrameworkConfig;

ComplianceCustomFrameworkConfig.builder()
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
    .handle(java.lang.String)
    .name(java.lang.String)
    .version(java.lang.String)
//  .iconUrl(java.lang.String)
//  .requirements(IResolvable)
//  .requirements(java.util.List<ComplianceCustomFrameworkRequirements>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle">handle</a></code> | <code>java.lang.String</code> | The framework handle. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The framework name. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version">version</a></code> | <code>java.lang.String</code> | The framework version. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl">iconUrl</a></code> | <code>java.lang.String</code> | The URL of the icon representing the framework. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements">requirements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>></code> | requirements block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.handle"></a>

```java
public java.lang.String getHandle();
```

- *Type:* java.lang.String

The framework handle. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#handle ComplianceCustomFramework#handle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The framework name. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The framework version. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#version ComplianceCustomFramework#version}

---

##### `iconUrl`<sup>Optional</sup> <a name="iconUrl" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.iconUrl"></a>

```java
public java.lang.String getIconUrl();
```

- *Type:* java.lang.String

The URL of the icon representing the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#icon_url ComplianceCustomFramework#icon_url}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkConfig.property.requirements"></a>

```java
public java.lang.Object getRequirements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>>

requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#requirements ComplianceCustomFramework#requirements}

---

### ComplianceCustomFrameworkRequirements <a name="ComplianceCustomFrameworkRequirements" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFrameworkRequirements;

ComplianceCustomFrameworkRequirements.builder()
    .name(java.lang.String)
//  .controls(IResolvable)
//  .controls(java.util.List<ComplianceCustomFrameworkRequirementsControls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name">name</a></code> | <code>java.lang.String</code> | The name of the requirement. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls">controls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>></code> | controls block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the requirement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `controls`<sup>Optional</sup> <a name="controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements.property.controls"></a>

```java
public java.lang.Object getControls();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>>

controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#controls ComplianceCustomFramework#controls}

---

### ComplianceCustomFrameworkRequirementsControls <a name="ComplianceCustomFrameworkRequirementsControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFrameworkRequirementsControls;

ComplianceCustomFrameworkRequirementsControls.builder()
    .name(java.lang.String)
    .rulesId(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name">name</a></code> | <code>java.lang.String</code> | The name of the control. String length must be at least 1. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId">rulesId</a></code> | <code>java.util.List<java.lang.String></code> | The set of rules IDs for the control. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the control. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#name ComplianceCustomFramework#name}

---

##### `rulesId`<sup>Required</sup> <a name="rulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls.property.rulesId"></a>

```java
public java.util.List<java.lang.String> getRulesId();
```

- *Type:* java.util.List<java.lang.String>

The set of rules IDs for the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.68.0/docs/resources/compliance_custom_framework#rules_id ComplianceCustomFramework#rules_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceCustomFrameworkRequirementsControlsList <a name="ComplianceCustomFrameworkRequirementsControlsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFrameworkRequirementsControlsList;

new ComplianceCustomFrameworkRequirementsControlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get"></a>

```java
public ComplianceCustomFrameworkRequirementsControlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>>

---


### ComplianceCustomFrameworkRequirementsControlsOutputReference <a name="ComplianceCustomFrameworkRequirementsControlsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFrameworkRequirementsControlsOutputReference;

new ComplianceCustomFrameworkRequirementsControlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput">rulesIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId">rulesId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rulesIdInput`<sup>Optional</sup> <a name="rulesIdInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesIdInput"></a>

```java
public java.util.List<java.lang.String> getRulesIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rulesId`<sup>Required</sup> <a name="rulesId" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.rulesId"></a>

```java
public java.util.List<java.lang.String> getRulesId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>

---


### ComplianceCustomFrameworkRequirementsList <a name="ComplianceCustomFrameworkRequirementsList" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFrameworkRequirementsList;

new ComplianceCustomFrameworkRequirementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get"></a>

```java
public ComplianceCustomFrameworkRequirementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>>

---


### ComplianceCustomFrameworkRequirementsOutputReference <a name="ComplianceCustomFrameworkRequirementsOutputReference" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.datadog.compliance_custom_framework.ComplianceCustomFrameworkRequirementsOutputReference;

new ComplianceCustomFrameworkRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls">putControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls">resetControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControls` <a name="putControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls"></a>

```java
public void putControls(IResolvable OR java.util.List<ComplianceCustomFrameworkRequirementsControls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.putControls.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>>

---

##### `resetControls` <a name="resetControls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.resetControls"></a>

```java
public void resetControls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput">controlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controls"></a>

```java
public ComplianceCustomFrameworkRequirementsControlsList getControls();
```

- *Type:* <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControlsList">ComplianceCustomFrameworkRequirementsControlsList</a>

---

##### `controlsInput`<sup>Optional</sup> <a name="controlsInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.controlsInput"></a>

```java
public java.lang.Object getControlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsControls">ComplianceCustomFrameworkRequirementsControls</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-datadog.complianceCustomFramework.ComplianceCustomFrameworkRequirements">ComplianceCustomFrameworkRequirements</a>

---



